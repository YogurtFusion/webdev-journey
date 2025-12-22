import { Post } from "../models/post.model.js";

//Create post

const createPost = async(req, res)=>{
    try{
        const {name, description, age} = req.body;

        if(!name||!description||!age){
            return res.status(400).json({
                message: "All feild are required"
            });
            }
        const post = await Post.create({name, description, age})
        
        res.status(200).json({
            message: "Post created successfully", post
        })
        
    } catch (error) {
        res.status(500).json({
            message: "internal server",error
        })

    }
}
export {createPost}