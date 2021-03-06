<!doctype html>
<html lang="en">
<?php include('parts/head.php') ?>

<body>
<?php include('parts/header.php') ?>
<section class="stripe">
    <div class="container">
        <h2>Blog</h2>
        <nav><a href="index.php">home</a> > <a href="blog.php">blog</a> > <a href="#">Blog title</a></nav>
    </div>
</section>
<section class="blog-full-body">
    <div class="container clearfix">
        <div class="blog-content">

            <article class="blog-post clearfix">
                <figure class="blog-image-container js-fullblog-img">
                    <img src="img/blog/blog1_big.jpeg" alt="blog picture">
                    <time class="date-stamp"><span>DATE</span>March 24, 2018</time>
                </figure>
                <h1 class="js-h1">How to Spend Less Than an Hour a Day on Email Marketing</h1>
                <h3 class="js-h3">Posted by: Mastia</h3>
                <div class="full-text-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis ea est illum ipsa itaque liberop tiovolup Conseq uuntur deserunt expedita, fugiat hic illum porro quidem quis recusandae vero? Aliquiassumenda cum delectus eaque eligendi, enim eum excepturi fugit illum impedit in iste laudantium modi natus, nisi nobis gfy  g obcaecati praesentium quis reiciendis rerum sapiente</p>
                    <p>Tumblr literally kogi deep v. Bespoke migas four dollar toast, raw denim gluten-free beard hella cold-pressed lumbersexual vinyl biodiesel scenester lomo fanny pack. Sustainable stumptown street art, +1 Etsy gentrify fashion axe sriracha meh farm-to-table Godard hashtag lo-fi aesthetic irony. Disrupt tofu mlkshk, sartorial Pitchfork retro heirloom ugh PBRB actually ethical. YOLO roof party lomo, cardigan health goth kitsch.</p>

                    <p>DIY food truck Carles aesthetic, sartorial keytar gentrify Neutra synth kogi yr McSweeney’s. Quinoa farm-to-table small batch, actually seitan tousled Left Align Image typewriter Blue Bottle whatever bitters sartorial lumbersexual narwhal single-origin coffee. Salvia Tumblr street art, art party cronut freegan post-ironic forage photo booth mixtape Vice Brooklyn Schlitz ugh wolf.</p>
                    <p>Fingerstache Intelligentsia you probably haven’t heard of them, tilde mustache yr McSweeney’s butcher kale chips Bushwick. Schlitz 3 wolf moon mustache, cold-pressed cred irony Williamsburg locavore small batch umami polaroid photo booth cronut Pitchfork gluten-free. Tofu bitters forage food truck 90’s Pinterest.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptatem optio quasi labore consequuntur repellendus perspiciatis error ipsa fuga. Quasi veniam.Echo Park pork belly irony tilde organic Truffaut wayfarers. Leggings Truffaut ugh, PBRB mixtape 3 wolf moon Schlitz. Cray biodiesel cred, locavore listicle cronut 3 wolf moon small batch paleo</p>
                    <p>DIY food truck Carles aesthetic, sartorial keytar gentrify Neutra synth kogi yr McSweeney’s. Quinoa rm-to-table small batch, actually seitan tousled Left Align Image typewriter Blue Bottle whatever bittesartorial lumbersexual narwhal single-origin coffee. Salvia Tumblr street art, art party cronut freegan post-ironic forage photo booth mixtape Vice Brooklyn Schlitz ugh wolf.</p>

                    <p>ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, voluptatem optio quasi labore consequuntur pellendus perspiciatis error ipsa fuga. Quasi veniam.Echo Park pork belly irony tilde organic Truffawayfarers. Leggings Truffaut ugh, PBRB mixtape 3 wolf moon Schlitz. Cray biodiesel cred, locavore listicle cronut 3 wolf moon small batch paleo</p>
                    <p>Tumblr literally kogi deep v. Bespoke migas four dollar toast, raw denim gluten-free beard hella cold-pressed lumbersexual vinyl biodiesel scenester lomo fanny pack.</p>
                </div>
                <h6>Share WITH</h6>
                <a class="social-button facebook" href="#">Facebook</a>
                <a class="social-button twitter" href="#">Twitter</a>
                <a class="social-button gplus" href="#">Google Plus</a>
                <a class="social-button instagram" href="#">Instagram</a>
                <h2>submit a comment</h2>
                <p>Your email address will not be published. Required fields are marked <span>*</span></p>
                <form>
                    <div class="input-container">
                        <input type="text" placeholder="Name*">
                        <input type="email" placeholder="E-mail*">
                        <input type="text" placeholder="Website">
                    </div>
                    <textarea name="comment" id="comment" cols="30" rows="5" placeholder="Your Comment"></textarea>
                    <input type="submit" value="SUBMIT comment">
                </form>

            </article>
        </div>

        <aside class="right-side-bar">
            <?php include('parts/blog-right-sidebar.php') ?>
        </aside>
    </div>
</section>
<?php include('parts/footer.php') ?>
</body>
</html>