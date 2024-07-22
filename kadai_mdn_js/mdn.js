const date = new Date("2023-08-22");
const [year, month, day] = [
  date.getFullYear(),
  // +1にしないと1月から始まらない
  date.getMonth() + 1, 
  date.getDate(),
];

console.log(year + "年" + month + "月" + day + "日");
