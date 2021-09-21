<template><div>
  <base_header />
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