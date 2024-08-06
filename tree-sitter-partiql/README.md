# tree-sitter-partiql

## Introduction

### Overview
This package includes [PartiQL](https://partiql.org/) grammar for tree-sitter to generate a parser.
### What is Tree-sitter?
[Tree-sitter](https://tree-sitter.github.io/tree-sitter/) is a parser generator tool and an incremental parsing library. It can build a concrete syntax tree for a source file and efficiently update the syntax tree as the source file is edited. 

## Getting Started
### Prerequisites
- Node.js and NPM

### Installation
#### Step-by-Step Installation**:
1. Install the dependencies via npm:
    ```bash
    npm install
    ```
2. Generate the PartiQL parser:
    ```bash
    tree-sitter generate
    ```

## Package Structure
### Grammar Definition
  The PartiQL grammar is defined in the `grammar.js` file. This is where you can find all the syntax rules and predefined tokens used for PartiQL.
### Tests
  The default tests are located in `test/corpus/statements.txt`. These tests help ensure that the grammar correctly parses various PartiQL statements and expressions as expected.

## Building the Project
### WebAssembly Binary
- Build the WebAssembly (WASM) binary:
  ```bash
  tree-sitter build --wasm
  ```

## Usage
### Running Tests
- Pre-written tests for tree-sitter-partiql are stored in test/corpus/statements.txt.
- Run the tests and validate the syntax definitions:
  ```bash
  tree-sitter test
  ```
### Using the Playground
- Prerequisite: Ensure the WebAssembly (WASM) binary is built before using the playground. 
- Use the Tree-sitter playground to test grammars interactively. This tool helps visualize how your grammar parses the code. To launch the playground, run:
    ```bash
    tree-sitter playground
    ```


