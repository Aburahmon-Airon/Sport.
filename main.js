// ВОПРОС 1
const True1 = document.querySelector('.T');
const False1 = document.querySelectorAll('.F');

function EndQuiz1() {
    if (True1) {
        True1.style.background = 'green';
        True1.style.color = 'white';
    }
    if (False1) {
        False1.forEach(function (button) {
            button.style.background = 'rgba(255, 0, 0, 0.685)';
            button.style.color = 'white';
        });
    }
}

if (True1) { True1.addEventListener('click', EndQuiz1); }
if (False1) {
    False1.forEach(function (button) {
        button.addEventListener('click', EndQuiz1);
    });
}

// ВОПРОС 2
const True2 = document.querySelector('.T2');
const False2 = document.querySelectorAll('.F2');

function EndQuiz2() {
    if (True2) {
        True2.style.background = 'green';
        True2.style.color = 'white';
    }
    if (False2) {
        False2.forEach(function (button) {
            button.style.background = 'rgba(255, 0, 0, 0.685)';
            button.style.color = 'white';
        });
    }
}

if (True2) { True2.addEventListener('click', EndQuiz2); }
if (False2) {
    False2.forEach(function (button) {
        button.addEventListener('click', EndQuiz2);
    });
}

// ВОПРОС 3
const True3 = document.querySelector('.T3');
const False3 = document.querySelectorAll('.F3');

function EndQuiz3() {
    if (True3) {
        True3.style.background = 'green';
        True3.style.color = 'white';
    }
    if (False3) {
        False3.forEach(function (button) {
            button.style.background = 'rgba(255, 0, 0, 0.685)';
            button.style.color = 'white';
        });
    }
}

if (True3) { True3.addEventListener('click', EndQuiz3); }
if (False3) {
    False3.forEach(function (button) {
        button.addEventListener('click', EndQuiz3);
    });
}

// ВОПРОС 4 
const True4 = document.querySelector('.T4');
const False4 = document.querySelectorAll('.F4');

function EndQuiz4() {
    if (True4) {
        True4.style.background = 'green';
        True4.style.color = 'white';
    }
    if (False4) {
        False4.forEach(function (button) {
            button.style.background = 'rgba(255, 0, 0, 0.685)';
            button.style.color = 'white';
        });
    }
}

if (True4) { True4.addEventListener('click', EndQuiz4); }
if (False4) {
    False4.forEach(function (button) {
        button.addEventListener('click', EndQuiz4);
    });
}

const submitBtn = document.querySelector('.contact button');
const myMessage = document.getElementById('to');

function triggerMessage() {
    if (myMessage) {
        myMessage.textContent = 'Thank you!';
        myMessage.classList.add('show');
        setTimeout(function() {
            myMessage.classList.remove('show');
        }, 3000);
    }
}

if (submitBtn) {
    submitBtn.addEventListener('click', triggerMessage);
}
