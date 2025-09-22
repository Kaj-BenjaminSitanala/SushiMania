const openMenu = document.querySelector("main section button");
  const menuList = document.querySelector("main section form");

  openMenu.addEventListener('click', () => {
    menuList.classList.toggle('open');
  });
