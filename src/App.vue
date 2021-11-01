<template>
	<Navbar />
	<div class="content">
		<router-view/>
		<additional-buttons/>
	</div>
	<Footer />
</template>

<script>
import Navbar from '@/components/layouts/Navbar.vue'
import Footer from './components/layouts/Footer.vue'
import AdditionalButtons from './components/layouts/AdditionalButtons.vue'


export default {
	components: {
		Navbar,
		AdditionalButtons,
		Footer
	}
}
</script>