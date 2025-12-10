<?php
/**
 * The template for displaying all pages
 *
 * @package LumenPiscinas
 */

get_header();
?>

<main class="site-main">
    <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <?php if (has_post_thumbnail()) : ?>
                <div class="page-header-image" style="height: 400px; overflow: hidden; margin-bottom: 3rem;">
                    <?php the_post_thumbnail('full', array('style' => 'width: 100%; height: 100%; object-fit: cover;')); ?>
                </div>
            <?php endif; ?>

            <div class="container" style="max-width: 800px; padding: 2rem 0;">
                <header class="entry-header" style="margin-bottom: 2rem;">
                    <h1><?php the_title(); ?></h1>
                </header>

                <div class="entry-content">
                    <?php
                    the_content();

                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . esc_html__('Páginas:', 'lumen-piscinas'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>
            </div>
        </article>
    <?php endwhile; ?>
</main>

<?php
get_footer();

