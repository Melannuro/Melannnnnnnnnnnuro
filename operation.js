document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('video-background');
  var isReversed = false;

  video.addEventListener('timeupdate', function () {
    if (!isReversed && video.currentTime >= video.duration) {
      video.currentTime = video.duration;
      video.playbackRate = -1;
      isReversed = true;
    } else if (isReversed && video.currentTime <= 0) {
      video.playbackRate = 1;
      isReversed = false;
    }
  });
});
