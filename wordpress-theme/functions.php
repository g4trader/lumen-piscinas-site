<?php
/**
 * Lúmen Piscinas e Lazer Theme Functions
 *
 * @package LumenPiscinas
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Theme Setup
 */
function lumen_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'lumen-piscinas'),
    ));
    
    // Set content width
    $GLOBALS['content_width'] = 1280;
}
add_action('after_setup_theme', 'lumen_theme_setup');

/**
 * Enqueue Scripts and Styles
 */
function lumen_enqueue_assets() {
    // Enqueue styles
    wp_enqueue_style('lumen-theme-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue Google Fonts
    wp_enqueue_style('lumen-google-fonts', 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap', array(), null);
    
    // Enqueue scripts
    wp_enqueue_script('lumen-theme-script', get_template_directory_uri() . '/js/theme.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'lumen_enqueue_assets');

/**
 * Register Widget Areas
 */
function lumen_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar do Blog', 'lumen-piscinas'),
        'id'            => 'sidebar-1',
        'description'   => __('Widgets que aparecem na sidebar do blog', 'lumen-piscinas'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'lumen_widgets_init');

/**
 * Custom Excerpt Length
 */
function lumen_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'lumen_excerpt_length');

/**
 * Custom Excerpt More
 */
function lumen_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'lumen_excerpt_more');

/**
 * Add custom image sizes
 */
function lumen_image_sizes() {
    add_image_size('blog-thumbnail', 400, 300, true);
    add_image_size('blog-large', 1200, 675, true);
}
add_action('after_setup_theme', 'lumen_image_sizes');

/**
 * Custom Post Meta
 */
function lumen_post_meta() {
    $date = get_the_date('d M Y');
    $author = get_the_author();
    
    echo '<div class="blog-card-meta">';
    echo '<span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> ' . esc_html($date) . '</span>';
    echo '<span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> ' . esc_html($author) . '</span>';
    echo '</div>';
}

/**
 * Get Post Category
 */
function lumen_get_post_category($post_id = null) {
    if (!$post_id) {
        $post_id = get_the_ID();
    }
    
    $categories = get_the_category($post_id);
    if (!empty($categories)) {
        return esc_html($categories[0]->name);
    }
    
    return '';
}

/**
 * Add SVG support
 */
function lumen_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'lumen_mime_types');

