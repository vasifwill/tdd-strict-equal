
function strictEqual(number1, number2) {
  if (number1 == number2 && typeof number1 == typeof number2) {
    return true
  } else {
    return false
  }
}

module.exports = strictEqual