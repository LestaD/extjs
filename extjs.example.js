
// === REQUIRE === //

// Require exists code file in project

// single requiring.
// Create  `resolver` variable
// ex.: var resolver = require('$project/olly/routing/resolver');
require olly.routing.resolver;

// named requiring
// Create OResolver variable
require olly.routing.resolver as OResolver;

// Chained requiring
// Create `Parser` and `ORouter` variables
require Parser, Router as ORouter from olly.routing.resolver;

// Default requiring
require default as OllyBase;


// === IMPORT === //

// Import for packages
// ECMA Script 2015 specified imports
// http://exploringjs.com/es6/ch_modules.html

import 'package';
import Default from 'package';
import * as Namespace from 'package';
import { Chunk, Part as Tail } from 'package';
import Default, * as Namespace from 'package';
import Default, { Part as Tail, Chunk } from 'package';


// === COALESCE === //

// Check for existing
const foo = 12;
let bar = foo ?: "default";


// === DEFAULT PARAM === //

function Require(foo, bar = 21) {}
let Run = function(first = 0, second = 1) {}


// === LAMBDA === //

// Lambda defines with `do` and `=>`

const lambda = do (param) => {
  return param + 1;
}

// If lambda has only one param
const b2 = do param => { return param + 1; };

// If lambda has only one statement in body
// Result of statement returns
const b3 = do param => param + 1;

// But now lambda can be called only with `{` `}` parens
(do param => {
  return param + 200;
})(300);
// And this was wrong code.
// ArrowFunctionExpression body now empty ReturnStatement
// TOFIX!!!


// If lambda doesn't have parameters
const b4 = do => [].splice.call(arguments);

