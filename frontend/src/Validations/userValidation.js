import * as yup from 'yup';

export const registerUserSchema = yup.object({
    firstname: yup.string().min(3).max(15).required(),
    lastname: yup.string().min(3).max(15).required(),
    username: yup.string().min(6).max(15).required(),
    email: yup.string().email().min(3).max(30).required(),
    password: yup.string().min(3).max(30).required(),
})

export const loginUserSchema = yup.object({
    email: yup.string().email().min(3).max(30).required(),
    password: yup.string().min(3).max(30).required(),
})
