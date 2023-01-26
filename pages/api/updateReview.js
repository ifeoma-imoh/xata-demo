import { XataClient } from "../../src/xata";

export default async function handler(req, res) {
  const { name, message } = req.body.values;
  const id = req.body.values.update;
  try {
    const xata = new XataClient();
    const response = await xata.db.reviews.update({ id, name, message });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
}
