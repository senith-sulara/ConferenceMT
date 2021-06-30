import axios from "axios";
import constants from "../../util/constants/Constants";

export const saveWorkshop = (data) => {
    return axios.post(constants.backend_url + 'api/workshop/add',data)
        .then(res => {
            console.log(res);
            return res;
        }).catch(function (error) {
            return error;
        })
};

export const findallWorkshop = () => {
    return axios.get(constants.backend_url + 'api/workshop/getall')
        .then(res => {
            console.log(res);
            return res;
        }).catch(function (error) {
            return error;
        })
};