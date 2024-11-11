const justFood = number => `Catering od Just Food pro ${number} lidí za ${number * 300} Kč.`
const yourMama = number => `Catering od Your Mama pro ${number} lidí za ${number * 600} Kč.`
const flavourHaven = number => `Catering od Flavour Haven pro ${number} lidí za ${number * 1000} Kč.`

console.log(justFood(10))
console.log(yourMama(10))
console.log(flavourHaven(10))

const createEvent = (action, number, cateringType) => {
  return `Událost ${action} s ${cateringType(number)}`
}

console.log(createEvent("Inaugurace prezidenta", 1000, flavourHaven))
console.log(createEvent("Rodinná oslava", 20, yourMama))
console.log(createEvent("Posezení s kolegy", 10, justFood))
