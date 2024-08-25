<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <div class="text-center">
        <div class="btn-group" role="group" aria-label="Seiteninhalt Aufruf und Änderung der Schriftkultur">
          <a type="button" class="btn btn-success btn-sm" data-bs-toggle="offcanvas" data-bs-target="#InhaltWebseite">Inhalt der Seite</a> 
          <button type="button" class="btn btn-outline-success btn-sm" id="rtlKnopf" @click="rtl">Orientierung nach rechts</button>
        </div>
      </div>
      <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="InhaltWebseite" aria-labelledby="InhaltWebseite">
        <div class="offcanvas-header">
          <h4 id="offcanvasLeftLabel">Inhalt</h4>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul>
            <li>
              <router-link to="/components/homePage#anchor">Willkommen!</router-link>
            </li>
            <br>
            <li>
              <router-link to="/components/homePage#anchor2">Aktuelles Projekt</router-link>
            </li>
            <br>
            <li>
              <router-link to="/#anchor3">Emissionsliste</router-link>
            </li>
            <br>
            <li>
              <router-link to="/#anchor4">Schlusssfolgerung</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div id="willkommen">
        <h1 id="anchor">Willkommen!</h1>
        <p>
          Wir freuen uns, Sie auf der offizielllen OrKS-Webseite begrüßen zu dürfen!
          Hier bei OrKS (Organisation für Klimaschutz) steht es an erster Stelle, die Umwelt zu schützen: wir informieren unter 
          anderem über aktuelle Klimaschutzaktionen, die Folgen des Klimawandels und klären inkorrekte Annahmen auf. In unserem 
          neuesten Beitrag, der unten aufgeführt ist, erfahren Sie über die CO2-Emissionswerte der größten Emittenten aus dem Jahr 
          2023. 
          <br> Des Weiteren freuen wir uns, wenn Sie sich die Zeit nehmen, unsere anderen aktuellen Projekte aufzurufen, die in der 
          Navigationsleiste zu finden sind.
        </p>
      </div>
      <div>
        <h2 id="anchor2">CO2-Emissionen Rangliste</h2>
        <p id="anfangsText">
          Weniger fliegen, weniger Fleisch kaufen, öffentliche Verkehrsmittel benutzen anstatt mit dem Auto zu fahren:
          Verbraucher werden heutzutage mit Tips und Möglichkeiten überhäuft, wie sie ihren ökologischen Fußabdruck 
          verringern und nachhaltiger leben können.
          <br>Die Verantwortung zum Klimawandel wird hierbei meist auf den Konsumenten abgewälzt und die Beteiligung großer
          Firmen größtenteils ignoriert.
          <br>Wie sehen die Anteile aber tatsächlich aus? In der nachfolgenden Tabelle finden Sie die jährlichen CO2-Emissionen
          einiger Länder und Firmen inklusive einer Rangfolge.
          <br>Beachten Sie hier bitte, dass die Emissionen der Konsumenten einen Teil der Länder darstellen, gemeinsam mit unter 
          anderem der Landwirtschaft, der Energiewirtschaft und den Industrieprozessen. 
          <br>
          <br>Die Funktionen der Tabelle umfassen die Möglichkeit, alle Felder alphabetisch zu sortieren, sowie im obigen Eingabefeld
          nach einem spezifischen Begriff zu filtern. Wenn Sie einen Rechner verwenden, erfolgt die Suche automatisch während des 
          Tippens, auf Mobilgeräten wie Smartphones und Tablets bitten wir Sie, die Enter-Taste zu drücken, um die Suche durchzuführen.
          <br>Aus platzsparenden Gründen sind die Tabellenüberschriften gekürzt, mit den Emissionen sind aber die Emissionen in Millionen
          Tonnen gemeint.
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data() {
    return {
      rechtsLinks: true
    }
  },
  methods: {
  //lokales Menü wird links oder rechts dargestellt
    rtl() {
       if (this.rechtsLinks == true) {
        this.rechtsLinks = !this.rechtsLinks
        document.getElementById('InhaltWebseite').classList.remove('offcanvas-start')
        document.getElementById('InhaltWebseite').classList.add('offcanvas-end')
        document.getElementById('rtlKnopf').textContent = "Orientierung nach links"
      }
      else  {
        this.rechtsLinks = !this.rechtsLinks
        document.getElementById('InhaltWebseite').classList.remove('offcanvas-end')
        document.getElementById('InhaltWebseite').classList.add('offcanvas-start')
        document.getElementById('rtlKnopf').textContent = "Orientierung nach rechts"
      }
    }
  }
}

</script>

<style scoped>
div.text-center {
  margin-bottom: 40px;
}
h2, h3 {
  margin-top: 40px;
  margin-bottom: 14px;
}
h4 {
  margin-top: 8px;
  margin-left: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.offcanvas {
  width: 200px !important;
}
.offcanvas-body li {
  margin: 6px;
}

</style>
