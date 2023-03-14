# Yandex Academy

## File structure

- io - contains examples for read and output for nodejs.
- exercise - contains solution for [contest](https://contest.yandex.ru/contest/45468).
- src - contains implementation tasks from lessons

## Setup

1. Clone this repository

2. Run install deps

```sh
pnpm install
```

## Run tests for tasks

```sh
pnpm test
```

## Run exercise

- choice exercise

```sh
pnpm cli exec <number> -f
```

- create new exercise

```sh
pnpm cli new <number> -f
```

`-f` - used for read and write with file. Run without `-f` and use read from console
