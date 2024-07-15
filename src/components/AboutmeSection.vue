<template>
	<section id="aboutme_section" class="container" data-scroll>
		<div class="aboutme_container">
			<div class="container_title">
				<h2 id="aboutme-text-animation-target"></h2>
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
import TypeIt from 'typeit';
import ScrollOut from 'scroll-out';

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
	},
	mounted() {
		ScrollOut({
			threshold: 0.2,
		})

		new TypeIt('#aboutme-text-animation-target', {
			speed: 85,
			waitUntilVisible: true,
			loop: true,
		})
		.type("about me", { delay: 400 })
    .delete(20)
    .type("끝까지 봐주셔서 감사합니다 :)", { delay: 500 })
    .go();
	}
}

</script>

<style scoped lang="scss">
@import '../scss/mixin.scss';

.container[data-scroll] {
	opacity: 0;
	will-change: transform, scale, opacity;
	transform: translateY(6rem) scale(0.93);
	transition: all 1.5s cubic-bezier(.165, .84, .44, 1);
}

.container[data-scroll="in"] {
	opacity: 1;
	transform: translateY(0) scale(1);
}

.container[data-scroll="out"] {
	opacity: 0;
}

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