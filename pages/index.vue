<template>
    <div @click="even">
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
    </div>
</template>

<script>
    import axios from '~/plugins/axios'
    export default {
        head() {
            return {
                title: '标题你好',
                meta: [
                    {
                        name: 'description',
                        content: 'My custom description'
                    }
                ]
            }
        },
        //上下文对象
        async asyncData({route}) {
            console.log(route);
            let {data} = await axios.get('/api/users')
            return {users: data}
        },
        async fetch ({ store, params }) {
            console.log(store)
            console.log(params)
        },
        scrollToTop: true,
        methods:{
            even:function () {
                this.$message('这是一条消息提示');
            },
            cre(){}
        },
        created(){
            this.cre()
        }
    }
</script>

<style scoped></style>
