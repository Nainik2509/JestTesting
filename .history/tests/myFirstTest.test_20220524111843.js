
describe("Number Operations", () => {
    test("1 + 1 should be equal to 2", () => {
        expect(1 + 1).toBe(2);
    });

    test("5 + 6 is not equal to 10", () => {
        expect(5 + 6).not.toBe(10);
    });
});

describe("Testing other matcher methods", () => {

    test("Testing that a variable is undefined", () => {
        let number = undefined;
        expect(number).not.toBeDefined();
        expect(number).toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
    })
})