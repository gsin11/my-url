import connectDB from "../../middleware/mongodb";
import Uri from "../../models/uri";

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
      const { uri } = req.body;
      const short_url = "https://google.com";

      const uriObj = new Uri({
        uri,
        short_url,
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
