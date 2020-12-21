<template>
    <base-layout title="Clann App">
            <clann-list :clann="clann"></clann-list>
    </base-layout>
</template>

<script>

import ClannList from '../components/clann/ClannList.vue';
export default {
    components:{
     ClannList
    },
    computed:{
        clann(){
            return this.$store.getters.clann;
        }
    }
}
</script>