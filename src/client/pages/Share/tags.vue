<template>
    <div class="tags-wrapper">
        <ul :class="{'allow-wrap':this.pc_bol,'tags-container':true}">
            <li v-for="(tag,index) in blogTypes" :key="index"><Tag :text="tag.name" :path="'/Share/blog/'+tag.name"></Tag></li>
        </ul>
    </div>
</template>
<script>
import Tag from '../../components/tag.vue'
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {

            }
        },
        components:{
            Tag
        },
        methods: {

        },
        computed: {
            ...mapGetters([
                'blogTypes',
                'pc_bol'
            ])
        }
    }
</script>
<style lang="scss" scoped>
    .tags-wrapper {
        margin: 20px auto;
    }
    .tags-container{
      display: flex;
      justify-content: space-around  
    }
    .allow-wrap {
        flex-wrap: wrap
    }
    li {
        display: inline-block;
        vertical-align: middle;
    }
</style>