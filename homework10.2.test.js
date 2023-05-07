const getScore = require("./homework10.2");
describe("Тестирование функции getScore", () => {
  it("Расчета максимальных баллов", () => {
    expect(getScore([
        { name: "Ivan", score: 36, date: "2022-10-11" },
        { name: "Maria", score: 5, date: "2022-10-10" },
        { name: "Olga", score: 0, date: "" },
        { name: "Stepan", score: 35, date: "2022-10-12" },
        { name: "Oleg", score: 9, date: "2022-10-01" },
        { name: "Zanna", score: 15, date: "2022-10-11" },
      ])
    ).toBe(36);
  });
});

it("Проверка, если sum больше 50", () => {
  expect(calculateBonus(1, 50)).toBe(50);