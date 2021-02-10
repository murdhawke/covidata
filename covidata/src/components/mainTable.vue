<template>
    <div id="mainTable">
        <h1>Search</h1>
        <vs-row w="8">
            <vs-col class="search-input" w="7" offset="5">
            <vs-input  v-model="searchString" placeholder="Country Name">
                <template #icon>
                    <box-icon name='search' color='rgba(0,0,0,0.25)' ></box-icon>
                </template>
            </vs-input>
        </vs-col>
        </vs-row>
        <vs-table striped v-model="selected">
            <template #thead>
                <vs-tr>
                    <vs-th>
                        Country
                    </vs-th >
                    <vs-th>
                        New Cases
                    </vs-th >
                    <vs-th>
                        Total Cases
                    </vs-th>
                    <vs-th >
                        Total Deaths
                    </vs-th>
                    <vs-th>
                        Total Recovered
                    </vs-th>
                </vs-tr>
            </template>
            <template #tbody>
                <vs-tr :key="i" v-for="(r, i) in $vs.getPage(rawData, page, max)" :data="r" :is-selected="selected == r" >
                    <vs-td>
                        {{ r.country}}
                    </vs-td>
                     <vs-td >
                        {{ r.cases.new }}
                    </vs-td>
                     <vs-td >
                        {{ r.cases.total }}
                    </vs-td>
                     <vs-td >
                        {{ r.deaths.total}}
                    </vs-td>
                    <vs-td >
                        {{ r.cases.recovered}} 
                    </vs-td>
                </vs-tr>
            </template>
            <template #footer>
                <vs-pagination v-model="page" :length="$vs.getLength(rawData, max)" />
            </template>
        </vs-table>
    </div>
</template>

<script>
import axios from 'axios'
import apijs from '../configs/api'
export default {
    data() {
        return {
            page:1,
            max:15,
            search:'',
            selected:null,
            searchString:'',
            rawData:[]
        }
    },
    methods: {
 
    },
    created() {
       let vm = this
        axios.request(apijs.options).then(function (response) {
            vm.rawData =response.data.response
            return vm.rawData
        }).catch(function (error) {
            console.error(error);
        })
    },
    mounted() {
        console.log(this.searchString)
    }
    }
</script>

<style >
.vs-table {
    height: 80%;
    font-size: 11px;
}
.vs-table-content {
    padding: 50px;
}
div.vs-table__th__content {
    font-size: 15px;
    
}
.vs-table__td {
    line-height: 17px;
   text-align: left;

}
.vs-input-content {
    justify-content: center;
}
.footer {
    height: 300px;
    background: rgb(236,236,236);
    background: linear-gradient(117deg, rgba(236,236,236,1) 0%, rgba(238,238,238,0.958420868347339) 88%);
    width: 100%;
}
</style>