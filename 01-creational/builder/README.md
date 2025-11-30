# Builder

The **Builder** pattern allows you to construct complex objects step by step, providing a flexible way to create different representations of the same object.  
Traditionally used in object-oriented systems to avoid constructors with many parameters and to enable the construction of objects with optional or varying configurations.

In modern functional and frontend architectures, builders often emerge naturally from function composition, fluent interfaces, or configuration objects that are built incrementally through method chaining or object spreading.

In the examples provided, the Builder is demonstrated using an **HTTP request builder** system capable of constructing HTTP requests step by step (method, URL, headers, body, query parameters, timeout, etc.).

For more information about the Builder pattern, you can check the  
[Refactoring Guru article](https://refactoring.guru/design-patterns/builder)
