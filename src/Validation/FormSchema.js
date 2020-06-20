import * as Yup from 'yup'


const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(3, "Name must be at least 3 characters long.")
        .required("Name is required!"),
    instructions: Yup
        .string(),
    pizzaSize: Yup
        .string()
})

export default formSchema