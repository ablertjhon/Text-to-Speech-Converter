document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('text-input');
    const convertBtn = document.getElementById('convert-btn');

    // Initialize the SpeechSynthesis API
    const synth = window.speechSynthesis;

    // Function to convert text to speech
    function convertToSpeech() {
        const text = textInput.value;
        if (text.trim() === '') {
            alert('Please enter some text to convert.');
            return;
        }

        // Create a new SpeechSynthesisUtterance object
        const utterance = new SpeechSynthesisUtterance(text);

        // Speak the text
        synth.speak(utterance);
    }

    // Event listener for Convert button click
    convertBtn.addEventListener('click', convertToSpeech);
});
