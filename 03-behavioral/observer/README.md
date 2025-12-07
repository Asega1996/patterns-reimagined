# Observer

The **Observer** pattern defines a one-to-many dependency between objects so that when one object (subject) changes state, all its dependents (observers) are notified and updated automatically.

This pattern provides a loose coupling between the subject and its observers, enabling:

- **Event-driven architecture**: Decouple event producers from consumers
- **Reactive programming**: Build systems that react to state changes
- **Notification systems**: Notify multiple subscribers about events
- **Model-View separation**: Keep UI components synchronized with data models

### Modern usage in frontend & functional programming

The Observer pattern is fundamental in modern web development:

- **React**: Component re-renders when state/props change (React is essentially an observer system)
- **State Management**: Redux subscribers, Zustand listeners, MobX observers
- **Event Systems**: DOM events, CustomEvent API, EventEmitter patterns
- **Web APIs**: IntersectionObserver, MutationObserver, PerformanceObserver
- **RxJS**: Observable streams and reactive programming
- **WebSockets**: Real-time notifications and updates
- **Microservices**: Event-driven architecture with message queues

### Example used in this folder

The example demonstrates a **Real-time Messaging System** (chat room) commonly used in modern applications:

- `ChatRoom` → Manages connected users and broadcasts messages
- `ChatUser` → Represents a user connected to the chat
- When a user sends a message, all other connected users receive it automatically

This pattern is the foundation of real-time communication systems like:

- Chat applications (WhatsApp, Slack, Discord)
- Live collaboration tools
- Multiplayer game systems
- Real-time dashboards

For more information about the Observer pattern, you can check the  
[Refactoring Guru article](https://refactoring.guru/design-patterns/observer)
