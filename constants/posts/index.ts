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
    summary: "클레오파트라가 피라미드를 올려다봤을 때, 그건 이미 2500년 된 골동품이었다. 근데 클레오파트라는 피라미드보다 우리한테 더 가깝다.",
    tags: ["클레오파트라", "피라미드", "이집트", "시간감각"],
    relatedSlugs: ["daedongyeojido-subway", "trex-stegosaurus"],
    timeline: [
      { year: "기원전 2560년", label: "기자 대피라미드 건설", highlight: true },
      { year: "기원전 1500년", label: "투탕카멘 시대" },
      { year: "기원전 69년", label: "클레오파트라 7세 탄생", highlight: true },
      { year: "기원전 30년", label: "클레오파트라 사망" },
      { year: "2026년", label: "지금 우리가 사는 시대" },
    ],
    content: `<p>클레오파트라 하면 피라미드가 같이 떠오른다. 이집트, 황금, 고대 문명. 한 세트처럼 묶여 있다.</p>
<p>근데 <strong>클레오파트라가 태어났을 때(기원전 69년), 기자 대피라미드는 이미 2500년 된 유물이었다.</strong> 피라미드가 지어진 게 기원전 2560년경이니까.</p>
<p>피라미드 → 클레오파트라: 약 <strong>2,500년</strong>.</p>
<p>클레오파트라 → 지금 우리: 약 <strong>2,050년</strong>.</p>
<blockquote>클레오파트라는 피라미드보다 아이폰에 더 가깝다.</blockquote>
<p>우리가 "고대"라고 퉁치는 시간 안에 2500년이 들어 있다. 피라미드를 쌓던 사람들과 클레오파트라 사이의 거리가, 클레오파트라와 우리 사이의 거리보다 멀다.</p>`,
  },
  {
    slug: "daedongyeojido-subway",
    title: "대동여지도가 만들어질 때 영국은 지하철을 타고 있었다",
    category: "korea-world",
    date: "2026-03-13",
    summary: "1861년 김정호가 대동여지도를 완성했다. 2년 뒤 런던에서 지하철이 개통됐다. 목판 지도와 땅속 기차가 2년 차이라니.",
    tags: ["대동여지도", "김정호", "런던지하철", "조선", "빅토리아시대"],
    relatedSlugs: ["cleopatra-pyramid", "trex-stegosaurus"],
    timeline: [
      { year: "1834년", label: "김정호, 청구도 제작" },
      { year: "1861년", label: "대동여지도 완성", highlight: true },
      { year: "1863년", label: "런던 지하철 개통", highlight: true },
      { year: "1876년", label: "조선, 강화도 조약 (개항)" },
      { year: "1899년", label: "서울에 전차 개통" },
    ],
    content: `<p>먼저 하나. 김정호가 전국을 직접 걸어다니며 지도를 만들었다는 건 사실이 아니다. 기존 관찬 지도들을 수집하고 비교·종합해서 대동여지도를 완성한 거다. 22첩으로 이어붙이면 전국 지도가 되는 구조에 목판 인쇄로 복제까지 가능하게 만든, 시스템에 가까운 작업이었다.</p>
<p>그게 1861년.</p>
<p>불과 2년 뒤인 1863년, 런던에서 세계 최초의 지하철이 개통된다. 땅을 파서 터널을 만들고 증기기관차를 굴렸다. 개통 첫날 3만 8천 명이 탔다.</p>
<blockquote>한쪽에서는 목판에 산줄기를 새기고 있었고, 다른 한쪽에서는 땅속으로 기차가 달리고 있었다. 2년 차이.</blockquote>
<p>어느 쪽이 낫다는 이야기가 아니다. 대동여지도의 정확도는 GPS 없이 만들었다는 게 말이 안 되는 수준이다. 다만 <strong>역사의 속도가 전 세계적으로 같지 않았다</strong>는 건 확실하다. 조선이 개항한 게 1876년, 서울에 전차가 달린 게 1899년. 런던 지하철 개통으로부터 36년 뒤다.</p>`,
  },
  {
    slug: "trex-stegosaurus",
    title: "티라노사우루스는 스테고사우루스보다 인간에 더 가깝다",
    category: "dinosaur",
    date: "2026-03-12",
    summary: "스테고사우루스와 티라노사우루스 사이의 시간 간격은 8700만 년. 티라노사우루스와 인간 사이는 6800만 년. 티라노가 우리한테 더 가깝다.",
    tags: ["티라노사우루스", "스테고사우루스", "공룡", "중생대"],
    relatedSlugs: ["cleopatra-pyramid", "daedongyeojido-subway"],
    timeline: [
      { year: "1억 5500만 년 전", label: "스테고사우루스 시대 (쥐라기)", highlight: true },
      { year: "6800만 년 전", label: "티라노사우루스 시대 (백악기)", highlight: true },
      { year: "6600만 년 전", label: "소행성 충돌, 공룡 멸종" },
      { year: "30만 년 전", label: "호모 사피엔스 등장" },
      { year: "현재", label: "지금" },
    ],
    content: `<p>공룡 장난감 세트에는 항상 같이 들어 있다. 티라노사우루스, 스테고사우루스, 트리케라톱스. 근데 <strong>이 공룡들이 같은 시대에 살았던 적은 한 번도 없다.</strong></p>
<p>스테고사우루스는 약 <strong>1억 5500만 년 전</strong>(쥐라기). 티라노사우루스는 약 <strong>6800만 년 전</strong>(백악기). 둘 사이 간격이 <strong>8700만 년</strong>이다.</p>
<p>티라노사우루스와 인간 사이는? <strong>6800만 년</strong>.</p>
<blockquote>티라노사우루스는 스테고사우루스보다 우리한테 시간적으로 더 가깝다.</blockquote>
<p>공룡이 지구에 있던 기간이 1억 6천만 년이 넘는다. 인류 역사가 30만 년이다. 그걸 "공룡 시대"라는 네 글자로 퉁치고 있다.</p>`,
  },
  {
    slug: "mammoth-pyramid",
    title: "매머드는 피라미드보다 오래 살아남았다",
    category: "dinosaur",
    date: "2026-03-11",
    summary: "피라미드가 이미 800년 된 유물이 됐을 때도 매머드는 아직 살아 있었다. 함무라비 법전이 쓰이던 시기에 매머드가 걸어다녔다는 게 말이 되나?",
    tags: ["매머드", "피라미드", "멸종", "랑겔섬", "빙하기"],
    relatedSlugs: ["cleopatra-pyramid", "trex-stegosaurus"],
    timeline: [
      { year: "BC 10,000", label: "대부분의 매머드 멸종" },
      { year: "BC 2560", label: "기자 대피라미드 건설", highlight: true },
      { year: "BC 1700", label: "랑겔 섬 마지막 매머드 멸종", highlight: true },
    ],
    content: `<p>대부분의 매머드는 약 1만 년 전에 사라졌다. 근데 시베리아 북극해의 랑겔 섬에서는 매머드가 <strong>기원전 1700년경까지</strong> 살아 있었다. 본토와 단절된 작은 섬에서 독자적으로 수천 년을 더 버틴 거다.</p>
<p>기자 대피라미드가 세워진 건 기원전 2560년경이다. 피라미드가 완공되고 나서도 <strong>800년 넘게</strong> 매머드가 살아 있었다는 뜻이다.</p>
<blockquote>바빌로니아에서 함무라비 법전을 만들고 있을 때, 랑겔 섬에서는 매머드가 걸어다니고 있었다.</blockquote>
<p>매머드는 우리 머릿속에서 "빙하기 동물"이라는 칸에 갇혀 있다. 근데 실제로는 인류가 피라미드를 짓고 법전을 쓰는 동안에도 어딘가에서 살아 있었다.</p>`,
  },
  {
    slug: "oxford-aztec",
    title: "옥스퍼드 대학은 아즈텍 제국보다 오래됐다",
    category: "korea-world",
    date: "2026-03-10",
    summary: "옥스퍼드에서 수업한 지 229년이 지나서야 아즈텍이 수도를 세웠다. 근데 아즈텍이 더 '고대'처럼 느껴지는 건 왜일까.",
    tags: ["옥스퍼드", "아즈텍", "대학교", "테노치티틀란", "중세"],
    relatedSlugs: ["daedongyeojido-subway", "cleopatra-pyramid"],
    timeline: [
      { year: "1096년", label: "옥스퍼드 대학 강의 시작", highlight: true },
      { year: "1249년", label: "유니버시티 칼리지 설립" },
      { year: "1325년", label: "아즈텍, 테노치티틀란 건설", highlight: true },
      { year: "1521년", label: "아즈텍 제국 멸망" },
    ],
    content: `<p>옥스퍼드 대학교에서 강의가 시작된 게 1096년이다. 아즈텍이 수도 테노치티틀란을 세운 건 1325년.</p>
<blockquote>옥스퍼드에서 수업이 시작되고 229년이 지나서야 아즈텍인들은 수도의 첫 돌을 놓았다.</blockquote>
<p>근데 아즈텍 하면 뭔가 고대 문명 느낌이 강하다. 신전, 제물 의식, 깃털 장식. 옥스퍼드는? 그냥 오래된 대학교. 지금도 학생들이 다니니까 "고대"라는 느낌이 안 든다.</p>
<p>아즈텍이 고대처럼 느껴지는 이유는 사라졌기 때문이다. 1521년에 코르테스가 무너뜨리고, 문화와 기록이 파괴됐다. 단절이 생기면 아무리 최근이어도 고대처럼 보인다. 옥스퍼드는 지금까지 운영되고 있으니까 "현재"로 인식된다.</p>
<p>옥스퍼드 학생들이 라틴어로 머리 싸매던 시절에 아즈텍은 아직 존재하지도 않았다.</p>`,
  },
  {
    slug: "hangul-columbus",
    title: "한글 창제와 콜럼버스의 항해, 49년 차이",
    category: "korea-world",
    date: "2026-03-09",
    summary: "세종대왕이 한글을 만들고 8년 뒤에 콜럼버스가 태어났다. 세종이 죽은 해와 콜럼버스 출생은 1년 차이. 49년이 이렇게 짧다.",
    tags: ["한글", "훈민정음", "콜럼버스", "세종대왕", "15세기"],
    relatedSlugs: ["daedongyeojido-subway", "cleopatra-pyramid"],
    timeline: [
      { year: "1397년", label: "세종대왕 출생" },
      { year: "1443년", label: "훈민정음 창제", highlight: true },
      { year: "1446년", label: "훈민정음 반포" },
      { year: "1451년", label: "콜럼버스 출생" },
      { year: "1492년", label: "콜럼버스, 아메리카 도달", highlight: true },
    ],
    content: `<p>1443년, 세종대왕이 훈민정음 28자를 완성했다. 그때 콜럼버스는 태어나지도 않았다. <strong>콜럼버스 출생이 1451년이다.</strong></p>
<blockquote>세종대왕 사망: 1450년. 콜럼버스 출생: 1451년. 1년 차이.</blockquote>
<p>훈민정음 창제(1443년)에서 콜럼버스의 첫 항해(1492년)까지 49년. 지금 기준으로 49년 전이면 1977년이다. 스타워즈 첫 편이 개봉한 해. 한글과 신대륙 발견 사이에 그 정도밖에 안 들어 있다.</p>
<p>한국사 수업이랑 세계사 수업에서 따로 배우니까 완전히 다른 시대처럼 느껴지는 건데, 실제로는 한 사람의 인생 안에 다 들어오는 거리다.</p>`,
  },
  {
    slug: "yisunsin-shakespeare",
    title: "이순신과 셰익스피어는 동시대 사람이다",
    category: "people",
    date: "2026-03-08",
    summary: "이순신 1545년생, 셰익스피어 1564년생. 나이 차이 19살. 이 두 사람이 34년간 같은 시대를 살았다는 거, 알고 있었나?",
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
    content: `<p>이순신, 1545년생. 셰익스피어, 1564년생. 나이 차이 19살. 이 두 사람이 <strong>34년 동안 동시에 살아 있었다.</strong></p>
<p>한 명은 조선 바다에서 왜군 함대를 박살 내고 있었고, 다른 한 명은 런던에서 연극 대본을 쓰고 있었다.</p>
<h2>1592년</h2>
<p>임진왜란이 터진 해다. 이순신이 옥포, 사천, 한산도에서 연달아 이기면서 전설이 되기 시작했다.</p>
<p>같은 해에 셰익스피어는 런던 연극계에 데뷔해서 <strong>헨리 6세</strong>를 무대에 올렸다.</p>
<blockquote>이순신이 한산도 대첩을 승리로 이끈 해에, 셰익스피어는 런던 무대에 처음 섰다.</blockquote>
<p>1598년 12월, 이순신이 노량해전에서 전사한다. 셰익스피어는 그 뒤로도 18년을 더 살면서 햄릿, 오셀로, 리어왕을 썼다.</p>`,
  },
  {
    slug: "shark-dinosaur",
    title: "상어는 공룡보다 2억 년 먼저 지구에 나타났다",
    category: "dinosaur",
    date: "2026-03-07",
    summary: "상어가 지구에 나타난 게 4억 5천만 년 전이다. 공룡은 2억 3천만 년 전. 상어가 2억 2천만 년 선배다. 근데 공룡은 멸종했고 상어는 아직 살아 있다.",
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
    content: `<p>상어의 조상이 처음 바다에 나타난 게 약 4억 5천만 년 전이다. 오르도비스기. 이때 육지에는 거의 아무것도 없었다. 나무는 3억 5천만 년 전에야 처음 나온다. <strong>상어는 나무보다 1억 년 먼저 지구에 있었다.</strong></p>
<p>최초의 공룡이 등장한 건 약 2억 3천만 년 전. 상어가 이미 2억 2천만 년 동안 바다에서 살고 있었을 때 공룡이 처음 땅 위를 걸었다.</p>
<blockquote>상어가 바다를 누비기 시작하고 2억 년이 넘게 지나서야, 첫 번째 공룡이 태어났다.</blockquote>
<p>6600만 년 전에 소행성이 떨어지고 공룡은 멸종했다. 상어는 살아남았다. 그것도 이번이 처음이 아니라, 대멸종을 <strong>다섯 번</strong> 버텼다. 페름기 대멸종 때 생물종의 96%가 죽었는데도.</p>
<p>공룡은 1억 6천만 년 정도 지구에 있었다. 상어는 4억 5천만 년째. 거의 세 배. 지금도 약 500종이 바다에서 헤엄치고 있다.</p>`,
  },
  {
    slug: "fax-samurai",
    title: "팩스가 발명됐을 때, 일본에는 사무라이가 있었다",
    category: "invention",
    date: "2026-03-06",
    summary: "팩스 원형 기술이 특허를 받은 해가 1843년이다. 전화기보다 30년 이상 빠르다. 근데 이 해에 일본에서는 사무라이가 칼 두 자루 차고 돌아다니고 있었다.",
    tags: ["팩스", "사무라이", "에도막부", "알렉산더베인", "발명", "1843년"],
    relatedSlugs: ["daedongyeojido-subway", "cleopatra-pyramid"],
    timeline: [
      { year: "1603년", label: "에도 막부 시작 (사무라이 시대)" },
      { year: "1843년", label: "알렉산더 베인, 팩스 원형 기술 특허 획득", highlight: true },
      { year: "1868년", label: "메이지 유신, 에도 막부 종말", highlight: true },
      { year: "1876년", label: "벨, 전화기 특허 출원" },
      { year: "1964년", label: "제록스, 상업용 팩스기 출시" },
    ],
    content: `<p>팩스의 원형 기술이 <strong>전화기보다 33년 먼저</strong> 나왔다. 1843년, 스코틀랜드 발명가 알렉산더 베인이 문서를 전기 신호로 바꿔 보내는 장치의 특허를 땄다. 벨이 전화기 특허를 낸 게 1876년이니까.</p>
<p>1843년의 일본은 에도 막부 한복판이다. 1603년부터 시작된 에도 시대가 240년째. 사무라이들이 칼 두 자루를 허리에 차고 거리를 돌아다니고 있었다.</p>
<blockquote>스코틀랜드에서 전기로 문서를 전송하는 기계가 발명되던 그 해, 일본에서는 사무라이가 칼을 차고 걸어다니고 있었다.</blockquote>
<p>에도 막부가 무너진 건 1868년. 팩스 특허로부터 25년 뒤다. 팩스 기술이 사무라이보다 오래 살아남은 셈이다.</p>`,
  },
  {
    slug: "joseon-blackdeath",
    title: "유럽 인구 1/3이 사라진 직후, 조선이 건국됐다",
    category: "korea-world",
    date: "2026-03-05",
    summary: "흑사병으로 유럽 인구 1/3이 날아갔다. 그 충격이 채 가시기도 전에, 지구 반대편에서는 새 나라가 세워지고 있었다. 40년 차이.",
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
    content: `<p>1347년 가을. 흑해에서 출발한 무역선이 시칠리아 항구에 닿았다. 선원 대부분이 이미 죽어 있었다. 이게 시작이었다.</p>
<p>4년 만에 유럽 인구의 약 <strong>1/3이 사라졌다.</strong> 2천만에서 2천5백만 명. 마을이 통째로 비고, 밭에 곡식이 익어도 거둘 사람이 없었다.</p>
<h2>40년 뒤, 지구 반대편</h2>
<p>1388년, 이성계가 위화도에서 군대를 돌린다. 1392년, 조선 건국.</p>
<blockquote>흑사병이 끝난 지 겨우 40년. 유럽에서는 농노제가 흔들리고 있었는데, 동아시아 끝에서는 새 왕조가 서고 있었다.</blockquote>
<p>1394년 한양 천도. 새 수도에 궁궐 터를 닦고 있을 때, 유럽의 일부 도시들은 아직 흑사병 전 인구를 회복 못 하고 있었다.</p>`,
  },
  {
    slug: "nintendo-ottoman",
    title: "닌텐도가 창업했을 때, 오스만 제국은 아직 건재했다",
    category: "invention",
    date: "2026-03-04",
    summary: "닌텐도가 교토에서 화투 만들며 시작한 게 1889년이다. 그때 오스만 제국은 590년째 돌아가고 있었다. 화투 가게가 제국보다 오래 살아남을 줄 누가 알았겠나.",
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
    content: `<p>1889년, 야마우치 후사지로가 교토에 작은 가게를 냈다. 닌텐도 곳파이. 하는 일은 화투 만들기. 꽃 그림 카드를 손으로 그려서 파는 소규모 사업이었다.</p>
<p>같은 해. 오스만 제국은 590년째 존속 중이었다. 1299년에 세워진 나라가 아직 굴러가고 있었다. 중동, 발칸반도, 북아프리카 일부까지 영토를 유지하고 있던 대제국이다.</p>
<blockquote>교토의 화투 가게와 590년 된 대제국이 같은 해에 존재했다. 결과적으로 화투 가게가 더 오래 살아남았다.</blockquote>
<p>오스만 제국은 1차 세계대전에서 지고 1922년에 해체됐다. 그때 닌텐도는 여전히 교토에서 카드를 만들고 있었다. 슈퍼 마리오 브라더스가 나온 건 1985년. 창업하고 거의 100년이 지나서다.</p>`,
  },
];
