import mongoose from 'mongoose'

//defining schema --> defining how data will be build

// 1.message
// 2.name
// 3.timestamp

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    recieved: Boolean,
})

export default mongoose.model('messagecollections', whatsappSchema)