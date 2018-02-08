<!doctype html>
<html lang="en">
<?php include('parts/head.php') ?>

<body>
<?php include('parts/header.php') ?>
<section class="stripe">
    <div class="container">
        <h2>Blog</h2>
        <nav><a href="index.php">home</a> > <a href="blog.php">blog</a></nav>
    </div>
</section>
<section class="blog-body">
    <div class="container clearfix">
        <div class="blog-content">

            <article class="blog-post clearfix">
                <figure class="blog-image-container">
                    <img src="img/blog/blog1_big.jpeg" alt="blog picture">
                    <time class="date-stamp"><span>DATE</span>March 24, 2017</time>
                </figure>
                <h1>Steps Toward Developing A Content Strategy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis ea est illum ipsa itaque liberop tiovolup Conseq uuntur deserunt expedita, fugiat hic illum porro quidem quis recusandae vero? Aliquiassumenda cum delectus eaque eligendi, enim eum excepturi fugit illum impedit in iste laudantium modi natus, nisi nobis gfy  g obcaecati praesentium quis reiciendis rerum sapiente […]</p>
                <a class="button" href="">READ MORE</a>
            </article>

            <article class="blog-post clearfix">
                <figure class="blog-image-container">
                    <img src="img/blog/blog2_big.jpg" alt="blog picture">
                    <time class="date-stamp"><span>DATE</span>March 24, 2017</time>
                </figure>
                <h2>Looking for Developers? Try This Geeky Communityy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis ea est illum ipsa itaque liberop tiovo uuntur deserunt expedita, fugiat hic illum porro quidem quis recusandae vero? Aliquiassumenda cum delectus eaque eligendi, enim eum excepturi fugit illum impedit in iste laudantium modi natus, nisi nobis gfy  g obcaecati praesentium quis reiciendis rerum sapiente […]</p>
                <a class="button" href="">READ MORE</a>
            </article>

            <article class="blog-post clearfix">
                <figure class="blog-image-container">
                    <img src="img/blog/blog3_big.jpg" alt="blog picture">
                    <time class="date-stamp"><span>DATE</span>March 24, 2017</time>
                </figure>
                <h2>How to Spend Less Than an Hour a Day on Email Marketing</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis ea est illum ipsa itaque liberop tioonseq uuntur deserunt expedita, fugiat hic illum porro quidem quis recusandae vero? Aliquiassumenda cum delectus eaque eligendi, enim eum excepturi fugit illum impedit in iste laudantium modi natus, nisi nobis gfy  g obcaecati praesentium quis reiciendis rerum sapiente […]</p>
                <a class="button" href="">READ MORE</a>
            </article>

        </div>
<!---->
<!--        <nav class="small-chevrons-container">-->
<!--            <i class="fa fa-chevron-left" aria-hidden="true"></i>-->
<!--            <div class="nav-page-number">1</div>-->
<!--            <div class="nav-page-number">2</div>-->
<!--            <i class="fa fa-chevron-right" aria-hidden="true"></i>-->
<!--        </nav>-->

        <aside class="right-side-bar">
            <?php include('parts/blog-right-sidebar.php') ?>
        </aside>
    </div>

</section>
<?php include('parts/footer.php') ?>
</body>
</html>