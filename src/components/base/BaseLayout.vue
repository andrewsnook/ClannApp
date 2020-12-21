<template>
  <IonPage>
        <ion-header>
            <ion-toolbar>
                <ion-buttons>
                    <slot name="start">
                        <ion-back-button :default-href='defaultBackLink'></ion-back-button>
                    </slot>
                </ion-buttons>
            <ion-title>{{title}}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot/>
        </ion-content>
    </IonPage>
</template>


<script>
import {IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonBackButton, IonButtons} from '@ionic/vue'
export default {
    props:['title','defaultBackLink'],
    components:{
    IonPage, IonHeader, IonTitle, IonContent, IonToolbar,IonBackButton, IonButtons
    }
    
}
</script>

<style>

</style>