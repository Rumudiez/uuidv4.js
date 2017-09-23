# UUID v4

This module provides UUID v4 generation for client side JavaScript applications.
It is written as an ECMAScript 2015 module and should be `import`ed into your
Webpack project.

## Usage
```JavaScript
import uuidv4 from 'uuidv4';

const myUUID = uuidv4();
```

## UUID v1, v2, and v3
UUID v1 and v2 are impossible to implement in JavaScript due to their dependency
on the client's MAC address. Version 3 is feasible to reproduce in JS; however,
the additional code to generate an MD5 hash presents an increase in file size
and complexity disproportionate to its value in this module.