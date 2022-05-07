import dbConnect from "../../../util/mongo";
import Salad from "../../../models/Salads";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const salad = await Salad.findById(id);
      res.status(200).json(salad);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      const salad = await Salad.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(201).json(salad);
    } catch {
      res.status(500);
    }
  }

  if (method === "DELETE") {
    try {
      await Salad.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
