<template>
    <ion-list >
        <clann-list-item v-for="person in clann" :key="person.id" :person="person"></clann-list-item>        
    </ion-list>    
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="openModal">
            <ion-icon :icon="add" />
        </ion-fab-button>
    </ion-fab> 

</template>

<script>
import {IonList, IonFab, modalController } from '@ionic/vue'
import { add, } from "ionicons/icons";

import ClannListItem from './ClannListItem.vue'
import Modal from '../person/NewPerson.vue'


export default {
    props:['clann'],
    components:{
     IonList,
     ClannListItem,
     IonFab     
    },
    setup(){
        return{
            add
        }
    },
    methods: {
    async openModal() {
      const modal = await modalController
        .create({
          component: Modal,
          cssClass: 'my-custom-class',
          componentProps: {
            title: 'Add'
          },
        })
      return modal.present();
    },
  },
}
</script>

