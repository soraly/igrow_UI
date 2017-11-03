<style lang="css">
	@import "../../../src/style/var.css";
	
	@component-namespace zfb {
		@component alert {
			.mask {
				position: fixed 0 0 0 0;
				z-index: 1000;
				background-color: rgba(0, 0, 0, .2);
			}
			.alert {
				position: fixed;
				z-index: 1001;
				left: 50%;
				top: 50%;
				width: 76%;
				transform: translate(-50%, -50%);
				border-radius: 10px;
				background-color: $white;
			}
			
			.alert-content {
				padding: .26rem .3rem .2rem;
				&.alert-content-img {
					 padding: .26rem .25rem .2rem;
					 text-align: center;
					h4 {
						font-size: $font-size-littlebig;
					}
				}
				h3 {
					padding-bottom: .24rem;
					font-size: $font-size-large;
					text-align: center;
				}
				h4 {
					padding: .1rem 0 .08rem;
				}
				p {
					line-height: .22rem;
					padding: 3px 0;
				}
				input {
					height: .38rem;
					width: 100%;
					padding: 8px;
					border: 1px solid $border-color-lighter;
					border-radius: 10px;
					box-sizing: border-box;
					-moz-appearance: none;
					-webkit-appearance: none;
				}
			}
		
			.alert-img {
				margin: 14px 0;
				i {
					display: inline-block;
					/*width: 1.36rem;*/
					/*height: 1.36rem;*/
					/*background: url(https://dsb-cdn.oss-cn-hangzhou.aliyuncs.com/alipay/assets/images/sfxy-zrrxx@2x.png) no-repeat;*/
					/*background-size: contain;*/
				}
				+ h4 + p{
					text-align: left;
				}
			}
	
			.alert-button {
				text-align: center;
				user-select: none;
				padding: 0 .28rem .24rem;
				&.white {
					padding: 0 0 .05rem;
					border-top: 1px ;
					background: linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%) top left no-repeat;
					background-size: 100% 1px;
				}
				.am-button:not([am-version]).white {
					border: none;
					color: $main-blue;
				}
			}
		}
	}
</style>

<template>
	<div class="zfb-alert" @touchmove="$event.preventDefault();">
		<div class="mask"></div>
		<div class="alert">
			<div class="alert-content" :class="{'alert-content-img':myList.type===1||myList.type===2}">
				<div class="alert-img" v-if="myList.type===1">
					<img :src="myList.img.url" :style="{width: myList.img.width, height: myList.img.height}"/>
				</div>
				<h4 v-text="myList.title"></h4>
				<p v-for="item in myList.content" v-html="item" :style="myList.contentStyle"></p>
			</div>
			<div class="alert-button" :class="[myList.btnColor]">
				<button class="button am-button" :class="[myList.btnColor]" @click="close()">{{myList.btn || '我知道了'}}</button>
			</div>
		</div>
	</div>
</template>

<script>
  /**
   * 自定义alert:
   * myList里的字段:
   * type: 默认为0，纯文字居左; 1为有图片且文字居中; 2为无图片文字居中。
   * titel: 标题
   * content: 内容
   * img: 图片
   * btn: 按钮文字，默认为我知道了
   */
  export default {
    name: 'zfb-alert',
    
    props: ['myList'],
    
    methods: {
      close () {
        this.$emit('close');
      }
    }
  };
</script>
