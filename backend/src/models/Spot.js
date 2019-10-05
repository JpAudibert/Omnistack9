const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,
      required: false
    },

    company: {
      type: String,
      required: true
    },

    techs: {
      type: [String],
      required: true
    },

    price: {
      type: String
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

SpotSchema.virtual("thumbnail_url").get(function() {
  return `http://localhost:3333/files/${this.thumbnail}`;
});

module.exports = mongoose.model("Spot", SpotSchema);
