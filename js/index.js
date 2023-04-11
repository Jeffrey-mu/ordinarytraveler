window.onload = () => {
  useMobileMenu()
}
function useMobileMenu() {
  let mobile_menu = document.querySelector('.mobile_menu');
  let icon_caidan = document.querySelector('.mobile_header .icon-caidan')
  mobile_menu.addEventListener('click', (e) => {
    if (e.target === mobile_menu) {
      changeMenu(false)
    }
  })
  icon_caidan.addEventListener('click', (e) => {
      changeMenu(true)
  })
  function changeMenu(state) {
    mobile_menu.style.width = state ? '100vw' : '0';
    document.body.style.overflow = state ? 'hidden' : 'auto';
  }
  return [changeMenu]
}
