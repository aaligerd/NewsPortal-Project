const Blog = require("../model/blogModel");

//add  data to blog Collection
const addBlogPost = async (req, res) => {
  const { title, description, image, postbody, author, keywords, category } =
    req.body;
  if (
    !title ||
    !description ||
    !image ||
    !postbody ||
    !author ||
    !keywords ||
    !category
  ) {
    res.status(400).json({ status: 0, msg: "Provide all fields" });
    return;
  }
  const newPost = await Blog.create(req.body);
  res.status(200).json({ status: 1, msg: "Post Uploded" });
};

//get all data from blog
const getBlogPost = async (req, res) => {
  const allPost = await Blog.find();
  res.status(200).json({ status: 1, allPost });
};

//get single blog post by userside
const getUserBlogPostById = async (req, res) => {
  const id = req.params.id;

  let singleBlogPost = await Blog.findById({ _id: id });
  if (!singleBlogPost) {
    res.status(400).json({ status: 0, msg: "No such post available" });
    return;
  }

  const {
    title,
    description,
    image,
    postbody,
    author,
    keywords,
    category,
    view,
    date,
  } = singleBlogPost;

  let previousCookie = req.cookies.pageVisits;

  //if cookie is not available then set the cookie
  //if cookie is already set then check for view update
  if (!previousCookie) {
    let newView = view + 1;
    const postUpdated = {
      title: title,
      description: description,
      image: image,
      postbody: postbody,
      author: author,
      keywords: keywords,
      category: category,
      view: newView,
      date: date,
    };
    await Blog.findByIdAndUpdate({ _id: id }, postUpdated);
    res.cookie("pageVisits", id,{
        expires: new Date(Date.now()+ 1000 * 86400 * 1 ), // 1 day
});
  } else {
    const toDayReadingNews = previousCookie.split(",").includes(id);
    if (!toDayReadingNews) {
      res.clearCookie("pageVisits");
      const newCookie = previousCookie + "," + id;
      res.cookie("pageVisits", newCookie,{
        expires: new Date(Date.now()+ 1000 * 86400 * 1 ), // 1 day
      });
      let newView = view + 1;
      const postUpdated = {
        title: title,
        description: description,
        image: image,
        postbody: postbody,
        author: author,
        keywords: keywords,
        category: category,
        view: newView,
        date: date,
      };
      await Blog.findByIdAndUpdate({ _id: id }, postUpdated);
    }
  }

  res.status(200).json(singleBlogPost);
};

//get data by id from blog
const getBlogPostById = async (req, res) => {
  try {
    const _id = req.params.id;
    const singlePost = await Blog.findById(_id);
    if (!singlePost) {
      res.status(400).json({ status: 0, msg: "No such post available" });
      return;
    }
    res.status(200).json({ status: 1, singlePost });
  } catch (error) {
    res
      .status(400)
      .json({ status: 0, msg: "Server Error while searching by id" });
    console.log(error);
  }
};

//get data by id from blog
const getBlogPostByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const categoryPost = await Blog.find({ category: category });
    if (categoryPost.length === 0) {
      res.status(400).json({ status: 0, msg: "No such category" });
      return;
    }
    res.status(200).json({ status: 1, categoryPost });
    return;
  } catch (error) {
    res
      .status(400)
      .json({ status: 0, msg: "Server Error while searching category post" });
    console.log(error);
  }
};


//update blogpost by id
const updateBlogPost=async(req,res)=>{
  const _id=req.params.id;
  const findPost=await Blog.findById({_id});
  if(!findPost){res.status(400).json({status:0,msg:"No post found"});return}
  await Blog.findByIdAndUpdate({_id},req.body);
  res.status(200).json({status:1,msg:"Post Updated"});
}
module.exports = {
  addBlogPost,
  getBlogPost,
  getBlogPostById,
  getBlogPostByCategory,
  getUserBlogPostById,
  updateBlogPost
};
