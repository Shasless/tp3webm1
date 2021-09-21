<template><div>
  <base_header />
  <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <b-button variant="primary"       :disabled="isPending" @click.stop.prevent="handleClick" >Button <p
        v-if="isPending"
    > disable for {{time}} sec </p> </b-button>
    <b-button disabled variant="primary">base buton disable</b-button>
    <b-button variant="danger">base buton </b-button>

  </div>
  <base_footer />
</div>

</template>

<script>
import base_footer from "@/components/base_footer";
import base_header from "@/components/base_header";

export default {
  name: "base_layout", components: {
    base_footer,
    base_header

  },inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: 'primary'
    }
  },

  data () {
    return {
      isPending: false,
      time: 2
    }
  },

  methods: {
    handleClick () {
      this.isPending = true
      setTimeout(() => {this.isPending = false,      this.time+=1;
      }, this.time*1000);
    }
  }
}

</script>

<style scoped>

</style>