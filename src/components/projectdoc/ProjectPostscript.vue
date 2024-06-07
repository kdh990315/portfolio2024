<template>
	<div class="project_postscript">
		<div class="main_title">
			<h4>🌟 느낀점</h4>
		</div>

		<div class="project_text" v-html="detailPostscript"></div>
	</div>
</template>

<script>
export default {
	props: ['detailPostscript'],
}
</script>

<style scoped lang="scss">
.project_postscript {
	.main_title {
		margin-bottom: 1.5rem;

		h4 {
			font-size: 2rem;
		}
	}

	.project_text {
		line-height: 1.5rem;

		p {
			letter-spacing: 1px;
		}
	}
}
</style>