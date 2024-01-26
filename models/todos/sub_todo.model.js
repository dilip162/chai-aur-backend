const { default: mongoose } = require("mongoose");

const subTodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },

  complete: {
    type: Boolean,
    default: false,
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const subTodo = mongoose.model("subTodo", subTodoSchema);
