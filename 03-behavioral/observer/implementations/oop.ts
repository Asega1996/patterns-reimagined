import { Observer, Subject, Message } from "../types";

export class ChatUser implements Observer {
    public id: string;
    public name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    update(message: Message): void {
        if (message.sender !== this.name) {
            console.log(`[${this.name}] ${message.sender}: ${message.content}`);
        }
    }
}

export class ChatRoom implements Subject {
    private observers: Map<string, Observer> = new Map();
    private messageIdCounter: number = 0;

    subscribe(observer: Observer): void {
        this.observers.set(observer.id, observer);
        console.log(`${observer.name} joined the chat. Connected users: ${this.observers.size}`);
    }

    unsubscribe(observerId: string): void {
        const observer = this.observers.get(observerId);
        const removed = this.observers.delete(observerId);
        if (removed && observer) {
            console.log(`${observer.name} left the chat. Connected users: ${this.observers.size}`);
        }
    }

    sendMessage(sender: string, content: string): void {
        const message: Message = {
            id: `msg-${++this.messageIdCounter}`,
            sender,
            content,
            timestamp: new Date(),
        };

        console.log(`\n${sender} sent a message to ${this.observers.size} user(s):`);
        this.observers.forEach((observer) => {
            observer.update(message);
        });
    }

    getObserversCount(): number {
        return this.observers.size;
    }
}

