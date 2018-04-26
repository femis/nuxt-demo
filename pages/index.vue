<script src="../api/http.js"></script>
<template>
    <div>
        <el-table
                :data="list"
                style="width: 100%">
            <el-table-column
                    prop="create_time"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="nickname"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="location"
                    label="地址"
                    width="280">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="profile"
                    label="说明">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>
                <img style="width:100%" :src="img">
            </span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    import http from '../api/http'
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
        data(){
            return {
                list:[],
                dialogVisible: false,
                img:''
            }
        },
        //上下文对象
        async asyncData({route}) {},
        async fetch ({ store, params }) {},
        scrollToTop: true,
        methods:{
            even:function () {
                this.$message('这是一条消息提示');
            },
            handleClick(row){
                this.dialogVisible = true
                this.img = row.thumb_path
            }
        },
        created(){
            http.get('https://vr.he29.com/index.php/api?action=indexList').then(res=>{
                this.list = res.info.data
            })
        }
    }
</script>

<style scoped></style>
