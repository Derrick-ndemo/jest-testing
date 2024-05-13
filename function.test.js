const { capitalize } = require("./main.js").capitalize;
const { caesarCipher } = require("./main.js").caesarCipher;

test("capitalzies the first letter of a string", () => {
    expect(capitalize("john")).toBe("John");
});

test("Caesar Cipher shifts each character correctly", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    expect(caesarCipher("ABCxyz", 1)).toBe("BCDyza");
    expect(caesarCipher("abc", 25)).toBe("zab");
    expect(caesarCipher("XYZ", 5)).toBe("CDE");
    expect(caesarCipher("Hello, World!", 26)).toBe("Hello, World!"); // No shift (26 is equivalent to 0)
    expect(caesarCipher("abc", -1)).toBe("zab"); // Negative shift (left shift)
    expect(caesarCipher("123", 4)).toBe("123"); // Non-alphabetic characters remain unchanged
});

// const sum = require("./main");

// test("adds 1 + 2 to equal 3", () => {
//     expect(sum(1, 2)).toBe(3);
// });

// test("obj assignment", () => {
//     const data = {
//         one: 1,
//     };
//     data["two"] = 2;
//     expect(data).toEqual({ one: 1, two: 2 });
// });

// test("adding positive numbers is not zero", () => {
//     for (let a = 1; a < 100; a++) {
//         for (let b = 1; b < 100; b++) {
//             expect(a + b).not.toBe(0);
//         }
//     }
// });
