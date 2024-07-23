import mongoose from "mongoose";

// Connect to MongoDB

mongoose.connect("mongodb+srv://sunrising3105:babalaxminath@cluster0.lxheuc2.mongodb.net/form_babber?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));


const formSchema = new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    number: { type: String },
    country: { type: String, default: 'India' },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    gender: { type: String },
    jobTitle: { type: String },
    company: { type: String },
    linkedinUrl: { type: String },
    personalweb: { type: String },
    comments: { type: Boolean, default: false },
    candidates: { type: Boolean, default: false },
    offers: { type: Boolean, default: false },
    pushNotifications: { type: String }

});


const Form = mongoose.model("form", formSchema);

export { Form };
