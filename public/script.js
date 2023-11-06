// QUESTIONS
const Q1 = document.getElementById('Q1');
const Q2 = document.getElementById('Q2');
const Q3 = document.getElementById('Q3');
const Q4 = document.getElementById('Q4');
const Q5 = document.getElementById('Q5');

// ANSWERS
const A1 = document.getElementById('A1');
const A2 = document.getElementById('A2');
const A3 = document.getElementById('A3');
const A4 = document.getElementById('A4');
const A5 = document.getElementById('A5');

// ANSWERS
const flip1 = document.getElementById('flip1');
const flip2 = document.getElementById('flip2');
const flip3 = document.getElementById('flip3');
const flip4 = document.getElementById('flip4');
const flip5 = document.getElementById('flip5');



let isFlipped = false;



let isAnswerVisible = false;

Q1.addEventListener('click', () => {
      
  if (isAnswerVisible && isFlipped) {
    // If the answer is currently visible, hide it
    A1.classList.add('hidden');
    flip1.style.transform = 'scaleY(1)';
  } else {
    // If the answer is currently hidden, show it
    A1.classList.remove('hidden');
    flip1.style.transform = 'scaleY(-1)'; // Flip the icon vertically
  }
  
  // Toggle the visibility flag
  isAnswerVisible = !isAnswerVisible;
  isFlipped = !isFlipped;
});
Q2.addEventListener('click', () => {
  if (isAnswerVisible) {
    // If the answer is currently visible, hide it
    A2.classList.add('hidden');
    flip2.style.transform = 'scaleY(1)';
  } else {
    // If the answer is currently hidden, show it
    A2.classList.remove('hidden');
    flip2.style.transform = 'scaleY(-1)';
  }
  
  // Toggle the visibility flag
  isAnswerVisible = !isAnswerVisible;
  isFlipped = !isFlipped;
});
Q3.addEventListener('click', () => {
  if (isAnswerVisible) {
    // If the answer is currently visible, hide it
    A3.classList.add('hidden');
    flip3.style.transform = 'scaleY(1)';
  } else {
    // If the answer is currently hidden, show it
    A3.classList.remove('hidden');
    flip3.style.transform = 'scaleY(-1)';
  }
  
  // Toggle the visibility flag
  isAnswerVisible = !isAnswerVisible;
    isFlipped = !isFlipped;
});
Q4.addEventListener('click', () => {
  if (isAnswerVisible) {
    // If the answer is currently visible, hide it
    A4.classList.add('hidden');
    flip4.style.transform = 'scaleY(1)';
  } else {
    // If the answer is currently hidden, show it
    A4.classList.remove('hidden');
    flip4.style.transform = 'scaleY(-1)';
  }
  
  // Toggle the visibility flag
  isAnswerVisible = !isAnswerVisible;
    isFlipped = !isFlipped;
});
Q5.addEventListener('click', () => {
  if (isAnswerVisible) {
    // If the answer is currently visible, hide it
    A5.classList.add('hidden');
    flip5.style.transform = 'scaleY(1)';
  } else {
    // If the answer is currently hidden, show it
    A5.classList.remove('hidden');
    flip5.style.transform = 'scaleY(-1)';
  }
  
  // Toggle the visibility flag
  isAnswerVisible = !isAnswerVisible;
    isFlipped = !isFlipped;
});
