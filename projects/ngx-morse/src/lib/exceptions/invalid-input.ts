import { Dictionary } from "../dictionary";

class InvalidInputError extends Error {
  public static INVALID_INPUT: string =
        "Valid inputs are: Alphabets, digits (0-9) and a few special characters. " +
        "Please see the list of valid characters: " +
    Object.keys(Dictionary).toString();

  public static INVALID_MORSE_INPUT: string =
    "String contains invalid or corrupted Morse code.";

  constructor(public message: string) {
    super(message);
    this.name = "InvalidInputError";
    this.stack = (<any>new Error()).stack;
  }
}

export default InvalidInputError;
