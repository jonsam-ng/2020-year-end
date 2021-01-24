import React, { FC, useEffect, useRef } from "react";
import { useStore, actionType } from "../../store";
import { useHistory } from "react-router-dom";
import hangoutImage from "../../assets/image/hangout.png";
import config from "../../config";
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
    const videoPlayer: any = document.getElementById("video-js");
    function playVideo() {
      videoPlayer?.play();
    }

    if (videoPlayer) {
      videoPlayer.setAttribute("x5-playsinline", "true");
      videoPlayer.setAttribute("playsinline", "true");
      videoPlayer.setAttribute("webkit-playsinline", "true");
      videoPlayer.setAttribute("x5-video-videoPlayer-type", "h5");
      videoPlayer.setAttribute("x-webkit-airplay", "true");
      videoPlayer.setAttribute("x5-video-videoPlayer-fullscreen", "true");
      videoPlayer.setAttribute("x5-video-orientation", "true");
      videoPlayer.setAttribute("x5-video-ignore-metadata", "true");
      videoPlayer.setAttribute(
        "controlslist",
        "nofullscreen nodownload noremoteplayback"
      );
    }
    playVideo();
    document.addEventListener("WeixinJSBridgeReady", playVideo, false);
    return () => {
      document.removeEventListener("WeixinJSBridgeReady", playVideo, false);
    };
  }, [cdnUrl, pageIndex]);

  window.onresize = function () {
    const videoPlayer: any = document.getElementById("video-js");
    if (videoPlayer) {
      videoPlayer.style.width = "100vw";
      videoPlayer.style.height = "100vh";
    }
  };

  return (
    <div className={style.play_container}>
      <div className={style.play_wrapper}>
        <video
          id="video-js"
          className={`video-js ${style.video_player}`}
          ref={videoRef}
          autoPlay={true}
          controls={false}
          onEnded={handleHangoutClick}
          preload="true"
          playsInline={true}
          webkit-playsinline="true"
          x5-video-player-type="h5"
          x5-playsinline="true"
          x-webkit-airplay="true"
          x5-video-player-fullscreen="true"
          x5-video-orientation="portraint"
          x5-video-ignore-metadata="true"
          controlsList="nofullscreen nodownload noremoteplayback"
          poster={`${cdnUrl}/image/poster/poster${pageIndex}.png`}
          // src={`${cdnUrl}/video/main/${pageIndex}.mp4`}
        >
          <source
            src={`${cdnUrl}/video/main/${pageIndex}.mp4`}
            type="video/mp4"
          />
        </video>
        <div
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 999,
            background: "transparent",
          }}
        />
      </div>
      <div className={style.hangout_box}>
        <img
          src={hangoutImage}
          alt="hangout"
          onTouchStart={handleHangoutClick}
        />
      </div>
    </div>
  );
};

export default PlayPage;
