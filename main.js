function sum(a, b) {
    return a + b;
}

function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.substr(1);
}

function reverseString(value) {
    let reversed = "";
    for (let i = value.length - 1; i >= 0; i--) {
        reversed += value[i];
    }
    return reversed;
}

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        return a / b;
    },
    mul(a, b) {
        return a * babel;
    },
};

function caesarCipher(str, shift) {
    // Helper function to shift a single character
    function shiftChar(char, shift) {
        const code = char.charCodeAt(0);
        let shiftedCode;

        // Shift uppercase letters
        if (char >= "A" && char <= "Z") {
            shiftedCode = ((((code - 65 + shift) % 26) + 26) % 26) + 65;
        }
        // Shift lowercase letters
        else if (char >= "a" && char <= "z") {
            shiftedCode = ((((code - 97 + shift) % 26) + 26) % 26) + 97;
        }
        // Don't shift non-alphabetic characters
        else {
            shiftedCode = code;
        }

        return String.fromCharCode(shiftedCode);
    }

    // Apply the shift to each character in the string
    return str
        .split("")
        .map((char) => shiftChar(char, shift))
        .join("");
}

module.exports = { sum, capitalize, caesarCipher, reverseString, calculator };
