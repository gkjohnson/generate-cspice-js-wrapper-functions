# generate-cspice-js-wrapper-functions
Script for generating CSpice wrapper functions based on CSpice source comments. Scrapes the comments and code in the CSpice/src files to extract function names function arguments and types in order to generate js functions to wrap Emscripten CSpice.js output.

Built as a proof of concept for [Timecraftjs](https://github.com/NASA-AMMOS/timecraftjs).

## TODO

- [ ] Generate wrapped js function calls based on scraped data.
- [ ] Include comments in code scraping.
- [ ] Generate JSDoc comments for the functions.
- [ ] Add tests, validate signatures.
- [ ] Docs and comment code.
