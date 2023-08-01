import throttle from 'lodash.throttle';

const options = {
  id: 59777392,
  width: 640,
  loop: true,
};

const player = new Vimeo.Player('made-in-ny', options);

player.setVolume(0);

player.on('play', function () {
  console.log('played the video!');
});

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
