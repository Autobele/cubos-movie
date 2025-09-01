import { MovieDetail } from '@/config/types/movie-card';
import { fetchMovieDetails, fetchMovieVideos } from '@/actions/tmdb.actions';
import { Wallpaper } from '@/components/Wallpaper';
import { InfoCard } from '@/components/InfoCard';
import { formatToCurrencyUSD, formatDatePTBR, formatRunTimeMinutes } from '@/utils';
import { TmdbVideoResponse } from '@/config/types/movie-video';
import { CircularRating } from '@/components/CircularRating';
import { useGenres } from '@/hooks/useGenres';


interface MovieDetailPageProps {
    params: { id: string };
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
    const id = Number(params?.id);
    if (isNaN(id)) return <div>ID inválido</div>;

    const movie: MovieDetail | null = await fetchMovieDetails(id);
    const movieVideo: TmdbVideoResponse | null = await fetchMovieVideos(id)

    // const movie: MovieDetail | null = movieDetailTMDB;
    if (!movie) return <div>Filme não encontrado</div>;

    return (
        <Wallpaper src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE}/original${movie.backdrop_path}`}>
            <div className="flex-responsive flex max-w-[1368px] mx-auto p-[32px] gap-[32px]">
                <div className=''>
                    <div className='w-full flex justify-center'>
                        <img
                            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE}/w500${movie.poster_path}`}
                            alt={movie.title}
                            width={354}
                            height={542}
                            className="my-4 rounded-lg"
                        />
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className="flex-responsive justify-between">
                        <div>
                            <h1 className="text-[32px] font-bold m-[0px]">{movie.title}</h1>
                            {movie.original_title && (
                                <p className='text-mauve-11 m-[0px]'>Titulo Original: {movie.original_title}</p>
                            )}
                        </div>
                        <div className="flex items-center my-[8px] gap-[8px]">
                            <InfoCard
                                title='POPULARIDADE'
                                className='h-fit'
                            >
                                <span className='font-extralight'>{movie.popularity}</span>
                            </InfoCard>
                            <InfoCard
                                title='VOTOS'
                                className='h-fit'
                            >
                                <span className='font-extralight'>{movie.vote_count}</span>
                            </InfoCard>
                            <CircularRating rating={movie?.vote_average && Math.round(movie?.vote_average * 10)} size={98} strokeWidth={4} />
                        </div>
                    </div>
                    <section className="flex-responsive w-full flex justify-between gap-[32px] ">
                        <article className=' flex flex-col gap-[8px] mr-[16px]'>
                            <InfoCard
                                title='SINOPSE'
                            >
                                <p className='text-mauve-12 font-extralight'>{movie.overview}</p>
                            </InfoCard>

                            <InfoCard
                                title='Generos'
                            >
                                <div className='flex gap-[8px]'>
                                    {movie?.genres?.map((m) => {
                                        return (
                                            <div className='bg-[#C150FF2E] p-[8px]'>
                                                {m.name}
                                            </div>
                                        )
                                    })}
                                </div>
                            </InfoCard>
                        </article>
                        <article className='flex flex-col gap-[8px]'>
                            <div className="flex justify-between gap-[8px]">
                                <InfoCard
                                    className='w-full'
                                    title='LANÇAMENTO'
                                >
                                    <span className='font-extralight'>{movie.release_date ? formatDatePTBR(movie.release_date) : '-'}</span>
                                </InfoCard>
                                <InfoCard
                                    title='DURAÇÃO'
                                >
                                    <span className='font-extralight'>{movie.runtime ? formatRunTimeMinutes(movie.runtime) : '-'}</span>
                                </InfoCard>
                            </div>
                            <div className="flex justify-between gap-[8px]">
                                <InfoCard
                                    className='w-full'
                                    title='SITUAÇÃO'
                                >
                                    <span className='font-extralight'>{movie?.status || '-'}</span>
                                </InfoCard>
                                <InfoCard
                                    title='IDIOMA'
                                >
                                    <span className='font-extralight'>{movie?.original_language.toUpperCase() || '-'}</span>
                                </InfoCard>
                            </div>
                            <div className="flex justify-between gap-[8px]">
                                <InfoCard
                                    className='w-full'
                                    title='ORÇAMENTO'
                                >
                                    <span className='font-extralight'>{formatToCurrencyUSD(movie?.budget) || '-'}</span>
                                </InfoCard>
                                <InfoCard
                                    title='RECEITA'
                                >
                                    <span className='font-extralight'>{formatToCurrencyUSD(movie?.revenue) || '-'}</span>
                                </InfoCard>
                                <InfoCard
                                    title='LUCRO'
                                >
                                    <span className='font-extralight'>{formatToCurrencyUSD(movie?.revenue - movie?.budget) || '-'}</span>
                                </InfoCard>
                            </div>
                        </article>

                    </section>
                </div>
            </div>
            {movieVideo?.results[0]?.key && (
                <div className="flex flex-col max-w-[1368px] mx-auto p-[32px] gap-[32px]">
                    <h1 className="text-[32px] font-bold m-[0px]">Trailer</h1>
                    <iframe
                        width="100%"
                        height="647"
                        src={`https://www.youtube.com/embed/${movieVideo?.results[0].key}`}
                        title="Official Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                    </iframe>
                </div>
            )}

        </Wallpaper>

    );
}
