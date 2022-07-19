<!--
 * @Author: wangkun
 * @Date: 2022-07-15 16:39:09
 * @LastEditTime: 2022-07-15 16:39:10
 * @LastEditors: wangkun
 * @Description: 
-->
<template>
    <div class="cvp-login">
        <div class="cvp-login-form" ref="form">
            <span class="cvp-login-title">CVP精准医疗信息系统</span>
            <div class="cvp-login-row">
                <div class="cvp-login-input">
                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                    <input v-model.trim="userAccount" placeholder="请输入用户名称" autocomplete="off" />
                </div>
            </div>
            <div class="cvp-login-row">
                <div class="cvp-login-input">
                    <i class="fa fa-key rotate-icon" aria-hidden="true"></i>
                    <input v-model.trim="password" placeholder="请输入密码" type="password" autocomplete="off" />
                </div>
            </div>
            <div class="cvp-login-row">
                <div class="cvp-login-input">
                    <i class="fa fa-shield" aria-hidden="true"></i>
                    <input v-model.trim="code" placeholder="请输入右侧校验码" />
                </div>
                <div class="cvp-login-code"></div>
            </div>
            <div class="cvp-login-row cvp-login-row-2">
                <div class="cvp-login-checkbox">
                    <input id="remeber-checkbox" type="checkbox" v-model="isRemeber" />
                    <label for="remeber-checkbox">
                        <i v-if="isRemeber" class="fa fa-check-square" aria-hidden="true"></i>
                        <i v-else class="fa fa-square-o" aria-hidden="true"></i>
                        <span>记住密码</span>
                    </label>
                </div>
                <kux-tooltip effect="dark" placement="top">
                    <template #content>
                        <p style="color:#fff;">请联系客服重置登录密码</p>
                        <p style="color:#fff;text-align:center;margin-top:5px;">电话：400-999-999</p>
                    </template>
                    <a>忘记密码?</a>
                </kux-tooltip>
            </div>
            <div class="cvp-login-row">
                <button class="cvp-login-submit" :class="{'cvp-login-shake': !!notPassText}" @click="handleSubmit">登录</button>
            </div>
            <div v-if="!!notPassText" class="cvp-login-tips">
                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                <span>{{ notPassText }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isRemeber: false,
            userAccount: '',
            password: '',
            code: '',
            notPassText: ''
        }
    },
    mounted () {
        this.$refs.form.addEventListener('click', this.handleListenerTap)
        this.$once('hook:beforeDestroy', () => {
            this.$refs.form.removeEventListener('click', this.handleListenerTap)
        })
    },
    methods: {
        handleSubmit () {
            const { userAccount, password, code } = this
            if (!userAccount) {
                this.notPassText = '请填写用户账号'
            } else if (!password) {
                this.notPassText = '请填写登录密码'
            } else if (!code && false) {
                this.notPassText = '请填写校验码'
            } else {
                this.$router.push('/main/aws/manage')
            }
        },
        handleListenerTap (e) {
            const { target: { tagName, type } } = e
            if (tagName === 'INPUT' && type === 'text' || tagName === 'INPUT' && type === 'password') {
                this.notPassText = ''
            }
        }
    }
}
</script>
<style lang="less" scoped>
.cvp-login{
    width: 100vw;
    height: 100vh;
    background: url('../../assets/u3.png') top left / cover;
    position: fixed;
    .cvp-login-form{
        width: 500px;
        height: 620px;
        background: url('../../assets/u5.svg');
        margin: 12vh auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding-top: 100px;
        .cvp-login-title{
            font-size: 32px;
            font-weight: bold;
            color: #fff;
        }
        .cvp-login-row{
            width: 380px;
            height: 50px;
            box-sizing: border-box;
            // padding: 0 10px;
            display: flex;
            align-items: center;
            margin-top: 20px;
            font-size: 14px;
            .cvp-login-input{
                flex: 1 1 auto;
                height: 100%;
                display: flex;
                align-items: center;
                background: url('../../assets/u7.svg');
                border-radius: 3px;
                overflow: hidden;
                box-sizing: border-box;
                padding: 0 10px;
                i{
                    color: #f2f2f2;
                    font-size: 20px;
                }
                input{
                    height: 100%;
                    flex: 1 1 auto;
                    border: none;
                    background: transparent;
                    outline: none;
                    color: #f2f2f2;
                    margin-left: 7px;
                    &::placeholder{
                        color: #f2f2f2;
                    }
                    &:-webkit-autofill { box-shadow: 0 0 0px 1000px transparent inset !important;}
                    &:-internal-autofill-previewed,
                    &:-internal-autofill-selected {
                        -webkit-text-fill-color: #666 !important;
                        transition: background-color 5000s ease-in-out 0s !important;
                    }
                }
                &:focus-within{
                    background: #fff;
                    i{
                        color: #60d4c9;
                    }
                    input{
                        color: #666;
                        font-size: 14px;
                        &::placeholder{
                            color: transparent;
                        }
                    }
                }
                .rotate-icon{
                    transform: rotateY(180deg);
                }
            }
            .cvp-login-code{
                width: 100px;
                height: 100%;
                border-radius: 3px;
                background: #f2f2f2;
                margin-left: 20px;
            }
            .cvp-login-checkbox{
                position: relative;
                user-select: none;
                label{
                    display: flex;
                    align-items: center;
                    color: #f2f2f2;
                    cursor: pointer;
                    --size: 13px;
                    div{
                        width: var(--size);
                        height: var(--size);
                        border: 1px solid #f2f2f2;
                        border-radius: 2px;
                    }
                    span{
                        color: #f2f2f2;
                        margin-left: 10px;
                    }
                    i{
                        color: #f2f2f2;
                        font-size: 18px;
                    }
                }
                input[type=checkbox]{
                    opacity: 0;
                    position: absolute;
                }
            }
            .cvp-login-submit{
                width: 100%;
                height: 100%;
                border: none;
                outline: none;
                border-radius: 6px;
                cursor: pointer;
                font-size: 18px;
                font-weight: bold;
                color: #4093ff;
                background: rgba(255,255,255,0.8);
                &:hover{
                    background: rgba(255,255,255,1);
                }
            }
            .cvp-login-shake{
                animation: shake 0.3s;
            }
            a{
                color: #f2f2f2;
                cursor: pointer;
            }
        }
        .cvp-login-row-2{
            justify-content: space-between;
        }
        .cvp-login-tips{
            width: 380px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-size: 14px;
            padding-top: 20px;
            i, span{
                color: #f2f2f2;
            }
            i{
                font-size: 18px;
                margin-right: 10px;
            }
        }
    }
}
// input:-webkit-autofill { box-shadow: 0 0 0px 1000px transparent inset !important;}
// input:-internal-autofill-previewed,
// input:-internal-autofill-selected {
//     -webkit-text-fill-color: #f2f2f2 !important;
//     transition: background-color 5000s ease-in-out 0s !important;
// }
@keyframes shake {
    0%{ transform: translateY(-5px); }
    10%{ transform: translateY(5px); }
    20%{ transform: translateY(-4px); }
    30%{ transform: translateY(4px); }
    40%{ transform: translateY(-3px); }
    50%{ transform: translateY(3px); }
    60%{ transform: translateY(-2px); }
    70%{ transform: translateY(2px); }
    80%{ transform: translateY(-1px); }
    90%{ transform: translateY(1px); }
    100%{ transform: translateY(0); }
}
</style>