<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header" id="site-header">
    <div class="container">
        <div class="header-inner">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo">
                <div class="logo-circle">
                    <span>L</span>
                </div>
                <div class="logo-text">
                    <span class="logo-name">LÚMEN</span>
                    <span class="logo-tagline">Piscinas e Lazer</span>
                </div>
            </a>

            <nav class="main-navigation">
                <?php
                if (has_nav_menu('primary')) {
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container' => false,
                        'menu_class' => '',
                        'fallback_cb' => false,
                        'link_before' => '',
                        'link_after' => '',
                    ));
                } else {
                    lumen_fallback_menu();
                }
                ?>
                <a href="https://wa.me/5551991579710" target="_blank" rel="noopener noreferrer" class="header-cta">
                    Orçamento
                </a>
            </nav>

            <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
        </div>
    </div>

    <div class="mobile-menu" id="mobile-menu">
        <nav>
            <?php
            if (has_nav_menu('primary')) {
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'menu_class' => '',
                    'fallback_cb' => false,
                ));
            } else {
                lumen_fallback_menu();
            }
            ?>
            <a href="https://wa.me/5551991579710" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="margin-top: 2rem;">
                Solicitar Orçamento
            </a>
        </nav>
    </div>
</header>

<?php
/**
 * Fallback menu if no menu is assigned
 */
function lumen_fallback_menu() {
    echo '<a href="' . esc_url(home_url('/')) . '">Início</a>';
    echo '<a href="' . esc_url(home_url('/sobre')) . '">Sobre</a>';
    echo '<a href="' . esc_url(home_url('/servicos')) . '">Serviços</a>';
    echo '<a href="' . esc_url(home_url('/portfolio')) . '">Portfólio</a>';
    echo '<a href="' . esc_url(home_url('/blog')) . '">Blog</a>';
    echo '<a href="' . esc_url(home_url('/contato')) . '">Contato</a>';
}
?>

