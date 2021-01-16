import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useStore } from "../../store";
import TimeBlock from "../common/timeBlock";
import config from "../../config";
import menuImage from "../../assets/image/menu.png";
import style from "./index.module.scss";

const DesktopPage: FC = () => {
  const history = useHistory();
  const { callDelay } = config;
  const { state } = useStore();
  const { pageIndex } = state;

  useEffect(() => {
    setTimeout(
      () => {
        history.push("/call");
      },
      pageIndex === 0 ? callDelay + 500 : callDelay
    );
  }, [callDelay, history, pageIndex]);

  return (
    <div className={style.desktop_container}>
      <TimeBlock />
      <div className={style.desktop_menu}>
        <img src={menuImage} alt="desktop_menu" />
      </div>
    </div>
  );
};

export default DesktopPage;
