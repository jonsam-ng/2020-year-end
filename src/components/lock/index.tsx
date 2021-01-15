import React, { FC, useState, useEffect } from "react";
import { currentTime } from "../../utils";
import style from "./index.module.scss";

const LockPage: FC = () => {
  const [showKeyboard, setShowKeyboard] = useState<boolean>(false);
  const [pass, setPass] = useState<string[]>([]);
  const { time, date, day } = currentTime();

  const getActiveClass = (idx: number) =>
    pass.length >= idx + 1 ? style.active : "";
  const keyboardMap = [
    {
      no: "1",
      term: "",
    },
    {
      no: "2",
      term: "ABC",
    },
    {
      no: "3",
      term: "DEF",
    },
    {
      no: "4",
      term: "GHI",
    },
    {
      no: "5",
      term: "JKL",
    },
    {
      no: "6",
      term: "MNO",
    },
    {
      no: "7",
      term: "PQRS",
    },
    {
      no: "8",
      term: "TUV",
    },
    {
      no: "9",
      term: "WXYZ",
    },
    {
      no: "0",
      term: "",
    },
  ];
  useEffect(() => {
    console.log("==>", { pass });
  }, [pass]);

  const handleDelete = (e: any) => {
    e.stopPropagation();
    if (!pass.length && showKeyboard) {
      console.log("==>", 111);
      setShowKeyboard(false);
      return;
    }
    setPass(pass.join("").slice(0, -1).split(""));
  };

  return (
    <div
      className={style.lock_container}
      onClick={(e) => {
        e.stopPropagation();
        setShowKeyboard(true);
      }}
    >
      {!showKeyboard && (
        <div className={style.lock_screen}>
          <div className={style.lock_title}>
            <h1>{time}</h1>
            <h2>{date}</h2>
            <h3>{day}</h3>
          </div>
          <div className={style.lock_card}>
            <div className={style.card_header}>
              <div>
                <img src="" alt="" srcSet="" />
                <span>人民入保放假客服 </span>
              </div>
              <span>刚刚</span>
            </div>
            <p>
              鹤骨鸡肤开放后即可噶科技股份可高科技福建客户鼓风机好尬接口规范换个积分卡嘎咖啡机好机会厂家发货款
            </p>
          </div>
          <div className={style.lock_trigger}>
            <p className={style.lock_hint}>向上滑屏以解锁</p>
            <div className={style.lock_arrow}>
              <div className={style.arrow_ani} />
              <div className={style.arrow_ani} />
            </div>
          </div>
        </div>
      )}

      {showKeyboard && (
        <div className={style.lock_keyboard}>
          <div className={style.input_pass}>
            <p>请输入密码2020</p>
            <ul>
              {[0, 1, 2, 3].map((idx) => (
                <li
                  className={`${style.pass_dot} ${getActiveClass(idx)}`}
                  key={idx}
                />
              ))}
            </ul>
          </div>
          <div className={style.visual_keyboard}>
            {keyboardMap.map(({ no, term }) => (
              <div
                className={style.board_item}
                key={no}
                onClick={() =>
                  setPass(() => {
                    let p = [...pass, no];
                    if (p.length >= 4) {
                      p = [];
                    }
                    return p;
                  })
                }
              >
                <span>{no}</span>
                <span>{term}</span>
              </div>
            ))}
          </div>
          <div className={style.opt_panel}>
            <span>紧急呼叫</span>
            <span onClick={handleDelete}>{pass.length ? "删除" : "返回"}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LockPage;
