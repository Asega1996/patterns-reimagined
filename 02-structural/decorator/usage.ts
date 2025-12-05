// OOP Decorator
import { ConsoleLogger, TimestampDecorator, UppercaseDecorator } from "./implementations/oop";

const baseOopLogger = new ConsoleLogger();
const timestampedOopLogger = new TimestampDecorator(baseOopLogger);
const decoratedOopLogger = new UppercaseDecorator(timestampedOopLogger);

decoratedOopLogger.log("Decorated message from OOP");

// FP Decorator
import { createConsoleLogger, withTimestamp, withUppercase } from "./implementations/fp";

const baseFpLogger = createConsoleLogger();
const decoratedFpLogger = withUppercase(withTimestamp(baseFpLogger));

decoratedFpLogger.log("Decorated message from FP");

