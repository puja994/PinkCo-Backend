import mongoose from 'mongoose'

const ContactSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        default: "",
    },
    email:{
        type: String,
        require: true,
        default: "",
    },
    message:{
        type: String,
        require: true,
        default: "",
    },

},
{
    timestamp: true,
}
)
const ContactUsSchema = mongoose.model("Contact", ContactSchema)
export default ContactUsSchema
