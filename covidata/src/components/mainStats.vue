<template>
	<div class="mainStats">
    <vs-row class="full-row"> 
      <vs-col w="4" >
          <vs-card>
              This is a test card
          </vs-card>
      </vs-col>
      <vs-col w="4">
          <vs-card>
              This is a test card
          </vs-card>
      </vs-col>
      <vs-col w="4" >
          <vs-card>
              This is a test card
          </vs-card>
      </vs-col>
    </vs-row>
    <vs-row class="info-row">
      <vs-col w="12">
          <Summary></Summary>
      </vs-col>
    </vs-row>
		<vs-row>
			<vs-col  w="8" offset="2" class="">
          <MainTable></MainTable>
			</vs-col>
		</vs-row>
	</div>
</template>

<script>
import MainTable from './mainTable'
import Summary from '../components/Summary'
export default {
  components: { MainTable, Summary },
  data() {
    return {

    }
  }
}
</script>

<style>
.vs-col {
  text-align: center;
}
.vs-card {
  margin-top: 100px;
  margin-left: 80px;
  height: 400px;
  max-width: 500px;
  
}
.full-row {
  padding-left: 50px;
  padding-right: 100px;
  padding-bottom: 100px;
  line-height: 40px;
}
.darker-bg {
  background-color:#D3D3D3;
}
.info-row {
  padding-left: 50px;
  padding-right: 100px;
  padding-bottom: 100px;
  line-height: 40px;
}
</style>