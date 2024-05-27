<template>
	<section id="aboutme_section" class="container">
		<div class="aboutme_container">
			<div class="container_title">
				<h2>About Me</h2>
				<span>절대 포기하지 않고 항상 최선을 다하는 김동현이 되겠습니다. 감사합니다.</span>
			</div>
			<div class="aboutme_main">
				<ul>
					<li class="aboutme_contents" v-for="(data, idx) in aboutmeDatas" :key="idx">
						<span>{{ data.title }}</span><em>{{ data.body }}</em>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			aboutmeDatas: [
				{ title: 'name', body: '김동현' },
				{ title: 'birthday', body: '1999.03.15' },
				{ title: 'home', body: '경기도 시흥시 장곡동' },
				{ title: 'education', body: '용인송담대학교 정보통신학과' },
				{ title: 'hobby', body: '낚시🎣 조깅🏃' },
				{ title: 'mbti', body: 'ESTP' }
			]
		}
	}
}

</script>

<style scoped lang="scss">
@import '../scss/mixin.scss';

#aboutme_section {
	width: 100%;
	height: 100%;
	border-top: solid 6px #f4f4f4;

	@include container();

	.aboutme_container {

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

		.aboutme_main {
			margin-top: 7rem;
			padding-bottom: 5rem;
			ul {

				li {
					padding: 10px 0;
					width: 40rem;
					border-top: 1px solid #ccc;
					padding-left: 10px;

					@media (max-width: 600px) {
						width: 30rem;
					}

					&:first-child {
						border-top: none;
					}


					span {
						text-transform: uppercase;
						font-size: 1.5rem;
						font-family: 'Freesentation-5Black';

						letter-spacing: 1.2px;
					}

					em {
						margin-left: 40px;
						font-size: 1rem;
						opacity: 0;
						transition: opacity .3s;
					}

					&:hover {
						em {
							opacity: 1;
						}
					}
				}
			}

		}
	}
}
</style>