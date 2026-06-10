import mongoose from "mongoose";
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "abhay",
        trim: true,
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "please use valid email"]
    },
    age: {
        type: Number,
        default: 18,
        min: 15,
        max: 65,
    },
    status: {
        type: Boolean,
        default: true,
    },
    gender: {
  type: String,
  enum: ["male", "female", "other"],
  default: "male"
}
}, {
    timestamps: true,
});

const StudentModel = mongoose.model("students", StudentSchema);

export default StudentModel;