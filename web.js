// Define quiz questions and options
const quizQuestions = [
    {
      question: "Who is known as 'The Little Master' in cricket?",
      options: ["Sachin Tendulkar", "Virat Kohli", "Rahul Dravid", "Kapil Dev"],
      answer: "Sachin Tendulkar"
    },
    {
      question: "Which country won the ICC Cricket World Cup in 2019?",
      options: ["India", "Australia", "England", "New Zealand"],
      answer: "England"
    },
    {
      question: "Who holds the record for the highest individual score in Test cricket?",
      options: ["Brian Lara", "Sachin Tendulkar", "Don Bradman", "Rohit Sharma"],
      answer: "Brian Lara"
    }
  ];
  
  // Function to display quiz questions
  function displayQuiz(index) {
    const currentQuestion = quizQuestions[index];
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${currentQuestion.question}</h5>
          <div class="btn-group-vertical" role="group" aria-label="Quiz Options">
            ${currentQuestion.options.map(option => `
              <button type="button" class="btn btn-outline-primary">${option}</button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }
  
  // Initial quiz setup
  let currentIndex = 0;
  displayQuiz(currentIndex);
  
  // Event listener for Next button
  document.getElementById('nextButton').addEventListener('click', function() {
    currentIndex++;
    if (currentIndex < quizQuestions.length) {
      displayQuiz(currentIndex);
    } else {
      // Show submit button when all questions are answered
      document.getElementById('nextButton').style.display = 'none';
      document.getElementById('submitButton').style.display = 'block';
    }
  });
  
  // Event listener for Submit button (for demonstration, you can implement score calculation)
  document.getElementById('submitButton').addEventListener('click', function() {
    alert('Quiz submitted! You can implement score calculation and display here.');
  });