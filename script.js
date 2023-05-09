
const levelOptions = document.querySelector('#level-options');
const rangeBetween = document.querySelector('.range-between');
const numberInput = document.querySelector('#number-input');
const submitButton = document.querySelector('#check-ans-button');
const instruction = document.querySelector('.heading-guess-number');
const count = document.querySelector('.total-count');
const restart = document.querySelector('#restart-button');


let random = Math.floor(Math.random() * 10);
let count_value = 0;
let flag = true;

numberInput.focus();

levelOptions.addEventListener('change', () => {
    if (levelOptions.value === 'Medium') {
        rangeBetween.innerText = '0 to 50';
        random = Math.floor(Math.random() * 10 *5);
    } else if (levelOptions.value === 'Hard') {
        rangeBetween.innerText = '0 to 100';
        random = Math.floor(Math.random() * 10 *10);
    } else {
        rangeBetween.innerText = '0 to 10';
        random = Math.floor(Math.random() * 10);
    }
});


submitButton.addEventListener('click', (event) => {
    if (numberInput.value != '') {
        if (flag) {
            event.preventDefault(); // prevent the form from submitting and reloading the page
            count_value++;

            if (random == numberInput.value) {
                instruction.innerText = "Win!!!";
                flag = false;
            }
            else if (random < numberInput.value) {
                instruction.innerText = "Guess a Small Number";
                numberInput.value = '';
                numberInput.focus();
            }
            else {
                instruction.innerText = "Guess a Larger Number";
                numberInput.value = '';
                numberInput.focus();
            }
            count.innerText = count_value;
        }
    }
});

restart.addEventListener('click', () => {
    location.reload();
});
