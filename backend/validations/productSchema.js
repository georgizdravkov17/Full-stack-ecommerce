const yup = require("yup");

const productSchema = yup.object({
    name: yup.string().min(3).max(30).required(),
    description: yup.string().min(10).max(50).required(),
    price: yup.number().min(0).required()
})

module.exports = {
    productSchema
}