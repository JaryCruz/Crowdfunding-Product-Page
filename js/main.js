const nav = document.querySelector('[data-mobile-menu]');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const selectionModal = document.querySelector('[data-selection-modal]');
const bookmarkIcon = document.querySelector('[data-bookmark-icon]');
const bookmarkText = document.querySelector('[data-bookmark-text]');
const successModal = document.querySelector('[data-success-modal]');
const bambooPledge = document.querySelector('[data-bamboo-pledge]');
const blackPledge = document.querySelector('[data-black-pledge]');
const moneyBacked = document.querySelector('[data-money-backed]');
const totalBackers = document.querySelector('[data-total-backers]');
const bambooInput = document.querySelector('[data-bamboo-input]');
const blackInput = document.querySelector('[data-black-input]');
const progressBar = document.querySelector('[data-progress-bar]');
const modal = document.querySelector('.selection-modal');
const blackBox = document.querySelector('[data-black-box]');
const bambooBox = document.querySelector('[data-bamboo-box]');

// Button Elements
const hamburgerBtn = document.querySelector('[data-hamburger-btn]');
const projectBtn = document.querySelector('[data-project-btn]');
const closeBtn = document.querySelector('[data-close-btn]');
const bookmarkBtn = document.querySelector('[data-bookmark-btn]');
const successBtn = document.querySelector('[data-success-btn]');
const bambooBtn = document.querySelector('[data-bamboo-btn]');
const blackBtn = document.querySelector('[data-black-btn]');
const bambooContinue = document.querySelector('[data-bamboo-continue]');
const blackContinue = document.querySelector('[data-black-continue]');
const selectBtn = document.querySelectorAll('.select');

// Statistics Variables
let backersAmount = 5007;
let totalMoney = 89914;
let width = 89;

// Click listeners for buttons
hamburgerBtn.addEventListener('click', navToggle);
projectBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
bookmarkBtn.addEventListener('click', bookMark);
successBtn.addEventListener('click', closeModal);
bambooBtn.addEventListener('click', openBamboo);
blackBtn.addEventListener('click', openBlack);
bambooContinue.addEventListener('click', submitBamboo);
blackContinue.addEventListener('click', submitBlack);
selectBtn.forEach(select => {
    select.addEventListener('click', openModal)
});

// Toggle Mobile Menu
function navToggle() {
    switchIcon();

    overlay.classList.toggle('shown');
    nav.classList.toggle('shown');
    body.classList.toggle('no-scroll');
}

// Flip icons for hamburger menu
function switchIcon() {
    if(hamburgerBtn.classList.contains('fa-bars')) {
        hamburgerBtn.classList.remove('fa-bars');
        hamburgerBtn.classList.add('fa-xmark');
    } else {
        hamburgerBtn.classList.remove('fa-xmark');
        hamburgerBtn.classList.add('fa-bars');
    }
}

function openModal() {
    selectionModal.style.display = 'block';
    overlay.classList.add('visible');
    hamburgerBtn.style.opacity = '0.5';
}

function closeModal() {
    selectionModal.style.display = 'none';
    successModal.style.display = 'none';
    overlay.classList.toggle('visible');
    hamburgerBtn.style.opacity = '1';
}

// Mark the project as a bookmark
function bookMark() {
    bookmarkIcon.classList.toggle('active');
    bookmarkText.classList.toggle('active');
}

// Shift to the modal completed 
function modalCompleted() {
    successModal.style.display = 'block';
    selectionModal.style.display = 'none';
}

// Display Bamboo and close Black
function openBamboo() {
    bambooPledge.style.display = 'flex';
    bambooBtn.style.backgroundColor = 'hsl(176, 50%, 47%)';
    bambooBox.style.border = '1px solid hsl(176, 50%, 47%)';
    blackPledge.style.display = 'none';
    blackBtn.style.backgroundColor = '#fff';
    blackBox.style.border = '1px solid rgb(230, 230, 230)';
}

// Display Black and close Bamboo
function openBlack() {
    blackPledge.style.display = 'flex';
    blackBtn.style.backgroundColor = 'hsl(176, 50%, 47%)';
    blackBox.style.border = '1px solid hsl(176, 50%, 47%)';
    bambooPledge.style.display = 'none';
    bambooBtn.style.backgroundColor = '#fff';
    bambooBox.style.border = '1px solid rgb(230, 230, 230)';
}

function submitBamboo() {
    // Check the input isn't less than 25
    if(bambooInput.value < 25) {
        return;
    } 

    incrementBackers();

    // Adds the money pledged to the total money raised
    const pledge = Number(bambooInput.value);
    totalMoney += pledge;
    moneyBacked.innerHTML = `$${totalMoney}`;

    increaseBar();
    modalCompleted();
}

function submitBlack() {
    // Check the input isn't less than 75
    if(blackInput.value < 75) {
        return;
    } 

    incrementBackers();

    // Adds the money pledged to the total money raised
    const pledge = Number(blackInput.value);
    totalMoney += pledge;
    moneyBacked.innerHTML = `$${totalMoney}`;

    increaseBar();
    modalCompleted();
}

// Increment the total number of backers by 1
const incrementBackers = () => {
    backersAmount++;
    totalBackers.innerHTML = backersAmount;
}

// Increases Progress by 1% Bar
const increaseBar = () => {
    width++;
    progressBar.style.width = width + '%';
}
