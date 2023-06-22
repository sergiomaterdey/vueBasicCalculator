const app = Vue.createApp({
    data() {
        return {
            formData: {
                num1: '',
                num2: '',
                result: ''
            },
            num1Valid: true,
            num2Valid: true,
            num1Empty: false,
            num2Empty: false
        }
    },
    methods: {
        validateNumber(number) {
            //Expresión regular que acepta int y float
            numberRegex = /^[0-9]+(\.[0-9]+)?$/
            if (!numberRegex.test(this.formData[number]))
                this[number + 'Valid'] = false
            else
                this[number + 'Valid'] = true

            //Hacer una validación para el caso de que añada un número después de intentar operar en blanco
            //Si los inputs vuelven a estar vacíos se dejan por defecto
            if (this.isEmpty(number)) {
                this[number + 'Valid'] = true
                this[number + 'Empty'] = false
            }
        },

        isEmpty(number) {
            if (!this.formData[number].length) {
                this[number + 'Empty'] = true
                return true
            } else {
                this[number + 'Empty'] = false
                return false
            }
        },

        add() {
            if (!this.isEmpty('num1') && !this.isEmpty('num2'))
                this.formData.result = parseFloat(this.formData.num1) + parseFloat(this.formData.num2)
        },

        subtract() {
            if (!this.isEmpty('num1') && !this.isEmpty('num2'))
                this.formData.result = parseFloat(this.formData.num1) - parseFloat(this.formData.num2)
        },

        multiply() {
            if (!this.isEmpty('num1') && !this.isEmpty('num2'))
                this.formData.result = parseFloat(this.formData.num1) * parseFloat(this.formData.num2)
        },

        divide() {
            if (!this.isEmpty('num1') && !this.isEmpty('num2'))
                this.formData.result = parseFloat(this.formData.num1) / parseFloat(this.formData.num2)
        },
    }
})