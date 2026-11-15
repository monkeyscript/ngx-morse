import { Dictionary } from "../dictionary";

export class InvalidInputError extends Error {
  public static readonly INVALID_INPUT: string =
    "Valid inputs are: Alphabets, digits (0-9) and a few special characters. " +
    "Please see the list of valid characters: " +
    Object.keys(Dictionary).toString();

  public static readonly INVALID_MORSE_INPUT: string =
    "String contains invalid or corrupted Morse code.";

  constructor(override message: string) {
    super(message);
    this.name = "InvalidInputError";
    Object.setPrototypeOf(this, InvalidInputError.prototype);
  }
}

export default InvalidInputError;
