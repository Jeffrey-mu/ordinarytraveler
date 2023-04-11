window.onload = () => {
  useMobileMenu()
  // 创建回到顶部按钮元素
  back_to_top()
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
function back_to_top() {
  const scrollToTopBtn = document.createElement("div");
  scrollToTopBtn.classList.add('iconfont', 'icon-backtop')

  // 添加点击事件监听器
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // 将按钮添加到页面中的 body 元素中
  document.body.appendChild(scrollToTopBtn);

  // 添加样式以将按钮放在右下角
  scrollToTopBtn.style.position = "fixed";
  scrollToTopBtn.style.bottom = "40px";
  scrollToTopBtn.style.right = "40px";

  // 监听窗口的滚动事件
  window.addEventListener("scroll", function () {
    // 如果滚动位置小于 200 像素，则隐藏回到顶部按钮，否则显示它
    if (window.scrollY < 200) {
      scrollToTopBtn.style.display = "none";
    } else {
      scrollToTopBtn.style.display = "block";
    }
  });
}
