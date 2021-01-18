import React, { FC, useEffect, useRef } from "react";
import { useStore, actionType } from "../../store";
import { useHistory } from "react-router-dom";
import hangoutImage from "../../assets/image/hangout.png";
import config from "../../config";
import videojs from "video.js";
import style from "./index.module.scss";
// @ts-ignore
// import wx from "weixin-js-sdk";

wx.config({
  debug: false,
  appId: "",
  timestamp: 1,
  nonceStr: "",
  signature: "",
  jsApiList: [],
});

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
          src: `${cdnUrl}/video/main/${pageIndex}.mp4`,
          type: "video/mp4",
        },
      ],
    });

    function playVideo() {
      player?.play();
    }
    player.ready(function () {
      player.setAttribute("x5-playsinline", "true");
      player.setAttribute("playsinline", "true");
      player.setAttribute("webkit-playsinline", "true");
      playVideo();
    });
    document.addEventListener("WeixinJSBridgeReady", playVideo, false);
    return () => {
      document.removeEventListener("WeixinJSBridgeReady", playVideo, false);
      player.dispose();
    };
  }, [cdnUrl, pageIndex]);

  // useEffect(() => {
  // const videoPlayer: any = document.getElementById("video-js");
  // wx.ready(function () {
  // videoPlayer.play();
  // });
  // }, []);

  window.onresize = function () {
    videoRef.current.style.width = window.innerWidth + "px";
    videoRef.current.style.height = window.innerHeight + "px";
  };

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
            objectFit: "fill",
          }}
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
        ></video>
      </div>
      <div className={style.hangout_box}>
        <img src={hangoutImage} alt="hangout" onClick={handleHangoutClick} />
      </div>
    </div>
  );
};

export default PlayPage;
