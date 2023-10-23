function toggleMode() {
  const html = document.documentElement

  /*Esse é um jeito com if e else
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add("light")
  }*/

  /*Esse é um jeito simplificado*/
  html.classList.toggle("light")
}
