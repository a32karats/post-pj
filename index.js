import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    zip: "",
    address: "",
  },
  mutations: {
    getAddress(state, zip, address) {
      state.zip = zip;
      state.address = address;
    }
  },
  actions: {
    async getAddressAction(context) {
      const payload = {
        address: "",
        zip: context.state.zip
      };
      await axios
        .get("https://apis.postcode-jp.com/api/v4/postcodes/1000001?apiKey=dJvv45MtIjSAW6KJuJ3ExbFK5n5ZiLAgm2IlOaG", {
          params: { zipcode: payload.zip }
        })
        .then(res => {
          payload.address = res.data.data.fullAddress;
        });
      context.commit("getAddress", payload);
    }
  }
});