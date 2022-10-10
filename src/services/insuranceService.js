import axios from "axios";
const USERS_REST_API_URL = 'http://localhost:2024/api/v1/insurances';
const baseURL = 'http://localhost:2024/api/v1';
class InsuranceService{
    getInsurance(){
        return axios.get(USERS_REST_API_URL);
    }
    getInsuranceById(insuranceId){
        return axios.get(baseURL  + '/insurance/'+ insuranceId );
    }
    updateInsurance(insurance){
        return axios.put(baseURL +'/insurance',insurance);
    }
    deleteInsurance(insuranceId){
        return axios.delete(baseURL +'/'+insuranceId);
    }
    buyInsurance(customerId, insuranceId){
        return axios.put(baseURL+'/'+customerId+"/puchaseInsurance/"+insuranceId);
    }
}

export default new InsuranceService();