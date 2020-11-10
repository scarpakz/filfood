// RESPONSIVE MOBILE NAV
$(document).ready(function(){
    let iconBar = $('.menu-button');
    let mobileNavContainer = $('.mobile-nav-container');
    let closeButton = $('.close-button');

    // OPEN MENU
    iconBar.on('click', (e) => {
        e.preventDefault();
        mobileNavContainer.removeClass('hide');
        mobileNavContainer.addClass('show');
    })

    // CLOSE MODAL MENU
    closeButton.on('click', (e) => {
        e.preventDefault();
        mobileNavContainer.removeClass('show');
        mobileNavContainer.addClass('hide');
    })
});