<template>
    <div class="container">
        <div class="login-form">
            <h3>用户注册</h3>
            <p>
                用户名：<input type="text" name="username" v-model="username">
            </p>
            <p>
                密码：<input type="password" name="password" v-model="password">
            </p>
            <p>
                昵称：<input type="text" name="nickname" v-model="nickname">
            </p>
            <p>
                <button @click="doRegist">注册</button>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:"",
            password:"",
            nickname:"",
            };
    },
    methods:{
        doRegist(){
            this.$http.post("/user/post",{
                username:this.username,
                password:this.password,
                nickname:this.nickname,
            })
            .then((res)=>{
                let {state}=res.data;
                if(state=="success"){
                    this.$router.push("/login");
                }else{
                    alert("注册失败!");
                }
            })
        }
    }
}
</script>



<style scoped>
.login-form {
  width: 650px;
  background: #cccccc;
  margin: 40px auto;
  padding: 20px 0;
  text-align: center;
}
.login-form p {
  padding: 20px 0;
}
.btn {
  width: 70px;
}
</style>