# Funkydice

Roll all kinds of dice using string commands like 1d20+1

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
    totalModified: number,
}
```

