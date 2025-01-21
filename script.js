// Toggle Case Dropdown
function toggleCaseDropdown() {
    document.getElementById('caseDropdown').classList.toggle('show');
}

// Change Case Functionality
function changeCase(caseType) {
    const inputText = document.getElementById('inputText').value;
    let result;
    switch (caseType) {
        case 'sentence':
            result = inputText.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
            break;
        case 'title':
            result = inputText.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
            break;
        case 'uppercase':
            result = inputText.toUpperCase();
            break;
        case 'lowercase':
            result = inputText.toLowerCase();
            break;
    }
    document.getElementById('inputText').value = result;
}

// Toggle Translation Dropdown
function toggleTranslateDropdown() {
    document.getElementById('translateDropdown').classList.toggle('show');
}

// Translate Content Functionality
async function translateContent(targetLanguage) {
    const inputText = document.getElementById('inputText').value;

    try {
        const response = await fetch(
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(inputText)}`
        );

        if (!response.ok) {
            throw new Error('Translation API error');
        }

        const result = await response.json();
        const translatedText = result[0]?.map(part => part[0]).join('');
        document.getElementById('inputText').value = translatedText;
    } catch (error) {
        alert('Translation failed. Please try again later.');
    }
}
