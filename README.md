# DNA Mutations #

**Instructions:** Please use the computer and write a representation of the following system in code. Please think aloud and don't hesitate to ask questions. The language isn't important and the code doesn't have to compile. This task is supposed to test your ability to analyse an abstract problem, transform it into a product and your ability to write a clean and readable code.

You are given the DNA of a child and DNA sequences of possible fathers. Implement an algorithm selecting the most probable father of the child. DNA sequence is a long string molecules which could be one of A, C, T or G. The child DNA and father DNA will have differences between them even if the child is the fathers offspring. These differences were caused by mutations that affect the DNA in three different ways. The mutations could be: an insertion of a molecule, a deletion of a molecule or a change of a molecule to another one. Most probable father of the child means that their DNA sequences have the least amount of mutations between them.

#### Examples ###

```
"" -> "" = 0
"AAA" -> "AAA" = 0
"ATA" -> "AAA" = 1
"AA" -> "AAA" = 1
"AAAA" -> "AAA" = 1
"ACTGCTCGTATCGATCGATCAC" -> "ACTCCGTATCGAGCGATCACAG" = 5
```
