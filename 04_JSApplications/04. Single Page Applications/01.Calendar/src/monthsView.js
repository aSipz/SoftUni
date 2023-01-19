import { showDays } from './daysView.js';

const sections = document.querySelectorAll('section');
const sectionsMonths = document.querySelectorAll('.monthCalendar');

[...sectionsMonths].forEach(s => s.addEventListener('click', showDays));

export function showMonths(e) {
    if (e.target.tagName != 'TD' && e.target.tagName != 'CAPTION') {
        return;
    }
    if (e.target.parentElement.parentElement.parentElement.parentElement.className == 'daysCalendar') {
        return;
    }
    let year;
    [...sections].forEach(e => e.style.display = 'none');
    if (e.target.tagName == 'TD') {
        year = e.target.children[0].textContent;
    } else {
        year = e.target.textContent.split(' ')[1];
    }
    const yearSection = document.getElementById(`year-${year}`);
    yearSection.style.display = 'block';
}