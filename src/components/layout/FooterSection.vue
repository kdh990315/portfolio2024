<template>
	<section id="footer_section">
		<footer>
			<nav>
				<ul>
					<li>Name: Kim Dong Hyeon</li>
					<li>Phone: 010-5509-3095</li>
					<li>Home: 경기도 시흥시 장곡동</li>
				</ul>
			</nav>
		</footer>
	</section>
</template>

<script>
</script>

<style scoped lang="scss">

#footer_section {
	width: 100%;
	padding: 0 0 0 500px;

	@media (max-width: 1500px) {
		padding: 0 0 0 400px;
	}

	@media (max-width: 1200px) {
		padding: 0;
	}

	footer {
		width: 100%;
		height: 15rem;
		background-color: rgb(247 247 247);
		
		nav {
			width: 50%;
			padding: 7rem 0 5rem 0;
			margin: 0 auto;

			ul {
				display: flex;
				flex-direction: row;
				justify-content: space-around;

				li {
					color: #cbcbcb;
					font-size: .8rem
				}
			}

			@media (max-width: 1000px) {
				width: 80%;
			}
		}
	}
}
</style>