## Adapter

The **Adapter** pattern allows you to make incompatible interfaces work together by acting as a translator between a **client** and an **existing service**.  
It is especially useful when you consume third‑party APIs or legacy code that you can't change, but you still want to keep a clean and consistent model in the application.

In modern frontend and backend applications, adapters are very common when normalizing API responses: for example, when an API returns `snake_case` fields (like `first_name`) but your domain or UI uses `camelCase` fields (like `firstName`).

In the examples provided, the Adapter is demonstrated using a **user formatter** that transform an mock api response from `snake_case` to `camelCase`.

For more information about the Adapter pattern, you can check the  
[Refactoring Guru article](https://refactoring.guru/design-patterns/adapter)
