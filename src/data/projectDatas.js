export const projectDatas = [
	{
		id: 'p1',
		intro: {
			link: 'https://fishing-reservation-54646.web.app/',
			github: 'https://github.com/kdh990315/fishing-reservation',
			img: '/images/fishing.png',
			title: '낙시고 - 낚시 예약 사이트',
			language: 'Vue.js',
			api: '카카오 지도 api',
			responsive: '적용됨',
			outline: `낙시고는 낚시가 취미인 개발자가 자신의 취미를 웹페이지로 만들고자 시작한 프로젝트입니다. 이 웹 애플리케이션은 낚시를 즐기는 사람들을 위한 커뮤니티 플랫폼으로서, 사용자들은 선박 등록과 예약을 편리하게 관리할 수 있습니다.`,
			hashtags: ['Vue.js', 'Component', 'Composition API', 'Vuex', 'ref', 'computed', 'onMounted', 'vue-router', 'Navigation Guard', 'auth', 'props', 'api', 'watchEffect', 'firebase']
		},
		detail: {
			1: {
				title: '로그인/로그아웃 기능과 네비게이션 가드',
				reviews: [
					{1: 'firebase의 auth기능을 통하여 로그인/로그아웃 기능을 적용시켰습니다.'},
					{2: 'localStorage에 사용자 데이터를 저장하여 자동 로그인이 가능하게 만들었고, 일정 시간이 지나면 자동으로 로그아웃이 되도록 구현하였습니다.'},
					{3: '네비게이션 가드 기능을 활용하여 로그인을 하지 않았을때 특정 컴포넌트에 접근할 수 없게 구현했습니다.'},
				],
				video: '/video/fishing/fishing_login.mp4',
			},
			2: {
				title: '특정 선박 필터링하기',
				reviews: [
					{1: '원하는 데이터만 볼 수 있도록 Filtering기능을 구현했습니다.'},
					{2: 'vuex를 통한 중앙 저장소에서 데이터를 가져와 필터링하도록 구현했습니다.'},
					{3: 'filter, some, includes 메서드를 활용하여 필요한 데이터를 필터링하였습니다.'},
				],
				video: '/video/fishing/fishing_filter.mp4',
			},
			3: {
				title: '특정 선박 검색하기',
				reviews: [
					{1: '원하는 선박을 검색할 수 있게 구현하였습니다.'},
					{2: 'vuex를 통한 중앙 저장소에서 데이터를 가져와 필터링하도록 구현했습니다.'},
					{3: 'filter, includes 메서드를 활용하여 필요한 데이터를 필터링했습니다.'},
				],
				video: '/video/fishing/fishing_filter.mp4',
			},
			4: {
				title: '선박 정보 자세히 보기 및 카카오 지도 api',
				reviews: [
					{1: '특정 선박의 정보를 자세히 볼 수 있도록 구현했습니다.'},
					{2: '사용자가 출항지를 더욱 찾기 쉽게 하기 위해 지도 위에 마커가 표시되도록 구현했습니다.'},
					{3: 'JavaScript의 Date객체를 활용해여 사용자가 과거의 일정을 예약하지 못하도록 하였습니다.'},
					{4: '사용자가 예약을 한다면 총 인원에서 차감된 인원이 표시되도록 하였고, 이미 예약인원이 가득찼다면 예약이 불가능하게 구현했습니다.'},
				],
				video: '/video/fishing/fishing_detail.mp4',
			},
			5: {
				title: '선박 등록 및 삭제 기능',
				reviews: [
					{1: '로그인을 한 사용자는 선박을 등록하고 삭제할 수 있는 기능을 구현했습니다.'},
					{2: 'firebase의 Realtime Database기능을 활용하여 백엔드의 기능을 대신했습니다.'},
					{3: 'http메서드인 PUT,POST,GET,DELETE를 사용하여 데이터를 저장 및 업데이트, 삭제할 수 있도록 했습니다.'},
				],
				video: '/video/fishing/fishing_delete.mp4',
			},
			6: {
				title: 'Slide효과와 탭메뉴',
				reviews: [
					{1: '통상적으로 웹페이지에서 많이 사용되는 기능인 슬라이드 기능과 탭메뉴를 구현했습니다.'},
					{2: 'mainpage의 배너에 slide효과, shipDetail에 탭메뉴 효과를 적용했습니다.'},
				],
				video: '/video/fishing/fishing_slider.mp4',
			},
		}
	},
	{
		id: 'p2',
		intro: {
			link: 'https://pokemon-react-2ab1d.web.app/',
			github: 'https://github.com/kdh990315/pokemon-react',
			img: '/images/pokemon.png',
			title: '포켓몬 도감 사이트',
			language: 'React.js  + vite',
			api: '포켓몬스터 api',
			responsive: '적용됨',
			outline: `포켓몬 도감 프로젝트는 리액트를 공부하면서 학습한 내용을 복습하며 실전 경험을 쌓기 위하여 시작한 프로젝트입니다.
			최대한 많은 react.js의 기능을 접목시키기 위하여 노력하였습니다.
			`,
			hashtags: ['React.js', 'vite', 'Component', 'useState', 'useRef', 'useEffect', 'useContext', 'useParams', 'props', 'lazy', 'CSS Module', 'react-router-dom', 'loader', 'Promise.all', 'fetch']
		},
		detail: {
			1: {
				title: '프로미스를 병렬로 처리하기 위한 Promise.all메서드 활용',
				reviews: [
					{1: '페이지가 처음으로 렌더링 되었을 때 20개의 데이터를 받아올 수 있습니다.'},
					{2: '더보기 버튼을 클릭하면 현재 페이지를 useRef Hook으로 저장하여 다음 포켓몬들의 데이터를 받아올 수 있습니다.'},
					{3: '많은 양의 프로미스를 처리해야하기 때문에 여러 개의 네트워크 요청을 동시에 보냄으로써 응답 시간을 줄일 수 있도록 하였습니다.'},
				],
				video: '/video/pokemon/pokemon_intro.mp4',
			},
			2: {
				title: '동적 파라미터 정보를 활용한 포켓몬 자세히보기',
				reviews: [
					{1: '포켓몬 카드를 클릭하면 해당 포켓몬의 자세한 정보를 확인할 수 있도록 구현하였습니다.'},
					{2: '재사용이 가능한 Modal컴포넌트를 활용하여 구현하였습니다.'},
					{3: '동적 파라미터를 활용하기 위해 useParams Hook을 사용하여 해당 포켓몬의 id를 받아 데이터를 요청하도록 하였습니다.'},
					{4: 'react-router-dom 라이브러리의 loader를 사용하여 컴포넌트가 렌더링 되기 전에 필요한 데이터를 미리 로드하여 필요한 데이터를 갖출 수 있도록 하였습니다.'},
				],
				video: '/video/pokemon/pokemon_detail.mp4',
			},
			3: {
				title: '포켓몬 검색 기능',
				reviews: [
					{1: '사용자가 포켓몬 이름을 검색창에 검색하였을 때 pokemonDetail.jsx를 재사용하여 나타낼 수 있도록 구현하였습니다.'},
					{2: 'find()메서드를 이용하여 많은 데이터에서 일치하는 포켓몬의 id를 추출할 수 있도록 하였습니다.'},
					{3: '추출한 포켓몬의 id를 useNavigate Hook을 사용하여  pokemonDetail.jsx에서 동적 파라미터 값으로 사용할 수 있도록 하였습니다.'},
					{4: '포켓몬 api에서는 포켓몬의 한글 이름으로 데이터를 받아올 수 없기 때문에 현재까지 출시된 포켓몬의 이름과 id를 json형식으로 제작하여 활용하였습니다.'},
				],
				video: '/video/pokemon/pokemon_search.mp4',
			},
			4: {
				title: 'useContext를 활용한 다크모드 활성화',
				reviews: [
					{1: '화면 우상단 아이콘을 클릭하여 다크모드와 화이트모드를 활성화할 수 있도록 구현하였습니다.'},
					{2: 'useContext Hook을 사용하여 중앙 집중적으로 상태를 관리할 수 있도록 하였습니다.'},
				],
				video: '/video/pokemon/pokemon_darkmode.mp4',
			},
		}
	},
	{
		id: 'p3',
		intro: {
			link: 'https://kdh990315.github.io/millie-project/',
			github: 'https://github.com/kdh990315/millie-project',
			img: '/images/millie.png',
			title: '밀리의 서재',
			language: 'Vanilla JavaScript',
			api: 'KAKAO REST API',
			responsive: '적용됨',
			outline: `통상적으로 웹페이지에서 많이 쓰이는 기능을 구현하기 위해 '밀리의 서재'를 클론코딩했습니다.`,
			hashtags: ['Vanilla JavaScript', 'Kakao Open API', 'SlideAnimation', 'TapMenu', 'scss', 'html5', 'ScrollAnimation', 'addEventListener', 'fetch', 'async/await']
		},
		detail: {
			1: {
				title: 'Scroll Animation',
				reviews: [
					{1: '사용자의 스크롤을 감지하여 특정 조건을 충족하면 애니메이션이 트리거되는 스크롤 애니메이션을 제작하였습니다.'},
					{2: '스크롤 이벤트가 적용되는 요소에는 동일한 class명을 부여하여 forEach()메서드로 각각의 요소를 제어하였습니다.'},
					{3: '사용자가 scroll을 할 때마다 문서의 scrollTop을 계산하여 변수에 실시간으로 담을 수 하였습니다.'},
					{4: '각각의 요소에 offsetTop의 도달할 경우 classList.add와 remove를 활용하여 class명을 추가해주거나 제거해주는 방식으로 구현하였습니다.'},
				],
				video: '/video/millie/millie_scrollAnimation.mp4',
			},
			2: {
				title: 'Slide Animation',
				reviews: [
					{1: '순수 자바스크립트로 TapMenu 안에 여러개의 slide animation을 구현하였습니다.'},
					{2: '자식 요소의 갯수만큼 자동으로 부모 container의 넓이가 자동으로 조정되도록 설계했습니다.'},
					{3: '해당 TapMenu의 slide의 버튼을 누르면 slide의 index를 받아 translateX를 slide의 넓이만큼 이동시켰습니다.'},
					{4: 'HTML과 CSS구조만 같다면 같은 기능을 할 수 있어 유지보수에 있어서 유리하도록 설계했습니다.'},
				],
				video: '/video/millie/millie_slideAnimation.mp4',
			},
			3: {
				title: 'Tap Menu',
				reviews: [
					{1: '순수 자바스크립트로 Tap Menu를 구현하였습니다.'},
					{2: 'forEach()메서드를 활용하여 버튼을 클릭하였을때 다른 버튼들의 active class를 모두 제거하는 함수를 호출한 후 클릭한 버튼에 active class를 추가하도록 구현하였습니다.'},
				],
				video: '/video/millie/millie_tapmenu.mp4',
			},
			4: {
				title: 'Toggle Animation',
				reviews: [
					{1: '보통 QNA에서 많이 쓰이는 Toggle Animaion을 구현했습니다.'},
					{2: 'classList객체인 contain,add, remove메서드를 활용하여 구현할 수 있지만 더욱 간편한 메서드인 toggle메서드를 활용하여 구현하였습니다.'},
				],
				video: '/video/millie/millie_toggle.mp4',
			},
			5: {
				title: 'KAKAO REST API',
				reviews: [
					{1: '비동기 통신을 위해 fetch메서드를 사용하여 도서 목록을 가져왔습니다.'},
					{2: 'createElement메서드를 활용하여 도서의 정보를 담은 DOM요소를 동적으로 생성했습니다.'},
					{3: 'async/await 문법을 사용하여 비동기 통신을 좀 더 직관적이고 간결하게 작성하였습니다.'},
				],
				video: '/video/millie/millie_fetch.mp4',
			},
		}
	},
]