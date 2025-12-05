import { Logger } from "../types";

export const createConsoleLogger = (): Logger => ({
    log(message: string): void {
        console.log(message);
    },
});

export const withTimestamp = (logger: Logger): Logger => ({
    log(message: string): void {
        const withTs = `[${new Date().toISOString()}] ${message}`;
        logger.log(withTs);
    },
});

export const withUppercase = (logger: Logger): Logger => ({
    log(message: string): void {
        logger.log(message.toUpperCase());
    },
});
