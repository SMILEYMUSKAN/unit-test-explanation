import forEach from "./ForEach";

describe("Testing forEach function", () => {
  it("The mock function was called twice", () => {
     var mockCallback = jest.fn(value => {
        console.log("Return Value", value)
        return value + 10
     })
     forEach([10, 20], mockCallback);
     expect(mockCallback.mock.calls).toHaveLength(2)
  })

  it("The first argument of the first call to the function was 10", () => {
    var mockCallback = jest.fn(value => {
       console.log("Return Value", value)
       return value + 10
    })
    forEach([10, 20], mockCallback);
    expect(mockCallback.mock.calls[0][0]).toBe(10) 
 })

 it("The first argument of the second call to the function was 50", () => {
    var mockCallback = jest.fn(value => {
       console.log("Return Value", value)
       return value + 10
    })
    forEach([50, 90], mockCallback);
    expect(mockCallback.mock.calls[1][0]).toBe(90) 
 })

 it("The return value of the first call to the function was 50", () => {
    var mockCallback = jest.fn(value => {
       console.log("Return Value", value)
       return value + 10
    })
    forEach([50, 20], mockCallback);
    expect(mockCallback.mock.results[0].value).toBe(60) 
 })

 it("The return value of the second call to the function was 30", () => {
    var mockCallback = jest.fn(value => {
       console.log("Return Value", value)
       return value + 10
    })
    forEach([50, 20], mockCallback);
    expect(mockCallback.mock.results[1].value).toBe(30) 
 })
})

