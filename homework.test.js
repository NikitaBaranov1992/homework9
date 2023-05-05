const calculateBonus = require("./homework");
describe("Тестирование функции calculateBonus", () => {
  it("Проверка, если sum меньше 50", () => {
    expect(calculateBonus(1, 48)).toBe(49);
  });
  it("Проверка, если sum больше 50", () => {
    expect(calculateBonus(1, 50)).toBe(51);
  });
  it("Проверка, если sum равно 50", () => {
    expect(calculateBonus(5, 45)).toBe(50);
  });
});
