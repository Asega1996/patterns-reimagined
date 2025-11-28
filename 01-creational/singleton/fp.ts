const createLogger = () => {
    return {
        log(msg: string) {
            console.log(`[Logger] ${msg}`);
        }
    };
};

export const logger = createLogger();