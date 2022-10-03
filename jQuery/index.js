// $("h1").css("color", "green"); //document.querySelector("h1") adding 1 property to the css is for selecting. adding 2 for changing the style

// $("button"); //document.querySelectorAll("button")

// $("h1").addClass("big-title margin-50"); // adding class to keep js code clean and use css for styling

// $("h1").text("Bye"); // manupilating the text
// $("button").html("<em>Hey</em>") is equal to $("button").innerHTML("<em>Hey</em>") the code on the left is jQuerry

//ADDING EVENT LISTENER ----

// $("h1").click(function () {
//   $("h1").css("color", "");
// });

//ADDING EVENT LISTENER FOR EVERY BUTTON WITH JS  ---------
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

//ADDING EVENT LISTENER FOR EVERY BUTTON WITH JQUERRY --------

// $("button").click(function () {
//   $("h1").css("color", "purple");
// });

//TARGETING TEXTBOX INPUT for keydown WITH JQUERRY

// $("input").keydown(function (event) {
//   console.log(event.key);
// });

//CHANGING H1 ELEMENTS TEXT WITH A KEYDOWN
// $(document).keydown(function (event) {
//   $("h1").text(event.key);
// });

//MOUSE OVER OR CLICK EVENTS
// $("h1").on("mouseover", function () {
//   $("h1").css("color", "purple");
// });

//cCREATING HTML ELEMENT WITH CODE

// $("h1").before("<button>New</button>"); adding button before the h1 element
// $("h1").after("<button>New</button>"); adding button after the h1 element
// $("h1").prepend("<button>New</button>"); adding button inside the h1 element just before the text
// $("h1").append("<button>New</button>"); adding button inside the h1 element after the text

//HIDING ELEMENT
// $("button").on("click", function () {
//   $("h1").hide();
// });

// TOGGLE ELEMENT INSTEAD OF HIDE (OPEN AND CLOSE)
// $("button").on("click", function () {
//   $("h1").toggle();
// });
// FADEOUT AND FADEIN ELEMENT (fadeToggle)
// $("button").on("click", function () {
//   $("h1").fadeOut();
// });

//COLLAPSE THE ELEMENT LIKE DROPDOWN MENU (slideDown, slideToggle)
// $("button").on("click", function () {
//   $("h1").slideUp();
// });

//ANIMATE CSS RULES CAN BE APPLY FOR ONLY NUMERIC VALUES (NO {color: red})
// $("button").on("click", function () {
//   $("h1").animate({ opacity: 0.5 });
// });

//YOU CAN CHAIN METHODS
// $("button").on("click", function () {
//   $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
// });
