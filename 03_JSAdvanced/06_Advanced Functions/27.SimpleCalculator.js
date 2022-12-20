function calculator() {
    return {
        init(a, b, c) {
            return this.num1 = document.querySelector(a),
                this.num2 = document.querySelector(b),
                this.result = document.querySelector(c)
        },
        add() { this.result.value = Number(this.num1.value) + Number(this.num2.value) },
        subtract() { this.result.value = Number(this.num1.value) - Number(this.num2.value) },
    }
}