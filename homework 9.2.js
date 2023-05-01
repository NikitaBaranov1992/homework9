const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger; // На этом этапе посчитанна константа sum. Переменная bonus объявлена, но еще не рассчитанна.
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger; // На этом этапе рассчитанна переременна bonus
  return bonus;
};

console.log(calculateBonus(1, 20));
