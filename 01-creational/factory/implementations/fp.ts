import { NotificationService } from "../types";

const createEmailService = (): NotificationService => ({
    send: (to, message) => console.log(`Email to ${to}: ${message}`),
});

const createSmsService = (): NotificationService => ({
    send: (to, message) => console.log(`SMS to ${to}: ${message}`),
});

const createNotifier = (createService: () => NotificationService) => ({
    notify(to: string, message: string) {
        const service = createService();
        service.send(to, message);
    },
});

export const EmailNotifier = createNotifier(createEmailService);
export const SmsNotifier = createNotifier(createSmsService);