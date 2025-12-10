<?php
/**
 * The template for displaying single posts
 *
 * @package LumenPiscinas
 */

get_header();
?>

<main class="site-main">
    <?php while (have_posts()) : the_post(); ?>
        <div class="single-post-header">
            <div class="container">
                <?php
                $category = lumen_get_post_category();
                if ($category) :
                ?>
                    <span class="section-label"><?php echo esc_html($category); ?></span>
                <?php endif; ?>
                <h1><?php the_title(); ?></h1>
                <div class="single-post-meta">
                    <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <?php echo get_the_date('d M Y'); ?>
                    </span>
                    <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <?php the_author(); ?>
                    </span>
                </div>
            </div>
        </div>

        <div class="single-post-content">
            <div class="container">
                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-featured-image">
                        <?php the_post_thumbnail('blog-large', array('alt' => get_the_title())); ?>
                    </div>
                <?php endif; ?>

                <div class="post-content">
                    <?php
                    the_content();

                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . esc_html__('Páginas:', 'lumen-piscinas'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>

                <?php
                // Post categories and tags
                $categories = get_the_category();
                $tags = get_the_tags();
                
                if ($categories || $tags) :
                ?>
                    <div class="post-taxonomies" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border);">
                        <?php if ($categories) : ?>
                            <div style="margin-bottom: 1rem;">
                                <strong style="color: var(--primary); margin-right: 0.5rem;">Categorias:</strong>
                                <?php
                                foreach ($categories as $cat) {
                                    echo '<a href="' . esc_url(get_category_link($cat->term_id)) . '" style="color: var(--secondary); margin-right: 0.5rem;">' . esc_html($cat->name) . '</a>';
                                }
                                ?>
                            </div>
                        <?php endif; ?>
                        
                        <?php if ($tags) : ?>
                            <div>
                                <strong style="color: var(--primary); margin-right: 0.5rem;">Tags:</strong>
                                <?php
                                foreach ($tags as $tag) {
                                    echo '<a href="' . esc_url(get_tag_link($tag->term_id)) . '" style="color: var(--secondary); margin-right: 0.5rem;">#' . esc_html($tag->name) . '</a>';
                                }
                                ?>
                            </div>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>

                <?php
                // Post navigation
                the_post_navigation(array(
                    'prev_text' => '<span class="nav-subtitle">Anterior</span> <span class="nav-title">%title</span>',
                    'next_text' => '<span class="nav-subtitle">Próximo</span> <span class="nav-title">%title</span>',
                ));
                ?>
            </div>
        </div>
    <?php endwhile; ?>
</main>

<?php
get_footer();

