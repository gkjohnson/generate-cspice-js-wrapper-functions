# generate-cspice-js-wrapper-functions
Script for generating CSpice wrapper functions based on CSpice source comments. Scrapes the comments and code in the `cspice/src/cspice` directory to extract function names, arguments, and types in order to generate js functions to wrap Emscripten CSpice.js output.

Built as a proof of concept for [Timecraftjs](https://github.com/NASA-AMMOS/timecraftjs).

## How to run

Command line arguments

```sh
node src/index.js <cspice_src_dir> <output_dir>
```

Example

```sh
node src/index.js ../cspice/src/cspice ./output/
```

## TODO

- [ ] Generate wrapped js function calls based on scraped data.
- [ ] Include comments in code scraping.
- [ ] Generate JSDoc comments for the functions.
- [ ] Add tests, validate signatures.
- [ ] Docs and comment code.
