# Deno Benchmarks

Using Deno to benchmark basic JS/TS operations.

## Running

```bash
deno bench
```

## Results

### [Typeof](./typeof.bench.ts)

Shockingly, it's an order of magnitude faster to use `typeof x === 'string'` constructing a new string each time than to use `const STRING = 'string'` once in the global scope then compare `typeof x === STRING`.

```
Fastest: typeof w/ new string
8.58x faster than typeof w/ const string
```

### [Array Clone](./array-clone.bench.ts)

```
Fastest: spread
1x faster than slice
1.02x faster than concat
11.99x faster than for loop
27.04x faster than map
```

### [Has](./has.bench.ts)

The performance impact is negligible between using `Map` or `Set`'s' `has()` method before `set()` or `add()` vs just using `set()` or `add()` without checking first.

### [Loops](./loops.bench.ts)

```
Fastest: C-style for var
1.01x faster than C-style for let 
1.99x faster than for let of 
1.99x faster than for var of 
2x faster than for const of 
17.3x faster than forEach
```

### Splitting on First Space

Using `indexOf()` and `slice()` is always at least 1 order of magnitude faster than using `split()` and `join`, and is always faster than using `.match()` growing to by orders of magnitude faster as the string gets longer.
