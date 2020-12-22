<template>

    <ion-card>
      <ion-card-header>
            <ion-avatar>
            <img :src="person.image">
        </ion-avatar>
        <ion-card-title>{{person.name}}</ion-card-title>
        <ion-card-subtitle>{{person.dob}}</ion-card-subtitle>        
      </ion-card-header>
    </ion-card>
    <ion-card>
        <ion-card-header>         
        <ion-card-subtitle>Hobbies</ion-card-subtitle>        
      </ion-card-header>
        <ion-card-content>
        <ion-list  lines="none">
          <ion-item v-for="(h,index) in person.hobbies" :key="index" slot="start">
              <ion-label>
            {{h}}
              </ion-label>
          </ion-item>
        </ion-list>
        </ion-card-content>
    </ion-card>
     <ion-card>
    <ion-card-header>
      <ion-card-subtitle>School</ion-card-subtitle>
      <ion-card-title>Castlelyons NS</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      Keep close to Nature's heart... and break clear away, once in awhile,
      and climb a mountain or spend a week in the woods. Wash your spirit clean.
    </ion-card-content>
  </ion-card>
</template>

<script>
import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonAvatar, IonLabel } from '@ionic/vue';

export default ({
  props:["person"],
  components: { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle,IonAvatar, IonLabel}
  
});
</script>