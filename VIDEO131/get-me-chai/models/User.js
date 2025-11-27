import mongoose from "mongoose";
import Email from "next-auth/providers/email";
const {Schema, model} = mongoose;

const UserSchema = new Schema ({
    email: {type: string, require: true},
    name: {type: string, require: true},
    username: {type: string},
    profilepic: {type: string},
    coverpic: {type: string},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

const User = model("User", UserSchema);
export default mongoose.models.User || User