import dayjs from "dayjs";

const now = dayjs();
consolse.log(now.toString());
//console.log(dayjs.toString()); 이건 왜 안 될까?

console.log(now.format());
console.log(now.format("YYYY-MM-DD"));
console.log(now.format("YYYY년 MM월 DD일"));

const date1 = dayjs("2023-06-14");
const date2 = dayjs("2024-06-14");

console.log(date2.diff(date1, "day"));
console.log(date2.diff(date1, "month"));


/* "type" : "common JS",
const dayjs = require('dayjs');

const now = dayjs();
consolse.log(now.toString());
//console.log(dayjs.toString()); 이건 왜 안 될까?

console.log(now.format());
console.log(now.format("YYYY-MM-DD"));
console.log(now.format("YYYY년 MM월 DD일"));

const date1 = dayjs("2023-06-14");
const date2 = dayjs("2024-06-14");

console.log(date2.diff(date1, "day"));
console.log(date2.diff(date1, "month"));
*/