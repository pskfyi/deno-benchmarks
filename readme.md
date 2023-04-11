# Deno Benchmarks

Using Deno to benchmark basic JS/TS operations.

## Running

```bash
deno bench
```

## Results

### [Loops](./loops.bench.ts)

```
Fastest: C-style for var
1.01x faster than C-style for let
1.99x faster than for let of
1.99x faster than for var of
2x faster than for const of
17.3x faster than forEach
```
