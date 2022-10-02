const validate = validations => {
  const errors = {}

  validations.forEach(validator => {
    if (typeof validator.functions === 'function') {
      const validationError = validator.functions(validator.value)

      if (validationError) {
        errors[validator.name] = validationError
      }
    }
    if (typeof validator.functions === 'object') {
      validator.functions.forEach(validationFunction => {
        const validationError = validationFunction(validator.value)

        if (validationError) {
          errors[validator.name] = validationError
        }
      })
    }
  })

  return errors
}

export default validate

export const notEmpty = value => {
  if (String(value)?.length < 1) return 'Required'
}

export const moreThanTwo = value => {
  if (String(value)?.length < 2) return 'At least 2 symbols'
}

export const startsFromCapitalize = value => {
  if (!/[A-Z]/.test(String(value)[0])) {
    return 'Should start from capitalized letter'
  }
}

export const validEmail = value => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    return 'Invalid email'
  }
}
