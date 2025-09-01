"use client"
import { useEffect, useState } from "react";
import { Input } from "@/components/Input";
import { ExpandLeft, ExpandRight, Filter, SearchAltFill } from "@/icons";
import { Wallpaper } from "@/components/Wallpaper";
import { MoviesGrid } from "@/components/MoviesGrid";
import { IconToggle } from "@/components/IconToggle";
import { MovieCard } from "@/config/types/movie-card";
import { fetchAllMovies, FetchAllMoviesParams } from "@/actions/tmdb.actions";
import { useDebounce } from "@/hooks/useDebounce";
import ResponsivePaginationComponent from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchGenres, setsearchGenres] = useState('')
  const [toggle, setToggle] = useState({
    filmeName: false,
    genres: false
  })
  const [moviesList, setMoviesList] = useState<MovieCard[]>([])

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const debouncedSearchTerm = useDebounce(searchTerm, 2000)
  const debouncedsearchGenres = useDebounce(searchGenres, 2000)

  const loadMoviesList = async ({ searchTerm, searchGenres, page }: FetchAllMoviesParams) => {
    const movies = await fetchAllMovies({ searchTerm, searchGenres, page });
    if (movies?.results) {
      setTotalPages(movies.total_pages)
      setMoviesList(movies.results)
    }
  }

  useEffect(() => {
    loadMoviesList({ searchGenres })
  }, [])

  useEffect(() => {
    loadMoviesList({ searchTerm, page: currentPage })
  }, [currentPage])


  useEffect(() => {
    setCurrentPage(1)
    console.log({ debouncedSearchTerm, debouncedsearchGenres })
    loadMoviesList({ searchTerm: debouncedSearchTerm, searchGenres: debouncedsearchGenres });
  }, [debouncedSearchTerm, debouncedsearchGenres]);

  return (
    <Wallpaper src={'/assets/backgropund-krists-luhaers-unsplash.png'}>
      <div className="w-full my-[24px]">

        <div className="mb-[12px] flex items-center justify-center">
          <Input customStyles="w-[488px] sm:w-auto" placeholder="Pesquise por filmes"
            value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} icon={<>
              <SearchAltFill width={24} height={24} className="text-mauve-12/50" />
            </>} />
          <IconToggle
            className="ml-[10px]"
            active={toggle.filmeName}
            onToggle={() => setToggle((e) => ({
              ...e,
              filmeName: !e.filmeName
            }))}
            icon={<Filter width={24} height={24} className="text-mauve-12" />}
            activeIcon={<Filter width={24} height={24} className="text-mauve-12" />}
          />
        </div>

        <div className="px-4 flex items-center justify-center">
          <Input customStyles="w-[488px] sm:w-auto" placeholder="Pesquise por gêneros. Ex. ação, animação"
            value={searchGenres} onChange={(e) => setsearchGenres(e.target.value)} icon={<>
              <SearchAltFill width={24} height={24} className="text-mauve-12/50" />
            </>} />
          <IconToggle
            className="ml-[10px]"
            active={toggle.genres}
            onToggle={() => setToggle((e) => ({
              ...e,
              genres: !e.genres
            }))}
            icon={<Filter width={24} height={24} className="text-mauve-12" />}
            activeIcon={<Filter width={24} height={24} className="text-mauve-12" />}
          />
        </div>
      </div>

      {/* MOVIES LIST */}
      <MoviesGrid movies={moviesList}></MoviesGrid>

      {/* PAGINATION */}
      <div className="w-full flex items-center justify-center">
        <ResponsivePaginationComponent
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
          className="flex gap-[4px] my-[24px]"
          pageLinkClassName="w-full h-full flex items-center justify-center no-underline text-mauve-12"
          pageItemClassName="w-[64px] h-[44px] text-mauve12 flex items-center justify-center bg-purple-9 rounded-[2px]"
          activeItemClassName="opacity-50 text-mauve12 border-transparent"
          disabledItemClassName="opacity-50 pointer-events-none"
          previousLabel={
            <ExpandLeft width={24} height={24} className="text-mauve-12" />
          }
          nextLabel={
            <ExpandRight width={24} height={24} className="text-mauve-12" />
          }
          maxWidth={3}
        />
      </div>
    </Wallpaper>

  );
}
