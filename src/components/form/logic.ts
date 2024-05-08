import { validationError, validationOk, type ValidationResult } from "./FieldValidationResult";
import type { FieldBase,  FieldValue } from "./fields";

export type ValidationRule = (value: FieldBase) => ValidationResult | Promise<ValidationResult>

export class Validator {
    private rules : ValidationRule[] = []
    behavior: 'invalid-any' | 'invalid-all' = 'invalid-all'

    constructor() {

    }

    async validate(field: FieldBase) : Promise<ValidationResult[]> {
        return Promise.resolve([])
    }

    addRule(rule: ValidationRule) {
        this.rules.push(rule)
    }

    static withHtmlValidation() {
        return new Validator().addRule(basicHtmlValidationRule)
    }
}

// controlar regras
// controlar exibicao
// controlar quando e sei vai validar


export function basicHtmlValidationRule(field: FieldBase) : ValidationResult {
    if (!field.eleRef.validity.valid) {
        const error = field.eleRef.validationMessage
        return validationError(field.eleRef.validationMessage)
    }
    return validationOk()
}