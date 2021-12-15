import connectDB from "../../middleware/mongodb";
import Uri from "../../models/uri";

function getDays(start) {
  const date1 = new Date(start);
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

const handler = async (req, res) => {
  if (req.method === "DELETE") {
    try {
      const { authorization } = req.headers;
      let data = {
        deletedCount: 0,
      };

      if (authorization === `Bearer ${process.env.API_SECRET_KEY}`) {
        const results = await Uri.find();
        const formArray = results.filter(
          (obj) => getDays(obj.created_at) >= 30
        );
        const listOfIDs = formArray.map((obj) => obj._id);

        if (listOfIDs.length > 0) {
          const response = await Uri.deleteMany({ _id: { $in: listOfIDs } }); // returns {deletedCount: x} where x is the number of documents deleted.
          data.deletedCount = response.deletedCount;
        }

        res.status(200).json({ success: true, data });
      } else {
        res.status(401).json({ success: false });
      }
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.setHeader("Allow", "DELETE");
    res.status(405).end("Method Not Allowed");
  }
};

export default connectDB(handler);
