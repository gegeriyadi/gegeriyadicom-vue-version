<template>
  <div>
    <Header />
    <div class="col-md-6 offset-md-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-head">{{ posts.title.rendered }}</h5>
        <article v-html="posts.content.rendered"></article>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Api from '../Api'
import Header from './Header.vue'

export default {
    name: 'SinglePage',
      components: {
        Header
      },
    data() {
      return {
        id: this.$route.params.id
      }
    },
    created() {
      this.getSinglePost(this.id)
    },
    methods: {
      getSinglePost(idPost) {
        Api().get('posts/' + idPost)
          .then(res => this.$store.commit('setContent', res.data))
          .catch(err => console.log(err))
      }
    },
    computed: {
      posts() {
          return this.$store.state.posts;
      }
    }
  }
</script>

<style>
  h5.card-head {
    font-size: 2.5em;
    margin-bottom: 40px;
  }
  iframe {
      width: 100%;
      height: 200px;
  }
  .aligncenter {
    clear: both;
    display: block;
    margin: 40px auto;
  }
  figcaption.wp-caption-text {
    font-size: small;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  p {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
</style>
