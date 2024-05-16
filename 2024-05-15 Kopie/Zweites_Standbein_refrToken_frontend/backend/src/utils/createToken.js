import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export function createToken(user, tokenType = "access") {
  const jwSecret = process.env.JWT_SECRET;
  const issuedAtSeconds = Math.ceil(Date.now() / 1000);
  const tokenPayload = {
    sub: user._id,
    type: tokenType,
    iat: issuedAtSeconds,
  };

  const expiresIn =
    {
      access: "10min",
      refresh: "2w",
    }[tokenType] || "10min";
  const token = jwt.sign(tokenPayload, jwSecret, { expiresIn });
  return token;
}
