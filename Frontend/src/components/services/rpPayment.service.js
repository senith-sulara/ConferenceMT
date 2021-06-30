import axios from "axios";
import constants from "../../util/constants/Constants";

export const saveRPPayment = (data) => {
    return axios.post(constants.backend_url + 'api/research/payment/add',data)
        .then(res => {
            console.log(res);
            return res;
        }).catch(function (error) {
            return error;
        })
};