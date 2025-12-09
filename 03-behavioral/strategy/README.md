# Strategy

The **Strategy** pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

This pattern enables:

- **Algorithm selection**: Choose different algorithms at runtime
- **Code reuse**: Share common algorithm structure while varying implementation
- **Extensibility**: Add new strategies without modifying existing code
- **Separation of concerns**: Isolate algorithm logic from business logic

### Modern usage in frontend & functional programming

The Strategy pattern is widely used in modern web development:

- **Validation**: Different validation rules (email, phone, password strength)
- **Formatting**: Date, currency, number formatting based on locale
- **Payment methods**: Credit card, PayPal, bank transfer processing
- **Sorting algorithms**: Different sorting criteria (by date, price, name)
- **Search strategies**: Linear search, binary search, fuzzy search
- **Compression**: Different compression algorithms (ZIP, RAR, 7Z)
- **Caching strategies**: LRU, FIFO, LFU cache eviction policies
- **Rendering strategies**: Server-side, client-side, or hybrid rendering

### Example used in this folder

The example demonstrates a **Date Formatting System** that supports three main conventions:

- `EuropeanDateFormatterStrategy` → Formats dates as DD/MM/YYYY (e.g., 15/03/2024)
- `AmericanDateFormatterStrategy` → Formats dates as MM/DD/YYYY (e.g., 03/15/2024)
- `ISODateFormatterStrategy` → Formats dates as YYYY-MM-DD (e.g., 2024-03-15)

The `DateFormatterContext` can switch between different formatting strategies at runtime, making it easy to support internationalization and different user preferences.

For more information about the Strategy pattern, you can check the  
[Refactoring Guru article](https://refactoring.guru/design-patterns/strategy)
