
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
var foo = 12;
var bar = foo ?: "default";