<template>
	<div class="mainStats">
    <br>
    <h1> Daily Totals</h1>
    <vs-row class="full-row"> 
      <vs-col w="3" >
          <vs-card>
              <template #text>
                <h3>This is a card</h3>
              </template>
          </vs-card>
      </vs-col>
      <vs-col w="3">
          <vs-card>
            <template #text>
              <h3>This is a card</h3>
            </template>
          </vs-card>
      </vs-col>
      <vs-col w="3" >
          <vs-card>
              <template #text>
                <h3>This is a card</h3>
              </template>
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
.mainStats {
  margin-left: 20px;
  margin-right: 20px;
}
.vs-col {
  text-align: center;
}
.vs-card {
  margin-top: 100px;
  margin-left: 50%;
  height: 400px;
  max-width: 500px;
  
}
.full-row {
  padding-bottom: 80px;
  line-height: 40px;
}
.darker-bg {
  background-color:#D3D3D3;
}
.info-row {
  padding-bottom: 100px;
  line-height: 30px;
}
</style>