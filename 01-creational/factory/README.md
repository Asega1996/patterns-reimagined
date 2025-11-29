# Factory

The **Factory** pattern centralizes object creation, allowing the system to instantiate different types without exposing the creation logic or depending directly on specific classes.  
Traditionally used in object-oriented systems to decouple the client from concrete implementations and avoid scattered `new` operations or complex conditional logic.

In modern functional and frontend architectures, factories often emerge naturally from higher-order functions, dependency injection, or configuration-driven service creators.  
These approaches allow the application to generate flexible, reusable, and composable objects without relying on class hierarchies.

In the examples provided, the Factory is demonstrated using a **notification service** capable of producing different message senders (Email, SMS).

For more information about the Factory pattern, you can check the  
[Refactoring Guru article](https://refactoring.guru/design-patterns/factory-method)
