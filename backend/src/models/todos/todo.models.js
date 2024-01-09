import mongoose from "mongoose";

const todoList = new mongoose.Schema(
  {
    content: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdBy: {
      type: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //ref is the model name
    },
  },
  { timestamps: true }
);

export const todo = mongoose.model("todo", todoList);
