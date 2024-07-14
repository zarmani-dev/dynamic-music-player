import {
  audio,
  currentTime,
  duration,
  pauseBtn,
  playBtn,
  progressArea,
  progressBar,
  singer,
  title,
  trackImg,
} from "./selectors";
import calculateTimeStamp from "./calculateTimeStamp";
import tracks from "./state";

let interval;
let trackIndex = 0;

const setTrack = (index) => {
  trackIndex = index;
  audio.src = tracks[trackIndex].src;

  audio.addEventListener(
    "loadeddata",
    () => {
      loadTrack(audio);
    },
    { once: true }
  );
};

setTrack(0);
export const playBtnHandler = () => {
  console.log("audio play btn");
  playBtn.classList.toggle("hidden");
  pauseBtn.classList.toggle("hidden");
  //   setTrack(0);
  playTrack();
};

export const pauseBtnHandler = () => {
  audio.pause();

  playBtn.classList.toggle("hidden");
  pauseBtn.classList.toggle("hidden");
  clearInterval(interval);
};

export const replayBtnHandler = () => {
  audio.currentTime = 0;
  loadTrack(audio);
  audio.play();
};

export const playTrack = () => {
  audio.play();
  isAudioPlaying(audio);
};

export const nextBtnHandler = () => {
  if (trackIndex < tracks.length - 1) {
    setTrack(trackIndex + 1);
    audio.play();
  } else {
    setTrack(0);
    audio.play();
  }
};

export const prevBtnHandler = () => {
  if (trackIndex > 0) {
    setTrack(trackIndex - 1);
    audio.play();
  } else {
    setTrack(tracks.length - 1);
  }
};

// export const loadTrack = (src) => {
//   audio.src = src;
//   audio.load();
//   audio.addEventListener("loadeddata", () => {
//     console.log("data loaded");
//     loadCurrentTrack(audio);
//   });
// };

export const loadTrack = (track, volume = 0.15) => {
  let formattedDuration = calculateTimeStamp(track.duration);
  let formattedCurrentTime = calculateTimeStamp(track.currentTime);
  currentTime.innerText = `${zeroPrefix(
    formattedCurrentTime.minute
  )}:${zeroPrefix(formattedCurrentTime.remainingSeconds)}`;
  duration.innerText = `${zeroPrefix(formattedDuration.minute)}:${zeroPrefix(
    formattedDuration.remainingSeconds
  )}`;
  title.innerText = tracks[trackIndex].title;
  singer.innerText = tracks[trackIndex].singer;
  trackImg.src = tracks[trackIndex].imgSrc;
  track.volume = volume;

  //   return audio;
};

export const zeroPrefix = (num) => {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
};

export const isAudioPlaying = (track) => {
  clearInterval(interval);
  interval = setInterval(() => {
    let formattedCurrentTime = calculateTimeStamp(track.currentTime);
    currentTime.innerText = `${zeroPrefix(
      formattedCurrentTime.minute
    )}:${zeroPrefix(formattedCurrentTime.remainingSeconds)}`;
    if (audio.ended) {
      isFinished();
    }
  }, 1000);
};

export const progressBarHandler = () => {
  //   console.log(audio);
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  let progressBarWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressBarWidth}%`;
};

export const progressAreaHandler = (e) => {
  console.log(audio.currentTime);
  let progressWidth = progressArea.clientWidth;
  let clickedOffset = e.offsetX;
  let maxDuration = audio.duration;

  audio.currentTime = (clickedOffset / progressWidth) * maxDuration;
  //   playTrack();
  if (!audio.paused) {
    playTrack();
  }
};
// audio.addEventListener("timeupdate", progressBarHandler);

export const isFinished = () => {
  clearTimeout(interval);
  nextBtnHandler();
};
