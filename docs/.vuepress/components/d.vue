<script>
export default {
  functional: true,
  props: {
    type: String,
    text: String,
  },
  render(h, { props, slots }) {
    return h(
      "span",
      {
        class: ["d", props.type],
        style: {},
      },
      props.text || slots().default
    );
  },
};
</script>

<style lang="stylus" scoped>
.d
  &.er, &.der
    color #0065bd
  &.ie, &.die
    color #b31b1b
  &.as, &.das
    color #f58025
  &.impt
    font-weight bold
    color red
</style>
