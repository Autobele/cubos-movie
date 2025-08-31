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