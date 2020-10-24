import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    address: "",
  },
  mutations: {
    getAddress(state, payload) {
      state.address = payload;
    },
  },
  actions: {
    async getAddressAction(context, payload) {
      const res = await axios.get(
        `https://apis.postcode-jp.com/api/v3/postcodes/${payload}?apiKey=dJvv45MtIjSAW6KJuJ3ExbFK5n5ZiLAgm2IlOaG`
      );
      context.commit("getAddress", res.data.allAddress);
    },
  },
});
