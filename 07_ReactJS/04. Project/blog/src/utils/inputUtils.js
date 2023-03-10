export function onChangeHandler(setter, e) {
    setter(values => ({ ...values, [e.target.name]: e.target.value }))
}

export function lengthValidation(setter, length, e) {
    setter(errors => ({ ...errors, [e.target.name]: e.target.value.length < length }));
}

export function repassValidation(setter, pass, repass, e) {
    setter(errors => ({ ...errors, [e.target.name]: pass !== repass }));
}

export function emailValidation(setter, e) {
    const emailPattern = /^(?:\w+\.)*\w+@\w+(?:\.\w+)+$/;
    setter(errors => ({ ...errors, [e.target.name]: !emailPattern.test(e.target.value) }));
}

export function urlValidation(setter, e) {
    setter(errors => ({ ...errors, [e.target.name]: !(e.target.value.startsWith('https://') || e.target.value.startsWith('http://')) }));
}