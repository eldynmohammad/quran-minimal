<template>
	<div class="separator grid" v-for="d in data2" :key="d.id">
		<div class="arabic surah__div-arabic">
			<span v-for="v in d.words" :key="v.id">{{ v.text }}</span>
		</div>
		<div class="surah__div-translate flex">
			<div class="surah__div-verseKey">({{ d.verse_key }})</div>
			<div class="surah__div-translation">
				<span v-for="t in d.words" :key="t.id" id="translation-ayat">{{ t.translation.text }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import { useRoute } from 'vue-router'

export default {
	props: {
		page: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			data2: [],
			windowTop: 0
		}
	},
	async beforeMount() {
		const route = useRoute()
		await axios.get(`https://api.quran.com/api/v4/verses/by_chapter/${route.params.id}?language=en&words=true&translations=21&page=${this.page}&per_page=50&word_fields=text_uthmani`)
		.then(response => {
			this.data2 = response.data.verses
		})
		.catch(e => {
			console.log(e)
		})
	},
	methods() {
		var trans = document.getElementById('translation-ayat')
		console.log(trans)
		// var htmlObject = document.createElement('div');
		// htmlObject.innerHTML = trans.innerHTML
	}
	// mounted() {
	// }
}
</script>

<style>

</style>