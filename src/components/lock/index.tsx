import React, { FC, useState, useEffect } from "react";
import config from "../../config";
import TimeBlock from "../common/timeBlock";
import { useHistory } from "react-router-dom";
import badgeImage from "../../assets/image/0.png";
import style from "./index.module.scss";

const LockPage: FC = () => {
  const [showKeyboard, setShowKeyboard] = useState<boolean>(false);
  const [pass, setPass] = useState<string[]>([]);
  const [tryAgain, setTryAgain] = useState<boolean>(false);
  const {defaultPass} = config;
  const history = useHistory();

  const messageAudio = require("../../assets/audio/message.mp3");

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
    if(pass.length >= 4 ) {
      if(pass.join("") === defaultPass) {
        setTimeout(() => {
          history.push("/desktop");
        }, 500)
      }else {
        setTryAgain(true);
        setPass([]);
        setTimeout(() => {
          setTryAgain(false);
        }, 1000)
      }
    } 
  }, [pass, defaultPass, history]);

  const handleDelete = (e: any) => {
    e.stopPropagation();
    if (!pass.length && showKeyboard) {
      setShowKeyboard(false);
      return;
    }
    setPass(pass.join("").slice(0, -1).split(""));
  };

  const handleKeyboardClick = (e: any, no:string) => {
    e.stopPropagation();
    setPass(() => {
      let p = [...pass, no];
      return p;
    })
  }

  const handleTouchScreen = (e: any) => {
    e.stopPropagation();
    setShowKeyboard(true);
  }

  return (
    <div
      className={style.lock_container}
      onClick={handleTouchScreen}
      onTouchStart={handleTouchScreen}
    >
      {!showKeyboard && (
        <div className={style.lock_screen}>
          <TimeBlock />
          <div className={style.lock_card}>
            <div className={style.card_header}>
              <div className={style.card_badge}>
                <img src={badgeImage} alt="badgeImage" />
                <span>宜川中学教育集团客户端</span>
              </div>
              <span>刚刚</span>
            </div>
            <p>
            庚子鼠年，宜中人同心同行，一往无前！鞭炮响，新年到！让我们鞭蹄，牛来运转！嬴在开门，胜在牛年！>>
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
            <ul className={`${tryAgain ? style.pass_ani : ""}`}>
              {[0, 1, 2, 3].map((idx) => (
                <li
                  className={`${style.pass_dot} ${getActiveClass(idx)}`}
                  key={idx}
                />
              ))}
            </ul>
          </div>
          <div className={style.visual_keyboard_wrapper}>
            <div className={style.visual_keyboard}>
            {keyboardMap.map(({ no, term }) => (
              <div
                className={`${style.board_item}`}
                data-index={no}
                key={no}
                onClick={(e) => handleKeyboardClick(e, no)}
              >
                <span>{no}</span>
                <span>{term}</span>
              </div>
            ))}
            </div>
          </div>
          <div className={style.opt_panel}>
            <span>紧急呼叫</span>
            <span onClick={handleDelete}>{pass.length ? "删除" : "返回"}</span>
          </div>
        </div>
      )}

      <audio src={messageAudio} autoPlay={true} loop={false}/>
    </div>
  );
};

export default LockPage;
