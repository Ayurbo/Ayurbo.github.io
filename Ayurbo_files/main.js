// Navbar Scripts
function checkAndChangeNav(){
    if(window.matchMedia("(max-width: 992px)").matches){
        $("#navmenu").removeClass("nav-bg-light").addClass("nav-bg-light");
        $("#project-scope-left").removeClass("order-last").addClass("order-last");
    } else {
        $("#navmenu").removeClass("nav-bg-light");
        $("#project-scope-left").removeClass("order-last");

    }
}

function handleNavonScroll(){
    if(!window.matchMedia("(max-width: 992px)").matches){
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            $("#navmenu").removeClass("nav-bg-light").addClass("nav-bg-light");
        } else {
            $("#navmenu").removeClass("nav-bg-light");
        }
    }
}

$(function() {
    $('#nav-toggle').click(function() {
      if($('#nav-toggle-icon').hasClass("fa-ellipsis-v")){
        $("#nav-toggle-icon").removeClass("fa-ellipsis-v").addClass("fa-times")
      } else {
        $("#nav-toggle-icon").removeClass("fa-times").addClass("fa-ellipsis-v")
      }
    });
});

checkAndChangeNav();
window.onresize = checkAndChangeNav;
window.onscroll = handleNavonScroll;

// Nav Smooth Scroll
// Cache selectors
var topMenu = $("#navmenu-links"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var id = $(this).attr("href");
        try {
            var item = $(id);
          if (item.length) {
            return item;
          }
        } catch {}
      });

// Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;

//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";
//    // Set/remove active class
//    menuItems
//      .parent().removeClass("active")
//      .end().filter("[href='#"+id+"']").parent().addClass("active");
// });​

$(window).scroll(function(){
    // Get Container Scroll Position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get Id of current scroll item
    var current = scrollItems.map(function(){
        if($(this).offset().top < fromTop){
            return this;
        }
    });
    // Get id of the current element
    current = current[current.length - 1];
    var id = current && current.length ? current[0].id : "";

    // Set or Remove active class
    menuItems.parent().removeClass("active")
    .end().filter("[href='#"+id+"']").parent().addClass("active");

    // If menu has a dropdown, select parent menu
    var currentSetMenu = menuItems.filter("[href='#"+id+"']").parent();
    if(currentSetMenu.hasClass("dropdown-menu")){
        currentSetMenu.parent().addClass("active");
    }
})

// Hero Image Spotlight
$(document).mousemove(function(e){
    var x = e.pageX;
    var y = e.pageY;

    $('.spotlight-image').css('clip-path', 'circle(20% at '+x+'px '+y+'px)');
})

// Home section height
let homeSectionHeight = $('#home').height() - 70;
console.log(homeSectionHeight)
$('#project-scope').css('margin-top', homeSectionHeight + 'px')
// $('#project-scope').css('height', homeSectionHeight + 'px')