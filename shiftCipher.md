# Shift Cipher

### Instructions

A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number.

Create a class `ShiftCipher` that takes the numerical value of the `shift` as a constructor parameter.

`encrypt`: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.

`decrypt`: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.

### Summary

I started this challenge by creating `class ShiftCipher` with a constructor method that takes one parameter, `shift`.

```
class ShiftCipher {
    constructor(shift)
        this.shift = shift;
}
```
**Encryption**

To encrypt a message, I first wrote a method `encrypt()` that takes one parameter `str`.

```
encrypt(str) {

}
```

Within the `encrypt()` method I created a variable `cipherText` and set it equal to an empty string to store the encrypted text.

To convert a message into encrypted text, I used a `for` loop to interate over each character in the message.

I use the String method `charCodeAt()` to convert letters to a numerical value, to enable me to reference the ASCII table.

I implemented an `if` statment to create a reference point of where each character fell on the ASCII chart and shifted each character according to the `shift` value.

The String method `String.fromCharCode()` within the `if` statement takes the numerical letter values and converts them into alphabetical characters.

```
    encrypt(str) {
        let cipherText = '';

        for (let i = 0; i < str.length; i++) {

            let charNum = str[i].charCodeAt();

            if (charNum >= 97 && charNum <= 122) {
                cipherText += String.fromCharCode(charNum + this.shift);
            } else if (charNum > 122) {
                cipherText += String.fromCharCode(charNum - 26);
            } else {
                cipherText += str[i];
            }
            
        }
        
        return cipherText.toUpperCase();

    }
```

If a character is shifted outside the alphabet in either direction I used the code below to wrap it back around. For example, if the character is `z` with a `shift` of `1`, it would return `a`.

```
else if (charNum > 122) {
    cipherText += String.fromCharCode(charNum - 26);
```

The String method `toUpperCase()` was used to convert the final encrypted text into upper case letters.

**Decryption**

The `decrypt()` method on the `ShiftCipher` class takes in one parameter of encrypted text and reverts it back into the original message.

As displayed below, the main difference between the methods `encrypt()` and `decrypt()` are the decryption method takes the value of `shift` and shifts the text in the opposite direction. The `toLowerCase()` String method was also used to convert the previouly uppercase letters back to lower case.

```
    decrypt(encryptMsg) {
        let decryptMsg = '';

            for (let i = 0; i < encryptMsg.length; i++) {
                let enCharNum = encryptMsg[i].charCodeAt();

                if (enCharNum >= 65 && enCharNum <= 90) {
                    decryptMsg += String.fromCharCode(enCharNum - this.shift);
                } else if (enCharNum > 90) {
                    decryptMsg += String.fromCharCode(enCharNum - 26);
                } else {
                    decryptMsg += encryptMsg[i];
                }

           }

        return decryptMsg.toLowerCase();
    }
```



**Solution Test**

I created an instance of `shiftCipher` and passed in `2` as the `shift` value. I called the `encrypt()` method on `secretMessage` and passed in `hello, world!` as an argument.

```
const secretMessage = new ShiftCipher(2);

console.log(secretMessage.encrypt('hello, world!'));

result: JGNNQ, YQTNF!
```



### Resources 

- [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
- [Codecademy](https://www.codecademy.com/)
- [JavaScript charCodeAt() MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
- [JavaScript String.fromCharCode() MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
