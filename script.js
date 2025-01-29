// Toggle visibility of the dropdown menu
function toggleCaseDropdown() {
    var dropdown = document.getElementById("caseDropdown");
    dropdown.classList.toggle("show");
}

// Change the case of the text in the textarea
function changeCase(caseType) {
    var inputText = document.getElementById("inputText");
    var text = inputText.value;

    switch (caseType) {
        case 'sentence':
            inputText.value = toSentenceCase(text);
            break;
        case 'title':
            inputText.value = toTitleCase(text);
            break;
        case 'uppercase':
            inputText.value = text.toUpperCase();
            break;
        case 'lowercase':
            inputText.value = text.toLowerCase();
            break;
    }
    document.getElementById("caseDropdown").classList.remove("show");
    updateWordCountAndFreq();
}

// Convert text to Sentence case
function toSentenceCase(str) {
    return str.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function(match) {
        return match.toUpperCase();
    });
}

// Convert text to Title Case
function toTitleCase(str) {
    return str.replace(/\b([a-z]+)/g, function(match) {
        return match.charAt(0).toUpperCase() + match.slice(1);
    });
}

// Function to update word and character count and frequency lists
function updateWordCountAndFreq() {
    var text = document.getElementById("inputText").value.trim();
    
    var words = text.length > 0 ? text.split(/\s+/) : [];
    var wordCount = words.length;
    var charCount = text.length;
    
    // Update counts in UI
    document.getElementById("wordCount").textContent = wordCount;
    document.getElementById("charCount").textContent = charCount;

    updateWordFrequency(words, wordCount);
    updateCharacterFrequency(text, charCount);
}

// Update word frequency with percentage
function updateWordFrequency(words, totalWords) {
    var wordFrequency = {};
    words.forEach(word => {
        word = word.toLowerCase();
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    var wordList = '';
    for (var word in wordFrequency) {
        let percentage = ((wordFrequency[word] / totalWords) * 100).toFixed(2);
        wordList += `<li>${word}: ${wordFrequency[word]} (${percentage}%)</li>`;
    }
    document.getElementById("wordFrequencyList").innerHTML = wordList;
}

// Update character frequency with percentage
function updateCharacterFrequency(text, totalChars) {
    var charFrequency = {};
    for (var char of text) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    var charList = '';
    for (var char in charFrequency) {
        let percentage = ((charFrequency[char] / totalChars) * 100).toFixed(2);
        charList += `<li>${char}: ${charFrequency[char]} (${percentage}%)</li>`;
    }
    document.getElementById("charFrequencyList").innerHTML = charList;
}

// Event listener for textarea input
document.getElementById("inputText").addEventListener("input", updateWordCountAndFreq);
