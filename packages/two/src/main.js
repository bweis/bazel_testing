const cowsay = require('cowsay');
const First = require('@bazel_testing/first');

module.exports = () => {
  First();
  console.log('I am Two, not One!');
  console.log(
    cowsay.say({
      text: "I'm a transitive moooodule",
      e: 'oO',
      T: 'U ',
    })
  );
};
