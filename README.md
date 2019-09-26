# Kata to practice testing and TDD

## Before you start

- Try not to read ahead.
- Do **one task at a time**. The trick is to work incrementally.
- For this exercise, test only for **correct inputs**, there is no need to test for invalid inputs... yet.
- Test first!

## What you have to do
### 1
 Create a simple class _class StringCalculator_ with a method _public add(formula: string): number_. 
 The method can take **0, 1 or 2 numbers** and will return their sum.
 - For an empty string it will return 0.
 - For one number it will return the same number.
 - For two numbers it will return the sum.
 
 Examples:
 - "" => 0
 - "1" => 1
 - "1,2" => 3
 
 **Start with the simplest test case for an empty string** and move to one and two numbers.
 Remember to solve things as **simply as possible** so that you force yourself to write tests you did not think about.
 Remember to refactor after each passing test.

### 2
Allow the **add** method to handle an unknown amount of numbers.

### 3
Allow the **add** method to handle _new lines_ between numbers (instead of commas).
Given the following input "1\n2,3" the result will be 6.

### 4
Support different delimiters. to change a delimiter, the beginning of the string will contain a separate line 
that looks like this:

"//[delimiter]\n[numbers...]"

Example:

"//;\n1;2" => 3

**Note**: All existing test scenarios should still pass.

### 5

Calling Add with a negative number will throw an exception “negatives not allowed” and the negative number that was passed

### 6

If there are multiple negative numbers, show all of them in the exception message.

### 7

Add a method **getCalledCount(): number** that returns how many times **add()** was called. Remember to start with a failing or even a non compiling test.

### 8

Numbers bigger than 1000 should be ignored. Example:

2 + 1001 => 2

### 9

Delimiters can be of any length with the following format: "//[delimiter]\n"

Example: "//[---]\n1---2---3" => 6

### 10

Allow multiple delimiters like this: 

"//[-][%]\n1-2%3" => 6

### 11

Make sure you can also handle multiple delimiters with length longer than one char:

"//[--][%%]\n1--2%%3" => 6

 

