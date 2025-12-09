// Using OOP Date Formatter
import {
    DateFormatterContext,
    EuropeanDateFormatterStrategy,
    AmericanDateFormatterStrategy,
    ISODateFormatterStrategy,
} from "./implementations/oop";

const dateFormatterOop = new DateFormatterContext();
const testDate = new Date(2024, 2, 15);

const europeanStrategy = new EuropeanDateFormatterStrategy();
dateFormatterOop.setStrategy(europeanStrategy);
console.log(`European format: ${dateFormatterOop.format(testDate)}`);

const americanStrategy = new AmericanDateFormatterStrategy();
dateFormatterOop.setStrategy(americanStrategy);
console.log(`American format: ${dateFormatterOop.format(testDate)}`);

const isoStrategy = new ISODateFormatterStrategy();
dateFormatterOop.setStrategy(isoStrategy);
console.log(`ISO format: ${dateFormatterOop.format(testDate)}`);


// Using FP Date Formatter
import {
    europeanDateFormatter,
    americanDateFormatter,
    isoDateFormatter,
    formatDate,
} from "./implementations/fp";

const testDateFp = new Date(2024, 2, 15);

console.log(`European format: ${formatDate(testDateFp, europeanDateFormatter)}`);

console.log(`American format: ${formatDate(testDateFp, americanDateFormatter)}`);

console.log(`ISO format: ${formatDate(testDateFp, isoDateFormatter)}`);

