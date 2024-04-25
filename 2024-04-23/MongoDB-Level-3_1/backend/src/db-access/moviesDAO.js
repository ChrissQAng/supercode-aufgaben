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
export function createOne(movieInfo) {
  return getDb()
    .then((db) => db.collection("movieDetails").insertOne(movieInfo))
    .then((result) =>
      result.acknowledged ? { ...movieInfo, _id: result.insertedId } : null
    );
}

export function deleteOne(id) {
  const idAsObject = ObjectId.createFromHexString(id);
  return getDb().then((db) =>
    db.collection("movieDetails").findOneAndDelete({ _id: idAsObject })
  );
}

export function updateOne(id, updateInfo) {
  const idAsObjectId = ObjectId.createFromHexString(id);
  return getDb()
    .then((db) =>
      db
        .collection("movieDetails")
        .updateOne({ _id: idAsObjectId }, { $set: updateInfo })
    )
    .then((result) => {
      if (result.acknowledged && result.modifiedCount === 1)
        return findById(id); // dokument nach dem update
      else return null;
    });
}
