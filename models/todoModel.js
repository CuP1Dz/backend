const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    photo: {
      type: String,
      default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
      // required: [true, "вы не ввели URL изображения"],
    },
    // text: {
    //   type: String,
    //   required: [true, "вы не ввели название"],
    //   default: ""
    // },
    // price: {
    //   type: String,
    //   required: false,
    // },
  },
  {
    timestamps: true,
  }
);

const ToDo = mongoose.model("task", taskSchema);

module.exports = ToDo;