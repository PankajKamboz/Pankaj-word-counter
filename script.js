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
    // Close dropdown after selection
    document.getElementById("caseDropdown").classList.remove("show");
    updateWordCountAndFreq(); // Update frequency counts after case change
}

// Convert text to Sentence case
function toSentenceCase(str) {
    return str.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function(match) {
        return match.toUpperCase();
    });
}

// Convert text to Title case
function toTitleCase(str) {
    return str.replace(/\b([a-z]+)/g, function(match) {
        return match.charAt(0).toUpperCase() + match.slice(1);
    });
}

// Function to update word and character count and frequency lists
function updateWordCountAndFreq() {
    var text = document.getElementById("inputText").value;

    var wordCount = text.trim().split(/\s+/).length;
    if (text.trim() === "") wordCount = 0; // Handle empty text
    var charCount = text.length;

    document.getElementById("wordCount").textContent = wordCount;
    document.getElementById("charCount").textContent = charCount;
}

// Event listener for textarea input
document.getElementById("inputText").addEventListener("input", updateWordCountAndFreq);
