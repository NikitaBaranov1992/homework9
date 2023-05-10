const bestStudent = require("./homework10.2");
describe("Тестирование функции bestStudent", () => {
  it("Проверка сообщения в функции bestStudent", () => {
    expect(bestStudent()).toEqual("Ivan, поздравляем вас! Вы молодец!");
  });
});
