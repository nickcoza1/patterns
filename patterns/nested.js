export function makeBoard(rows, cols) {
  if (typeof rows != "number" || typeof cols != "number") return null
  if (rows <= 0 || cols <= 0) return []
  const board = []
  for (let r = 0; r < rows; r++) {
    const row = []
    for (let c = 0; c < cols; c++) {
      row.push("-")
    }
    board.push(row)
  }
  return board
}

export function makeTriangle(rows) {
  if (typeof rows != "number") return null
  if (rows <= 0) return []
  const tri = []
  for (let r = 1; r <= rows; r++) {
    const row = []
    for (let c = 0; c < r; c++) {
      row.push("-")
    }
    tri.push(row)
  }
  return tri
}

export function countLetter(words, letter) {
  if (typeof letter != "string") return 0
  if (!Array.isArray(words) || words.length === 0) return 0
  const target = letter.toLowerCase()
  let count = 0
  for (let i = 0; i < words.length; i++) {
    const w = String(words[i] || "")
    if (w.toLowerCase().includes(target)) {
      count++
    }
  }
  return count
}
