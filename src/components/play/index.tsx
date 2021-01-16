import React, { FC } from "react";
import { useStore, actionType } from "../../store";
import { useHistory } from "react-router-dom";
import hangoutImage from "../../assets/image/hangout.png";
import config from "../../config";
import style from "./index.module.scss";
const video = require("../../assets/video/0.mp4");

const PlayPage: FC = () => {
  const history = useHistory();
  const { state, dispatch } = useStore();
  const { pageIndex } = state;
  const { total } = config;

  const videoAssets = (() => {
    const assets = [];
    for (let i = 0; i < total; i++) {
      assets.push(require(`../../assets/video/${i}.mp4`));
    }
    return assets;
  })();

  const handleHangoutClick = (e: any) => {
    e.stopPropagation();
    dispatch({ type: actionType.NEXT_PAGE, payload: {} });
    history.push("/call");
  };

  return (
    <div className={style.play_container}>
      <div className={style.play_wrapper}>
        {console.log('==>', videoAssets, videoAssets[pageIndex], pageIndex)}
        <video
          src={videoAssets[pageIndex]}
          autoPlay={true}
          controls={false}
          onEnded={handleHangoutClick}
          playsInline={true}
          x5-video-player-type="h5"
          webkit-playsinline={true}
        />
      </div>
      <div className={style.hangout_box}>
        <img src={hangoutImage} alt="hangout" onClick={handleHangoutClick} />
      </div>
    </div>
  );
};

export default PlayPage;
