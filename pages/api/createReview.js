import { XataClient } from "../../src/xata";

export default async function handler(req, res) {
  const { name, message } = req.body.values;
  try {
    const xata = new XataClient();
    const response = await xata.db.reviews.create({ name, message });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
}
