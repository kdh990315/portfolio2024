<template>
	<section id="script_section" class="container">
		<div class="script_container">
			<div class="container_title">
				<h2>My Script</h2>
				<span>제가 공부하면서 배운 기능을 codepen에 기록해 놓았습니다.</span>
			</div>

			<div class="script_main">
				<div class="card" v-for="itemData in itemDatas" :key="itemData.id">
					<div class="card_contents front">
						<strong>{{ itemData.id }}</strong>
						<div class="card_title">
							<span>{{itemData.title}}</span>
						</div>
					</div>
					<div class="card_contents back">
						<h4>{{itemData.title}}</h4>

						<p v-html="itemData.des"></p>

						<div class="btn_container">
							<BaseButton :link="true" :url="itemData.link">codePen</BaseButton>
						</div>
					</div>
				</div>
			</div>
		</div>

	</section>
</template>

<script>
export default {
	data() {
		return {
			itemDatas: [
				{
					id: 1,
					title: 'Slide Animation',
					des: `
						<p>JavaScript를 활용하여 무한슬라이드효과를 구현하였습니다.</p><br>
						<p>브라우저의 넓이에 따라 작동할 수 있도록 반응형 작업을 완료하였습니다.</p><br>
						<p>cloneNode메서드를 활용하여 끝번호로 간다면 다시 처음 위치로 되돌아올 수 있는 로직을 사용하였습니다.</p>
					`,
					link: 'https://codepen.io/dwmnhedo-the-encoder/pen/pomRMVm'
				},
				{
					id: 2,
					title: 'Starry Night Effect',
					des: `
						<p>JavaScript를 활용하여 웹페지에 별이 반짝거리는 효과를 나타내봤습니다.</p><br>
						<p>createDocumentFragment()를 사용하여 여러 DOM조작을 한번에 처리해 성능상 이점을 가져올 수 있도록 구현했습니다.</p><br>
						<p>setProperty()메서드를 활용하여 css의 스타일을 동적으로 변경하였습니다.</p>
					`,
					link: 'https://codepen.io/dwmnhedo-the-encoder/pen/ZENeebV'
				},
				{
					id: 3,
					title: 'Glitch Effect',
					des: `
						<p>JavaScript와 css를 활용하여 Glitch효과를 구현했습니다.</p><br>
						<p>Math.random메서드와 setProperty()메서드를 활용하여 css의 스타일을 동적으로 조작하였습니다.</p><br>
					`,
					link: 'https://codepen.io/dwmnhedo-the-encoder/pen/KKLaOqb'
				},
				{
					id: 4,
					title: 'Parallax - css',
					des: `
						<p>Parallax효과를 css만으로 나타내보았습니다.</p><br>
						<p>background-attachment의 속성을 활용하여 보다 쉽게 Parallax효과를 구현해보았습니다.</p><br>
					`,
					link: 'https://codepen.io/dwmnhedo-the-encoder/details/LYoWWXx'
				},
				{
					id: 5,
					title: 'Scroll SVG Animation',
					des: `
						<p>순수 자바스크립트로 scroll svg animation을 구현하였습니다.</p><br>
						<p>사용자의 scrollY 값에 따라서 svg요소가 채워지도록 하였습니다.</p><br>
						<p>css의 stroke 속성들을 사용하여 구현하였습니다.</p><br>
					`,
					link: 'https://codepen.io/dwmnhedo-the-encoder/pen/wvbdpqr'
				},
			]
		}
	},
}
</script>

<style scoped lang="scss">
@import '../scss/mixin.scss';

#script_section {
	width: 100%;
	border-top: solid 6px #f4f4f4;

	@include container();

	.script_container {
		.container_title {
			margin: 30px 0 60px 0;
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

		.script_main {
			display: flex;
			flex-wrap: wrap;
			perspective: 2000px;

			@media (max-width: 600px) {
				justify-content: center;
				
			}

			.card {
				width: 280px;
				height: 350px;
				margin-right: 2rem;
				margin-bottom: 2rem;
				border-radius: 2rem;
				position: relative;
				box-shadow: 5px 5px 5px #eaeaea;
				transform-style: preserve-3d;
				transform: rotateY(0);
				transition: 1s;

				@media (max-width: 1200px) {
					width: 20rem;
					height: 25rem;
				}

				.card_contents {
					width: 100%;
					height: 100%;
					border-radius: 2rem;
					position: absolute;
					backface-visibility: hidden;

					.card_title {
						width: 100%;
						height: 80px;
						background-color: #fff;
						position: absolute;
						top: 50%;
						transform: translateY(-50%);

						span {
							width: 100%;
							font-size: 1.2rem;
							text-align: center;
							position: absolute;
							@include position-center;
						}
					}
				}

				.front {
					background-color: $main-color;

					strong {
						position: absolute;
						top: .2rem;
						left: 1rem;
						font-size: 2.5rem;
						color: #9d9797;
					}
				}

				.back {
					background-color: #fff5ec;
					transform: rotateY(180deg);

					h4 {
						font-size: 1.1rem;
						text-align: center;
						padding: .5rem 0;
					}

					p {
						font-size: .9rem;
						padding: 0 .5rem;
						letter-spacing: .8px;
						margin-top: 1rem;
					}

					.btn_container {
						position: absolute;
						bottom: 1.5rem;
						left: 50%;
						transform: translateX(-50%);
					}
				}

				&:hover {
					transform: rotateY(180deg);
				}
			}
		}
	}
}
</style>