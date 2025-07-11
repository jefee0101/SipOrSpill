const allQuestions = {
  funny: [
    "What's your weirdest habit?",
    "What's your most awkward moment ever?",
    "Have you ever laughed at the wrong moment?",
    "What's the silliest thing you're afraid of?",
    "What's the dumbest thing you've cried about?",
    "What’s the most embarrassing song you secretly like?",
    "Have you ever farted in public and blamed someone else?",
    "What's your go-to joke that nobody laughs at?",
    "What's your clumsiest accident?",
    "Have you ever tripped in front of your crush?",
    "What's the weirdest thing you've ever said by accident?",
    "What’s a fashion trend you regret following?",
    "What’s the worst haircut you ever had?",
    "What cartoon character do you secretly relate to?",
    "Have you ever talked in your sleep?",
    "What’s your weirdest nickname?",
    "What’s the weirdest text you've ever received?",
    "What’s the most random thing you’ve Googled?",
    "What's the silliest fight you’ve had?",
    "Have you ever mistaken a stranger for someone else?",
  ],
  romantic: [
    "Who was your first crush?",
    "Have you ever written a love letter?",
    "Do you believe in soulmates?",
    "Have you ever fallen for a friend?",
    "What's your love language?",
    "What was your most romantic moment?",
    "Have you ever sent a love confession text?",
    "What's your ideal first date?",
    "Have you ever had a love triangle?",
    "What's your dream proposal?",
    "What song reminds you of someone you love?",
    "What’s your ultimate relationship goal?",
    "Have you ever had a long-distance relationship?",
    "What’s your relationship dealbreaker?",
    "Have you ever had a crush on a friend’s partner?",
    "What's your biggest dating fear?",
    "Have you ever dreamed of someone romantically?",
    "Have you ever kept a relationship secret?",
    "Do you believe love can last forever?",
    "What’s the most romantic thing someone did for you?",
  ],
  spicy: [
    "Have you ever had a secret relationship?",
    "Who's the hottest person you know?",
    "Have you ever kissed more than one person in a day?",
    "What's the most romantic thing you've done?",
    "Have you ever flirted with someone you shouldn't have?",
    "What's your biggest turn-on?",
    "What's your most spicy dream?",
    "Have you ever had a crush on someone older?",
    "Have you ever sent a risky photo?",
    "What’s your favorite physical feature in someone?",
    "Have you ever been caught staring?",
    "What’s the boldest move you’ve ever made?",
    "Have you ever lied to impress someone you liked?",
    "What’s your opinion on kissing on the first date?",
    "Have you ever had a crush on a teacher?",
    "Have you ever had a secret admirer?",
    "What's the spiciest rumor you've heard about yourself?",
    "Would you ever date someone just for fun?",
    "Have you ever had a flirty dream about someone in this room?",
    "What’s something flirty you've done you regret?",
  ],
  deep: [
    "What's your biggest fear?",
    "What’s one thing you'd change about your past?",
    "Have you ever felt completely alone?",
    "What's a moment that changed your life?",
    "What's your biggest insecurity?",
    "What do you think people misunderstand about you?",
    "What’s your biggest failure?",
    "What’s a secret you’ve never told anyone?",
    "What do you value most in life?",
    "Have you ever forgiven someone who didn’t deserve it?",
    "What makes you feel truly loved?",
    "What’s a belief you used to have but don’t anymore?",
    "When was the last time you cried and why?",
    "What’s the hardest choice you've had to make?",
    "Do you believe everything happens for a reason?",
    "What’s something you wish you had the courage to say?",
    "What memory haunts you the most?",
    "What motivates you when you're down?",
    "Have you ever lost someone close?",
    "What’s one thing you fear people will discover about you?",
  ],
  custom: [],
};

let previousQuestions = [];
let currentQuestion = "";

function getNewQuestion(reset = false) {
  const category = document.getElementById("categorySelect").value;

  let questionPool = [];
  if (category === "all") {
    Object.values(allQuestions).forEach((arr) => questionPool.push(...arr));
  } else {
    questionPool = [...allQuestions[category]];
  }

  if (questionPool.length === 0) {
    document.getElementById("question").textContent =
      "No questions available in this category.";
    return;
  }

  let newQuestion;
  do {
    const index = Math.floor(Math.random() * questionPool.length);
    newQuestion = questionPool[index];
  } while (newQuestion === currentQuestion && questionPool.length > 1);

  if (currentQuestion) previousQuestions.push(currentQuestion);
  currentQuestion = newQuestion;

  showQuestion(newQuestion);
}

function showPreviousQuestion() {
  if (previousQuestions.length > 0) {
    const last = previousQuestions.pop();
    currentQuestion = last;
    showQuestion(last);
  } else {
    alert("No previous question!");
  }
}

function showQuestion(text) {
  const card = document.getElementById("questionCard");
  card.classList.add("flip");
  setTimeout(() => {
    document.getElementById("question").textContent = text;
    card.classList.remove("flip");
  }, 300);
}

function playSound(type) {
  const sound = document.getElementById(type + "Sound");
  sound.currentTime = 0;
  sound.play();
}

function addCustomQuestion() {
  const input = document.getElementById("customInput");
  const text = input.value.trim();
  if (text.length < 5) {
    alert("Please enter a valid question.");
    return;
  }
  allQuestions.custom.push(text);
  input.value = "";
  alert("Custom question added!");
}
