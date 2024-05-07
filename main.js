////////
//tabs//
////////

const tabs = document.querySelectorAll("[data-tab-target");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    //display tabs
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    //add active class to tab button
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    target.classList.add("active");
  });
});

/////////////
//accordion//
/////////////

const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeaders) => {
  accordionItemHeaders.addEventListener("click", (event) => {
    accordionItemHeaders.classList.toggle("active");
  });
});

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    //scroll back to top

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile nav
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
