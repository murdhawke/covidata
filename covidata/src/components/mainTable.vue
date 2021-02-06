<template>
    <div id="mainTable">
        <vs-table striped v-model="selected">
            <template #thead>
                <vs-tr>
                    <vs-th>
                        Country
                    </vs-th >
                    <vs-th sort @click="countries = $vs.sortData($event, countries, 'totalDeaths')">
                        Total Cases
                    </vs-th>
                    <vs-th sort @click="countries = $vs.sortData($event, countries, 'totalDeaths')">
                        Total Deaths
                    </vs-th>
                    <vs-th sort @click="countries = $vs.sortData($event, countries, 'totalRecovered')">
                        Total Recovered
                    </vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr :key="country" v-for="(tr, country) in $vs.getPage(countries, page, max)" :data="tr" :is-selected="selected == tr" >
                    <vs-td>
                        {{ tr.continent }}
                    </vs-td>
                     <vs-td>
                        {{ tr.country }}
                    </vs-td>
                     <vs-td>
                        {{ tr.death.new }}
                    </vs-td>
                    <vs-td>
                        {{ tr.population }}
                    </vs-td>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination v-model="page" :length="$vs.getLength(countries, max)" />
            </template>
        </vs-table>
        <span class="data">
            <pre>
                {{ selected ? selected : 'Worlwide Statistics' }}
            </pre>
      </span>
    </div>
</template>

<script>
//import axios from 'axios'
//import axios from 'axios'
import apijs from '../configs/api'
export default {
    data() {
        return {
            page:1,
            max:10,
            selected:null,
            countries: []
        }
    },
    created() {
      apijs.response.data  = this.countries
    }
}
</script>

<style >
.vs-table {
    height: 500px;
    font-size: 11px;
    text-align: left;
}
.vs-table-content {
    padding-left: 70px;
    padding-right: 50px;
}
div.vs-table__th__content {
    font-size: 15px;
}
.vs-table__thead, .vs-table__footer {
   background: white;
}
</style>