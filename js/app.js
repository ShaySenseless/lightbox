// problem: when clicking on an image, the user is directed to a link containing the image only - which is bad UX.

//solution: I'm going to create a lightbox function ("modal" in Bootstrap)

//Variables used
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>")

//Add image and caption to the overlay
$overlay.append($image);
$overlay.append($caption);

//1.1 add overlay to the DOM
  $("body").append($overlay);

//2. capture the click event on a link to an imgae
$("#imageGallery a").click(function(event) {
  event.preventDefault();
  //get image source
  var imageSrc = $(this).attr("href");
  $image.attr("src", imageSrc);
  
  //show overlay with clicked image source  
  $overlay.show();
  
  //Use the image "alt" attribute as caption text
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  });

  //hide overlay when clicked
  $overlay.click(function() {
    $overlay.hide();
});