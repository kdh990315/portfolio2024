<template>
	<div class="title_container">
		<div class="title_wrap">
			<div class="title_left">
				<h3>🌟 {{ detailIntroDatas.title }}</h3>
				<p>🧑🏿‍🤝‍🧑🏼 참여도: 개인 100%</p>
				<p>🖥️ 개발 환경: {{ detailIntroDatas.language }}</p>
				<p>⚙️ API: {{ detailIntroDatas.api }}</p>
				<p>📱 반응형: {{ detailIntroDatas.responsive }}</p>
				<p>🗒️ 프로잭트 개요: {{ detailIntroDatas.outline }}</p>
			</div>
			<div class="title_right">
				<img :src="detailIntroDatas.img" :alt="detailIntroDatas.title">
			</div>
		</div>
		<div class="tag_box">
			<div class="tag" v-for="hashtag in detailIntroDatas.hashtags" :key="hashtag"><span>#{{ hashtag }}</span></div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['detailIntroDatas'],
}
</script>

<style scoped lang="scss">
.title_container {
	margin-bottom: 3rem;

	.title_wrap {
		display: flex;
		justify-content: space-between;

		.title_left {
			line-height: 2rem;
			width: 68%;

			h3 {
				font-size: 2rem;
				margin-bottom: 1.5rem;
			}

			p {
				font-size: 1rem;
			}
		}

		.title_right {
			width: 30%;

			img {
				width: 20rem;
				margin: 0 auto;
				display: block;
			}
		}

		@media (max-width: 950px) {
			.title_left {
				width: 50%;
			}

			.title_right {
				width: 50%;
			}
		}

		@media (max-width: 650px) {
			flex-direction: column;

			.title_left {
				width: 100%;
        padding-bottom: 2rem;
			}

			.title_right {
				width: 100%;
			}
		}
	}

	.tag_box {
		margin-top: 3rem;

		.tag {
			display: inline-block;
			background: #ffd9d9;
			padding: 0px 5px;
			border-radius: 7px;
			font-size: 0.8rem;
			margin-right: 5px;
		}

		@media (max-width: 1200px) {
			.tag {
				margin-bottom: 3px;
			}
		}
	}
}
</style>