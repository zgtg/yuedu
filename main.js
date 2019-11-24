import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/**
 * 检查用户是否登录
 * @param {Object} backPage 跳转页面
 * @param {Object} backType 跳转类型 1 redirectTo 2switchTab
 */
Vue.prototype.checkLogin = function(backPage, backType) {
	var suid = uni.getStorageSync("SUID");
	var srand = uni.getStorageSync("SRAND");
	var sname = uni.getStorageSync("SNAME");	
	var sface = uni.getStorageSync("SFACE");
	
	if(suid == '' || srand == '' || sface == '') {
		uni.redirectTo({
			url: '../login/login?backPage=' + backPage + "&backType=" + backType
		});
		return false;
	}
	return [suid, srand, sname, sface];
};

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
