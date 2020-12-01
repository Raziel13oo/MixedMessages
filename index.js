const professions = [
  "doctor",
  "plumber",
  "painter",
  "clown",
  "wizard",
  "ghost",
  "baker",
  "dentist",
  "scientist",
];

const animals = [
  "cat",
  "tardigrade",
  "yoda",
  "squirtle",
  "sloth",
  "dog",
  "pig",
  "beholder",
  "unicorn",
  "kiwi",
];

const punchlines = [
  "The third one ducks.",
  "The bartender says, What is this, a joke?",
  "If you want punch you'll have to stand in line, says the bartender. They look around but there is no punchline.",
  "Ow!, they say.",
  "It leaves a mean bruise.",
];

const randProf = () =>
  professions[Math.floor(Math.random() * professions.length)];

const randAnimal = () => animals[Math.floor(Math.random() * animals.length)];

const randPunchline = () =>
  punchlines[Math.floor(Math.random() * punchlines.length)];

console.log(
  `A ${randProf()} and a ${randAnimal()} walk into a bar. ${randPunchline()}`
);
