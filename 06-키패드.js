
const solution = (numbers, hand) => {
  let lefthand;
  let righthand;
  let pHand;
  numbers.map(number => {
    { pHand, lefthand, rightHand } = hitButton(number, hand, lefthand, righthand)
  })
}

const hitButton = (number, mainHand, lefthand="*", righthand="#") => {
  let mHand = mainHand.toLowerCase() === 'Left' ? "L" : "R"

  const numbersToCheck = [2, 5, 8, 0]
  const lNums = [1, 4, 7]
  const rNums = [3, 6, 9]

  let pHand;
  if (numbersToCheck.includes(number)) {
    pHand = getHandByDistance(number, mHand, lefthand, righthand)
    if (pHand === 'L') {
      lefthand = number
    } else {
      righthand = number
    }
  }

  if (lNums.includes(number)) {
    pHand = 'L'
    lefthand = number
  } else {
    pHand = 'R'
    righthand = number

  }
  return { pHand, lefthand, righthand }
}

const getHandByDistance = (numToSelect, mHand, lHolding, rHolding) => {
  const phone = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#']
  ]

  let lefthand = lHolding
  let rightHand = rHolding

  let lIndex = getYIndex(phone, lefthand)
  let rIndex = getYIndex(phone, rightHand)

  let numIndex = getYIndex(phone, numToSelect)
  
  let hand = Math.abs(lIndex - numIndex) === Math.abs(rIndex - numIndex) ? mHand :
    Math.abs(lIndex - numIndex) >= Math.abs(rIndex - numIndex) ? "R" : "L"

  return hand
}



const getYIndex = (phone, num) => {
  for (let i = 0; i < phone.length; i ++) {
    let index = phone[i].indexOf(num)
    if (index > -1) return i
  }
}


solution([1,2,3,4,5,6,7], 'right')