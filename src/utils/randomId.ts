/** Returns a random string that can be used as an id for accessibility */
export function randomId(): string {
  return (Math.random() + 1).toString(36).substring(2);
}
