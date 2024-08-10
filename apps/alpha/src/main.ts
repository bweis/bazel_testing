import { one } from '@bazel_testing/one';
import { shared } from '@bazel_testing/shared';
import { getRandomQuote } from 'inspirational-quotes';
import * as quotes from 'star-wars-quotes';

shared();
one();
console.log(getRandomQuote());
console.log(quotes());
