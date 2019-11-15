import axios from "../../utils/fetch";

const commet = {
    state:{
        commetList:[]
    },
    mutations:{

    },
    actions:{
        async sendCommet({ commit, state }, params) {
            return new Promise((resolve, reject) => {
              axios
                .post("send/commet", params)
                .then(res => {
                  resolve(res)
                })
                .catch(err => {
                  // console.log(err)
                  reject(err);
                });
            });
          },
        async getCommet({ commit, state }, params) {
            return new Promise((resolve, reject) => {
              axios
                .get("get/commet", params)
                .then(res => {
                  resolve(res)
                })
                .catch(err => {
                  // console.log(err)
                  reject(err);
                });
            });
          },
    }
}

export default commet