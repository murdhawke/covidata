<template>
	<div id="home">
			<LandingBanner></LandingBanner>
			<Terms></Terms>
			<MainTable></MainTable>		
	</div>
</template>

<script>
import Terms from '../components/Terms'
import LandingBanner from '../components/landingBanner'
import MainTable from '../../src/components/mainTable'
export default {
		components: { Terms,LandingBanner, MainTable }
}
</script>
<style>
#home {
	padding-top: 50px;
	
}
</style>