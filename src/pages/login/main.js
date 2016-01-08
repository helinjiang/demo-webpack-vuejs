import Vue from 'vue'

import LoginPanel from '../../modules/login/loginpanel/main.vue'

// 此处找路径要使用构建自动生成

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    LoginPanel
  }
})

// 这里定义了LoginPanel，则在html中使用就需要用<login-panel></login-panel>
