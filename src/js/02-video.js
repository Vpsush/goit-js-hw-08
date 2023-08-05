import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  const CURRENT_TIME_KEY = 'videoplayer-current-time';
  const iframe = document.querySelector('#vimeo-player'); // Use the correct ID

  const player = new Player(iframe, {
    fullscreen: true,
    quality: '1080p',
    loop: true,
  });

  const playbackTime = function savePlaybackTime(currentTime) {
    const seconds = currentTime.seconds;
    console.log(seconds);
    localStorage.setItem(CURRENT_TIME_KEY, seconds);
  };
  player.on('timeupdate', throttle(playbackTime, 1000));

  const saveData = localStorage.getItem(CURRENT_TIME_KEY);
  const parsedData = JSON.parse(saveData);
  console.log(parsedData);

  player
    .setCurrentTime(30.456)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
});
