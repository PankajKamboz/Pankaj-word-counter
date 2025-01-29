function updateCounts() {
    let text = document.getElementById("textInput").value;
    let words = text.trim().split(/\s+/).filter(word => word.length > 0);
    let characters = text.length;

    document.getElementById("wordCount").innerText = words.length + " Words";
    document.getElementById("charCount").innerText = characters + " Characters";
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
