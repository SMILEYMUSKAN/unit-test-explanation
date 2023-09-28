import Add  from "./Add";

describe("Testing Add.js file", () => {
    it("Add function should return 0, when the function invoked without any arguments", () => {
        var value = Add();
        expect(value).toBe(0);
    });

    it("Add function should return 0 when it's invoked with single argument 40", () => {
        var value = Add(40);
        expect(value).toBe(40);
    });

    it("Add function should return 80 when it's invoked with 40, 40", () => {
        var value = Add(40, 40);
        expect(value).toBe(80);
    });

    it("Add function should return number data type value when the function is invoked with number as a string arguments", () => {
        var value = Add("90", "100"); 
        expect(value).toBe(190);
    });

    it("Add function should return Muskan, Fathima when the function invoked with Muskan, Fathima string values", () => {
        var value = Add("Muskan", "Fathima"); // undefined + undefined = NaN
        expect(value).toBe(NaN);
    });

    it("Add function should return Muskan ", () => {
        var value = Add("Muskan"); // undefined + 0 = NaN | undefined with any assignment it will return NaN;
        expect(value).toBe(NaN);
    });
    
})