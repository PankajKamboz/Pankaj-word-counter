// Function to update word and character count and frequency lists
function updateWordCountAndFreq() {
    var text = document.getElementById("inputText").value;

    // Word and Character Count
    var wordCount = text.trim().split(/\s+/).length;
    if (text.trim() === "") wordCount = 0; // Handle empty text
    var charCount = text.length;

    document.getElementById("wordCount").textContent = wordCount;
    document.getElementById("charCount").textContent = charCount;

    // Update Word Frequency
    var wordFrequency = getWordFrequency(text);
    updateFrequencyList(wordFrequency, "wordFrequencyList");

    // Update Character Frequency
    var charFrequency = getCharacterFrequency(text);
    updateFrequencyList(charFrequency, "charFrequencyList");
}

// Function to get word frequency
function getWordFrequency(text) {
    var words = text.trim().split(/\s+/);
    var wordFrequency = {};

    words.forEach(function(word) {
        word = word.toLowerCase();
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    return wordFrequency;
}

// Function to get character frequency
function getCharacterFrequency(text) {
    var charFrequency = {};

    for (var i = 0; i < text.length; i++) {
        var char = text[i].toLowerCase();
        if (char !== " ") { // Exclude spaces from character count
            charFrequency[char] = (charFrequency[char] || 0) + 1;
        }
    }

    return charFrequency;
}

// Function to update the frequency list
function updateFrequencyList(frequency, listId) {
    var listElement = document.getElementById(listId);
    listElement.innerHTML = ''; // Clear the current list

    for (var key in frequency) {
        if (frequency.hasOwnProperty(key)) {
            var listItem = document.createElement("li");
            listItem.textContent = `${key}: ${frequency[key]}`;
            listElement.appendChild(listItem);
        }
    }
}

// Event listener for textarea input
document.getElementById("inputText").addEventListener("input", updateWordCountAndFreq);
