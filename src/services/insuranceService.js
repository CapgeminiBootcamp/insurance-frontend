import axios from "axios";
const USERS_REST_API_URL = 'http://localhost:2024/api/v1/insurances';
const baseURL = 'http://localhost:2024/api/v1';
class InsuranceService{
    getInsurance(){
        return axios.get(USERS_REST_API_URL);
    }
    getInsuranceById(insranceId){
        return axios.get(USERS_REST_API_URL  + '/' + insranceId );
    }
    updateInsurance(insrance, insranceId){
        return axios.put(baseURL +'/'+'update-insrance'+'/'+insranceId,insrance);
    }
    deleteInsurance(customerId){
        return axios.delete(baseURL +'/'+'delete-insrance'+'/'+ insranceId);
    }
}

export default new InsuranceService();