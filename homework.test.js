const calculateBonus = require("./homework");
describe("Тестирование функции sum", () => {
  it("Суммирование положительных чисел", () => {
    expect(calculateBonus(1, 20)).toBe(21);
  });
});
