<template>
     <nav aria-label="Page navigation example">
        <ul class="pagination pagination-sm">
          <li class="page-item" :class="{ 'disabled' : currenPageProp <= 1}">
            <a class="page-link" href="#"
             @click.prevent="changePage(currenPageProp-1)">Previous</a>
            </li>

          <li class="page-item" v-for="(item,i) in pages" :key="i" :class="{ 'active' : currenPageProp == item}">
            <a class="page-link" href="#" @click.prevent="changePage(item)">{{item}}</a>
            </li>

          <li class="page-item" :class="{ 'disabled' : currenPageProp == pages }">
            <a class="page-link" href="#" @click.prevent="changePage(currenPageProp+1)">Next</a>
            </li>
        </ul>
      </nav>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['pages', 'currenPageProp'],
  methods: {
    changePage (page) {
      this.$emit('updata', page)
    }
  }
}
</script>
