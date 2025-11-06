import User from '../Schemas/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const Signup = async (req, res) => {
    const { username, email, password } = req.body;
    try{
        if(!username || !email || !password){
            return res.status(400).json({ message: "Bad Request: Missing required fields" });
        }
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Bad Request: Invalid email format" });
        }

        if(password.length < 6){
            return res.status(400).json({ message: "Bad Request: Password must be at least 6 characters long" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Bad Request: User with this email already exists" });
        }
        
        const newUser = new User({
            username,
            email,
            password
        });
        await newUser.save();

        const token=jwt.sign({userId:newUser._id},process.env.JWT_SECRET,{expiresIn:'7d'});
        res.cookie('token',token,{httpOnly:true,sameSite:'strict',maxAge:7*24*60*60*1000});

          const { password: _, ...userWithoutPassword } = newUser._doc;

        res.status(201).json({ message: "User created successfully", user: userWithoutPassword, token });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error: Error creating user" });
    }
}
export const Login = async (req, res) => {
    const { email, password } = req.body;
    try{
        if(!email || !password){
            return res.status(400).json({ message: "Bad Request: Missing required fields" });
        }
        const existingUser= await User.findOne({ email });
        if(!existingUser){
            return res.status(400).json({ message: "Bad Request: Invalid email or password" });
        }
        const isPasswordValid= await bcrypt.compare(password,existingUser.password);
        if(!isPasswordValid){
            return res.status(400).json({ message: "Bad Request: Invalid email or password" });
        }
        const token=jwt.sign({userId:existingUser._id},process.env.JWT_SECRET,{expiresIn:'7d'});
        res.cookie('token',token,{httpOnly:true,sameSite:'strict',maxAge:7*24*60*60*1000});

        const { password: _, ...userWithoutPassword } = existingUser._doc;
        res.status(200).json({ message: "Login successful", user: userWithoutPassword, token });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error: Error logging in" });
    }
}
export const getUserDetails = async (req, res) => {
    try{
        const userId = req.user._id;
        const user = await User.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({ message: "Internal Server Error: Error fetching user details" });
    }
}
