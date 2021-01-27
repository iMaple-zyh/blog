const blogModel = require("../models/blogModel");

module.exports = {
  postBlog: async function (ctx, next) {
    let { title, content, userId } = ctx.request.body;
    let results = await blogModel.saveBlog(title, content, userId);
    if (results.insertId > 0) {
      ctx.body = {
        state: "success",
      };
    } else {
      ctx.body = {
        state: "fail",
      };
    }
  },
  postRemark: async function (ctx,next){
    let {content,userId,blogId} =ctx.request.body;
    let results = await blogModel.saveRemark(content,userId,blogId);
    if (results.insertId > 0) {
      ctx.body = {
        state: "success",
      };
    } else {
      ctx.body = {
        state: "fail",
      };
    }
},
  listBlog: async (ctx, next) => {
    let results = await blogModel.getBlogs();
    if (results.length > 0) {
      ctx.body = {
        state: "success",
        blogs: results,
      };
    } else {
      ctx.body = {
        state: "fail",
      };
    }
  },
  detailBlog: async (ctx,next) =>{
    let { blogId } = ctx.query;//?传过来QUERY
    let results = await blogModel.getBlogById(blogId);
    if (results.length > 0) {
      let { blog_id, title, content, post_time } = results[0];
      let blog = {
        blog_id,
        title,
        content,
        post_time,
      };
      blog.comments = [];
      for (let i = 0; i < results.length; i++) {
        let obj = results[i];
        blog.comments.push({
          comm_id: obj.comm_id,
          comm_content: obj.comm_content,
          comm_post_time: obj.comm_post_time,
          username: obj.username
        });
      }
      ctx.body={
        state: 'success',
        blog :blog,
      }
    }
  }, 

};