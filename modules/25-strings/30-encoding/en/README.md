At the most basic level, a computer works only with zeros and ones, which make up what is called binary code. Each one or zero is called a bit (from binary digit).

Any data in a computer is represented simply as a sequence of bits, for example images, music, and text. The familiar numbers from the decimal system can also be represented in binary form.

- 0 → `0`
- 1 → `1`
- 2 → `10`

## How to encode text?

A computer does not "understand" text. To work with letters and other characters, they also need to be turned into numbers. This is done using encodings, that is, tables in which each character corresponds to a specific number.

The simplest way is to number the letters, starting from 1.

- `a` → `1`
- `b` → `2`
- ...and so on up to `z` → `26`

Now we can represent the word `hello` as a set of numbers.

```text
h e l l o
↓ ↓ ↓ ↓ ↓
8 5 12 12 15
```

And `good` turns into the following sequence.

```text
g o o d
↓ ↓ ↓ ↓
7 15 15 4
```

The program does not know that this is a word. It simply sees the instruction "display the character with code 8, then the one with code 5, and so on".

## ASCII. The first mass encoding

The first computers worked mostly with the English language. For it, in the 1960s the ASCII table was invented, including 128 characters, among them the Latin alphabet, digits, punctuation marks, special characters (`@`, `#`, `!`, `\n`), and control codes.

This was enough for the first programs, but not for the whole world.

When computers began to be used in other countries, a problem arose. ASCII has no Cyrillic, hieroglyphs, Arabic script, accents, currency symbols, and so on.

Each country or company started making its own encoding based on ASCII.

- Windows came up with Windows-1251 for Russian
- Apple created Mac Roman
- Countries in Eastern Europe, Asia, and the Middle East developed their own variants

All these encodings were incompatible with each other. Code 226 in one encoding could be the letter é, in another a different letter, and in a third some technical character altogether. This led to real chaos.

## What encoding problems looked like

If you see this in a text.

```text
ÐÑÐ¸Ð²ÐµÑ!
```

It means that the program incorrectly determined the encoding of the text. It received a sequence of bytes but read them with the wrong table.

This was the norm in the 1990s and 2000s. One program wrote text in Windows-1251, another read it as ISO-8859-1, and the result was garbage.

## Unicode and UTF-8. The end of the mess

To fix everything, in the 1990s work began on creating the universal Unicode table, which contains the characters of all the writing systems of the world, among them the Latin alphabet and Cyrillic, Chinese and Arabic script, mathematical signs, ancient Egyptian writing, and even emoji.

Inside Unicode there are several storage formats. The most widespread of them is UTF-8. It compactly encodes English characters but can expand to fit any others.

Today UTF-8 is the default standard on the internet, in JavaScript, Linux, databases, and code editors.

## Why should a programmer know this?

- You will work with text, and encoding errors still happen, especially when reading files, processing data, interacting with APIs and databases.
- JavaScript uses Unicode for strings by default.
- You need to be able to diagnose problems. For example, if you see "gibberish", it is almost certainly an encoding error.
