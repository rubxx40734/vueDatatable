<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-6">
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
            <router-link class="nav-link" to="/about">表格練習</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/datatables">Datatables</router-link>
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

  <div class="container mb-5" v-if="openPagination">
    <div class="d-flex justify-content-center">
       <Pagination :pages="totalPage" :currenPageProp="currenPage" @updata="updataPage"></Pagination>
    </div>
  </div>
  <ul id="chart" class="container mb-5">
    <li  class="border w-100"></li>
  </ul>
</template>
<style>
.title {
  font-family: 'Fredoka One', sans-serif;
}
.banner {
  height: 400px;
}
.bannerimg {
  height: 400px;
  object-fit: cover;
  max-width: 100%;
}
</style>
<script>

import Card from '../components/Cards.vue'
import Pagination from '../components/Pagination.vue'
import * as c3 from 'c3'
export default {
  data () {
    return {
      banneractive: [],
      bannerlocal: [],
      bannerfood: [],
      currenActive: [],
      search: '',
      currenPage: 1,
      totalPage: 0,
      perPage: 10,
      openPagination: true,
      chart: {},
      c3data: []

    }
  },
  methods: {
    getlocal () {
      this.axios
        .get(
          'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24top=4&%24format=JSON'
        )
        .then((res) => {
          console.log(res.data)
          this.bannerlocal = res.data
          console.log(this.bannerlocal)
        })
    },
    getactive () {
      this.axios
        .get(
          'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?%24top=203&%24format=JSON'
        )
        .then((res) => {
          // const obj = {}
          res.data.forEach((item, i) => {
            item.datestar = `${new Date(item.StartTime).getFullYear()} / ${
              new Date(item.StartTime).getMonth() + 1
            } / ${new Date(item.StartTime).getDate()}`
            item.dateend = `${new Date(item.EndTime).getFullYear()} / ${
              new Date(item.EndTime).getMonth() + 1
            } / ${new Date(item.EndTime).getDate()}`
          })
          this.banneractive = res.data
          // 在這邊做 c3 資料處理

          const area = {}
          this.banneractive.forEach(item => {
            if (area[item.City] === undefined) {
              area[item.City] = 1
            } else {
              area[item.City] += 1
            }
          })
          console.log(area)
          const objKey = (Object.keys(area))
          console.log(objKey)

          objKey.forEach((item) => {
            const arr = []
            arr.push(item)
            arr.push(area[item])
            console.log(arr)
            this.c3data.push(arr)
          })
          console.log(this.c3data)
          this.tryc3()

          // 以上為c3 圖表
          this.totalPage = Math.ceil(res.data.length / this.perPage)
          this.updataPage(1)
        })
    },
    getfood () {
      this.axios
        .get(
          'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24top=4&%24format=JSON'
        )
        .then((res) => {
          this.bannerfood = res.data
        })
    },
    updataPage (page) {
      this.currenPage = page
      this.currenActive = []
      const minData = (this.currenPage * this.perPage) - (this.perPage - 1)
      const maxData = this.currenPage * this.perPage
      this.banneractive.forEach((item, i) => {
        if ((i + 1) >= minData && (i + 1) <= maxData) {
          this.currenActive.push(item)
        }
      })
      const scrollDiv = document.querySelector('#title').offsetTop
      window.scrollTo({ top: scrollDiv, behavior: 'smooth' })
    },
    show () {
      this.openPagination = false
      this.currenActive = this.filteractive
    },
    tryc3 () {
      this.chart = c3.generate({
        data: {
          columns:
          this.c3data,
          type: 'pie'
        }
      })
    }
  },
  computed: {
    filteractive () {
      return this.banneractive.filter((item) => {
        return item.ActivityName.match(this.search)
      })
    }
  },
  components: { Card, Pagination },
  mounted () {
    console.log(this.c3data)
    // this.tryc3()
  },
  created () {
    this.getactive()
    this.getlocal()
    this.getfood()
  }
}
</script>
