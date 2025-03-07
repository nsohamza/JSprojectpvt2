const image = document.querySelector('#ft-img');
const counter = document.querySelector('#counter');
const restartButton = document.querySelector('#btn');
const double = document.querySelector('#double');

counter.textContent = 0;

image.addEventListener('click', (event) => {
    counter.textContent = parseInt(counter.textContent) + 1;

    if (parseInt(counter.textContent) > 3 && parseInt(counter.textContent) < 15) {
        document.body.style.backgroundColor = 'red';
        restartButton.removeAttribute('hidden');
    } else if (parseInt(counter.textContent) > 14) {
         double.removeAttribute('hidden');
    }
});

restartButton.addEventListener('click', (event) => {
    counter.textContent = 0;
    document.body.style.backgroundColor = 'green';
    restartButton.setAttribute('hidden', true);
    double.setAttribute('hidden', true);
});
    
double.addEventListener('click', (event) => {
    counter.textContent = parseInt(counter.textContent) * 2;
});



