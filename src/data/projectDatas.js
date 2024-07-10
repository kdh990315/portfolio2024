export const projectDatas = [
	{
		id: 'p1',
		intro: {
			link: 'https://fishing-reservation-54646.web.app/',
			github: 'https://github.com/kdh990315/fishing-reservation',
			img: '/images/fishing.png',
			title: '낙시고 - 낚시 예약 사이트',
			language: 'Vue.js, Vuex',
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
		},
		postscript: `
		<p>vue.js를 활용하여 프로젝트를 진행하면서 많은 것을 배울 수 있었습니다.
		<BR><BR>
		우선, veux를 도입하여 프로젝트의 복잡성을 줄이고, 상태를 중앙에서 관리하는 밥법을 배웠습니다. 이를 통해서 컴포넌트 간 데이터 공유와 상태의 일관성을 유지하는 것이 얼마나 중요한지 알게 되었습니다.
		<BR><BR>
		vue router을 이용하여 여러 페이지를 구현하면서, SPA에서의 라우팅 처리와 사용자 경험을 향상시키는 방법을 배웠습니다. 동적 라우팅을 톧하여 페이지 간의 원활한 전환을 제공하고, 사용자 경험을 향상시키는데 집중했습니다.
		<BR><BR>
		카카오 지도 API를 사용하여 외부 API를 사용하는 방법과 이를 통해서 사용자에게 유용한 정보를 제공하는 방법을 익혔습니다. 지도를 통해 사용자가 좀 더 위치를 쉽게 파악할 수 있는 기능을 구현하면서 이런 사소한 부분 하나가 사용자 경험을 높힐 수 있다는 점을 배웠습니다.
		<BR><BR>
		선박의 필터링과 검색기능을 구현하면서 사용자의 입력을 기반으로 데이터를 필터링하고 표시하는 방벙을 익하는 좋은 기회가 되었습니다. 이를 통해서 많은 데이터에서도 필요한 데이터를 추출하거나 표시할 수 있는 자신감이 생겼습니다.
		<BR><BR>
		선박의 등록 및 삭제 기능을 구현하면서 CRUD를 어떻게 효율적으로 처리할 수 있을지에 대해 깊히 생각해볼 수 있었습니다. 
		<BR><BR>
		이번 프로젝트를 통해 VUE.JS의 강력한 기능들을 직접 체험하며, 
		웹 애플리케이션 개발에 대한 자신감을 얻을 수 있었습니다. 
		특히, 중앙 처리식 상태관리에 큰 매력을 느꼈고 컴포넌트 기반 구조와 라우팅 등의 경험은 더 나은 사용자 경험을 제공하고 더 좋은 코드를 짤 수 있는 개발자가 될 수 있도록 해주는 좋은 경험이였습니다. 요즘 VUE3에서 자주 사용되는 PINIA와 NUXT를 활용하여 새로운 프로젝트를 만드는 것이 목표입니다.
		</p>
		`
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
		},
		postscript: `
		<p>먼저, 포켓몬API를 통해 데이터를 받아오는 과정에서 Promise.all을 사용하여 여러 개의 API 요청을 병렬로 처리할 수 있었습니다. 이를 통해 데이터 로딩 시간을 단축하고 사용자에게 더 빠르고 원활한 경험을 제공할 수 있었습니다. API 요청이 성공적으로 완료될 때까지 모든 데이터를 기다리는 방법을 학습하면서 비동기 처리의 중요성과 효율성을 깊이 이해할 수 있었습니다.
		<br><br>
		동적 파라미터를 활용하여 포켓몬 자세히 보기 기능을 구현한 것은 매우 흥미로운 경험이었습니다. 각 포켓몬의 고유한 ID를 기반으로 동적 라우팅을 설정하고, 이를 통해 특정 포켓몬의 상세 정보를 사용자에게 제공할 수 있었습니다. 이를 통해 URL 구조와 동적 데이터 처리를 효과적으로 관리하는 방법을 배울 수 있었습니다.
		<br><br>
		포켓몬 검색 기능을 구현하면서 사용자 편의를 위해 검색어를 기반으로 실시간으로 필터링하는 기능을 추가했습니다. 이를 통해 검색 기능의 중요성과 이를 최적화하는 방법을 학습하였습니다.
		<br><br>
		useContext를 활용하여 다크모드를 활성화하는 기능을 구현했습니다. 전역 상태 관리를 통해 다크모드 설정을 쉽게 제어할 수 있었으며, 이는 사용자 맞춤형 환경을 제공하는 데 중요한 역할을 했습니다. Context API를 활용한 상태 관리의 장점과 이를 통해 전체 애플리케이션에서 일관성 있는 테마를 유지하는 방법을 배울 수 있었습니다.
		<br><br>
		이번 프로젝트를 통해 REACT.JS의 다양한 기능들을 학습하면서 
		다양한 프론트앤드 기술을 학습하는데 있어서 자신감을 얻을 수 있었습니다. 
		특히, VUE.JS와 다른 REACT.JS만의 동적 라우팅, 전역 상태 관리, 컴포넌트 등의 경험은 다른 JS기반의 프레임워크을 학습할 때 더욱 어려움 없이 다가설 수 있을 거라고 생각합니다. 이번 프로젝트에서 활용하지 못한 REDUX나 REACT-ROUTER-DOM의 ACTIONS와 같은 더욱 많은 기능을 사용한 REACT.JS 프로젝트를 개발하여 더욱 많은 REACT.JS의 기능을 습득하는 것이 목표입니다.
		</p>
		`
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
		},
		postscript: `
		<p>밀리의 서재 웹사이트를 클론 코딩하면서 다양한 기능을 구현하는 과정에서 많은 것을 배울 수 있었습니다. 
		이 프로젝트는 단순한 클론 코딩을 넘어서 실제 웹사이트를 제작하는 과정에서 고려해야 할 다양한 기술적 요소들을 직접 구현해보는 경험을 할 수 있었습니다. 
		이런 경험을 바탕으로 자바스크립트를 활용하여 웹사이트의 동적 요소를 구현하는 과정에서 많은 자신감을 얻을 수 있는 프로젝트였습니다.</p>
		`
	},
	{
		id: 'p4',
		intro: {
			link: 'https://todo-list-nuxt-ts.vercel.app/',
			github: 'https://github.com/kdh990315/TodoList-nuxt-ts',
			img: '/images/TodoList.png',
			title: 'TodoList',
			language: 'Nuxt3, Typescript, pinia',
			api: '사용하지 않음',
			responsive: '적용되지 않음',
			outline: `최근 유행하는 Nuxt.js와 Pinia, TypeScript를 활용하여 간단한 TodoList를 제작하였습니다. Nuxt.js와 Typescript, pinia는 공식문서를 참고하여 공부하였습니다.`,
			hashtags: ['vue.js', 'Nuxt.js', 'Typescript', 'pinia를', 'scss', 'html5', 'Nuxt Router', 'fetch', 'async/await', 'axios']
		},
		detail: {
			1: {
				title: '추가하기',
				reviews: [
					{1: 'Axios의 post메서드를 활용하여 firebase의 실시간 데이터 베이스에 새로운 컨텐츠를 추가하였습니다.'},
					{2: '제출하기 전 데이터를 검사하여 공백이 있을 경우 동적 클래스를 활용하여 공백이 있는 요소를 나타내주었습니다.'},
				],
				video: '/video/TodoList/addTodo.mp4',
			},
			2: {
				title: '달성여부 바꾸기',
				reviews: [
					{1: 'Axios의 patch()메서드를 활용하여 data의 state를 업데이트할 수 있게 구현했습니다.'},
					{2: 'pinia에서 제공하는 반응성의 특징 활용하여 각 state에 맞는 TodoData를 가져오 수 있게 하였습니다.'},
				],
				video: '/video/TodoList/changeStatus.mp4',
			},
			3: {
				title: '삭제하기',
				reviews: [
					{1: 'Axios의 delete()메서드를 활용하여 해당 data의 id를 확인하고 firebase의 실시간 데이터 베이스에서 data를 삭제하였습니다.'},
					{2: 'confirm()메서드를 확인하여 사용자가 실수로 삭제버튼을 눌러도 바로 삭제되지 않고 한번 더 물어볼 수 있도록 하여 사용자 경험을 높혔습니다.'},
				],
				video: '/video/TodoList/deleteTodo.mp4',
			},
			4: {
				title: '로그인/회원가입',
				reviews: [
					{1: 'firebase의 auth기능을 활용하여 구현했습니다.'},
					{2: 'firebase 서버에서 받은 token과 userid를 localstorage에 저장하여 사용자가 페이지를 떠나도 유지될 수 있도록 구현하였습니다.'},
					{3: '사용자가 로그인을 한 시점부터 일정 시간이 지나면 자동으로 로그아웃이 되도록 구현하였습니다.'},
					{4: '로그인 컴포넌트와 회원가입 컴포넌트를 따로 구분하지 않고 한 컴포넌트로 구현하여 중복을 피할 수 있었으며 사용자 경험을 위한 동적 애니메이션을 적용하였습니다.'},
				],
				video: '/video/TodoList/login.mp4',
			},
			5: {
				title: 'Nuxt.js의 중첩 라우팅',
				reviews: [
					{1: '중첩 라우팅을 활용하여 페이지 위에 다른 페이지를 띄워 표시할 수 있도록 구현했습니다.'},
					{2: '부모 컴포넌트의 폴더 이름과 하위 컴포넌트의 폴더 이름을 일치시킨 후 부모 컴포넌트의 NuxtPage태그를 작성하여 구현하였습니다.'},
				],
				video: '/video/TodoList/route.mp4',
			},
		},
		postscript: `<p>
			- Vue.js개발자들 사이에서 최근 유행하는 Nuxt.js와 Pinia, TypeScript를 활용하여 TodoList를 제작해보았습니다. <br><br>
			- Nuxt.js를 활용하여 프로젝트를 제작하며 가장 크게 느껴졌던 장점 중 하나는 프로젝트 구조화가 매우 편리하게 되어 있다고 생각했습니다. 파일 기반의 라우팅 시스템으로 따로 라우트를 설정할 필요가 없어 라우트 설정의 복잡성을 줄일 수 있었습니다. <br><br>
			- Nuxt.js는 디렉토리의 구조를 명확하게 제공하여 프로젝트의 파일을 일관성을 유지할 수 있다는 것도 큰 장점중에 하나였습니다. 만약, 팀원들과의 협업을 했을 때, 빠르게 이해하고 작업을 시작할 수 있을 거 같았습니다. <br><br><br>

			- TypeScript를 처음 사용해보면서 코드의 타입을 명확하게 정의할 수 있었으며, 개발 중에 발생할 수 있는 타입 관련 오류들을 사전에 방지할 수 있었습니다. <br><br>
			- TypeScript의 타입 정의를 통해서 코드의 가독성이 높아진 것을 느낄 수 있었습니다. <br><br><br>

			- Pinia를 사용하면서 Vue3와 매우 친화적이였고 Vuex보다 간단하고 직관적이어서 빠르게 상태관리를 시작할 수 있었습니다.<br><br>
			- Pinia는 TypeScript를 기반으로 설계되었기 때문에 타입의 안정성도 뛰어나다고 생각합니다. <br><br>
			- Vuex를 사용하다보면 반응성을 가지기 위해 코드를 추가하는 경우가 있었는데 Pinia를 사용하면서 자동으로 Vue3의 반응성을 가지는 것도 매우 편리하였습니다. <br><br>
			- Pinia를 사용하면서 DevTools와의 통합이 Vuex보다 간결하고 쉬웠습니다.<br><br><br>

			- fetch()메서드를 활용하여 비동기 작업을 처리할 떄 수동으로 json데이터를 파싱해야했지만, Axios를 함으로 자동으로 json데이터를 파싱해주어 코드를 간결하고 가독성이 좋게 사용할 수 있었습니다. <br><br>


			- 실무에서 많이 사용된다는 scss의 변수, mixin, 계층화된 변수 설정을 사용하였습니다. 그로 인해서 프로젝트의 css를 한층 더 일관성 있게 유지할 수 있었으며 유지보수 또한 수월하게 진행할 수 있게 되었습니다.<br><br><br>

			- 위와 같은 언어들을 학습하면서 요즘 트렌드에 맞는 언어들은 반응성, 간결함, 유지보수성을 중시한다는 것을 느꼈습니다. 개발 트렌드에 도태되지 않기 위해서 공식문서를 참고하여 새로운 기능들을 학습해야겠다고 생각했습니다.
		</p>`
	},
]