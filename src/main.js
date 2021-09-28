import Vue from 'vue'
import App from './App.vue'
import FractionArithmetic from '../plugins/fractionArithmetic'

Vue.config.productionTip = false

Vue.use(FractionArithmetic);

new Vue({
    render: h => h(App),
}).$mount('#app')
