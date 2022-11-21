export function iconMenu() {
  const iconMenu = document.querySelector(".header__mobile-arrow");
  const headerNav = document.querySelector(".header__nav");
  const headerTel = document.querySelector(".header__tel");
  const sabmenu = document.querySelector(".sabmenu");
  const menuArrow = document.querySelector(".menu__arrow");

  window.addEventListener("pointerdown", (e) => {
    let point = e.target;
    // console.log(point);

    if (point === menuArrow) {
      sabmenu.classList.toggle("_active");
      // console.log("click");
    }
    if (point.closest(".header__mobile-arrow") === iconMenu) {
      // console.log("click");
      headerTel.classList.toggle("_active");
      headerNav.classList.toggle("_active");
      iconMenu.classList.toggle("_active");
      if (
        !headerNav.classList.contains("_active") &&
        sabmenu.classList.contains("_active")
      ) {
        sabmenu.classList.remove("_active");
      }
    }
    if (!point.closest(".header")) {
    //   console.log(point + "++");
      iconMenu.classList.remove('_active');
      headerNav.classList.remove('_active');
      headerTel.classList.remove('_active');
      sabmenu.classList.remove('_active');
      menuArrow.classList.remove('_active');
      // let del = document.querySelector(".header");
      // let delElement = del.children;
      // console.log(delElement);
      // for (let i = 0; i < delElement.length; ++i) {
      //   let delActive = delElement[i];
      //   if (delActive.classList.contains("_active")) {
      //     delActive.classList.remove("_active");
      //   }
      //   console.log(delActive);
      // }
    } 
    else {return;}
  });

  // if(menuArrow){
  //     menuArrow.addEventListener('click', function (e){
  //         sabmenu.classList.toggle('_active')
  //     });
  // }
  // if (iconMenu) {
  //     iconMenu.addEventListener("click", function (e) {

  //         headerTel.classList.toggle('_active');
  //         headerNav.classList.toggle('_active');
  //         iconMenu.classList.toggle('_active');

  //         if(! headerNav.classList.contains('_active') && sabmenu.classList.contains('_active')) {
  //             sabmenu.classList.remove('_active');
  //         };
  //     });
  // };

  //   window.addEventListener("click", function (e) {
  //   if (!e.target.matches('.sabmenu')) {
  //     let dropdowns = document.getElementsByClassName("sabmenu");
  //     for (let i = 0; i < dropdowns.length; i++) {
  //       let openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('_active')) {
  //         openDropdown.classList.remove('_active');
  //       };
  //     };
  //   };
  // });
}
