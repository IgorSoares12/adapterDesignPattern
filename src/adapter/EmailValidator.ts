import isEmail from "validator/lib/isEmail";
import { IEmailValidator } from "./IEmailValidator";

export class EmailValidator implements IEmailValidator {
  isEmail(email: string): boolean {
    return isEmail(email);
  }
}