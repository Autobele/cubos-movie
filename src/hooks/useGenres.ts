import { fetchGenres } from "@/actions/tmdb.actions";
import { useEffect, useState } from "react";

export type Genre = {
    id: number;
    name: string;
};

export function useGenres() {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadGenres() {
            try {
                const data = await fetchGenres()
                if (data?.genres) {
                    setGenres(data?.genres);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        loadGenres();
    }, []);

    function mapGenres(ids: number[]): string[] {
        return ids
            .map((id) => genres.find((g) => g.id === id)?.name)
            .filter(Boolean) as string[];
    }

    return { genres, loading, mapGenres };
}
