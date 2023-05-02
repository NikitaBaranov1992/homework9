const calculateBonus = require("./homework");
describe("Тестирование функции calculateBonus", () => {
  it("Проверка, если sum меньше 50", () => {
    expect(calculateBonus(1, 20)).toBe(21);
  });
  it("Проверка, если sum больше 50", () => {
    expect(calculateBonus(5, 300)).toBe(50);
  });
  it("Проверка, если sum равно 50", () => {
    expect(calculateBonus(5, 45)).toBe(50);
  });
});
