import { showMonths } from "./monthsView.js";
import { showYears } from "./yearsView.js";

const sections = document.querySelectorAll('section');
const sectionsDays = document.querySelectorAll('.daysCalendar');
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

[...sectionsDays].forEach(s => s.addEventListener('click', showMonths));

export function showDays(e) {
    if(e.target.tagName != 'TD' && e.target.tagName != 'CAPTION') {
        return;
    }
    [...sections].forEach(e => e.style.display = 'none');
    if (e.target.tagName == 'TD') {
        const month = months.indexOf(e.target.children[0].textContent) + 1;
        const year = e.target.parentElement.parentElement.parentElement.children[0].textContent;
        const monthSection = document.getElementById(`month-${year}-${month}`);
        monthSection.style.display = 'block';
    } else {
        showYears();
    }
}