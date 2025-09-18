
const dropdown = document.getElementById('dropdown-container');
const dropdownToggleBtn = document.getElementById('dropdown-toggle-btn');
const dropdownCloseBtn = document.getElementById('dropdown-close-btn');

const modalBackdrop = document.getElementById('modal-backdrop');

function toggleElement(element) {
    element.classList.toggle('on');
}

dropdownToggleBtn.addEventListener('click', () => {
    toggleElement(dropdown);
    toggleElement(modalBackdrop);
});

dropdownCloseBtn.addEventListener('click', () => {
    toggleElement(dropdown);
    toggleElement(modalBackdrop);
});