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

// Example of counting words and characters (this can be added as needed)
document.getElementById("inputText").addEventListener("input", function() {
    var text = this.value;

    // Count words and characters
    var wordCount = text.trim().split(/\s+/).length;
    if (text.trim() === "") wordCount = 0;  // If text is empty

    var charCount = text.length;

    // Update counts on screen
    document.getElementById("wordCount").textContent = wordCount;
    document.getElementById("charCount").textContent = charCount;
});
