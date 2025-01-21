document.getElementById("inputText").addEventListener("input", function() {
    let inputText = document.getElementById("inputText").value.trim();

    // Immediately process the text as you type
    let charCount = inputText.length;
    let charFrequency = countCharacterFrequency(inputText);
    let wordFrequency = countWordFrequency(inputText);
    let wordCount = Object.values(wordFrequency).reduce((acc, item) => acc + item.count, 0); // Corrected word count calculation

    displayResults(charCount, charFrequency, wordCount, wordFrequency);
});

// Function to count character frequencies
function countCharacterFrequency(text) {
    let frequency = {};
    let totalCharacters = text.length;

    // Count the frequency of each character
    for (let char of text) {
        char = char.toLowerCase();
        if (char !== " ") { 
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }

    // Add percentage to each character's frequency
    for (let char in frequency) {
        frequency[char] = {
            count: frequency[char],
            percentage: ((frequency[char] / totalCharacters) * 100).toFixed(2) + '%'
        };
    }

    return frequency;
}

// Function to count word frequencies
function countWordFrequency(text) {
    let frequency = {};
    let words = text.split(/\s+/);  // Split the text into words by spaces
    let totalWords = words.filter(Boolean).length; // Count only non-empty words

    // Count the frequency of each word
    for (let word of words) {
        word = word.toLowerCase().replace(/[^a-z0-9]/gi, '');
        if (word !== "") {
            frequency[word] = (frequency[word] || 0) + 1;
        }
    }

    // Add percentage to each word's frequency
    for (let word in frequency) {
        frequency[word] = {
            count: frequency[word],
            percentage: ((frequency[word] / totalWords) * 100).toFixed(2) + '%'
        };
    }

    return frequency;
}

// Function to display results dynamically
function displayResults(charCount, charFrequency, wordCount, wordFrequency) {
    let charFrequencyList = document.getElementById("charFrequencyList");
    let wordFrequencyList = document.getElementById("wordFrequencyList");

    // Update total character count
    document.querySelector(".character-count-box h3:nth-of-type(1)").innerHTML = `Total Characters: ${charCount}`;

    // Clear previous frequency lists
    charFrequencyList.innerHTML = '';
    wordFrequencyList.innerHTML = '';

    // Display character frequencies with percentage
    for (const char in charFrequency) {
        charFrequencyList.innerHTML += `<li><strong>${char}</strong>: ${charFrequency[char].count} (${charFrequency[char].percentage})</li>`;
    }

    // Display word frequencies with percentage
    for (const word in wordFrequency) {
        wordFrequencyList.innerHTML += `<li><strong>${word}</strong>: ${wordFrequency[word].count} (${wordFrequency[word].percentage})</li>`;
    }

    // Update total word count
    document.querySelector(".word-count-box h3:nth-of-type(1)").innerHTML = `Total Words: ${wordCount}`;
}
