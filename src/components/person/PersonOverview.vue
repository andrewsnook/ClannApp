<template>
  <ion-page>
    <ion-card>
      <ion-card-header>
        <ion-avatar>
      <img :src="person.image">
    </ion-avatar>
        <ion-card-title>Card Title</ion-card-title>
        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>        
      </ion-card-header>

      <ion-card-content>
        <ul >
          <li v-for="(h,index) in person.hobbies" :key="index">
            {{h}}
          </li>
        </ul>

      </ion-card-content>
    </ion-card>
  </ion-page>

</template>

<script>
import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonAvatar, IonPage } from '@ionic/vue';

export default ({
  props:["person"],
  components: { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle,IonAvatar, IonPage}
  
});
</script>