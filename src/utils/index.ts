export function formatRunTimeMinutes(minutes: number | null): string {
    if (!minutes || minutes <= 0) return "—";
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m}m`;
}

export function formatDatePTBR(date: string | null): string {
    if (!date) return "—";
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
}

export function formatToCurrencyUSD(valor: number) {
    let formatted: string;
    if (valor >= 1_000_000) {
        formatted = `$${(valor / 1_000_000).toFixed(2)}M`;
    } else if (valor >= 1_000) {
        formatted = `$${(valor / 1_000).toFixed(1)}K`;
    } else {
        formatted = `$${valor}`;
    }
    return formatted;
}

export const genreMap: Record<string, number> = {
    "Ação": 28,
    "Comédia": 35,
    "Drama": 18,
    "Terror": 27,
    "Romance": 10749,
    "Ficção científica": 878,
    "Animação": 16,
    "Suspense": 53,
    "Documentário": 99,
    "Fantasia": 14,
    "Aventura": 12,
    "Crime": 80,
    "Mistério": 9648,
    "Guerra": 10752,
    "Família": 10751,
    "Histórico": 36,
    "Musical": 10402,
    "TV Movie": 10770,
};

export function normalizeText(text: string) {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

export function getGenreId(userInput: string) {
    const normalizedInput = normalizeText(userInput);
    const entry = Object.entries(genreMap).find(
        ([name]) => normalizeText(name) === normalizedInput
    );
    return entry ? entry[1] : null;
}