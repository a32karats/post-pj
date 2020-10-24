<template>
  <div id="HelloWorld">
    <input type="text" v-model="zip" />
    <button @click="getAddress">住所自動入力</button>
    <p>Address: {{ address }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zip: ""
    };
  },
  computed: {
    address() {
      return this.$store.state.address;
    }
  },
  methods: {
    async getAddress() {
      await this.$store.dispatch("getAddressAction",this.zip);
    }
  }
};
</script>