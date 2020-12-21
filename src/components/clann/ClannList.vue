<template>
  <ion-list >
                <clann-list-item v-for="person in clann" :key="person.id" :person="person"></clann-list-item>
            </ion-list>
</template>

<script>
import {IonList} from '@ionic/vue'
import ClannListItem from './ClannListItem.vue'

export default {
    props:['clann'],
    components:{
     IonList,
     ClannListItem
    }
}
</script>
