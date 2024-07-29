import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
// import orderModel from '../models/orderModel.js'
import JWT from "jsonwebtoken";

export const registerController = async (req,res) => {
    try {
        const {firstName, lastName, email,password,phone} = req.body

        if(!firstName){
            return res.send({message:'Name is Required'})
        }
        if(!lastName){
            return res.send({message:'Name is Required'})
        }
        if(!email){
            return res.send({message:'Email is Required'})
        }
        if(!password){
            return res.send({message:'Password is Required'})
        }
        if(!phone){
            return res.send({message:'Phone is Required'})
        }
       
        const existingUser = await userModel.findOne({email})

        if(existingUser){
            return res.status(200).send({
                success:false,
                message:'Already registered please login'
            })
        }

        const hashedPassword = await hashPassword(password)

        const user = await userModel ({
            firstName,
            lastName,
            email,
            phone,
            password:hashedPassword,
        }).save()

        res.status(201).send({
            success:true,
            message:'User registered Succefully',
            user
        })

    } catch (error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in registration",
            error
        })
    }
};

export const loginController = async (req,res) => {
    try{
        const {email,password} = req.body
            if(!email || !password){
                return res.status(404).send({
                    success:false,
                    message:'Invalid email or password'
            })
        }

        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not registered"
            })
        }

        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Password"
            })
        }

        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {
            expiresIn: "7d"
        });
        res.status(200).send({
            success:true,
            message:"login successfully",
            user: {
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                role:user.role,
            },
            token,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Login",
            error
        })
    }
};

export const forgotPasswordController = async (req,res) => {
    try {
        const {email,answer,newPassword} = req.body
        if(!email){
            res.status(400).send({message: "Email is required"})
        }
        if(!newPassword){
            res.status(400).send({message: "Password is required"})
        }
        const user = await userModel.findOne({email,answer})
        if(!user){
            return res.status(404).send({
                success: false,
                message: "Wrong Email or Answer"
            })
        }
        const hashed = await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id, {password:hashed}) 
        res.status(200).send({
            success: true,
            message: "Password Reset Successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: "something went wrong",
            error
        })
    }
}

// export const updateProfileController = async (req, res) => {
//     try {
//       const { name, email, password, address, phone } = req.body;
//       const user = await userModel.findById(req.user._id);
//       //password
//       if (password && password.length < 6) {
//         return res.json({ error: "Passsword is required and 6 character long" });
//       }
//       const hashedPassword = password ? await hashPassword(password) : undefined;
//       const updatedUser = await userModel.findByIdAndUpdate(
//         req.user._id,
//         {
//           name: name || user.name,
//           password: hashedPassword || user.password,
//           phone: phone || user.phone,
//           address: address || user.address,
//         },
//         { new: true }
//       );
//       res.status(200).send({
//         success: true,
//         message: "Profile Updated Successfully",
//         updatedUser,
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(400).send({
//         success: false,
//         message: "Error While Update profile",
//         error,
//       });
//     }
//   };

// export const testController = (req, res) => { 
//     try {
//         res.send("Protected Routes");
//     } catch (error) {
//         console.log(error);
//         res.send({ error })
//     }
// }

// export const getOrdersController = async (req,res) => {
//     try{
//         const orders = await orderModel
//             .find({ buyer: req.user._id})
//             .populate("products", "-photo")
//             .populate("buyer", "name");
//         res.json(orders)
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({
//             succes:false,
//             message:'Error while getting orders',
//             error
//         })
//     }
// }

// export const getAllOrdersController = async (req,res) => {
//     try{
//         const orders = await orderModel
//             .find({})
//             .populate("products", "-photo")
//             .populate("buyer", "name")
//             .sort({craeatedAt: -1})
//         res.json(orders)
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({
//             succes:false,
//             message:'Error while getting orders',
//             error
//         })
//     }
// }

// export const orderStatusController = async (req,res) => {
//     try {
//         const { orderId } = req.params;
//         const { status } =req.body;
//         const orders = await orderModel.findByIdAndUpdate(
//             orderId,
//             {status},
//             {new: true}
//         );
//         res.json(orders)
//     }catch(error) {
//         console.log(error)
//         res.status(500).send({
//             success:false,
//             message:'Error while updating order ',
//             error
//         })
//     }
// }