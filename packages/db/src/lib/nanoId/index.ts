import { customAlphabet } from "nanoid";

export default function generateId(length: number = 5) {
  const nanoid = customAlphabet(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    length
  );

  return nanoid();
}
