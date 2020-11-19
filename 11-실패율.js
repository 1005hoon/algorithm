/**
 * N = stage  6
 * [] = stageArr  => [2, 1, 2, 2, 3, 3, 4, ] => [1, 2, 2, 2 ... ]
 * 
 * result = result [sortedArr]
 */

 const solution = (stageLength, currentStagesArr) => {
  let userCount = currentStagesArr.length; 
  const sortedStages = currentStagesArr.sort((a, b) => a - b)
  const stageStat = {}

  for ( let i = 0; i < stageLength; i ++ ) {
    stageStat[i + 1] = 0
  }

  sortedStages.forEach((stage, index) => {
    console.log(stageStat)
    if (stage === (stageLength + 1)) {
      return stageStat[stageLength] = 0
    }

    if (stageStat[`${stage}`] !== 0 ) return 
    const failCount = currentStagesArr.filter(currentStage => currentStage === stage).length
    stageStat[stage] = failCount / userCount
    userCount -= failCount
  })
  
  return Object.keys(stageStat).sort((a, b) => stageStat[b] - stageStat[a]).map(stage => stage*1)
 }
//  console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))
 console.log(solution(4, [4,4,4,4,4]))