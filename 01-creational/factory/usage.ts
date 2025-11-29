// Using OOP Factory
import { EmailNotifier, SmsNotifier } from "./implementations/oop.js";

const oopEmailNotifier = new EmailNotifier();
oopEmailNotifier.notify("asega1996@gmail.com", "Hello, this is an email notification.");

const oopSmsNotifier = new SmsNotifier();
oopSmsNotifier.notify("+34 608 842 850", "Hello, this is an SMS notification.");


// Using FP Factory
import { EmailNotifier as FpEmailNotifier, SmsNotifier as FpSmsNotifier } from "./implementations/fp.js";

FpEmailNotifier.notify("asega1996@gmail.com", "Hello, this is an email notification.");
FpSmsNotifier.notify("+34 608 842 850", "Hello, this is an SMS notification.");