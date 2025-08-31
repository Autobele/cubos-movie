import { GenreType } from "@/config/types/genres";
import { MovieCard, MovieDetail } from "@/config/types/movie-card";
import { TmdbVideoResponse } from "@/config/types/movie-video";
import { TMDBApiResponse } from "@/config/types/tmdb-response";
import { API_KEY, API_URL } from "@/constants";

export async function fetchAllMovies(searchTerm?: string, page: number = 1): Promise<MovieCard[]> {
    try {
        const endpoint = searchTerm
            ? `/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchTerm)}&language=pt-BR`
            : `/3/movie/popular?api_key=${API_KEY}`;

        const res = await fetch(`${API_URL}${endpoint}`);

        if (!res.ok) throw new Error("Erro ao buscar filmes");

        const data: TMDBApiResponse<MovieCard> = await res.json();
        return data.results;
    } catch (error) {
        console.error(error);
        return [];
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