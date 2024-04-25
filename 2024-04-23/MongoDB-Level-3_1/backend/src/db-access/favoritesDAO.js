import { ObjectId } from "mongodb";
import { getDb } from "./getDB.js";

export function createFav(movieInfo) {
  return getDb()
    .then((db) => db.collection("favs").insertOne(movieInfo))
    .then((result) =>
      result.acknowledged ? { ...movieInfo, _id: result.insertedId } : null
    );
}

export function deleteFav(id) {
  const idAsObject = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("favs").findOneAndDelete({ _id: idAsObject })
  );
}

export function findAllFavs() {
  return getDb().then((db) => db.collection("favs").find().toArray());
}
