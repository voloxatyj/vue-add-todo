import HTTP from '../http';
import router from '../router';

export default {
	namespaced:true,
	state:{
		registerEmail:'',
		registerPassword:'',
		registerError:'',
		token:null
	},
	actions:{
		register({commit,state}){
			commit('setRegisterError',null);
			return HTTP().post('/auth/register',{
				email:state.registerEmail,
				password:state.registerPassword,
			})
			.then(({data})=>{
				commit('setToken',data.token);
				router.push('/');
			})
			.catch((error)=>{
				commit('setRegisterError',`An error ${error} has occured trying to create your account`);
			})
		},
		logout({commit}){
				commit('setToken',null);
				router.push('/login');
			}, 
	},
		getters:{
			isLoggedIn(state){
				return !!state.token;
			},
		},
	mutations:{
		setToken(state,token){
			state.token=token
		},
		setRegisterError(state,error){
			state.RegisterError=error
		},
		setRegisterEmail(state,email){
			state.registerEmail=email
		},
		setRegisterPassword(state,password){
			state.registerPassword=password
		},
	},
}