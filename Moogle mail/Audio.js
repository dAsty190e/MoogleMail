var song;

function setup() {
    var currentPage = window.location.href;
    if (currentPage.includes('maile')) {
        // if i am on the home page, get song from here
        song = new Audio('./Moogle song/cupo sound.mp3');
    } else if (currentPage.includes('Table')) {
        // else if i am on the table page get song from here
        song = new Audio('../Moogle song/cupo sound.mp3');
    }
    setTimeout(() => {
        song.play();
    }, 1000)
}

setup();