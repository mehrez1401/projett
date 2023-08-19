import axios from 'axios'
const UserServices={}
UserServices.register=function(data){

    return axios.post('http://127.0.0.1:5000/users/signup',data)

}
export default UserServices;

