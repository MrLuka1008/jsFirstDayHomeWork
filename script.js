// Task 1

const personOne = {
  name: "ანა",
  age: 28,
};

const personTwo = {
  name: "ლევანი",
  age: 21,
};

let diffAge = "";

function differenceAge() {
  if (personOne.age > personTwo.age) {
    diffAge = personOne.age - personTwo.age;
    resultText = "წლით დიდია";
  } else if (personOne.age < personTwo.age) {
    diffAge = personTwo.age - personOne.age;
    resultText = "წლით პატარაა";
  } else {
    resultText = "დიდი არარის, ისინი ტოლები არიან";
  }

  let result = `${personOne.name} ${personTwo.name}-ზე ${diffAge} ${resultText}`;

  console.log(result);
}

differenceAge();

// End task 1

//Task 2

const stundentsArr = ["John", "Sam", "Ann", "Will", "Andrew", "Joseph", "Lorelai", "Amelie", "Den"];

console.log(stundentsArr[Math.floor(stundentsArr.length / 2)]);

//End task 2

// Task 3

const stundentOne = {
  firstName: "luka",
  lastName: "digmelashvili",
  age: 22,
  subjects: ["Javascript", "React", "Angular", "Html", "Css"],
  roomMate: {
    fullName: "giorgi laliashvili",
    age: 24,
  },
};

stundentOne.fullName = stundentOne.firstName + " " + stundentOne.lastName;

let studentResult = `${stundentOne.fullName} aris ${stundentOne.age} wlis da misi rummeiti aris ${stundentOne.roomMate.fullName}`;
console.log(studentResult);

// End task 3

// Task 4

const randArr = ["Banana", "Orange", "Apple", "Mango", 2, 12];
let i = 0;
while (true) {
  if (typeof randArr[i] === "string") break;
  console.log(randArr[i]);
  i++;
}

let ar = ["Banana", "Orange", "Apple", "Mango", 2, 12];
// let i = 0;
while (typeof ar[i] === "string") {
  console.log(ar[i]);
  i++;
}

// End task 4

// Task 5

const numberArr = [12, 23, 43, 11, 9, 2, 121, 90];
let result;
let i = 0;

for (let i = 0; i < numberArr.length; i++) {
  if (numberArr[i] > 31 && !(numberArr[i] % 2)) {
    result = `${numberArr[i]} element is greater than provided value and is Even`;
  } else if (numberArr[i] < 31 && numberArr[i] % 2) {
    result = `${numberArr[i]} element is greater than provided value and is ODD`;
  }
  console.log(result);
}
// End task 5
