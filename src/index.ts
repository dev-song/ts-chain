interface Human {
  name: string;
  age: number;
  gender: string;
}

class NeoHuman {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const gandalf = new NeoHuman('Gandalf', 2001, 'male');

const printGreetings = (name: string, age: number, gender: string): void => {
  const greetings = `Hello, it's ${name}, age of ${age}. I'm ${gender}!`;
  console.log(greetings);
};
printGreetings('Sangsu', 30, 'male');

const printGreetingObject = (person: NeoHuman): void => {
  const greetings = `Hello, it's ${person.name}, age of ${person.age}. I'm ${person.gender}.`;
  console.log(greetings);
};
const radagast = { name: 'Radagast', age: 456, gender: 'male' };
printGreetingObject(gandalf);

const getNameAge = ({ name, age }: Human): void => {
  console.log(name, age);
};
getNameAge(radagast);
