import { Observer, Message } from "../types";

export type ObserverRegistry = Map<string, Observer>;

export type ChatRoom = {
    observers: ObserverRegistry;
    messageIdCounter: number;
};

export const createChatRoom = (): ChatRoom => ({
    observers: new Map(),
    messageIdCounter: 0,
});

export const subscribe = (
    chatRoom: ChatRoom,
    observer: Observer
): ChatRoom => {
    const newObservers = new Map(chatRoom.observers);
    newObservers.set(observer.id, observer);
    console.log(`${observer.name} joined the chat. Connected users: ${newObservers.size}`);
    return {
        observers: newObservers,
        messageIdCounter: chatRoom.messageIdCounter,
    };
};

export const unsubscribe = (
    chatRoom: ChatRoom,
    observerId: string
): ChatRoom => {
    const newObservers = new Map(chatRoom.observers);
    const observer = newObservers.get(observerId);
    const removed = newObservers.delete(observerId);
    if (removed && observer) {
        console.log(`${observer.name} left the chat. Connected users: ${newObservers.size}`);
    }
    return {
        observers: newObservers,
        messageIdCounter: chatRoom.messageIdCounter,
    };
};

export const sendMessage = (
    chatRoom: ChatRoom,
    sender: string,
    content: string
): ChatRoom => {
    const message: Message = {
        id: `msg-${chatRoom.messageIdCounter + 1}`,
        sender,
        content,
        timestamp: new Date(),
    };

    console.log(`\n${sender} sent a message to ${chatRoom.observers.size} user(s):`);
    chatRoom.observers.forEach((observer) => {
        observer.update(message);
    });

    return {
        observers: chatRoom.observers,
        messageIdCounter: chatRoom.messageIdCounter + 1,
    };
};

export const getObserversCount = (chatRoom: ChatRoom): number => {
    return chatRoom.observers.size;
};

export const createChatUser = (id: string, name: string): Observer => ({
    id,
    name,
    update: (message: Message) => {
        if (message.sender !== name) {
            console.log(`[${name}] ${message.sender}: ${message.content}`);
        }
    },
});

