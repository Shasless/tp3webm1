<template><div>
  <base_header />
  <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <b-button variant="primary">Button</b-button>
    <b-button disabled variant="primary">base buton disabl</b-button>

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

  }
}
</script>

<style scoped>

</style>