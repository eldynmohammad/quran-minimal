<template>
	<div class="home container">
		<div class="home__search">
			<span>
				<svg class="w-6 h-6" v-if="!quranNameSearch" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
				<svg class="w-6 h-6" v-if="quranNameSearch" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" @click="quranNameSearch = ''" style="cursor: pointer"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
			</span>
			<input type="text" placeholder="Search surah ..." class="home__search-input" v-model="quranNameSearch" >
		</div>
		<div class="home__content grid">
			<surahCard v-for="d in filteredQuran" :key="d.id" :id="d.id" :name="d.name_simple" :translated_name="d.translated_name.name" :revelation_place="d.revelation_place" :verses_count="d.verses_count">
			</surahCard>
		</div>	
	</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import surahCard from '@/components/layouts/SurahCard'

export default {
	components: {
		surahCard
	},
	data() {
		return {
			info: null,
			data: [],
			quranNameSearch: '',
		}
	},
	created() {
		axios.get(`https://api.quran.com/api/v4/chapters?language=en`)
		.then(response => {
			this.data = response.data.chapters
		})
		.catch(e => {
			this.errors.push(e)
		})
	},
	computed: {
		filteredQuran: function () {
			var qurans = this.data;
			var quranNameSearch = this.quranNameSearch;

			if(!quranNameSearch){
				return qurans;
			}

			quranNameSearch = quranNameSearch.trim().toLowerCase();

			qurans = qurans.filter(function(item){
				if(item.name_simple.toLowerCase().indexOf(quranNameSearch) !== -1){
					return item;
				}
			})

			return qurans;
		}
	},
}
</script>
