<template>
    <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <label for="quote">Quote</label>
            <textarea class="form-control" id="quote" v-model="quote"></textarea>
        </div>
        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div class="btn btn-primary" @click.prevent="createNewQuote">Add Quote</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'NewQuote',
    data: () => ({
      quote: '',
    }),
    methods: {
      createNewQuote() {
        if (!this.quote) {
          return
        }
        this.$emit('quoteAdded', this.quote)
        this.quote = ''
      }
    }
  }
</script>

<style scoped>

</style>