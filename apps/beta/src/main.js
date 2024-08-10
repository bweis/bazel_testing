const Shared = require('@bazel_testing/shared');
const Two = require('@bazel_testing/two');
const IQuote = require('inspirational-quotes');
const TQuote = require('trek-quotes');

Shared.shared();
Two();
console.log(IQuote.getRandomQuote());
console.log(TQuote.randomQuote());
