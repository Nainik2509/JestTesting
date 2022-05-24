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
    });

    it("Should except zero to act like zero", () => {
        let number = 0;
        expect(number).toBeDefined();
        expect(number).not.toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
    });
    test("Number Comparison", () => {
        const a = 1;
        const b = 2;

        expect(a + b).toBeGreaterThan(2);
        expect(a + b).toBeGreaterThanOrEqual(2);
        expect(a + b).toBeLessThan(10);
        expect(a + b).toBeLessThanOrEqual(5);
    });

    test("There should be no I in team", () => {
        const string = 'team';

        expect(string).not.toMatch(/I/);
    });

    test("There is 'stop' in Christopher", () => {
        const string = 'Christopher';

        expect(string).toMatch(/stop/);
    });

});
