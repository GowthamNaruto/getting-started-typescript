# Typescript - Getting started

## Description

It is a comprehensive introduction to the basic concepts and methods of TypeScript implementation, covering everything from types and interfaces to classes and modules.

## Topics Covers

- **TypeScript Overviews:**
- **Environmental Setup**
- **Executing TypeScript Code**
- **Catching errors with TypeScript**
- **Types**
- **Type Annotations with Variables**
- **Object Literal Annotations**
- **Annotations Around Functions**
- **The Any Type**
- **Destructuring with functions**
- **Annotations Around Objects**
- **Arrays in TypeScript**
- **Typed Arrays**
- **Tuples in TypeScript**
- **Interfaces**
- **Long Type Annotations**
- **Functions in Interfaces**
- **Classes**
- **Class Method Modifiers**
- **Fields in Classes**
- **Type Definintion Files**
- **Export Statements in TypeScript**

### TypeScript Overviews

So what is TypeScript? TypeScript is more like Javascript hence all variables syntax and functions apply to this as well. The only thing that we’re really doing with TypeScript is adding a little bit of additional syntax to our code to handle something called a **The Type System**. This is what TypeScript is all about. And Typescript Code is a JavaScript with type annotations..
<br />
<br />**TypeScript = JavaScript + The Type System**

#### The TS Type System

The goal of the Type System are all follows.

- Helps us catch errors during development
- Uses 'type annotations' to analyze our code
- Only active during development
- Doesn't provide any performance optimization

## Environmental setup

Install the TypeScript compiler. It's an one time setup!

```bash
npm install -g typescript ts-node
```

Make sure that it is successfully installed by running

```bash
tsc --help
tsc --version
```

To run a TypeScript file

```bash
ts-node index.ts
```

### Type

A type is an easy way to refer to the different properties and functions that a value has. In JavaScript and TypeScript, a value can be anything that we can assign to a variable, such as strings, numbers, booleans, null, undefined, objects, functions, classes, arrays, and more. There are two major types:

#### Primitive Types

- Number, boolean, void, undefined, sting, symbol and null

#### Object Types

- functions, arrays, classes and objects

#### Why do we care about Types?

- Types are used by the TypeScript Compiler to analyze our code for errors.
- Types allow other engineers to understand what values are flowing around our codebase.

#### Points

- **Introduction to TypeScript:** Consider providing a brief introductory statement about the importance of TypeScript and its growing popularity in the development community. Emphasize its role in building robust and scalable applications.

- **Real-world Examples:** Throughout the document, consider adding real-world examples or scenarios where TypeScript's type system helps catch errors and enhances code quality.

- **Benefits of TypeScript:** In the overview section, highlight the key benefits of using TypeScript, such as enhanced code

#### Type Annotations

Code we add to specify the types of values a variable will hold in TypeScript.

#### Type Interface

TypeScript endeavors to infer the type of value associated with a variable.

#### Tuple

An array-like structure where each element represents a specific property of a record.

#### Interfaces

They allow us to define a new type, describing the property names and corresponding value types of an object.

A general strategy for reusable code in TypeScript

- Create functions that accept arguments that are typed with interfaces.
- Objects/classes can decide to ‘implement’ a given interface to work with a function.

### Classes

Blueprint to create an object with some fields (values) and methods (functions) to represent a ‘thing’.

1. Define a set of fields (values) and methods (functions) to represent a ‘thing’
2. Define a set of fields (values) and methods (functions) to represent a ‘thing’

#### Class method modifiers

1. **Public** - This method can be called anywhere, at any time.
2. **Private** - This method can only be called by other methods in this class.
3. **Protected** - This method can be called by other methods in this class, or by other methods in child classes.

```bash
npx parcel index.html
```

**parseFloat** - It takes a string and returns a number that has a decimal value attached to it.

#### Difficulty in Error Handling, - Sec-7

1. We must have a consistently structured response from all servers, no matter what goes wrong.

- Solution - Write an error-handling middleware to process errors, give them a consistent structure, and send them back to the browser.

2. A billion things can go wrong, not just the validation of inputs to a request handler. Each of these needs to be handled consistently.

- Solution - Make sure we capture all possible errors using Express’s error handling mechanism (call the ‘next’ function!).

3. Express error handling official documentation - https://expressjs.com/en/guide/error-handling.html

### Abstract classes

- An abstract class is like a class, but it cannot be directly instantiated.
- Used to set up requirements for subclasses.
- To create a Class when translated to JS, which means we can use it in **_‘instanceof’_** checks.
