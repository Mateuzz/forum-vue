import type { FieldInput } from "./fields"

export type ValidationResult = { 
    messages: string[],
    valid: boolean,
    state: string,
}

// basic html validator
// basic validator (function)
// Validator function ()
// validator
    // filters funcoes
    // rules funcoes
    // behavior funcoes ou classes

// mensagens, estado atual, se é valido ou nao
// Validator,

messages.value = messages 

function onFinish(results: ValidationResult[], field: FieldInput) {
    const invalidStates = ['validating', 'error']
    const statesPriority = ['initial', 'valid', 'warn', 'error']

    field.state.message.length = 0

    for (const result of results) {
        
    }
}

export function validationValid(message: string, validationStateType: string) {
    return { message, validationStateType, valid: true }
}

export function validationInvalid(message: string, validationStateType: string) {
    return { message, validationStateType, valid: false }
}

export function validationError(message: string) {
    return { message, validationStateType: 'error', valid: false }
}

export function validationWarn(message: string) {
    return { message, validationStateType: 'warn', valid: false }
}

export function validationOk(message: string = '') {
    return { message, validationStateType: 'ok', valid: true }
}

export function validating(message: string = '') {
    return { message, validationStateType: 'validating', valid: false }
}