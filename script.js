// Define audio tracks
const audioTracks = {
    track1: new Audio('./Aadat.mp3'),
    track2: new Audio('./Aaj Ro Len De.mp3'),
    track3: new Audio('./Ae Dil Hai Mushkil.mp3'),
    track4: new Audio('./Ae Dil Zara.mp3'),
    track5: new Audio('./Baarish.mp3'),
    track6: new Audio('./Baatein Ye Kabhi Na.mp3'),
    track7: new Audio('./Ban Kar Hawa.mp3'),
    track8: new Audio('./Bekhayali.mp3'),
    track9: new Audio('./Bewafa Hai Tu.mp3'),
    track10: new Audio('./Bol Do Na Zara.mp3'),
    track11: new Audio('./Chal Wahan Jaate Hain.mp3'),
    track12: new Audio('./Chale Aana.mp3'),
    track13: new Audio('./Channa Mereya.mp3'),
    track14: new Audio('./Chhod Diya.mp3'),
    track15: new Audio('./Dekhte Dekhte.mp3'),
    track16: new Audio('./Dil Chahte Ho.mp3'),
    track17: new Audio('./Dil De Diya.mp3'),
    track18: new Audio('./Dil Maang Raha Hai.mp3'),
    track19: new Audio('./Do Pal.mp3'),
    track20: new Audio('./Ek Tarfa.mp3'),
    track21: new Audio('./Filhall 1.mp3'),
    track22: new Audio('./Filhall 2.mp3'),
    track23: new Audio('./Hamari Adhuri Kahani.mp3'),
    track24: new Audio('./Hasi.mp3'),
    track25: new Audio('./Hawa Banke.mp3'),
    track26: new Audio('./Hiriye.mp3'),
    track27: new Audio('./Humnava Mere.mp3'),
    track28: new Audio('./Ishq Mubarak.mp3'),
    track29: new Audio('./Kabhi Na Kabhi.mp3'),
    track30: new Audio('./Kabhi Shaam Dhale.mp3'),
    track31: new Audio('./Kaise Hua.mp3'),
    track32: new Audio('./Khairiyat.mp3'),
    track33: new Audio('./Lo Maan Liya.mp3'),
    track34: new Audio('./Main Dhoondne Ko Zamaane Mein.mp3'),
    track35: new Audio('./Main Woh Chaand.mp3'),
    track36: new Audio('./Main Yahaan Hoon.mp3'),
    track37: new Audio('./Mujhe Peene Do.mp3'),
    track38: new Audio('./Mujhko Barsaat Bana Lo.mp3'),
    track39: new Audio('./Naina.mp3'),
    track40: new Audio('./O Bedardeya.mp3'),
    track41: new Audio('./O Saathi.mp3'),
    track42: new Audio('./Pachtaoge.mp3'),
    track43: new Audio('./Phir Mohabbat.mp3'),
    track44: new Audio('./Sach Keh Raha Hai.mp3'),
    track45: new Audio('./Saiyaara.mp3'),
    track46: new Audio('./Sanam Teri Kasam.mp3'),
    track47: new Audio('./Tera Ban Jaunga.mp3'),
    track48: new Audio('./Tere Liye.mp3'),
    track49: new Audio('./Teri Yaadon Mein.mp3'),
    track50: new Audio('./Thodi Jagah.mp3'),
    track51: new Audio('./Tu Dua Hai Dua.mp3'),
    track52: new Audio('./Tu Hai Ki Nahi.mp3'),
    track53: new Audio('./Tujhe Kaise, Pata Na Chala.mp3'),
    track54: new Audio('./Tum Hi Aana.mp3'),
    track55: new Audio('./Tum Jo Aaye.mp3'),
    track56: new Audio('./Uska Hi Banana.mp3'),
    track57: new Audio('./Woh Lamhe Woh Baatein.mp3'),
    track58: new Audio('./Ye Tune Kya Kiya.mp3'),
    track59: new Audio('./Yeh Jism.mp3'),
    track60: new Audio('./Zihaal e Miskin.mp3'),  
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
