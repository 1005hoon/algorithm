/**
 * s: 1, d: 2, t: 3
 * * =* 2  # *= -1
 * 1, 2, 3
 */

 const solution = (dartResult) => {
   const bonusMapper = {
     'S': 1,
     'D': 2,
     'T': 3
    }
    Leet code 

    const options = ['#', '*']

    const dartScores = []
    let temp = ''

    dartResult.forEach((element, index) => {
      if (bonusMapper.hasOwnProperty(element)) {
        dartScores[dartScores.length - 1] = dartScores[dartScores.length - 1] ** bonusMapper[element]
      } else if (options.includes(element)) {

      }
    })
    

 }
//  1S 2D* 3T#
// 2 // 3 = 1 
// 5 // 3 = 2
// 8 // 3 = 2  


// GG
// /ff

