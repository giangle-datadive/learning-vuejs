<template>
    <div class="container list-quote">
        <app-new-quote @quoteAdded="onQuoteAdded"></app-new-quote>
        <quote-grid :quotes="quotes" @quoteDeleted="onQuoteDeleted"></quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Click to quote to delete
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue'
  import NewQuote from './components/NewQuote.vue'

  export default {
    data: () => ({
      quotes: [
        'Just a Quote',
      ],
      maxQuotes: 10,
    }),
    components: {
      appNewQuote: NewQuote,
      quoteGrid: QuoteGrid,
    },
    methods: {
      onQuoteAdded(quote) {
        this.quotes.push(quote)
      },
      onQuoteDeleted(index) {
        this.quotes.splice(index, 1)
      }
    }
  }
</script>

<style scoped>

</style>
