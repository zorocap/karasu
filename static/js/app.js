// Menu select function
menu_nav = document.querySelectorAll("aside.navigation a");
menu_nav.forEach((e) => {
    path = window.location.href
    if (path.includes("?")) {
        path = window.location.href.split('?')[0]
    }
    if (path == e.href) {
        e.setAttribute("data-selected", "")
    }
});

const csrftoken = document.querySelector(
    "input[name='5fb5254b2cfc4bdd9880f5d28b8401c7+nxXK1Y8yd3urhLTEyuzI/111825774864416/7CvXqKBPcCjtvThDkuvh5joGCE81OGUk==']"
  ).value,
  authenticated = document.querySelector(
    "input[name='3dceeab8ab0c4f829ebf48649dcb55de+sgpQbzkZx9oJZt0QeHV7/741269882785047/zz7gWOaAe1ZAiZxtkjPeHndzCBIZeHPX==']"
  ).value;
var path = window.location.pathname.split("/"),
  currentPage = location.pathname.substring(1);
currentPage = currentPage.substring(0, currentPage.indexOf("/"));
var lazyload = lozad();
lazyload.observe();
const _header = document.querySelector("header"),
  _asideNav = document.querySelector("aside.navigation"),
  _outterCont = document.querySelector(".outter--container"),
  _asideBurger = document.querySelector(".header--burger"),
  _navViewMore = document.querySelector(".nav-item-more"),
  _winMinWidth = "(max-width: 700px)",
  _windowSize = window.matchMedia(_winMinWidth);
var mobileLayout = (e) => {
  e.matches
    ? window.addEventListener("scroll", _hideHeader)
    : (window.removeEventListener("scroll", _hideHeader),
      (_header.style.cssText = ""));
};
"watch" === currentPage &&
  (_asideNav.classList.toggle("is--watching"),
  _outterCont.classList.toggle("is--watching"),
  localStorage.setItem("mirai-side-nav", ""),
  _asideNav.classList.remove("is--expanded"),
  _outterCont.classList.remove("is--expanded"));
var prevScrollpos = window.pageYOffset,
  _hideHeader = () => {
    var e = window.pageYOffset;
    (_header.style.top = prevScrollpos > e ? "0" : "-60px"),
      (prevScrollpos = e);
  };
mobileLayout(_windowSize),
  _windowSize.addListener(mobileLayout),
  _asideBurger &&
    _asideBurger.addEventListener("click", () => {
      localStorage.getItem("mirai-side-nav")
        ? localStorage.setItem("mirai-side-nav", "")
        : localStorage.setItem("mirai-side-nav", "is--expanded"),
        _asideNav.classList.toggle("is--expanded"),
        _outterCont.classList.toggle("is--expanded");
    }),
  localStorage.getItem("mirai-side-nav") &&
    (_asideNav.classList.toggle("is--expanded"),
    _outterCont.classList.toggle("is--expanded"));
let _navItems = document.querySelectorAll("aside a");
_navItems.forEach((e) => {
  e.addEventListener("click", (t) => {
    e.href &&
      e.href === window.location.href &&
      (t.preventDefault(),
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })),
      _navItems.forEach((e) => {
        e.removeAttribute("data-selected");
      }),
      e.setAttribute("data-selected", "");
  });
}),
  _navViewMore &&
    _navViewMore.addEventListener("click", () => {
      document.body.insertAdjacentHTML(
        "beforeend",
        '<div class="modal m-nav-modal--container">\n        <div class="m-nav-modal">\n          <div class="flex justify-between align-center m-10-b">\n            <div class="text-biggest ya-title">Navigation</div>\n            <div class="m-nav-close">&times;</div>\n          </div>\n          <div class="m-nav-items">\n            <a href="/history/" class="m-nav-item"><svg viewBox="0 0 24 24">\n              <path fill="currentColor" d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" />\n            </svg>History</a>\n            <button type="button" class="m-nav-item schedule-toggle"><svg viewBox="0 0 24 24">\n              <path fill="currentColor" d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" />\n            </svg>Schedule</button>\n          </div>\n        </div>\n      </div>'
      );
      let e = document.querySelector(".m-nav-modal--container"),
        t = e.querySelector(".m-nav-modal"),
        a = e.querySelector(".m-nav-close"),
        r = e.querySelectorAll(".m-nav-item");
      e
        .querySelector(".schedule-toggle")
        .addEventListener("click", scheduleToggleButton),
        a.addEventListener("click", () => {
          n();
        }),
        (window.onclick = (t) => {
          t.target == e && n();
        }),
        r.forEach((e) => {
          e.addEventListener("click", () => {
            n();
          });
        });
      var n = () => {
        e.classList.add("modal--fade-out"),
          t.classList.add("m-nav-out"),
          setTimeout(
            (killMobileNav = () => {
              e.remove(), clearTimeout(killMobileNav);
            }),
            200
          );
      };
    });
const searchButton = document.querySelector("button[name='search']"),
  mainSearch = document.querySelector("#main-search");
searchButton &&
  searchButton.addEventListener("click", (e) => {
    const t = document.querySelector(".header--container"),
      a = t.querySelector("#center");
    a.classList.add("is--active"), mainSearch.focus();
    t.querySelector("button[name='search-back']").addEventListener(
      "click",
      (e) => {
        a.classList.remove("is--active");
      }
    );
  }),
  document.querySelectorAll(".dropdown").forEach((e) => {
    e.addEventListener("click", (t) => {
      t.stopPropagation(),
        e.classList.toggle("active"),
        e.nextElementSibling.classList.toggle("open");
    }),
      (window.onclick = function () {
        document.querySelectorAll(".dropdown").forEach((e) => {
          e.classList.contains("active") &&
            (e.classList.remove("active"),
            e.nextElementSibling.classList.remove("open"));
        });
      });
  });
var openModal = document.querySelectorAll(".anime-edit, .user-list-entry");
function animeModalButtons() {
  (openModal = document.querySelectorAll(".anime-edit, .user-list-entry")) &&
    openModal.forEach((e) => {
      e.addEventListener("click", (t) => {
        if ("True" == authenticated) {
          var a = window.location.pathname.split("/"),
            r = null;
          switch (currentPage) {
            case "anime":
              (a = a.length < 6 ? a[a.length - 3] : a[a.length - 4]), (r = e);
              break;
            case "watch":
            case "mylist":
              (a = e.dataset.id), (r = e);
              break;
            default:
              (a = (a = e.closest("a").href.split("/"))[a.length - 3]),
                (r = e.closest("a"));
          }
          animeModal(r, currentPage, a);
        } else toastr.info("You must be logged in first.");
      });
    });
}
animeModalButtons();
const globalFavorite = document.querySelector(".anime-fav");
function animeModal(e, t, a) {
  $("body").append(
    '<div class="modal modal-animelist"><div class="modal-content"><div id="modal-close" class="close">&times;</div><div class="modal-banner"><div class="modal-header"><div class="cover"><img class="modal-poster" src="" onerror="this.src=\'/static/img/unavailable.jpg\'" alt=""></div><div class="title"></div><button class="favorite btn btn-small anime-fav" type="submit"><i class="fas fa-heart"></i></button><button class="btn btn-default btn-small anime-save" type="submit">Save</button></div></div><div class="modal-body"><div class="modal-input"><div class="input status"><span class="input-title">Status</span><select class="form-control" name="statuss"></select></div><div class="input score"><span class="input-title">Score</span><input class="form-control" type="number" name="score"></div><div class="input progress"><span class="input-title">Episodes Watched</span><input class="form-control" type="number" name="progress" value=""></div><div class="input start"><span class="input-title">Start Date</span><input class="form-control" type="date" name="start" value=""></div><div class="input finish"><span class="input-title">Finish Date</span><input class="form-control"type="date" name="finish" value=""></div><div class="input repeat"><span class="input-title">Total Rewatches</span><input class="form-control" type="number" name="repeat" value=""></div></div></div></div></div>'
  );
  const r = ["Watching", "Plan to Watch", "Completed", "On-Hold", "Dropped"],
    n = document.querySelector(".modal"),
    o = n.querySelector("#modal-close"),
    s = n.querySelector(".anime-fav"),
    i = n.querySelector(".anime-save");
  for (var c = 0; c < r.length; c++)
    $("select[name='statuss']").append(
      `<option name="statuss" value="${c + 1}">${r[c]}</option>`
    );
  (n.querySelector('option[value="2"]').selected = !0),
    (document.onkeydown = function (e) {
      27 == (e = e || window.event).keyCode && modalClose();
    }),
    (window.onclick = function (e) {
      e.target == n && modalClose();
    }),
    $.ajax({
      method: "POST",
      url: "/api/anime/",
      headers: {
        "X-CSRFToken": csrftoken,
      },
      data: {
        slug: a,
        action: "fetch",
      },
      success: function (l) {
        const d = l.anime.title;
        (n.querySelector(
          ".modal-banner"
        ).style.backgroundImage = `url(${l.anime.banner})`),
          (n.querySelector(".modal-poster").src = l.anime.poster),
          (n.querySelector(".title").innerHTML = l.anime.title),
          (n.querySelector("input[name='score']").value = l.user.score),
          (n.querySelector("input[name='progress']").value = l.user.progress),
          (n.querySelector("input[name='start']").value = l.user.start),
          (n.querySelector("input[name='finish']").value = l.user.finish),
          (n.querySelector("input[name='repeat']").value = l.user.repeat),
          l.user.status &&
            ((n.querySelector(`option[value="${l.user.status}"]`).selected =
              !0),
            $(".modal-body").append(
              '<div class="text-right"><button class="delete btn btn-default btn-small anime-del" type="submit">Delete</button></div>'
            ),
            n
              .querySelector(".anime-del")
              .addEventListener("click", function () {
                function r() {
                  function r(a) {
                    switch (a.message) {
                      case "OK":
                        switch (
                          (toastr.success(
                            `${d} was removed from your list.`,
                            "List Management"
                          ),
                          t)
                        ) {
                          case "profile":
                            e.remove();
                            break;
                          case "anime":
                          case "watch":
                            e.innerHTML = "Add to List";
                        }
                        break;
                      case "UNKNOWN":
                        toastr.error(
                          "Something strange happened. Please refresh or try again later.",
                          "Error"
                        );
                        break;
                      default:
                        serverError(a);
                    }
                  }
                  document.querySelectorAll(".anime-fav").forEach((e) => {
                    e.classList.remove("isFavorite");
                  }),
                    modalClose(),
                    $.ajax({
                      method: "POST",
                      url: "/api/anime/",
                      headers: {
                        "X-CSRFToken": csrftoken,
                      },
                      data: {
                        slug: a,
                        action: "delete",
                      },
                      success: r,
                      error: serverError,
                    });
                }
                messageBox(
                  "Confirmation",
                  "Are you sure you want to delete this list entry?",
                  r
                );
              }),
            l.user.favorite && s.classList.toggle("isFavorite"));
        o.addEventListener("click", (e) => {
          modalClose();
        }),
          s.addEventListener("click", (e) => {
            document.querySelectorAll(".anime-fav").forEach((e) => {
              e.classList.toggle("isFavorite");
            }),
              favoriteAnime(a);
          }),
          i.addEventListener("click", (o) => {
            modalClose(),
              $.ajax({
                method: "POST",
                url: "/api/anime/",
                headers: {
                  "X-CSRFToken": csrftoken,
                },
                data: {
                  slug: a,
                  action: "save",
                  status: n.querySelector(
                    "select[name='statuss'] option:checked"
                  ).value,
                  score: n.querySelector("input[name='score']").value,
                  progress: n.querySelector("input[name='progress']").value,
                  start: n.querySelector("input[name='start']").value,
                  finish: n.querySelector("input[name='finish']").value,
                  repeat: n.querySelector("input[name='repeat']").value,
                },
                success: function (a) {
                  (c = n.querySelector(
                    "select[name='statuss'] option:checked"
                  ).value),
                    ("anime" == t || "watch" == t) && (e.innerHTML = r[c - 1]);
                  switch (a.message) {
                    case "UPDATED":
                      toastr.success(`${d} was updated`, "List Management");
                      break;
                    case "CREATED":
                      toastr.success(
                        `${d} was added to your ${r[c - 1]} list.`,
                        "List Management"
                      );
                      break;
                    default:
                      serverError(a);
                  }
                },
                error: serverError,
              });
          });
      },
      error: serverError,
    });
}
function favoriteAnime(e) {
  $.ajax({
    method: "POST",
    url: "/api/anime/",
    headers: {
      "X-CSRFToken": csrftoken,
    },
    data: {
      slug: e,
      action: "favorite",
    },
    success: function (e) {
      switch (e.message) {
        case "ADDED":
          toastr.success(
            `${e.series} was added to your favorites.`,
            "List Management"
          );
          break;
        case "REMOVED":
          toastr.success(
            `${e.series} was removed from your favorites.`,
            "List Management"
          );
          break;
        case "LIST_ADDED":
          toastr.success(
            `${e.series} was added to your list and favorites.`,
            "List Management"
          );
          break;
        default:
          serverError(e);
      }
    },
    error: serverError,
  });
}
function modalClose() {
  $(".modal").toggleClass("modal--fade-out"),
    $(".modal-content").toggleClass("modal-content--slide-out"),
    setTimeout(function () {
      $(".modal").remove();
    }, 250);
}
function debounce(e, t) {
  var a = 0;
  return function () {
    var r = this,
      n = arguments;
    clearTimeout(a),
      (a = setTimeout(function () {
        e.apply(r, n);
      }, t || 0));
  };
}
globalFavorite &&
  globalFavorite.addEventListener("click", (e) => {
    if ("True" == authenticated) {
      var t = window.location.pathname.split("/");
      switch (currentPage) {
        case "anime":
          (t = t.length < 6 ? t[t.length - 3] : t[t.length - 4]),
            openModal,
            globalFavorite.classList.toggle("isFavorite"),
            favoriteAnime(t);
          break;
        case "watch":
          (t = globalFavorite.dataset.id),
            globalFavorite.classList.toggle("isFavorite"),
            favoriteAnime(t);
          break;
        default:
          toastr.error(
            "Something strange happened. Please refresh or try again later.",
            "Error"
          );
      }
    } else toastr.info("You must be logged in first.");
  });
const searchBox = document.querySelector('input[name="q"]');
if (searchBox) {
  function hideFastSearch() {
    let e = document.querySelector(".fast-search"),
      t = document.querySelector(".unfocus-body");
    (e.style.cssText = "opacity: 0; pointer-events: none"),
      (t.style.cssText = "opacity: 0; pointer-events: none");
  }
  function destroyFastSearch() {
    let e = document.querySelector(".fast-search"),
      t = document.querySelector(".unfocus-body");
    e.classList.add("fast-search-exit"),
      t.classList.add("modal--fade-out"),
      setTimeout(() => {
        e.remove(), t.remove();
      }, 250);
  }
  searchBox.addEventListener("keyup", (e) => {
    "Escape" === e.key && hideFastSearch();
  }),
    document.addEventListener("mousedown", (e) => {
      let t = document.querySelector(".fast-search"),
        a = document.querySelector('input[name="q"]');
      t &&
        (console.log(e.target),
        t.contains(e.target) || e.target === a || hideFastSearch());
    }),
    searchBox.addEventListener("focus", (e) => {
      let t = document.querySelector(".fast-search"),
        a = document.querySelector(".unfocus-body");
      t &&
        "0" == t.style.opacity &&
        ((t.style.cssText = "opacity: 1"), (a.style.cssText = "opacity: 1"));
    }),
    searchBox.addEventListener(
      "input",
      debounce(() => {
        if (searchBox.value) {
          let e = document.querySelector(".fast-search"),
            t = document.querySelector("form.search"),
            a = document.querySelector(".app-loader");
          (a.style.opacity = "1"),
            e
              ? (e.classList.add("fast-search-exit"),
                setTimeout(() => {
                  e.remove();
                }, 250))
              : document.body.insertAdjacentHTML(
                  "beforeend",
                  '<div class="unfocus-body"></div>'
                ),
            $.ajax({
              method: "GET",
              url: `/api/search/?q=${searchBox.value}`,
              headers: {
                "X-CSRFToken": csrftoken,
              },
              success: function (e) {
                (a.style.opacity = "0"),
                  t.insertAdjacentHTML("beforeend", e.data);
              },
              error: serverError,
            });
        } else destroyFastSearch();
      }, 500)
    );
}
const reviewButton = document.querySelector("a[name='write-review']");
reviewButton &&
  reviewButton.addEventListener("click", (e) => {
    e.preventDefault(),
      "True" == authenticated
        ? (window.location.href = reviewButton.href)
        : toastr.warning(
            "You must login first to submit a review.",
            "Account Required"
          );
  });
const reviewBody = document.querySelector(".review-markup");
reviewBody &&
  ((reviewBody.style.height = reviewBody.scrollHeight + "px"),
  reviewBody.addEventListener("keyup", (e) => {
    reviewBody.style.height = reviewBody.scrollHeight + "px";
  }));
const ratings = [
  "🤮 Horrible",
  "😑 Poor",
  "😐 Okay",
  "🙂 Decent",
  "😊 Good",
  "😁 Enjoyable",
  "😃 Great",
  "😄 Excellent",
  "😍 Amazing",
  "🤩 Masterpiece",
];
document.querySelectorAll(".rating-up").forEach((e) => {
  e.addEventListener("click", (t) => {
    var a = Number(e.previousElementSibling.innerHTML);
    a < 10 &&
      a >= 1 &&
      ((a += 1),
      (e.previousElementSibling.innerHTML = a),
      (e.parentNode.nextElementSibling.innerHTML = ratings[a - 1]));
  });
}),
  document.querySelectorAll(".rating-down").forEach((e) => {
    e.addEventListener("click", (t) => {
      var a = Number(e.nextElementSibling.innerHTML);
      a > 1 &&
        a <= 10 &&
        ((a -= 1),
        (e.nextElementSibling.innerHTML = a),
        (e.parentNode.nextElementSibling.innerHTML = ratings[a - 1]));
    });
  });
const submitReview = document.querySelector("button[name='review-submit']");
submitReview &&
  submitReview.addEventListener("click", (e) => {
    if ("True" == authenticated) {
      const e = window.location.pathname.split("/"),
        t = document.querySelector("textarea[name='review']").value,
        a = document.querySelector("input[name='summary']").value,
        r = document.querySelector("input[name='private']").checked,
        n = document.querySelector("input[name='spoiler']").checked,
        o = document.querySelectorAll(".rating");
      $.ajax({
        method: "POST",
        url: "/api/review/",
        headers: {
          "X-CSRFToken": csrftoken,
        },
        data: {
          action: "submit",
          slug: e[e.length - 2],
          review: t,
          summary: a,
          private: r,
          spoiler: n,
          story: o[0].innerHTML,
          art: o[1].innerHTML,
          sound: o[2].innerHTML,
          char: o[3].innerHTML,
          overall: o[4].innerHTML,
        },
        success: function (e) {
          switch (e.message) {
            case "OK":
              window.location.replace(`/review/${e.review_id}/`);
              break;
            case "NO_REVIEW":
              toastr.warning("You must write a review to submit.", "Review");
              break;
            case "REV_PROFANITY":
            case "SUM_PROFANITY":
              toastr.error("Your review contains profanity.", "Review");
              break;
            case "REV_SHORT":
              toastr.warning("Your review is too short.", "Review");
              break;
            case "NO_SUMMARY":
              toastr.warning("Your review requires a summary.", "Review");
              break;
            case "SUM_SHORT":
              toastr.warning("Your summary is too short.", "Review");
              break;
            case "INVALID":
              toastr.error(
                "Something strange happened, redirecting...",
                "Review"
              ),
                setInterval(function () {
                  window.location.replace("/");
                }, 5e3);
              break;
            default:
              serverError(e);
          }
        },
        error: serverError,
      });
    } else window.location.replace("/login/");
  });
const reviewDelete = document.querySelector(".review-delete");
reviewDelete &&
  reviewDelete.addEventListener("click", (e) => {
    messageBox(
      "Warning",
      "Are you sure you want to delete this review?",
      function () {
        window.location.replace(window.location.href + "del/");
      }
    );
  });
const voteReview = document.querySelectorAll(".thumbs-up, .thumbs-down");
voteReview &&
  voteReview.forEach((e) => {
    e.addEventListener("click", (t) => {
      if ("True" == authenticated) {
        const t = window.location.pathname.split("/");
        var a = null;
        e.classList.contains("rating--active")
          ? e.classList.remove("rating--active")
          : (e.classList.add("rating--active"), (a = 1)),
          "upvote" == e.name
            ? voteReview[0].classList.remove("rating--active")
            : voteReview[1].classList.remove("rating--active"),
          $.ajax({
            method: "POST",
            url: "/api/review/",
            headers: {
              "X-CSRFToken": csrftoken,
            },
            data: {
              id: t[t.length - 2],
              action: e.name,
            },
            success: function (t) {
              switch (t.message) {
                case "OK":
                  1 == a &&
                    toastr.success(`You ${e.name}d this review.`, "Success!");
                  break;
                case "AUTH":
                  toastr.warning(
                    "You must login first to submit a review.",
                    "Account Required"
                  );
                  break;
                default:
                  serverError(t);
              }
            },
            error: serverError,
          });
      } else
        toastr.warning(
          "You must login first to submit a review.",
          "Account Required"
        );
    });
  });
const charLimit = 256,
  truncate = document.querySelectorAll(".truncate");
function TruncateText(e, t) {
  return e.substr(0, t) + " ... ";
}
truncate &&
  truncate.forEach((e) => {
    var t = e.querySelector("p").innerText;
    if (t.length > 256) {
      let a = TruncateText(t, 256);
      (e.querySelector("p").innerText = a),
        e.insertAdjacentHTML(
          "beforeend",
          '<button type="button" class="btn text-gray btn-gray btn-smallest m-5-t" aria-label="Read More">Read More</button>'
        ),
        e.querySelectorAll("button").forEach((r) => {
          r.addEventListener("click", (r) => {
            "Read More" == r.target.innerText
              ? ((r.target.innerText = "Read Less"),
                (e.querySelector("p").innerText = t))
              : ((r.target.innerText = "Read More"),
                (e.querySelector("p").innerText = a));
          });
        });
    }
  });
var messageBox = (e, t, a) => {
    let r;
    r || (r = "OK"),
      document
        .querySelector("body")
        .insertAdjacentHTML(
          "beforeend",
          `<div class="modal messagebox--container">\n      <div class="messagebox">\n        <div class="messagebox--header">${e}<div class="messagebox--header-close messagebox-close">&times;</div></div>\n        \n        <div class="messagebox--content">${t}</div>\n        \n        <div class="messagebox--footer">\n          <button type="button" name="msgbox-close" class="btn btn-gray btn-small messagebox-close" style="width: 75px;">Cancel</button>\n          <button type="submit" name="msgbox-submit" class="btn btn-default btn-small btn-input" style="width: 75px;">${r}</button>\n        </div>\n      </div>\n    </div>`
        );
    let n = document.querySelector(".messagebox--container"),
      o = n.querySelectorAll(".messagebox-close"),
      s = n.querySelectorAll('button[name="msgbox-submit"]');
    switch (
      ((window.onclick = (e) => {
        e.target == n && msgBoxClose(n);
      }),
      o.forEach((e) => {
        e.addEventListener("click", () => {
          msgBoxClose(n);
        });
      }),
      typeof a)
    ) {
      case "function":
        s.forEach((e) => {
          e.addEventListener("click", () => {
            msgBoxClose(n), a();
          });
        });
        break;
      case "string":
        s.forEach((e) => {
          e.remove();
        }),
          o.forEach((e) => {
            e.remove();
          });
        break;
      default:
        s.forEach((e) => {
          e.addEventListener("click", () => {
            msgBoxClose(n);
          });
        });
    }
  },
  msgBoxClose = (e) => {
    let t = e.querySelector(".messagebox");
    e.classList.add("messagebox--fade-out"),
      t.classList.add("messagebox--slide-out"),
      setTimeout(
        (delMsgBox = () => {
          e.remove(), clearTimeout(delMsgBox);
        }),
        250
      );
  };
const _sidePanelToggles = document.querySelectorAll(
    ".sidepanel--toggle,.sidepanel--toggleback"
  ),
  _sidePanelMain = document.querySelector(".sidepanel--main-panel");
_sidePanelToggles.forEach((e) => {
  e.addEventListener("click", () => {
    if ("block" === _sidePanelMain.style.display) {
      _sidePanelMain.classList.add("sidepanel--slideout");
      let t = document.body.querySelector(".sidepanel--modal");
      t.classList.add("fade-out");
      var e = setInterval(() => {
        _sidePanelMain.classList.remove("sidepanel--slideout"),
          (_sidePanelMain.style.display = "none"),
          t.remove(),
          clearInterval(e);
      }, 200);
    } else {
      let e = document.createElement("div");
      e.classList.add("modal"),
        e.classList.add("sidepanel--modal"),
        (e.style.zIndex = "65"),
        e.addEventListener("click", () => {
          _sidePanelMain.classList.add("sidepanel--slideout"),
            e.classList.add("fade-out");
          var t = setInterval(() => {
            _sidePanelMain.classList.remove("sidepanel--slideout"),
              (_sidePanelMain.style.display = "none"),
              e.remove(),
              clearInterval(t);
          }, 200);
        }),
        document.body.appendChild(e),
        (_sidePanelMain.style.display = "block");
    }
  });
});
const _schedulePanelToggles = document.querySelectorAll(".schedule-toggle");
function scheduleToggleButton() {
  const e = document.querySelector(".schedule-panel");
  if ("block" === e.style.display) {
    e.classList.add("schedule--slideout");
    let a = document.body.querySelector(".sidepanel--modal");
    a.classList.add("fade-out");
    var t = setInterval(() => {
      e.classList.remove("schedule--slideout"),
        (e.style.display = "none"),
        a.remove(),
        clearInterval(t);
    }, 200);
  } else {
    let t = document.createElement("div");
    t.classList.add("modal"),
      t.classList.add("sidepanel--modal"),
      (t.style.zIndex = "65"),
      t.addEventListener("click", () => {
        e.classList.add("schedule--slideout"), t.classList.add("fade-out");
        var a = setInterval(() => {
          e.classList.remove("schedule--slideout"),
            (e.style.display = "none"),
            t.remove(),
            clearInterval(a);
        }, 200);
      }),
      document.body.appendChild(t),
      (e.style.display = "block");
  }
}
_schedulePanelToggles.forEach((e) => {
  e.addEventListener("click", scheduleToggleButton);
});
const _signOut = document.querySelector(".sign-out");
_signOut &&
  _signOut.addEventListener("click", () => {
    messageBox("Confirm", "Are you sure you want to sign out?", function () {
      messageBox(
        "Signing out...",
        "Thanks for using MirainoAnime!",
        "NO_BUTTONS"
      ),
        window.location.replace("/logout/");
    });
  });
var _timeAgo = () => {
  let e = {
    prefix: "",
    suffix: " ago",
    seconds: "less than a minute",
    minute: "about a minute",
    minutes: "%d minutes",
    hour: "about an hour",
    hours: "about %d hours",
    day: "a day",
    days: "%d days",
    month: "about a month",
    months: "%d months",
    year: "about a year",
    years: "%d years",
  };
  var t = (t, a) => e[t] && e[t].replace(/%d/i, Math.abs(Math.round(a)));
  document.querySelectorAll("time").forEach((a) => {
    "object" == typeof a &&
      (a.innerHTML = ((a) => {
        if (a) {
          (a = (a = (a = (a = a.replace(/\.\d+/, ""))
            .replace(/-/, "/")
            .replace(/-/, "/"))
            .replace(/T/, " ")
            .replace(/Z/, " UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2")),
            (a = new Date(1e3 * a || a));
          var r = (0.001 * (new Date().getTime() - a)) >> 0,
            n = r / 60,
            o = n / 60,
            s = o / 24,
            i = s / 365;
          return (
            e.prefix +
            ((r < 45 && t("seconds", r)) ||
              (r < 90 && t("minute", 1)) ||
              (n < 45 && t("minutes", n)) ||
              (n < 90 && t("hour", 1)) ||
              (o < 24 && t("hours", o)) ||
              (o < 42 && t("day", 1)) ||
              (s < 30 && t("days", s)) ||
              (s < 45 && t("month", 1)) ||
              (s < 365 && t("months", s / 30)) ||
              (i < 1.5 && t("year", 1)) ||
              t("years", i)) +
            e.suffix
          );
        }
      })(a.getAttribute("datetime")));
  }),
    setTimeout(_timeAgo, 6e4);
};
_timeAgo();
const _timestamps = document.querySelectorAll(".timer").forEach((e) => {}),
  _duration = document.querySelectorAll(".ep-duration").forEach((e) => {
    "Unknown" === e.textContent && (e.innerText = "24:00");
    let t = e.textContent
      .replace("per ep", "")
      .replace(/\./g, "")
      .replace(" min", ":00")
      .replace(" hr ", ":");
    e.innerText = t;
  }),
  _collapsible = document
    .querySelectorAll(".collapsible-toggle")
    .forEach((e) => {
      e.addEventListener("click", () => {
        let t = e.parentElement;
        t.style.maxHeight
          ? ((t.style.maxHeight = ""), (e.textContent = "View More"))
          : ((t.style.maxHeight = t.scrollHeight + "px"),
            (e.textContent = "View Less"));
      });
    }),
  _videosTimestamp = document
    .querySelectorAll("a.ep-thumbnail")
    .forEach((e) => {
      if (
        ((_videoPath = e.href.split("/watch")[1]),
        localStorage.getItem(_videoPath))
      ) {
        const t = JSON.parse(localStorage.getItem(_videoPath));
        let a = Math.round((t.time / t.duration) * 100);
        a > 90 && (a = 100),
          a >= 5 &&
            e.insertAdjacentHTML(
              "beforeend",
              `<div class="ep-timestamp--container">\n          <div class="ep-timestamp" style="width: ${a}%;"></div>\n        </div>`
            );
      }
    });
// if ("watch" === currentPage) {
//   const e = window.location.pathname.split("/watch")[1],
//     t = document.querySelector("iframe#main-embed"),
//     a = setInterval(() => {
//       let r = t.contentWindow.document.querySelector("video");
//       if (r) {
//         clearInterval(a);
//         const t = (t, a) => {
//           localStorage.setItem(
//             e,
//             JSON.stringify({
//               time: Math.round(t),
//               duration: Math.round(a),
//             })
//           );
//         };
//         if (localStorage.getItem(e)) {
//           let t = JSON.parse(localStorage.getItem(e)).time;
//           r.currentTime = t;
//         }
//         r.addEventListener("timeupdate", () => {
//           t(r.currentTime, r.duration);
//         });
//       }
//       window.addEventListener("beforeunload", () => {});
//     }, 1e3);
//   document
//     .querySelector("button[name='player-lights']")
//     .addEventListener("click", () => {
//       document
//         .querySelector("body")
//         .insertAdjacentHTML("beforeend", '<div class="player-light"></div>');
//       let e = document.querySelector(".player--container"),
//         t = document.querySelector(".player-light");
//       (e.style.zIndex = 2147483647),
//         e.scrollIntoView({
//           behavior: "smooth",
//           block: "center",
//         }),
//         t.addEventListener("click", () => {
//           t.classList.add("fade-out");
//           const a = setTimeout(() => {
//             (e.style.cssText = ""), t.remove(), clearTimeout(a);
//           }, 450);
//         });
//     }),
//     document
//       .querySelector('button[name="player-size"]')
//       .addEventListener("click", () => {
//         let e = document.querySelector("#main-embed");
//         (e.style.cssText =
//           "min-height: 0px; display: block; position: fixed; top: 0px; left: 0px; height: 100%; width: 100%; z-index: 99999999999999;"),
//           (document.body.style.cssText = "overflow: hidden");
//         let t = e.contentWindow.document.createElement("div");
//         (t.style.cssText =
//           "cursor: pointer; position: fixed; top: 0; left: 0; right: 0; background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%); z-index: 99999999999999; text-align: center; padding: 10px; display: none;"),
//           (t.innerText = "Exit Theatre Mode"),
//           t.addEventListener("click", () => {
//             (e.style.cssText = ""),
//               (document.body.style.cssText = ""),
//               t.remove();
//           }),
//           e.addEventListener("mouseover", () => {
//             t.style.display = "block";
//           }),
//           e.addEventListener("mouseout", () => {
//             t.style.display = "none";
//           }),
//           e.contentWindow.document.body.appendChild(t);
//       }),
//     document
//       .querySelector('button[name="player-screenshot"]')
//       .addEventListener("click", () => {
//         let e = document.querySelector("#main-embed"),
//           t = e.contentWindow.document.querySelector("#plyr");
//         if (!t)
//           return toastr.warning(
//             "Video is not loaded yet or the loaded player is external.",
//             "Screenshot"
//           );
//         let a = e.contentWindow.document.querySelector("canvas"),
//           r = e.contentWindow.document.querySelector("#screenshot-tip");
//         if (a)
//           return (
//             (a.style.opacity = "0"),
//             (r.style.opacity = "0"),
//             void setTimeout(() => {
//               a.remove(), r.remove();
//             }, 250)
//           );
//         let n = e.contentWindow.document.createElement("canvas"),
//           o = e.contentWindow.document.createElement("div");
//         (n.width = t.videoWidth),
//           (n.height = t.videoHeight),
//           (n.style.cssText =
//             "position: fixed; width: 100%; box-shadow: 0px 2px 5px 2px #131313c7; bottom: 0; right: 0; transition: all 350ms ease;"),
//           (o.style.cssText =
//             "opacity: 0; position: fixed; width: 25%; bottom: 10px; right: 10px; transition: all 350ms ease 0s; background-color: rgba(0, 0, 0, 0.75); text-align: center; font-size: 12px; padding: 5px; pointer-events: none; font-weight: bold;"),
//           (o.innerText = "Right click to save or copy screenshot."),
//           o.setAttribute("id", "screenshot-tip"),
//           n.getContext("2d").drawImage(t, 0, 0, n.width, n.height),
//           e.contentWindow.document.body.appendChild(n),
//           e.contentWindow.document.body.appendChild(o),
//           setTimeout(() => {
//             (n.style.width = "25%"),
//               (n.style.bottom = "10px"),
//               (n.style.right = "10px");
//           }, 50),
//           setTimeout(() => {
//             o.style.opacity = "1";
//           }, 600),
//           e.contentWindow.document
//             .querySelector(".plyr")
//             .addEventListener("click", () => {
//               let t = e.contentWindow.document.querySelector("canvas"),
//                 a = e.contentWindow.document.querySelector("#screenshot-tip");
//               if (t)
//                 return (
//                   (t.style.opacity = "0"),
//                   (a.style.opacity = "0"),
//                   void setTimeout(() => {
//                     t.remove(), a.remove();
//                   }, 250)
//                 );
//             });
//       });
//   const r = document.querySelector('button[name="player-reload"]');
//   r &&
//     r.addEventListener("click", () => {
//       document.querySelector("#main-embed").src += "";
//     });
//   let n = !1;
//   const o = document.querySelector('button[name="player-external"]');
//   o &&
//     o.addEventListener("click", () => {
//       (o.disabled = !0),
//         (n = !n),
//         document.querySelector("#main-embed").contentWindow.postMessage(
//           {
//             action: "external",
//             value: n,
//           },
//           "*"
//         ),
//         setTimeout(() => {
//           o.disabled = !1;
//         }, 3e3);
//     });
//   let s = document.querySelector("iframe#main-embed"),
//     i = document.querySelector('a[name="next-episode"]');
//   document.querySelector('input[name="auto-play"]');
//   if (i.href) {
//     const c = setInterval(() => {
//       let e = s.contentWindow.document.querySelector("video");
//       e &&
//         (clearInterval(c),
//         e.addEventListener("ended", () => {
//           window.location = i.href;
//         }));
//     }, 1e3);
//   }
// }
if ("discover" === currentPage) {
  let l = new URL(window.location),
    d = document.querySelector("#discover-search"),
    u = document.querySelectorAll("select"),
    m = document.querySelectorAll(".tag"),
    v = document.querySelector(".discover-checkbox");
  v &&
    v.addEventListener("click", () => {
      v.checked
        ? l.searchParams.set("hiddenList", !0)
        : l.searchParams.delete("hiddenList"),
        p();
    }),
    d.addEventListener(
      "input",
      debounce(() => {
        d.value && d.value.length >= 1
          ? l.searchParams.set(d.getAttribute("name"), d.value)
          : l.searchParams.delete(d.getAttribute("name")),
          p();
      }, 500)
    ),
    u.forEach((e) => {
      e.addEventListener("change", () => {
        "Any" === e.value
          ? l.searchParams.delete(e.getAttribute("name"))
          : l.searchParams.set(e.getAttribute("name"), e.value),
          p();
      });
    }),
    m.forEach((e) => {
      e.addEventListener("click", () => {
        if (
          e.hasAttribute("data-selected") ||
          e.hasAttribute("data-excluded")
        ) {
          if (e.hasAttribute("data-selected")) {
            e.removeAttribute("data-selected"),
              e.setAttribute("data-excluded", "");
            let t = e.getAttribute("value").replace(/ /g, "+");
            (l = l.toString().includes(`?genreIncluded=${t}`)
              ? l.toString().replace(`?genreIncluded=${t}`, "")
              : l.toString().replace(`&genreIncluded=${t}`, "")),
              l.toString().includes("?") || (l = l.replace("&", "?")),
              (l = new URL(l)),
              l.searchParams.append(
                "genreExcluded",
                `${e.getAttribute("value")}`
              );
          } else if (e.hasAttribute("data-excluded")) {
            let t = e.getAttribute("value").replace(/ /g, "+");
            (l = l.toString().includes(`?genreExcluded=${t}`)
              ? l.toString().replace(`?genreExcluded=${t}`, "")
              : l.toString().replace(`&genreExcluded=${t}`, "")),
              l.toString().includes("?") || (l = l.replace("&", "?")),
              (l = new URL(l)),
              e.removeAttribute("data-excluded");
          }
        } else
          e.setAttribute("data-selected", ""),
            l.searchParams.append("genreIncluded", e.getAttribute("value"));
        p();
      });
    });
  let p = () => {
    l.searchParams.delete("page"), history.replaceState({}, null, l);
    let e = document.querySelector("nav.pagination"),
      t = document.querySelector(".cards-grid");
    u.forEach((e) => {
      e.disabled = !0;
    }),
      m.forEach((e) => {
        e.setAttribute("disabled", ""), (e.style.pointerEvents = "none");
      }),
      t.insertAdjacentHTML(
        "beforebegin",
        `<div class="loader--container discover-loader" style="min-height: 350px; height: ${t.offsetHeight}px; position: static;"><div class="loader"></div></div>`
      ),
      t.remove(),
      $.ajax({
        method: "GET",
        url: `/api/discover/${window.location.search}`,
        success: (t) => {
          document
            .querySelector(".sidepanel--content")
            .insertAdjacentHTML("beforeend", t.query),
            t.pagination &&
              (e && e.remove(),
              document
                .querySelector(".sidepanel--content")
                .insertAdjacentHTML("beforeend", t.pagination)),
            lazyload.observe(),
            (document.querySelectorAll(
              "h2.ya-title"
            )[0].innerHTML = `<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.2 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M19.5,2A0.5,0.5 0 0,1 20,2.5V11.81C19.42,11.26 18.75,10.81 18,10.5V4.7L15,5.86V10C14.3,10.07 13.62,10.24 13,10.5V5.87L9,4.47V16.13H9V16.5C9,17.14 9.09,17.76 9.26,18.34L8,17.9L2.66,19.97L2.5,20A0.5,0.5 0 0,1 2,19.5V4.38C2,4.15 2.15,3.97 2.36,3.9L8,2L14,4.1L19.34,2.03L19.5,2M4,5.46V17.31L7,16.15V4.45L4,5.46Z" /></svg>Discover (${t.count})`),
            e &&
              (t.hasNext
                ? e.setAttribute("data-page", Number(t.page) + 1)
                : e.remove()),
            document.querySelector(".discover-loader").remove(),
            u.forEach((e) => {
              e.disabled = !1;
            }),
            m.forEach((e) => {
              e.removeAttribute("disabled"), (e.style.pointerEvents = "auto");
            });
        },
        error: (e) => {
          serverError(e);
        },
      });
  };
}
if ("mylist" === currentPage) {
  let h = new URL(window.location),
    g = document.querySelector("#mylist-search"),
    y = document.querySelectorAll("select"),
    b = document.querySelectorAll(".tag");
  g.addEventListener(
    "input",
    debounce(() => {
      g.value && g.value.length >= 3
        ? h.searchParams.set(g.getAttribute("name"), g.value)
        : h.searchParams.delete(g.getAttribute("name")),
        f();
    }, 500)
  ),
    y.forEach((e) => {
      e.addEventListener("change", () => {
        "Any" === e.value
          ? h.searchParams.delete(e.getAttribute("name"))
          : h.searchParams.set(e.getAttribute("name"), e.value),
          f();
      });
    }),
    b.forEach((e) => {
      e.addEventListener("click", () => {
        if (
          e.hasAttribute("data-selected") ||
          e.hasAttribute("data-excluded")
        ) {
          if (e.hasAttribute("data-selected")) {
            e.removeAttribute("data-selected"),
              e.setAttribute("data-excluded", "");
            let t = e.getAttribute("value").replace(/ /g, "+");
            (h = h.toString().includes(`?genreIncluded=${t}`)
              ? h.toString().replace(`?genreIncluded=${t}`, "")
              : h.toString().replace(`&genreIncluded=${t}`, "")),
              h.toString().includes("?") || (h = h.replace("&", "?")),
              (h = new URL(h)),
              h.searchParams.append(
                "genreExcluded",
                `${e.getAttribute("value")}`
              );
          } else if (e.hasAttribute("data-excluded")) {
            let t = e.getAttribute("value").replace(/ /g, "+");
            (h = h.toString().includes(`?genreExcluded=${t}`)
              ? h.toString().replace(`?genreExcluded=${t}`, "")
              : h.toString().replace(`&genreExcluded=${t}`, "")),
              h.toString().includes("?") || (h = h.replace("&", "?")),
              (h = new URL(h)),
              e.removeAttribute("data-excluded");
          }
        } else
          e.setAttribute("data-selected", ""),
            h.searchParams.append("genreIncluded", e.getAttribute("value"));
        f();
      });
    });
  let f = () => {
    h.searchParams.delete("page"), history.replaceState({}, null, h);
    let e = document.querySelector("nav.pagination"),
      t = document.querySelector(".my-list-box");
    y.forEach((e) => {
      e.disabled = !0;
    }),
      b.forEach((e) => {
        e.setAttribute("disabled", ""), (e.style.pointerEvents = "none");
      }),
      t.insertAdjacentHTML(
        "beforebegin",
        `<div class="loader--container mylist-loader" style="min-height: 350px; height: ${t.offsetHeight}px; position: static;"><div class="loader"></div></div>`
      ),
      t.remove(),
      $.ajax({
        method: "GET",
        url: `/api/mylist/${window.location.search}`,
        success: (t) => {
          document
            .querySelector(".sidepanel--content")
            .insertAdjacentHTML("beforeend", t.query),
            t.pagination &&
              (e && e.remove(),
              document
                .querySelector(".sidepanel--content")
                .insertAdjacentHTML("beforeend", t.pagination)),
            lazyload.observe(),
            e &&
              (t.hasNext
                ? e.setAttribute("data-page", Number(t.page) + 1)
                : e.remove()),
            document.querySelector(".mylist-loader").remove(),
            y.forEach((e) => {
              e.disabled = !1;
            }),
            b.forEach((e) => {
              e.removeAttribute("disabled"), (e.style.pointerEvents = "auto");
            }),
            animeModalButtons();
        },
        error: (e) => {
          serverError(e);
        },
      });
  };
}
if ("history" === currentPage) {
  const w = document.querySelector('button[name="clear-watch-history"]'),
    S = document.querySelector('button[name="pause-watch-history"]');
  w.addEventListener("click", () => {
    messageBox(
      "Clear History",
      "Are you sure you want to clear your watch history?<br>This will also wipe your episode timestamps.",
      function () {
        $.ajax({
          method: "POST",
          url: "/api/settings/",
          headers: {
            "X-CSRFToken": csrftoken,
          },
          data: {
            category: "clear-history",
          },
          success: (e) => {
            switch (e.message) {
              case "OK":
                toastr.success(
                  "Your watch history was successfully cleared.",
                  "Watch History"
                ),
                  document
                    .querySelectorAll("ul.ep-list,nav.pagination")
                    .forEach((e) => {
                      e.remove();
                    }),
                  document
                    .querySelector(".sidepanel--content")
                    .insertAdjacentHTML(
                      "beforeend",
                      '<span class="description">Your history is empty. 👀</span>'
                    );
                break;
              case "EMPTY":
                toastr.warning(
                  "Your watch history is already empty.",
                  "Watch History"
                );
            }
          },
          error: (e) => {
            serverError(e);
          },
        });
      }
    ),
      window.localStorage.clear();
  }),
    S.addEventListener("click", () => {
      function e() {
        $.ajax({
          method: "POST",
          url: "/api/settings/",
          headers: {
            "X-CSRFToken": csrftoken,
          },
          data: {
            category: "pause-history",
          },
          success: (e) => {
            if ("OK" === e.message)
              toastr.success(
                "Successfully updated watch history preferences.",
                "Watch History"
              ),
                S.checked
                  ? (S.innerHTML =
                      '<i class="far fa-pause-circle"></i> Pause Watch History')
                  : (S.innerHTML =
                      '<i class="far fa-play-circle"></i> Turn On Watch History');
          },
          error: (e) => {
            serverError(e);
          },
        });
      }
      S.innerHTML.includes("Pause") ? (S.checked = !1) : (S.checked = !0),
        S.checked
          ? e()
          : messageBox(
              "Pause History",
              "Pausing watch history can make it harder to find episodes you watched.<br><br>Are you sure you want to pause your watch history?",
              e
            );
    });
}
const release_tabs = document.querySelectorAll(".sel-lang-button");
release_tabs.forEach((e) => {
  e.addEventListener("click", () => {
    var t, a;
    for (
      a = document.getElementsByClassName("tabcontent"), t = 0;
      t < a.length;
      t++
    )
      a[t].style.display = "none";
    for (t = 0; t < release_tabs.length; t++)
      release_tabs[t].removeAttribute("data-selected");
    e.setAttribute("data-selected", ""),
      (document.getElementById(e.innerText.toLowerCase()).style.display =
        "block");
  });
});
const elemsToFormatEpoch = document.querySelectorAll(".time-schedule");
function timeUntil(e) {
  const t = e - Math.floor(Date.now() / 1e3);
  if (t <= 0) return "Now";
  const a = t % 60,
    r = Math.floor((t / 60) % 60),
    n = Math.floor((t / 3600) % 24),
    o = Math.floor(t / 86400),
    s = [];
  return (
    o > 0 && s.push(`${o}d`),
    n > 0 && s.push(`${n}h`),
    r > 0 && s.push(`${r}m`),
    a > 0 && s.push(`${a}s`),
    s.join(" ")
  );
}
elemsToFormatEpoch &&
  elemsToFormatEpoch.forEach((e) => {
    let t = timeUntil(parseInt(e.dataset.epoch));
    (e.innerText = t),
      setInterval(function () {
        let t = timeUntil(parseInt(e.dataset.epoch));
        e.innerText = t;
      }, 1e3);
  });
const elemsToAbbreviate = document.querySelectorAll(".abbreviate");
function abbreviateNumber(e) {
  return e >= 1e9
    ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "B"
    : e >= 1e6
    ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
    : e >= 1e3
    ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
    : e;
}
elemsToAbbreviate &&
  elemsToAbbreviate.forEach((e) => {
    let t = abbreviateNumber(parseInt(e.innerText));
    e.innerText = t;
  });
const shareButton = document.querySelector(".share-btn");
shareButton &&
  shareButton.addEventListener("click", () => {
    if (navigator.share)
      navigator.share({
        title: document.title,
        url: window.location.href,
      });
    else {
      var e = document.createElement("input");
      document.body.appendChild(e),
        (e.value = window.location.href),
        e.select(),
        document.execCommand("copy"),
        document.body.removeChild(e),
        toastr.success("Link copied to clipboard");
    }
  });
var serverError = (e) => {
  switch (e.status) {
    case 401:
      toastr.error(
        "Performing this action requires elevated privileges.",
        "Unauthorized"
      );
      break;
    case 403:
      toastr.warning(
        "You are not allowed to perform this action.",
        "Forbidden"
      );
      break;
    case 404:
      toastr.warning("Endpoint returned 404", "Not Found");
      break;
    case 500:
      toastr.error(
        "Unhandled exception. Please contact an administrator.",
        "Server Error"
      );
      break;
    default:
      toastr.error(
        "No response was returned. Please contact an administrator.",
        "Server Error"
      );
  }
};
$(".user-list-entry").hover(
  function () {
    $(this).closest("a").bind("click", !1);
  },
  function () {
    var e = $(this).closest("a");
    e.unbind("click", !1), e.blur();
  }
),
  window.addEventListener("load", () => {
    registerServiceWorker();
  });
var registerServiceWorker = async () => {
    if ("serviceWorker" in navigator)
      try {
        await navigator.serviceWorker.register("/sw.js");
      } catch (e) {
        console.log("Service Worker Registeration Failed.");
      }
  },
  swiper = new Swiper(".mySwiper", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    autoplay: {
      delay: 5500,
      disableOnInteraction: !1,
    },
    navigation: {
      nextEl: ".swiper-button-next-unique",
      prevEl: ".swiper-button-prev-unique",
    },
  });
(toastr.options.progressBar = !0), (toastr.options.closeButton = !0);
const scheduleElement = document.querySelector(".schedule-panel");
function updateClock() {
  const e = document.querySelector(".clock"),
    t = new Date().toLocaleTimeString(void 0, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !1,
    });
  e.textContent = t;
}
function startClock() {
  const e = new Date().getTimezoneOffset() / 60,
    t = e >= 0 ? "-" : "+",
    a = Math.abs(e);
  (document.querySelector(".offset").textContent = `GMT${t}${a}`),
    updateClock(),
    setInterval(updateClock, 1e3);
}
$.ajax({
  url: "/schedule.json?4685723984574328328",
  type: "GET",
  success: function (e) {
    const t = e,
      a = new Date();
    a.setHours(0, 0, 0, 0);
    const r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((e) => ({
      day: e,
      episodes: [],
    }));
    t.forEach((e) => {
      const t = new Date(1e3 * e.timestamp).getDay();
      r[t].episodes.push(e);
    });
    const n = a.getDay(),
      o = [...r.slice(n), ...r.slice(0, n)];
    function s(e) {
      e.preventDefault();
      const t = e.target.dataset.id,
        a = JSON.parse(localStorage.getItem("highlightedEpisodeIds")) || [];
      a.includes(t) ? a.splice(a.indexOf(t), 1) : a.push(t),
        localStorage.setItem("highlightedEpisodeIds", JSON.stringify(a)),
        e.target.classList.toggle("highlight");
    }
    function i() {
      const e = new Date();
      o[0].episodes.forEach((t) => {
        const a = document.querySelector(`[data-id="${t.id}"]`);
        if (a) {
          const r = new Date(1e3 * t.timestamp);
          (e.getHours() > r.getHours() ||
            (e.getHours() === r.getHours() &&
              e.getMinutes() >= r.getMinutes())) &&
            (a.style.opacity = 0.5);
        }
      });
    }
    o.forEach((e, t) => {
      const a = document.createElement("div");
      a.className = "schedule-group";
      const r = document.createElement("h2");
      (r.textContent = e.day), a.appendChild(r);
      const n = document.createElement("ul");
      a.appendChild(n),
        e.episodes
          .sort((e, t) => e.timestamp - t.timestamp)
          .forEach((e) => {
            const t = document.createElement("li"),
              a = document.createElement("a"),
              r = document.createElement("span"),
              o = document.createElement("span");
            var i;
            (a.className = "schedule-item"),
              (a.href = `/anime/${e.id}/${e.slug}/`),
              (a.dataset.id = e.id),
              r.addEventListener("click", s),
              (r.textContent =
                ((i = e.timestamp),
                new Date(1e3 * i).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: !1,
                }))),
              (r.dataset.id = e.id),
              r.classList.add("schedule-time");
            (
              JSON.parse(localStorage.getItem("highlightedEpisodeIds")) || []
            ).includes(e.id.toString()) && r.classList.add("highlight"),
              (o.textContent = e.title),
              (o.className = "schedule-title"),
              a.appendChild(r),
              a.appendChild(o),
              t.appendChild(a),
              n.appendChild(t);
          }),
        scheduleElement.appendChild(a);
    }),
      i(),
      setInterval(i, 6e4);
  },
  error: function (e) {
    scheduleElement.insertAdjacentHTML(
      "beforeend",
      '\n      <div class="schedule-body">\n        <div style="padding: 15px; padding-top: 0;">\n          <div style="background: rgb(239, 68, 68); border-radius: 0.375rem; padding: 1rem;">\n            <strong>Error: </strong>\n            An error occurred while fetching data. Please try again later.\n          </div>\n        </div>\n      </div>\n    '
    );
  },
}),
  startClock();
