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
    {{ content }}
  </ion-content>

</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons ,IonButton, modalController } from '@ionic/vue';
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
  components: { IonContent, IonHeader, IonTitle, IonToolbar,IonButton, IonButtons },
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