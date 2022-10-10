const validate = validations => {
  const errors = {}

  validations.forEach(validator => {
    const singleValidation = (validationFunction, value, name) => {
      const validationError = validationFunction(value)

      if (validationError) {
        errors[name] = validationError
      }
    }
    if (typeof validator.functions === 'function') {
      singleValidation(validator.functions, validator.value, validator.name)
    }
    if (typeof validator.functions === 'object') {
      validator.functions.forEach(validationFunction => {
        singleValidation(validationFunction, validator.value, validator.name)
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

export const moreThanTree= value => {
  if (String(value)?.length < 3) return 'At least 3 symbols'
}

export const lessThanHundred= value => {
  if (String(value)?.length > 100) return 'Maximum 100 symbols'
}

export const startsFromCapitalize = value => {
  if (!/[A-Z]/.test(String(value)[0])) {
    return 'Should start from capitalized letter'
  }
}
export const passwordRule = value => {
  if (!/(?=.*[A-Za-z0-9])(?=.*[@$!%*#?&])[A-Za-z0-9\d@$!%*#?&]{5,}/g
  .test(value)) {
    return 'Password should have min 5 characters and 1 symbol'
  }
}

export const validEmail = value => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    return 'Invalid email'
  }
}
