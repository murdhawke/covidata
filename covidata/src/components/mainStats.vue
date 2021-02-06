<template>
	<div class="mainStats">
		<vs-row>
			<vs-col  w="6">
          <h3>Metrics</h3>
        <br>
          <MainTable></MainTable>
			</vs-col>
		</vs-row>
	</div>
</template>

<script>
import MainTable from './mainTable'
export default {
  components: { MainTable },
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
</style>