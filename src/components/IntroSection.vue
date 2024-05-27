<template>
	<section id="intro_section" class="container">
		<div class="intro_container">
			<div class="intro_text_container">
				<div class="title">
					<h2>portfolio</h2>
					<span>Frontend Developer</span>
				</div>
				<p>안녕하세요. 저의 포트폴리오에 오신 것을 환영합니다.</p>
				<p>프론트엔드 개발자를 꿈꾸며 준비한 결과물들을 보기 쉽게 정리해 놓았습니다.</p>
				<p>비록 부족한 부분이 있겠지만 편안하게 보시며 즐겨주시면 감사하겠습니다.</p>
				<br>
				<br>
				<br>
				<div class="text_container">
					<h2></h2>
					<p>- 하고자 하는 일에 있어 도전하고 직접 경험해 보며 성장하는 신입 프론트엔드 개발자 김동현입니다.</p>
					<p>- 제가 배운 기술들을 사용하여 아이디어를 구현해 가는 과정이 흥미롭고 재밌습니다.</p>
					<p>- 비록 힘든 상황이 있지만 개발의 근육이 붙어가는 과정이라고 생각하며 긍정적이고 유쾌하게 대처하기 위해 노력합니다.</p>
					<p>- 지속적인 학습과 개인 발전을 통하여 도태되는 개발자가 아닌 성장하는 개발자가 되는 것이 목표입니다.</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
@import '../scss/mixin.scss';

#intro_section {
	width: 100%;
	height: 100%;

	@include container();

	.intro_text_container {
		padding: 200px 0 100PX 0;
		letter-spacing: 1.2px;

		.title {
			margin-bottom: 30px;
			font-family: 'Freesentation-9Black';

			h2 {
				text-transform: uppercase;
				font-size: 4rem;
				margin-bottom: 30px;
				color: $main-color;
			}

			span {
				font-size: 2rem;
				font-weight: 500;
			}
		}

		p {
			font-size: 1.2rem;
			line-height: 1.7rem;
		}

		.text_container {
			
			p {
				line-height: 2rem;
			}
		}
	}

}
</style>