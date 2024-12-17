// Select all artwork containers
const artworks = document.querySelectorAll('.art-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// Function to display artwork by index
function showArtwork(index) {
    artworks.forEach((art, i) => {
        art.classList.remove('active');
        if (i === index) art.classList.add('active');
    });
}

// Event Listeners for navigation
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? artworks.length - 1 : currentIndex - 1;
    showArtwork(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % artworks.length;
    showArtwork(currentIndex);
});

// Initialize first artwork
showArtwork(currentIndex);
const playButton = document.getElementById('play-music');
const bgMusic = document.getElementById('bg-music');

