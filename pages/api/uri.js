import connectDB from "../../middleware/mongodb";
import Uri from "../../models/uri";
import { v4 } from "uuid";

const uniqueLink = () => v4().split("-")[0];

const getShortLink = async () => {
  let found = false;
  let returnUri = "";

  try {
    do {
      returnUri = await uniqueLink();
      const result = await Uri.findOne({ short_uri: returnUri });
      found = result === null || false;
    } while (!found);
    return returnUri;
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const handler = async (req, res) => {
  if (req.method === "GET") {
    const uris = await Uri.find({});
    try {
      res.status(200).json({ success: true, data: uris });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else if (req.method === "POST") {
    try {
      const { uri, session_id } = req.body;

      const shortLink = await getShortLink();

      const uriObj = new Uri({
        uri,
        short_uri: shortLink,
        session_id,
      });

      const uriAdded = await uriObj.save();
      return res.status(200).send(uriAdded);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
