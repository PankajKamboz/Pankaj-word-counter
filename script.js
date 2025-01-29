function updateCounts() {
    let text = document.getElementById("textInput").value;
    let words = text.trim().split(/\s+/).filter(word => word.length > 0);
    let characters = text.replace(/\s/g, '').length;

    document.getElementById("wordCount").innerText = words.length;
    document.getElementById("charCount").innerText = characters;
}

function clearText() {
    document.getElementById("textInput").value = "";
    updateCounts();
}
