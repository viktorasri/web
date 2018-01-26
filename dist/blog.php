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

            <div class="blog-post clearfix">
                <div class="blog-image-container">
                    <img src="img/blog/blog1.jpeg" alt="blog picture">
                    <div class="date-stamp"><span>DATE</span>March 24, 2017</div>
                </div>
                <h1>Steps Toward Developing A Content Strategy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis ea est illum ipsa itaque liberop tiovolup Conseq uuntur deserunt expedita, fugiat hic illum porro quidem quis recusandae vero? Aliquiassumenda cum delectus eaque eligendi, enim eum excepturi fugit illum impedit in iste laudantium modi natus, nisi nobis gfy  g obcaecati praesentium quis reiciendis rerum sapiente […]</p>
                <div class="button">READ MORE</div>
            </div>

            <div class="blog-post clearfix">
                <div class="blog-image-container">
                    <img src="img/blog/blog2.jpeg" alt="blog picture">
                    <div class="date-stamp"><span>DATE</span>March 24, 2017</div>
                </div>
                <h2>Looking for Developers? Try This Geeky Communityy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis ea est illum ipsa itaque liberop tiovo uuntur deserunt expedita, fugiat hic illum porro quidem quis recusandae vero? Aliquiassumenda cum delectus eaque eligendi, enim eum excepturi fugit illum impedit in iste laudantium modi natus, nisi nobis gfy  g obcaecati praesentium quis reiciendis rerum sapiente […]</p>
                <div class="button">READ MORE</div>
            </div>

            <div class="blog-post clearfix">
                <div class="blog-image-container">
                    <img src="img/blog/blog3.jpeg" alt="blog picture">
                    <div class="date-stamp"><span>DATE</span>March 24, 2017</div>
                </div>
                <h2>How to Spend Less Than an Hour a Day on Email Marketing</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis ea est illum ipsa itaque liberop tioonseq uuntur deserunt expedita, fugiat hic illum porro quidem quis recusandae vero? Aliquiassumenda cum delectus eaque eligendi, enim eum excepturi fugit illum impedit in iste laudantium modi natus, nisi nobis gfy  g obcaecati praesentium quis reiciendis rerum sapiente […]</p>
                <div class="button">READ MORE</div>
            </div>
            <nav class="small-chevrons-container">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                <div class="nav-page-number">1</div>
                <div class="nav-page-number">2</div>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </nav>
        </div>

        <div class="right-side-bar">
            <?php include('parts/blog-right-sidebar.php') ?>
        </div>
    </div>

</section>
<?php include('parts/footer.php') ?>
</body>
</html>