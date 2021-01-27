const router = require("koa-router")();
const blog = require('../controllers/blog')
const { verifyToken } = require("../auth");

router.prefix("/blog");

router.get("/list", verifyToken, blog.listBlog);

router.get("/detail", verifyToken, blog.detailBlog);

router.post('/post', blog.postBlog);

router.post('/remark',blog.postRemark);

module.exports = router;