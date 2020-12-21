<template>
<ion-item :router-link="`/clann/person/${person.id}`" :key="person.id">
                <ion-thumbnail slot="start"><ion-img :src="person.image"> </ion-img></ion-thumbnail>
                <ion-label>
                {{person.title}}
                </ion-label>
                </ion-item>
</template>

<script>
import {IonItem, IonImg, IonThumbnail, IonLabel} from '@ionic/vue'

export default {
    props:["person"],
    components:{
     IonItem, IonImg,IonThumbnail, IonLabel
    }
}
</script>