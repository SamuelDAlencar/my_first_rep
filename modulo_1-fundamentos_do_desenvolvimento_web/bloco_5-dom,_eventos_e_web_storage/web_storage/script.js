function saveChanges(key, styleChange) {
  let styleChangePattern = document.getElementsByTagName('body')[0].style.styleChange;

  localStorage.setItem(key, styleChangePattern)
}

saveChanges('backColor', backgroundColor = 'red')