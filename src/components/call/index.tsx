import React, { FC } from "react";
import { useStore, actionType } from "../../store";
import hangoutImage from "../../assets/image/hangout.png";
import callImage from "../../assets/image/call.png";
import { useHistory } from "react-router-dom";
import config from "../../config";
import style from "./index.module.scss";

const CallPage: FC = () => {
  const history = useHistory();
  const { state, dispatch } = useStore();
  const { pageIndex } = state;
  const { total, avatarHint } = config;

  const imageAssets = (() => {
    const assets = [];
    for (let i = 0; i < total; i++) {
      assets.push(require(`../../assets/image/${i}.png`));
    }
    return assets;
  })();

  const callAudio = require("../../assets/audio/call.mp3");

  const handleHangoutClick = (e: any) => {
    e.stopPropagation();
    dispatch({ type: actionType.NEXT_PAGE, payload: {} });
    history.push("/desktop");
  };

  const handleCallClick = (e: any) => {
    e.stopPropagation();
    history.push("/play");
  };

  return (
    <div className={style.call_container}>
      <div className={style.avatar_box}>
        <div
          className={`${style.avatar} ${style[`avatar_${pageIndex}`]}`}
          style={{
            backgroundImage: `url(${imageAssets[pageIndex]})`,
          }}
        />
        <h1>{avatarHint[pageIndex]}</h1>
        <p className={style.bounce_dots}>邀请你进行视频通话<span>...</span></p>
      </div>
      <div className={style.call_box}>
      <div>
          <img src={hangoutImage} alt="hangout" onClick={handleHangoutClick} />
        </div>
        <div>
          <img src={callImage} alt="call" onClick={handleCallClick} />
        </div>
      </div>
      <audio src={callAudio} autoPlay={true} loop={true}/>
    </div>
  );
};

export default CallPage;
