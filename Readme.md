# Test extension-less EcmaScript module specifiers

I am researching the option `--experimental-specifier-resolution=node`

Questions:

- Does `import 'x'` work? What is imported?
- Does `import 'x/y'` work?
- Does `import './x'` work inside the package?
- Do these three cases work with `.mjs` files?
- Do these three cases work with `"type": "module"` in `package.json`?
- Do these three cases work with the `"exports"` field in `package.json`?
- Are `.mjs` files always preferred for ES modules even if there is a file
  with the same name but the extension `.js`?

Do `npm start` to run all tests.

Note that the three sub-packages aren't installed nor linked, just symlinked.
I don't know whether this matters.

The test variants are in tags. I created tags because the bugs depend on the
existence of some files, and it is complicated to write a test setup for such
a situation. I think it is easiest to check out the tag then run tests.

## Tag OK

All tests work. No fails.

## Tag MJS_FAIL

The tag MJS_FAIL has the file entry.js added with the same contents as the .mjs
file to the package pkg-mjs. The test test-mjs-iip-extless.js then fails.

**Expected:** Does not throw syntax error

(because I would expect that the .mjs file is imported, not the .js one even
for extension-less imports)

**Actual:** Throws a syntax error: `SyntaxError: The requested module './entry' does not provide an export named 'value'`

(which is weird because entry.js does export a const named `'value'`)

## Tag EXPORTS_FAIL

I suspect that there is another bug or a variant of the same bug in a different
situation and will create another tag to show this bug. Later.
