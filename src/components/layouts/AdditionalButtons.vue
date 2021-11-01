<template>
	<transition name="fade">
		<div class="settings" v-show="settingsModal" v-click-outside="hide">
			<h4 class="settings-title">Additional Setting</h4>
			<div class="settings-subtitle">Accent Color (Hue)</div>
			<input type="text" class="settings-input" placeholder="(0 - 360)" v-model="colorInput" @keyup="newColorInput">
		</div>
	</transition>
	<div class="buttons-group">
		<div class="settings-button" @click.stop="settingsModal = !settingsModal">
			<i class="ri-paint-fill"></i>
		</div>
		<div class="scrollTop-button" @click="scrollscrollTop">
			<i class="ri-arrow-up-line"></i>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			settingsModal: false,
			colorInput: null,
			showButton: false,
			hue: ''
		}
	},
	methods: {
		hide() {
			this.settingsModal = false
		},
		isNumber(n) { 
			return /^-?[\d.]+(?:e-?\d+)?$/.test(n); 
		}, 
		newColorInput() {
			this.newColor
		},
		scrollscrollTop() {
			window.scrollTo(0,0);
		},
		
	},
	computed: {
		newColor: function() {
			let root = document.documentElement;
			if (this.colorInput) {
				if (this.isNumber(this.colorInput)) {
					root.style.setProperty('--hue', this.colorInput)
				} else {
					root.style.setProperty('--hue', this.hue)
				}
			} else {
				root.style.setProperty('--hue', this.hue)
			}
			return this.colorInput
		},
	},
	created() {
		let root = document.documentElement;
		let docStyle = getComputedStyle(root);
		let hueCss = docStyle.getPropertyValue('--hue');
		this.hue = hueCss
	}
}
</script>

<style>

</style>