import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    firstName: {type:String, required: true, trim: true},
    lastName: {type:String, required: true, trim: true},
    username: {type:String, required: true, 
        trim: true, index:true, unique: true, lowercase: true},
    email: {type:String, required: true, trim: true, unique: true, lowercase:true },
    password: {type:String, required: true, },
    role: {type: String, enum:['user', 'admin'], default: 'user'},
    contactNumber: {type: String},
    profilePicture:{type: String},
}, {timestamps: true})


userSchema.methods.matchPasswords = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}
userSchema.pre('save', async function(next){

    if(!this.isModified('password')){
      return   next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

})
const User = mongoose.model('User', userSchema)

export default User