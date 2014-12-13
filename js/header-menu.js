//home
$(".menu-home").click(function() {
    $("#main-content").load("home.html");
});
//about
$(".menu-products").click(function() {
    $("#main-content").load("products&services.html");
});
$(".menu-about").click(function() {
    $("#main-content").load("about.html");
});
//contact
$('body').on('click', '.menu-contact', function() {
    $("#main-content").load("contact.html");
});
