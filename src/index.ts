interface Human {
  name: string;
  age: number;
  gender: string;
}

const printGreetings = (name: string, age: number, gender: string): void => {
  const greetings = `Hello, it's ${name}, age of ${age}. I'm ${gender}!`;
  console.log(greetings);
};
printGreetings('Sangsu', 30, 'male');

const printGreetingObject = (person: Human): void => {
  const greetings = `Hello, it's ${person.name}, age of ${person.age}. I'm ${person.gender}.`;
  console.log(greetings);
};
const radagast = { name: 'Radagast', age: 456, gender: 'male' };
printGreetingObject(radagast);

const getNameAge = ({ name, age }: Human): void => {
  console.log(name, age);
};
getNameAge(radagast);
