const bodyNode = window.$('body');
const sidebarHover = () => {
    window.$(".sidebar .sidebar-body").hover(
        function () {
            if (bodyNode.hasClass('sidebar-folded')) {
                bodyNode.addClass("open-sidebar-folded");
            }
        },
        function () {
            if (bodyNode.hasClass('sidebar-folded')) {
                bodyNode.removeClass("open-sidebar-folded");
            }
        }
    );
}
const sidebarToggle = () => {
    if (window.matchMedia('(min-width: 992px)').matches) {
        bodyNode.toggleClass('sidebar-folded');
    } else if (window.matchMedia('(max-width: 991px)').matches) {
        bodyNode.toggleClass('sidebar-open');
    }
}
const handleCollapse = ({ target }) => {
    const { className } = target;
    target.nextSibling.classList.add("collapsing");
    if (!!className && className.indexOf('collapsed') !== -1) {
        target.classList.remove("collapsed");
        target.nextSibling.classList.remove("collapsing");
        target.nextSibling.classList.add("show");
        target.setAttribute('aria-expanded', true);
    } else {
        target.classList.add("collapsed");
        target.nextSibling.classList.remove("collapsing");
        target.nextSibling.classList.remove("show");
        target.setAttribute('aria-expanded', false);
    }
}
const inputFrameI = () => window.$(".form-check label,.form-radio label").append('<i class="input-frame"></i>');
const jsInit = { sidebarHover, sidebarToggle, inputFrameI, handleCollapse };
export default jsInit;