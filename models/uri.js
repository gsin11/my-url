import mongoose, { Schema } from "mongoose";
import { v4 } from "uuid";

const uriModal = new Schema(
  {
    uri: {
      type: String,
      required: true,
    },
    short_uri: {
      type: String,
      required: true,
    },
    session_id: {
      type: String,
      default: v4(),
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

mongoose.models = {};

const Uri = mongoose.model("uri_lists", uriModal);

export default Uri;
