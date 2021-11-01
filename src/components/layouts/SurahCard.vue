<template>
	<router-link class="surah grid" :to="'/surah/' + id">
		<div class="surah__list-number">
			<span>{{ id }}</span>
		</div>
		<div class="surah__list-details">
			<div class="surah__list-details-top">
				<h3 class="surah__list-details-name">{{ name }}</h3>
				<p class="surah__list-details-translate">{{ translated_name }}</p>
			</div>
			<div class="surah__list-details-bottom">
				<span class="pill">
					{{ revelation_place }}
				</span>
				<span class="pill surah__list-details-verses">
					{{ verses_count }}
				</span>
			</div>
		</div>
	</router-link>
</template>

<script>
export default {
	props: {
		id: {
			type: Number,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		translated_name: {
			type: String,
			required: true
		},
		revelation_place: {
			type: String,
			required: true
		},
		verses_count: {
			type: Number,
			required: true
		},
	},
}

</script>

<style>

</style>