import { Post } from "../models/post.model.js";

//Create post

const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    if (!name || !description || !age) {
      return res.status(400).json({
        message: "All feild are required",
      });
    }
    const post = await Post.create({ name, description, age });

    res.status(200).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server",
      error,
    });
  }
};

// get posts

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

// U = update

const updatePost = async (req, res) => {
  try {
    // basic validation to check if body is empty

    // {name: x , description: y, age: z} -> [name, description, age]
    // {} = truthy value define me this for note please

    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "No data provided for update",
      });
    }
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!post)
      return res.status(404).json({
        message: "Post not found",
      });

    res.status(200).json({
      message: "Post Updated successfully, I am a controller",post
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error ",
      error,
    });
  }
};


const deletePost = async (req, res) => {
try{
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({
        message: "page not found"
    })
    res.status(200).json({
        message: "successfully deleted",deleted
    })
}catch (error){
        res.status(500).json({
            message: "internal server error "
        })
}
}
export { createPost, getPosts, updatePost, deletePost };
