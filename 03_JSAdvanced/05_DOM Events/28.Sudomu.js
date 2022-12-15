function solve() {
    let table = document.querySelector('tbody');
    let sum = 6;
    let checkBtn = document.querySelector('button');
    let clearBtn = document.getElementsByTagName('button')[1];
    let outputField = document.querySelector('#check p');
    checkBtn.addEventListener('click', function() {
        let isRight = false;
        let rows = Array.from(table.children);
        for (const row of rows) {
            isRight = true;
            let currentSum = 0;
            Array.from(row.children).forEach(cell => {
                currentSum += Number(cell.children[0].value);
            });
            if (currentSum != sum) {
                isRight = false;
                break;
            }
        }
        if (isRight) {
            let check = true;
            for (let i = 0; i < 3; i++) {
                let currentSum = 0;
                for (const row of rows) {
                    currentSum += Number(row.children[i].children[0].value);
                }
                if (currentSum != sum) {
                    check = false;
                    isRight = false;
                    break;
                }
                if (!check) {
                    break;
                }
            }
        }
        if (isRight) {
            outputField.textContent = 'You solve it! Congratulations!';
            outputField.style.color = 'green';
            document.querySelector('table').style.border = '2px solid green';
        } else {
            outputField.textContent = 'NOP! You are not done yet...';
            outputField.style.color = 'red';
            document.querySelector('table').style.border = '2px solid red';
        }
    });
    clearBtn.addEventListener('click', function() {
        Array.from(document.getElementsByTagName('input')).forEach(field => {
            field.value = '';
        });
        document.querySelector('table').style.border = '';
        outputField.textContent = '';
    });
}