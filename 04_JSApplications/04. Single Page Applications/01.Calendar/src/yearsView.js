import { showMonths } from './monthsView.js';

const sections = document.querySelectorAll('section');
const yearsSection = document.getElementById('years');

yearsSection.addEventListener('click', showMonths)

export function showYears() {
    [...sections].forEach(e => e.style.display = 'none');
    yearsSection.style.display = 'block';
}