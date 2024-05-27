<template>
	<a @click="clickHandler" v-if="!link">
		<span>
			<slot></slot>
		</span>
	</a>
	<a :href="url" target="_blank" v-else>
		<span>
			<slot></slot>
		</span>
	</a>
</template>

<script>
export default {
	props: {
		link: {
			type: Boolean,
			requried: false,
			default: false
		},
		url: {
			type: String,
			requried: false,
			default: '#',
		}
	},
	methods: {
		clickHandler(ev) {
			ev.preventDefault();
		},
	}
}
</script>

<style scoped lang="scss">
a {
	color: #37474f;
	border: 1px solid #37474f;
	background: inherit;
	border-radius: .5rem;
	display: inline-block;
	position: relative;
	cursor: pointer;

	&::after {
		content: "Click!";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translate3d(0, 25%, 0);
		opacity: 0;
		transition: .3s;
	}

	span {
		padding: 0.4rem 1.8rem;
		display: inline-block;
		font-family: "Freesentation-5Black";
		text-transform: capitalize;
		transition: all .3s;
		opacity: 1;
		position: relative;
		transform: translate3d(0, 0, 0);

		@media (max-width:1500px) {
			padding: 0.3rem 1rem;
			font-size: .8rem;
		}
	}
	&:hover {

		span {
			transform: translate3d(0, -25%, 0);
			opacity: 0;
		}

		&::after {
			transform: translate(-50%, -50%) translate3d(0, 0, 0);
			opacity: 1;
			transition: .3s;
		}
	}
}
</style>