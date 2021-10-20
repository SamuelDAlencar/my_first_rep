let pTag = document.getElementsByTagName('p')

function tagConsole(tag) {
  for (let i = 0; i < pTag.length; i++) {
    console.log(tag[i])
  }
}

tagConsole(pTag)