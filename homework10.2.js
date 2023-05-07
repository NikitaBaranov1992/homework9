let students = [
  { name: "Ivan", score: 36, date: "2022-10-11" },
  { name: "Maria", score: 5, date: "2022-10-10" },
  { name: "Olga", score: 0, date: "" },
  { name: "Stepan", score: 35, date: "2022-10-12" },
  { name: "Oleg", score: 9, date: "2022-10-01" },
  { name: "Zanna", score: 15, date: "2022-10-11" },
];

let studentsScoreList = [];

function getScore(students) {
  for (let student of students) {
    studentsScoreList.push(student.score);
  }
  return Math.max(...studentsScoreList);
}

function getBestStudent(students) {
  let bestPlayer;
  for (let student of students) {
    if (student.score == getScore(students)) {
      bestPlayer = student.name;
    }
  }
  return bestPlayer;
}

let x = getScore(students);
let y = getBestStudent(students);

function message(x, y) {
  console.log(`${y}, поздравляем с первым местом! Вы набрали ${x} баллов!`);
}

message(x, y);

module.exports = getScore;
module.exports = getBestStudent;
module.exports = message;

/*Задача: студенты получают дополнительные баллы за успешное и самое быстрое завершение практической работы, 
для этого нам необходимо вычислить данных студентов. Дан объект с набором данных разных студентов, в 
котором необходимо вычислить студента с максимальным количеством баллов - в 
консоли вывести поздравления для данного студента.*/
