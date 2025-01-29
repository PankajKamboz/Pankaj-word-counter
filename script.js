// Function to handle text input changes and update word count and character count
document.getElementById('inputText').addEventListener('input', function() {
    const text = this.value;
    const wordCount = getWordCount(text);
    const charCount = text.length;

    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('charCount').textContent = charCount;

    // Update word and character frequency
    updateFrequency(text);
});

// Function to count words in the input text
function getWordCount(text) {
    const words = text.trim().split(/\s+/);
    return words[0] === "" ? 0 : words.length;
}

// Function to update word frequency and character frequency
function updateFrequency(text) {
    const wordList = {};
    const charList = {};

    // Count word frequency
    text.trim().split(/\s+/).forEach(word => {
        word = word.toLowerCase().replace(/[^\w\s]/g, ''); // remove punctuation
        wordList[word] = wordList[word] ? wordList[word] + 1 : 1;
    });

    // Count character frequency
    text.split('').forEach(char => {
        if (char.trim()) {
            charList[char] = charList[char] ? charList[char] + 1 : 1;
        }
    });

    // Display word frequency
    let wordFrequencyList = '';
    Object.keys(wordList).forEach(word => {
        wordFrequencyList += `<li>${word}: ${wordList[word]}</li>`;
    });
    document.getElementById('wordFrequencyList').innerHTML = wordFrequencyList;

    // Display character frequency
    let charFrequencyList = '';
    Object.keys(charList).forEach(char => {
        charFrequencyList += `<li>${char}: ${charList[char]}</li>`;
    });
    document.getElementById('charFrequencyList').innerHTML = charFrequencyList;
}

// Toggle case dropdown
function toggleCaseDropdown() {
    const dropdown = document.getElementById('caseDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Change text case
function changeCase(caseType) {
    let inputText = document.getElementById('inputText').value;

    switch (caseType) {
        case 'sentence':
            inputText = inputText.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
            break;
        case 'title':
            inputText = inputText.replace(/\b(\w)/g, (match) => match.toUpperCase());
            break;
        case 'uppercase':
            inputText = inputText.toUpperCase();
            break;
        case 'lowercase':
            inputText = inputText.toLowerCase();
            break;
    }

    document.getElementById('inputText').value = inputText;
    updateFrequency(inputText); // Update frequency after changing case
}
