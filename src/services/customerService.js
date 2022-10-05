import axios from "axios";
const USERS_REST_API_URL = 'http://localhost:2024/api/v1/customers';
const baseURL = 'http://localhost:2024/api/v1';
class CustomerService{
    getCustomers(){
        return axios.get(USERS_REST_API_URL);
    }
    getCustomerById(customerId){
        return axios.get(USERS_REST_API_URL  + '/' + customerId );
    }
    updateCustomer(customer, customerId){
        return axios.put(baseURL +'/'+'update-customer'+'/'+customerId,customer);
    }
    deleteCustomer(customerId){
        return axios.delete(baseURL +'/'+'delete-customer'+'/'+ customerId);
    }
}

export default new CustomerService();