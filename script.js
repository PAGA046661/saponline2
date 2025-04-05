// Define audio tracks
const audioTracks = {
    track1: new Audio('./xxxxxxxxxxxxxx'),
    track2: new Audio('./'),
    track3: new Audio('./'),
    track4: new Audio('./'),
    track5: new Audio('./'),
    track6: new Audio('./'),
    track7: new Audio('./'),
    track8: new Audio('./'),
    track9: new Audio('./'),
    track10: new Audio('./'),
    track11: new Audio('./'),
    track12: new Audio('./'),
    track13: new Audio('./'),
    track14: new Audio('./'),
    track15: new Audio('./'),
    track16: new Audio('./'),
    track17: new Audio('./'),
    track18: new Audio('./'),
    track19: new Audio('./'),
    track20: new Audio('./'),
    track21: new Audio('./'),
    track22: new Audio('./'),
    track23: new Audio('./'),
    track24: new Audio('./'),
    track25: new Audio('./'),
    track26: new Audio('./'),
    track27: new Audio('./'),
    track28: new Audio('./'),
    track29: new Audio('./'),
    track30: new Audio('./'),
    track31: new Audio('./'),
    track32: new Audio('./'),
    track33: new Audio('./'),
    track34: new Audio('./'),
    track35: new Audio('./'),
    track36: new Audio('./'),
    track37: new Audio('./'),
    track38: new Audio('./'),
    track39: new Audio('./'),
    track40: new Audio('./'),
    track41: new Audio('./'),
    track42: new Audio('./'),
    track43: new Audio('./'),
    track44: new Audio('./'),
    track45: new Audio('./'),
    track46: new Audio('./'),
    track47: new Audio('./'),
    track48: new Audio('./'),
    track49: new Audio('./'),
    track50: new Audio('./'),
    track51: new Audio('./'),
    track52: new Audio('./'),
    track53: new Audio('./'),
    track54: new Audio('./'),
    track55: new Audio('./'),
    track56: new Audio('./'),
    track57: new Audio('./'),
    track58: new Audio('./'),
    track59: new Audio('./'),
    track60: new Audio('./'),  
    };

// Function to play or pause individual tracks based on checkbox
function toggleMusic(checkbox) {
    const track = checkbox.getAttribute('data-audio');
    const audio = audioTracks[track];
    
    if (checkbox.checked) {
        audio.play();
    } else {
        audio.pause();
    }
}

// JavaScript to handle theme toggling
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });
});
