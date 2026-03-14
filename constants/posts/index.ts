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
    summary: "우리가 클레오파트라를 '고대인'이라 부르지만, 정작 그녀에게도 피라미드는 까마득한 옛날 이야기였다.",
    tags: ["클레오파트라", "피라미드", "이집트", "시간감각"],
    relatedSlugs: ["daedongyeojido-subway", "trex-stegosaurus"],
    timeline: [
      { year: "기원전 2560년", label: "기자 대피라미드 건설", highlight: true },
      { year: "기원전 1500년", label: "투탕카멘 시대" },
      { year: "기원전 69년", label: "클레오파트라 7세 탄생", highlight: true },
      { year: "기원전 30년", label: "클레오파트라 사망" },
      { year: "2026년", label: "지금 우리가 사는 시대" },
    ],
    content: `<h2>클레오파트라는 '고대인'이 아닐 수도 있다</h2>
<p>클레오파트라 하면 뭐가 떠오르세요? 이집트, 피라미드, 황금 마스크, 고대 문명... 대충 그런 이미지가 한꺼번에 떠오르죠. 그런데 여기서 재밌는 사실이 하나 있어요.</p>
<p>우리는 클레오파트라와 피라미드를 같은 시대 묶음처럼 생각하지만, <strong>클레오파트라가 태어났을 때 기자 대피라미드는 이미 2500년이나 된 유물이었어요.</strong> 피라미드가 지어진 건 기원전 2560년경이고, 클레오파트라가 태어난 건 기원전 69년이거든요.</p>
<h2>숫자로 보면 더 놀랍다</h2>
<p>피라미드 건설부터 클레오파트라까지, 약 <strong>2,500년</strong>. 클레오파트라부터 지금 우리까지, 약 <strong>2,050년</strong>. 어라? 클레오파트라는 오히려 피라미드보다 <strong>우리한테 시간적으로 더 가까워요.</strong></p>
<blockquote>클레오파트라는 피라미드보다 아이폰에 더 가깝다.</blockquote>
<p>이게 농담처럼 들리지만 실제로 숫자가 그래요. 클레오파트라가 피라미드를 올려다봤을 때, 그녀의 감정은 아마 우리가 경주 첨성대를 보는 것과 비슷했을지도 몰라요. "와, 옛날 사람들이 이걸 만들었네" 하는 감탄이요.</p>
<h2>고대 안에도 깊이가 있다</h2>
<p>우리는 "고대"라는 단어 하나로 수천 년을 뭉뚱그려 버리는 경향이 있어요. 하지만 그 안을 들여다보면, 시간의 깊이는 상상 이상입니다. 피라미드를 만든 사람들과 클레오파트라 사이의 거리는, 클레오파트라와 스마트폰을 쓰는 우리 사이의 거리보다 더 멀어요.</p>
<p>"고대"라는 한 단어 속에 숨어 있는 이 어마어마한 시간 차이, 한번 느껴보시면 역사가 조금 다르게 보일 거예요.</p>`,
  },
  {
    slug: "daedongyeojido-subway",
    title: "대동여지도가 만들어질 때 영국은 지하철을 타고 있었다",
    category: "korea-world",
    date: "2026-03-13",
    summary: "김정호가 기존 지도들을 수집·종합해 대동여지도를 완성할 때, 바다 건너 런던에서는 세계 최초 지하철이 달리고 있었다.",
    tags: ["대동여지도", "김정호", "런던지하철", "조선", "빅토리아시대"],
    relatedSlugs: ["cleopatra-pyramid", "trex-stegosaurus"],
    timeline: [
      { year: "1834년", label: "김정호, 청구도 제작" },
      { year: "1861년", label: "대동여지도 완성", highlight: true },
      { year: "1863년", label: "런던 지하철 개통", highlight: true },
      { year: "1876년", label: "조선, 강화도 조약 (개항)" },
      { year: "1899년", label: "서울에 전차 개통" },
    ],
    content: `<h2>같은 해, 전혀 다른 풍경</h2>
<p>1861년, 조선의 지리학자 김정호는 기존 관찬 지도들을 수집하고 비교·종합해서 <strong>대동여지도</strong>를 완성합니다. 목판에 한 땀 한 땀 새긴 22첩의 지도, 당시 조선 최고의 기술력이었죠.</p>
<p>그런데 불과 2년 뒤인 1863년, 바다 건너 영국 런던에서는 <strong>세계 최초의 지하철</strong>이 개통됩니다. 증기기관차가 땅속 터널을 달리기 시작한 거예요. 개통 첫날에만 3만 8천 명이 탑승했다고 해요.</p>
<h2>불과 2년 차이라는 게 실감이 안 된다</h2>
<p>한쪽에서는 목판에 산줄기와 물줄기를 손으로 새기고 있었고, 다른 한쪽에서는 사람들이 땅속으로 기차를 타고 출퇴근하고 있었어요. <strong>같은 지구, 같은 시대에요.</strong></p>
<blockquote>목판으로 지도를 찍는 나라와, 땅속으로 기차를 달리는 나라. 같은 해, 같은 지구.</blockquote>
<p>이건 어느 쪽이 더 낫다는 이야기가 아니에요. 대동여지도는 그 자체로 놀라운 정확도를 가진 위대한 작품이고, GPS도 없던 시절에 만들어진 걸 생각하면 경이로운 수준이거든요.</p>
<h2>시간의 속도는 균일하지 않다</h2>
<p>다만 이 이야기가 알려주는 건, <strong>역사의 속도가 전 세계적으로 균일하지 않았다</strong>는 거예요. 조선이 개항(1876년)을 하고 서울에 전차가 달리기까지(1899년) 약 40년이 걸렸어요. 그 사이 세계는 이미 엄청난 속도로 변하고 있었죠.</p>
<p>대동여지도와 런던 지하철. 이 두 단어를 나란히 놓으면, "같은 시대"라는 말이 얼마나 넓은 의미인지 느끼게 됩니다.</p>`,
  },
  {
    slug: "trex-stegosaurus",
    title: "티라노사우루스는 스테고사우루스보다 인간에 더 가깝다",
    category: "dinosaur",
    date: "2026-03-12",
    summary: "티라노와 스테고는 같은 '공룡'이지만, 둘 사이의 시간 간격은 티라노와 인간 사이보다 훨씬 크다.",
    tags: ["티라노사우루스", "스테고사우루스", "공룡", "중생대"],
    relatedSlugs: ["cleopatra-pyramid", "daedongyeojido-subway"],
    timeline: [
      { year: "1억 5500만 년 전", label: "스테고사우루스 시대 (쥐라기)", highlight: true },
      { year: "6800만 년 전", label: "티라노사우루스 시대 (백악기)", highlight: true },
      { year: "6600만 년 전", label: "소행성 충돌, 공룡 멸종" },
      { year: "30만 년 전", label: "호모 사피엔스 등장" },
      { year: "현재", label: "지금" },
    ],
    content: `<h2>같은 공룡이라고 다 같은 시대가 아니다</h2>
<p>공룡 하면 보통 티라노사우루스, 스테고사우루스, 트리케라톱스 같은 이름들이 한꺼번에 떠오르죠. 영화에서도 다 같이 나오고, 장난감 세트에도 함께 들어있으니까요. 그런데 실제로는 <strong>이 공룡들이 같은 시대에 살았던 적이 없어요.</strong></p>
<p>스테고사우루스는 약 <strong>1억 5500만 년 전</strong> 쥐라기 후기에 살았어요. 티라노사우루스는 약 <strong>6800만 년 전</strong> 백악기 후기에 살았고요. 둘 사이의 시간 차이는 무려 <strong>약 8,700만 년</strong>입니다.</p>
<h2>숫자가 말해주는 것</h2>
<p>반면에 티라노사우루스와 우리 인간 사이의 시간 차이는 약 <strong>6,800만 년</strong>이에요. 잠깐, 다시 보세요. 스테고사우루스↔티라노사우루스가 <strong>8,700만 년</strong>이고, 티라노사우루스↔인간이 <strong>6,800만 년</strong>이에요.</p>
<blockquote>티라노사우루스에게 스테고사우루스는, 우리에게 티라노사우루스보다 더 먼 옛날 이야기다.</blockquote>
<p>만약 티라노사우루스가 역사를 공부할 수 있었다면, 스테고사우루스는 "아주 먼 옛날의 고대 생물"이었을 거예요. 우리가 공룡을 그렇게 느끼는 것처럼요.</p>
<h2>공룡 시대는 '한 시대'가 아니다</h2>
<p>우리는 "공룡 시대"라는 말을 쉽게 쓰지만, 공룡이 지구를 지배한 기간은 약 <strong>1억 6천만 년</strong>이 넘어요. 인류 역사 전체가 고작 수십만 년인 걸 생각하면, "공룡 시대"라는 한마디 속에 담긴 시간의 무게가 느껴지시나요?</p>
<p>다음에 자연사 박물관에서 티라노사우루스와 스테고사우루스가 나란히 서 있는 걸 보면, 이렇게 생각해보세요. <strong>"이 둘은 실제로 만난 적이 없다."</strong> 그러면 시간이 조금 다르게 느껴질 거예요.</p>`,
  },
];
