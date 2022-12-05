function solve(string) {
    let array = JSON.parse(string);
    let outputArray = ['<table>'];
    outputArray.push(makeHeading(array));
    array.forEach(element => {
        outputArray.push(makeRow(element));
    });
    outputArray.push('</table>');
    console.log(outputArray.join('\n'));


    function makeHeading(input) {
        let headingArray = ['<tr>'];
        for (const key in input[0]) {
            if (!headingArray.includes(key)) {
                headingArray.push(`<th>${escape(key)}</th>`)
            }
        }
        headingArray.push('</tr>');
        return headingArray.join('');
    }

    function makeRow(object) {
        let rowArray = ['<tr>'];
        for (const key in object) {
            rowArray.push(`<td>${escape(object[key])}</td>`)
        }
        rowArray.push('</tr>');
        return rowArray.join('');
    }

    function escape(string) {
        return string
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
solve(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
"Grade":10}]`
);