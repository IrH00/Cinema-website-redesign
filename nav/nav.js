function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.classList.remove('closed')
  sidebar.classList.add('open')
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.classList.remove('open')
  sidebar.classList.add('closed')
}
