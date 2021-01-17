import React, { FC, useEffect, useRef } from "react";
import { useStore, actionType } from "../../store";
import { useHistory } from "react-router-dom";
import hangoutImage from "../../assets/image/hangout.png";
import config from "../../config";
import videojs from "video.js";
import style from "./index.module.scss";

const PlayPage: FC = () => {
  const history = useHistory();
  const { state, dispatch } = useStore();
  const videoRef: any = useRef();
  const { pageIndex } = state;
  const { cdnUrl } = config;

  const handleHangoutClick = (e: any) => {
    e.stopPropagation();
    dispatch({ type: actionType.NEXT_PAGE, payload: {} });
    history.push("/call");
  };

  useEffect(() => {
    const player: any = videojs("video-js", {
      controls: false,
      autoplay: true,
      preload: "auto",
      loop: false,
      sources: [
        {
          src: `${cdnUrl}/${pageIndex}.mp4`,
          type: "video/mp4",
        },
      ],
    });
    function playVideo() {
      player?.play();
    }
    player.ready(function() {
      playVideo();
    });
    document.addEventListener("WeixinJSBridgeReady", playVideo, false);
    return () => {
      document.removeEventListener("WeixinJSBridgeReady", playVideo, false);
      player.dispose();
    };
  }, [cdnUrl, pageIndex]);

  return (
    <div className={style.play_container}>
      <div className={style.play_wrapper}>
        <video
          id="video-js"
          className={`video-js ${style.video_player}`}
          ref={videoRef}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          // autoPlay={true}
          controls={false}
          onEnded={handleHangoutClick}
          preload="true"
          playsInline={true}
          webkit-playsinline="true"
          x5-video-player-type="h5-page"
          x5-playsinline="true"
          x-webkit-airplay="true"
          x5-video-player-fullscreen="false"
          x5-video-orientation="portraint"
          x5-video-ignore-metadata="true"
        >
        </video>
      </div>
      <div className={style.hangout_box}>
        <img src={hangoutImage} alt="hangout" onClick={handleHangoutClick} />
      </div>
    </div>
  );
};

export default PlayPage;
