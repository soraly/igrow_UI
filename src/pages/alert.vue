<template>
	<div class="page-alert">
		<h1 class="page-title">Alert</h1>
		
		<div class="am-wingblank wb15px">
			<button type="button" class="am-button" @click="isAlert1=true" style="margin-top: 10px;">纯文字居左</button>
			<button type="button" class="am-button" @click="isAlert2=true" style="margin-top: 10px;">图片文字居中-蓝按钮</button>
			<button type="button" class="am-button" @click="isAlert3=true" style="margin-top: 10px;">图片文字居中-白按钮</button>
			<button type="button" class="am-button" @click="isAlert4=true" style="margin-top: 10px;">纯文字居中</button>
		</div>
		<zfb-alert v-if="isAlert1" :my-list="alertList1" @close="isAlert1=false"></zfb-alert>
		<zfb-alert v-if="isAlert2" :my-list="alertList2" @close="isAlert2=false"></zfb-alert>
		<zfb-alert v-if="isAlert3" :my-list="alertList3" @close="isAlert3=false"></zfb-alert>
		<zfb-alert v-if="isAlert4" :my-list="alertList4" @close="isAlert4=false"></zfb-alert>
	
	</div>
</template>

<script>
  export default {
      mounted(){
          console.log(this.$route)
      },
    data () {
      return {
        isAlert1: false,
        alertList1: {
          title: '温馨提示：',
          content: [
            '1.Vue.js是一套构建用户界面的渐进式框架。',
            '2.Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合'
          ]
        },
        isAlert2: false,
        alertList2: {
          type: 1,
          title: '温馨提示：',
          content: ['Vue.js是一套构建用户界面的渐进式框架。'],
          img: {
            width: '1.36rem',
            height: '1.36rem',
            url: 'https://dsb-cdn.oss-cn-hangzhou.aliyuncs.com/alipay/assets/images/sfxy-zrrxx@2x.png'
          }
        },
        isAlert3: false,
        alertList3: {
          type: 1,
          title: '温馨提示：',
          content: ['Vue.js是一套构建用户界面的渐进式框架。'],
          contentStyle: {'text-align': 'center'},
          btnColor: 'white',
          img: {
            width: '1.36rem',
            height: '1.36rem',
            url: 'https://dsb-cdn.oss-cn-hangzhou.aliyuncs.com/alipay/assets/images/sfxy-zrrxx@2x.png'
          }
        },
        isAlert4: false,
        alertList4: {
          type: 2,
          content: ['<span style="color: #f00;">密码错误</span>，请重新输入。']
        }
      };
    }
  };
</script>
