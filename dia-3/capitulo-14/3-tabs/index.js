function asTabs(node) {
  var tabs = Array.from(node.children).map(node => {
    var button = document.createElement("button");
    button.textContent = node.getAttribute("data-tabname");
    var tab = {node, button};
    button.addEventListener("click", () => selectTab(tab));
    return tab;
  });
  var tabList = document.createElement("div");
  for (var {button} of tabs) tabList.appendChild(button);
  node.insertBefore(tabList, node.firstChild);
  function selectTab(selectedTab) {
    for (var tab of tabs) {
      var selected = tab == selectedTab;
      tab.node.style.display = selected ? "" : "none";
      tab.button.style.color = selected ? "red" : "";
    }
  }
  selectTab(tabs[0]);
}
asTabs(document.querySelector("tab-panel"));