import axios from "axios";

import constants from "../../util/constants/Constants";


export const getUser = (data) => {
    console.log(data);
    return axios.get(constants.backend_url + 'api/admin/getUserNameStatus/'+data)
        .then(res => {
            console.log(res);
            return res;
        }).catch(function (error) {
            return error;
        })
};

export const saveUser = (data) => {
    console.log(data);
    return axios.post(constants.backend_url + 'api/admin/add',data)
        .then(res => {
            console.log(res);
            return res;
        }).catch(function (error) {
            return error;
        })
};

export const removeUser = (data) => {
    console.log(data);
    return axios.delete(constants.backend_url + 'api/admin/remove/'+data)
        .then(res => {
            console.log(res);
            return res;
        }).catch(function (error) {
            return error;
        })
};