// 🎬 Start button fades out startPage and shows questionPage
document.getElementById('startBtn').addEventListener('click', function () {
  const startPage = document.getElementById('startPage');
  const questionPage = document.getElementById('questionPage');

  startPage.style.opacity = '0';
  setTimeout(() => {
    startPage.classList.add('hidden');
    questionPage.classList.remove('hidden');
    questionPage.style.opacity = '1';
  }, 600);
});

// 🧠 Questions array
const questions = [
  "What's your favorite color?",
  "Favorite hobby?",
  "Favorite animal?",
  "Dream job?",
  "Favorite food?",
  "Favorite season?",
  "Music you vibe with?",
  "A place you'd love to visit?",
  "A unique talent?",
  "A word that describes you?"
];

let currentQuestionIndex = 0;
let answers = [];

// 📝 Handle name submission via Enter or click
document.getElementById('nameForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('nameInput').value.trim();

  if (name !== "") {
    document.getElementById('questionPage').classList.remove('hidden');
    document.getElementById('fortuneContainer').classList.remove('hidden');
    document.getElementById('questionPrompt').textContent = questions[currentQuestionIndex];
    document.getElementById('questionPage').classList.add('hidden'); // Hide name input
  }
});

// ➡️ Move to next question and collect answer
document.getElementById('questionForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent page reload

  const answer = document.getElementById('userAnswer').value.trim();
  if (answer !== "") {
    answers.push(answer);
    currentQuestionIndex++;
    document.getElementById('userAnswer').value = "";

    if (currentQuestionIndex < questions.length) {
      document.getElementById('questionPrompt').textContent = questions[currentQuestionIndex];
    } else {
      document.getElementById('fortuneContainer').classList.add('hidden');
      document.getElementById('storyOutput').classList.remove('hidden');
      document.getElementById('storyText').textContent = generateFortune(answers);
    }
  }

});

// 🔮 Final story generator
function generateFortune(ans) {
  return `In the realm of ${ans[0]}, a soul named Zeke thrives on ${ans[1]}.
They are guided by the spirit of the ${ans[2]}, dreaming to be a ${ans[3]}.
Fed by ${ans[4]}, moving with the rhythm of ${ans[6]}, they journey to ${ans[7]},
blessed by the winds of ${ans[5]}, wielding the gift of ${ans[8]}.
The world knows them by one word: "${ans[9]}" — and their story is just beginning.`;
}
