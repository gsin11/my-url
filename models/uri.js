import mongoose, { Schema } from "mongoose";
import uuid from "node-uuid";

const uriModal = new Schema(
  {
    uri: {
      type: String,
      required: true,
    },
    short_url: {
      type: String,
      required: true,
    },
    session_id: {
      type: String,
      default: uuid.v1(),
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

mongoose.models = {};

const Uri = mongoose.model("uri_lists", uriModal);

export default Uri;
