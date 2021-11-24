# Funkydice

Roll all kinds of dice using string commands like 1d20+1

Supports all kinds of "dice", from ```1d2``` to ```1d10000```.
Also supports Fate dice by using ```4df``` and the d66 with ```1d66```

## Usage

    import { funkydie } from 'funkydice'
    const result = funkydie('1d20+1')

The type of result is an object made with of the following type:

```ts
amount: number;
faces: number | "f";
modifier: number;
rolls: number[];
total: number;
totalUnmodified: number;
```

It's also possible to write multiple commands:

    funkydice('1d6,2d8,9d30+2')

This will return an array of the result object above.
