import * as Yup from 'yup'

let yup = require('yup');

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(3, "Name must be at least 3 characters long.")
        .required("Password is Required"),
})

export default formSchema