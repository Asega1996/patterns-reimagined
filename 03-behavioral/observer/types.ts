export type Message = {
    id: string;
    sender: string;
    content: string;
    timestamp: Date;
};

export interface Observer {
    id: string;
    name: string;
    update(message: Message): void;
}

export interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observerId: string): void;
    sendMessage(sender: string, content: string): void;
    getObserversCount(): number;
}

