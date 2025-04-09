// Define audio tracks
const audioTracks = {
   
    track1: new Audio('./Filhall 1.mp3'),
    track2: new Audio('./Filhall 2.mp3'),
    track3: new Audio('./Hamari Adhuri Kahani.mp3'),
    track4: new Audio('./Hasi.mp3'),
    track5: new Audio('./Hawa Banke.mp3'),
    track6: new Audio('./Hiriye.mp3'),
    track7: new Audio('./Humnava Mere.mp3'),
    track8: new Audio('./Ishq Mubarak.mp3'),
    track9: new Audio('./Kabhi Na Kabhi.mp3'),
    track10: new Audio('./Kabhi Shaam Dhale.mp3'),
    track11: new Audio('./Kaise Hua.mp3'),
    track12: new Audio('./Khairiyat.mp3'),
    track13: new Audio('./Lo Maan Liya.mp3'),
    track14: new Audio('./Main Dhoondne Ko Zamaane Mein.mp3'),
    track15: new Audio('./Main Woh Chaand.mp3'),
    track16: new Audio('./Main Yahaan Hoon.mp3'),
    track17: new Audio('./Mujhe Peene Do.mp3'),
    track18: new Audio('./Mujhko Barsaat Bana Lo.mp3'),
    track19: new Audio('./Naina.mp3'),
    track20: new Audio('./O Bedardeya.mp3'),
    
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
