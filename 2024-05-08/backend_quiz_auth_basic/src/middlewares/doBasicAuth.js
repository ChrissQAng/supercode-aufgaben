import { User } from "../models/user.js";
import { hash } from "../utils/hash.js";

export async function doBasicAuth(req, res, next) {
  // bei fehler, antworten mit "unauthorized"
  const _invalidAuth = (message) =>
    res.status(401).json({ message: message || "invalid authentification" }); // 401 status unautorized

  //   check if authorization included to header
  // req.headers.authorization -->  'Basic YWhtZWRAc3VwZXItY29kZS5kZTpoYWxsbzEyMw=='
  if (!req.headers.authorization) return _invalidAuth("No authorization");

  //   TRANSFORM BASIC64 TO EMAIL AND PASSWORD
  //   check if authorization is encoded in Base64
  // ["Basic", "YWhtZWRAc3VwZXItY29kZS5kZTpoYWxsbzEyMw=="]
  const [authType, authInfoBase64] = req.headers.authorization.split(" ");
  if (authType !== "Basic") return _invalidAuth();
  if (!authInfoBase64) return _invalidAuth();

  // authInfo = "ahmed@super-code.de:hallo123"
  const authInfoClearText = Buffer.from(authInfoBase64, "base64").toString(
    "utf-8"
  );
  const [email, password] = authInfoClearText.split(":");
  if (!email || !password) return _invalidAuth();

  // LOGIN PROCESS
  const user = await User.findOne({ email });
  if (!user) return _invalidAuth("incorrect email");

  const passwordHash = hash(`${password}${user.passwordSalt}`); // +???
  const correctPassword = passwordHash === user.passwordHash; // +???
  if (!correctPassword) return _invalidAuth("incorrect password"); // correct email but wrong pw

  req.authenticatedUser = user; // user ZWISCHENSPEICHERN für die Weiterverabeitung durch die Controller!
  next();
}
