export function getRandomLine(lines: string[]): string {
  return lines[Math.floor(Math.random() * lines.length)];
}
