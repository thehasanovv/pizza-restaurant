import dbConnect from "../../../util/mongo";
import Salads from "../../../models/Salads";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const salads = await Salads.find();
      res.status(200).json(salads);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const salad = await Salads.create(req.body);
      res.status(201).json(salad);
      console.log(salad);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
