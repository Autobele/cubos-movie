"use client"
import { useEffect, useState } from "react";
import { Input } from "@/components/Input";
import { Filter, SearchAltFill } from "@/icons";
import { Wallpaper } from "@/components/Wallpaper";
import { MoviesGrid } from "@/components/MoviesGrid";
import { IconToggle } from "@/components/IconToggle";
import { MovieCard } from "@/config/types/movie-card";
import { fetchAllMovies, fetchGenres } from "@/actions/tmdb.actions";
import { useDebounce } from "@/hooks/useDebounce";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [toggle, setToggle] = useState(false)
  const [moviesList, setMoviesList] = useState<MovieCard[]>([])

  const debouncedSearchTerm = useDebounce(searchTerm, 2000)


  useEffect(() => {
    const loadMoviesList = async () => {
      const movies = await fetchAllMovies()
      setMoviesList(movies)
    }
    loadMoviesList()
  }, [])


  useEffect(() => {
    const loadMoviesList = async () => {
      const movies = await fetchAllMovies(debouncedSearchTerm);
      setMoviesList(movies);
    }

    loadMoviesList();
  }, [debouncedSearchTerm]);

  return (
    <Wallpaper src={'/assets/backgropund-krists-luhaers-unsplash.png'}>
      <div className="w-full my-[24px]">
        <div className="px-4 flex items-center justify-center">
          <Input customStyles="w-[488px] sm:w-auto" placeholder="Input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} icon={<>
            <SearchAltFill width={24} height={24} className="text-mauve1-opaque" />
          </>} />
          <IconToggle
            className="ml-[10px]"
            active={toggle}
            onToggle={() => setToggle(e => !e)}
            icon={<Filter width={24} height={24} className="text-mauve1-opaque" />}
            activeIcon={<Filter width={24} height={24} className="text-purple-9" />}
          />
        </div>
      </div>
      <MoviesGrid movies={moviesList}></MoviesGrid>
    </Wallpaper>

  );
}
