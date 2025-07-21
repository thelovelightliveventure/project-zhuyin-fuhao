const zhuyinChars = ["ㄅ", "ㄆ", "ㄇ", "ㄈ", "ㄉ", "ㄊ", "ㄋ", "ㄌ"];
const targetText = document.getElementById("target-text");
const inputField = document.getElementById("typing-input");
const feedback = document.getElementById("feedback");
const keyboard = document.getElementById("zhuyin-keyboard");
const targetBox = document.getElementById('target-box');

function renderKeyboard() {
  zhuyinChars.forEach(char => {
    const btn = document.createElement("button");
    btn.textContent = char;
    btn.addEventListener("click", () => {
      inputField.value += char;
      checkTyping();
    });
    keyboard.appendChild(btn);
  });
}

// Set the target text (could later be randomized)
targetBox.textContent = targetText;

// Compare user input to target text
userInput.addEventListener('input', () => {
  const input = userInput.value;
  const isCorrect = targetText.startsWith(input);

  if (isCorrect) {
    userInput.style.borderColor = 'green';
  } else {
    userInput.style.borderColor = 'red';
  }
});

function checkTyping() {
  const userInput = inputField.value;
  const target = targetText.textContent;

  let resultHTML = "";
  let correct = 0;

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === target[i]) {
      resultHTML += `<span class="correct">${userInput[i]}</span>`;
      correct++;
    } else {
      resultHTML += `<span class="incorrect">${userInput[i]}</span>`;
    }
  }

  feedback.innerHTML = resultHTML;

  // Optional: calculate CPM (characters per minute)
  const accuracy = ((correct / target.length) * 100).toFixed(1);
  console.log(`Accuracy: ${accuracy}%`);
}

inputField.addEventListener("input", checkTyping);

renderKeyboard();