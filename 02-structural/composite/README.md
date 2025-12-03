## Composite

The **Composite** pattern lets you work with **individual objects** and **groups of objects** using the **same interface**.  
It is especially useful for representing **hierarchical structures**, such as trees or nested components, where a client should not care if it is dealing with a single element or a whole subtree.

One of the most important real-world examples of Composite is the DOM (Document Object Model).
In fact, the DOM is the most widely used Composite structure in the world, present in every web page and used billions of times per day.
Each element (div, p, span, etc.) can contain other elements, forming a tree of nodes where leaves and composite nodes are treated uniformly—an exact application of the pattern.

In modern applications, Composite is common in:

- **UI component trees** (a layout contains other layouts and widgets)
- **File systems** (files and folders)
- **Permission trees** (basic permissions grouped into higher-level roles)

In the examples provided, the Composite is demonstrated using a **permission tree**, where:

- A **leaf** represents a single permission (e.g. `read:users`)
- A **composite node** represents a role that aggregates multiple permissions or roles (e.g. `admin` with all permissions)

For more information about the Composite pattern, you can check the  
[Refactoring Guru article](https://refactoring.guru/design-patterns/composite)
