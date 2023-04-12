# Deno Benchmarks

Using Deno to benchmark basic JS/TS operations.

## Running

```bash
deno bench
```

## Results

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
