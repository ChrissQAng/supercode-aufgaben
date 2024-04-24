import { ObjectId } from "mongodb";
import { getDb } from "./getDB.js";

export function createFav(docInfo) {
  return getDb()
    .then((db) => db.collection("favs").insertOne(docInfo))
    .then((result) =>
      result.acknowledged ? { ...docInfo, _id: result.insertedId } : null
    );
}
