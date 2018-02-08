<!doctype html>
<html lang="en">
<?php include('parts/head.php') ?>

<body>
<?php include('parts/header.php') ?>
<section class="stripe">
    <div class="container">
        <h2>PROJECTS</h2>
        <nav><a href="index.php">home</a> > <a href="projects.php">Projects</a></nav>
    </div>
</section>
<section class="projects-recent-projects">
    <div class="container">
        <h1>Recent PROJECTS</h1>
        <nav>
            <ul class="filter">
                <li data-filter="all">All</li>
                <li data-filter="web">Web</li>
                <li data-filter="html">HTML</li>
                <li data-filter="wp">Wordpress</li>
                <li data-filter="ui">UI</li>
            </ul>
        </nav>
        <div class="gallery-container">
            <figure class="wrapper">
                <a href="img/projects/projects1_big.jpeg">
                    <img src="img/projects/projects1_small.jpeg" alt="">
                    <figcaption class="placer">
                        <h3>name</h3>
                        <ul>
                            <li>tag</li>
                            <li>tag</li>
                            <li>tag</li>
                        </ul>
                    </figcaption>
                </a>

            </figure>
            <figure class="wrapper">
                <img src="img/projects/projects2_small.jpeg" alt="">
            </figure>
            <div class="wrapper">
                <img src="img/projects/projects3_small.jpeg" alt="">
            </div>
            <figure class="wrapper">
                <img src="img/projects/projects4_small.jpeg" alt="">
            </figure>
            <figure class="wrapper">
                <img src="img/projects/projects5_small.jpeg" alt="">
            </figure>
            <figure class="wrapper">
                <img src="img/projects/projects6_small.jpeg" alt="">
            </figure>
            <figure class="wrapper">
                <img src="img/projects/projects7_small.jpeg" alt="">
            </figure>
        </div>
    </div>

</section>


<?php include('parts/footer.php') ?>
</body>
</html>