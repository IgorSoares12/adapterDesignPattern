import express, { Request, Response } from "express";
import cors from "cors";
import { EmailValidator } from "./adapter/EmailValidator";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  let emailValidator = new EmailValidator();

  let email = "teste@xample.com";
  let validEmail = emailValidator.isEmail(email);
  res.json({ email, validEmail });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});