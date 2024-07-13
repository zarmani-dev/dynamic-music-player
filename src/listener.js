import {
  isAudioPlaying,
  loadTrack,
  nextBtnHandler,
  pauseBtnHandler,
  playBtnHandler,
  prevBtnHandler,
  progressAreaHandler,
  progressBarHandler,
  replayBtnHandler,
} from "./handler";
import {
  audio,
  nextBtn,
  pauseBtn,
  playBtn,
  prevBtn,
  progressArea,
  progressBar,
  replayBtn,
} from "./selectors";

const listener = () => {
  playBtn.addEventListener("click", playBtnHandler);
  pauseBtn.addEventListener("click", pauseBtnHandler);
  //   audio.addEventListener("loadeddata", loadTrack);
  replayBtn.addEventListener("click", replayBtnHandler);
  audio.addEventListener("timeupdate", progressBarHandler);
  progressArea.addEventListener("click", progressAreaHandler);
  //   progressArea.addEventListener("click", progressBarHandler);
  nextBtn.addEventListener("click", nextBtnHandler);
  prevBtn.addEventListener("click", prevBtnHandler);
};

export default listener;
