import "./style/navbar.css";
import "./style/dropdown.css";
import "./style/grid.css";
import "./style/style.css";
import "./style/section.css";
import "./style/menu.css";
import "./style/modal.css";
import "./style/display.css";
import "./style/servicos.css";
import "./style/footer.css";
import "./style/carrossel.css";

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