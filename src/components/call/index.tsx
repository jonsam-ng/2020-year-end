import React, { FC } from "react";
import { useStore, actionType } from "../../store";
import hangoutImage from "../../assets/image/hangout.png";
import callImage from "../../assets/image/call.png";
import { useHistory } from "react-router-dom";
// import AudioPlayer from "../common/audioPlayer";
import config from "../../config";
import style from "./index.module.scss";

const CallPage: FC = () => {
  const history = useHistory();
  const { state, dispatch } = useStore();
  const { pageIndex } = state;
  const { avatarHint, cdnUrl } = config;

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
            backgroundImage: `url(${
              cdnUrl + "/image/avatar/" + pageIndex + ".png"
            })`,
          }}
        />
        <h1>{avatarHint[pageIndex]}</h1>
        <p className={style.bounce_dots}>
          邀请你进行视频通话<span>...</span>
        </p>
      </div>
      <div className={style.call_box}>
        <div>
          <img
            src={hangoutImage}
            alt="hangout"
            onTouchStart={handleHangoutClick}
          />
        </div>
        <div>
          <img src={callImage} alt="call" onTouchStart={handleCallClick} />
        </div>
      </div>
      {/* <AudioPlayer src={`${cdnUrl}/audio/call.mp3`} loop={true} /> */}
        {/* 主动交互使 audio autoplay */}
      {/* document.addEventListener('DOMContentLoaded', function () {
        function audioAutoPlay() {
            var audio = document.getElementById('audio');
                audio.play();
            document.addEventListener("WeixinJSBridgeReady", function () {
                audio.play();
            }, false);
        }
        audioAutoPlay();
        });
        //--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
        document.addEventListener('touchstart', function () {
            function audioAutoPlay() {
                var audio = document.getElementById('audio');
                    audio.play();
            }
            audioAutoPlay();
        }); */}

      <audio
        src={`${cdnUrl}/audio/call.mp3`}
        loop={true}
        autoPlay={true}
        preload="preload"
        controls={false}
        className="hidden"
      ></audio>
    </div>
  );
};

export default CallPage;
