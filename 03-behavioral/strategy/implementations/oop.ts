import { DateFormatterStrategy, DateFormatter } from "../types";

export class EuropeanDateFormatterStrategy implements DateFormatterStrategy {
    format(date: Date): string {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    getLocale(): string {
        return 'european';
    }
}

export class AmericanDateFormatterStrategy implements DateFormatterStrategy {
    format(date: Date): string {
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }

    getLocale(): string {
        return 'american';
    }
}

export class ISODateFormatterStrategy implements DateFormatterStrategy {
    format(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    }

    getLocale(): string {
        return 'iso';
    }
}

export class DateFormatterContext implements DateFormatter {
    private strategy: DateFormatterStrategy | null = null;

    setStrategy(strategy: DateFormatterStrategy): void {
        this.strategy = strategy;
    }

    format(date: Date): string {
        if (this.strategy === null) {
            throw new Error('No date formatting strategy has been set');
        }
        return this.strategy.format(date);
    }

    getCurrentStrategy(): DateFormatterStrategy | null {
        return this.strategy;
    }
}

