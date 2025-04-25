import { describe, it, expect } from 'vitest'

// this import is how we get the function to test
//import { add } from './math'

// example how add would look from the imported module
function add(a: number, b:number) {
    return a + b;
}


describe('add()', () => {
  it('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5)
  })

  it('handles negative numbers', () => {
    expect(add(-2, -3)).toBe(-5)
  })
})
