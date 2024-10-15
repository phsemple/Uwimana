document.getElementById("speakBtn").addEventListener("click", function() {
    let text = document.getElementById("text").innerText;
    
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.volume = 1; // Volume range is 0 to 1
    speech.rate = 1;   // Speed at which text is spoken (1 is default)
    speech.pitch = 1;  // Pitch range from 0 to 2
    speech.lang = 'sw'; // Language spoken (e.g., 'en-US', 'sw')

    window.speechSynthesis.speak(speech);
});