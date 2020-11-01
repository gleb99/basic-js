module.exports = function createDreamTeam(members) {
  let a = []
  if(!Array.isArray(members)) return false;
  let arrStrings = members.filter(item => typeof item === 'string')
  for(let i =0; i < arrStrings.length; i++){
    a.push(arrStrings[i].trim()[0].toUpperCase())
  }

  return a.sort().join('')
  
};