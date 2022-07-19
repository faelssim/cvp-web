<!--
 * @Author: wangkun
 * @Date: 2022-07-15 15:12:08
 * @LastEditTime: 2022-07-15 15:13:14
 * @LastEditors: wangkun
 * @Description: 
-->
<template>
    <div class="flex-row cvp-topbar">
        <b class="cvp-topbar-title">CVP精准医疗信息系统</b>
        <ul class="flex-row cvp-topbar-ul">
            <li class="flex-row cvp-topbar-li" v-for="(item, index) of modules" :key="index">
                <i :class="item.icon" aria-hidden="true"></i>
                <span>{{ item.name }}</span>
            </li>
            <li>
                <div class="cvp-topbar-bell">
                    <kux-badge :value="3">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                    </kux-badge>
                </div>
            </li>
            <li>
                <kux-dropdown>
                    <div class="flex-row cvp-topbar-droplink">
                        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                        <span>Admin</span>
                    </div>
                    <kux-dropdown-menu slot="dropdown">
                        <kux-dropdown-item>
                            <div class="flex-row">
                                <span>修改密码</span>
                            </div>
                        </kux-dropdown-item>
                        <kux-dropdown-item>
                            <div class="flex-row">
                                <span>退出系统</span>
                            </div>
                        </kux-dropdown-item>
                    </kux-dropdown-menu>
                </kux-dropdown>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            modules: [
                { icon: 'fa fa-heartbeat', name: '数字医疗' },
                { icon: 'fa fa-joomla', name: 'CRM' },
                { icon: 'fa fa-list-alt', name: '财务分销' },
                { icon: 'fa fa-cubes', name: '库房采购' },
                { icon: 'fa fa-bar-chart', name: '统计分析' },
                { icon: 'fa fa-user', name: '账号权限' }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.flex-row{
    display: flex;
    align-items: center;
}
.cvp-topbar{
    --height: 60px;
    width: 100%;
    height: var(--height);
    background: #fb8800;
    flex-shrink: 0;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 0 0 0 20px;
    .cvp-topbar-title{
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        flex-shrink: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .cvp-topbar-ul{
        height: 100%;
        >li{
            height: 100%;
            padding: 0 20px;
            &:hover{
                box-shadow: 0 0 0 100px rgba(0,0,0,0.2) inset;
            }
        }
        .cvp-topbar-li{
            cursor: pointer;
            span{
                font-size: 14px;
                color: #fff;
            }
            i{
                font-size: 18px;
                color: #fff;
                margin-right: 5px;
            }
        }
        .cvp-topbar-droplink{
            color: #fff;
            line-height: var(--height);
            span{
                font-size: 12px;
                color: #fff;
            }
            i{
                color: #fff;
                font-size: 20px;
                margin-right: 10px;
            }
        }
        .cvp-topbar-bell{
            position: relative;
            margin-top: 22px;
            i{
                color: #fff;
                // margin-top: 10px;
            }
        }
    }
}
</style>