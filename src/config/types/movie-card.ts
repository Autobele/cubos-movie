import { GenreType } from "./genres";

export type MovieCard = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};


export interface MovieDetail {
    id: number;
    title: string;
    adult: boolean;
    original_title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    runtime: number | null;
    vote_average: number;
    vote_count: number;
    genres: GenreType[];
    status: string;
    tagline: string | null;
    budget: number;
    revenue: number;
    homepage: string | null;
    imdb_id: string | null;
    popularity: number;
    original_language: string;
    video: boolean;
}