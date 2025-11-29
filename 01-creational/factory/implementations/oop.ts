import { NotificationService } from "../types";

class EmailService implements NotificationService {
    send(to: string, message: string) {
        console.log(`Email to ${to}: ${message}`);
    }
}

class SmsService implements NotificationService {
    send(to: string, message: string) {
        console.log(`SMS to ${to}: ${message}`);
    }
}

abstract class Notifier {
    abstract createService(): NotificationService;

    notify(to: string, message: string) {
        const service = this.createService();
        service.send(to, message);
    }
}

export class EmailNotifier extends Notifier {
    createService() {
        return new EmailService();
    }
}

export class SmsNotifier extends Notifier {
    createService() {
        return new SmsService();
    }
}