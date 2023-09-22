const titleElement = document.getElementById('animatedTitle');
let originalText = titleElement.textContent;
let currentIndex = 0;
let isUppercase = true;

function isUppercaseLetter(char) {
    return char === char.toUpperCase();
}

function animateTitle() {
    if (isUppercaseLetter(originalText[currentIndex])) {
        originalText = originalText.substring(0, currentIndex) + originalText[currentIndex].toLowerCase() + originalText.substring(currentIndex + 1);
    } else {
        originalText = originalText.substring(0, currentIndex) + originalText[currentIndex].toUpperCase() + originalText.substring(currentIndex + 1);
    }

    if (currentIndex >= originalText.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    document.title = originalText;
    setTimeout(animateTitle, 500);
}

animateTitle(); 

