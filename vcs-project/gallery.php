<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gallery</title>
  <link rel="stylesheet" href="css/gallery.css">
</head>

<body>
<?php include_once('nav.php'); ?>
  <header>
    <h1>GALLERY</h1>
  </header>
  <div class="container">
    <div class="gallery">
      <figure class="gallery__item gallery__item--1">
        <img src="imgs/aerial-photography-of-city-1388030.jpg" alt="Gallery image 1" data-fullimg="aerial-photography-of-city-1388030.jpg"
        class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--2">
        <img src="imgs/silhouette-of-mountains-1323550.jpg" alt="Gallery image 2" data-fullimg="silhouette-of-mountains-1323550.jpg" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--3">
        <img src="imgs/beach-beautiful-boulders-calm-waters-315987.jpg" alt="Gallery image 3" data-fullimg="beach-beautiful-boulders-calm-waters-315987.jpg" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--4">
        <img src="imgs/america-architecture-bay-boat-208745.jpg" alt="Gallery image 4" data-fullimg="america-architecture-bay-boat-208745.jpg" class="gallery_img">
      </figure>
      <figure class="gallery__item gallery__item--5">
        <img src="imgs/orange-powerboat-between-medium-rise-buildings-208701 (1).jpg" alt="Gallery image 5" data-fullimg="orange-powerboat-between-medium-rise-buildings-208701 (1).jpg" class="gallery_img">
      </figure>
      <figure class="gallery__item gallery__item--6">
        <img src="imgs/seaport-during-daytime-132037.jpg" alt="Gallery image 6" data-fullimg="seaport-during-daytime-132037.jpg" class="gallery_img">
      </figure>
      <figure class="gallery__item gallery__item--7">
        <img src="imgs/orange-and-blue-skies-during-sunset-1048283.jpg" alt="Gallery image 7" data-fullimg="orange-and-blue-skies-during-sunset-1048283.jpg" class="gallery_img">
      </figure>
      <figure class="gallery__item gallery__item--8">
        <img src="imgs/aerial-photography-of-city-1388030.jpg" alt="Gallery image 8" data-fullimg="aerial-photography-of-city-1388030.jpg" class="gallery_img">
      </figure>
      <figure class="gallery__item gallery__item--9">
        <img src="imgs/silhouette-of-mountains-1323550.jpg" alt="Gallery image 9" data-fullimg="silhouette-of-mountains-1323550.jpg" class="gallery_img">
      </figure>
    </div>
  </div>
  <footer>
    <div class="footer-wrapper-main">
      <div class="footer-wrapper">
        <div class="left-text-wrapper">
          <p>Contact us</p>
          <p>Email us: <a href="mailto:mail.pauliusg@gmail.com">Send email</a></p>
          <p>Call us: <a href="tel:555-555-5555">8866442200</a></p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.254612263954!2d25.237782000000003!3d54.687546999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDQxJzE1LjIiTiAyNcKwMTQnMTYuMCJF!5e0!3m2!1slt!2slt!4v1594038884539!5m2!1slt!2slt"
          width="600" height="300" frameborder="0" style="border:0;" allowfullscreen="false" aria-hidden="false"
          tabindex="0"></iframe>
        <div class="right-text-wrapper">
          <p>Visit us</p>
          <p>Vingio parkas</p>
          <p>54.687547, 25.237782
          </p>
        </div>
      </div>
    </div>
    <h4 class="copyright">Tripland<?php echo ' ' . '©' . date('Y');?></h4>
  </footer>
  <div class="modal">
    <img class="full-img" src="" alt="">
  </div>


  <script src="https://code.jquery.com/jquery-3.5.1.min.js"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

  <script>
    $(document).ready(function () {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 370) {
          $(".logo").css("color", "black"),
            $(".burger div").css("background", "black"),
            $("nav").css("background", "white");
        } else {
          $(".logo").css("color", "white"),
            $(".burger div").css("background", "white"),
            $("nav").css("background", "rgb(37, 37, 37, 0)");
        }
      })
    })
  </script>

  <script src="js/gallery.js"></script>
  <script src="js/app.js"></script>
</body>

</html>