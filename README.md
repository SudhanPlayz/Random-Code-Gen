# Random Code Gen

> A simple function to generate codes for anything what you need like exspecially making ids.

## Installing

```npm
npm install code-gen
# or
yarn
```

## Usage

```js
const codeGen = require("random-code-gen"); //Getting package

let code = codeGen.random(5);//making 5 digit random code
let code2 = codeGen.number(6);//making 6 digit random number
let code3 = codeGen.letter(9)
console.log('Generated Random Code is "' + code + '"');//logging the code
console.log('Generated Number Code is "' + code2 + '"');//logging the code2
console.log('Generated Letter Code is "' + code3 + '"');
```

## Contributing

1. [Fork the repository](https://github.com/SudhanPlayz/code-gen/fork)!
2. Clone your fork: `git clone https://github.com/your-username/code-gen.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

## Author

© [SudhanPlayz](https://github.com/SudhanPlayz).  
Authored and maintained by SudhanPlayz.

> GitHub [@SudhanPlayz](https://github.com/SudhanPlayz)
