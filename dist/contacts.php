<!doctype html>
<html lang="en">
<?php include('parts/head.php') ?>
<body>
<?php include('parts/header.php') ?>
<section class="stripe">
    <div class="container">
        <h2>Contacts</h2>
        <nav><a href="index.php">home</a> > <a href="about.php">Contacts</a></nav>
    </div>
</section>
<section class="contact-form">
    <div class="container">
        <form action="">
            <div class="input-container">
                <input type="text" placeholder="First Name">
                <input type="text" placeholder="Last Name">
                <input type="email" placeholder="Your E-Mail">
                <input type="text" placeholder="Website">
            </div>
            <textarea placeholder="Your Message " name="" id="" cols="30" rows="5"></textarea>
            <input type="submit" value="SEND">
        </form>
    </div>
</section>
<section class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18452.01109629476!2d25.272775101042235!3d54.68320404428877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92f6170c220eccc4!2sLietuvos+nacionalinis+dramos+teatras!5e0!3m2!1slt!2slt!4v1517013428188" width="100%" height="400px" frameborder="0" style="border:0" allowfullscreen></iframe>
</section>

<?php include('parts/footer.php') ?>
</body>
</html>