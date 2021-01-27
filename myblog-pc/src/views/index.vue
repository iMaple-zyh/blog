<template>
  <div class="container">
    <button @click="goPostBlog" class="postblog" type="success">发表文章</button>
    <div class="blog-list">
      <div class="blog" v-for="item in blogList" :key="item.blog_id">
        <h3 class="blog-title">
          <!-- <a href="/blog/detail/">{{item.title}}</a> -->
          <router-link :to="{ path: '/blog/detail/' + item.blog_id }">{{
            item.title
          }}</router-link>
        </h3>
        <p class="blog-content">{{ item.content }}</p>
        <span class="post-time">{{ item.postTime }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http
        .get("/blog/list")
        .then((res) => {
          let { state } = res.data;
          if (state == "auth-fail") {
            alert("请求未授权-then!");
          } else if (state == "success") {
            let { blogs } = res.data;
            this.blogList = blogs;
          }
        });
    },
    goPostBlog(){
      this.$router.push("/blog/post");
    }
  },
};
</script>

<style scoped>
.blog-list {
  width: 815px;
  margin: 20px auto;
  border-radius: 10px;
}
.blog {
  background: #cccccc;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
}
.blog-title{
  text-align: left;
}
.blog-content,
.post-time {
  margin: 20px 0;
}
.postblog{
  text-emphasis-color: #000;
    width: 200px;  
        padding:8px;  
        background-color: #55e21d;  
        border-color: #396e42;  
        color: #fff;  
        -moz-border-radius: 10px;  
        -webkit-border-radius: 10px;  
        border-radius: 10px; /* future proofing */  
        -khtml-border-radius: 10px; /* for old Konqueror browsers */  
        text-align: center;  
        vertical-align: middle;  
        border: 1px solid transparent;  
        font-weight: 900;  
        font-size:125%  
}
</style>