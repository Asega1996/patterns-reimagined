import { Logger } from "../types";

export class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(message);
    }
}

abstract class LoggerDecorator implements Logger {
    constructor(protected readonly logger: Logger) { }

    log(message: string): void {
        this.logger.log(message);
    }
}

export class TimestampDecorator extends LoggerDecorator {
    log(message: string): void {
        const withTimestamp = `[${new Date().toISOString()}] ${message}`;
        super.log(withTimestamp);
    }
}

export class UppercaseDecorator extends LoggerDecorator {
    log(message: string): void {
        super.log(message.toUpperCase());
    }
}
