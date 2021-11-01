<template>
	<div class="container">
		<div class="surah__div">
			<div v-if="id != 1" class="surah__opening arabic flex">
				<span v-for="b in bismillah.words" :key="b.id">{{ b.text }}</span>
			</div>
			<div class="separator grid" v-for="d in data" :key="d.id">
				<div class="arabic surah__div-arabic">
					<span v-for="v in d.words" :key="v.id">{{ v.text }}</span>
				</div>
				<div class="surah__div-translate flex">
					<div class="surah__div-verseKey">({{ d.verse_key }})</div>
					<div class="surah__div-translation">
						<!-- <p id="myId" ref="myId">{{ d.translations[0].text }}</p> -->
						<p id="myId" ref="myId" v-html="d.translations[0].text"></p>
					</div>
				</div>
			</div>
			<div v-if="newCount > 1">
				<surah-next-page v-for="c in newCount" :key="c+1" :page="c+1"/>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import { useRoute } from 'vue-router'
import surahNextPage from '@/views/surahSingle/surahNextPage'
// import { ref, onMounted } from 'vue'

export default {
	components: {
		surahNextPage
	},
	data() {
		return {
			data: [],
			bismillah:[],
			id: null,
			count: null,
			newCount: null,
		}
	},
	mounted() {
		// const myId = ref(null)
			// console.log(document.getElementById("myId").innerHTML)
		// onMounted(() => {
		// 	console.log(myId)
		// })
	},
	async created() {
		const route = useRoute()
		await axios.get(`https://api.quran.com/api/v4/chapters/${route.params.id}?language=en`)
			.then(response => {
				this.count = response.data.chapter.verses_count
				this.newCount = Math.round(Math.floor(this.count / 50)) + (Math.floor(this.count / 50)%2)
			})
		
		await axios.get(`https://api.quran.com/api/v4/verses/by_chapter/${route.params.id}?language=en&words=true&translations=131&page=1&per_page=50&word_fields=text_uthmani&translation_fields=language_name`)
		.then(response => {
			this.data = response.data.verses
			// console.log(this.data)
			this.id = this.data[0].id
		})
		.catch(e => {
			console.log(e)
		})

		await axios.get(`https://api.quran.com/api/v4/verses/by_key/1:1?language=en&words=true&word_fields=text_uthmani`)
		.then(response => {
			this.bismillah = (response.data.verse)
		})
	},
}
</script>
<style>

</style>