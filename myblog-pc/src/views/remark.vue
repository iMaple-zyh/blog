<template>
    <div>
        <h1>发表评论</h1>
        
            
    <p>
      <textarea
        name=""
        id=""
        cols="50"
        rows="20"
        v-model="content"
        
      ></textarea>
    </p>
        <button @click="postComment">
           提交
        </button>
    </div>
</template>
<script>
export default {
  date(){
    return{
        content:"",
    }
  },
  postComment(){
    let blogComment = this.$store.state.blogComment;
    if(blogComment){
      this.$
    }
  }
}
</script>