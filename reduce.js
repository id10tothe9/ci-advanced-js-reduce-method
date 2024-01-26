  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
let nums = [0,1,2,3,4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Robert',
    profession: 'Manager',
    yrsExperience: 10
  }
];

// Totaling a specific object property
let totalX = teamMembers.reduce((totX, curr) => totX + curr.yrsExperience, 0);
console.log(totalX);

// Grouping by a property, and totaling it too
// needed result: {Developer: 12, Designer: 4}
// or first: [{profession: developer, yrsExperience: 12} , {profession: Designer, yrsExperience: 4}]

const professionExp = teamMembers.reduce((acc, curr) => {
  let detector = 0;
  for (obj of acc) {
    if (obj.profession == curr.profession) {
      obj.yrsExperience += curr.yrsExperience;
      detector = 1;
    }
  }
  if (detector == 0) {
    acc.push({profession: curr.profession, yrsExperience: curr.yrsExperience});
  }

  return acc;
},[]);
console.log(professionExp);

// Now try again with {Developer: 12, Designer: 4}
const experienceByProfession = teamMembers.reduce((acc,curr) => {
  let profession = curr.profession;
  if (!acc[profession]) {
    acc[profession] = curr.yrsExperience;
  }
  else {
    acc[profession] += curr.yrsExperience;
  }
  return acc;
}, {});
console.log(experienceByProfession);

// Filter by profession and name:
const professionGroups = teamMembers.reduce((acc,curr) => {
  let profession = curr.profession;
  if (!acc[profession]) {
    acc[profession] = [curr.name];
  }
  else {
    acc[profession].push(curr.name);
  }
  return acc;
},{});
console.log(professionGroups);

// Find employee in profession p with most experience:
const mostExp = (p,team) => {
  const mostExpMember = team.reduce( (acc,curr) => {
    let highestExp = 0;
    if (curr.profession == p && curr.yrsExperience > highestExp) {
      acc[p] = curr.name;
      highestExp = curr.yrsExperience;
    }
    return acc;
  }, {});
  return mostExpMember;
}
console.log(mostExp('Developer', teamMembers));