<template>
    <div>
        <el-row type='flex' justify='center'>
            <el-col :span="7">
                <div class='login-title'>填写注册信息</div>
                <el-form :model="loginInfo" ref="loginInfo" label-width="100px" class="demo-dynamic">
                    <el-form-item prop="username" label="新账户" :rules="[
                          { required: true, message: '请输入账户', trigger: 'blur' }
                        ]">
                        <el-input v-model="loginInfo.username"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" prop='password' :rules="{
                          required: true, message: '密码不能为空', trigger: 'blur'
                        }">
                        <el-input v-model="loginInfo.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('loginInfo')">立刻注册</el-button>
                        <router-link to='/'>
                            <el-button>返回登录</el-button>
                        </router-link>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginInfo: {
                username: "",
                password: ""
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log('Submit成功提交');
                } else {
                    console.log('错误的Submit提交');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style>
.login-title {
    font-size: 20px;
    padding: 43px 0;
    text-align: center;
}
.login-tips{
    text-align:right;
}
</style>
