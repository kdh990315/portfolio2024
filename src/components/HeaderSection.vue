<template>
	<header :class="{ active: mobilHeaderBtn }">
		<div class="logo_container">
			<div class="logo"></div>
		</div>
		<nav>
			<a v-for="(navData, idx) in navDatas" :href="navData.url" :class="{ active: idx === navActive - 1 }"
				@click="handleNav">{{ navData.title }}</a>
		</nav>
	</header>
	<div class="mobil_show_btn" @click="mobilHeaderVisible">
		<span :class="{ active: mobilHeaderBtn }"></span>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
	setup() {
		const mobilHeaderBtn = ref(false);

		const mobilHeaderVisible = () => {
			mobilHeaderBtn.value = !mobilHeaderBtn.value;
		}

		const navDatas = [
			{ title: 'Intro', url: '#intro_section' },
			{ title: 'Skill', url: '#skill_section' },
			{ title: 'Project', url: '#project_section' },
			{ title: 'Script', url: '#script_section' },
			{ title: 'AboutMe', url: '#aboutme_section' },
		]

		const handleNav = (ev) => {
			ev.preventDefault();
			const targetId = ev.target.getAttribute('href');
			const targetElement = document.querySelector(targetId);
			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop,
					behavior: 'smooth'
				});
			}
			mobilHeaderBtn.value = false;
		}

		const containerScrollPos = [];

		const navActive = ref(1);

		onMounted(() => {
			const IntroSection = document.querySelectorAll('.container');

			IntroSection.forEach((section) => {
				containerScrollPos.push(section.getBoundingClientRect().top + window.scrollY)
			})

			document.addEventListener('scroll', () => {
				const scorllPos = window.scrollY;
				const containerIdx = containerScrollPos.findIndex(pos => scorllPos < pos - 50);

				if (containerIdx === -1) {
					navActive.value = IntroSection.length
				} else {
					navActive.value = containerIdx;
				};
			})
		})

		return {
			mobilHeaderVisible,
			mobilHeaderBtn,
			handleNav,
			navDatas,
			navActive
		}
	}
}
</script>

<style scoped lang="scss">
@import '../scss/mixin.scss';

header {
	width: 500px;
	height: 100vh;
	background-color: $main-color;
	position: fixed;
	z-index: 100000;
	top: 0;
	transition: all 0.7s;

	@media (max-width: 1500px) {
		width: 400px;
	}

	@media (max-width: 1200px) {
		width: 300px;
		top: 0;
		right: -500px;

		&.active {
			right: 0;
		}
	}

	.logo_container {
		width: 100%;

		.logo {
			width: 270px;
			height: 270px;
			border-radius: 50%;
			background-color: #fff;
			margin: 100px auto 0;
			background-image: url(/images/logo.png);
			background-position: center;
			background-size: 330px;
			background-repeat: no-repeat;

			&:hover {
				background-image: url('/images/hover_logo.png');

			}

			@media (max-width: 768px) {
				width: 200px;
				height: 200px;
				background-size: 235px;
			}
		}
	}

	nav {
		width: 100%;
		margin-top: 30px;
		text-align: center;

		a {
			display: block;
			font-size: 2rem;
			line-height: 7rem;
			color: #fff;

			@media (max-width: 1500px) {
				line-height: 6rem;
			}

			&::after {
				content: "";
				position: relative;
				left: 35%;
				bottom: 1.5rem;
				width: 0%;
				height: 2px;
				background-color: $main-color;
				display: block;
			}

			&.active {
				background-color: #fff;
				color: $main-color;

				&::after {
					width: 30%;
    			transition: 0.5s all;
				}
			}
		}
	}
}

.mobil_show_btn {
	width: 60px;
	height: 60px;
	position: fixed;
	background-color: $main-color;
	top: 0;
	right: 0;
	z-index: 3000000;
	display: none;
	cursor: pointer;

	@media (max-width: 1200px) {
		display: block;
	}

	span {
		display: block;
		width: 40px;
		height: 2px;
		background-color: #fff;
		margin-top: 20px;
		position: absolute;
		top: 15%;
		left: 50%;
		transform: translatex(-50%);

		&::after {
			content: "";
			width: 40px;
			height: 2px;
			background-color: #fff;
			position: absolute;
			bottom: 10px;
			right: 0;
			transition: width .3s;
		}

		&::before {
			content: "";
			width: 40px;
			height: 2px;
			background-color: #fff;
			position: absolute;
			top: 10px;
			left: 0;
			transition: width .3s;
		}

		&.active {
			&::after {
				content: "";
				width: 20px;
				height: 2px;
			}

			&::before {
				content: "";
				width: 20px;
			}
		}
	}
}
</style>