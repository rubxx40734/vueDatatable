<template>
  <div>
      <h2>Implement jQuery DataTable in Vue Js</h2>
      <table class="table" id="datatable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Title</th>
            <th>Product Price</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="(item, index) in products" :key="item.RestaurantID">
            <td>{{item.RestaurantID}}</td>
            <td>{{item.RestaurantName}}</td>
            <td>{{item.City}}</td>
            <td>{{index + 1}}</td>
          </tr> -->
        </tbody>
      </table>
  </div>
</template>

<script>
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'datatables.net-dt/js/dataTables.dataTables'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import axios from 'axios'
import $ from 'jquery'

export default {
  mounted () {
    axios
      .get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24top=10&%24format=JSON')
      .then((response) => {
        console.log(response.data)
        this.products = response.data
        $('#datatable').DataTable({
          data: this.products,
          columns: [
            { data: 'RestaurantID' },
            { data: 'RestaurantName' },
            { data: 'City' },
            { data: 'City' }
          ]
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  data () {
    return {
      products: []
    }
  }
}
</script>
