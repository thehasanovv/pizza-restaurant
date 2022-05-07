import dbConnect from "../../../util/mongo";
import Drink from "../../../models/Drinks";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const drink = await Drink.findById(id);
      res.status(200).json(drink);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      const drink = await Drink.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(201).json(drink);
    } catch {
      res.status(500);
    }
  }

  if (method === "DELETE") {
    try {
      await Drink.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
