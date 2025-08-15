export function multiply(num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    return NaN
  }
  if (num1 === 0 || num2 === 0) {
    return 0
  }
  return num1 * num2
}

export function vote(age) {
  if (typeof age != "number" || isNaN(age)) {
    return "Age not valid."
  } else if (age < 18) {
    return "You must be 18 or older to vote."
  } else {
    return "Who would you like to vote for?"
  }
}

export function concatenateStrings(str1, str2) {
  if (typeof str1 != "string" || typeof str2 != "string") {
    return undefined
  } else {
    return str1 + str2
  }
}
