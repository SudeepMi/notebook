---
title: Whats new in TOC
excerpt: 'Terminologies used in the theory of computation are as follow:1. Symbol'
createdAt: 1648222624542
author: alexander-branch
---
#### Terminologies used in the theory of computation are as follow:

###   

1\. Symbol
----------

*   Smallest building block, which can be any alphabet, letter or picture, symbol, special char.

2\. Alphabet (∑)
----------------

*   Alphabets are a set of symbols, which are always finite.
*   Example: ∑={a,b,c,..z}, ∑={1,0}

3\. String (w):
---------------

*   It is a finite sequence of symbols from some alphabet.
*   Denoted by w

4\. Length of string (|w|)
--------------------------

*   Number of positional character,C number of alphabets in string
*   Denoted by Iwl
*   Example: |abc| = 3, |1101| = 4

5\. Language
------------

*   A language is a set of string , chosen from some set of all possible string.
*   Can be finite or infinite

6\. power of Alphabet
---------------------

*   Denoted as ∑k – k is some integer
*   Set of strings of length k with symbol from ∑.
*   ∑k = { w|w is a string over ∑ and |w| = k }
*   For of any alphabet, ∑0 denotes the set of all string of length Zero.
*   For alphabet {a,b,c} we have,
*   ∑0 = {⋲} (epsilons)
*   ∑2 = {aa, bb, ab, ba}
*   ∑3 = {aaa, bbb, aab, abb, aba, baa, bba, bab}
*   The set of all strings over an alphabet ∑ is denoted by ∑\* ie. ∑\* = ∑0 U ∑1 U ∑2 U …. = U∑k

7\. Kleene closure (∑ \*)
-------------------------

*   Set of all possible String
*   Denoted by ∑\*

8\. Positive closure (∑ +)
--------------------------

*   A set of all possible string except ∑0
*   Denoted by ∑+

9\. Substring
-------------

*   Sequence of symbols from any part of the given string over an alphabet is called a substring
*   For example given String: ABC
*   L = { A, AB, ABC, C, BC}
*   L is a set of substrings

10\. Prefix and Suffix
----------------------

*   A substring with the sequence of beginning symbols of a given string is called a “prefix” while ending symbols of given string is called a “suffix”.
*   Prefixes except the given string is called proper prefix.
*   Suffix except the given string is called proper suffix.
*   For given String ABC
*   Prefix = { ⋲, A, AB, ABC }
*   Suffix = { ⋲, C, BC, ABC }
