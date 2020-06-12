# Types

## Question 1: Which of the following strings are valid? Add an 'x' between the ( ) to indicate that it's valid.

1. (false ) "I am a "Horse""
2. (false ) "I 'prefer' ducks'
3. (true ) 'Yes, duck is nice'
4. (true ) "Ah, but I\'m vegan!"
5. (false ) 'You'll eat salad then'
6. (true ) 'Yes I\'ll eat salad'
7. (true ) "I'm happy to hear that!"
8. (true ) "\"Happy to hear " + 'that" ' + "he says!"
9. (false ) “Hello world!”

## Question 2: For the strings in Question 1 that were invalid, rewrite them to be valid:
"I am a "Horse"
"I 'prefer' ducks"
'You\'ll eat salad then'
`Hello world!`

## Question 3: Which of the following expressions evaluate to true? Add an 'x' between the ( ) to indicate that it's true.

1. (false ) 7 == 2
2. (true ) 7 == 7
3. (true ) 7 == '7'
4. (true ) 7 != 0
5. (true ) 7 !== '7'
6. (false ) 7 != '7'
7. (false ) 7 != 7

## Question 4: Which of the following expressions are truthy?

1. (true ) !0
2. (false ) !1
3. (false ) -1
4. (false ) !"hello!"
5. (false ) null
6. (true ) !undefined
7. (true ) !NaN

## Question 5: Which of the following are valid objects?

1. (true ) {}
2. (true ) { 'hello' }
3. (true ) { name: 'I am fruit' }
4. (true ) {'brand-name': 'Dior' }
5. (false ) { brand-name: 'Channel' }
6. (true ) { cool_name: 'bob' + ' Dylan', age: 25 }

## Question 6: For each array, specify the number of elements and the type of each element.

1. ['cat', 'dog', 'bird']

- number of elements: 3
- type of _each_ element:
  - 'cat': string
  - 'dog': string
  - 'bird': string

(Use the same format for the answers to all prompts in Question 6)

2. [[], 24, 'hello', true]

- number of elements: 4
- type of _each_ element:
  - []: array
  - 24: integer
  - 'hello': string
  - true: boolean

3. []

- number of elements: 0
- type of _each_ element:

4. [['romeo', 'juliet'], false]

- number of elements: 2
- type of _each_ element:
  - ['romeo', 'juliet']: array
  - false: boolean

5. [{name: 'bob', age: 23}, {name: 'paul', age: 33}]

- number of elements: 2
- type of _each_ element:
  - {name: 'bob', age: 23}: object
  - {name: 'bob', age: 23}: object

## Question 7: What is the type and value for each of the following variables?

1. let name = 'bob';

- type: string
- value: 'bob'

2. let age = 45;

- type: integer
- value: 45

3. let isMarried = false;

- type: boolean
- value: false

4. let person = { name: name, age: age, isMarried: isMarried }

- type: object
- value: { name: name, age: age, isMarried: isMarried }

5. let kids = [{name: 'Morty', age: 3}, {name: 'Summer', age: 7}]

- type: array
- value: [{name: 'Morty', age: 3}, {name: 'Summer', age: 7}]

## Question 8: Use string interpolation instead of concatenation

1.

```js
const name = 'Jack';
const greeting = 'Hi';

console.log(greeting + ' ' + name + '!');
```

`${greeting} ${name}!`;

2.

```js
const person1 = { name: 'Mabel', age: 102 };
const person2 = { name: 'Doug', age: 104 };

console.log(
  person1.name +
    ' and ' +
    person2.name +
    ' are the oldest people I know. Together, they have lived for ' +
    (person1.age + person2.age) +
    ' years!'
);
```

`${perso1.name} and ${person2.name} are the oldest people I know.
Together, they have lived for ${person1.age + person2.age} years!`;

3.

```js
let str = 'Hi Kiddo!';
const temperature = 5;

if (temperature < 0) {
  str = str + ' ' + "It's very cold outside, you better wear a coat!";
} else {
  str = str + ' ' + "It's beautiful outside, let's go swimming!";
}
```

temperature < 0
  ? `${str} It's very cold outside, you better wear a coat!`
  : `${str} It's beautiful outside, let's go swimming!`;
