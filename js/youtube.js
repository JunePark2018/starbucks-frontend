// This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');
  
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: '8OkpRK2_gVs', // video to play
    playerVars: {
        autoplay: 1,
        loop: 1,
        playlist: '8OkpRK2_gVs'
    },
    events: {
        onReady: function (event) {
            event.target.mute();
        }
    }
  });
}