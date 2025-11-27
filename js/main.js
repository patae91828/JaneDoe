$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".toggle-btn").on("click", function () {
    $("header").toggleClass("open");
  });
  $("nav a").on("click", function () {
    $("header").toggleClass("open");
  });


  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;

    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });
  
/*=================================================
  お申し込みボタン
  ===================================================*/
 let ctabtn = $(".cta-btn");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  ctabtn.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 700) {
      // トップに戻るボタンを表示する
      ctabtn.fadeIn();

      // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      ctabtn.fadeOut();
    }
  });

  
  /*=================================================
  受講生の声、作品集スライダー
  ===================================================*/
  // 受講生の声
  $(".voice-slider").slick({
    arrows: true,
    prevArrow: '<button type="button" class="slide-arrow prev-arrow"><span class="slide-arrow__arrow prev-arrow__arrow"></span></button>',
    nextArrow: '<button type="button" class="slide-arrow next-arrow"><span class="slide-arrow__arrow next-arrow__arrow"></span></button>',
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
          // centerPaddingとslidesToShowの値が変更され、中央余白が"50px"に、表示されるスライドの数が1になります。
        },
      },
    ],
  });


  // 作品集
  $(".collection-slider").slick({
    arrows: false,
    centerMode: false,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "50px",
          slidesToShow: 1,
          // centerPaddingとslidesToShowの値が変更され、中央余白が"50px"に、表示されるスライドの数が1になります。
        },
      },
    ],
  });




  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // 画面がスクロールされた時に実行する

    $(".fadein").each(function () {
      // fadeinクラスに対して順に処理を行う
      // .each()：個別に処理を行うためのメソッド。繰り返し処理を行いながら各要素に対して操作を実行することができる。


      // スクロールした距離
      let scroll = $(window).scrollTop();
      // 現在のスクロール位置を取得する。
      // scrollTop()：要素のスクロール位置を取得

      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;

      // 画面の高さ
      let windowHeight = $(window).height();

      // fadeinクラスの要素が画面内にきたタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {

        // 条件が満たされた場合、要素の不透明度（opacity）を1に設定し、Y軸方向に移動（translateY）させます。
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

  });




  /*=================================================
  プロナビの強み
  ===================================================*/
  const openBtns = document.querySelectorAll('.sp-btn');
  const pages = document.querySelectorAll('.page-modal');
  const modalBg = document.getElementById('modal-bg');

  // モーダルを開く
  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;

      // 背景有効化
      modalBg.style.display = 'block';

      // 背景クリックで閉じる
      modalBg.onclick = closeAll;

      // 全ページ非表示
      pages.forEach(p => {
        p.classList.remove('show');
        p.style.display = 'none';
      });

      // 対象ページ表示
      const page = document.getElementById(target);
      page.style.display = 'block';
      setTimeout(() => page.classList.add('show'), 10);
    });
  });

  // ×で閉じる
  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', closeAll);
  });

  // 閉じる処理
  function closeAll() {
    modalBg.style.display = 'none';
    pages.forEach(p => {
      p.classList.remove('show');
      p.style.display = 'none';
    });
  }


  /*=================================================
  アコーディオンメニュー
  ===================================================*/
  $(function () {
    $('.list-question').on('click', function () {
      $(this).next('.list-answer').slideToggle(200);
    });
  });

});