<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light mb-6">
    <div class="container-fluid">
      <a class="navbar-brand d-block title text-primary" href="#"
        >台灣走走 。 Tai Walk</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-lg-flex justify-content-end"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">探索景點</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">節慶活動</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">品嚐美食</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container mb-6">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-6">
        <h1 class="">探索台灣之美</h1>
        <h2 class="fs-1">讓我們更親近這片土地</h2>
        <p class="">
          台灣旅遊景點導覽 <span class="ms-2">Taiwan Travel Guide</span>
        </p>
      </div>
      <div class="col-4">
        <select
          class="form-select form-select-sm mb-4"
          aria-label=".form-select-sm example"
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <input
          class="form-control form-control-sm mb-4"
          type="text"
          v-model="search"
          ref="txt"
          placeholder="你想去哪裡？請輸入關鍵字"
          aria-label=".form-control-sm example"
        />
        <div class="d-grid gap-2">
          <button class="btn btn-secondary" type="button" @click="show">
            搜尋
          </button>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>

  <div class="container banner mb-6">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/lake.jpg"
            class="d-block w-100 bannerimg"
            alt="..."
          />
          <div class="carousel-caption mb-7">
            <h5 class="fw-bold fs-4">宜蘭 | 翠峰湖</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/taina.jpg"
            class="d-block w-100 bannerimg"
            alt="..."
          />
          <div class="carousel-caption mb-7">
            <h5 class="fw-bold fs-4">台南 | 藍晒文創園區</h5>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/101.jpg"
            class="d-block w-100 bannerimg"
            alt="..."
          />
          <div class="carousel-caption mb-7">
            <h5 class="fw-bold fs-4">台北 | 101大樓</h5>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div class="container mb-5">
    <div class="txt d-flex justify-content-between border mb-3">
      <p id="title">近期活動</p>
      <a class="d-block"><router-link to="">查看更多活動</router-link></a>
    </div>
    <div class="row">
      <Card :filteractiveProp="currenActive"></Card>
    </div>
  </div>

  <div class="container mb-5">
    <div class="d-flex justify-content-center">
       <Pagination :pages="totalPage" :currenPageProp="currenPage" @updata="updataPage"></Pagination>
    </div>
  </div>
  <ul>
    <li v-for="item in filteractive" :key="item.ActivityID">{{item.City}}</li>
  </ul> -->
  <h1 class="mb-3" id="title">datatable介紹</h1>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Restaurant ID</th>
          <th scope="col">Restaurant name</th>
          <th scope="col">Restaurant City</th>
          <th scope="col">Restaurant Zipcode</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in currenRestaurant" :key="item.RestaurantID">
          <th scope="row">{{ item.RestaurantID }}</th>
          <td>{{ item.RestaurantName }}</td>
          <td>{{ item.City }}</td>
          <td>
            <img :src="item.Picture.PictureUrl1" alt="" class="bannerimg" />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center mt-5">
        <Pagination :pages="totalPage" :currenPageProp="currenPage"
        @updata="updataPage"></Pagination>
    </div>
  </div>
  <Jquerytable></Jquerytable>
</template>
<style>
.title {
  font-family: 'Fredoka One', sans-serif;
}
.banner {
  height: 400px;
}
.bannerimg {
  width: 200px;
  height: 100px;
  object-fit: cover;
  max-width: 100%;
}
table {
  margin-right: auto;
  margin-left: auto;
}
</style>

<script>
import Jquerytable from '../components/Jquery.vue'
import Pagination from '../components/Pagination.vue'
export default {
  data () {
    return {
      restaurant: [],
      currenRestaurant: [],
      totalPage: 0,
      perPage: 90,
      currenPage: 1
    }
  },
  components: { Pagination, Jquerytable },
  methods: {
    updataPage (page) {
      console.log('emit')
      this.currenPage = page
      this.currenRestaurant = []
      const minData = this.currenPage * this.perPage - (this.perPage - 1)
      const maxData = this.currenPage * this.perPage
      this.restaurant.forEach((item, index) => {
        if (index + 1 >= minData && index + 1 <= maxData) {
          this.currenRestaurant.push(item)
        }
      })
      const scrollDiv = document.querySelector('#title').offsetTop
      window.scrollTo({ top: scrollDiv, behavior: 'smooth' })
    },
    getRestaurant () {
      this.axios
        .get(
          'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24top=100&%24format=JSON'
        )
        .then((res) => {
          console.log(res)
          this.restaurant = res.data
          this.totalPage = Math.ceil(res.data.length / this.perPage)
          this.updataPage(1)
        })
    }
  },
  created () {
    this.getRestaurant()
  },
  mounted () {}
}
</script>
