import axios from "axios";
import constants from "../../util/constants/Constants";

export const saveWSPayment = (data) => {
    return axios.post(constants.backend_url + 'api/workshop/payment/add',data)
        .then(res => {
            console.log(res);
            return res;
        }).catch(function (error) {
            return error;
        })
};