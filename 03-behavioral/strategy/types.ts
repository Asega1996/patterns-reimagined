export interface DateFormatterStrategy {
    format(date: Date): string;
    getLocale(): string;
}

export interface DateFormatter {
    setStrategy(strategy: DateFormatterStrategy): void;
    format(date: Date): string;
    getCurrentStrategy(): DateFormatterStrategy | null;
}