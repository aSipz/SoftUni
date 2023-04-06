export function onChangeHandler(setter, onChangeSearch, e) {
    setter(values => ({ ...values, [e.target.name]: e.target.value }));
    onChangeSearch !== null && onChangeSearch({ [e.target.name]: e.target.value });
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