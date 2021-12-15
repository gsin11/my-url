import connectDB from "../../../middleware/mongodb";
import Uri from "../../../models/uri";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { short_uri } = req.query;
      const result = await Uri.findOne({ short_uri });

      return res.status(200).send(result || {});
    } catch (error) {
      return res.status(500).send(error.message);
    }
    res.end(`Post: ${short_uri}`);
  } else {
    res.status(422).send("req_method_not_supported");
  }
}

export default connectDB(handler);
