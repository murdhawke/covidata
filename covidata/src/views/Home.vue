<template>
	<div id="home">
			<LandingBanner></LandingBanner>
			<Mainstats></Mainstats>
			<Terms></Terms>
	</div>
</template>

<script>
import Mainstats from '../components/mainStats'
import Terms from '../components/Terms'
import LandingBanner from '../components/landingBanner'
export default {
		components: { Mainstats,Terms,LandingBanner }
}
</script>
<style>
#home {
	padding-top: 50px;
	
}
</style>