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
