<template>
  <div class="searchBar">
    <div class="input-group mb-5">
      <input type="search" class="form-control" v-model='searchQuery' placeholder="Eingabe" aria-label="Eingabefeld" aria-describedby="button-addon2"> 
    </div>
  </div>
  
    <table id="tableComponent" class="table table-bordered table-striped">
      <caption> CO2-Emittentenrangliste, 2023</caption>
      <thead>
        <tr>
          <th  v-for="field in fields" :key='field' @click="sortTable(field)"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371zm1.57-.785L11 2.687h-.047l-.652 2.157z"/>
            <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293z"/>
            </svg>
            {{field}} 
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredList" :key='item'>
        <td v-for="field in fields" :key='field'>{{item[field]}}</td>
        </tr>
      </tbody>
    </table> 
  </template>

  <script>
  import {computed,ref} from "vue";
  
  export default {
    name: 'TableComponent',
    props:{
        emissionsDaten:{
            type: Array,
        },
        fields:{
            type: Array,
        }
    },
    
    setup(props) {
      let sort = ref(false);
      let updatedList =  ref([])
      let searchQuery = ref("");
      
      //Sortierfunktion
      const sortTable = (col) => {
        sort.value = true
        updatedList.value = props.emissionsDaten
        switch (col) {
          case 'Emission' :
          case 'Platzierung' :
          case 'KlassiertePlatzierung' :
            updatedList.value.sort(function(a, b) {
             return a[col] - b[col]
            })
            break;
          case 'Emittent' :
          case 'Klassierung' :
            updatedList.value.sort(function(a, b) {
              return a[col].localeCompare(b[col])
            })
            break;
        }
      }
  
      const sortedList = computed(() => {
        if (sort.value) {
          return updatedList.value
        }
        else{
          return props.emissionsDaten;
        }
        });
        
        //Filterfunktion
        const filteredList = computed(() => {
            return sortedList.value.filter((product) => {
              return (
                product.Platzierung.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1 ||
                product.KlassiertePlatzierung.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1 ||
                product.Emittent.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1 ||
                product.Klassierung.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1 ||
                product.Emission.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1 
            )
            });
        });   
        
  
    return {sortedList, sortTable,searchQuery,filteredList}
    }
   
  }
  </script>

  <style scoped>

  table th:hover {
    background:#f2f2f2;
  }

  </style> 