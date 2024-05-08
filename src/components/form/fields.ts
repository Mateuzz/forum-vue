import type { ValidationRule } from "./logic"

export type FieldValue = any
export type FieldOnSubmit = (this: FieldBase) => Promise<boolean>

export type FieldBaseProps = {
    validator?: ValidationRule
    state: FieldValidationState
}

export type FieldValidationState = {
    valid: boolean
    message: string
    warnLevel: string
}

export type FieldBase = FieldBaseProps & {
    element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
}

export type FieldInputProps = FieldBaseProps & {
    type: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | 'Obsolete values' | 'datetime'
}

export type FieldRadioProps = & FieldBaseProps & {
    props: {
        name: string,
    }
}

export type FieldSelectProps = FieldBaseProps & {
    options: FieldValue[] | Record<string, FieldValue>
}

export type FieldInput = FieldBase & FieldInputProps
export type FieldSelect = FieldBase & FieldSelectProps
