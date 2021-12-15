import connectDB from "../../../middleware/mongodb";
import Uri from "../../../models/uri";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { session_id } = req.query;
      const results = await Uri.find({ session_id });

      res.status(200).send(results || []);
    } catch (error) {
      res.status(500).send(error.message);
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
}

export default connectDB(handler);
