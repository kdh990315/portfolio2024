<template>
	<div class="main_function">
		<div class="main_title">
			<h4>🌟 주요 기능</h4>
			<span>주요 기능을 보기 쉽게 시연영상과 설명을 요약해놨습니다.</span>
		</div>
		<div class="fuc_box" v-for="(detailData, key) in detailDatas" :key="key">
			<p @click="() => fucIsVisibleHandler(key)" class="fuc_title">{{key}}. {{ detailData.title }}</p>
			<div class="fuc_main" :class="{ active: fucIsVisible[key] }">
				<div class="fuc_info">
					<div class="fuc_review">
						<p v-for="(review, index) in detailData.reviews" :key="index">✅ {{ Object.values(review)[0] }}</p>					</div>
					<div class="fuc_video">
						<video :src="detailData.video" autoplay loop muted playsinline></video>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	props: ['detailDatas'],
	setup() {
		const fucIsVisible = ref({1: true});

		const fucIsVisibleHandler = (key) => {
			fucIsVisible.value[key] = !fucIsVisible.value[key];
		}

		return {
			fucIsVisible,
			fucIsVisibleHandler,
		}
	}
}
</script>

<style scoped lang="scss">
.main_function {
	margin-bottom: 3rem;
	
	.main_title {
		margin-bottom: 1.5rem;

		h4 {
			font-size: 2rem;
		}
	}

	.fuc_box {
		background-color: #f1f1f1;
		padding: 1rem;
		margin-bottom: 1rem;

		.fuc_title {
			color: #555454;
			cursor: pointer;
		}

		.fuc_main {
			width: 100%;
			height: 0;
			transition: height .3s;

			&.active {
				height: auto;
				transition: height .3s;

				.fuc_info {
					height: 100%;

					.fuc_review {
						display: block;

						p {
							margin-bottom: .7rem;
						}
					}

					.fuc_video {
						display: block;
					}
				}
			}

			.fuc_info {
				width: 100%;
				height: 0;
				display: flex;
				justify-content: space-between;
				transition: height .3s;

				.fuc_review {
					width: 49%;
					padding-top: 1.5rem;
					display: none;
				}

				.fuc_video {
					width: 49%;
					display: none;

					video {
						width: 100%;
					}
				}

				@media (max-width: 550px) {
					flex-direction: column;

					.fuc_review {
						width: 100%;
						padding-bottom: 1.5rem;
					}

					.fuc_video {
						width: 100%;

						video {
							width: 70%;
							display: block;
							margin: 0 auto;
						}
					}
				}
			}
		}
	}
}
</style>