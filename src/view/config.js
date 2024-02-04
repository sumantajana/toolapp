
const initialField = {
    name: '',
    email: '',
    subject: '',
    message: ''
}
const initialState = {
    isValidationError: false
}
const fieldRule = {
    name: { title: 'Name', type: 'default', minLength: 4, isRequired: true },
    email: { title: 'Email', type: 'email', isRequired: true },
    subject: { title: 'Subject', type: 'default', minLength: 8, isRequired: true },
    message: { title: 'Message', type: 'default', minLength: 4, isRequired: true },
}
export {
    fieldRule,
    initialField,
    initialState
}