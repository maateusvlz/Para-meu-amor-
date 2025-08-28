// Function to create floating hearts
function createHeart() {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.innerText = '❤️';
    
    // Random position
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Append to body
    document.body.appendChild(heart);
    
    // Remove heart after animation
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Function to create floating phrases
function createPhrase() {
    const phrases = ['Eu Te Amo', 'I Love You'];
    const phraseText = phrases[Math.floor(Math.random() * phrases.length)];
    
    const phrase = document.createElement('span');
    phrase.classList.add('phrase');
    phrase.innerText = phraseText;
    
    // Random position
    phrase.style.left = Math.random() * 100 + 'vw';
    
    // Append to body
    document.body.appendChild(phrase);
    
    // Remove phrase after animation
    phrase.addEventListener('animationend', () => {
        phrase.remove();
    });
}

// Function to play background music
function playBackgroundMusic() {
    const music = document.getElementById('backgroundMusic');
    music.play().then(() => {
        console.log('Music is playing');
    }).catch(error => {
        console.log('Autoplay was prevented:', error);
    });
}

// Event listener for heart button
document.getElementById('heartButton').addEventListener('click', () => {
    // Play background music on first click
    playBackgroundMusic();
    
    // Create a large number of hearts and phrases
    for (let i = 0; i < 7000; i++) {
        setTimeout(() => {
            createHeart();
            
            // 50% chance to create a phrase
            if (Math.random() < 0.5) {
                createPhrase();
            }
        }, i * 30); // Create hearts and phrases with a slight delay between each
    }
});

// Create bubbles in the background
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 50 + 20; // Random size
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random duration
    document.body.appendChild(bubble);
    
    // Remove bubble after animation
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Create bubbles every 2 seconds
setInterval(createBubble, 2000);

// Attempt to play music on page load (will be muted)
window.addEventListener('load', () => {
    const music = document.getElementById('backgroundMusic');
    music.play().then(() => {
        console.log('Music is playing (muted)');
    }).catch(error => {
        console.log('Autoplay was prevented:', error);
    });
});
