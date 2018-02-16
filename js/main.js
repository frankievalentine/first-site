// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//day/night toggle functionality
$('#toggle-box-checkbox').on('change', function(){
  if(this.checked) {
    $('body').addClass('switcher');
    $('.jumbotron').addClass('jumbotron2');
    $('.list-group-item').addClass('listgroup');
    $('.img-thumbnail').addClass('borderdark');
    $('.fa.fa-fw').addClass('navdark');
    $('.nav-link').addClass('navlinkdark');
    $('.logo').addClass('nologo');
    $('.noborder1').addClass('unsplashmar');
  } else{
    $('body').removeClass('switcher');
    $('.jumbotron').removeClass('jumbotron2');
    $('.list-group-item').removeClass('listgroup');
    $('.img-thumbnail').removeClass('borderdark');
    $('.fa.fa-fw').removeClass('navdark');
    $('.nav-link').removeClass('navlinkdark');
    $(".logo").removeClass('nologo');
    $(".noborder1").removeClass("unsplashmar");
  }
})
