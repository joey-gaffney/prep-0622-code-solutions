const person = { firstName: 'Joe', lastName: 'doe', hobby: 'surfing' };
person.job = 'web dev';
person.previousJob = 'singer';

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('the persons name is:', fullName);

const job = person.job;
console.log('the persons current job is:', job);

const previousJob = person.previousJob;
console.log('the persons previous job is:', previousJob);

console.log(person);
