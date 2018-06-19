const uniqueRandomArray = require('unique-random-array')
const starWarsNames = require('./starwars-names.json')

const getRandomItem = uniqueRandomArray(starWarsNames)

const random = number => !number
  ? getRandomItem()
  : Array(number)
     .fill()
     .map(getRandomItem)

module.exports = {
  all: starWarsNames,
  random
}
