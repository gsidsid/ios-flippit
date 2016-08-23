// Initialize your app
var myApp = new Framework7({
    tapHold:true,
    animateNavBackIcon: true;
});

// Export selectors engine
var $$ = Dom7;

$$('.nset').on('taphold', function () {
  var buttons = [
        {
            text: 'Edit Options',
            label: true
        },
        {
            text: 'Add cards',
            bold: true
        },
        {
            text: 'Edit cards',
        },
        {
            text: 'Cancel',
            color: 'red'
        },
    ];
    myApp.actions(buttons);
});

$$('.ttab').on('click', function () {
    var table = document.getElementById("mantab");
            if (table != null) {
                for (var i = 0; i < table.rows.length; i++) {
                    for (var j = 0; j < table.rows[i].cells.length; j++)
                     table.rows[i].cells[j].onclick = function () {
                         var clickedLink = this;
                         var popoverHTML;
                         if(i == 0) {
                              popoverHTML = '<div class="popover">'+
                                                  '<div class="popover-inner">'+
                                                    '<div class="content-block">'+
                                                      '<p>Enter content on the front of the card.</p>'+
                                                      '<p>' + this.innerHTML + '</p>'+
                                                    '</div>'+
                                                  '</div>'+
                                                '</div>'
                         } else if(i == 1) {
                             popoverHTML = '<div class="popover">'+
                                                  '<div class="popover-inner">'+
                                                    '<div class="content-block">'+
                                                      '<p>Enter content on the back of the card.</p>'+
                                                      '<p>' + this.innerHTML + '</p>'+
                                                    '</div>'+
                                                  '</div>'+
                                                '</div>'
                         }
                              myApp.popover(popoverHTML, clickedLink);
                      };
                 }
             }

});

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});



// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}
