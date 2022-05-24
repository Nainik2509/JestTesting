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
        const string = "team";

        expect(string).not.toMatch(/I/);
    });

    test("There is 'stop' in Christopher", () => {
        const string = "Christopher";

        expect(string).toMatch(/stop/);
    });

    const shopList = ["Milk", "Trash bags", "Bread", "Eggs", "Cheese", "Butter"];

    test("The Shop list doen't contain PS4", () => {
        expect(shopList).not.toContain("PS4");
        expect(shopList).toContain("Milk");
    });
});

//  Testing primitive and reference types equality
describe("Testing reference equality", () => {
    const user = { name: "Nainik" };
    user["age"] = 23;

    test("Should return a user object with age as 23", () => {
        expect(user).toEqual({ name: "Nainik", age: 23 });
    });
    test("Should return a user with a name and age key", () => {
        expect(user).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number),
            })
        );
    });

    // Testing Array Equality
    test("Array Equality", () => {
        const users = ["A", "B", "C"];
        users.push("D");

        expect(users).toEqual(["A", "B", "C", "D"]);
        expect(users).toEqual(expect.arrayContaining(["D"]));
        expect(users).toEqual(expect.arrayContaining([expect.any(String)]));

        const userObjectInArray = [
            {
                user: "A",
                age: 23,
            },
            {
                user: "B",
                age: 24,
            },
            {
                user: "C",
                age: 23,
            },
            {
                user: "D",
                age: 21,
            },
        ];

        userObjectInArray.push({ user: "E", age: 21 });

        expect(userObjectInArray).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    user: expect.any(String),
                    age: expect.any(Number),
                })
            ])
        )
    });
});
