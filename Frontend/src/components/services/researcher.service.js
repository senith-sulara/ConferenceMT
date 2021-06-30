import axios from "axios";
import constants from "../../util/constants/Constants";

export const submitRP = (data) => {
    return axios.post(constants.backend_url + 'api/research/add',data)
        .then(res => {
            console.log(res);
            return res;
        }).catch(function (error) {
            return error;
        })
};

export const findallAcceptedRP = (userId) => {
    return axios.get(constants.backend_url + 'api/research/getAll/'+userId)
        .then(res => {
            console.log(res);
            return res;
        }).catch(function (error) {
            return error;
        })
};

export const findallBookedTours = () => {
    return axios.get(constants.backend_url + 'api/research/getAll')
        .then(res => {
            console.log(res);
            return res;
        }).catch(function (error) {
            return error;
        })
};

