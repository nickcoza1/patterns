// sumToN: 1 + 2 + ... + n
export function sumToN(n) {
  if (typeof n != "number" || isNaN(n)) return NaN
  if (n <= 0) return 0
  let total = 0
  for (let i = 1; i <= n; i++) {
    total = total + i
  }
  return total
}

// factorial: special guards per tests
export function factorial(n) {
  if (typeof n != "number" || isNaN(n)) return NaN
  if (n < 0) return undefined
  let result = 1
  for (let i = 2; i <= n; i++) {
    result = result * i
  }
  return result
}

// buildNArray: [1..n], special guards per tests
export function buildNArray(n) {
  if (typeof n != "number" || isNaN(n)) return null
  if (n <= 0) return []
  const out = []
  for (let i = 1; i <= n; i++) {
    out.push(i)
  }
  return out
}

// getLongestString: return "" for empty, first longest on ties
export function getLongestString(arr) {
  let best = ""
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i]
    if (typeof v === "string" && v.length > best.length) {
      best = v
    }
  }
  return best
}

// countPresent: count strict true
export function countPresent(values) {
  let count = 0
  for (let i = 0; i < values.length; i++) {
    if (values[i] === true) count++
  }
  return count
}

// complementDNA: A<->T, C<->G (tests use uppercase), special guards per tests
export function complementDNA(seq) {
  if (typeof seq != "string") return null
  const map = { A: "T", T: "A", C: "G", G: "C" }
  let out = ""
  for (let i = 0; i < seq.length; i++) {
    const ch = seq[i]
    out += map[ch] || ch
  }
  return out
}
