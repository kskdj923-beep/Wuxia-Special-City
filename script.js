const enterBtn = document.getElementById("enterBtn");
const paperPage = document.getElementById("paperPage");
const loadingScreen = document.getElementById("loadingScreen");
const loadingFill = document.querySelector(".loading-fill");
const paperLinks = document.querySelectorAll(".paper-hitbox");

const peoplePage = document.getElementById("peoplePage");
const themeBtn = document.getElementById("themeBtn");
const peopleCard = document.querySelector(".paper-hitbox.people");

const characterModal = document.getElementById("characterModal");
const modalClose = document.getElementById("modalClose");
const modalBg = document.querySelector(".modal-bg");
const prevChar = document.getElementById("prevChar");
const nextChar = document.getElementById("nextChar");

const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalDesc = document.getElementById("modalDesc");
const modalFaction = document.getElementById("modalFaction");
const modalLevel = document.getElementById("modalLevel");
const modalWeapon = document.getElementById("modalWeapon");
const modalPersonality = document.getElementById("modalPersonality");
const modalQuote = document.getElementById("modalQuote");
const characterGrid = document.querySelector(".character-grid");
const recordLoading = document.getElementById("recordLoading");
const archiveLoading = document.getElementById("archiveLoading");
const worldLoading = document.getElementById("worldLoading");
const worldCard = document.querySelector(".paper-hitbox.world");
const factionPage = document.getElementById("factionPage");
const factionCard = document.querySelector(".paper-hitbox.faction");
const factionModal = document.getElementById("factionModal");
const factionClose = document.getElementById("factionClose");
const factionModalBg = document.querySelector(".faction-modal-bg");
const factionModalImage = document.getElementById("factionModalImage");
const mapPage = document.getElementById("mapPage");
const mapCard = document.querySelector(".paper-hitbox.map");

const districtModal = document.getElementById("districtModal");
const districtClose = document.getElementById("districtClose");
const districtModalBg = document.querySelector(".district-modal-bg");

const districtName = document.getElementById("districtName");
const districtHanja = document.getElementById("districtHanja");
const districtDesc = document.getElementById("districtDesc");
const districtFactions = document.getElementById("districtFactions");
const bgm = document.getElementById("bgm");
const bgmToggle = document.getElementById("bgmToggle");
const bgmVolume = document.getElementById("bgmVolume");
const globalBackBtn = document.getElementById("globalBackBtn");
const playlist = [
  "assets/audio/bgm1.mp3",
  "assets/audio/bgm2.mp3",
  "assets/audio/bgm3.mp3"
];
let currentTrack = 0;

async function playTrack(index){
  currentTrack = index;
  bgm.src = playlist[currentTrack];
  bgm.volume = Number(bgmVolume.value);

  try{
    await bgm.play();
    bgmToggle.textContent = "⏸";
  }catch(e){
    console.log("BGM 재생 실패:", e);
    bgmToggle.textContent = "▶";
  }
}

bgm.addEventListener("ended", () => {
  currentTrack++;

  if(currentTrack >= playlist.length){
    currentTrack = 0;
  }

  playTrack(currentTrack);
});

const characters=[
{name:"연태진",role:"천도부 도주",faction:"천도부",level:"초절정",weapon:"검",personality:"냉철 · 권위",thumb:"assets/images/character-01.png",full:"assets/images/yeontaejin-full.png",desc:"특구 행정과 감찰 체계를 장악한 천도부의 수장.",quote:"질서를 모르는 자들이 자유라 부르는 곳, 그것이 무림특구다."},
{name:"백유진",role:"천도부 부도주",faction:"천도부",level:"일류",weapon:"없음",personality:"계산 · 오만",thumb:"assets/images/character-02.png",full:"assets/images/baekyujin-full.png",desc:"천도부의 실무와 문서를 장악한 부도주.",quote:"이 도시는 순진한 자에게 친절하지 않아요."},
{name:"소은비",role:"천도부 감찰관",faction:"천도부",level:"절정",weapon:"검",personality:"원칙 · 무심",thumb:"assets/images/character-03.png",full:"assets/images/soeunbi-full.png",desc:"천도부의 현장 감찰관.",quote:"특구라 해도 규칙 밖에 서는 자는 없습니다."},

{name:"진서혁",role:"금의위 대금위",faction:"금의위",level:"초절정",weapon:"도",personality:"지배 · 폭압",thumb:"assets/images/character-04.png",full:"assets/images/jinseohyeok-full.png",desc:"금의위를 장악한 강압적 지휘관.",quote:"무림특구의 밤은 내가 허락한 만큼만 흐른다."},
{name:"남채린",role:"금의위 흑의장",faction:"금의위",level:"절정",weapon:"검",personality:"냉소 · 과묵",thumb:"assets/images/character-05.png",full:"assets/images/namchaerin-full.png",desc:"금의위의 어둠을 맡은 흑의장.",quote:"말 많은 자부터 먼저 사라지는 도시지."},
{name:"하진아",role:"금의위 철의장",faction:"금의위",level:"절정",weapon:"언월도",personality:"공격 · 난폭",thumb:"assets/images/character-06.png",full:"assets/images/hajina-full.png",desc:"금의위의 무력 진압 담당.",quote:"특구가 시끄럽다고? 그래서 더 재밌는 거야."},
{name:"유하린",role:"금의위 백의장",faction:"금의위",level:"이류",weapon:"없음",personality:"분석 · 냉담",thumb:"assets/images/character-07.png",full:"assets/images/yuharin-full.png",desc:"금의위의 정보 분석 담당.",quote:"이 도시는 감정보다 자료가 먼저 움직여요."},

{name:"진태령",role:"천검연 연주",faction:"천검연",level:"초절정",weapon:"검",personality:"냉혹 · 야망",thumb:"assets/images/character-08.png",full:"assets/images/jintaeryeong-full.png",desc:"천검연을 이끄는 냉혹한 무인.",quote:"무림특구는 검이 법이 되는 순간 가장 솔직해진다."},
{name:"설하윤",role:"천검연 검무단주",faction:"천검연",level:"절정",weapon:"검",personality:"화려 · 도발",thumb:"assets/images/character-09.png",full:"assets/images/seolhayun-full.png",desc:"화려한 검무로 이름난 단주.",quote:"이 도시는 위험해서 아름답고, 아름다워서 위험해."},
{name:"진서린",role:"천검연 실전교관",faction:"천검연",level:"절정",weapon:"검",personality:"현실 · 엄격",thumb:"assets/images/character-10.png",full:"assets/images/jinseorin-full.png",desc:"천검연의 실전 교육 담당.",quote:"특구에서 살아남는 법은 단순해. 느린 자가 쓰러진다."},
{name:"남궁설",role:"천검연 직계무인",faction:"천검연",level:"일류",weapon:"검",personality:"반항 · 능청",thumb:"assets/images/character-11.png",full:"assets/images/namgungseol-full.png",desc:"천검연의 반항적인 직계 무인.",quote:"여기선 착한 척보다 강한 척이 더 오래가더라."},
{name:"서유란",role:"천검연 신입무인",faction:"천검연",level:"이류",weapon:"검",personality:"충동 · 쾌활",thumb:"assets/images/character-12.png",full:"assets/images/seoyuran-full.png",desc:"천검연의 신입 무인.",quote:"무림특구요? 무섭긴 한데, 솔직히 좀 두근거려요."},

{name:"제갈연",role:"묵련당 당주",faction:"묵련당",level:"초절정",weapon:"없음",personality:"집요 · 냉정",thumb:"assets/images/character-13.png",full:"assets/images/jegalyun-full.png",desc:"묵련당을 이끄는 연구 조직의 수장.",quote:"무림특구는 실험하기 좋은 도시다. 사람도, 질서도."},
{name:"연서윤",role:"묵련당 수석연구관",faction:"묵련당",level:"절정",weapon:"없음",personality:"광기 · 수다",thumb:"assets/images/character-14.png",full:"assets/images/yeonseoyun-full.png",desc:"묵련당의 기괴한 연구자.",quote:"여긴 매일 새로운 표본이 걸어 들어온다니까요? 최고죠."},
{name:"윤세아",role:"묵련당 개발관",faction:"묵련당",level:"이류",weapon:"없음",personality:"괴짜 · 즉흥",thumb:"assets/images/character-15.png",full:"assets/images/yunsea-full.png",desc:"묵련당의 즉흥적인 개발관.",quote:"특구는 망가지기 쉬워서 좋아. 고치기도 쉽거든."},
{name:"묵하린",role:"묵련당 기술관",faction:"묵련당",level:"삼류",weapon:"검",personality:"완벽 · 보수",thumb:"assets/images/character-16.png",full:"assets/images/mukharin-full.png",desc:"묵련당의 완벽주의 기술관.",quote:"무림특구의 문제는 무질서가 아니라 관리 부실입니다."},
{name:"유세린",role:"묵련당 실험체",faction:"묵련당",level:"절정",weapon:"검",personality:"불안 · 예민",thumb:"assets/images/character-17.png",full:"assets/images/yuserin-full.png",desc:"묵련당의 불안정한 실험체.",quote:"이 도시는 너무 시끄러워요. 그런데 이상하게 익숙해요."},

{name:"독고현",role:"흑천회 회주",faction:"흑천회",level:"초절정",weapon:"도",personality:"잔혹 · 광소",thumb:"assets/images/character-18.png",full:"assets/images/dokgohyeon-full.png",desc:"흑천회를 지배하는 잔혹한 회주.",quote:"무림특구? 웃기는군. 결국 겁먹은 놈들이 돈을 바치는 판이야."},
{name:"마연화",role:"흑천회 도박장주",faction:"흑천회",level:"삼류",weapon:"없음",personality:"유혹 · 교활",thumb:"assets/images/character-19.png",full:"assets/images/mayeonhwa-full.png",desc:"흑천회의 도박장을 운영하는 인물.",quote:"이 도시에서 운은 팔 수 있어요. 물론 비싸게요."},
{name:"채윤하",role:"흑천회 해결사",faction:"흑천회",level:"절정",weapon:"검",personality:"무자비 · 냉혈",thumb:"assets/images/character-20.png",full:"assets/images/chaeyunha-full.png",desc:"흑천회의 문제를 조용히 처리하는 해결사.",quote:"무림특구에선 말보다 빠른 게 칼이고, 칼보다 빠른 게 돈이야."},
{name:"곽진",role:"현상금사냥꾼",faction:"무소속",level:"일류",weapon:"도",personality:"능글 · 탐욕",thumb:"assets/images/character-21.png",full:"assets/images/gwakjin-full.png",desc:"돈이 되는 일이라면 어디든 나타나는 사냥꾼.",quote:"이 도시는 좋아. 목숨값이 아주 정직하거든."},

{name:"태무진",role:"유성상단 단주",faction:"유성상단",level:"삼류",weapon:"도",personality:"권위 · 인색",thumb:"assets/images/character-22.png",full:"assets/images/taemujin-full.png",desc:"유성상단을 이끄는 육상 운송 책임자.",quote:"무림특구에서 길을 쥔 자가 돈을 쥔다."},
{name:"서채윤",role:"유성상단 운송책임자",faction:"유성상단",level:"삼류",weapon:"검",personality:"신중 · 성실",thumb:"assets/images/character-23.png",full:"assets/images/seochaeyun-full.png",desc:"유성상단의 운송 실무자.",quote:"이 도시는 위험하지만, 약속한 물건은 반드시 도착해야 합니다."},

{name:"해령",role:"해원상단 단주",faction:"해원상단",level:"삼류",weapon:"검",personality:"야심 · 냉혹",thumb:"assets/images/character-24.png",full:"assets/images/haeryeong-full.png",desc:"해원상단을 지휘하는 야심가.",quote:"바다는 국경을 묻지 않고, 특구는 죄를 묻지 않는다."},
{name:"윤해린",role:"해원상단 밀항책임자",faction:"해원상단",level:"삼류",weapon:"도",personality:"거침 · 대담",thumb:"assets/images/character-25.png",full:"assets/images/yunhaerin-full.png",desc:"밀항과 밀수를 담당하는 실행책.",quote:"무림특구에 못 들어오는 건 없어. 값만 맞으면."},

{name:"월하진",role:"적월교 교주",faction:"적월교",level:"초절정",weapon:"없음",personality:"광신 · 몽환",thumb:"assets/images/character-26.png",full:"assets/images/wolhajin-full.png",desc:"적월교를 이끄는 광신적 교주.",quote:"이 도시는 썩은 것이 아니다. 붉은 달 아래 다시 태어나는 중이지."},
{name:"은설화",role:"적월교 사제",faction:"적월교",level:"이류",weapon:"없음",personality:"헌신 · 순종",thumb:"assets/images/character-27.png",full:"assets/images/eunseolhwa-full.png",desc:"적월교의 사제.",quote:"특구의 어둠도 결국 달빛 아래 무릎 꿇게 될 거예요."},
{name:"강도윤",role:"적월교 집행관",faction:"적월교",level:"절정",weapon:"검",personality:"무정 · 강압",thumb:"assets/images/character-28.png",full:"assets/images/gangdoyun-full.png",desc:"적월교의 명령을 집행하는 인물.",quote:"믿지 않는 자도 이 도시에서는 결국 피로 증명한다."},

{name:"류은채",role:"잔향 향주",faction:"잔향",level:"삼류",weapon:"없음",personality:"음침 · 비밀",thumb:"assets/images/character-29.png",full:"assets/images/ryueunchae-full.png",desc:"잔향의 정보망을 관리하는 향주.",quote:"무림특구의 소문은 죽지 않아요. 주인만 바뀔 뿐."},
{name:"서지한",role:"잔향 기록관",faction:"잔향",level:"삼류",weapon:"검",personality:"계산 · 침착",thumb:"assets/images/character-30.png",full:"assets/images/seojihan-full.png",desc:"잔향의 기록과 정보 정리를 맡은 인물.",quote:"이 도시에서 사라지는 건 사람이고, 남는 건 기록입니다."}
];

let currentChar=0;

function playBgm(){
  playTrack(currentTrack);
}

enterBtn.addEventListener("click", () => {
  enterBtn.disabled = true;
  document.body.classList.add("entered");

  playBgm();

  loadingFill.style.animation = "none";
  loadingFill.offsetHeight;
  loadingFill.style.animation = "loadingFill 2.4s linear forwards";

  setTimeout(() => loadingScreen.classList.add("show"), 700);
  setTimeout(() => document.body.classList.add("board-ready"), 3600);
  setTimeout(() => {
    loadingScreen.classList.remove("show");
    paperPage.classList.add("show");
  }, 4600);
});

paperLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (link.classList.contains("people")) return;
    if (link.classList.contains("world")) return;
    if (link.classList.contains("faction")) return;
    if (link.classList.contains("map")) return;

    paperPage.classList.add("turning");

    setTimeout(() => {
      paperPage.classList.remove("show", "turning");
    }, 900);
  });
});

peopleCard.addEventListener("click", () => {
  paperPage.classList.add("zooming");

  setTimeout(() => {
    archiveLoading.classList.add("show");
  }, 900);

  setTimeout(() => {
    archiveLoading.classList.add("seal");
  }, 2600);

  setTimeout(() => {
    paperPage.classList.remove("show", "zooming");
  }, 1200);

  setTimeout(() => {
    archiveLoading.classList.remove("show", "seal");
    peoplePage.classList.add("show");

    renderCharacterCards("전체");

    filterButtons.forEach(btn => btn.classList.remove("active"));
    document.querySelector('[data-filter="전체"]').classList.add("active");
  }, 4300);
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light")
    ? "다크 테마"
    : "라이트 테마";
});

function openCharacter(index){
currentChar=index;
const c=characters[currentChar];

modalImage.src=c.full;
modalName.textContent=c.name;
modalRole.textContent=c.role;
modalDesc.textContent=c.desc;
modalFaction.textContent=c.faction;
modalLevel.textContent=c.level;
modalWeapon.textContent=c.weapon;
modalPersonality.textContent=c.personality;
modalQuote.textContent=`“${c.quote}”`;

characterModal.classList.add("show");
}

function closeCharacter() {
  characterModal.classList.remove("show");
}

function moveCharacter(dir) {
  currentChar = (currentChar + dir + characters.length) % characters.length;
  openCharacter(currentChar);
}

modalClose.addEventListener("click", closeCharacter);
modalBg.addEventListener("click", closeCharacter);

prevChar.addEventListener("click", () => {
  moveCharacter(-1);
});

nextChar.addEventListener("click", () => {
  moveCharacter(1);
});

console.log(characterGrid);

function renderCharacterCards(filter = "전체") {
  characterGrid.innerHTML = "";

  const filteredCharacters = characters.filter(c => {
    if (filter === "전체") return true;
    if (filter === "상단") return c.faction === "유성상단" || c.faction === "해원상단";
    return c.faction === filter;
  });

  filteredCharacters.forEach((c) => {
    const realIndex = characters.indexOf(c);
    const card = document.createElement("article");

    card.className = "character-card";
    card.innerHTML = `
      <img src="${c.thumb}" alt="${c.name}">
      <div>
        <h3>${c.name}</h3>
        <p>${c.role}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      openCharacter(realIndex);
    });

    characterGrid.appendChild(card);
  });
}

const filterButtons = document.querySelectorAll(".filter-bar button");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    renderCharacterCards(button.dataset.filter);
  });
});

window.addEventListener("DOMContentLoaded", () => {
    renderCharacterCards("전체");
});

worldCard.addEventListener("click", () => {
  paperPage.classList.add("zooming");
   worldLoading.classList.remove("show", "unlocking", "open");

  const docText = document.querySelector(".world-doc-text");
  docText.classList.remove("world-show");

  document.querySelectorAll(".korean-side p:not(.doc-date)").forEach(p => {
    p.style.opacity = "0";
    p.style.animation = "none";
  });

  setTimeout(() => {
    worldLoading.classList.add("show");
  }, 800);

  setTimeout(() => {
    worldLoading.classList.add("unlocking");
  }, 3600);

  setTimeout(() => {
   worldLoading.classList.add("open");

const docText = document.querySelector(".world-doc-text");
docText.classList.remove("world-show");
void docText.offsetWidth;
docText.classList.add("world-show");

    const paragraphs = document.querySelectorAll(".korean-side p:not(.doc-date)");

    paragraphs.forEach((p, i) => {
      p.style.opacity = "0";
      p.style.animation = `fadeUp .75s ease ${2.8 + (i * 0.55)}s forwards`;
    });
  }, 5700);

  setTimeout(() => {
    paperPage.classList.remove("show", "zooming");
  }, 5900);
});

const factionImages = [
  "assets/factions/cheondobu-full.png",
  "assets/factions/geumuiwi-full.png",
  "assets/factions/cheongeomyeon-full.png",
  "assets/factions/mukryeondang-full.png",
  "assets/factions/yuseongsangdan-full.png",
  "assets/factions/haewonsangdan-full.png",
  "assets/factions/heukcheonhoe-full.png",
  "assets/factions/janhyang-full.png",
  "assets/factions/jeokwolgyo-full.png"
];

factionCard.addEventListener("click", () => {
  paperPage.classList.add("zooming");

  setTimeout(() => {
    paperPage.classList.remove("show", "zooming");
    factionPage.classList.add("show");
  }, 700);
});

document.querySelectorAll(".faction-card").forEach(card => {
  card.addEventListener("click", () => {
    const index = Number(card.dataset.index);
    factionModalImage.src = factionImages[index];
    factionModal.classList.add("show");
  });
});

function closeFactionModal(){
  factionModal.classList.remove("show");
}

factionClose.addEventListener("click", closeFactionModal);
factionModalBg.addEventListener("click", closeFactionModal);

const districts = {
  north: {
    name: "북부지구",
    hanja: "北部地區",
    factions: ["천검연", "묵련당"],
    desc: "무림특구 북쪽에 자리한 무공과 연구의 구역. 비무장과 수련장이 많지만, 뒤편에서는 금단과 기관 병기 연구가 은밀히 이루어진다."
  },
  west: {
    name: "서부지구",
    hanja: "西部地區",
    factions: ["묵련당", "잔향"],
    desc: "오래된 골목과 폐가, 비밀 기록소가 뒤섞인 구역. 사라진 사람과 이름 없는 소문들이 이곳에서 거래된다."
  },
  center: {
    name: "중앙부",
    hanja: "中央部",
    factions: ["천도부", "금의위"],
    desc: "무림특구의 행정과 단속이 집중된 중심부. 세금, 허가, 수배, 감찰이 모두 이곳에서 움직인다."
  },
  south: {
    name: "남부지구",
    hanja: "南部地區",
    factions: ["흑천회", "적월교"],
    desc: "도박장, 환락가, 빈민가가 얽힌 위험 구역. 돈과 욕망, 광신이 가장 노골적으로 드러나는 곳이다."
  },
  east: {
    name: "동부지구",
    hanja: "東部地區",
    factions: ["유성상단", "해원상단"],
    desc: "항구와 상단 창고가 밀집한 경제 구역. 무역과 운송이 활발하지만, 밀수와 비밀 거래 역시 끊이지 않는다."
  }
};

mapCard.addEventListener("click", () => {
  paperPage.classList.add("zooming");

  setTimeout(() => {
    paperPage.classList.remove("show", "zooming");
    mapPage.classList.add("show");
  }, 700);
});

document.querySelectorAll(".district-marker").forEach(marker => {
  marker.addEventListener("click", () => {
    const data = districts[marker.dataset.district];

    districtName.textContent = data.name;
    districtHanja.textContent = data.hanja;
    districtDesc.textContent = data.desc;

    districtFactions.innerHTML = "";
    data.factions.forEach(faction => {
      const li = document.createElement("li");
      li.textContent = faction;
      districtFactions.appendChild(li);
    });

    districtModal.classList.add("show");
  });
});

function closeDistrictModal(){
  districtModal.classList.remove("show");
}

districtClose.addEventListener("click", closeDistrictModal);
districtModalBg.addEventListener("click", closeDistrictModal);

function backToPaper(){
  peoplePage.classList.remove("show");
  factionPage.classList.remove("show");
  mapPage.classList.remove("show");

  worldLoading.classList.remove("show", "unlocking", "open");

  characterModal.classList.remove("show");
  factionModal.classList.remove("show");
  districtModal.classList.remove("show");

  paperPage.classList.add("show");
}

const districtImages = {
  north: "assets/districts/north.png",
  west: "assets/districts/west.png",
  center: "assets/districts/center.png",
  south: "assets/districts/south.png",
  east: "assets/districts/east.png"
};

const districtImage = document.getElementById("districtImage");

document.querySelectorAll(".district-marker").forEach(marker => {
  marker.addEventListener("click", () => {
    districtImage.src = districtImages[marker.dataset.district];
    districtModal.classList.add("show");
  });
});

bgmToggle.addEventListener("click", () => {
  if (bgm.paused) {
    playTrack(currentTrack);
  } else {
    bgm.pause();
    bgmToggle.textContent = "▶";
  }
});

bgmVolume.addEventListener("input", () => {
  bgm.volume = Number(bgmVolume.value);
});

function globalBackToPaper(){
  peoplePage.classList.remove("show");
  factionPage.classList.remove("show");
  mapPage.classList.remove("show");

  worldLoading.classList.remove("show", "unlocking", "open");

  characterModal.classList.remove("show");
  factionModal.classList.remove("show");
  districtModal.classList.remove("show");

  paperPage.classList.add("show");
}

globalBackBtn.addEventListener("click", globalBackToPaper);
