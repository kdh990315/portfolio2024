<template>
	<section id="skill_section" class="container">
		<div class="skill_container">
			<div class="container_title">
				<h2>my skills</h2>
				<span>나의 기술 스택</span>
			</div>
			<div class="skill_wrap">
				<ul class="skill_box">
					<li v-for="data in skillData" @click="openModal(data.title, data.doc)">
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

<script>
import { ref } from 'vue';


export default {
	setup() {
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
			console.log(modalData.value);
		}

		const closeModal = () => {
			showModal.value = false;
		}
		return {
			skillData,
			showModal,
			openModal,
			closeModal,
			modalData
		}
	}
}
</script>

<style scoped lang="scss">
@import '../scss/mixin.scss';

#skill_section {
	width: 100%;
	height: 100%;
	border-top: solid 6px #f4f4f4;

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