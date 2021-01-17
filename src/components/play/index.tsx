import React, { FC, useEffect, useRef } from "react";
import { useStore, actionType } from "../../store";
import { useHistory } from "react-router-dom";
import hangoutImage from "../../assets/image/hangout.png";
import config from "../../config";
// import videojs from "video.js";
import style from "./index.module.scss";

const PlayPage: FC = () => {
  const history = useHistory();
  const { state, dispatch } = useStore();
  const videoRef: any = useRef();
  const timer: any = useRef();
  const { pageIndex } = state;
  const { cdnUrl } = config;

  const handleHangoutClick = (e: any) => {
    e.stopPropagation();
    dispatch({ type: actionType.NEXT_PAGE, payload: {} });
    history.push("/call");
  };

  // useEffect(() => {
  // const player: any = videojs("video-js", {
  //   controls: false,
  //   autoplay: true,
  //   preload: "auto",
  //   loop: false,
  //   sources: [
  //     {
  //       src: `${cdnUrl}/video/main/${pageIndex}.mp4`,
  //       type: "video/mp4",
  //     },
  //   ],
  // });
  // function playVideo() {
  //   player?.play();
  // }
  // player.ready(function () {
  //   playVideo();
  // });
  // document.addEventListener("WeixinJSBridgeReady", playVideo, false);
  // return () => {
  //   document.removeEventListener("WeixinJSBridgeReady", playVideo, false);
  //   player.dispose();
  // };

  // }, [cdnUrl, pageIndex]);

  window.onresize = function () {
    videoRef.current.style.width = window.innerWidth + "px";
    videoRef.current.style.height = window.innerHeight + "px";
  };

  const getPixelRatio = function (context: any) {
    const backingStore =
      context.backingStorePixelRatio ||
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio ||
      1;
    return (window.devicePixelRatio || 1) / backingStore;
  };

  const handleVideoPlay = () => {
    const canvas: any = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    const video: any = document.querySelector("#video-js");

    timer.current = setInterval(() => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
    }, 10);
  };

  useEffect(() => {
    const video: any = document.querySelector("#video-js");
    const canvas: any = document.querySelector("#canvas");
    const context = canvas.getContext("2d");

    // 视频清晰化
    const ratio = getPixelRatio(context);
    canvas.width = canvas.width * ratio * 2;
    canvas.height = canvas.height * ratio * 2;

    function playVideo() {
      video.play();
    }

    document.addEventListener("WeixinJSBridgeReady", playVideo, false);

    return () => {
      clearInterval(timer.current);
      document.removeEventListener("WeixinJSBridgeReady", playVideo, false);
    };
  }, []);

  return (
    <div className={style.play_container}>
      <div className={style.play_wrapper}>
        <video
          id="video-js"
          className={`video-js ${style.video_player}`}
          ref={videoRef}
          style={{
            width: 0,
            height: 0,
            objectFit: "fill",
            // visibility: "hidden",
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
          // poster={`${cdnUrl}/image/poster/poster${pageIndex}.png`}
          // onTimeUpdate={handleTimeUpdate}
          src={`${cdnUrl}/video/main/${pageIndex}.mp4`}
          onCanPlayThrough={handleVideoPlay}
        ></video>
        <canvas
          id="canvas"
          className={style.video_canvas}
          style={{ height: "100vh", width: "100vw" }}
        ></canvas>
      </div>
      <div className={style.hangout_box}>
        <img src={hangoutImage} alt="hangout" onClick={handleHangoutClick} />
      </div>
    </div>
  );
};

export default PlayPage;
