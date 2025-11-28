export class Logger {
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