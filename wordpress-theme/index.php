<?php
/**
 * The main template file
 *
 * @package LumenPiscinas
 */

get_header();
?>

<main class="site-main">
    <?php if (have_posts()) : ?>
        <div class="blog-grid">
            <div class="container">
                <div class="blog-grid-inner">
                    <?php while (have_posts()) : the_post(); ?>
                        <article id="post-<?php the_ID(); ?>" <?php post_class('blog-card'); ?>>
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="blog-card-image">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php the_post_thumbnail('blog-large', array('alt' => get_the_title())); ?>
                                    </a>
                                    <?php
                                    $category = lumen_get_post_category();
                                    if ($category) :
                                    ?>
                                        <span class="blog-card-category"><?php echo esc_html($category); ?></span>
                                    <?php endif; ?>
                                </div>
                            <?php endif; ?>
                            
                            <div class="blog-card-content">
                                <?php lumen_post_meta(); ?>
                                
                                <h3>
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h3>
                                
                                <p><?php echo wp_trim_words(get_the_excerpt(), 30); ?></p>
                                
                                <a href="<?php the_permalink(); ?>" class="blog-card-link">
                                    Ler Artigo Completo
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    <?php endwhile; ?>
                </div>
                
                <?php
                // Pagination
                the_posts_pagination(array(
                    'mid_size' => 2,
                    'prev_text' => '&laquo; Anterior',
                    'next_text' => 'Próxima &raquo;',
                ));
                ?>
            </div>
        </div>
    <?php else : ?>
        <div class="container">
            <div class="text-center" style="padding: 4rem 0;">
                <h2>Nenhum post encontrado</h2>
                <p>Desculpe, não encontramos nenhum conteúdo.</p>
            </div>
        </div>
    <?php endif; ?>
</main>

<?php
get_footer();

