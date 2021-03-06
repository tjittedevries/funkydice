# Funkydice

Roll all kinds of dice using string commands like 1d20+1

Supports all kinds of "dice", from ```1d2``` to ```1d10000```.
Also supports Fate dice by using ```4df```.

## Usage

    import { funkydice } from 'funkydice'
    const result = funkydice('1d20+1')

The type of result is an array made with of the following type:

```ts
{
    command: {
        amount: number,
        faces: number,
        modifier?: {
            type: '+' | '-',
            value: number,
        }
    },
    rolls: [
        {
            faces: number,
            result: number,
        }
    ],
    total: number,
    totalUnmodified: number,
}
```

It's also possible to write multiple commands:

    funkydice('1d6,2d8,9d30+2')
