import { GenreType } from "@/config/types/genres";
import { MovieCard, MovieDetail } from "@/config/types/movie-card";
import { TmdbVideoResponse } from "@/config/types/movie-video";
import { TMDBApiResponse } from "@/config/types/tmdb-response";
import { API_KEY, API_URL } from "@/constants";
import { getGenreId } from "@/utils";

export interface FetchAllMoviesParams {
    searchTerm?: string,
    searchGenres?: string,
    page?: number
}

export async function fetchAllMovies({ searchTerm, searchGenres, page = 1 }: FetchAllMoviesParams): Promise<TMDBApiResponse<MovieCard> | null> {
    try {
        let endpoint = '';
        const genreId = searchGenres ? getGenreId(searchGenres) : null;

        if (searchTerm) {
            // Busca por texto: gênero é ignorado (limitação da API)
            endpoint = `/3/search/movie?api_key=${API_KEY}&language=pt-BR&page=${page}&query=${encodeURIComponent(searchTerm)}`;
        } else if (genreId) {
            // Busca por gênero
            endpoint = `/3/discover/movie?api_key=${API_KEY}&language=pt-BR&page=${page}&with_genres=${genreId}`;
        } else {
            // Filmes populares
            endpoint = `/3/movie/popular?api_key=${API_KEY}&page=${page}&language=pt-BR`;
        }
        const res = await fetch(`${API_URL}${endpoint}`);

        if (!res.ok) throw new Error("Erro ao buscar filmes");

        const data: TMDBApiResponse<MovieCard> = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function fetchMovieDetails(id: number): Promise<MovieDetail | null> {
    try {
        const res = await fetch(
            `${API_URL}/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`
        );

        if (!res.ok) throw new Error("Não foi possível recuperar detalhes do video");

        const data: MovieDetail = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function fetchGenres(): Promise<{ genres: GenreType[] } | null> {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`
        );

        if (!res.ok) throw new Error("Não foi possível buscar os generos");

        const data: { genres: GenreType[] } = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function fetchMovieVideos(id: number): Promise<TmdbVideoResponse | null> {
    try {
        const res = await fetch(
            `${API_URL}/3/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`
        );

        if (!res.ok) throw new Error("Não foi possível buscar os videos do filme");

        const data: TmdbVideoResponse = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}