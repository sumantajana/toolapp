


export default function initialJs(location, ClipboardJS, PerfectScrollbar) {
    var body = window.$('body');
    var mainWrapper = window.$('.main-wrapper');
    var footer = window.$('footer');
    var sidebar = window.$('.sidebar');
    var navbar = window.$('.navbar').not('.top-navbar');
    // Enable feather-icons with SVG markup
    // feather.replace();
    // initializing bootstrap tooltip
    // window.$('[data-toggle="tooltip"]').tooltip();
    // initialize clipboard plugin
    if (window.$('.btn-clipboard').length) {
        var clipboard = new ClipboardJS('.btn-clipboard');
        // Enabling tooltip to all clipboard buttons
        window.$('.btn-clipboard').attr('data-toggle', 'tooltip').attr('title', 'Copy to clipboard');
        // initializing bootstrap tooltip
        window.$('[data-toggle="tooltip"]').tooltip();
        // initially hide btn-clipboard and show after copy
        clipboard.on('success', function (e) {
            e.trigger.classList.value = 'btn btn-clipboard btn-current'
            window.$('.btn-current').tooltip('hide');
            e.trigger.dataset.originalTitle = 'Copied';
            window.$('.btn-current').tooltip('show');
            setTimeout(function () {
                window.$('.btn-current').tooltip('hide');
                e.trigger.dataset.originalTitle = 'Copy to clipboard';
                e.trigger.classList.value = 'btn btn-clipboard'
            }, 1000);
            e.clearSelection();
        });
    }
    // Applying perfect-scrollbar 
    if (window.$('.sidebar .sidebar-body').length) {
        const sidebarBodyScroll = new PerfectScrollbar('.sidebar-body');
    }
    if (window.$('.content-nav-wrapper').length) {
        const contentNavWrapper = new PerfectScrollbar('.content-nav-wrapper');
    }
    // Sidebar toggle to sidebar-folded
    window.$('.sidebar-toggler').on('click', function (e) {
        window.$(this).toggleClass('active');
        window.$(this).toggleClass('not-active');
        if (window.matchMedia('(min-width: 992px)').matches) {
            e.preventDefault();
            body.toggleClass('sidebar-folded');
        } else if (window.matchMedia('(max-width: 991px)').matches) {
            e.preventDefault();
            body.toggleClass('sidebar-open');
        }
    });
    // Settings sidebar toggle
    window.$('.settings-sidebar-toggler').on('click', function (e) {
        window.$('body').toggleClass('settings-open');
    });
    // Sidebar theme settings
    window.$("input:radio[name=sidebarThemeSettings]").click(function () {
        window.$('body').removeClass('sidebar-light sidebar-dark');
        window.$('body').addClass(window.$(this).val());
    })
    // sidebar-folded on large devices
    function iconSidebar(e) {
        if (e.matches) {
            body.addClass('sidebar-folded');
        } else {
            body.removeClass('sidebar-folded');
        }
    }
    var desktopMedium = window.matchMedia('(min-width:992px) and (max-width: 1199px)');
    desktopMedium.addListener(iconSidebar);
    iconSidebar(desktopMedium);
    //Add active class to nav-link based on url dynamically
    function addActiveClass(element) {
        if (current === "") {
            //for root url
            if (element.attr('href').indexOf("index.html") !== -1) {
                element.parents('.nav-item').last().addClass('active');
                if (element.parents('.sub-menu').length) {
                    element.closest('.collapse').addClass('show');
                    element.addClass('active');
                }
            }
        } else {
            //for other url
            if (element.attr('href').indexOf(current) !== -1) {
                element.parents('.nav-item').last().addClass('active');
                if (element.parents('.sub-menu').length) {
                    element.closest('.collapse').addClass('show');
                    element.addClass('active');
                }
                if (element.parents('.submenu-item').length) {
                    element.addClass('active');
                }
            }
        }
    }
    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    window.$('.nav li a', sidebar).each(function () {
        var $this = window.$(this);
        addActiveClass($this);
    });
    window.$('.horizontal-menu .nav li a').each(function () {
        var $this = window.$(this);
        addActiveClass($this);
    })
    //  open sidebar-folded when hover
    window.$(".sidebar .sidebar-body").hover(
        function () {
            if (body.hasClass('sidebar-folded')) {
                body.addClass("open-sidebar-folded");
            }
        },
        function () {
            if (body.hasClass('sidebar-folded')) {
                body.removeClass("open-sidebar-folded");
            }
        });
    // close sidebar when click outside on mobile/table    
    window.$(document).on('click touchstart', function (e) {
        e.stopPropagation();
        // closing of sidebar menu when clicking outside of it
        if (!window.$(e.target).closest('.sidebar-toggler').length) {
            var sidebar = window.$(e.target).closest('.sidebar').length;
            var sidebarBody = window.$(e.target).closest('.sidebar-body').length;
            if (!sidebar && !sidebarBody) {
                if (window.$('body').hasClass('sidebar-open')) {
                    window.$('body').removeClass('sidebar-open');
                }
            }
        }
    });
    // initializing popover
    // window.$('[data-toggle="popover"]').popover();
    //checkbox and radios
    window.$(".form-check label,.form-radio label").append('<i class="input-frame"></i>');
    //Horizontal menu in mobile
    window.$('[data-toggle="horizontal-menu-toggle"]').on("click", function () {
        window.$(".horizontal-menu .bottom-navbar").toggleClass("header-toggled");
    });
    // Horizontal menu navigation in mobile menu on click
    var navItemClicked = window.$('.horizontal-menu .page-navigation >.nav-item');
    navItemClicked.on("click", function (event) {
        if (window.matchMedia('(max-width: 991px)').matches) {
            if (!(window.$(this).hasClass('show-submenu'))) {
                navItemClicked.removeClass('show-submenu');
            }
            window.$(this).toggleClass('show-submenu');
        }
    })
    window.$(window).scroll(function () {
        if (window.matchMedia('(min-width: 992px)').matches) {
            var header = window.$('.horizontal-menu');
            if (window.$(window).scrollTop() >= 60) {
                window.$(header).addClass('fixed-on-scroll');
            } else {
                window.$(header).removeClass('fixed-on-scroll');
            }
        }
    });
}