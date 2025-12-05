## Decorator

The **Decorator** pattern allows you to extend or modify the behavior of an object **without changing its original code**.  
Instead of using inheritance, Decorator uses **object composition**: a decorator wraps another object that follows the same interface, adding new behavior before or after delegating calls.

This makes the pattern ideal when features need to be:

- Optional
- Combinable
- Apply-on-demand
- Stackable in different orders

### Modern usage in frontend & functional programming

Even if rarely called **decorator**, this pattern appears in many modern frontend architectures:

- **React Higher-Order Components (HOCs)**: `withAuth(Component)`, `withTheme(Component)`
- **Express / Next.js Middlewares**
- **Redux or Zustand middlewares** (logger, persist, devtools)
- **Functional pipelines** that wrap behavior step by step
- **TypeScript class decorators**

These are all real-world applications of Decorator.

### Example used in this folder

The example demonstrates a **base logger** wrapped by multiple decorators that add behavior:

- `TimestampDecorator` → prepends a timestamp
- `UppercaseDecorator` → converts messages to uppercase

For more information about the Decorator pattern, you can check the  
[Refactoring Guru article](https://refactoring.guru/design-patterns/decorator)
