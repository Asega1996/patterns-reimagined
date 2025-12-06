# Command

The **Command** pattern encapsulates a request as an object, allowing you to parameterize clients with different requests, queue operations, log requests, and support undoable operations.

This pattern decouples the object that invokes the operation from the object that performs it, enabling:

- **Undo/Redo**: Save command history to reverse operations
- **Queue operations**: Execute commands asynchronously or in batches
- **Macros**: Group multiple commands into a single operation
- **Logging/Audit**: Record all executed operations
- **Transactions**: Execute multiple operations as an atomic unit

### Modern usage in frontend & functional programming

The Command pattern is widely used in modern web development:

- **State Management**: Redux actions, Zustand stores with undo/redo
- **UI Frameworks**: Button clicks, menu actions, keyboard shortcuts
- **Search & Filters**: E-commerce filter systems, search query builders
- **Form Management**: Form actions with validation and rollback
- **API Clients**: Request queuing, retry mechanisms, transaction handling

### Example used in this folder

The example demonstrates a **Search Filter System** commonly used in e-commerce and web applications:

- `ApplyFilterCommand` → Applies a filter (price, category, brand, etc.)
- `RemoveFilterCommand` → Removes a specific filter
- `ClearAllFiltersCommand` → Removes all active filters
- `FilterManager` → Handles filter commands with undo/redo support

For more information about the Command pattern, you can check the  
[Refactoring Guru article](https://refactoring.guru/design-patterns/command)
