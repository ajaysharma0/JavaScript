--------------------------------------------------
Strings Methods:-
    //actions that can be performed on objects.

Format:-
    stringName.method();

(1) Trim method in stringName
    Trims Whitespace from both ends of string & return a new one.
    Format:-str.trim();
Note:-javaScript me string ko immutable kaha jata hai.

-----------------------------------------------------

String are immutable in javaScript
   No change can be made to strings.(jis strng ko hum change nahi kar sakate )
    Whenever we try to make a change,a new string is crated and old one remais same
-----------------------------------------------------------------
toUpperCase & toLowerCase:-
    change string into uppercase into lowercase and vice versa

-----------------------------------------------------------------
String Methods With Arguments:-
    Arguments is a some value that we pass to the method.
    Format:-
        stringName.method(arg);
    (1)indexOf();
        Return the first index of occurence os some value in string. Or gives -1 if not found.
        
        let str = "Hello, world!";
        let index = str.indexOf("o"); // This will return 4
                                 ^
                                 |__(Arguments)
-------------------------------------------------------------------
Method Chaining:-
    Using one method after another.Orderof execution will be left to right.
    Format:-
        str.toUpperCase.trim();
    Example:-
    let str4="     hello world  ";
    let res=str4.trim().toUpperCase();
    console.log(res);//This will return :- HELLO WORLD
--------------------------------------------------------------------

//Slice Method
The `slice()` method in JavaScript is used to extract a portion of a string and returns the extracted part as a new string without modifying the original string. It takes two parameters: the starting index (inclusive) and the ending index (exclusive) of the substring to be extracted. Here's the syntax:

```javascript
string.slice(startIndex, endIndex)
```

- `string`: The original string from which you want to extract a substring.
- `startIndex`: The index at which to begin extraction. If negative, it specifies an offset from the end of the string.
- `endIndex` (optional): The index before which to end extraction. If omitted, the slice includes all characters from `startIndex` to the end of the string. If negative, it specifies an offset from the end of the string.

Here are some examples to illustrate the usage of the `slice()` method:

```javascript
let str = "Hello, world!";

// Extract a substring starting from index 7 (inclusive) to index 12 (exclusive)
let sliced1 = str.slice(7, 12); // Output: "world"
console.log(sliced1);

// Extract a substring starting from index 7 to the end of the string
let sliced2 = str.slice(7); // Output: "world!"
console.log(sliced2);

// Using negative indices to extract substrings from the end of the string
let sliced3 = str.slice(-6); // Output: "world!"
console.log(sliced3);

let sliced4 = str.slice(-12, -7); // Output: "Hello"
console.log(sliced4);
```

In these examples:

- `sliced1` extracts the substring "world" starting from index 7 to index 12 (exclusive).
- `sliced2` extracts the substring starting from index 7 to the end of the string.
- `sliced3` uses negative indices to extract the substring "world!" from the end of the string.
- `sliced4` extracts the substring "Hello" using negative indices.

Note that the `slice()` method does not modify the original string; 
it returns a new string containing the extracted substring.

## Note:-
Difference between slice and substring in JavaScript
    The main difference between the `slice()` and `substring()` methods in JavaScript is that `slice()` allows negative indices and treats them as offsets from the end of the string, 
    while `substring()` does not accept negative indices and treats them as 0.

----------------------------------------------------------------------------------------------------
//Replace Method on String

In JavaScript, the `replace()` method is used to replace occurrences of a specified substring or pattern within a string with another substring or value. The `replace()` method can be applied to string objects and uses regular expressions for pattern matching. Here's the syntax for the `replace()` method:

```javascript
string.replace(searchValue, newValue)
```

- `string`: The original string in which you want to perform the replacement.
- `searchValue`: The substring or regular expression pattern to search for within the string. It can be either a string or a regular expression.
- `newValue`: The substring or value to replace the matched occurrences with.

Here are some examples to illustrate how the `replace()` method works:

```javascript
let str = "Hello, world! Hello, universe!";
let newStr = str.replace("Hello", "Hi");
console.log(newStr); // Output: "Hi, world! Hello, universe!"

let regex = /Hello/g; // Regular expression with global flag 'g'
newStr = str.replace(regex, "Hi");
console.log(newStr); // Output: "Hi, world! Hi, universe!"

// Using a function as the second argument
newStr = str.replace(/Hello/g, (match) => match.toUpperCase());
console.log(newStr); // Output: "HELLO, world! HELLO, universe!"
```

In these examples:
- The first `replace()` call replaces the first occurrence of "Hello" with "Hi" in the string.
- The second `replace()` call uses a regular expression with the global flag 'g' to replace all occurrences of "Hello" with "Hi".
- The third `replace()` call uses a function as the second argument to convert matched substrings to uppercase.

Note that the `replace()` method does not modify the original string; it returns a new string with the replacements applied.
