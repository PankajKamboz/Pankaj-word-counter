function updateCounts() {
    let text = document.getElementById("textInput").value.trim();
    let words = text.split(/\s+/).filter(word => word.length > 0);
    let characters = text.length;

    document.getElementById("wordCount").innerText = `Total Words: ${words.length}`;
    document.getElementById("charCount").innerText = `Total Characters: ${characters}`;

    updateWordFrequency(words);
    updateCharacterFrequency(text);
}

function updateWordFrequency(words) {
    let wordCounts = {};
    words.forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });

    let totalWords = words.length;
    let wordFrequencyDiv = document.getElementById("wordFrequency");
    wordFrequencyDiv.innerHTML = `<h4>Word Frequency:</h4>`;
    
    for (let word in wordCounts) {
        let percentage = ((wordCounts[word] / totalWords) * 100).toFixed(2);
        wordFrequencyDiv.innerHTML += `<p>${word}: ${wordCounts[word]} (${percentage}%)</p>`;
    }
}

function updateCharacterFrequency(text) {
    let charCounts = {};
    text.split("").forEach(char => {
        if (char.trim() !== "") {
            charCounts[char] = (charCounts[char] || 0) + 1;
        }
    });

    let totalChars = text.length;
    let charFrequencyDiv = document.getElementById("charFrequency");
    charFrequencyDiv.innerHTML = `<h4>Character Frequency:</h4>`;

    for (let char in charCounts) {
        let percentage = ((charCounts[char] / totalChars) * 100).toFixed(2);
        charFrequencyDiv.innerHTML += `<p>${char}: ${charCounts[char]} (${percentage}%)</p>`;
    }
}

function clearText() {
    document.getElementById("textInput").value = "";
    updateCounts();
}

function convertToUpperCase() {
    let textArea = document.getElementById("textInput");
    textArea.value = textArea.value.toUpperCase();
    updateCounts();
}

function convertToLowerCase() {
    let textArea = document.getElementById("textInput");
    textArea.value = textArea.value.toLowerCase();
    updateCounts();
}

function convertToSentenceCase() {
    let textArea = document.getElementById("textInput");
    textArea.value = textArea.value.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
    updateCounts();
}

function convertToTitleCase() {
    let textArea = document.getElementById("textInput");
    textArea.value = textArea.value.replace(/\b\w/g, c => c.toUpperCase());
    updateCounts();
}
