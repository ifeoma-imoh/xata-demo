import { XataClient } from "../../src/xata";

export default async function handler(req, res) {
  try {
    const xata = new XataClient();
    await xata.db.reviews.delete(req.body.values);
    res.end();
  } catch (error) {
    res.status(500).json(error);
  }
}
