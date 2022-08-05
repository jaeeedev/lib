const selectLibrary = document.querySelectorAll(".libraryBox > div");
const currentTitle = document.querySelector(".currentTitle");
const currentnewsTitle = document.querySelector(".currentnewsTitle");
const offdaySchedule = document.querySelector(".offdaySchedule");
const mobileMainTitle = document.querySelector(".currentLibInfo h2 span");

let libArr = [
  {
    name: "창원중앙",
    offday: `<div>
    <h3>어린이자료실<br>생활문화공간 다락</h3>
    <p><span>월~목</span>09:00 ~ 22:00</p>
    <p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>종합자료실<br>디지털‧연속간행물실</h3>
    <p><span>월~목</span>09:00 ~ 18:00</p>
    <p><span>토~일</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>자율학습실</h3>
    <p><span>월~일</span>08:00 ~ 22:00</p>
</div>`,
    loca1: 35.233485,
    loca2: 128.679022,
    imgSource: "../img/lib2.jpg",
    textColor: "white",
    address: "(51434) 경상남도 창원시 성산구 용호로 50(반송동)",
    tel: "055-225-7341",
    fax: "055-225-4799",
  },
  {
    name: "성산",
    offday: `<div>
    <h3>종합 자료실<br>연속간행물실</h3>
    <p><span>월~목</span>09:00 ~ 22:00</p>
    <p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>유아‧어린이자료실<br>
    디지털‧다문화자료실</h3>
    <p><span>월~목</span>09:00 ~ 18:00</p>
    <p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>자율학습실</h3>
    <p><span>월~일</span>08:00 ~ 22:00</p>
</div>`,
    loca1: 35.202041,
    loca2: 128.707206,
    imgSource: "../img/lib3.jpg",
    address: "(51472) 경상남도 창원시 성산구 외리로 47(남산동)",
    tel: "055-225-7401",
    fax: "055-225-4801",
  },
  {
    name: "상남",
    offday: `<div>
<h3>종합 자료실<br>디지털‧연속간행물실</h3>
<p><span>화~금</span>09:00 ~ 22:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>유아‧어린이자료실</h3>
<p><span>화~일</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>자율학습실</h3>
<p><span>월~일</span>08:00 ~ 22:00</p>
</div>`,
    loca1: 35.213896,
    loca2: 128.695352,
    imgSource: "../img/lib4.jpg",
    address: "(51500) 경상남도 창원시 성산구 원이대로 810(가음정동)",
    tel: "055-225-7411",
    fax: "055-225-4802",
  },
  {
    name: "최윤덕",
    offday: `<div>
    <h3>어린이자료실</h3>
    <p><span>월~목</span>09:00 ~ 18:00</p>
    <p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>종합자료실</h3>
    <p><span>월~목</span>09:00 ~ 22:00</p>
    <p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>디지털자료실</h3>
    <p><span>월~목</span>09:00 ~ 18:00</p>
    <p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>이룸(학습실)</h3>
    <p><span>월~일</span>08:00 ~ 22:00</p>
</div>`,
    loca1: 35.322956,
    loca2: 128.579755,
    imgSource: "../img/lib5.jpg",
    address: "(51106) 경상남도 창원시 의창구 북면 무동서로 67",
    tel: "055-225-7391",
    fax: "055-225-4801",
  },
  {
    name: "고향의봄",
    offday: `<div>
<h3>참고ㆍ연속간행물실<br>
디지털자료실<br>
유아ㆍ어린이자료실</h3>
<p><span>화~일</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>종합자료실</h3>
<p><span>화~금</span>09:00 ~ 22:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>자율학습실</h3>
<p><span>월~일</span>08:00 ~ 22:00</p>
</div>`,
    loca1: 35.256686,
    loca2: 128.618485,
    imgSource: "../img/lib6.jpg",
    address: "(51371) 경상남도 창원시 의창구 평산로 135번길 32(서상동)",
    tel: "055-225-7371",
    fax: "055-225-4799",
  },
  {
    name: "명곡",
    offday: `<div>
        <h3>어린이‧유아자료실</h3>
        <p><span>화~일</span>09:00 ~ 18:00</p>
    </div>
    <div>
        <h3>종합자료실, 연속간행물실</h3>
        <p><span>화~금</span>09:00 ~ 22:00</p>
        <p><span>주말</span>09:00 ~ 18:00</p>
    </div>
    <div>
        <h3>디지털자료실</h3>
        <p><span>화~일</span>09:00 ~ 18:00</p>
    </div>
    <div>
        <h3>자율학습실</h3>
        <p><span>월~일</span>09:00 ~ 22:00</p>
    </div>`,
    loca1: 35.253333,
    loca2: 128.648453,
    imgSource: "../img/lib7.jpg",
    address: "(51171) 경상남도 창원시 의창구 서곡길 21(명서동)",
    tel: "055-225-7321",
    fax: "-",
  },
  {
    name: "마산합포",
    offday: `<div>
    <h3>일반자료실<br>어린이자료실</h3>
    <p><span>월~목</span>09:00 ~ 22:00</p>
    <p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>디지털자료실<br>
    종합자료실</h3>
    <p><span>월~목</span>09:00 ~ 18:00</p>
    <p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
    <h3>자율학습실</h3>
    <p><span>월~일</span>08:00 ~ 22:00</p>
</div>`,
    loca1: 35.183122,
    loca2: 128.562774,
    imgSource: "../img/lib8.jpg",
    address: "(51742) 경상남도 창원시 마산합포구 월영동16길 22(해운동)",
    tel: "055-225-7441",
    fax: "055-225-4803",
  },
  {
    name: "마산회원",
    offday: `<div>
<h3>어린이자료실</h3>
<p><span>화~일</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>제1·2자료실</h3>
<p><span>화~금</span>09:00 ~ 22:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>자율학습실</h3>
<p><span>월~일</span>08:00 ~ 22:00</p>
</div>`,
    loca1: 35.224629,
    loca2: 128.573516,
    imgSource: "../img/lib9.jpg",
    address: "(51324) 경상남도 창원시 마산회원구 3ㆍ15대로 558(회원동)",
    tel: "055-225-7471",
    fax: "055-225-4804",
  },
  {
    name: "내서",
    offday: `<div>
<h3>어린이자료실<br>디지털‧연속간행물실</h3>
<p><span>월~목</span>09:00 ~ 18:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>종합자료실‧디지털 및 연간물 코너</h3>
<p><span>월~목</span>09:00 ~ 22:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>자율학습실</h3>
<p><span>월~일</span>09:00 ~ 22:00</p>
</div>`,
    loca1: 35.232838,
    loca2: 128.50133,
    imgSource: "../img/lib10.jpg",
    address: "(51324) 경상남도 창원시 마산회원구 내서읍 삼풍로 79(삼계리)",
    tel: "055-225-7481",
    fax: "055-225-4804",
  },
  {
    name: "중리초등",
    offday: `<div>
<h3>어린이자료실</h3>
<p><span>월~금</span>15:30 ~ 18:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
<p><span>방학</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>종합자료실</h3>
<p><span>월~금</span>15:30 ~ 18:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
<p><span>방학</span>09:00 ~ 18:00</p>
</div>
`,
    loca1: 35.255483,
    loca2: 128.519933,
    imgSource: "../img/lib12.jpg",
    address:
      "(51215) 경상남도 창원시 마산회원구 내서읍 호계안길 22(호계리) 중리초등복합시설도서관",
    tel: "055-225-7492",
    fax: "-",
  },
  {
    name: "진해",
    offday: `<div>
<h3>어린이자료실</h3>
<p><span>화~금</span>09:00 ~ 22:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>종합자료실</h3>
<p><span>화~금</span>09:00 ~ 22:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>디지털자료실, 연속간행물실</h3>
<p><span>화~금</span>09:00 ~ 22:00</p>
<p><span>주말</span>09:00 ~ 18:00</p>
</div>
<div>
<h3>자율학습실</h3>
<p><span>월~일</span>08:00 ~ 22:00</p>
<p><span>공휴일</span>08:00 ~ 22:00</p>
</div>`,
    loca1: 35.152537,
    loca2: 128.667531,
    imgSource: "../img/lib13.jpg",
    address: "(51472) 경상남도 창원시 진해구 충장로 141(여좌동)",
    tel: "055-225-7511",
    fax: "055-225-4806",
  },
  {
    name: "동부",
    offday: `<div>
        <h3>어린이자료실<br>디지털‧연속간행물실</h3>
        <p><span>월~목</span>09:00 ~ 22:00</p>
        <p><span>주말</span>09:00 ~ 18:00</p>
        </div>
        <div>
        <h3>종합‧참고 / 연속간행물실</h3>
        <p><span>월~목</span>09:00 ~ 22:00</p>
        <p><span>주말</span>09:00 ~ 18:00</p>
        </div>
        <div>
        <h3>디지털자료실</h3>
        <p><span>월~목</span>09:00 ~ 22:00</p>
        <p><span>주말</span>09:00 ~ 18:00</p>
        </div>
        <div>
        <h3>자율학습실</h3>
        <p><span>월~일</span>08:00 ~ 22:00</p>
        </div>`,
    loca1: 35.100027,
    loca2: 128.81714,
    imgSource: "../img/lib14.jpg",
    address: "(51604) 경상남도 창원시 진해구 용재로 66(용원동)",
    tel: "055-225-7531",
    fax: "055-225-4806",
  },
];

// 헤더 lnb

const menuList = document.querySelectorAll(".menuList li");
const fullList = document.querySelector(".fullList");
const fullListTitle = document.querySelectorAll(".lnbBox h3 a");
const pcHeader = document.querySelector(".pcHeader");

menuList.forEach((li, i) => {
  li.addEventListener("mouseover", () => {
    pcHeader.style.height = "494px";
    fullListTitle[i].style.color = "#ffc831";
    pcHeader.classList.add("hover");
  });
  li.addEventListener("mouseout", () => {
    pcHeader.style.height = "84px";
    fullListTitle[i].style.color = "#222";
    pcHeader.classList.remove("hover");
  });
});

fullList.addEventListener("click", (e) => {
  console.log(e.target);
});

fullList.addEventListener("mouseover", () => {
  pcHeader.style.height = "494px";
  pcHeader.classList.add("hover");
});

fullList.addEventListener("mouseout", () => {
  pcHeader.style.height = "84px";
  pcHeader.classList.remove("hover");
});

fullListTitle.forEach((title) => {
  title.addEventListener("mouseover", () => {
    title.style.color = "#ffc831";
  });

  title.addEventListener("mouseout", () => {
    title.style.color = "#222";
  });
});

// pc 화면에서 absolute 글씨위치잡기
const libInfo = document.querySelector(".pcLibInfo");
window.addEventListener(
  "resize",
  () => {
    if (window.innerWidth > 1280) {
      libInfo.style.left = (window.innerWidth - 1280) / 2 + "px";
    } else {
      libInfo.style.left = "0";
    }
  },
  { passive: true }
);

window.addEventListener(
  "load",
  () => {
    if (window.innerWidth <= 1280) return;
    libInfo.style.left = (window.innerWidth - 1280) / 2 + "px";
  },
  { passive: true }
);

const currentNewsTitle = document.querySelector(".titleSpan");
const currentLibTitle = document.querySelector(".currentTitle");
const openTag = document.querySelector(".openTag");
const pcChangeLib = document.querySelectorAll(
  ".changeCurLib .sideLibSelect li"
);
const pcLibInfo = document.querySelector(".pcLibInfo h3 span");

//모바일 도서관변경

selectLibrary.forEach((div, i) =>
  div.addEventListener("click", () => {
    for (let div of selectLibrary) {
      div.classList.remove("selected");
    }
    div.classList.add("selected");
    pcChangeLib[i].click();
  })
);

//pc 도서관변경

let currentLat = 35.233485;
let currentLng = 128.679022;
const addr = document.querySelector(".mapAddr");
const tel = document.querySelector(".mapTel");
const fax = document.querySelector(".mapFax");

pcChangeLib.forEach((li, i) => {
  li.addEventListener("click", () => {
    for (let li of pcChangeLib) {
      li.classList.remove("selected");
    }
    li.classList.add("selected");
    pcLibInfo.textContent = libArr[i].name;
    offdaySchedule.innerHTML = libArr[i].offday;
    mobileMainTitle.textContent = libArr[i].name;
    changeImg(i);
    changeLocation(i);
    currentLibTitle.textContent = libArr[i].name;
    currentNewsTitle.textContent = libArr[i].name;
    addr.textContent = libArr[i].address;
    tel.textContent = libArr[i].tel;
    fax.textContent = libArr[i].fax;
  });
});

openTag.addEventListener("click", () => {
  document.querySelector(".changeCurLib").classList.toggle("open");
});

function changeImg(index) {
  const img = document.querySelector(".libImg img");
  img.src = libArr[index].imgSource;
}

//지도 스크립트 🗺🗺

function changeLocation(index) {
  const changeGeo = new kakao.maps.LatLng(
    libArr[index].loca1,
    libArr[index].loca2
  );
  currentLat = libArr[index].loca1;
  currentLng = libArr[index].loca2;
  map.setCenter(changeGeo);
}

let options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(35.202041, 128.707206), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

//맵 컨테이너가 display:none -> block으로 변경될때 꼭 필요한 함수
function relayout() {
  map.relayout();
  map.setCenter(new kakao.maps.LatLng(currentLat, currentLng));
}

const mapBox = document.querySelector(".mapBox");
const map = new kakao.maps.Map(mapBox, options); //지도 생성
const positions = libArr.map((el) => {
  return {
    title: `${el.name}`,
    latlng: new kakao.maps.LatLng(el.loca1, el.loca2),
  };
});
for (let i = 0; i < positions.length; i++) {
  // 마커 이미지 크기
  let imageSize = new kakao.maps.Size(24, 35);

  // 마커를 생성합니다
  let marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커를 표시할 위치
    title: positions[i].title, // 마커에 마우스를 올리면 타이틀 나옴
  });
}

const viewLocation = document.querySelector(".viewLocation");
const locaPopup = document.querySelector(".locationPopup");
const closeBtn = document.querySelector(".closeMap i");

viewLocation.addEventListener("click", () => {
  locaPopup.classList.add("on");
  relayout();
});

closeBtn.addEventListener("click", () => {
  locaPopup.classList.remove("on");
});

//스크롤 이벤트 😱😱😱

function optimize(cb) {
  let tick = false;

  return () => {
    if (!tick) {
      tick = true;
      requestAnimationFrame(() => {
        cb();
        tick = false;
      });
    }
  };
}

window.addEventListener(
  "scroll",
  optimize(() => {
    if (window.pageYOffset >= 150) {
      document.querySelector(".titleWrap").style.transform = "translateX(0)";
      document.querySelector(".titleWrap").style.opacity = 1;
      document.querySelector(".subTitle").style.transform = "translateX(0)";
      document.querySelector(".subTitle").style.opacity = 1;
    }
    if (window.pageYOffset >= 450) {
      document.querySelector(".bookMenu h2").style.transform = "translateX(0)";
      document.querySelector(".bookMenu h2").style.opacity = 1;
    }
    if (window.pageYOffset >= 950) {
      document.querySelector(".recommend h2").style.transform = "translateX(0)";
      document.querySelector(".recommend h2").style.opacity = 1;
      document.querySelector(".recoLink").style.transform = "translateX(0)";
      document.querySelector(".recoLink").style.opacity = 1;
    }
  }),
  { passive: true }
);

window.addEventListener("load", () => {
  document.querySelector(".pcLibInfo h3").style.transform = "translateY(0)";
  document.querySelector(".pcLibInfo h3").style.opacity = 1;
  document.querySelector(".goHomePage").style.transform = "translateY(0)";
  document.querySelector(".goHomePage").style.opacity = 1;
  document.querySelector(".viewLocation").style.transform = "translateY(0)";
  document.querySelector(".viewLocation").style.opacity = 1;
});

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3500,
  },
  preloadImages: true,
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: -40,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
