export function GenerateNumbers(): [number, number, number] {
  let first = Math.floor(Math.random() * 10);
  let second = Math.floor(Math.random() * 10);
  let third = Math.floor(Math.random() * 10);
  while (first === 0) {
    first = Math.floor(Math.random() * 10);
  }

  while (second === first) {
    second = Math.floor(Math.random() * 10);
  }

  while (third === first || third === second) {
    third = Math.floor(Math.random() * 10);
  }

  return [first, second, third];
}
