import type { Logger } from "../types.js";

const createLogger = (): Logger => {
    return {
        log(msg: string) {
            console.log(`[Logger] ${msg}`);
        }
    };
};

export const logger = createLogger();