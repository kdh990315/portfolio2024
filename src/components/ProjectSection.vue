<template>
	<section id="project_section" class="container">
		<div class="project_container">
			<div class="container_title">
				<h2>my project</h2>
				<span>나의 프로젝트</span>
			</div>
			<div class="project_contents_container">
				<div class="project_contents" v-for="data in projectData" :key="data.id">
					<div class="title_img">
						<img :src="data.intro.img" :alt="data.intro.title">
					</div>
					<div class="project_text">
						<h3 class="project_title">{{ data.intro.title }}</h3>
						<p>개발 환경 : {{ data.intro.language }}</p>
						<div class="btn_container">
							<BaseButton :title="'github'" :link="true" :url="data.intro.github">github</BaseButton>
							<BaseButton :title="'document'" @click="goToProjectDoc(data.id)">document</BaseButton>
							<BaseButton :title="'site'" :link="true" :url="data.intro.link">site</BaseButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { projectDatas } from '../data/projectDatas.js';

export default {
	data() {
		return {
			projectData: projectDatas,
		}
	},
	methods: {
		goToProjectDoc(projectId) {
			this.$router.push(`/projectDoc/${projectId}`);
		}
	}
}
</script>

<style scoped lang="scss">
@import '../scss/mixin.scss';

#project_section {
	width: 100%;
	height: 100%;
	border-top: solid 6px #f4f4f4;

	@include container();

	.project_container {

		.container_title {
			margin: 30px 0;
			font-family: 'Freesentation-9Black';

			h2 {
				text-transform: uppercase;
				font-size: 2rem;
				margin-bottom: 30px;
			}

			span {
				font-size: 1.3rem;
				font-weight: 500;
			}
		}

		.project_contents_container {

			.project_contents {
				display: flex;
				padding-bottom: 70px;

				@media (max-width: 600px) {
					flex-direction: column;
    			align-items: center;
				}
				
				&:not(:last-child) {
					border-bottom: 1px solid #ccc;
				}

				&:not(:first-child) {
					padding-top: 30px;
				}

				.title_img {
					width: 22rem;

					img {
						width: 100%;
						border-radius: 2rem;
						box-shadow: 5px 5px 5px #eaeaea;
					}
				}

				.project_text {
					margin-left: 3rem;

					@media (max-width: 600px) {
						margin-left: 0;
					}

					.project_title {
						font-size: 1.5rem;
						padding-top: 3rem;

						@media (max-width: 768px) {
							padding-top: 7rem;
						}

						@media (max-width: 600px) {
							padding-top: 3rem;
						}
					}

					p {
						padding: 1rem 0;
					}

					.btn_container {

						a {
							margin-right: 1rem;
						}
					}
				}
			}
		}
	}
}
</style>