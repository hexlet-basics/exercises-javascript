
At machine level, the computer operates only with the numbers `0` and `1`. This is called [binary code](https://en.wikipedia.org/wiki/Binary_code), the ones and zeros are called bits, which is derived from the term "binary digit".

The numbers that we usually use in the decimal system are encoded using binary numbers:

- 0 ← 0
- 1 ← 1
- 2 ← 10
- 3 ← 11
- 4 ← 100
- 5 ← 101

But does it deal with text? The computer isn't aware of letters, punctuation, and other text characters. All these characters are encoded by numbers too.

We can take the English alphabet and give each letter a number, starting with one:

- a ← 1
- b ← 2
- c ← 3
- d ← 4
- ...
- z ← 26

Then you can teach the computer to understand this table and translate text into numbers and vice versa:

- `hello` → `8` `5` `12` `12` `15`
- `7` `15` `15` `4` → `good`

These tables that match letters and numbers are called encodings. Besides letters of the alphabet, encoding tables include punctuation marks and other useful characters. You've probably come across such encodings as [ASCII](https://en.wikipedia.org/wiki/ASCII) or [UTF-8](https://en.wikipedia.org/wiki/UTF-8).

Different encodings have different numbers of characters. At first, small tables like ASCII were enough for programmers. But they usually contain only Latin letters, a few simple characters like `%` and `?`, and special control characters like newline (/n).

With the development of computers, different countries needed their own comprehensive tables. Including Cyrillic letters, hieroglyphs, Arabic script, additional mathematical and typographic characters, and even emojis as time went on.

One [Unicode standarts](https://en.wikipedia.org/wiki/Unicode) standard in particular, *utf-8*, is the one used in most cases today. It includes characters from almost all of the written languages found in the world. Therefore, a letter written by someone from China in Chinese can easily be opened and read natively on a computer in Finland (whether the reader would understand it or not is another question).

Programmers have to deal with encodings regularly. Unicode support in different programming languages is carried out on a different level. Moreover, encodings must be declared when working with databases and files.
