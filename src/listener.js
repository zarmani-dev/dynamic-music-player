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
  dynamicArea,
  nextBtn,
  pauseBtn,
  playBtn,
  prevBtn,
  progressArea,
  progressBar,
  replayBtn,
} from "./selectors";

const listener = () => {
  dynamicArea.addEventListener("animationend", () => {
    console.log("Animation end");
  });
  playBtn.forEach((currentPlayBtn) => {
    currentPlayBtn.addEventListener("click", playBtnHandler);
  });
  pauseBtn.forEach((currentPlayBtn) => {
    currentPlayBtn.addEventListener("click", pauseBtnHandler);
  });
  //   audio.addEventListener("loadeddata", loadTrack);
  replayBtn.addEventListener("click", replayBtnHandler);
  audio.addEventListener("timeupdate", progressBarHandler);
  progressArea.addEventListener("click", progressAreaHandler);
  //   progressArea.addEventListener("click", progressBarHandler);
  //   nextBtn.addEventListener("click", nextBtnHandler);
  //   prevBtn.addEventListener("click", prevBtnHandler);
  nextBtn.forEach((currentNextBtn) => {
    currentNextBtn.addEventListener("click", nextBtnHandler);
  });
  prevBtn.forEach((currentPrevBtn) => {
    currentPrevBtn.addEventListener("click", prevBtnHandler);
  });
};

export default listener;
