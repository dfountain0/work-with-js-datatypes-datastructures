//Strings
// 1.Store your first name in a variable.
const firstName = "Don";

// 2.Concatenate your first name with your last name, and store the result in another variable called fullName.
const lastName = "Fountain";
const fullName = firstName + " " + lastName;

// 3.Use the String split method to turn your fullName variable from challenge #2 into an array with 2 elements – your first name and last name (e.g. 'Bob Smith' --> ['Bob', 'Smith']).
const nameArray = fullName.split(" ");
//Arrays
// 1.An array called foods holds the names of my top 20 favorite foods, starting with the best food. How can you find my fifth favorite food?

  //foods[4]

// 2.Starting from the existing friends variable below, change the element that is currently "Elizabeth" to "Liz".

const friends = [
  "Moe",
  "Jane",
  "Emma",
  "Elizabeth",
  "Abanov",
  "Lycia"
];

friends[3] = "Liz";

//3.Using array methods, add your name to the end of the friends array, and add another name to beginning.
friends.push("Don");
friends.unshift("Jerry");


// 4.Stretch: We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

const myFriends = [
  "Rickon",
  "Meera",
  "Hodor",
  "Jojen",
  "Osha",
  "Rickard",
  "Maester"
];

const yourFriends = [
  "Bilbo",
  "Boromir",
  "Elrond",
  "Faramir",
  "Frodo",
  "Gandalf",
  "Legolas",
  "Pippin"
];

const OurFriends = myFriends.concat(yourFriends).sort();

//Objects
// 1.Write out an object literal to represent the data below.

  //John, Doe, 36, 1234 Park St.
const person = {
  firstName : "John",
  lastName: "Doe",
  age: 36,
  address: {
    street: "Park St.",
    number: 1234
  }
}
// 2.How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)

  /*Jane, Doe, 32, 1239 Spark St.
  Mary, Doe, 31, 1231 Spark St.
  Greg, Doe, 34, 1214 Park St.
  Harriet, Doe, 32, 1324 Park St.*/
const people = [{
  firstName : "John",
  lastName: "Doe",
  age: 36,
  address: {
    street: "Park St.",
    number: 1234}},
  {
  firstName : "Mary",
  lastName: "Doe",
  age: 31,
    address: {
      street: "Spark St.",
      number: 1231}},
  {
  firstName : "Greg",
  lastName: "Doe",
  age: 34,
  address: {
    street: "Park St.",
    number: 1214}},
  {
  firstName : "Harriet",
  lastName: "Doe",
  age: 36,
  address: {
    street: "Park St.",
    number: 1324}
}];
//More Complex Structures
  // Copy the following clubs variable into your console.

const clubs =  [
    {
      name: 'Yearbook',
        students: [
          { first: 'Joe', last: 'Lakin' },
          { first: 'Evalyn', last: 'Bradtke' },
          { first: 'Samuel', last: 'Black' }
      ],
        teacher: 'James Friar'
    },
    {
    	name: 'Jazz Band',
        students: [
          { first: 'Douglas', last: 'Wisoky' },
          { first: 'Cora', last: 'Thompson' },
          { first: 'Samuel', last: 'Ziemann' },
          { first: 'Alana', last: 'Cortez'}
        ],
        teacher: 'Luther Richards'
    },
    {
        name: 'Swim Team',
        students: [
          { first: 'Cora', last: 'Thompson' },
          { first: 'Samuel', last: 'Black' },
          { first: 'Alana', last: 'Cortez'},
          { first: 'Joe', last: 'Lakin' }
        ],
        teacher: 'Carol Darby'
    }
];
//Start from the clubs variable.

// 1.Find and console.log the following:

  //the array that contains all the student club data

    console.log(clubs);

  //the number of clubs
    console.log(clubs.length);

  //the object that contains all of the information for the jazz band
    console.log(clubs[1]);

  //the teacher of the first club

    console.log(clubs[0].teacher);
  //the array of students in the jazz band

    console.log(clubs[1].students);
  //the last name of the second student on the swim team
    console.log(clubs[2].students[1].last);

// 2.Create an object literal representing a student with your name, and assign it to a variable.
    const newStudent = {first: 'Don', last: 'Fountain'};

// 3.Add yourself to one of the clubs as a student member.
    clubs[2].students.push(newStudent);

// 4.Create an object literal representing a new club, and assign it to a variable. Make sure it has values for name, students, and teacher.
    const newClub = {
      name: 'The Computer Science Club',
      students: [
        {first: 'Billy', last: 'Joel'},
        {first: 'Max', last: 'Gibson'},
        {first: 'Ibrahim', last: 'Price'}
      ],
      teacher: 'Susan Mernit'
};
  //Use an array method to add your new club to the array of clubs.
    clubs.push(newClub);

  //Add yourself as a student in the new club.
    clubs[3].students.push(newStudent);

// 5.Update Samuel Black's first name to Sam everywhere it occurs. Hint: there is not a great shortcut to do this.
    clubs[0].students(2).first = 'Sam'

// 6.Oops, the school is losing extracurricular funding. Use an array method to remove one of the clubs from the array.
clubs.splice(1);
