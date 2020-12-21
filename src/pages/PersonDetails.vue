<template>
    <base-layout :title="person ? person.title : 'Loading...'" defaultBackLink="/clann">
    <h2 v-if="!person">No person exists</h2>
    <person-overview v-else :person="person">hi</person-overview>
    </base-layout>
</template>

<script>
import PersonOverview from '../components/person/PersonOverview.vue'

export default {
    components:{
        PersonOverview
    },
    data(){
        return {
            personId: this.$route.params.id
        }
    },
    computed:{
        person(){
            return this.$store.getters.person(this.personId);
        }
    },
    // watch:{
    //     $route(currentRoute){
    //         this.personId = currentRoute.paramas.id;
    //     }
    // }
}
</script>