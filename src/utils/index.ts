const dayArr = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期wu",
  "星期六",
];

export const currentTime = () => {
  const now = new Date();
  return {
    time: `${pad(now.getHours())}:${pad(now.getMinutes())}`,
    date: `${now.getFullYear()}/${pad(now.getMonth() + 1)}/${pad(
      now.getDate()
    )}`,
    day: `${dayArr[now.getDay()]}`,
  };
};

export const pad = (x: number) => (x < 10 ? `0${x}` : `${x}`);
