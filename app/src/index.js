chrome.devtools.panels.elements.createSidebarPane(
  "imScraper",
  function (sidebar) {
    // sidebar.setObject({ some_data: "Some data to show" });
    sidebar.setPage("app/src/index.html");
    console.log("sidebar pan here")
  }
);

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "Files/createProject.html", true);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     document.querySelector(".container").innerHTML = xhr.responseText;
//   }
// };
// xhr.send();
