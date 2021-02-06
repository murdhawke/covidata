<template>
	<div id="home">
			<Mainstats></Mainstats>
			<Terms></Terms>
	</div>
</template>

<script>
import Mainstats from '../components/mainStats'
import Terms from '../components/Terms'
export default {
		components: { Mainstats,Terms }
}
</script>
<style>
#home {
	padding-top: 50px;
	
}
</style>