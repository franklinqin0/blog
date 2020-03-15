<script>
export default {
  functional: true,
  props: {
    type: String,
    text: String
  },
  render (h, { props, slots }) {
    return h('span', {
      class: ['d', props.type],
      style: {}
    }, props.text || slots().default)
  }
}
</script>

<style lang="stylus" scoped>
.d
  &.er, &.der
    color blue
  &.ie, &.die
    color magenta
  &.as, &.das
    color orange
  &.impt
    font-weight bold
    color red
</style>
