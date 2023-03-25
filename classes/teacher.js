const Person = require('./person');

// Your code here
class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    let totalExperience = 0;
    for (const teacher of teachers) {
      totalExperience += teacher.yearsOfExperience;
    }
    return totalExperience;
  }
}

// class Teacher extends Person {
//   constructor(firstName, lastName, age, subject, yearsOfExperience) {
//     super(firstName, lastName, age);
//     this.subject = subject;
//     this.yearsOfExperience = yearsOfExperience;
//   }

//   static combinedYearsOfExperience(teachers) {
//     let totalExperience = 0;
//     for (const teacher of teachers) {
//       totalExperience += teacher.yearsOfExperience;
//     }
//     return totalExperience;
//   }
// }

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
