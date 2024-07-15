<template>
	<section id="skill_section" class="container" data-scroll>
		<div class="skill_container">
			<div class="container_title">
				<h2 id="skill-text-animation-target"></h2>
				<span>나의 기술 스택</span>
			</div>
			<div class="skill_wrap">
				<ul class="skill_box">
					<li v-for="(data, idx) in skillData" @click="openModal(data.title, data.doc)" :data-index="idx" class="skill"
						data-scroll>
						<span v-html="data.icon" class="icon"></span>
						<span>{{ data.title }}</span>
					</li>
				</ul>
			</div>
		</div>
		<BaseDialog :show="showModal" :title='modalData.title' @tryClose="closeModal">
			<p v-html="modalData.doc"></p>
		</BaseDialog>

	</section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ScrollOut from 'scroll-out';
import TypeIt from "typeit";

const skillData = [
	{
		icon: '<i class="fa-brands fa-html5"></i>',
		title: 'HTML5',
		doc: `
				- HTML을 통해 웹페이지의 구조를 만들고 시멘틱 태그를 활용하여 웹페이지의 의미를 정확하게 전달할 수 있습니다.<br><br>
				- HTML5의 다양한 기능을 활용하여 다양한 멀티미디어 요소를 웹페이지에 사용할 수 있습니	.
				`
	},
	{
		icon: '<i class="fa-brands fa-css3-alt"></i>',
		title: 'Css/Scss',
		doc: `
				- 기본적인 css 기능뿐만 아니라 scss통해 코드의 재활용성과 가독성을 높힐 수 있습니다.<br><br>
				- css 애니메이션을 활용하여 웹페이지에 다양한 동적인 효과를 줄 수 있습니다.<br><br>
				- 미디어 쿼리를 사용하여 다양한 화면 크기에 대응하는 반응형 웹 디자인을 구현할 수 있습니다.<br><br>
				- FlexBox와 Grid를 이용하여 레이아웃을 더욱 효율적으로 구성할 수 있습니다.<br><br>
				- SCSS를 활용하여 복잡한 스타일 시트를 구조화하고, 변수, 중첩, 믹스인 등을 사용하여 재사용 가능한 스타일을 작성할 수 있습니다.<br><br>
				- 변수, mixin, 계층화된 변수 설정을 통하여 프로젝트의 css를 일관성있게 유지할 수 있고 유지보수를 더욱 쉽게 할 수 있습니다.<br><br>
				`
	},
	{
		icon: '<i class="fa-brands fa-js"></i>',
		title: 'JavaScript/Jquery',
		doc: `
				- JavaScript의 기본 문법과 ES6 버전의 기능을 숙지하고 있으며, 이를 활용하여 효율적인 코드를 작성할 수 있습니다.<br><br>
				- fetch메서드와 async/await문법을 사용하여 비동기 작업을 처리할 수 있습니다.<br><br>
				- DOM조작과 이벤트 처리를 통한 동적인 웹 페이지를 구현할 수 있습니다.<br><br>
				- JavaScript 프레임워크 및 라이브러리를 활용하여 웹 애플리케이션의 기능을 확장하고, 사용자와의 상호작용을 더욱 풍부하게 할 수 있습니다.<br><br>
				`
	},
	{
		icon: '<i class="fa-brands fa-vuejs"></i>',
		title: 'Vue.js',
		doc: `
				- Vue.js를 사용하여 SPA를 개발할 수 있습니다.<br><br>
				- 컴포넌트 기반 아키텍처를 통해 재사용 가능한 UI 요소를 만들고, 이를 통해 코드의 유지보수성을 향상시킬 수 있습니다.<br><br>
				- Vue.js의 다양한 기능과 생산성 높은 개발 환경을 활용하여 효율적으로 웹 애플리케이션을 구축할 수 있습니다.<br><br>
				- Vue Router를 활용하여 클라이언트 사이드 라우팅을 구현하여 사용자 경험을 더욱 향상시킬 수 있습니다.<br><br>
				- Vuex의 중앙 집중식 저장소를 활용하여 상태를 더욱 체계적으로 관리할 수 있습니다.<br><br>
				- Fetch메서드를 활용하여 API와의 원활한 통신을 구현할 수 있으며 서버와의 데이터 교환을 효율적으로 처리할 수 있습니다.
				`
	},
	{
		icon: '<i class="fa-brands fa-react">',
		title: 'React.js',
		doc: `
					- React.js의 각종 Hook을 활용하여 SPA를 개발할 수 있습니다.<br><br>
					- 컴포넌트 기반 아키텍처를 통해 재사용 가능한 UI 요소를 만들고, 이를 통해 코드의 유지보수성을 향상시킬 수 있습니다.<br><br>
					- React Router를 활용하여 클라이언트 사이드 라우팅을 구현하여 사용자 경험을 더욱 향상시킬 수 있습니다.<br><br>
					- Context API를 활용하여 애플리케이션의 상태 관리를 효율적으로 수행할 수 있습니다.<br><br>
					- Fetch메서드를 활용하여 API와의 원활한 통신을 구현할 수 있으며 서버와의 데이터 교환을 효율적으로 처리할 수 있습니다.<br><br>
					`
	},
	{
		icon: '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" fill="#fff" stroke="#fff" width="calc(100% - 1rem)" height="100%" baseProfile="basic"><polygon fill="none" points="26.055,24.519 18.71,37 33.401,37"/><path fill="none" d="M14.279,36.641l9.455-16.065l-4.653-7.907L4.762,37h9.366C14.178,36.88,14.212,36.756,14.279,36.641	C14.279,36.642,14.279,36.642,14.279,36.641z"/><path fill="#fff" d="M14.262,39.569c-0.453-0.792-0.481-1.74-0.134-2.569H4.762l14.319-24.331l4.653,7.907l2.321-3.943	l-4.358-7.404c-0.551-0.937-1.528-1.496-2.615-1.497c0,0,0,0-0.001,0c-1.086,0-2.064,0.559-2.616,1.496L0.458,36.425	c-0.551,0.936-0.559,2.103-0.02,3.046S1.988,41,3.074,41h13.438C15.58,40.908,14.732,40.392,14.262,39.569z M2.182,37.44h0.01H2.182	z"/><path fill="#fff" d="M47.65,36.641L33.478,12.562c-0.53-0.9-1.469-1.437-2.513-1.437c-1.044,0-1.984,0.537-2.514,1.437	l-2.396,4.071l2.321,3.943l2.589-4.398L43,37h-5c0.258,0.802,0.151,1.724-0.276,2.471C37.185,40.414,36.086,41,35,41l0,0	c0.001,0.013-0.001-0.013,0,0h10c1.043,0,2.149-0.525,2.667-1.431C48.186,38.664,48.179,37.542,47.65,36.641z"/><path fill="#fff" d="M38,37c-0.068-0.21-0.182-0.381-0.296-0.575l-9.328-15.849l-2.321-3.943l-2.321,3.943l-9.455,16.065	c0,0,0,0.001,0,0.001c-0.067,0.113-0.101,0.238-0.151,0.358c-0.347,0.829-0.32,1.778,0.134,2.569c0.47,0.822,1.318,1.338,2.25,1.431	h18.576c1.086,0,2.096-0.586,2.635-1.529C38.151,38.724,38.258,37.802,38,37z M26.055,24.519L33.401,37H18.71L26.055,24.519z"/></svg>',
		title: 'Nuxt.js',
		doc: `
					- Nuxt.js는 Vue.js를 기반으로 한 프레임워크로써 Vue.js의 기능을 활용하고 Nuxt.js의 디렉토리 구조를 활용하여 SPA를 쉽게 구현할 수 있습니다.<br><br>
					- 모듈 기반 아키텍처를 통해 재사용 가능한 코드를 작성하고, 이를 통해 개발 속도와 유지보수성을 향상시킬 수 있습니다.<br><br>
					- Nuxt.js와 Axios를 사용하여 API와의 통신을 쉽게 구현하고, 데이터를 효율적으로 관리할 수 있습니다.<br><br>
					- 자동 코드 분할과 최적화된 빌드 설정을 통해 성능을 최적화하고 사용자 경험을 향상시킬 수 있습니다.<br><br>
					`
	},
	{
		icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff" width="calc(100% - 1rem)" height="100%" viewBox="0 0 50 50"><path d="M 5 4 A 1.0001 1.0001 0 0 0 4 5 L 4 45 A 1.0001 1.0001 0 0 0 5 46 L 45 46 A 1.0001 1.0001 0 0 0 46 45 L 46 5 A 1.0001 1.0001 0 0 0 45 4 L 5 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 15 23 L 15 26.445312 L 20 26.445312 L 20 42 L 24 42 L 24 26.445312 L 29 26.445312 L 29 23 L 15 23 z M 36.691406 23.009766 C 33.576782 22.997369 30.017578 23.941219 30.017578 28.324219 C 30.017578 34.054219 37.738281 34.055625 37.738281 36.640625 C 37.738281 36.885625 37.842187 38.666016 35.117188 38.666016 C 32.392187 38.666016 30.121094 36.953125 30.121094 36.953125 L 30.121094 41.111328 C 30.121094 41.111328 42.001953 44.954062 42.001953 36.289062 C 42.000953 30.664063 34.208984 30.945391 34.208984 28.150391 C 34.208984 27.067391 34.978375 26.054687 37.109375 26.054688 C 39.240375 26.054688 41.126953 27.3125 41.126953 27.3125 L 41.267578 23.607422 C 41.267578 23.607422 39.113892 23.019408 36.691406 23.009766 z"/></svg>`,
		title: 'typescript.js',
		doc: `
					- TypeScript의 정적 타입 시스템을 사용하여 코드의 안전성과 가독성을 높일 수 있습니다.<br><br>
					- TypeScript와 Vue.js 또는 Nuxt.js를 함께 사용하여 더 견고하고 유지보수하기 쉬운 애플리케이션을 개발할 수 있습니다.<br><br>
					- TypeScript의 모듈 시스템을 통해 코드를 모듈화하고, 명확한 의존성 관리를 통해 프로젝트의 스케일링을 용이하게 할 수 있습니다.<br><br>
					- TypeScript의 제네릭과 유틸리티 타입을 활용하여 복잡한 데이터 구조를 다루고, 재사용 가능한 타입 정의를 작성할 수 있습니다.<br><br>
					`
	},
];

const showModal = ref(false);

const modalData = ref({
	title: '',
	doc: ''
})

const openModal = (title, doc) => {
	modalData.value.title = title;
	modalData.value.doc = doc;
	showModal.value = true;
}

const closeModal = () => {
	showModal.value = false;
}

onMounted(() => {
    ScrollOut({
        threshold: 0.2,
        onShown: function (el) {
            const idx = el.getAttribute('data-index');
            el.style.transitionDelay = `${idx * 0.15}s`;
        },
        onHidden: function (el) {
            el.style.transitionDelay = `0s`;
        }
    });

    new TypeIt("#skill-text-animation-target", {
        speed: 85,
        waitUntilVisible: true,
        loop: true,
    })
    .type("my skills", { delay: 400 })
    .delete(20)
    .type("사용할 수 있는 기술들..", { delay: 500 })
    .go();
});


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

.skill[data-scroll] {
	opacity: 0;
	will-change: transform, scale, opacity;
	transform: translateX(6rem) scale(0.85);
	transition: all 1.5s cubic-bezier(.165, .84, .44, 1);
}

.skill[data-scroll='in'] {
	opacity: 1;
	transform: translateX(0) scale(1);
}

.skill[data-scroll='out'] {
	opacity: 0;
}

#skill_section {
	@include container();

	.skill_container {

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

		.skill_wrap {

			.skill_box {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				cursor: pointer;

				@media (max-width: 600px) {
					justify-content: space-between;
				}

				li {
					width: 45%;
					display: flex;
					align-items: center;
					text-transform: uppercase;
					margin: .5rem 0;

					.icon {
						background: $main-color;
						border-radius: 100%;
						height: 2.5rem;
						font-size: 20px;
						line-height: 40px;
						display: inline-block;
						width: 2.5rem;
						text-align: center;
						margin-right: 1rem;
						color: #fff;

						@media (max-width:1200px) {
							font-size: 4rem;
							line-height: 0px;
						}
					}
				}
			}
		}
	}
}
</style>