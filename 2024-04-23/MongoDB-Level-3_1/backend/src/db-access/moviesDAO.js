import { getDb } from "./getDB.js";
import { ObjectId } from "mongodb";

export function findAll() {
  return getDb().then((db) => db.collection("movieDetails").find().toArray());
}

export function findById(id) {
  const idObject = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("movieDetails").findOne({ _id: idObject })
  );
}
