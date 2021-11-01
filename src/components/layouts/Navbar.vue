<template>
	<div class="navbar">
		<router-link to="/">
				<h1 class="navbar-text">Quran<span>Web</span></h1>
		</router-link>
		<i class="icon-theme" :class="{'ri-sun-fill' : nightMode, 'ri-moon-fill' : !nightMode}" @click="nightMode = !nightMode"></i>
	</div>
</template>

<script>
export default {
	data() {
		return {
			nightMode: false,
		}
	},
	watch: {
		nightMode: function() {
			localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
			if (this.nightMode) {
				document.body.classList.add('dark-theme')
			} else {
				document.body.classList.remove('dark-theme')
			}
		}
	}
}
</script>

<style>

</style>