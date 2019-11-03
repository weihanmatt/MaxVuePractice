<template>
  <div class="row">
    <form action="">
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 from-group">
        <label for="">Quote</label>
        <textarea class="form-control"
                  rows="3"
                  v-model="quote"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 from-group">
        <button class="btn btn-primary"
                @click.prevent="createNew">Add quote</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      quote: ''
    }
  },
  methods: {
    createNew () {
      if (this.quote === '') {
        alert('Can not be empty')
        return
      }
      this.$emit('quoteAdded', this.quote)
      this.quote = ''
    }
  },
  components: {

  }
}
</script>

<style scoped>
button {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
