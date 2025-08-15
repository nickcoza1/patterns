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

export function isAllEven(nums) {
  // tests expect undefined for an empty array
  if (!Array.isArray(nums) || nums.length === 0) return undefined
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    if (typeof n != "number" || n % 2 !== 0) return false
  }
  return true
}

export function countLetter(str, letter) {
  if (typeof str != "string" || typeof letter != "string" || letter.length === 0) {
    return 0
  }
  const target = letter[0].toLowerCase()
  let count = 0
  for (let i = 0; i < str.length; i++) {
    const ch = str[i]
    if (ch.toLowerCase() === target) count++
  }
  return count
}

export function isSongInPlaylist(playlist, song) {
  if (!Array.isArray(playlist) || typeof song !== "string") return false
  for (let i = 0; i < playlist.length; i++) {
    if (playlist[i] === song) return true
  }
  return false
}

export function haveEnoughFood(backpack, people) {
  if (typeof people !== "number" || people <= 0) return true
  if (!Array.isArray(backpack) || backpack.length === 0) return false
  let foodCount = 0
  for (let i = 0; i < backpack.length; i++) {
    if (backpack[i] && backpack[i].category === "food") foodCount++
  }
  return foodCount >= people
}
