# Anoma Node SDK

This repository contains a library to connect to an Anoma client from Node or Typescript.

This is an example TS client that is pegged to a certain Anoma
release. Please read [the Anoma repository](https://github.com/anoma/anoma).



## Generating the protobuf files

The generated Typescript files are included in this repo.
If you want to regenerate these files, grab the latest version from the anoma/anoma repository and
store them in `protobuf/`. Generate the typescript files with `./scripts/generate.sh`.

## Example

There is an example program in `src/example.ts` that uses the client and calls all of its endpoints.