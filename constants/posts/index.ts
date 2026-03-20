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
<p>클레오파트라 → 지금: 약 2,050년.</p>
<blockquote>클레오파트라는 피라미드보다 우리한테 더 가깝다.</blockquote>`,
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
<blockquote>목판에 산줄기를 새기던 시기와, 땅속으로 기차가 달리던 시기가 2년 차이다.</blockquote>
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
<blockquote>티라노사우루스는 스테고사우루스보다 우리한테 더 가깝다.</blockquote>
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
<p>기자 대피라미드 건설: 기원전 2560년경. 피라미드가 완공되고도 <strong>800년 넘게</strong> 매머드가 살아 있었다.</p>
<blockquote>함무라비 법전이 쓰이던 시기에 랑겔 섬에서는 매머드가 걸어다니고 있었다.</blockquote>`,
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
<blockquote>옥스퍼드에서 라틴어 수업을 하고 있을 때, 아즈텍은 아직 존재하지 않았다.</blockquote>
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
<blockquote>세종대왕 사망: 1450년. 콜럼버스 출생: 1451년. 1년 차이.</blockquote>
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
<blockquote>이순신이 바다에서 싸우고 있을 때, 셰익스피어는 무대 위에 있었다.</blockquote>
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
<blockquote>6600만 년 전 소행성 충돌. 공룡은 멸종했다. 상어는 살아남았다.</blockquote>
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
<blockquote>전기로 문서를 보내는 기술이 나온 해에, 일본에는 사무라이가 있었다.</blockquote>
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
<blockquote>흑사병이 끝난 지 40년. 유럽은 인구를 못 채우고 있었고, 한반도에서는 새 왕조가 서고 있었다.</blockquote>
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
<blockquote>교토의 화투 가게와 590년 된 대제국이 같은 해에 존재했다.</blockquote>
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
<blockquote>킹은 23년을 더 살았다. 1963년 "I Have a Dream" 연설. 1968년 암살.</blockquote>
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
<blockquote>루크 스카이워커가 데스 스타를 파괴한 해에, 프랑스는 아직 기요틴을 쓰고 있었다.</blockquote>
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
<p>초기 하버드 커리큘럼은 신학, 라틴어, 고전 철학이었다. 미적분이 세상에 없었으니까.</p>
<blockquote>옥스퍼드는 1096년부터 강의 기록이 있다. 미적분보다 약 570년 앞선다.</blockquote>`,
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
<blockquote>고구려는 팽창하고 있었고, 로마는 무너지고 있었다. 같은 5세기 초.</blockquote>
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
<p>현존 세계 최고(最古) 금속활자 인쇄본. 유네스코 인정. 지금은 프랑스 국립도서관에 있다.</p>
<blockquote>대량 보급 시스템을 만든 건 구텐베르크 쪽이다. 하지만 먼저 찍은 건 고려였다.</blockquote>`,
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
<p>티라노사우루스(6800만 년 전)는 꽃이 피는 세상에서 살았다.</p>
<blockquote>같은 "공룡 시대"인데, 풍경 자체가 달랐다.</blockquote>`,
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
<p>2026년 현재 궤도의 약 39%를 돌았다. 반도 안 왔다.</p>
<blockquote>2006년 왜소행성으로 강등. 2015년 뉴호라이즌스가 처음 근접 촬영. 발견 85년 만이다.</blockquote>`,
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
<p><strong>호모 사피엔스: 12월 31일 밤 11시 52분.</strong></p>
<blockquote>피라미드부터 스마트폰까지. 기록된 인류 역사 전체가 자정 전 14초다.</blockquote>`,
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
<p>달에 먼저 갔다.</p>
<blockquote>아펜첼 이너로덴 주에서는 1991년까지 여성이 주 선거에 투표를 못 했다. 연방법원이 강제로 바꿨다.</blockquote>`,
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
<p>사막이 된 건 약 5000년 전. 대피라미드 건설은 약 4500년 전.</p>
<blockquote>차이가 500년이다. 피라미드를 세운 사람들의 몇 세대 전만 해도 사하라는 푸르렀다.</blockquote>`,
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
<blockquote>제목은 '영웅 교향곡'으로 바뀌었다.</blockquote>
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
<p>잭 더 리퍼: 1888년. 런던 화이트채플. <strong>23년 차이.</strong></p>
<blockquote>1865년에 태어난 사람이 23살 때 잭 더 리퍼 뉴스를 읽었을 수 있다.</blockquote>`,
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
<blockquote>히틀러는 이 영화를 두 번 봤다고 전해진다. 감상은 알려지지 않았다.</blockquote>
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
<p>1492년. 콜럼버스가 대서양을 건넜다. 다빈치는 밀라노에서 비행기계를 설계하고 있었다.</p>
<blockquote>콜럼버스 사망: 1506년. 그때 다빈치는 살아 있었다. 모나리자도 아직 완성 전이었다.</blockquote>`,
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
<p>936년 후삼국 통일. 그때도 바이킹은 영국과 프랑스 해안을 약탈하고 있었다.</p>
<blockquote>바이킹 시대 종료: 1066년 노르만 정복. 고려 건국으로부터 148년 뒤다.</blockquote>`,
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
<p>1431년. 잔 다르크 화형. 19세. 세종은 훈민정음을 구상하기 시작할 무렵이다.</p>
<blockquote>훈민정음 반포: 1446년. 잔 다르크가 죽은 지 15년 뒤.</blockquote>`,
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
<p>1789년. 정약용 문과 급제. 같은 해 프랑스 혁명.</p>
<blockquote>정약용 사망: 1836년. 미국 독립 60주년에 해당하는 해다.</blockquote>`,
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
<p>공룡은 멸종했다. 문어는 살아남았다. 심장 3개. 피는 파란색이다.</p>
<blockquote>상어는 약 4억 5천만 년 전부터 있었다. 문어보다도 선배다.</blockquote>`,
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
<p>에펠탑이 올라갈 때 전화는 이미 실용화돼 있었다.</p>
<blockquote>이 13년 사이에 백열전구(1879년)와 자동차(1886년)도 나왔다.</blockquote>`,
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
<p>한국 최초 영화 상영: 1903년. 동대문 한성전기회사 앞. 대한제국 시기. 고종은 황제였다.</p>
<blockquote>고종 사망: 1919년. 영화 발명 24년 뒤다.</blockquote>`,
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
<p>지금까지 약 20바퀴 돌았다. 공룡이 등장한 건 대략 1바퀴 전이다.</p>
<blockquote>공룡이 살던 시절, 태양은 은하의 반대편 어딘가에 있었다.</blockquote>`,
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
<p>자전 방향도 반대다. 금성에서는 태양이 서쪽에서 뜬다.</p>
<blockquote>원인은 확실하지 않다. 거대한 충돌이 자전을 뒤집었다는 설이 유력하다.</blockquote>`,
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
<p>초기 지구의 하루는 약 4~6시간이었다. 달은 지금보다 <strong>훨씬 크게</strong> 보였고, 조석 높이는 수백 미터에 달했다.</p>
<blockquote>지금도 매년 약 3.8cm씩 멀어지고 있다. 조석력 때문이다.</blockquote>`,
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
<p>그때 조선의 교통수단은 말과 가마였다.</p>
<blockquote>고종이 자동차를 처음 탄 건 1903년으로 알려져 있다.</blockquote>`,
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
<p><strong>조선이 새 나라를 세울 때, 유럽은 죽음의 후유증에서 겨우 일어나는 중이었다.</strong></p>
<blockquote>한쪽은 시작이었고, 한쪽은 재건이었다.</blockquote>`,
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
<p><strong>조선이 진짜 삶과 죽음 사이에서 싸울 때, 셰익스피어는 무대 위에서 그걸 물었다.</strong></p>
<blockquote>한쪽은 실전이었고, 한쪽은 무대였다. 근데 둘 다 같은 질문을 하고 있었다.</blockquote>`,
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
<p>구텐베르크가 활판인쇄를 완성한 건 1455년. <strong>고려보다 78년 늦다.</strong></p>
<blockquote>물론 구텐베르크의 인쇄술이 유럽을 바꾼 건 맞다. 근데 "최초"는 고려다.</blockquote>`,
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
<p><strong>조선이 서원에서 학문을 논할 때, 유럽은 신의 이름으로 서로를 죽이고 있었다.</strong></p>
<blockquote>어느 쪽이 더 발전했냐는 건 의미없다. 다만 시간은 같았다.</blockquote>`,
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
<p>1649년에는 찰스 1세의 목이 날아갔다. <strong>왕의 목을 잘랐다.</strong> 유럽에서 전례 없는 일이었다.</p>
<blockquote>비슷한 시기, 동서양 모두 왕이 흔들렸다. 방법은 달랐지만.</blockquote>`,
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
<p><strong>정조가 성을 쌓을 때, 세계는 왕 없는 나라를 만들고 있었다.</strong></p>
<blockquote>정조는 개혁군주였다. 근데 그가 꿈꾼 건 더 나은 왕조였지, 왕 없는 세상은 아니었다.</blockquote>`,
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
<p><strong>이웃 나라가 문을 열고 변화할 때, 조선은 문을 닫았다.</strong></p>
<blockquote>12년 뒤 조선은 결국 일본에 의해 강제로 문을 열었다. 강화도 조약(1876년).</blockquote>`,
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
<p><strong>우주의 비밀이 풀리던 해에, 한 나라의 주권이 무너졌다.</strong></p>
<blockquote>아인슈타인의 1905년은 빛났고, 대한제국의 1905년은 어두웠다. 같은 해다.</blockquote>`,
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
<p><strong>파리에서 철탑이 하늘을 찌를 때, 조선의 왕은 외국 공사관에 숨어서 커피를 마셨다.</strong></p>
<blockquote>커피 한 잔의 여유가 아니었다. 목숨을 건 피신이었다.</blockquote>`,
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
<p>한국에 파병까지 하면서도 자국민 식량을 배급으로 돌리고 있었던 거다.</p>
<blockquote>전쟁은 끝나도 전쟁의 그림자는 오래간다. 영국도, 한국도.</blockquote>`,
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
<p>711년에는 이베리아 반도(지금의 스페인)까지 먹었다. <strong>동쪽에서 신라가 통일하는 동안, 서쪽에서는 이슬람이 세계를 삼키고 있었다.</strong></p>
<blockquote>같은 시기에 동서양 모두 판이 뒤집혔다. 근데 교과서에선 따로 배운다.</blockquote>`,
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
<p><strong>백제가 바다 건너 문화를 전파하던 시기에, 유럽은 '암흑기'라 불리는 시대 한복판이었다.</strong></p>
<blockquote>한쪽은 문명을 수출하고, 한쪽은 문명이 무너지고 있었다.</blockquote>`,
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
<p><strong>상복 기간을 두고 싸우는 동안, 누군가는 우주의 법칙을 발견했다.</strong></p>
<blockquote>뭐가 맞고 틀리고의 문제는 아니다. 근데 이 시간차는 좀 씁쓸하다.</blockquote>`,
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
<p><strong>영화가 탄생한 바로 그 시기에, 대한제국이 출범했다.</strong></p>
<blockquote>한국에 영화가 처음 상영된 건 1903년, 동대문 근처였다고 한다.</blockquote>`,
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
<p><strong>독립을 외치는 와중에, 전염병까지 덮친 거다.</strong></p>
<blockquote>만세를 부르던 그 겨울, 기침 소리도 함께 울렸다.</blockquote>`,
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
<p><strong>한쪽은 재즈를 듣고, 한쪽은 독립을 꿈꿨다.</strong></p>
<blockquote>같은 지구 위에서 이렇게 다른 시간을 살았다.</blockquote>`,
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
<p><strong>생명의 설계도가 밝혀진 해에, 수백만 명의 생명이 스러진 전쟁이 멈췄다.</strong></p>
<blockquote>1953년. 누군가는 생명을 해독했고, 누군가는 생명을 잃었다.</blockquote>`,
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
<p>그로부터 20여 년 뒤인 1863년. 조선에서는 흥선대원군이 집권하며 <strong>쇄국 정책을 강화했다.</strong></p>
<blockquote>증기기관이 대륙을 연결하는 동안, 조선은 성문을 걸어 잠갔다.</blockquote>`,
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
<p>1869년 5월 10일. 유타주 프로몬토리에서 동서 철도가 연결됐다. <strong>3,000km를 기차로 횡단하는 시대가 열렸다.</strong></p>
<blockquote>쇄국령이 내려진 조선과, 대륙을 철도로 연결한 미국. 같은 시기, 완전히 다른 세상이었다.</blockquote>`,
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
<p><strong>고려가 몽골에 맞서 버티는 동안, 유럽은 같은 몽골에게 짓밟혔다.</strong></p>
<blockquote>같은 적, 같은 시기. 고려는 40년을 버텼다.</blockquote>`,
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
<p><strong>신라가 석굴암의 부처를 조각할 때, 유럽은 중세 질서의 기틀을 잡고 있었다.</strong></p>
<blockquote>한쪽은 돌에 부처를 새기고, 한쪽은 칼로 유럽을 통일했다. 같은 시대, 다른 문명의 절정.</blockquote>`,
  },
];
