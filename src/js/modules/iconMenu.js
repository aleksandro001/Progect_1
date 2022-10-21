
export function iconMenu(){
    const iconMenu = document.querySelector('.header__mobile-arrow');
    const headerNav = document.querySelector('.header__nav');
    const headerTel = document.querySelector('.header__tel');
    const sabmenu = document.querySelector('.sabmenu');
    
    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            
            headerTel.classList.toggle('_active');
            headerNav.classList.toggle('_active');
            iconMenu.classList.toggle('_active');

            if(! headerNav.classList.contains('_active') && sabmenu.classList.contains('_active')) {
                sabmenu.classList.remove('_active');
            };
        });
    };
}