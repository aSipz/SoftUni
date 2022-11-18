function extract(text) {
    let pattern = /\b[A-Za-z0-9]+[A-Za-z0-9.\-_]*(?<![.\-_])@[a-z]+\-?[a-z]+\.[a-z]+\.?[a-z]*\b/g;
    let emails = text.match(pattern);
    console.log(emails.join('\n'));
}
extract('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');