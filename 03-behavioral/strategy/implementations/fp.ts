import { DateFormatterStrategy } from "../types";

export const europeanDateFormatter: DateFormatterStrategy = {
    getLocale: () => "european",
    format: (date: Date) => {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
};

export const americanDateFormatter: DateFormatterStrategy = {
    getLocale: () => "american",
    format: (date: Date) => {
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    },
};

export const isoDateFormatter: DateFormatterStrategy = {
    getLocale: () => "iso",
    format: (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}/${month}/${day}`;
    },
};

export const formatDate = (
    date: Date,
    strategy: DateFormatterStrategy
): string => strategy.format(date);