<template>
  <div class="home">
    <HomePage msg />
  </div>
  <div class="container text-center  mt-5 mb-5">
    <h1 class="mt-5 fw-bolder text-success" id="anchor3"> Emissionsliste </h1>
    <div class="table-responsive my-5">
      <Table :fields='fields' :emissionsDaten ="emissionsDaten"></Table>
    </div>
    <div id="Schlussfolgerung">
      <h2 id="anchor4">Schlussfolgerung</h2>
      <p>
        Aus der Tabelle lässt sich klar erkennen, dass die Emissionen der Länder die der Unternehmen deutlich übersteigen.
        <br>Dadurch, dass die Länderemissionen aber in viele Anteile gespalten werden kann, beeinflussen die Konsumenten nur einen
        kleinen Teil davon.
        <br>Während es nicht schaden kann, bewusster mit der Umwelt zu interagieren, hat man als Konsument größeren Erfolg, sich zum
        Beispiel dafür einzusetzen, dass in nachhaltige Energiequellen investierto oder der Ausbau von Fahrradwegen und öffentlichen 
        Verkehrsnetzen gefördert wird.
      </p>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'
import Table from '@/components/Table.vue'
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: 'HomeView',
  components: {
    Table, HomePage,
  },
  setup(){

//Array für Tabelle
const emissionsDaten = [
  {Platzierung:"1", KlassiertePlatzierung: "1", Emittent:"USA", Klassierung:"Land", Emission:"15352"},
  {Platzierung:"2", KlassiertePlatzierung: "2", Emittent:"Russland", Klassierung:"Land", Emission:"12851"},
  {Platzierung:"3", KlassiertePlatzierung: "3", Emittent:"China", Klassierung:"Land", Emission:"9147"},
  {Platzierung:"4", KlassiertePlatzierung: "4", Emittent:"Indien", Klassierung:"Land", Emission:"6355"},
  {Platzierung:"5", KlassiertePlatzierung: "5", Emittent:"Frankreich", Klassierung:"Land", Emission:"2815"},  
  {Platzierung:"6", KlassiertePlatzierung: "6", Emittent:"Deutschland", Klassierung:"Land", Emission:"962"},
  {Platzierung:"7", KlassiertePlatzierung: "7", Emittent:"Spanien", Klassierung:"Land", Emission:"784"},
  {Platzierung:"8", KlassiertePlatzierung: "8", Emittent:"Saudi-Arabien", Klassierung:"Land", Emission:"763"},
  {Platzierung:"9", KlassiertePlatzierung: "9", Emittent:"Türkei", Klassierung:"Land", Emission:"759"},
  {Platzierung:"10", KlassiertePlatzierung: "10", Emittent:"Großbrittanien", Klassierung:"Land", Emission:"710"},  
  {Platzierung:"11", KlassiertePlatzierung: "1", Emittent:"Shell", Klassierung:"Unternehmen", Emission:"78"},
  {Platzierung:"12", KlassiertePlatzierung: "2", Emittent:"Nestle", Klassierung:"Unternehmen", Emission:"72"},
  {Platzierung:"13", KlassiertePlatzierung: "3", Emittent:"Shein", Klassierung:"Unternehmen", Emission:"69"},
  {Platzierung:"14", KlassiertePlatzierung: "4", Emittent:"Boeing", Klassierung:"Unternehmen", Emission:"64"},
  {Platzierung:"15", KlassiertePlatzierung: "5", Emittent:"Google", Klassierung:"Unternehmen", Emission:"61"},  
  {Platzierung:"16", KlassiertePlatzierung: "6", Emittent:"Nintendo", Klassierung:"Unternehmen", Emission:"60"},
  {Platzierung:"17", KlassiertePlatzierung: "7", Emittent:"McDonalds", Klassierung:"Unternehmen", Emission:"55"},
  {Platzierung:"18", KlassiertePlatzierung: "8", Emittent:"Meta", Klassierung:"Unternehmen", Emission:"49"},
  {Platzierung:"19", KlassiertePlatzierung: "9", Emittent:"Johnson & Johnson", Klassierung:"Unternehmen", Emission:"31"},
  {Platzierung:"20", KlassiertePlatzierung: "10", Emittent:"Apple", Klassierung:"Unternehmen", Emission:"23"},  
]

const fields = [
  'Platzierung','KlassiertePlatzierung','Emittent','Klassierung','Emission'
]

return{emissionsDaten,fields}
},
}
</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: #2c3e50;
margin-top: 40px;
}
#Schlussfolgerung {
  text-align: left;
}
#anchor3 {
  text-align: left;
}

</style>
