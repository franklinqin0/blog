# FAQ

### Concurrency and Parallelism

| Parallel programming   | Execute programs faster on parallel hardware   |
| :--------------------- | :--------------------------------------------- |
| Concurrent programming | Manage concurrent execution threads explicitly |

non-determinism = parallel processing + mutable state

to avoid mutable state, use functional programming!

### Literals

a notation for representing a **fixed value in source code**. Almost all programming languages have notations for atomic values such as _integers_, _floating-point numbers_, and _strings_, and usually for _booleans_ and _characters_; some also have notations for elements of enumerated types and compound values such as _arrays_, _records_, and _objects_. An _anonymous function_ is a literal for the _function type_.

### Macro vs. Function

| \                          | Macro                                  | Function                         |
| :------------------------- | :------------------------------------- | :------------------------------- |
| Compilation                | preprocessed function                  | compiled                         |
| Type Checking              | No                                     | Yes                              |
| Code Length                | increases                              | unaffected                       |
| Side Effects               | can happen at later stages             | none in any case                 |
| Speed of Execution         | faster                                 | Slower                           |
| Name replaced by Value     | before compilation                     | during function call             |
| Useful?                    | when small code is repeated many times | when large code is to be written |
| Checks Compile-Time Errors | No                                     | Yes                              |

https://www.quickprogrammingtips.com/mongodb/mongodb-history.html
