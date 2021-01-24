import React, { FC, useEffect } from "react";
import Player from "../player";

interface AudioPlayerProps {
  src: string;
  loop?: boolean;
}

const AudioPlayer: FC<AudioPlayerProps> = (props) => {
  const { loop = false, src = "" } = props;

  useEffect(() => {
    const player = new Player({
      id: "audio-player",
      url: src,
      width: 0,
      height: 0,
      autoplay: true,
      videoInit: true,
      download: false,
      pip: false,
      cssFullscreen: false,
      keyShortcut: "off",
      errorTips: ``,
      closeVideoDblclick: true,
      controls: false,
      loop,
      "x5-video-player-type": "h5",
      "x5-video-orientation": "portraint",
      playsinline: true,
      rotateFullscreen: true,
    });
    player.play();
  }, [src, loop]);

  return <div id="audio-player" style={{ visibility: "hidden", opacity: 0 }} />;
};

export default AudioPlayer;
