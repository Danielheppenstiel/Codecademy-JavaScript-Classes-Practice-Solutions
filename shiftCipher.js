class ShiftCipher {
    constructor(shift) {
        this.shift = shift;
    }

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



}

const secretMessage = new ShiftCipher(2);

console.log(secretMessage.encrypt('hello, world!'));