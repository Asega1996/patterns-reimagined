# Patterns Reimagined

**Patterns Reimagined** is a repository that reinterprets classic design patterns, comparing their traditional object-oriented implementations with modern alternatives based on functional programming, TypeScript, and contemporary frontend development practices.

The goal is to understand how these patterns evolve in a modern ecosystem—often becoming simpler, more expressive, or even unnecessary thanks to modules, pure functions, reactive programming, and modern architecture patterns.

## Project Structure

The repository is organized by pattern categories:

- **Creational Patterns**

  - [Singleton](./01-creational/singleton/README.md)
  - [Factory](./01-creational/factory/README.md)
  - [Builder](./01-creational/builder/README.md)

- **Structural Patterns**

  - [Adapter](./02-structural/adapter/README.md)
  - [Composite](./02-structural/composite/README.md)
  - [Decorator](./02-structural/decorator/README.md)

- **Behavioral Patterns**
  - [Command](./03-behavioral/command/README.md)
  - [Strategy](./03-behavioral/strategy/README.md)
  - [Observer](./03-behavioral/observer/README.md)

Each folder contains:

- `oop.ts` → Object-oriented implementation
- `fp.ts` → Functional implementation
- `usage.ts` → Example usage
- `README.md` → Pattern description and explanations

## How to Use

1. Navigate to any pattern folder.
2. Read the `README.md` for the explanation and motivation.
3. Explore `oop.ts` and `fp.ts` to see the two different implementations.
4. Run `usage.ts` examples to see the patterns in action.

## References

For more information about design patterns, you can check:  
[Refactoring Guru — Design Patterns](https://refactoring.guru/design-patterns)

In addition, this repository is an idea implemented after completing CodeSignal's [Mastering Design Patterns in TypeScript](https://codesignal.com/learn/paths/mastering-design-patterns-in-typescript) path.
