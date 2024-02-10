import sum from "../sum"

test("should calculate sum",() => {
    const value = sum(4,5);

    expect(value).toBe(9);
})
