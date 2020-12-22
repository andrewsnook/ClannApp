<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
        <ion-buttons>
            <slot name="end">
                <ion-button @click="closeModal">Close</ion-button>
            </slot>
        </ion-buttons>
    </ion-toolbar>
  </ion-header>
 
  <ion-content class="ion-padding">
       <form>
    <ion-item>
        <ion-label position="floating">Name</ion-label>
        <ion-input></ion-input>
    </ion-item>
    <ion-item>
        <ion-label position="floating">Date of Birth</ion-label>
        <ion-input></ion-input>
    </ion-item>
    <ion-item>
            <ion-label position="floating">Hobbies</ion-label>
            <ion-input placeholder="1"></ion-input>
            <ion-input placeholder="2"></ion-input>
            <ion-input placeholder="3"></ion-input>
    </ion-item>
    <ion-item>
        <ion-label position="floating">Picture</ion-label>
        <ion-input></ion-input>
    </ion-item>
     </form>
     <br/>
 <ion-button expand="block">Save</ion-button>
  </ion-content>
 
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons ,IonButton, modalController,IonLabel, IonInput, IonItem  } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    title: { type: String, default: 'Super Modal' },
  },
  data() {
    return {
      content: 'Content',
    }
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar,IonButton, IonButtons,IonLabel, IonInput, IonItem  },
  methods: {
    closeModal: function(success) {
      let response = {
        success,
        noteInfo: success ? this.noteInfo : null
      };
      modalController.dismiss(response);
    }
  },
});
</script>