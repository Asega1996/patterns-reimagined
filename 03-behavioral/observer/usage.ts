// Using OOP Chat Room
import { ChatRoom, ChatUser } from "./implementations/oop";

const chatRoom = new ChatRoom();

const alejandroOop = new ChatUser('user-1', 'Alejandro');
const segoviaOop = new ChatUser('user-2', 'Segovia');
const gallardoOop = new ChatUser('user-3', 'Gallardo');

console.log(`Connected users: ${chatRoom.getObserversCount()}`);

chatRoom.subscribe(alejandroOop);
chatRoom.subscribe(segoviaOop);
chatRoom.subscribe(gallardoOop);

chatRoom.sendMessage('Alejandro', 'This is a dummy message to everyone');
chatRoom.sendMessage('Segovia', 'This is a second dummy message');

chatRoom.unsubscribe('user-3');

console.log(`Connected users: ${chatRoom.getObserversCount()}`);


// Using FP Chat Room
import {
    createChatRoom,
    subscribe,
    unsubscribe,
    sendMessage,
    getObserversCount,
    createChatUser,
} from "./implementations/fp";

let fpChatRoom = createChatRoom();

const alejandroFp = createChatUser('user-1', 'Alejandro');
const segoviaFp = createChatUser('user-2', 'Segovia');
const gallardoFp = createChatUser('user-3', 'Gallardo');

console.log(`Connected users: ${getObserversCount(fpChatRoom)}`);

fpChatRoom = subscribe(fpChatRoom, alejandroFp);
fpChatRoom = subscribe(fpChatRoom, segoviaFp);
fpChatRoom = subscribe(fpChatRoom, gallardoFp);

fpChatRoom = sendMessage(fpChatRoom, 'Alejandro', 'This is a dummy message to everyone');
fpChatRoom = sendMessage(fpChatRoom, 'Segovia', 'This is a second dummy message');

fpChatRoom = unsubscribe(fpChatRoom, 'user-3');

console.log(`Connected users: ${getObserversCount(fpChatRoom)}`);

