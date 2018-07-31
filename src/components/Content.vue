<template>
    <div>
        <Header />
        <div class="col-md-6 offset-md-3">
            <div class="card mb-3" v-for="post in posts" :key="post.index">
                <div class="card-body">
                    <router-link :to="{ name: 'post', params: {id: post.id} }">
                        <h4 class="card-title">{{ post.title.rendered }}</h4>
                    </router-link>
                    <article v-html="post.excerpt.rendered"></article>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue'

export default {
    name: 'Content',
    components: {
      Header
    },
    created() {
        this.getPosts()
    },
    methods: {
        getPosts() {
            this.$store.dispatch('getPosts')
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
a.read-more {
    display:  none;
}
</style>
