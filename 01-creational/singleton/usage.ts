// Using OOP Singleton
import { Logger as SingletonLogger } from "./implementations/oop.js";

const oopLogger = SingletonLogger.getInstance();
oopLogger.log("This is a log message from singleton logger.");

// Using FP Singleton
import { logger as fpLogger } from "./implementations/fp.js";
fpLogger.log("This is a log message from the functional logger.");