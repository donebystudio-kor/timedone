export interface TimelineEvent {
  year: string;
  label: string;
  highlight?: boolean;
}

export interface Post {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string;
  timeline: TimelineEvent[];
  relatedSlugs: string[];
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  { id: "people", name: "역사인물", emoji: "👑", description: "같은 시대를 산 뜻밖의 인물들" },
  { id: "korea-world", name: "한국사×세계사", emoji: "🌏", description: "한국과 세계, 같은 시간 다른 세상" },
  { id: "dinosaur", name: "공룡/자연사", emoji: "🦕", description: "상상을 초월하는 지구의 시간" },
  { id: "invention", name: "발명품×역사", emoji: "⚙️", description: "발명품으로 보는 역사의 속도" },
  { id: "space", name: "우주/지구", emoji: "🌌", description: "우주적 스케일의 시간 감각" },
];

export const POSTS: Post[] = [
  {
    slug: "cleopatra-pyramid",
    title: "클레오파트라가 살아있을 때, 피라미드는 이미 2500년 된 유물이었다",
    category: "people",
    date: "2026-03-14",
    summary: "기자 대피라미드 건설: 기원전 2560년. 클레오파트라 출생: 기원전 69년. 피라미드는 이미 2500년 된 유물이었다.",
    tags: ["클레오파트라", "피라미드", "이집트", "시간감각"],
    relatedSlugs: ["daedongyeojido-subway", "trex-stegosaurus"],
    timeline: [
      { year: "기원전 2560년", label: "기자 대피라미드 건설", highlight: true },
      { year: "기원전 1500년", label: "투탕카멘 시대" },
      { year: "기원전 69년", label: "클레오파트라 7세 탄생", highlight: true },
      { year: "기원전 30년", label: "클레오파트라 사망" },
      { year: "2026년", label: "지금 우리가 사는 시대" },
    ],
    content: `<p>기자 대피라미드 건설: 기원전 2560년경.</p>
<p>클레오파트라 출생: 기원전 69년.</p>
<p><strong>피라미드는 이미 2500년 된 유물이었다.</strong></p>
<p>피라미드 → 클레오파트라: 약 2,500년.</p>
<p>클레오파트라 → 지금: 약 2,050년.</p>`,
  },
  {
    slug: "daedongyeojido-subway",
    title: "대동여지도가 만들어질 때 영국은 지하철을 타고 있었다",
    category: "korea-world",
    date: "2026-03-13",
    summary: "대동여지도 완성: 1861년. 런던 지하철 개통: 1863년. 2년 차이.",
    tags: ["대동여지도", "김정호", "런던지하철", "조선", "빅토리아시대"],
    relatedSlugs: ["cleopatra-pyramid", "trex-stegosaurus"],
    timeline: [
      { year: "1834년", label: "김정호, 청구도 제작" },
      { year: "1861년", label: "대동여지도 완성", highlight: true },
      { year: "1863년", label: "런던 지하철 개통", highlight: true },
      { year: "1876년", label: "조선, 강화도 조약 (개항)" },
      { year: "1899년", label: "서울에 전차 개통" },
    ],
    content: `<p>1861년. 김정호가 대동여지도를 완성했다. 기존 관찬 지도들을 종합해서 22첩짜리 목판 인쇄 지도로 만든 거다.</p>
<p>2년 뒤인 1863년. 런던에서 세계 최초의 지하철이 개통됐다. 개통 첫날 3만 8천 명이 탔다.</p>
<p>조선 개항: 1876년. 서울 전차 개통: 1899년. 런던 지하철 개통으로부터 36년 뒤다.</p>`,
  },
  {
    slug: "trex-stegosaurus",
    title: "티라노사우루스는 스테고사우루스보다 인간에 더 가깝다",
    category: "dinosaur",
    date: "2026-03-12",
    summary: "스테고사우루스 → 티라노사우루스: 8700만 년. 티라노사우루스 → 인간: 6800만 년.",
    tags: ["티라노사우루스", "스테고사우루스", "공룡", "중생대"],
    relatedSlugs: ["cleopatra-pyramid", "daedongyeojido-subway"],
    timeline: [
      { year: "1억 5500만 년 전", label: "스테고사우루스 시대 (쥐라기)", highlight: true },
      { year: "6800만 년 전", label: "티라노사우루스 시대 (백악기)", highlight: true },
      { year: "6600만 년 전", label: "소행성 충돌, 공룡 멸종" },
      { year: "30만 년 전", label: "호모 사피엔스 등장" },
      { year: "현재", label: "지금" },
    ],
    content: `<p>스테고사우루스: 약 1억 5500만 년 전. 쥐라기.</p>
<p>티라노사우루스: 약 6800만 년 전. 백악기.</p>
<p>둘 사이 간격: <strong>8700만 년.</strong></p>
<p>티라노사우루스와 인간 사이: <strong>6800만 년.</strong></p>
<p>이 둘은 같은 시대에 살았던 적이 없다.</p>`,
  },
  {
    slug: "mammoth-pyramid",
    title: "매머드는 피라미드보다 오래 살아남았다",
    category: "dinosaur",
    date: "2026-03-11",
    summary: "대피라미드 건설: 기원전 2560년. 랑겔 섬 마지막 매머드 멸종: 기원전 1700년경. 피라미드 이후로도 800년을 더 살았다.",
    tags: ["매머드", "피라미드", "멸종", "랑겔섬", "빙하기"],
    relatedSlugs: ["cleopatra-pyramid", "trex-stegosaurus"],
    timeline: [
      { year: "BC 10,000", label: "대부분의 매머드 멸종" },
      { year: "BC 2560", label: "기자 대피라미드 건설", highlight: true },
      { year: "BC 1700", label: "랑겔 섬 마지막 매머드 멸종", highlight: true },
    ],
    content: `<p>대부분의 매머드는 약 1만 년 전에 사라졌다.</p>
<p>그런데 시베리아 북극해의 랑겔 섬에서는 <strong>기원전 1700년경까지</strong> 살아 있었다. 본토와 단절된 섬에서 수천 년을 더 버텼다.</p>
<p>기자 대피라미드 건설: 기원전 2560년경. 피라미드가 완공되고도 <strong>800년 넘게</strong> 매머드가 살아 있었다.</p>`,
  },
  {
    slug: "oxford-aztec",
    title: "옥스퍼드 대학은 아즈텍 제국보다 오래됐다",
    category: "korea-world",
    date: "2026-03-10",
    summary: "옥스퍼드 강의 시작: 1096년. 아즈텍 수도 건설: 1325년. 229년 차이.",
    tags: ["옥스퍼드", "아즈텍", "대학교", "테노치티틀란", "중세"],
    relatedSlugs: ["daedongyeojido-subway", "cleopatra-pyramid"],
    timeline: [
      { year: "1096년", label: "옥스퍼드 대학 강의 시작", highlight: true },
      { year: "1249년", label: "유니버시티 칼리지 설립" },
      { year: "1325년", label: "아즈텍, 테노치티틀란 건설", highlight: true },
      { year: "1521년", label: "아즈텍 제국 멸망" },
    ],
    content: `<p>옥스퍼드 대학 강의 시작: 1096년.</p>
<p>아즈텍 수도 테노치티틀란 건설: 1325년.</p>
<p><strong>229년 차이.</strong> 옥스퍼드가 먼저다.</p>
<p>아즈텍 제국 멸망: 1521년. 코르테스가 무너뜨렸다. 옥스퍼드는 지금도 운영 중이다.</p>`,
  },
  {
    slug: "hangul-columbus",
    title: "한글 창제와 콜럼버스의 항해, 49년 차이",
    category: "korea-world",
    date: "2026-03-09",
    summary: "훈민정음 창제: 1443년. 콜럼버스 아메리카 도달: 1492년. 49년 차이.",
    tags: ["한글", "훈민정음", "콜럼버스", "세종대왕", "15세기"],
    relatedSlugs: ["daedongyeojido-subway", "cleopatra-pyramid"],
    timeline: [
      { year: "1397년", label: "세종대왕 출생" },
      { year: "1443년", label: "훈민정음 창제", highlight: true },
      { year: "1446년", label: "훈민정음 반포" },
      { year: "1451년", label: "콜럼버스 출생" },
      { year: "1492년", label: "콜럼버스, 아메리카 도달", highlight: true },
    ],
    content: `<p>1443년. 세종대왕이 훈민정음 28자를 완성했다.</p>
<p>콜럼버스 출생: 1451년. 아직 태어나지도 않았을 때다.</p>
<p>훈민정음 창제에서 콜럼버스의 첫 항해까지 <strong>49년.</strong></p>`,
  },
  {
    slug: "yisunsin-shakespeare",
    title: "이순신과 셰익스피어는 동시대 사람이다",
    category: "people",
    date: "2026-03-08",
    summary: "이순신 1545년생. 셰익스피어 1564년생. 19살 차이. 34년간 동시대를 살았다.",
    tags: ["이순신", "셰익스피어", "임진왜란", "동시대인", "16세기"],
    relatedSlugs: ["cleopatra-pyramid", "daedongyeojido-subway"],
    timeline: [
      { year: "1545년", label: "이순신 출생" },
      { year: "1564년", label: "셰익스피어 출생" },
      { year: "1592년", label: "임진왜란 발발 / 셰익스피어 런던 데뷔", highlight: true },
      { year: "1598년", label: "이순신 노량해전 전사", highlight: true },
      { year: "1600년", label: "셰익스피어, 햄릿 집필 시작" },
      { year: "1616년", label: "셰익스피어 사망" },
    ],
    content: `<p>이순신: 1545년생. 셰익스피어: 1564년생. 19살 차이.</p>
<p>1592년. 임진왜란이 터졌다. 이순신이 한산도 대첩을 이끌었다.</p>
<p>같은 해. 셰익스피어가 런던 무대에 처음 섰다. 헨리 6세를 올렸다.</p>
<p>1598년 12월, 이순신 전사. 셰익스피어는 그 뒤 18년을 더 살며 햄릿, 오셀로, 리어왕을 썼다.</p>`,
  },
  {
    slug: "shark-dinosaur",
    title: "상어는 공룡보다 2억 년 먼저 지구에 나타났다",
    category: "dinosaur",
    date: "2026-03-07",
    summary: "상어 조상 출현: 약 4억 5천만 년 전. 공룡 등장: 약 2억 3천만 년 전. 상어가 2억 2천만 년 선배.",
    tags: ["상어", "공룡", "고생대", "대멸종", "오르도비스기", "생존"],
    relatedSlugs: ["trex-stegosaurus", "cleopatra-pyramid"],
    timeline: [
      { year: "4억 5천만 년 전", label: "상어의 조상 출현 (오르도비스기)", highlight: true },
      { year: "3억 5천만 년 전", label: "최초의 나무 등장" },
      { year: "2억 5천만 년 전", label: "페름기 대멸종 (생물 96% 소멸)" },
      { year: "2억 3천만 년 전", label: "최초의 공룡 등장 (트라이아스기)", highlight: true },
      { year: "6600만 년 전", label: "공룡 멸종 (소행성 충돌)" },
      { year: "현재", label: "상어, 여전히 바다에서 생존 중", highlight: true },
    ],
    content: `<p>상어 조상 출현: 약 4억 5천만 년 전. 오르도비스기.</p>
<p>나무 등장: 약 3억 5천만 년 전. <strong>상어가 나무보다 1억 년 먼저다.</strong></p>
<p>공룡 등장: 약 2억 3천만 년 전. 상어는 이미 2억 2천만 년째 바다에 있었다.</p>
<p>상어는 대멸종을 다섯 번 버텼다. 페름기 때 생물종의 96%가 죽었는데도. 지금도 약 500종이 바다에 있다.</p>`,
  },
  {
    slug: "fax-samurai",
    title: "팩스가 발명됐을 때, 일본에는 사무라이가 있었다",
    category: "invention",
    date: "2026-03-06",
    summary: "팩스 원형 기술 특허: 1843년. 전화기 특허: 1876년. 팩스가 전화기보다 33년 먼저다.",
    tags: ["팩스", "사무라이", "에도막부", "알렉산더베인", "발명", "1843년"],
    relatedSlugs: ["daedongyeojido-subway", "cleopatra-pyramid"],
    timeline: [
      { year: "1603년", label: "에도 막부 시작 (사무라이 시대)" },
      { year: "1843년", label: "알렉산더 베인, 팩스 원형 기술 특허 획득", highlight: true },
      { year: "1868년", label: "메이지 유신, 에도 막부 종말", highlight: true },
      { year: "1876년", label: "벨, 전화기 특허 출원" },
      { year: "1964년", label: "제록스, 상업용 팩스기 출시" },
    ],
    content: `<p>1843년. 알렉산더 베인이 팩스 원형 기술 특허를 땄다. 전화기(1876년)보다 <strong>33년 먼저.</strong></p>
<p>같은 해. 일본은 에도 막부 240년째. 사무라이가 칼 두 자루 차고 거리를 걸어다니고 있었다.</p>
<p>에도 막부 종말: 1868년. 팩스 특허로부터 25년 뒤다.</p>`,
  },
  {
    slug: "joseon-blackdeath",
    title: "유럽 인구 1/3이 사라진 직후, 조선이 건국됐다",
    category: "korea-world",
    date: "2026-03-05",
    summary: "흑사병 대유행 종식: 1351년. 조선 건국: 1392년. 40년 차이.",
    tags: ["조선", "흑사병", "이성계", "14세기", "고려", "유럽"],
    relatedSlugs: ["daedongyeojido-subway", "hangul-columbus"],
    timeline: [
      { year: "1347년", label: "흑사병, 시칠리아에 상륙하며 유럽 확산 시작", highlight: true },
      { year: "1351년", label: "흑사병 대유행 종식 (유럽 인구 1/3 사망)" },
      { year: "1388년", label: "이성계, 위화도 회군" },
      { year: "1392년", label: "조선 건국 (태조 이성계 즉위)", highlight: true },
      { year: "1394년", label: "한양 천도" },
      { year: "1400년대", label: "유럽, 흑사병 이전 인구 수준 회복 시작" },
    ],
    content: `<p>1347년. 흑해에서 온 무역선이 시칠리아에 닿았다. 선원 대부분이 이미 죽어 있었다.</p>
<p>4년 만에 유럽 인구의 약 <strong>1/3이 사라졌다.</strong> 2천만~2천5백만 명.</p>
<p>1388년. 이성계가 위화도에서 군대를 돌렸다. 1392년. 조선 건국.</p>
<p>1394년 한양 천도. 유럽 일부 도시들은 아직 흑사병 전 인구를 회복 못 한 시점이다.</p>`,
  },
  {
    slug: "nintendo-ottoman",
    title: "닌텐도가 창업했을 때, 오스만 제국은 아직 건재했다",
    category: "invention",
    date: "2026-03-04",
    summary: "닌텐도 창업: 1889년. 오스만 제국 해체: 1922년. 화투 가게가 제국보다 오래 살아남았다.",
    tags: ["닌텐도", "오스만제국", "화투", "1889년", "게임", "제국"],
    relatedSlugs: ["daedongyeojido-subway", "fax-samurai"],
    timeline: [
      { year: "1299년", label: "오스만 제국 건국" },
      { year: "1889년", label: "닌텐도, 교토에서 화투 제조업으로 창업", highlight: true },
      { year: "1914년", label: "1차 세계대전 발발 (오스만 제국 참전)" },
      { year: "1922년", label: "오스만 제국 해체", highlight: true },
      { year: "1977년", label: "닌텐도, 최초의 가정용 게임기 출시" },
      { year: "1985년", label: "슈퍼 마리오 브라더스 출시", highlight: true },
    ],
    content: `<p>1889년. 야마우치 후사지로가 교토에서 화투 가게를 열었다. 닌텐도 곳파이.</p>
<p>같은 해. 오스만 제국은 590년째 존속 중이었다. 1299년에 세워진 나라다.</p>
<p>오스만 제국은 1922년에 해체됐다. 닌텐도는 아직 있다. 슈퍼 마리오가 나온 건 1985년. 창업 96년 뒤다.</p>`,
  },
  {
    slug: "anne-frank-mlk",
    title: "안네 프랑크와 마틴 루터 킹은 같은 해에 태어났다",
    category: "people",
    date: "2026-03-15",
    summary: "마틴 루터 킹: 1929년 1월생. 안네 프랑크: 1929년 6월생. 5개월 차이.",
    tags: ["안네프랑크", "마틴루터킹", "1929년", "동시대인", "홀로코스트", "인권"],
    relatedSlugs: ["yisunsin-shakespeare", "cleopatra-pyramid"],
    timeline: [
      { year: "1929년 1월", label: "마틴 루터 킹 Jr. 출생 (미국 애틀랜타)", highlight: true },
      { year: "1929년 6월", label: "안네 프랑크 출생 (독일 프랑크푸르트)", highlight: true },
      { year: "1942년", label: "안네 프랑크, 은신 시작 / 일기 집필" },
      { year: "1945년 3월", label: "안네 프랑크, 베르겐벨젠 수용소에서 사망 (15세)" },
      { year: "1963년", label: "마틴 루터 킹, 'I Have a Dream' 연설" },
      { year: "1968년 4월", label: "마틴 루터 킹 암살 (39세)", highlight: true },
    ],
    content: `<p>마틴 루터 킹 Jr.: 1929년 1월 15일생.</p>
<p>안네 프랑크: 1929년 6월 12일생. <strong>5개월 차이.</strong></p>
<p>1945년. 안네 프랑크가 15살에 수용소에서 죽었다. 마틴 루터 킹은 16살이었다.</p>
<p>안네 프랑크의 일기 출판: 1947년.</p>`,
  },
  {
    slug: "guillotine-starwars",
    title: "프랑스 마지막 기요틴 처형과 스타워즈 개봉은 같은 해다",
    category: "invention",
    date: "2026-03-16",
    summary: "스타워즈 개봉: 1977년 5월. 프랑스 마지막 기요틴 처형: 1977년 9월. 같은 해다.",
    tags: ["기요틴", "스타워즈", "1977년", "프랑스", "사형제도"],
    relatedSlugs: ["fax-samurai", "nintendo-ottoman"],
    timeline: [
      { year: "1792년", label: "프랑스, 기요틴을 공식 사형 도구로 채택" },
      { year: "1977년 5월", label: "스타워즈 에피소드 4 개봉", highlight: true },
      { year: "1977년 9월", label: "프랑스 마지막 기요틴 처형 (하미다 잔두비)", highlight: true },
      { year: "1981년", label: "프랑스, 사형제도 폐지" },
    ],
    content: `<p>1977년 5월 25일. 스타워즈 개봉.</p>
<p>1977년 9월 10일. 프랑스 마르세유에서 하미다 잔두비가 기요틴으로 처형됐다. <strong>프랑스 역사상 마지막 기요틴 사용.</strong></p>
<p>기요틴은 1792년부터 쓰였다. 185년 동안 계속 쓰인 거다.</p>
<p>프랑스 사형제도 폐지: 1981년.</p>`,
  },
  {
    slug: "harvard-calculus",
    title: "하버드 대학교는 미적분보다 오래됐다",
    category: "invention",
    date: "2026-03-17",
    summary: "하버드 설립: 1636년. 뉴턴 미적분 연구: 1665년. 하버드가 약 30년 먼저.",
    tags: ["하버드", "미적분", "뉴턴", "1636년", "대학교", "수학"],
    relatedSlugs: ["oxford-aztec", "fax-samurai"],
    timeline: [
      { year: "1096년", label: "옥스퍼드 대학교 강의 시작" },
      { year: "1636년", label: "하버드 대학교 설립", highlight: true },
      { year: "1642년", label: "아이작 뉴턴 출생" },
      { year: "1665년", label: "뉴턴, 미적분 아이디어 개발", highlight: true },
      { year: "1684년", label: "라이프니츠, 미적분 논문 발표" },
      { year: "1687년", label: "뉴턴, 프린키피아 출판" },
    ],
    content: `<p>하버드 설립: 1636년. 뉴턴 미적분 연구 시작: 1665년. <strong>하버드가 약 30년 먼저.</strong></p>
<p>뉴턴 출생: 1642년. 하버드 설립 6년 뒤다.</p>
<p>초기 하버드 커리큘럼은 신학, 라틴어, 고전 철학이었다. 미적분이 세상에 없었으니까.</p>`,
  },
  {
    slug: "gwanggaeto-rome",
    title: "광개토대왕이 영토를 넓힐 때, 로마는 약탈당했다",
    category: "korea-world",
    date: "2026-03-18",
    summary: "광개토대왕 재위: 391~413년. 서고트족 로마 약탈: 410년. 같은 시기다.",
    tags: ["광개토대왕", "로마제국", "고구려", "서고트족", "410년"],
    relatedSlugs: ["joseon-blackdeath", "jikji-gutenberg"],
    timeline: [
      { year: "391년", label: "광개토대왕 즉위 (고구려)", highlight: true },
      { year: "396년", label: "광개토대왕, 백제 공격하여 58성 획득" },
      { year: "410년", label: "서고트족 알라리크, 로마 약탈", highlight: true },
      { year: "413년", label: "광개토대왕 사망" },
      { year: "476년", label: "서로마 제국 멸망" },
    ],
    content: `<p>광개토대왕 재위: 391~413년. 고구려 역사상 가장 넓은 영토를 확보한 시기.</p>
<p>410년. 서고트족의 알라리크가 로마를 약탈했다. 800년 만에 외적에게 털렸다. <strong>광개토대왕이 살아있을 때다.</strong></p>
<p>476년. 서로마 제국 멸망. 광개토대왕 사후 63년 뒤다.</p>`,
  },
  {
    slug: "jikji-gutenberg",
    title: "직지심체요절은 구텐베르크보다 78년 먼저 인쇄됐다",
    category: "korea-world",
    date: "2026-03-19",
    summary: "직지심체요절 인쇄: 1377년. 구텐베르크 성경: 1455년. 78년 차이.",
    tags: ["직지심체요절", "구텐베르크", "금속활자", "고려", "1377년", "인쇄술"],
    relatedSlugs: ["hangul-columbus", "gwanggaeto-rome"],
    timeline: [
      { year: "1377년", label: "직지심체요절, 청주 흥덕사에서 금속활자로 인쇄", highlight: true },
      { year: "1392년", label: "조선 건국" },
      { year: "1455년", label: "구텐베르크 성경 인쇄", highlight: true },
      { year: "2001년", label: "직지, 유네스코 세계기록유산 등재" },
    ],
    content: `<p>직지심체요절 인쇄: <strong>1377년.</strong> 고려 청주 흥덕사. 금속활자.</p>
<p>구텐베르크 성경 인쇄: 1455년. 78년 뒤다.</p>
<p>현존 세계 최고(最古) 금속활자 인쇄본. 유네스코 인정. 지금은 프랑스 국립도서관에 있다.</p>`,
  },
  {
    slug: "flower-dinosaur",
    title: "공룡은 1억 년 동안 꽃을 본 적이 없다",
    category: "dinosaur",
    date: "2026-03-20",
    summary: "공룡 등장: 2억 3천만 년 전. 꽃 등장: 1억 3천만 년 전. 1억 년 간격.",
    tags: ["공룡", "꽃", "속씨식물", "백악기", "스테고사우루스", "티라노사우루스"],
    relatedSlugs: ["trex-stegosaurus", "shark-dinosaur"],
    timeline: [
      { year: "2억 3천만 년 전", label: "최초의 공룡 등장", highlight: true },
      { year: "1억 5천만 년 전", label: "스테고사우루스 생존 시기" },
      { year: "1억 3천만 년 전", label: "최초의 꽃(속씨식물) 등장", highlight: true },
      { year: "6800만 년 전", label: "티라노사우루스 생존 시기" },
      { year: "6600만 년 전", label: "공룡 멸종" },
    ],
    content: `<p>공룡 등장: 약 2억 3천만 년 전. 꽃(속씨식물) 등장: 약 1억 3천만 년 전.</p>
<p><strong>1억 년 동안 꽃이 없었다.</strong></p>
<p>스테고사우루스(1억 5천만 년 전)는 꽃을 본 적이 없다. 양치식물과 침엽수뿐이었다.</p>
<p>티라노사우루스(6800만 년 전)는 꽃이 피는 세상에서 살았다.</p>`,
  },
  {
    slug: "pluto-orbit",
    title: "명왕성은 발견된 뒤 아직 태양을 한 바퀴도 못 돌았다",
    category: "space",
    date: "2026-03-21",
    summary: "명왕성 발견: 1930년. 공전 주기: 248년. 첫 한 바퀴 완료 예정: 2178년경.",
    tags: ["명왕성", "태양계", "공전주기", "클라이드톰보", "우주"],
    relatedSlugs: ["universe-calendar", "sahara-pyramid"],
    timeline: [
      { year: "1930년", label: "클라이드 톰보, 명왕성 발견", highlight: true },
      { year: "2006년", label: "명왕성, 왜소행성으로 재분류" },
      { year: "2015년", label: "뉴호라이즌스 탐사선, 명왕성 근접 촬영" },
      { year: "2178년경", label: "명왕성, 발견 이후 첫 공전 완료 예정", highlight: true },
    ],
    content: `<p>명왕성 공전 주기: 약 248년.</p>
<p>발견: 1930년. 첫 한 바퀴 완료: <strong>2178년경.</strong></p>
<p>2026년 현재 궤도의 약 39%를 돌았다. 반도 안 왔다.</p>`,
  },
  {
    slug: "universe-calendar",
    title: "우주 역사를 1년으로 압축하면, 인류는 12월 31일 밤 11시 52분에 등장한다",
    category: "space",
    date: "2026-03-22",
    summary: "138억 년을 1년으로 압축. 지구 탄생: 9월. 공룡 멸종: 12월 25일. 인류: 12월 31일 23시 52분.",
    tags: ["우주달력", "빅뱅", "칼세이건", "인류역사", "우주나이"],
    relatedSlugs: ["pluto-orbit", "shark-dinosaur"],
    timeline: [
      { year: "1월 1일", label: "빅뱅 (138억 년 전)", highlight: true },
      { year: "9월 1일경", label: "지구 탄생 (45억 년 전)" },
      { year: "12월 25일", label: "공룡 멸종 (6600만 년 전)" },
      { year: "12월 31일 23:52", label: "호모 사피엔스 등장 (30만 년 전)", highlight: true },
      { year: "12월 31일 23:59:46", label: "기록된 인류 역사 시작 (5000년 전)", highlight: true },
    ],
    content: `<p>칼 세이건의 우주 달력. 138억 년을 1년으로 압축한 거다.</p>
<p>빅뱅: 1월 1일. 지구: 9월 1일쯤. 공룡 멸종: 12월 25일.</p>
<p><strong>호모 사피엔스: 12월 31일 밤 11시 52분.</strong></p>`,
  },
  {
    slug: "swiss-vote-moonlanding",
    title: "스위스 여성 참정권은 달 착륙보다 늦다",
    category: "korea-world",
    date: "2026-03-23",
    summary: "달 착륙: 1969년 7월. 스위스 여성 참정권: 1971년 2월. 달이 먼저다.",
    tags: ["스위스", "여성참정권", "달착륙", "1971년", "아폴로11호"],
    relatedSlugs: ["guillotine-starwars", "jikji-gutenberg"],
    timeline: [
      { year: "1893년", label: "뉴질랜드, 세계 최초 여성 참정권 부여" },
      { year: "1948년", label: "대한민국, 여성 참정권 (제헌 헌법)" },
      { year: "1969년 7월", label: "아폴로 11호, 달 착륙", highlight: true },
      { year: "1971년 2월", label: "스위스, 연방 차원 여성 참정권 부여", highlight: true },
      { year: "1991년", label: "스위스 아펜첼 이너로덴 주, 주 차원 여성 참정권 (연방법원 명령)" },
    ],
    content: `<p>달 착륙: 1969년 7월 20일.</p>
<p>스위스 여성 연방 투표권: <strong>1971년 2월 7일.</strong></p>
<p>달에 먼저 갔다.</p>`,
  },
  {
    slug: "sahara-pyramid",
    title: "피라미드 건설 1000년 전, 사하라에는 호수가 있었다",
    category: "dinosaur",
    date: "2026-03-24",
    summary: "사하라 사막화: 약 5000년 전. 대피라미드 건설: 약 4500년 전. 500년 차이.",
    tags: ["사하라사막", "녹색사하라", "피라미드", "기후변화", "신석기"],
    relatedSlugs: ["mammoth-pyramid", "cleopatra-pyramid"],
    timeline: [
      { year: "1만 1천 년 전", label: "아프리카 습윤기 시작 (녹색 사하라)" },
      { year: "8천 년 전", label: "사하라에 수영하는 사람 벽화 제작 (와디 수라)" },
      { year: "5천 년 전", label: "아프리카 습윤기 종료, 사하라 사막화 시작", highlight: true },
      { year: "기원전 2560년", label: "대피라미드 건설 (~4580년 전)", highlight: true },
    ],
    content: `<p>사하라 사막에 '수영하는 사람' 벽화가 있다. 약 8000년 전 그림이다. <strong>사하라에 호수가 있었다는 증거.</strong></p>
<p>약 1만 1천 년 전~5천 년 전. 사하라에는 초원과 호수가 있었다. 악어, 하마, 물고기가 살았다. "녹색 사하라"다.</p>
<p>사막이 된 건 약 5000년 전. 대피라미드 건설은 약 4500년 전.</p>`,
  },
  {
    slug: "napoleon-beethoven",
    title: "나폴레옹과 베토벤은 동시대 사람이다",
    category: "people",
    date: "2026-03-25",
    summary: "나폴레옹: 1769년생. 베토벤: 1770년생. 1년 차이.",
    tags: ["나폴레옹", "베토벤", "1770년", "교향곡", "영웅"],
    relatedSlugs: ["yisunsin-shakespeare", "chaplin-hitler"],
    timeline: [
      { year: "1769년", label: "나폴레옹 보나파르트 출생", highlight: true },
      { year: "1770년", label: "루트비히 판 베토벤 출생", highlight: true },
      { year: "1804년", label: "나폴레옹 황제 즉위 / 베토벤 교향곡 3번 '영웅' 완성" },
      { year: "1821년", label: "나폴레옹 사망 (세인트헬레나)" },
      { year: "1827년", label: "베토벤 사망 (빈)" },
    ],
    content: `<p>나폴레옹: 1769년생. 베토벤: 1770년생. <strong>1년 차이.</strong></p>
<p>베토벤은 교향곡 3번을 '보나파르트'라는 이름으로 헌정하려 했다. 1804년 나폴레옹이 황제에 오르자 표지의 이름을 직접 긁어버렸다.</p>
<p>나폴레옹 사망: 1821년. 베토벤 사망: 1827년. 6년 차이.</p>`,
  },
  {
    slug: "lincoln-ripper",
    title: "링컨 암살과 잭 더 리퍼 사건은 23년 차이다",
    category: "people",
    date: "2026-03-26",
    summary: "링컨 암살: 1865년. 잭 더 리퍼: 1888년. 23년 차이.",
    tags: ["링컨", "잭더리퍼", "1865년", "1888년", "빅토리아시대"],
    relatedSlugs: ["napoleon-beethoven", "fax-samurai"],
    timeline: [
      { year: "1865년 4월", label: "에이브러햄 링컨 암살 (포드 극장)", highlight: true },
      { year: "1876년", label: "알렉산더 벨, 전화 발명" },
      { year: "1886년", label: "카를 벤츠, 자동차 특허" },
      { year: "1888년 가을", label: "잭 더 리퍼 사건 (런던 화이트채플)", highlight: true },
    ],
    content: `<p>링컨 암살: 1865년. 포드 극장. 남북전쟁이 끝난 직후였다.</p>
<p>잭 더 리퍼: 1888년. 런던 화이트채플. <strong>23년 차이.</strong></p>`,
  },
  {
    slug: "chaplin-hitler",
    title: "찰리 채플린과 히틀러는 같은 달에 태어났다",
    category: "people",
    date: "2026-03-27",
    summary: "채플린: 1889년 4월 16일. 히틀러: 1889년 4월 20일. 나흘 차이.",
    tags: ["채플린", "히틀러", "1889년", "위대한독재자", "4월"],
    relatedSlugs: ["napoleon-beethoven", "lincoln-ripper"],
    timeline: [
      { year: "1889년 4월 16일", label: "찰리 채플린 출생 (런던)", highlight: true },
      { year: "1889년 4월 20일", label: "아돌프 히틀러 출생 (브라우나우)", highlight: true },
      { year: "1940년", label: "채플린, '위대한 독재자' 개봉" },
      { year: "1945년", label: "히틀러 사망" },
      { year: "1977년", label: "채플린 사망" },
    ],
    content: `<p>채플린: 1889년 4월 16일. 히틀러: 1889년 4월 20일. <strong>나흘 차이.</strong></p>
<p>1940년. 채플린이 '위대한 독재자'에서 히틀러를 풍자했다. 히틀러 역과 유대인 이발사 역을 동시에 맡았다.</p>
<p>히틀러 사망: 1945년. 채플린 사망: 1977년.</p>`,
  },
  {
    slug: "columbus-davinci",
    title: "콜럼버스와 레오나르도 다빈치는 동시대 사람이다",
    category: "people",
    date: "2026-03-28",
    summary: "콜럼버스: 1451년생. 다빈치: 1452년생. 1년 차이. 둘 다 이탈리아 출신.",
    tags: ["콜럼버스", "다빈치", "1450년대", "르네상스", "대항해시대"],
    relatedSlugs: ["hangeul-columbus", "napoleon-beethoven"],
    timeline: [
      { year: "1451년", label: "크리스토퍼 콜럼버스 출생 (제노바)", highlight: true },
      { year: "1452년", label: "레오나르도 다빈치 출생 (빈치)", highlight: true },
      { year: "1492년", label: "콜럼버스, 아메리카 도달" },
      { year: "1503년", label: "다빈치, 모나리자 제작 시작" },
      { year: "1506년", label: "콜럼버스 사망" },
      { year: "1519년", label: "다빈치 사망" },
    ],
    content: `<p>콜럼버스: 1451년생. 다빈치: 1452년생. <strong>1년 차이.</strong> 둘 다 이탈리아 출신.</p>
<p>1492년. 콜럼버스가 대서양을 건넜다. 다빈치는 밀라노에서 비행기계를 설계하고 있었다.</p>`,
  },
  {
    slug: "goryeo-viking",
    title: "고려가 건국됐을 때 바이킹은 아직 유럽을 약탈하고 있었다",
    category: "korea-world",
    date: "2026-03-29",
    summary: "고려 건국: 918년. 바이킹 시대: 793~1066년. 한창 겹친다.",
    tags: ["고려", "바이킹", "918년", "왕건", "노르만"],
    relatedSlugs: ["gwanggaeto-rome", "joseon-blackdeath"],
    timeline: [
      { year: "793년", label: "바이킹, 린디스판 수도원 약탈 (바이킹 시대 시작)" },
      { year: "918년", label: "왕건, 고려 건국", highlight: true },
      { year: "936년", label: "고려, 후삼국 통일" },
      { year: "1013년", label: "바이킹, 덴마크의 스벤 왕이 잉글랜드 정복" },
      { year: "1066년", label: "노르만 정복 (바이킹 시대 종료)", highlight: true },
    ],
    content: `<p>고려 건국: 918년. 바이킹 시대: 793~1066년.</p>
<p><strong>왕건이 고려를 세울 때 바이킹은 한창이었다.</strong></p>
<p>936년 후삼국 통일. 그때도 바이킹은 영국과 프랑스 해안을 약탈하고 있었다.</p>`,
  },
  {
    slug: "sejong-jeannedarc",
    title: "세종대왕과 잔 다르크는 동시대 사람이다",
    category: "korea-world",
    date: "2026-03-30",
    summary: "세종: 1397년생. 잔 다르크: 1412년생. 15년 차이.",
    tags: ["세종대왕", "잔다르크", "한글", "백년전쟁", "15세기"],
    relatedSlugs: ["hangeul-columbus", "gwanggaeto-rome"],
    timeline: [
      { year: "1397년", label: "세종대왕 출생", highlight: true },
      { year: "1412년", label: "잔 다르크 출생" },
      { year: "1429년", label: "잔 다르크, 오를레앙 해방", highlight: true },
      { year: "1431년", label: "잔 다르크 화형 (19세)" },
      { year: "1443년", label: "훈민정음 창제" },
      { year: "1450년", label: "세종대왕 사망" },
    ],
    content: `<p>세종: 1397년생. 잔 다르크: 1412년생. <strong>15년 차이.</strong></p>
<p>1429년. 잔 다르크가 오를레앙을 해방시켰다. 세종은 재위 11년 차였다.</p>
<p>1431년. 잔 다르크 화형. 19세. 세종은 훈민정음을 구상하기 시작할 무렵이다.</p>`,
  },
  {
    slug: "jeongyagyong-usa",
    title: "정약용이 살아있을 때 미국이 독립했다",
    category: "korea-world",
    date: "2026-03-31",
    summary: "정약용: 1762년생. 미국 독립선언: 1776년. 14살 때다.",
    tags: ["정약용", "미국독립", "1776년", "조선", "실학"],
    relatedSlugs: ["hangeul-columbus", "car-joseon"],
    timeline: [
      { year: "1762년", label: "정약용 출생", highlight: true },
      { year: "1776년", label: "미국 독립선언", highlight: true },
      { year: "1789년", label: "프랑스 혁명 / 정약용 문과 급제" },
      { year: "1801년", label: "정약용 유배 (18년간)" },
      { year: "1818년", label: "정약용 유배 해제, 목민심서 완성" },
      { year: "1836년", label: "정약용 사망" },
    ],
    content: `<p>정약용: 1762년생. 미국 독립선언: 1776년. <strong>14살 때다.</strong></p>
<p>1789년. 정약용 문과 급제. 같은 해 프랑스 혁명.</p>`,
  },
  {
    slug: "octopus-dinosaur",
    title: "문어는 공룡보다 먼저 지구에 나타났다",
    category: "dinosaur",
    date: "2026-04-01",
    summary: "문어 조상 화석: 약 3억 년 전. 공룡 등장: 약 2억 3천만 년 전. 7천만 년 차이.",
    tags: ["문어", "공룡", "두족류", "고생대", "화석"],
    relatedSlugs: ["shark-dinosaur", "flower-dinosaur"],
    timeline: [
      { year: "약 5억 년 전", label: "최초의 두족류 등장 (앵무조개류)" },
      { year: "약 3억 년 전", label: "문어 조상 화석 (석탄기)", highlight: true },
      { year: "약 2억 3천만 년 전", label: "최초의 공룡 등장 (트라이아스기)", highlight: true },
      { year: "6600만 년 전", label: "공룡 멸종" },
    ],
    content: `<p>문어 조상(두족류) 화석: 약 3억 년 전. 석탄기.</p>
<p>공룡 등장: 약 2억 3천만 년 전. <strong>문어가 7천만 년 먼저.</strong></p>
<p>공룡은 멸종했다. 문어는 살아남았다. 심장 3개. 피는 파란색이다.</p>`,
  },
  {
    slug: "telephone-eiffel",
    title: "전화기와 에펠탑은 같은 시대 발명품이다",
    category: "invention",
    date: "2026-04-02",
    summary: "전화기: 1876년. 에펠탑: 1889년. 13년 차이.",
    tags: ["전화기", "에펠탑", "벨", "1876년", "1889년", "파리만박"],
    relatedSlugs: ["fax-samurai", "film-gojong"],
    timeline: [
      { year: "1876년", label: "알렉산더 벨, 전화기 특허", highlight: true },
      { year: "1879년", label: "에디슨, 실용적 백열전구" },
      { year: "1886년", label: "카를 벤츠, 자동차 특허" },
      { year: "1889년", label: "에펠탑 완공 (파리 만국박람회)", highlight: true },
    ],
    content: `<p>전화기 특허: 1876년. 에펠탑 완공: 1889년. <strong>13년 차이.</strong></p>
<p>에펠탑이 올라갈 때 전화는 이미 실용화돼 있었다.</p>`,
  },
  {
    slug: "film-gojong",
    title: "영화가 발명됐을 때 고종이 살아있었다",
    category: "korea-world",
    date: "2026-04-03",
    summary: "최초 영화 상영: 1895년. 고종: 1852~1919. 그때 43세였다.",
    tags: ["영화", "고종", "뤼미에르", "1895년", "조선", "대한제국"],
    relatedSlugs: ["fax-samurai", "car-joseon"],
    timeline: [
      { year: "1852년", label: "고종 출생" },
      { year: "1895년", label: "뤼미에르 형제, 최초 영화 상영 (파리)", highlight: true },
      { year: "1897년", label: "대한제국 선포" },
      { year: "1903년", label: "한국 최초 영화 상영 (동대문 전기회사)", highlight: true },
      { year: "1919년", label: "고종 사망" },
    ],
    content: `<p>최초 영화 상영: 1895년. 뤼미에르 형제. 파리.</p>
<p>고종: 1852년생. <strong>그때 43세.</strong></p>
<p>한국 최초 영화 상영: 1903년. 동대문 한성전기회사 앞. 대한제국 시기. 고종은 황제였다.</p>`,
  },
  {
    slug: "sun-galaxy",
    title: "태양은 은하를 한 바퀴 도는 데 2억 3천만 년 걸린다",
    category: "space",
    date: "2026-04-04",
    summary: "태양 공전 속도: 초속 약 230km. 한 바퀴: 약 2억 2500만~2억 5000만 년. '은하년'이라고 부른다.",
    tags: ["태양", "은하", "은하년", "공전", "우리은하"],
    relatedSlugs: ["pluto-orbit", "universe-calendar"],
    timeline: [
      { year: "약 46억 년 전", label: "태양계 형성" },
      { year: "약 2억 3천만 년 전", label: "공룡 등장 (태양 은하 위치: 약 1바퀴 전)", highlight: true },
      { year: "약 6600만 년 전", label: "공룡 멸종" },
      { year: "현재", label: "태양, 은하 공전 약 20바퀴째", highlight: true },
    ],
    content: `<p>태양은 은하 중심을 초속 약 230km로 돌고 있다. 한 바퀴에 약 2억 2500만~2억 5000만 년. <strong>'은하년'이라고 부른다.</strong></p>
<p>지금까지 약 20바퀴 돌았다. 공룡이 등장한 건 대략 1바퀴 전이다.</p>`,
  },
  {
    slug: "venus-day",
    title: "금성의 하루는 금성의 1년보다 길다",
    category: "space",
    date: "2026-04-05",
    summary: "금성 자전: 약 243일. 공전: 약 225일. 하루가 1년보다 18일 길다.",
    tags: ["금성", "자전", "공전", "태양계", "행성"],
    relatedSlugs: ["pluto-orbit", "sun-galaxy"],
    timeline: [
      { year: "약 243일", label: "금성 자전 주기 (하루)", highlight: true },
      { year: "약 225일", label: "금성 공전 주기 (1년)", highlight: true },
    ],
    content: `<p>금성 자전(하루): 약 243 지구일. 공전(1년): 약 225 지구일.</p>
<p><strong>하루가 1년보다 18일 길다.</strong></p>
<p>자전 방향도 반대다. 금성에서는 태양이 서쪽에서 뜬다.</p>`,
  },
  {
    slug: "moon-closer",
    title: "달은 처음엔 지금보다 훨씬 더 가까웠다",
    category: "space",
    date: "2026-04-06",
    summary: "45억 년 전 달-지구 거리: 약 2만~3만 km. 지금: 약 38만 4천 km.",
    tags: ["달", "지구", "조석력", "거대충돌설", "45억년"],
    relatedSlugs: ["universe-calendar", "sun-galaxy"],
    timeline: [
      { year: "약 45억 년 전", label: "거대충돌로 달 형성 (거리 약 2만~3만 km)", highlight: true },
      { year: "약 40억 년 전", label: "달의 조석 고정 시작" },
      { year: "현재", label: "지구-달 거리 약 38만 4천 km", highlight: true },
    ],
    content: `<p>약 45억 년 전. 화성 크기의 천체(테이아)가 지구에 충돌했다. 파편이 모여 달이 됐다.</p>
<p>당시 거리: 약 2만~3만 km. 지금: 약 38만 4천 km.</p>
<p>초기 지구의 하루는 약 4~6시간이었다. 달은 지금보다 <strong>훨씬 크게</strong> 보였고, 조석 높이는 수백 미터에 달했다.</p>`,
  },
  {
    slug: "car-joseon",
    title: "자동차가 발명됐을 때 조선은 아직 왕조였다",
    category: "korea-world",
    date: "2026-04-07",
    summary: "자동차 특허: 1886년. 대한제국 선포: 1897년. 자동차가 11년 먼저.",
    tags: ["자동차", "조선", "벤츠", "1886년", "대한제국", "고종"],
    relatedSlugs: ["fax-samurai", "film-gojong"],
    timeline: [
      { year: "1885년", label: "카를 벤츠, 자동차 개발 완료" },
      { year: "1886년 1월", label: "벤츠 페이턴트 모터바겐 특허", highlight: true },
      { year: "1894년", label: "갑오개혁" },
      { year: "1897년", label: "대한제국 선포 (조선 왕조 종료)", highlight: true },
      { year: "1903년", label: "고종, 국내 최초 자동차 이용" },
    ],
    content: `<p>벤츠 페이턴트 모터바겐 특허: 1886년 1월 29일. 개발은 1885년에 이미 끝나 있었다.</p>
<p>대한제국 선포: 1897년. <strong>자동차가 11년 먼저.</strong></p>
<p>그때 조선의 교통수단은 말과 가마였다.</p>`,
  },
  {
    slug: "joseon-founding-blackdeath",
    title: "조선이 건국될 때 유럽은 흑사병 후유증이 한창이었다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "조선 건국: 1392년. 흑사병 대유행 종식: 1351년경. 유럽 인구 1/3이 사라진 직후였다.",
    tags: ["조선", "건국", "흑사병", "1392년", "이성계", "유럽"],
    relatedSlugs: ["joseon-blackdeath", "hangul-columbus"],
    timeline: [
      { year: "1347년", label: "흑사병 유럽 상륙" },
      { year: "1351년경", label: "흑사병 1차 대유행 종식", highlight: true },
      { year: "1381년", label: "영국 농민 반란 (흑사병 후유증)" },
      { year: "1388년", label: "이성계 위화도 회군" },
      { year: "1392년", label: "조선 건국", highlight: true },
    ],
    content: `<p>1392년. 이성계가 조선을 건국했다. 새 왕조, 새 시대의 시작이었다.</p>
<p>근데 같은 시기 유럽은? 흑사병 후유증으로 아직 난리였다. 1347년부터 퍼진 흑사병은 유럽 인구의 1/3을 죽였다. 어떤 지역은 절반이 날아갔다.</p>
<p>1381년에는 영국에서 농민 반란이 터졌다. 사람이 너무 죽어서 노동력이 부족해지고, 그게 사회 구조를 뒤흔든 거다.</p>
<p><strong>조선이 새 나라를 세울 때, 유럽은 죽음의 후유증에서 겨우 일어나는 중이었다.</strong></p>`,
  },
  {
    slug: "imjin-shakespeare-hamlet",
    title: "임진왜란 때 셰익스피어는 햄릿을 쓰고 있었다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "임진왜란: 1592년. 셰익스피어 햄릿 집필: 1599~1601년. 거의 같은 시기.",
    tags: ["임진왜란", "셰익스피어", "햄릿", "1592년", "이순신", "선조"],
    relatedSlugs: ["yisunsin-shakespeare", "hangul-columbus"],
    timeline: [
      { year: "1592년", label: "임진왜란 발발", highlight: true },
      { year: "1592년", label: "셰익스피어, 런던에서 극작가로 활동 시작" },
      { year: "1597년", label: "정유재란" },
      { year: "1598년", label: "이순신 전사, 전쟁 종료" },
      { year: "1600~1601년", label: "셰익스피어, 햄릿 집필", highlight: true },
    ],
    content: `<p>1592년. 조선 땅에 왜군 15만이 쏟아져 들어왔다. 임진왜란이다. 이순신이 바다에서 싸우고, 의병들이 산에서 싸웠다.</p>
<p>바로 그해. 런던에서는 셰익스피어가 극작가로 본격적으로 활동을 시작했다.</p>
<p>전쟁이 끝난 직후인 1600~1601년. 셰익스피어는 햄릿을 썼다. "사느냐 죽느냐, 그것이 문제로다."</p>
<p><strong>조선이 진짜 삶과 죽음 사이에서 싸울 때, 셰익스피어는 무대 위에서 그걸 물었다.</strong></p>`,
  },
  {
    slug: "goryeo-jikji-handwriting",
    title: "고려가 금속활자 쓸 때, 유럽은 양피지에 손으로 쓰고 있었다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "직지심체요절 금속활자 인쇄: 1377년. 구텐베르크 활판인쇄: 1455년. 78년 차이.",
    tags: ["금속활자", "직지", "구텐베르크", "고려", "1377년", "양피지"],
    relatedSlugs: ["jikji-gutenberg", "joseon-founding-blackdeath"],
    timeline: [
      { year: "1234년경", label: "고려, 금속활자 최초 사용 추정" },
      { year: "1377년", label: "직지심체요절 금속활자 인쇄", highlight: true },
      { year: "1392년", label: "조선 건국" },
      { year: "1440년대", label: "구텐베르크, 활판인쇄 개발" },
      { year: "1455년", label: "구텐베르크 성경 인쇄", highlight: true },
    ],
    content: `<p>1377년. 고려에서 직지심체요절이 금속활자로 인쇄됐다. 현존하는 세계 최고(最古)의 금속활자 인쇄물이다.</p>
<p>그때 유럽은? 수도사들이 양피지 위에 한 글자 한 글자 손으로 베끼고 있었다. 책 한 권 만드는 데 몇 달씩 걸렸다.</p>
<p>구텐베르크가 활판인쇄를 완성한 건 1455년. <strong>고려보다 78년 늦다.</strong></p>`,
  },
  {
    slug: "joseon-growth-religious-wars",
    title: "16~17세기 조선이 성장할 때 유럽은 종교전쟁 중이었다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "조선 전성기: 15~16세기. 유럽 종교전쟁: 1524~1648년. 한쪽은 안정, 한쪽은 피바다.",
    tags: ["조선", "종교전쟁", "30년전쟁", "16세기", "성리학", "유럽"],
    relatedSlugs: ["hangul-columbus", "yisunsin-shakespeare"],
    timeline: [
      { year: "1443년", label: "훈민정음 창제" },
      { year: "1517년", label: "마르틴 루터 95개조 반박문", highlight: true },
      { year: "1524년", label: "독일 농민전쟁 (종교전쟁 시작)" },
      { year: "1592년", label: "임진왜란" },
      { year: "1618년", label: "30년 전쟁 시작", highlight: true },
      { year: "1648년", label: "베스트팔렌 조약 (30년 전쟁 종료)" },
    ],
    content: `<p>15~16세기 조선. 한글이 만들어지고, 성리학이 꽃피고, 나름 안정적인 시기였다. 물론 당쟁도 있었지만.</p>
<p>같은 시기 유럽은? 완전 피바다였다. 1517년 루터의 종교개혁 이후, 가톨릭과 개신교가 칼을 들었다.</p>
<p>1618년에 시작된 30년 전쟁은 유럽 역사상 가장 참혹한 전쟁 중 하나다. 독일 지역 인구가 최대 40%나 줄었다.</p>
<p><strong>조선이 서원에서 학문을 논할 때, 유럽은 신의 이름으로 서로를 죽이고 있었다.</strong></p>`,
  },
  {
    slug: "gwanghaegun-puritan",
    title: "광해군이 쫓겨날 때, 영국은 청교도 혁명 직전이었다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "인조반정: 1623년. 영국 청교도 혁명(내전): 1642년. 19년 차이. 왕이 쫓겨나는 건 비슷했다.",
    tags: ["광해군", "인조반정", "청교도혁명", "1623년", "찰스1세", "영국"],
    relatedSlugs: ["joseon-yesong-newton", "joseon-growth-religious-wars"],
    timeline: [
      { year: "1608년", label: "광해군 즉위" },
      { year: "1623년", label: "인조반정 (광해군 폐위)", highlight: true },
      { year: "1636년", label: "병자호란" },
      { year: "1642년", label: "영국 내전 시작 (청교도 혁명)", highlight: true },
      { year: "1649년", label: "찰스 1세 처형" },
    ],
    content: `<p>1623년. 광해군이 인조반정으로 쫓겨났다. 중립 외교를 펼치던 광해군 대신, 친명 노선의 인조가 왕이 됐다. 결과는? 13년 뒤 병자호란.</p>
<p>19년 뒤인 1642년. 영국에서도 왕이 위기를 맞았다. 의회와 왕이 충돌해서 내전이 벌어졌다. 청교도 혁명이다.</p>
<p>1649년에는 찰스 1세의 목이 날아갔다. <strong>왕의 목을 잘랐다.</strong> 유럽에서 전례 없는 일이었다.</p>`,
  },
  {
    slug: "jeongjo-hwaseong-usa",
    title: "정조가 수원화성 지을 때, 미국은 막 독립했다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "수원화성 완공: 1796년. 미국 독립선언: 1776년. 20년 차이.",
    tags: ["정조", "수원화성", "미국독립", "1796년", "1776년", "조지워싱턴"],
    relatedSlugs: ["jeongyagyong-usa", "joseon-yesong-newton"],
    timeline: [
      { year: "1776년", label: "미국 독립선언", highlight: true },
      { year: "1789년", label: "프랑스 대혁명 / 조지 워싱턴 초대 대통령" },
      { year: "1794년", label: "수원화성 착공" },
      { year: "1796년", label: "수원화성 완공", highlight: true },
      { year: "1800년", label: "정조 사망" },
    ],
    content: `<p>1796년. 정조가 수원화성을 완공했다. 정약용이 거중기를 설계해서 공사 기간을 단축했다. 동서양 건축 기술을 융합한 걸작이다.</p>
<p>20년 전인 1776년. 바다 건너 미국에서는 독립선언서가 낭독됐다. "모든 사람은 평등하게 태어났다."</p>
<p>1789년에는 프랑스 대혁명까지 터졌다. 왕의 시대가 끝나고 있었다.</p>
<p><strong>정조가 성을 쌓을 때, 세계는 왕 없는 나라를 만들고 있었다.</strong></p>`,
  },
  {
    slug: "daewongun-japan-opened",
    title: "흥선대원군이 쇄국할 때, 일본은 이미 개항했다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "일본 개항(미일화친조약): 1854년. 흥선대원군 쇄국: 1863년~. 9년 차이로 정반대 선택.",
    tags: ["흥선대원군", "쇄국", "일본개항", "페리", "1854년", "메이지유신"],
    relatedSlugs: ["joseon-sakoku-industrial", "joseon-sakoku-railroad"],
    timeline: [
      { year: "1853년", label: "페리 제독, 일본에 개항 요구" },
      { year: "1854년", label: "미일화친조약 (일본 개항)", highlight: true },
      { year: "1863년", label: "흥선대원군 집권, 쇄국 강화", highlight: true },
      { year: "1868년", label: "메이지 유신 (일본 근대화)" },
      { year: "1876년", label: "조선 강화도 조약 (강제 개항)" },
    ],
    content: `<p>1854년. 일본이 미국 페리 제독의 압박에 문을 열었다. 미일화친조약. 처음에는 치욕이었지만, 일본은 빠르게 방향을 틀었다.</p>
<p>1868년 메이지 유신. 서양 기술을 흡수하고, 군대를 근대화하고, 산업을 일으켰다.</p>
<p>9년 뒤인 1863년. 조선은 정반대 선택을 했다. 흥선대원군이 쇄국 정책을 강화한 거다. 척화비를 세우고, 서양 오랑캐와는 상종하지 않겠다고 선언했다.</p>
<p><strong>이웃 나라가 문을 열고 변화할 때, 조선은 문을 닫았다.</strong></p>`,
  },
  {
    slug: "eulsa-relativity",
    title: "을사늑약과 상대성이론 발표는 같은 해다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "을사늑약: 1905년 11월. 아인슈타인 특수상대성이론: 1905년 6월. 같은 해, 5개월 차이.",
    tags: ["을사늑약", "아인슈타인", "상대성이론", "1905년", "기적의해"],
    relatedSlugs: ["korean-war-dna", "daehan-empire-film"],
    timeline: [
      { year: "1905년 3월", label: "아인슈타인, 광양자 가설 논문" },
      { year: "1905년 6월", label: "특수상대성이론 논문 발표", highlight: true },
      { year: "1905년 9월", label: "E=mc² 논문" },
      { year: "1905년 11월", label: "을사늑약 체결 (외교권 박탈)", highlight: true },
      { year: "1906년", label: "민영환 순국, 장지연 시일야방성대곡" },
    ],
    content: `<p>1905년은 물리학에서 '기적의 해(Annus Mirabilis)'라 불린다. 아인슈타인이 혼자서 논문 4편을 쏟아냈다. 광양자 가설, 브라운 운동, 특수상대성이론, E=mc².</p>
<p>같은 해 11월. 대한제국에서는 을사늑약이 체결됐다. 일본이 외교권을 빼앗은 거다. 사실상 나라를 잃어가는 과정이었다.</p>
<p><strong>우주의 비밀이 풀리던 해에, 한 나라의 주권이 무너졌다.</strong></p>`,
  },
  {
    slug: "gojong-coffee-eiffel",
    title: "고종이 커피 마실 때, 파리는 에펠탑 세우고 있었다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "에펠탑 완공: 1889년. 고종 커피 입문: 1896년경. 비슷한 시기, 다른 풍경.",
    tags: ["고종", "커피", "에펠탑", "1889년", "1896년", "아관파천"],
    relatedSlugs: ["daehan-empire-film", "car-joseon"],
    timeline: [
      { year: "1889년", label: "에펠탑 완공 (파리 만국박람회)", highlight: true },
      { year: "1893년", label: "시카고 만국박람회" },
      { year: "1896년", label: "아관파천 (고종, 러시아 공사관으로)", highlight: true },
      { year: "1896~1897년경", label: "고종, 러시아 공사관에서 커피를 접함" },
      { year: "1897년", label: "대한제국 선포" },
    ],
    content: `<p>1889년. 파리에 에펠탑이 세워졌다. 만국박람회를 위해 지은 건데, 처음에는 "흉물"이라고 욕을 엄청 먹었다. 지금은 파리의 상징이지만.</p>
<p>7년 뒤인 1896년. 고종은 러시아 공사관으로 피신했다. 아관파천이다. 거기서 러시아 공사 웨베르를 통해 커피를 처음 맛봤다고 전해진다.</p>
<p><strong>파리에서 철탑이 하늘을 찌를 때, 조선의 왕은 외국 공사관에 숨어서 커피를 마셨다.</strong></p>`,
  },
  {
    slug: "korean-war-uk-rationing",
    title: "한국전쟁 때 영국은 아직 식량 배급제였다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "한국전쟁: 1950~1953년. 영국 식량 배급제 종료: 1954년. 2차 대전 끝나고도 9년간 배급.",
    tags: ["한국전쟁", "영국", "배급제", "1950년", "2차대전", "식량"],
    relatedSlugs: ["korean-war-dna", "japanese-occupation-jazz"],
    timeline: [
      { year: "1940년", label: "영국 식량 배급제 시작 (2차 대전)", highlight: true },
      { year: "1945년", label: "2차 세계대전 종전" },
      { year: "1950년 6월", label: "한국전쟁 발발", highlight: true },
      { year: "1953년 7월", label: "한국전쟁 휴전" },
      { year: "1954년 7월", label: "영국 식량 배급제 완전 종료", highlight: true },
    ],
    content: `<p>한국전쟁이 한창이던 1950~1953년. 영국에서는 아직 식량 배급제가 돌아가고 있었다.</p>
<p>어라? 2차 대전은 1945년에 끝나지 않았나? 맞다. 근데 전쟁이 끝났다고 경제가 바로 살아나는 게 아니다. 영국은 전쟁으로 완전히 거덜났다.</p>
<p>고기, 치즈, 버터, 설탕... 배급 카드 없으면 못 샀다. 배급제가 완전히 끝난 건 <strong>1954년 7월</strong>이다. 2차 대전 끝나고도 9년이나 더 걸렸다.</p>
<p>한국에 파병까지 하면서도 자국민 식량을 배급으로 돌리고 있었던 거다.</p>`,
  },
  {
    slug: "silla-unification-islam",
    title: "신라 삼국통일 때 이슬람 제국이 팽창 중이었다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "신라 삼국통일: 668년. 우마이야 왕조 팽창: 661~750년. 같은 시기, 동서양에서 판이 흔들렸다.",
    tags: ["신라", "삼국통일", "이슬람", "우마이야", "668년", "문무왕"],
    relatedSlugs: ["silla-bulguksa-charlemagne", "gwanggaeto-rome"],
    timeline: [
      { year: "660년", label: "백제 멸망" },
      { year: "661년", label: "우마이야 왕조 수립", highlight: true },
      { year: "668년", label: "신라 삼국통일 (고구려 멸망)", highlight: true },
      { year: "711년", label: "이슬람, 이베리아 반도 정복" },
      { year: "750년", label: "우마이야 왕조 멸망, 압바스 왕조 수립" },
    ],
    content: `<p>668년. 신라가 고구려를 멸망시키고 삼국통일을 이뤘다. 한반도 역사의 거대한 전환점이다.</p>
<p>근데 그때 서쪽에서도 엄청난 일이 벌어지고 있었다. 661년에 수립된 우마이야 왕조가 미친 듯이 영토를 넓히고 있었다.</p>
<p>711년에는 이베리아 반도(지금의 스페인)까지 먹었다. <strong>동쪽에서 신라가 통일하는 동안, 서쪽에서는 이슬람이 세계를 삼키고 있었다.</strong></p>`,
  },
  {
    slug: "baekje-buddhism-japan",
    title: "백제가 일본에 불교 전할 때, 유럽은 혼란의 시대였다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "백제 불교 전래(일본): 552년. 서로마 멸망 후 유럽 암흑기 한창: 476~800년.",
    tags: ["백제", "불교", "일본", "암흑기", "552년", "성왕"],
    relatedSlugs: ["silla-bulguksa-charlemagne", "silla-unification-islam"],
    timeline: [
      { year: "476년", label: "서로마 제국 멸망", highlight: true },
      { year: "538~552년", label: "백제 성왕, 일본에 불교 전래", highlight: true },
      { year: "589년", label: "수나라 중국 통일" },
      { year: "660년", label: "백제 멸망" },
      { year: "800년", label: "카롤루스 대제 대관 (암흑기 끝)" },
    ],
    content: `<p>552년경. 백제 성왕이 일본에 불교를 전했다. 불상이랑 경전을 보냈다고 한다.</p>
<p>어라? 그때 유럽은 뭐 하고 있었냐면. 서로마가 476년에 망한 뒤로 완전 혼란이었다. 게르만족이 여기저기 왕국 세우고, 문화 수준은 급락했다.</p>
<p><strong>백제가 바다 건너 문화를 전파하던 시기에, 유럽은 '암흑기'라 불리는 시대 한복판이었다.</strong></p>`,
  },
  {
    slug: "joseon-yesong-newton",
    title: "조선 예송논쟁 때 뉴턴이 만유인력을 발견했다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "예송논쟁: 1659~1674년. 뉴턴 만유인력 연구: 1665~1666년. 상복 기간 vs 우주 법칙.",
    tags: ["예송논쟁", "뉴턴", "만유인력", "조선", "1665년", "현종"],
    relatedSlugs: ["harvard-calculus", "jeongyagyong-usa"],
    timeline: [
      { year: "1659년", label: "1차 예송논쟁 시작 (효종 사망)", highlight: true },
      { year: "1665년", label: "뉴턴, 만유인력 연구 시작", highlight: true },
      { year: "1666년", label: "뉴턴, 프리즘 실험 (빛의 분산)" },
      { year: "1674년", label: "2차 예송논쟁 (효종비 사망)" },
      { year: "1687년", label: "뉴턴, 프린키피아 출간" },
    ],
    content: `<p>1659년. 조선 효종이 죽었다. 그러자 나라 전체가 논쟁에 빠졌다. "상복을 1년 입을까, 3년 입을까?"</p>
<p>이게 그냥 옷 문제가 아니라 왕실 정통성 싸움이었다. 서인과 남인이 피 터지게 싸웠다.</p>
<p>그 와중에 1665년. 영국에서는 23살 뉴턴이 사과나무 아래서 생각에 빠져 있었다. 만유인력. 우주를 지배하는 법칙을 떠올린 거다.</p>
<p><strong>상복 기간을 두고 싸우는 동안, 누군가는 우주의 법칙을 발견했다.</strong></p>`,
  },
  {
    slug: "daehan-empire-film",
    title: "대한제국 선포 때 영화가 막 발명됐다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "뤼미에르 형제 최초 영화 상영: 1895년. 대한제국 선포: 1897년. 2년 차이.",
    tags: ["대한제국", "영화", "뤼미에르", "1897년", "고종", "시네마토그래프"],
    relatedSlugs: ["film-gojong", "car-joseon"],
    timeline: [
      { year: "1894년", label: "갑오개혁 / 청일전쟁" },
      { year: "1895년 12월", label: "뤼미에르 형제, 최초 영화 상영 (파리)", highlight: true },
      { year: "1896년", label: "아관파천 (고종, 러시아 공사관으로)" },
      { year: "1897년", label: "대한제국 선포", highlight: true },
      { year: "1903년", label: "한국 최초 영화 상영 (동대문)" },
    ],
    content: `<p>1895년 12월 28일. 파리의 한 카페에서 뤼미에르 형제가 시네마토그래프를 돌렸다. 세계 최초 영화 상영이었다. 기차가 달려오는 영상에 관객들이 도망쳤다는 유명한 일화.</p>
<p>2년 뒤인 1897년. 고종이 대한제국을 선포했다. 황제국을 자처하며 근대화를 시도했다.</p>
<p><strong>영화가 탄생한 바로 그 시기에, 대한제국이 출범했다.</strong></p>`,
  },
  {
    slug: "march1st-spanish-flu",
    title: "3.1운동 때 스페인 독감이 전 세계를 덮쳤다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "3.1운동: 1919년 3월. 스페인 독감: 1918~1920년. 독립운동과 팬데믹이 겹쳤다.",
    tags: ["3.1운동", "스페인독감", "1919년", "팬데믹", "독립운동"],
    relatedSlugs: ["joseon-sakoku-industrial", "anne-frank-mlk"],
    timeline: [
      { year: "1918년 3월", label: "스페인 독감 1차 유행 시작", highlight: true },
      { year: "1918년 11월", label: "1차 세계대전 종전" },
      { year: "1919년 1월", label: "고종 사망" },
      { year: "1919년 3월 1일", label: "3.1운동", highlight: true },
      { year: "1919년 4월", label: "대한민국 임시정부 수립" },
      { year: "1920년", label: "스페인 독감 종식 (사망자 약 5천만 명)" },
    ],
    content: `<p>1919년 3월 1일. "대한 독립 만세." 전국에서 만세 운동이 터져 나왔다.</p>
<p>근데 그때 세계는 또 다른 재난과 싸우고 있었다. 스페인 독감. 1918년부터 시작된 이 팬데믹은 전 세계에서 약 5천만 명을 죽였다. 1차 대전 사망자보다 많다.</p>
<p>조선에서도 스페인 독감이 퍼졌다. 당시 조선 인구 약 1,700만 명 중 740만 명이 감염됐다는 기록이 있다.</p>
<p><strong>독립을 외치는 와중에, 전염병까지 덮친 거다.</strong></p>`,
  },
  {
    slug: "japanese-occupation-jazz",
    title: "일제강점기 때 미국은 재즈 시대였다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "일제강점기: 1910~1945년. 미국 재즈 에이지: 1920년대. 같은 시기, 극과 극.",
    tags: ["일제강점기", "재즈", "미국", "1920년대", "대공황", "해방"],
    relatedSlugs: ["march1st-spanish-flu", "joseon-sakoku-railroad"],
    timeline: [
      { year: "1910년", label: "일제 강점 시작", highlight: true },
      { year: "1920년대", label: "미국 재즈 에이지 (Roaring Twenties)", highlight: true },
      { year: "1929년", label: "미국 대공황 시작" },
      { year: "1941년", label: "태평양 전쟁 발발" },
      { year: "1945년 8월", label: "광복", highlight: true },
    ],
    content: `<p>1920년대 미국. '광란의 20년대(Roaring Twenties)'라 불리는 시기. 재즈가 울려 퍼지고, 자동차가 넘치고, 주식 시장이 하늘을 뚫었다.</p>
<p>같은 시기 조선. 일제강점기 한복판이었다. 토지를 빼앗기고, 말과 이름을 빼앗기고, 독립운동가들은 감옥에 갇혔다.</p>
<p>1929년 미국에 대공황이 터졌다. 그 여파로 전 세계가 흔들렸고, 결국 2차 대전으로 이어졌다.</p>
<p><strong>한쪽은 재즈를 듣고, 한쪽은 독립을 꿈꿨다.</strong></p>`,
  },
  {
    slug: "korean-war-dna",
    title: "6.25 휴전협정 때 DNA 이중나선 구조가 처음 밝혀졌다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "6.25 휴전협정: 1953년 7월. DNA 이중나선 발견: 1953년 4월. 3개월 차이.",
    tags: ["6.25", "휴전", "DNA", "왓슨", "크릭", "1953년"],
    relatedSlugs: ["march1st-spanish-flu", "japanese-occupation-jazz"],
    timeline: [
      { year: "1950년 6월", label: "6.25 전쟁 발발", highlight: true },
      { year: "1953년 2월", label: "왓슨과 크릭, DNA 이중나선 모델 완성" },
      { year: "1953년 4월", label: "네이처지에 DNA 논문 발표", highlight: true },
      { year: "1953년 7월", label: "6.25 휴전협정 체결", highlight: true },
      { year: "1962년", label: "왓슨·크릭·윌킨스 노벨상 수상" },
    ],
    content: `<p>1953년. 이 한 해에 두 가지 역사적 사건이 벌어졌다.</p>
<p>4월. 제임스 왓슨과 프랜시스 크릭이 네이처지에 논문을 실었다. DNA 이중나선 구조. 생명의 비밀을 풀어낸 거다. 논문은 겨우 한 페이지였다.</p>
<p>3개월 뒤인 7월 27일. 판문점에서 휴전협정이 체결됐다. 3년간의 전쟁이 멈췄다. 끝난 게 아니라 멈춘 거다.</p>
<p><strong>생명의 설계도가 밝혀진 해에, 수백만 명의 생명이 스러진 전쟁이 멈췄다.</strong></p>`,
  },
  {
    slug: "joseon-sakoku-industrial",
    title: "조선이 쇄국할 때 영국은 증기기관으로 세계를 제패하고 있었다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "영국 산업혁명: 1760~1840년. 조선 쇄국: 1863년~. 증기기관이 세계를 바꾸는 동안 조선은 문을 닫았다.",
    tags: ["쇄국", "산업혁명", "증기기관", "조선", "영국", "흥선대원군"],
    relatedSlugs: ["daedongyeojido-subway", "car-joseon"],
    timeline: [
      { year: "1760년경", label: "영국 산업혁명 시작", highlight: true },
      { year: "1769년", label: "제임스 와트, 증기기관 개량" },
      { year: "1825년", label: "세계 최초 공공 철도 개통 (영국)" },
      { year: "1840년경", label: "산업혁명 1차 완료" },
      { year: "1863년", label: "흥선대원군 집권, 쇄국 정책 강화", highlight: true },
      { year: "1876년", label: "강화도 조약 (개항)" },
    ],
    content: `<p>영국 산업혁명: 1760년경 시작. 증기기관, 방적기, 철도가 세상을 바꿨다.</p>
<p>1825년에는 세계 최초 공공 철도가 달렸다. 1840년경 산업혁명 1차가 마무리됐다.</p>
<p>그로부터 20여 년 뒤인 1863년. 조선에서는 흥선대원군이 집권하며 <strong>쇄국 정책을 강화했다.</strong></p>`,
  },
  {
    slug: "joseon-sakoku-railroad",
    title: "조선이 쇄국 정책 펼치던 1860년대, 미국은 대륙횡단철도를 완성했다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "미국 대륙횡단철도 완성: 1869년. 조선 쇄국 정책 한창: 1860년대. 같은 시기 다른 세상.",
    tags: ["대륙횡단철도", "쇄국", "조선", "미국", "1869년", "흥선대원군"],
    relatedSlugs: ["joseon-sakoku-industrial", "daedongyeojido-subway"],
    timeline: [
      { year: "1863년", label: "흥선대원군 집권, 쇄국 강화", highlight: true },
      { year: "1863년", label: "미국 대륙횡단철도 착공" },
      { year: "1866년", label: "병인양요" },
      { year: "1869년 5월", label: "미국 대륙횡단철도 완성", highlight: true },
      { year: "1871년", label: "신미양요" },
      { year: "1876년", label: "강화도 조약 (개항)" },
    ],
    content: `<p>1863년. 조선에서는 흥선대원군이 집권해 쇄국 정책을 강화했다.</p>
<p>같은 해. 미국에서는 대륙횡단철도 건설이 시작됐다.</p>
<p>1869년 5월 10일. 유타주 프로몬토리에서 동서 철도가 연결됐다. <strong>3,000km를 기차로 횡단하는 시대가 열렸다.</strong></p>`,
  },
  {
    slug: "goryeo-mongol-europe",
    title: "고려가 몽골 침략을 버텨낼 때, 유럽 일부는 몽골에 짓밟혔다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "고려 대몽항쟁: 1231~1270년. 몽골의 유럽 침공(모히 전투): 1241년. 같은 적, 같은 시기.",
    tags: ["고려", "몽골", "대몽항쟁", "모히전투", "유럽침공", "바투"],
    relatedSlugs: ["gwanggaeto-rome", "goryeo-viking"],
    timeline: [
      { year: "1231년", label: "몽골 1차 고려 침입", highlight: true },
      { year: "1232년", label: "고려, 강화도로 천도" },
      { year: "1241년", label: "몽골, 유럽 침공 (모히 전투)", highlight: true },
      { year: "1258년", label: "고려 무신정권 붕괴" },
      { year: "1270년", label: "고려, 개경 환도 (항쟁 종료)" },
    ],
    content: `<p>1231년. 몽골이 고려를 침략했다. 고려는 강화도로 수도를 옮기며 약 40년간 항쟁했다.</p>
<p>그 사이 1241년. 몽골군은 유럽까지 밀고 들어갔다. 헝가리 모히 전투에서 유럽 연합군을 궤멸시켰다.</p>
<p><strong>고려가 몽골에 맞서 버티는 동안, 유럽은 같은 몽골에게 짓밟혔다.</strong></p>`,
  },
  {
    slug: "silla-bulguksa-charlemagne",
    title: "신라가 불국사 지을 때, 유럽은 카롤루스 대제 시대였다",
    category: "korea-world",
    date: "2026-03-20",
    summary: "불국사 창건: 751년. 카롤루스 대제 재위: 768~814년. 17년 차이.",
    tags: ["신라", "불국사", "카롤루스대제", "샤를마뉴", "751년", "경덕왕"],
    relatedSlugs: ["gwanggaeto-rome", "goryeo-viking"],
    timeline: [
      { year: "742년", label: "신라 경덕왕 즉위" },
      { year: "751년", label: "불국사·석굴암 창건", highlight: true },
      { year: "768년", label: "카롤루스 대제 즉위", highlight: true },
      { year: "774년", label: "경덕왕 사망" },
      { year: "800년", label: "카롤루스 대제, 서로마 황제 대관" },
      { year: "814년", label: "카롤루스 대제 사망" },
    ],
    content: `<p>751년. 신라 경덕왕 시기. 김대성이 불국사와 석굴암을 짓기 시작했다. 신라 불교 예술의 정점이다.</p>
<p>17년 뒤인 768년. 유럽에서는 카롤루스 대제(샤를마뉴)가 프랑크 왕국의 왕위에 올랐다.</p>
<p><strong>신라가 석굴암의 부처를 조각할 때, 유럽은 중세 질서의 기틀을 잡고 있었다.</strong></p>`,
  },
  {
    slug: "magnetic-reversal",
    title: "지구 자기장은 여러 번 뒤집혔다 — 마지막 역전은 약 78만 년 전이다",
    category: "dinosaur",
    date: "2026-03-20",
    summary: "마지막 자기장 역전(브루네스-마쓰야마): 약 78만 년 전. 나침반이 남쪽을 가리키던 시대가 있었다.",
    tags: ["자기장", "역전", "브루네스", "지구", "78만년", "나침반"],
    relatedSlugs: ["sahara-pyramid", "moon-closer"],
    timeline: [
      { year: "약 42억 년 전", label: "지구 자기장 형성 추정" },
      { year: "약 78만 년 전", label: "마지막 자기장 역전 (브루네스-마쓰야마)", highlight: true },
      { year: "약 4만 1천 년 전", label: "라샹 사건 (일시적 역전 시도)" },
      { year: "현재", label: "자기 북극이 매년 약 55km 이동 중", highlight: true },
    ],
    content: `<p>나침반은 항상 북쪽을 가리킨다? 아니다. 지구 역사에서 자기장은 수백 번 뒤집혔다.</p>
<p>마지막으로 뒤집힌 건 약 78만 년 전. '브루네스-마쓰야마 역전'이라 부른다. 그때는 나침반이 남쪽을 가리켰을 거다.</p>
<p>근데 왜 뒤집히는 건지는 아직 완전히 밝혀지지 않았다. 지구 외핵의 대류 패턴이 바뀌면서 그런다는 게 유력한 가설이다.</p>
<p><strong>지금도 자기 북극은 매년 약 55km씩 이동하고 있다.</strong> 캐나다에서 시베리아 방향으로.</p>`,
  },
  {
    slug: "ice-age-repeated",
    title: "빙하기는 한 번이 아니라 여러 번 반복됐다",
    category: "dinosaur",
    date: "2026-03-20",
    summary: "최근 빙하기 종료: 약 1만 1,700년 전. 지난 260만 년간 빙하기와 간빙기가 반복됐다.",
    tags: ["빙하기", "간빙기", "홀로세", "플라이스토세", "11700년"],
    relatedSlugs: ["magnetic-reversal", "sahara-pyramid"],
    timeline: [
      { year: "약 260만 년 전", label: "플라이스토세 시작 (빙하기-간빙기 반복)", highlight: true },
      { year: "약 12만 년 전", label: "마지막 간빙기 (에미안 간빙기)" },
      { year: "약 7만 년 전", label: "마지막 빙하기 최고조 시작" },
      { year: "약 2만 년 전", label: "최후빙기극대기 (LGM)", highlight: true },
      { year: "약 1만 1,700년 전", label: "현재 간빙기(홀로세) 시작", highlight: true },
    ],
    content: `<p>빙하기 하면 딱 한 번 있었던 것 같지? 아니다. 지난 260만 년 동안 빙하기와 간빙기가 수십 번 반복됐다.</p>
<p>약 10만 년 주기로 빙하기가 오고, 1~2만 년 정도 따뜻한 간빙기가 찾아온다. 밀란코비치 순환이라고 한다. 지구 궤도와 자전축 변화 때문이다.</p>
<p>마지막 빙하기가 끝난 건 약 1만 1,700년 전. 그때부터 지금까지가 홀로세, 즉 현재 간빙기다.</p>
<p><strong>우리가 사는 "지금"도 빙하기 사이의 잠깐 따뜻한 틈이다.</strong></p>`,
  },
  {
    slug: "battery-before-lightbulb",
    title: "배터리는 전구보다 79년 먼저 발명됐다",
    category: "invention",
    date: "2026-03-20",
    summary: "볼타 전지(배터리): 1800년. 에디슨 전구: 1879년. 전기는 있었는데 쓸 데가 없었다.",
    tags: ["배터리", "전구", "볼타", "에디슨", "1800년", "1879년"],
    relatedSlugs: ["telephone-eiffel", "harvard-calculus"],
    timeline: [
      { year: "1800년", label: "알레산드로 볼타, 전지 발명", highlight: true },
      { year: "1831년", label: "패러데이, 전자기 유도 발견" },
      { year: "1844년", label: "모스, 전신 실용화" },
      { year: "1879년", label: "에디슨, 실용적 백열전구 발명", highlight: true },
      { year: "1882년", label: "에디슨, 뉴욕 최초 발전소 가동" },
    ],
    content: `<p>1800년. 이탈리아의 볼타가 최초의 실용적 전지를 만들었다. 구리와 아연 판을 소금물에 적신 천과 번갈아 쌓은 거다. 볼타 전지.</p>
<p>근데 전기를 만들어놓고도 뭘 해야 할지 몰랐다. 전기로 뭘 할 수 있는지 79년 동안 헤맸다고 봐도 된다.</p>
<p>1879년. 에디슨이 드디어 실용적인 백열전구를 만들었다. 그제야 "아, 이거 밤을 밝힐 수 있구나."</p>
<p><strong>전기는 1800년에 이미 있었다. 쓸 데를 찾는 데 79년이 걸렸을 뿐이다.</strong></p>`,
  },
  {
    slug: "airplane-after-car",
    title: "비행기는 자동차보다 늦게 발명됐다",
    category: "invention",
    date: "2026-03-20",
    summary: "자동차 특허: 1886년. 라이트 형제 비행: 1903년. 17년 차이. 땅 먼저, 하늘 나중.",
    tags: ["비행기", "자동차", "라이트형제", "벤츠", "1903년", "1886년"],
    relatedSlugs: ["car-joseon", "battery-before-lightbulb"],
    timeline: [
      { year: "1886년", label: "카를 벤츠, 자동차 특허", highlight: true },
      { year: "1893년", label: "헨리 포드, 첫 가솔린 자동차 제작" },
      { year: "1903년 12월", label: "라이트 형제, 최초 동력 비행 (12초)", highlight: true },
      { year: "1908년", label: "포드 모델 T 출시 (자동차 대중화)" },
      { year: "1927년", label: "린드버그, 대서양 단독 횡단 비행" },
    ],
    content: `<p>1886년. 벤츠가 자동차 특허를 냈다. 땅 위를 엔진으로 달리는 시대가 열렸다.</p>
<p>17년 뒤인 1903년 12월 17일. 라이트 형제가 하늘을 날았다. 12초. 거리 36미터. 지금 보면 웃길 정도로 짧지만, 그게 최초였다.</p>
<p>근데 생각해보면 순서가 좀 의외다. 하늘을 나는 게 더 어려울 것 같은데, 겨우 17년 차이라니.</p>
<p><strong>땅을 정복한 지 17년 만에 하늘까지 정복했다.</strong></p>`,
  },
  {
    slug: "creditcard-before-internet",
    title: "신용카드는 인터넷보다 먼저 등장했다",
    category: "invention",
    date: "2026-03-20",
    summary: "다이너스 클럽(최초 신용카드): 1950년. ARPANET(인터넷 원형): 1969년. 19년 차이.",
    tags: ["신용카드", "인터넷", "다이너스클럽", "ARPANET", "1950년", "1969년"],
    relatedSlugs: ["airplane-after-car", "guillotine-starwars"],
    timeline: [
      { year: "1950년", label: "다이너스 클럽 카드 출시 (최초 신용카드)", highlight: true },
      { year: "1958년", label: "아메리칸 익스프레스 카드 출시" },
      { year: "1958년", label: "뱅크아메리카드 (비자 전신) 출시" },
      { year: "1969년", label: "ARPANET 첫 데이터 전송 (인터넷 시작)", highlight: true },
      { year: "1991년", label: "월드와이드웹(WWW) 공개" },
    ],
    content: `<p>1950년. 뉴욕의 사업가 프랭크 맥나마라가 식당에서 지갑을 안 가져와서 망신을 당했다. 그래서 만든 게 다이너스 클럽 카드다. 세계 최초의 신용카드.</p>
<p>처음에는 뉴욕 식당 27곳에서만 쓸 수 있었다. 회원은 200명.</p>
<p>인터넷은? 1969년에야 ARPANET이라는 이름으로 첫 데이터가 오갔다. UCLA에서 스탠퍼드로. 전송하려던 단어는 "LOGIN"인데 "LO"까지만 보내고 시스템이 죽었다.</p>
<p><strong>외상으로 밥 먹는 기술이 컴퓨터 네트워크보다 19년 먼저 나왔다.</strong></p>`,
  },
  {
    slug: "continental-drift",
    title: "대륙은 고정되어 있지 않고 지금도 이동 중이다",
    category: "dinosaur",
    date: "2026-03-20",
    summary: "판게아 분리: 약 2억 년 전. 현재 대륙은 매년 몇 cm씩 이동 중. 대서양은 점점 넓어지고 있다.",
    tags: ["판게아", "대륙이동", "판구조론", "베게너", "대서양"],
    relatedSlugs: ["magnetic-reversal", "ice-age-repeated"],
    timeline: [
      { year: "약 3억 년 전", label: "판게아 초대륙 형성" },
      { year: "약 2억 년 전", label: "판게아 분리 시작", highlight: true },
      { year: "약 6,600만 년 전", label: "인도 대륙이 유라시아로 이동 중" },
      { year: "1912년", label: "베게너, 대륙이동설 발표", highlight: true },
      { year: "현재", label: "대서양 매년 약 2.5cm 확장 중" },
    ],
    content: `<p>지도를 보면 남미 동쪽 해안선이랑 아프리카 서쪽 해안선이 딱 맞는 것 같지 않나? 우연이 아니다.</p>
<p>약 3억 년 전에는 모든 대륙이 하나였다. 판게아. 그게 약 2억 년 전부터 쪼개지기 시작했다.</p>
<p>지금도 움직이고 있다. 대서양은 매년 약 2.5cm씩 넓어지고 있다. 손톱 자라는 속도랑 비슷하다.</p>
<p><strong>우리가 서 있는 이 땅도 지금 이 순간 움직이고 있다.</strong></p>`,
  },
  {
    slug: "himalaya-still-growing",
    title: "히말라야 산맥은 지금도 계속 높아지고 있다",
    category: "dinosaur",
    date: "2026-03-20",
    summary: "히말라야 형성 시작: 약 5,000만 년 전. 현재도 매년 약 5mm 상승 중. 인도판과 유라시아판 충돌.",
    tags: ["히말라야", "에베레스트", "인도판", "판충돌", "조산운동"],
    relatedSlugs: ["continental-drift", "magnetic-reversal"],
    timeline: [
      { year: "약 7,000만 년 전", label: "인도 대륙, 유라시아를 향해 북상 시작" },
      { year: "약 5,000만 년 전", label: "인도판-유라시아판 충돌, 히말라야 형성 시작", highlight: true },
      { year: "약 1,500만 년 전", label: "에베레스트 지역 급격히 융기" },
      { year: "1953년", label: "힐러리·텐징, 에베레스트 최초 등정" },
      { year: "현재", label: "매년 약 5mm 상승 중", highlight: true },
    ],
    content: `<p>에베레스트 높이 8,849m. 지구에서 제일 높은 산. 근데 이 산이 아직도 자라고 있다.</p>
<p>약 5,000만 년 전. 인도 대륙이 유라시아판에 쿵 박혔다. 그 충돌로 땅이 구겨지면서 올라온 게 히말라야다.</p>
<p>인도판은 지금도 매년 약 5cm씩 북쪽으로 밀고 있다. 그래서 히말라야는 매년 약 5mm씩 높아진다.</p>
<p><strong>에베레스트는 완성된 게 아니다. 아직 자라는 중이다.</strong></p>`,
  },
  {
    slug: "humans-tiny-fraction",
    title: "지구 역사 45억 년 중 인류가 존재한 건 약 30만 년뿐이다",
    category: "dinosaur",
    date: "2026-03-20",
    summary: "지구 나이: 약 45억 년. 호모 사피엔스 등장: 약 30만 년 전. 비율로 보면 0.007%.",
    tags: ["호모사피엔스", "지구역사", "30만년", "45억년", "인류"],
    relatedSlugs: ["universe-calendar", "ice-age-repeated"],
    timeline: [
      { year: "약 45억 년 전", label: "지구 탄생", highlight: true },
      { year: "약 38억 년 전", label: "최초 생명체 출현" },
      { year: "약 6,600만 년 전", label: "공룡 멸종" },
      { year: "약 30만 년 전", label: "호모 사피엔스 등장", highlight: true },
      { year: "약 1만 2천 년 전", label: "농업 혁명 (문명 시작)" },
    ],
    content: `<p>지구 나이: 약 45억 년. 호모 사피엔스: 약 30만 년.</p>
<p>비율로 따지면 0.007%다. 지구 역사를 24시간으로 놓으면, 인류는 마지막 6초에 나타난 거다.</p>
<p>문명이 시작된 건? 약 1만 2천 년 전. 24시간 기준으로 0.2초. 눈 깜빡하는 사이도 안 된다.</p>
<p><strong>우리는 지구 입장에서 방금 도착한 손님이다.</strong></p>`,
  },
  {
    slug: "oxygen-not-always",
    title: "산소가 없던 시기가 지구 역사 대부분이었다",
    category: "dinosaur",
    date: "2026-03-20",
    summary: "대산화 사건: 약 24억 년 전. 그 전 20억 년간 지구 대기에 산소가 거의 없었다.",
    tags: ["산소", "대산화사건", "시아노박테리아", "24억년", "대기"],
    relatedSlugs: ["humans-tiny-fraction", "flower-dinosaur"],
    timeline: [
      { year: "약 45억 년 전", label: "지구 형성 (산소 없는 대기)" },
      { year: "약 35억 년 전", label: "시아노박테리아 출현 (산소 생성 시작)" },
      { year: "약 24억 년 전", label: "대산화 사건 (산소 급증)", highlight: true },
      { year: "약 5억 4천만 년 전", label: "캄브리아기 대폭발 (산소 농도 현재 수준)" },
      { year: "현재", label: "대기 중 산소 약 21%", highlight: true },
    ],
    content: `<p>지금 우리가 숨 쉬는 산소. 당연한 것 같지만, 지구 역사 대부분에서는 산소가 거의 없었다.</p>
<p>약 35억 년 전. 시아노박테리아가 나타나서 광합성을 시작했다. 산소를 내뿜기 시작한 거다. 근데 그 산소가 대기에 쌓이기까지 10억 년 넘게 걸렸다.</p>
<p>약 24억 년 전. '대산화 사건'. 산소가 대기에 확 늘었다. 근데 이게 당시 생물 대부분한테는 독이었다. 산소에 적응 못한 혐기성 생물들이 대량 멸종했다.</p>
<p><strong>산소는 생명을 살리기도 하고 죽이기도 했다.</strong></p>`,
  },
  {
    slug: "mammals-after-dinosaurs",
    title: "공룡 멸종 후 포유류가 급격히 번성했다",
    category: "dinosaur",
    date: "2026-03-20",
    summary: "공룡 멸종: 약 6,600만 년 전. 소행성 충돌 후 포유류가 빈자리를 채웠다.",
    tags: ["공룡멸종", "포유류", "소행성", "백악기", "6600만년"],
    relatedSlugs: ["trex-stegosaurus", "shark-dinosaur"],
    timeline: [
      { year: "약 2억 3천만 년 전", label: "최초 포유류 출현 (쥐만한 크기)" },
      { year: "약 6,600만 년 전", label: "소행성 충돌, 공룡 멸종", highlight: true },
      { year: "약 5,500만 년 전", label: "포유류 대폭발 (다양한 종 출현)", highlight: true },
      { year: "약 5,000만 년 전", label: "고래 조상 육지에서 바다로" },
      { year: "약 30만 년 전", label: "호모 사피엔스 등장" },
    ],
    content: `<p>공룡 시대에도 포유류는 있었다. 근데 쥐만 했다. 공룡이 너무 셌으니까 구석에서 벌벌 떨며 살았다.</p>
<p>약 6,600만 년 전. 직경 10km짜리 소행성이 유카탄 반도에 박혔다. 공룡 포함 생물 75%가 사라졌다.</p>
<p>근데 포유류는 살아남았다. 작고 땅 속에 숨을 수 있었으니까. 그리고 빈자리를 미친 듯이 채웠다. 천만 년도 안 돼서 고래, 박쥐, 말, 유인원 조상이 전부 등장했다.</p>
<p><strong>공룡이 사라지지 않았으면 우리는 없었다.</strong></p>`,
  },
  {
    slug: "polar-warmth",
    title: "북극과 남극은 과거에 지금보다 훨씬 따뜻했다",
    category: "dinosaur",
    date: "2026-03-20",
    summary: "백악기(약 1억 년 전) 북극 평균 기온 약 15°C. 남극에는 숲이 있었다.",
    tags: ["북극", "남극", "백악기", "온실지구", "기후변화"],
    relatedSlugs: ["ice-age-repeated", "sahara-pyramid"],
    timeline: [
      { year: "약 1억 년 전", label: "백악기 온실기후 (북극 15°C)", highlight: true },
      { year: "약 5,500만 년 전", label: "PETM (팔레오세-에오세 극고온기)" },
      { year: "약 3,400만 년 전", label: "남극 빙상 형성 시작", highlight: true },
      { year: "약 260만 년 전", label: "북극 빙하 형성" },
      { year: "현재", label: "북극 해빙 감소 추세" },
    ],
    content: `<p>지금 북극 평균 기온은 영하 20~30°C. 남극은 더 춥다. 근데 항상 이랬던 게 아니다.</p>
<p>약 1억 년 전 백악기. 북극 평균 기온이 약 15°C였다. 서울 봄 날씨다. 남극에는 숲이 있었고, 공룡이 살았다.</p>
<p>약 5,500만 년 전에는 PETM이라는 극고온기가 왔다. 북극해 수온이 23°C까지 올라갔다는 증거가 있다. 수영할 수 있는 수온이다.</p>
<p><strong>극지방이 얼어붙은 건 지구 역사에서 오히려 최근 일이다.</strong></p>`,
  },
  {
    slug: "earth-day-shorter",
    title: "지구의 하루 길이는 수십억 년 전보다 길어졌다",
    category: "dinosaur",
    date: "2026-03-20",
    summary: "14억 년 전 하루: 약 18시간. 현재: 24시간. 달의 조석력 때문에 점점 느려지고 있다.",
    tags: ["하루길이", "자전", "조석력", "달", "18시간"],
    relatedSlugs: ["moon-closer", "venus-day"],
    timeline: [
      { year: "약 45억 년 전", label: "지구 형성 (하루 약 4~6시간)" },
      { year: "약 14억 년 전", label: "하루 약 18시간", highlight: true },
      { year: "약 6억 2천만 년 전", label: "하루 약 21시간" },
      { year: "현재", label: "하루 24시간 (매세기 약 2ms 증가)", highlight: true },
    ],
    content: `<p>하루가 24시간인 건 영원불변의 진리 같지만, 아니다. 지구 초기에는 하루가 4~6시간이었다.</p>
<p>약 14억 년 전에는 18시간. 공룡 시대에는 약 23시간.</p>
<p>왜 길어지냐고? 달 때문이다. 달의 중력(조석력)이 지구 자전에 브레이크를 건다. 매세기 약 2밀리초씩 느려지고 있다.</p>
<p><strong>공룡은 우리보다 하루가 1시간 짧았다. 같은 지구인데.</strong></p>`,
  },
  {
    slug: "volcano-climate",
    title: "화산 폭발은 지구 기후를 단기간 변화시킬 수 있다",
    category: "dinosaur",
    date: "2026-03-20",
    summary: "탐보라 화산 폭발: 1815년. 이듬해 1816년 '여름 없는 해' 발생. 전 세계 기온 급락.",
    tags: ["화산", "탐보라", "여름없는해", "1816년", "기후변화"],
    relatedSlugs: ["polar-warmth", "sahara-pyramid"],
    timeline: [
      { year: "약 7만 4천 년 전", label: "토바 화산 폭발 (인류 거의 멸종 위기)" },
      { year: "79년", label: "베수비오 화산 폭발 (폼페이 매몰)" },
      { year: "1815년", label: "탐보라 화산 폭발 (역사상 최대)", highlight: true },
      { year: "1816년", label: "'여름 없는 해' — 전 세계 기온 급락", highlight: true },
      { year: "1991년", label: "피나투보 화산 폭발 (전 세계 기온 0.5°C 하락)" },
    ],
    content: `<p>1815년 4월. 인도네시아 탐보라 화산이 터졌다. 역사 기록상 가장 큰 화산 폭발이다. 폭발음이 2,600km 밖까지 들렸다.</p>
<p>이듬해인 1816년. 유럽과 북미에 여름이 오지 않았다. 6월에 눈이 내렸다. 농작물이 전멸해서 대기근이 발생했다. '여름 없는 해'라 불린다.</p>
<p>화산재와 이산화황이 성층권을 뒤덮어 햇빛을 차단한 거다.</p>
<p><strong>화산 한 번이 지구 전체 기후를 바꿨다.</strong></p>`,
  },
  {
    slug: "internet-military",
    title: "인터넷은 군사 연구에서 시작됐다",
    category: "invention",
    date: "2026-03-20",
    summary: "ARPANET 첫 전송: 1969년. 미 국방부 프로젝트에서 시작. 지금은 80억 인구가 쓴다.",
    tags: ["인터넷", "ARPANET", "국방부", "1969년", "TCP/IP"],
    relatedSlugs: ["creditcard-before-internet", "gps-military"],
    timeline: [
      { year: "1958년", label: "ARPA(방위고등연구계획국) 설립" },
      { year: "1969년 10월", label: "ARPANET 첫 데이터 전송", highlight: true },
      { year: "1983년", label: "TCP/IP 프로토콜 도입 (인터넷 탄생)" },
      { year: "1991년", label: "월드와이드웹(WWW) 공개", highlight: true },
      { year: "2026년", label: "전 세계 인터넷 사용자 약 55억 명" },
    ],
    content: `<p>1969년 10월 29일. UCLA 컴퓨터에서 스탠퍼드 컴퓨터로 메시지를 보냈다. 보내려던 단어는 "LOGIN". 근데 "LO"까지만 전송하고 시스템이 뻗었다.</p>
<p>이게 인터넷의 시작이다. ARPANET. 미 국방부 산하 ARPA가 핵전쟁에도 통신이 유지되는 네트워크를 만들려고 시작한 프로젝트였다.</p>
<p>1991년에 팀 버너스리가 WWW을 공개하면서 폭발적으로 퍼졌다.</p>
<p><strong>핵전쟁 대비용으로 만든 게 고양이 영상 보는 데 쓰이고 있다.</strong></p>`,
  },
  {
    slug: "gps-military",
    title: "GPS는 원래 군사용으로 개발됐다",
    category: "invention",
    date: "2026-03-20",
    summary: "GPS 개발 시작: 1973년. 민간 개방: 1983년. 완전 개방: 2000년. 원래는 미사일용이었다.",
    tags: ["GPS", "군사", "위성", "1973년", "항법", "레이건"],
    relatedSlugs: ["internet-military", "creditcard-before-internet"],
    timeline: [
      { year: "1957년", label: "소련 스푸트니크 발사 (위성 신호로 위치 추적 아이디어)" },
      { year: "1973년", label: "미 국방부, GPS 프로젝트 시작", highlight: true },
      { year: "1978년", label: "첫 GPS 위성 발사" },
      { year: "1983년", label: "대한항공 007편 격추 → 레이건, GPS 민간 개방 결정", highlight: true },
      { year: "2000년", label: "클린턴, GPS 정밀도 제한 해제 (완전 민간 개방)", highlight: true },
    ],
    content: `<p>GPS. 지금은 배달앱에서 치킨 위치 추적하는 데 쓰지만, 원래는 미사일이 목표물을 정확히 때리라고 만든 거다.</p>
<p>1973년 미 국방부가 개발을 시작했다. 위성 24개로 지구 어디서든 위치를 잡는 시스템.</p>
<p>민간에 열린 건 1983년. 대한항공 007편이 소련 영공을 침범해 격추당한 사건 때문이다. 레이건 대통령이 "민간 항공기도 GPS를 쓸 수 있게 하라"고 했다.</p>
<p><strong>비극적 사건이 기술 개방의 계기가 됐다.</strong></p>`,
  },
  {
    slug: "microwave-radar",
    title: "전자레인지는 레이더 기술에서 우연히 발견됐다",
    category: "invention",
    date: "2026-03-20",
    summary: "퍼시 스펜서, 레이더 앞에서 초콜릿이 녹는 걸 발견: 1945년. 최초 전자레인지: 1947년.",
    tags: ["전자레인지", "레이더", "마이크로파", "1945년", "퍼시스펜서"],
    relatedSlugs: ["internet-military", "gps-military"],
    timeline: [
      { year: "1940년", label: "영국, 레이더용 마그네트론 개발" },
      { year: "1945년", label: "퍼시 스펜서, 마이크로파로 초콜릿 녹는 현상 발견", highlight: true },
      { year: "1947년", label: "최초 전자레인지 'Radarange' 출시 (냉장고 크기, $5,000)", highlight: true },
      { year: "1967년", label: "가정용 전자레인지 $500 이하로 보급" },
      { year: "현재", label: "전 세계 가정 90% 이상 보유" },
    ],
    content: `<p>1945년. 미국 레이시온 사의 엔지니어 퍼시 스펜서가 레이더 장비 앞에서 일하고 있었다. 근데 주머니에 넣어둔 초콜릿 바가 녹아 있었다.</p>
<p>보통은 "아 짜증" 하고 말 텐데, 이 사람은 달랐다. "어라? 마이크로파가 음식을 데울 수 있나?"</p>
<p>옥수수를 갖다 놓았더니 팝콘이 튀었다. 달걀을 놓았더니 폭발했다. (진짜로)</p>
<p>1947년에 첫 전자레인지가 나왔다. 근데 냉장고만 하고 가격이 5,000달러였다. 지금 돈으로 7만 달러 넘는다.</p>
<p><strong>전쟁 기술에서 탄생한 가전제품. 우연이 세상을 바꿨다.</strong></p>`,
  },
  {
    slug: "mouse-before-pc",
    title: "컴퓨터 마우스는 개인용 컴퓨터보다 먼저 만들어졌다",
    category: "invention",
    date: "2026-03-20",
    summary: "마우스 발명: 1964년. PC 대중화(IBM PC): 1981년. 17년 차이.",
    tags: ["마우스", "더글라스엥겔바트", "PC", "1964년", "GUI"],
    relatedSlugs: ["creditcard-before-internet", "battery-before-lightbulb"],
    timeline: [
      { year: "1964년", label: "더글라스 엥겔바트, 마우스 프로토타입 제작", highlight: true },
      { year: "1968년", label: "'모든 데모의 어머니' 발표 (마우스 공개 시연)" },
      { year: "1981년", label: "IBM PC 출시", highlight: true },
      { year: "1984년", label: "애플 매킨토시 (마우스 기반 GUI 대중화)" },
      { year: "현재", label: "터치스크린에 밀리는 중" },
    ],
    content: `<p>1964년. 더글라스 엥겔바트가 나무 상자에 바퀴 두 개를 달아서 만든 게 최초의 마우스다. 이름이 마우스인 이유? 전선이 뒤에 달려서 쥐처럼 보여서.</p>
<p>근데 이걸 쓸 PC가 없었다. 당시 컴퓨터는 방 하나를 차지하는 괴물이었다.</p>
<p>IBM PC가 나온 건 1981년. 마우스가 진짜로 쓸모있어진 건 1984년 매킨토시부터다.</p>
<p><strong>마우스가 먼저 나오고, 쓸 컴퓨터가 17년 뒤에 나왔다.</strong></p>`,
  },
  {
    slug: "digital-camera-1975",
    title: "디지털 카메라는 1975년에 이미 만들어졌다",
    category: "invention",
    date: "2026-03-20",
    summary: "코닥 엔지니어 스티브 사슨, 최초 디지털 카메라 제작: 1975년. 해상도 0.01 메가픽셀.",
    tags: ["디지털카메라", "코닥", "1975년", "필름", "스티브사슨"],
    relatedSlugs: ["mouse-before-pc", "battery-before-lightbulb"],
    timeline: [
      { year: "1975년", label: "코닥, 최초 디지털 카메라 제작 (0.01MP)", highlight: true },
      { year: "1981년", label: "소니, 전자 스틸 카메라 '마비카' 발표" },
      { year: "1990년대", label: "디지털 카메라 상용화 시작" },
      { year: "2004년경", label: "디지털 카메라 판매량, 필름 카메라 추월", highlight: true },
      { year: "2012년", label: "코닥 파산 신청" },
    ],
    content: `<p>1975년. 코닥의 엔지니어 스티브 사슨이 세계 최초의 디지털 카메라를 만들었다. 토스터만 한 크기. 무게 3.6kg. 해상도 0.01 메가픽셀. 사진 한 장 찍는 데 23초.</p>
<p>사슨이 이걸 코닥 경영진한테 보여줬더니? "재밌는 기술이네. 근데 필름이 있는데 누가 이걸 쓰겠어."</p>
<p>결과? 2012년 코닥은 파산했다. 자기가 만든 기술에 자기가 죽은 거다.</p>
<p><strong>디지털 카메라를 최초로 만든 회사가, 디지털 시대를 거부하다가 망했다.</strong></p>`,
  },
  {
    slug: "youtube-before-iphone",
    title: "유튜브는 아이폰보다 먼저 등장했다",
    category: "invention",
    date: "2026-03-20",
    summary: "유튜브 설립: 2005년. 아이폰 출시: 2007년. 2년 차이. 스마트폰 없이 시작한 영상 플랫폼.",
    tags: ["유튜브", "아이폰", "2005년", "2007년", "스마트폰"],
    relatedSlugs: ["digital-camera-1975", "creditcard-before-internet"],
    timeline: [
      { year: "2005년 2월", label: "유튜브 설립", highlight: true },
      { year: "2005년 4월", label: "유튜브 첫 영상 업로드 ('Me at the Zoo')" },
      { year: "2006년 10월", label: "구글, 유튜브 인수 (16.5억 달러)" },
      { year: "2007년 6월", label: "아이폰 출시", highlight: true },
      { year: "현재", label: "유튜브 월간 사용자 약 25억 명" },
    ],
    content: `<p>2005년. 세 명의 전 페이팔 직원이 유튜브를 만들었다. 원래 데이팅 사이트로 기획했다가 방향을 틀었다는 얘기도 있다.</p>
<p>첫 영상은 2005년 4월 23일. 'Me at the Zoo'. 동물원에서 찍은 18초짜리 영상이다. 지금 봐도 올라와 있다.</p>
<p>근데 그때는 아이폰이 없었다. 영상은 디지캠이나 웹캠으로 찍었다. 스마트폰으로 바로 찍어 올리는 건 2007년 아이폰 이후다.</p>
<p><strong>스마트폰 없이 시작한 영상 플랫폼이 지금 세계 2위 검색엔진이다.</strong></p>`,
  },
  {
    slug: "wifi-1997",
    title: "Wi-Fi는 1997년에 상용화됐다",
    category: "invention",
    date: "2026-03-20",
    summary: "IEEE 802.11 표준 발표: 1997년. 초기 속도 2Mbps. Wi-Fi 브랜드명 등장: 1999년.",
    tags: ["Wi-Fi", "무선인터넷", "1997년", "802.11", "무선통신"],
    relatedSlugs: ["internet-military", "youtube-before-iphone"],
    timeline: [
      { year: "1991년", label: "NCR/AT&T, 무선 LAN 제품 출시" },
      { year: "1997년", label: "IEEE 802.11 표준 발표 (2Mbps)", highlight: true },
      { year: "1999년", label: "'Wi-Fi' 브랜드명 등장, 802.11b (11Mbps)", highlight: true },
      { year: "2003년", label: "802.11g (54Mbps), 카페 와이파이 보급" },
      { year: "현재", label: "Wi-Fi 7 (최대 46Gbps)" },
    ],
    content: `<p>1997년. IEEE에서 802.11이라는 무선 네트워크 표준을 발표했다. 속도는 2Mbps. 지금 기준으로는 말도 안 되게 느리다.</p>
<p>'Wi-Fi'라는 이름이 붙은 건 1999년이다. 'Wireless Fidelity'의 약자라고 알려져 있지만, 사실 그냥 마케팅용 이름이다. 의미 없다.</p>
<p>2003년쯤부터 카페에서 와이파이가 되기 시작했다. 그때 "와이파이 되는 카페"가 경쟁력이었다.</p>
<p><strong>1997년에 2Mbps로 시작한 기술이 지금은 46Gbps까지 왔다. 23,000배.</strong></p>`,
  },
  // ── people 카테고리 추가 (13개) ──
  {
    slug: "newton-gogh-not-contemporary",
    title: "뉴턴과 고흐는 동시대 사람이 아니다 — 100년 이상 차이",
    category: "people",
    date: "2026-03-21",
    summary: "뉴턴(1643~1727), 고흐(1853~1890). 126년 차이. 뉴턴이 죽고 126년 뒤에 고흐가 태어났다.",
    tags: ["뉴턴", "고흐", "시간감각", "동시대아님", "과학", "예술"],
    relatedSlugs: ["yisunsin-shakespeare", "napoleon-beethoven"],
    timeline: [
      { year: "1643년", label: "아이작 뉴턴 출생", highlight: true },
      { year: "1687년", label: "뉴턴, 프린키피아 출판" },
      { year: "1727년", label: "뉴턴 사망", highlight: true },
      { year: "1853년", label: "빈센트 반 고흐 출생", highlight: true },
      { year: "1888년", label: "고흐, '별이 빛나는 밤' 시기" },
      { year: "1890년", label: "고흐 사망" },
    ],
    content: `<p>뉴턴: 1643~1727. 고흐: 1853~1890.</p>
<p><strong>뉴턴이 죽고 126년 뒤에 고흐가 태어났다.</strong></p>
<p>뉴턴은 만유인력을 발견한 과학자. 고흐는 별이 빛나는 밤을 그린 화가. 둘 다 유명하지만, 같은 시대 사람이 아니다.</p>`,
  },
  {
    slug: "lincoln-darwin-same-birthday",
    title: "링컨과 다윈은 같은 날 태어났다 — 1809년 2월 12일",
    category: "people",
    date: "2026-03-21",
    summary: "에이브러햄 링컨과 찰스 다윈. 둘 다 1809년 2월 12일생. 같은 날, 다른 대륙.",
    tags: ["링컨", "다윈", "1809년", "같은생일", "미국", "영국"],
    relatedSlugs: ["chaplin-hitler", "napoleon-beethoven"],
    timeline: [
      { year: "1809년 2월 12일", label: "링컨 출생 (미국 켄터키) / 다윈 출생 (영국 슈루즈버리)", highlight: true },
      { year: "1831년", label: "다윈, 비글호 항해 출발" },
      { year: "1859년", label: "다윈, '종의 기원' 출판" },
      { year: "1861년", label: "링컨, 미국 대통령 취임" },
      { year: "1865년", label: "링컨 암살", highlight: true },
      { year: "1882년", label: "다윈 사망" },
    ],
    content: `<p>1809년 2월 12일. 같은 날, 두 사람이 태어났다.</p>
<p>하나는 미국 켄터키의 통나무집에서. <strong>에이브러햄 링컨.</strong></p>
<p>하나는 영국 슈루즈버리의 부유한 집에서. <strong>찰스 다윈.</strong></p>
<p>링컨은 노예를 해방했다. 다윈은 종의 기원을 썼다. 둘 다 세상을 바꿨다.</p>`,
  },
  {
    slug: "monroe-queen-same-age",
    title: "마릴린 먼로와 엘리자베스 2세는 동갑이다 — 둘 다 1926년생",
    category: "people",
    date: "2026-03-21",
    summary: "마릴린 먼로: 1926년 6월 1일. 엘리자베스 2세: 1926년 4월 21일. 동갑.",
    tags: ["마릴린먼로", "엘리자베스2세", "1926년", "동갑", "할리우드", "영국왕실"],
    relatedSlugs: ["chaplin-hitler", "anne-frank-mlk"],
    timeline: [
      { year: "1926년 4월", label: "엘리자베스 2세 출생 (런던)", highlight: true },
      { year: "1926년 6월", label: "마릴린 먼로 출생 (로스앤젤레스)", highlight: true },
      { year: "1952년", label: "엘리자베스 2세 즉위" },
      { year: "1953년", label: "먼로, '신사는 금발을 좋아해' 개봉" },
      { year: "1962년", label: "먼로 사망 (36세)", highlight: true },
      { year: "2022년", label: "엘리자베스 2세 사망 (96세)" },
    ],
    content: `<p>마릴린 먼로: 1926년 6월 1일. 엘리자베스 2세: 1926년 4월 21일.</p>
<p><strong>동갑이다.</strong> 40일 차이.</p>
<p>1953년. 엘리자베스 2세가 대관식을 올렸다. 같은 해 먼로가 '신사는 금발을 좋아해'로 스타가 됐다.</p>
<p>먼로는 36살에 죽었다. 여왕은 96살까지 살았다.</p>`,
  },
  {
    slug: "hitler-stalin-contemporary",
    title: "히틀러와 스탈린은 동시대 사람이다",
    category: "people",
    date: "2026-03-21",
    summary: "히틀러: 1889년생. 스탈린: 1878년생. 11살 차이. 둘 다 1945년에 끝났다.",
    tags: ["히틀러", "스탈린", "동시대인", "제2차세계대전", "독재자"],
    relatedSlugs: ["chaplin-hitler", "lincoln-ripper"],
    timeline: [
      { year: "1878년", label: "이오시프 스탈린 출생 (조지아 고리)", highlight: true },
      { year: "1889년", label: "아돌프 히틀러 출생 (오스트리아 브라우나우)", highlight: true },
      { year: "1933년", label: "히틀러, 독일 총리 취임" },
      { year: "1939년", label: "독소 불가침 조약 / 제2차 세계대전 발발" },
      { year: "1941년", label: "독일의 소련 침공 (바르바로사 작전)" },
      { year: "1945년", label: "히틀러 자살 / 독일 항복", highlight: true },
      { year: "1953년", label: "스탈린 사망" },
    ],
    content: `<p>스탈린: 1878년생. 히틀러: 1889년생. <strong>11살 차이.</strong></p>
<p>1939년. 둘은 불가침 조약을 맺었다. 1941년. 히틀러가 그걸 깨고 소련을 침공했다.</p>
<p>1945년 4월 30일. 히틀러 자살. 같은 해 소련이 베를린을 점령했다.</p>`,
  },
  {
    slug: "freud-einstein-letters",
    title: "프로이트와 아인슈타인은 실제로 편지를 주고받았다",
    category: "people",
    date: "2026-03-21",
    summary: "1932년, 아인슈타인이 프로이트에게 편지를 보냈다. 주제는 '전쟁은 왜 일어나는가'.",
    tags: ["프로이트", "아인슈타인", "편지", "1932년", "전쟁과평화"],
    relatedSlugs: ["napoleon-beethoven", "lincoln-darwin-same-birthday"],
    timeline: [
      { year: "1856년", label: "지그문트 프로이트 출생", highlight: true },
      { year: "1879년", label: "알베르트 아인슈타인 출생", highlight: true },
      { year: "1905년", label: "아인슈타인, 특수상대성이론 발표" },
      { year: "1932년", label: "아인슈타인 → 프로이트 서신 교환 ('전쟁은 왜?')", highlight: true },
      { year: "1939년", label: "프로이트 사망 (런던)" },
      { year: "1955년", label: "아인슈타인 사망 (프린스턴)" },
    ],
    content: `<p>1932년. 국제연맹의 요청으로 아인슈타인이 프로이트에게 편지를 보냈다.</p>
<p><strong>"인간을 전쟁의 멸망에서 구할 방법이 있습니까?"</strong></p>
<p>프로이트가 답장했다. 인간 안의 파괴 본능에 대해, 그리고 문명이 그것을 억제하는 과정에 대해 썼다.</p>
<p>이 서신은 '왜 전쟁인가(Why War?)'라는 제목으로 출판됐다.</p>`,
  },
  {
    slug: "mozart-american-independence",
    title: "모차르트와 미국 독립은 같은 시대다",
    category: "people",
    date: "2026-03-21",
    summary: "모차르트: 1756~1791. 미국 독립선언: 1776년. 모차르트 20살 때 미국이 독립했다.",
    tags: ["모차르트", "미국독립", "1776년", "같은시대", "18세기"],
    relatedSlugs: ["napoleon-beethoven", "columbus-davinci"],
    timeline: [
      { year: "1756년", label: "볼프강 아마데우스 모차르트 출생 (잘츠부르크)", highlight: true },
      { year: "1773년", label: "보스턴 차 사건" },
      { year: "1776년", label: "미국 독립선언", highlight: true },
      { year: "1787년", label: "모차르트, 오페라 '돈 조반니' 초연" },
      { year: "1789년", label: "프랑스 혁명" },
      { year: "1791년", label: "모차르트 사망 (35세)", highlight: true },
    ],
    content: `<p>모차르트: 1756년생. 미국 독립선언: 1776년.</p>
<p><strong>모차르트가 20살 때 미국이 독립했다.</strong></p>
<p>모차르트가 피가로의 결혼을 작곡하던 1786년, 미국은 독립 10주년이었다.</p>
<p>모차르트 사망: 1791년. 프랑스 혁명이 한창이던 때.</p>`,
  },
  {
    slug: "nightingale-edison-contemporary",
    title: "나이팅게일과 에디슨은 동시대 사람이다",
    category: "people",
    date: "2026-03-21",
    summary: "나이팅게일: 1820~1910. 에디슨: 1847~1931. 63년간 동시대를 살았다.",
    tags: ["나이팅게일", "에디슨", "동시대인", "19세기", "빅토리아시대"],
    relatedSlugs: ["lincoln-darwin-same-birthday", "napoleon-beethoven"],
    timeline: [
      { year: "1820년", label: "플로렌스 나이팅게일 출생", highlight: true },
      { year: "1847년", label: "토머스 에디슨 출생", highlight: true },
      { year: "1854년", label: "나이팅게일, 크림전쟁 간호 활동" },
      { year: "1879년", label: "에디슨, 실용적 전구 발명" },
      { year: "1910년", label: "나이팅게일 사망 (90세)", highlight: true },
      { year: "1931년", label: "에디슨 사망 (84세)" },
    ],
    content: `<p>나이팅게일: 1820~1910. 에디슨: 1847~1931.</p>
<p><strong>63년간 같은 시대를 살았다.</strong></p>
<p>1854년. 나이팅게일이 크림전쟁에서 램프를 들고 병동을 돌았다. 25년 뒤인 1879년, 에디슨이 전구를 발명했다.</p>`,
  },
  {
    slug: "shakespeare-galileo-same-year",
    title: "셰익스피어와 갈릴레오는 동갑이다 — 둘 다 1564년생",
    category: "people",
    date: "2026-03-21",
    summary: "셰익스피어: 1564년 4월생. 갈릴레오: 1564년 2월생. 2개월 차이.",
    tags: ["셰익스피어", "갈릴레오", "1564년", "동갑", "르네상스"],
    relatedSlugs: ["yisunsin-shakespeare", "columbus-davinci"],
    timeline: [
      { year: "1564년 2월", label: "갈릴레오 갈릴레이 출생 (피사)", highlight: true },
      { year: "1564년 4월", label: "윌리엄 셰익스피어 출생 (스트랫퍼드)", highlight: true },
      { year: "1609년", label: "갈릴레오, 망원경으로 목성의 위성 관측" },
      { year: "1611년", label: "셰익스피어, '템페스트' 집필" },
      { year: "1616년", label: "셰익스피어 사망", highlight: true },
      { year: "1642년", label: "갈릴레오 사망" },
    ],
    content: `<p>갈릴레오: 1564년 2월 15일. 셰익스피어: 1564년 4월 26일.</p>
<p><strong>동갑이다.</strong> 2개월 차이.</p>
<p>갈릴레오는 망원경으로 하늘을 봤다. 셰익스피어는 펜으로 인간을 봤다.</p>
<p>셰익스피어 사망: 1616년. 갈릴레오는 26년을 더 살며 종교재판을 받았다.</p>`,
  },
  {
    slug: "mao-anne-frank-contemporary",
    title: "마오쩌둥과 안네 프랑크는 동시대 사람이다",
    category: "people",
    date: "2026-03-21",
    summary: "마오쩌둥: 1893년생. 안네 프랑크: 1929년생. 안네 프랑크가 숨어살던 시기, 마오쩌둥은 중국을 바꾸고 있었다.",
    tags: ["마오쩌둥", "안네프랑크", "동시대인", "제2차세계대전", "중국"],
    relatedSlugs: ["anne-frank-mlk", "hitler-stalin-contemporary"],
    timeline: [
      { year: "1893년", label: "마오쩌둥 출생 (후난성)", highlight: true },
      { year: "1929년", label: "안네 프랑크 출생 (프랑크푸르트)", highlight: true },
      { year: "1942년", label: "안네 프랑크, 은신 시작 / 일기 집필" },
      { year: "1945년", label: "안네 프랑크 사망 (베르겐벨젠 수용소)", highlight: true },
      { year: "1949년", label: "마오쩌둥, 중화인민공화국 수립" },
      { year: "1976년", label: "마오쩌둥 사망" },
    ],
    content: `<p>마오쩌둥: 1893년생. 안네 프랑크: 1929년생.</p>
<p>1942~1944년. 안네 프랑크가 암스테르담 다락방에서 일기를 쓰고 있었다.</p>
<p><strong>같은 시기, 마오쩌둥은 옌안에서 중국 공산당을 이끌고 있었다.</strong></p>
<p>안네 프랑크 사망: 1945년. 4년 뒤인 1949년, 마오쩌둥이 중화인민공화국을 선포했다.</p>`,
  },
  {
    slug: "gogh-eiffel-tower",
    title: "반 고흐가 죽던 해에 에펠탑이 막 완성됐다",
    category: "people",
    date: "2026-03-21",
    summary: "에펠탑 완공: 1889년. 반 고흐 사망: 1890년. 1년 차이.",
    tags: ["반고흐", "에펠탑", "1889년", "1890년", "파리", "시간감각"],
    relatedSlugs: ["newton-gogh-not-contemporary", "napoleon-beethoven"],
    timeline: [
      { year: "1853년", label: "빈센트 반 고흐 출생 (네덜란드)", highlight: true },
      { year: "1886년", label: "고흐, 파리에서 활동" },
      { year: "1889년 3월", label: "에펠탑 완공 (파리 만국박람회)", highlight: true },
      { year: "1889년 6월", label: "고흐, '별이 빛나는 밤' 제작" },
      { year: "1890년 7월", label: "고흐 사망 (37세)", highlight: true },
    ],
    content: `<p>1889년. 파리 만국박람회를 위해 에펠탑이 완공됐다.</p>
<p>같은 해. 고흐는 생레미 정신병원에서 '별이 빛나는 밤'을 그렸다.</p>
<p><strong>1년 뒤인 1890년 7월, 고흐가 죽었다.</strong></p>`,
  },
  {
    slug: "genghis-khan-davinci-not-contemporary",
    title: "칭기즈칸과 레오나르도 다빈치는 200년 이상 차이 난다",
    category: "people",
    date: "2026-03-21",
    summary: "칭기즈칸 사망: 1227년. 다빈치 출생: 1452년. 225년 차이.",
    tags: ["칭기즈칸", "다빈치", "동시대아님", "몽골", "르네상스"],
    relatedSlugs: ["newton-gogh-not-contemporary", "columbus-davinci"],
    timeline: [
      { year: "1162년경", label: "칭기즈칸 출생", highlight: true },
      { year: "1206년", label: "몽골 제국 건국" },
      { year: "1227년", label: "칭기즈칸 사망", highlight: true },
      { year: "1452년", label: "레오나르도 다빈치 출생", highlight: true },
      { year: "1503년", label: "다빈치, 모나리자 제작 시작" },
      { year: "1519년", label: "다빈치 사망" },
    ],
    content: `<p>칭기즈칸 사망: 1227년. 다빈치 출생: 1452년.</p>
<p><strong>225년 차이.</strong></p>
<p>칭기즈칸이 유라시아를 정복하던 시대와, 다빈치가 모나리자를 그리던 시대 사이에 200년이 넘게 있다.</p>`,
  },
  {
    slug: "cleopatra-caesar-met",
    title: "클레오파트라와 카이사르는 실제로 만났다",
    category: "people",
    date: "2026-03-21",
    summary: "기원전 48년. 클레오파트라가 카이사르를 만났다. 아들도 낳았다.",
    tags: ["클레오파트라", "카이사르", "실제만남", "이집트", "로마"],
    relatedSlugs: ["cleopatra-pyramid", "genghis-khan-davinci-not-contemporary"],
    timeline: [
      { year: "기원전 100년", label: "율리우스 카이사르 출생", highlight: true },
      { year: "기원전 69년", label: "클레오파트라 7세 출생", highlight: true },
      { year: "기원전 48년", label: "클레오파트라, 카이사르와 만남 (알렉산드리아)", highlight: true },
      { year: "기원전 47년", label: "아들 카이사리온 출생" },
      { year: "기원전 44년", label: "카이사르 암살 (로마 원로원)" },
      { year: "기원전 30년", label: "클레오파트라 사망" },
    ],
    content: `<p>기원전 48년. 클레오파트라는 카이사르를 만나기 위해 양탄자에 몸을 숨겨 궁전에 들어갔다고 전해진다.</p>
<p><strong>둘은 연인이 됐고, 아들 카이사리온을 낳았다.</strong></p>
<p>기원전 44년. 카이사르가 원로원에서 암살당했다. 클레오파트라는 이후 마르쿠스 안토니우스와 동맹을 맺었다.</p>`,
  },
  {
    slug: "napoleon-not-short",
    title: "나폴레옹은 생각보다 키가 작지 않았다 — 당시 기준 평균",
    category: "people",
    date: "2026-03-21",
    summary: "나폴레옹 키: 약 170cm. 당시 프랑스 남성 평균: 164~168cm. 오히려 평균 이상.",
    tags: ["나폴레옹", "키", "오해", "역사상식", "프랑스"],
    relatedSlugs: ["napoleon-beethoven", "lincoln-darwin-same-birthday"],
    timeline: [
      { year: "1769년", label: "나폴레옹 출생", highlight: true },
      { year: "1799년", label: "나폴레옹, 프랑스 제1통령 취임" },
      { year: "1804년", label: "황제 즉위" },
      { year: "1815년", label: "워털루 전투 패배" },
      { year: "1821년", label: "나폴레옹 사망 (세인트헬레나)", highlight: true },
    ],
    content: `<p>나폴레옹의 키: 약 5피트 2인치. 이건 <strong>프랑스 단위</strong>다.</p>
<p>프랑스 피트는 영국 피트보다 길다. 영국 단위로 환산하면 약 5피트 7인치, <strong>약 170cm</strong>다.</p>
<p>당시 프랑스 남성 평균: 164~168cm. 나폴레옹은 오히려 평균 이상이었다.</p>`,
  },
  // ── space 카테고리 추가 (9개) ──
  {
    slug: "sunlight-8-minutes",
    title: "태양 빛이 지구에 도달하는 데 8분 걸린다",
    category: "space",
    date: "2026-03-21",
    summary: "태양에서 지구까지 약 1억 5천만 km. 빛의 속도로 8분 20초.",
    tags: ["태양", "빛", "8분", "거리", "광속"],
    relatedSlugs: ["proxima-centauri-4years", "moon-moving-away"],
    timeline: [
      { year: "0초", label: "태양 표면에서 빛 출발", highlight: true },
      { year: "1.3초", label: "달까지 도달" },
      { year: "8분 20초", label: "지구에 도달", highlight: true },
      { year: "약 4시간", label: "해왕성까지 도달" },
      { year: "약 5.5시간", label: "명왕성까지 도달" },
    ],
    content: `<p>태양에서 지구까지 약 1억 5천만 km.</p>
<p><strong>빛의 속도로 8분 20초.</strong></p>
<p>지금 보이는 햇빛은 8분 전에 태양을 떠난 빛이다. 만약 지금 태양이 사라진다면, 우리는 8분 동안 모른다.</p>`,
  },
  {
    slug: "proxima-centauri-4years",
    title: "가장 가까운 별까지 빛의 속도로 4.2년이다",
    category: "space",
    date: "2026-03-21",
    summary: "프록시마 센타우리: 약 4.24광년. 빛의 속도로 4년 넘게 걸린다.",
    tags: ["프록시마센타우리", "광년", "별", "우주거리", "항성"],
    relatedSlugs: ["sunlight-8-minutes", "voyager-still-flying"],
    timeline: [
      { year: "8분 20초", label: "태양 → 지구 (빛의 속도)" },
      { year: "5.5시간", label: "태양 → 명왕성 (빛의 속도)" },
      { year: "4.24년", label: "태양 → 프록시마 센타우리 (빛의 속도)", highlight: true },
      { year: "약 7만 3천 년", label: "보이저 1호 속도로 프록시마까지 도달 예상", highlight: true },
    ],
    content: `<p>태양에서 가장 가까운 별: 프록시마 센타우리. 약 4.24광년 거리.</p>
<p><strong>빛의 속도(초속 30만 km)로 4년 넘게 걸린다.</strong></p>
<p>보이저 1호 속도(시속 약 6만 km)로 가면 약 7만 3천 년이다.</p>`,
  },
  {
    slug: "iss-16-orbits",
    title: "국제우주정거장은 하루에 지구를 16바퀴 돈다",
    category: "space",
    date: "2026-03-21",
    summary: "ISS 고도: 약 408km. 속도: 시속 약 27,600km. 90분에 지구 한 바퀴.",
    tags: ["ISS", "국제우주정거장", "궤도", "우주", "속도"],
    relatedSlugs: ["sunlight-8-minutes", "voyager-still-flying"],
    timeline: [
      { year: "1998년", label: "ISS 최초 모듈 발사", highlight: true },
      { year: "2000년", label: "최초 장기 체류 시작" },
      { year: "매 90분", label: "지구 한 바퀴 (시속 27,600km)", highlight: true },
      { year: "하루", label: "16바퀴 = 일출 16번", highlight: true },
    ],
    content: `<p>ISS는 지상 약 408km 상공을 시속 약 27,600km로 날고 있다.</p>
<p><strong>90분에 지구 한 바퀴. 하루에 16바퀴.</strong></p>
<p>우주비행사들은 하루에 일출을 16번 본다.</p>`,
  },
  {
    slug: "mars-day-37min-longer",
    title: "화성의 하루는 지구보다 37분 길다",
    category: "space",
    date: "2026-03-21",
    summary: "화성의 자전 주기: 24시간 37분. 지구보다 37분 길다.",
    tags: ["화성", "하루", "자전", "솔", "행성비교"],
    relatedSlugs: ["jupiter-mass", "sunlight-8-minutes"],
    timeline: [
      { year: "24시간 0분", label: "지구의 하루", highlight: true },
      { year: "24시간 37분", label: "화성의 하루 (솔)", highlight: true },
      { year: "9시간 56분", label: "목성의 하루" },
      { year: "10시간 33분", label: "토성의 하루" },
    ],
    content: `<p>화성의 자전 주기: 24시간 37분. 이것을 '솔(sol)'이라고 부른다.</p>
<p><strong>지구보다 37분 길다.</strong> 놀랍도록 비슷하다.</p>
<p>NASA의 화성 탐사 팀은 실제로 '솔' 단위로 생활한 적이 있다. 매일 37분씩 밀리는 스케줄.</p>`,
  },
  {
    slug: "jupiter-mass",
    title: "목성은 태양계 다른 행성을 다 합친 것보다 질량이 크다",
    category: "space",
    date: "2026-03-21",
    summary: "목성 질량: 지구의 318배. 나머지 7개 행성 합친 것의 2.5배.",
    tags: ["목성", "질량", "태양계", "행성", "가스행성"],
    relatedSlugs: ["saturn-floats", "mars-day-37min-longer"],
    timeline: [
      { year: "지구", label: "질량 1 (기준)" },
      { year: "토성", label: "질량 95배" },
      { year: "목성", label: "질량 318배", highlight: true },
      { year: "나머지 7개 합계", label: "약 130배" },
      { year: "태양", label: "질량 33만 배", highlight: true },
    ],
    content: `<p>목성의 질량: 지구의 약 318배.</p>
<p>토성, 천왕성, 해왕성, 지구, 금성, 화성, 수성을 전부 합쳐도 목성의 절반이 안 된다.</p>
<p><strong>목성 하나가 나머지 전부의 2.5배다.</strong></p>`,
  },
  {
    slug: "saturn-floats",
    title: "토성의 밀도는 물보다 낮아서 이론적으로 물에 뜬다",
    category: "space",
    date: "2026-03-21",
    summary: "토성 밀도: 0.687 g/cm³. 물: 1.0 g/cm³. 토성이 더 가볍다.",
    tags: ["토성", "밀도", "물", "가스행성", "우주상식"],
    relatedSlugs: ["jupiter-mass", "mars-day-37min-longer"],
    timeline: [
      { year: "물", label: "밀도 1.0 g/cm³" },
      { year: "지구", label: "밀도 5.5 g/cm³" },
      { year: "목성", label: "밀도 1.33 g/cm³" },
      { year: "토성", label: "밀도 0.687 g/cm³", highlight: true },
    ],
    content: `<p>토성의 밀도: 0.687 g/cm³. 물의 밀도: 1.0 g/cm³.</p>
<p><strong>토성이 물보다 가볍다.</strong></p>
<p>만약 토성을 담글 만큼 거대한 욕조가 있다면, 이론적으로 토성은 뜬다.</p>
<p>물론 실제로는 불가능하다. 토성 지름이 약 12만 km니까.</p>`,
  },
  {
    slug: "moon-moving-away",
    title: "달은 매년 지구에서 3.8cm씩 멀어지고 있다",
    category: "space",
    date: "2026-03-21",
    summary: "달은 매년 3.8cm씩 지구에서 멀어진다. 아폴로 미션의 반사경으로 측정.",
    tags: ["달", "지구", "거리", "조석력", "아폴로"],
    relatedSlugs: ["sunlight-8-minutes", "iss-16-orbits"],
    timeline: [
      { year: "45억 년 전", label: "달 형성 (지구 충돌설)", highlight: true },
      { year: "1969년", label: "아폴로 11호, 달 표면에 반사경 설치", highlight: true },
      { year: "매년", label: "달, 지구에서 3.8cm 멀어짐", highlight: true },
      { year: "6억 년 후", label: "개기일식 불가능 (달이 너무 멀어져서)" },
    ],
    content: `<p>달은 매년 3.8cm씩 지구에서 멀어지고 있다.</p>
<p><strong>아폴로 우주비행사들이 달에 놓고 온 반사경에 레이저를 쏴서 측정한 값이다.</strong></p>
<p>원인: 조석력. 달의 중력이 바다를 당기고, 그 에너지가 달을 조금씩 밀어낸다.</p>`,
  },
  {
    slug: "voyager-still-flying",
    title: "보이저 1호는 1977년에 발사됐는데 아직 날아가고 있다",
    category: "space",
    date: "2026-03-21",
    summary: "1977년 발사. 현재 지구에서 약 240억 km. 인류가 만든 가장 먼 물체.",
    tags: ["보이저1호", "1977년", "태양계", "성간우주", "NASA"],
    relatedSlugs: ["proxima-centauri-4years", "sunlight-8-minutes"],
    timeline: [
      { year: "1977년 9월", label: "보이저 1호 발사", highlight: true },
      { year: "1979년", label: "목성 근접 비행" },
      { year: "1980년", label: "토성 근접 비행" },
      { year: "1990년", label: "'창백한 푸른 점' 사진 촬영" },
      { year: "2012년", label: "성간 우주 진입 (태양계 밖)", highlight: true },
      { year: "2026년", label: "여전히 신호 송신 중 (49년째)", highlight: true },
    ],
    content: `<p>1977년 9월 5일 발사. 49년째 날아가고 있다.</p>
<p><strong>현재 지구에서 약 240억 km.</strong> 빛의 속도로도 신호가 오는 데 22시간 넘게 걸린다.</p>
<p>2012년, 태양계를 벗어나 성간 우주에 진입했다. 인류가 만든 물체 중 가장 먼 곳에 있다.</p>`,
  },
  {
    slug: "blackhole-first-photo-2019",
    title: "블랙홀 사진이 처음 찍힌 건 2019년이다",
    category: "space",
    date: "2026-03-21",
    summary: "2019년 4월 10일. EHT 프로젝트가 M87 은하 중심 블랙홀 사진 공개. 인류 최초.",
    tags: ["블랙홀", "EHT", "2019년", "M87", "사건의지평선"],
    relatedSlugs: ["voyager-still-flying", "sunlight-8-minutes"],
    timeline: [
      { year: "1915년", label: "아인슈타인, 일반상대성이론 (블랙홀 예측)" },
      { year: "1967년", label: "'블랙홀'이라는 용어 처음 사용" },
      { year: "2017년 4월", label: "EHT, 전 세계 8개 망원경으로 동시 관측", highlight: true },
      { year: "2019년 4월", label: "M87 블랙홀 사진 최초 공개", highlight: true },
      { year: "2022년", label: "우리 은하 중심 블랙홀(Sgr A*) 사진 공개" },
    ],
    content: `<p>2019년 4월 10일. 인류가 처음으로 블랙홀의 사진을 봤다.</p>
<p><strong>M87 은하 중심의 초대질량 블랙홀.</strong> 지구에서 5,500만 광년 거리.</p>
<p>전 세계 8개 전파망원경을 연결해서 지구 크기의 가상 망원경(EHT)을 만들었다. 데이터 처리에만 2년 걸렸다.</p>`,
  },
];
