import React, { FC } from "react";
import { currentTime } from "../../../utils";
import style from "./index.module.scss";

const TimeBlock: FC = () => {
  const { time, date, day } = currentTime();

  return (
    <div className={style.lock_title}>
      <h1>{time}</h1>
      <h2>{date}</h2>
      <h3>{day}</h3>
    </div>
  );
};

export default TimeBlock;
