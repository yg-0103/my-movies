import React from 'react';
import YouTube from 'react-youtube';

let opts = {
  width: '640',
  height: '390',
  // 매개변수: https://developers.google.com/youtube/player_parameters
  playerVars: {
    autoplay: 1,
    modestbranding: 1,
    showinfo: 0,
    controls: 0,
    fs: 0,
    cc_load_policy: 0,
    iv_load_policy: 3,
    autohide: 0,
    loop: 1,
  },
};

function YoutubePlayer({ videoId, opt }) {
  opts = { ...opts, opt };
  return <YouTube opts={opts} videoId={videoId} />;
}

export default YoutubePlayer;
