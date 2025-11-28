import type { Logger as LoggerType } from "../types.js";

export class Logger implements LoggerType {
    private static instance: Logger | null = null;

    private constructor() { }

    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(msg: string) {
        console.log(`[Logger] ${msg}`);
    }
}