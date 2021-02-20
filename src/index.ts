console.log('hello');

const printGreetings = (name: string, age: number, gender: string): void => {
  const greetings = `Hello, it's ${name}, age of ${age}. I'm ${gender}!`;
  console.log(greetings);
};

printGreetings('Sangsu', 30, 'male');
