<?php

class tt_PostSliderWidget extends WP_Widget {

    function __construct() {
        $widget_ops = array('classname' => 'post_slider', 'description' => 'Posts show in carousel.');
        parent::__construct(false, ': Post Slider', $widget_ops);
    }

    function widget($args, $instance) {
        global $post;
        extract($args);
        extract(array_merge(array(
                    'title' => '',
                    'number_posts' => 5,
                    'exclude_posts' => '',
                    'exclude_cats' => '',
                    'post_id' => '',
                    'post_type' => 'post'
                        ), $instance));

        $q = array();
        $q['post_type'] = $post_type;
        if( $post_id != '' ) {
            $q['post__in'] = explode(',', $post_id);
        }
        if( $exclude_posts != '' ) {
            $q['post__not_in'] = explode(',', $exclude_posts);
        }
        $q['posts_per_page'] = $number_posts;
        $q['ignore_sticky_posts'] = 1;
        if( $exclude_cats != '') {
            $q['category__not_in'] = explode(',', $exclude_cats);
        }
        $q['meta_query'] = array(array('key' => '_thumbnail_id'));

        query_posts($q);

        

        print($before_widget);

        if ($title != ''){
            echo "" . $args['before_title'] . $title . $args['after_title'];
        }

        echo '<div class="swiper-container" data-autoplay="5000" data-loop="1" data-speed="500" data-center="0" data-slides-per-view="1">
                        <div class="swiper-wrapper">';
        while (have_posts()) : the_post();

                if( $post_type == 'post' ) {
                    $cats = get_the_category_list( esc_html__(', ', 'nrgnetwork') );
                }else {
                    $cats = get_the_term_list(get_the_ID(), 'portfolio_entries', '', ', ');
                }

                echo '<div class="swiper-slide">
                        <div class="be-post style-3">
                            <a href="'. esc_url( get_permalink() ) .'" class="be-img-block">
                            '. get_the_post_thumbnail($post->ID, 'nrgnetwork-folio-grid') .'
                            </a>
                            <a href="'. esc_url( get_permalink() ) .'" class="be-post-title">'. get_the_title() .'</a>
                            <span class="be-post-tag">
                                '. $cats .'
                            </span>
                        </div>
                    </div>';
        endwhile;
        echo '</div>
                <div class="pagination">
                    </div>
            </div>';
        print($after_widget);

        wp_reset_postdata();
    }

    function update($new_instance, $old_instance) {
        $instance = $old_instance;
        $instance['title'] = sanitize_text_field($new_instance['title']);
        $instance['number_posts'] = sanitize_text_field($new_instance['number_posts']);
        $instance['exclude_cats'] = sanitize_text_field($new_instance['exclude_cats']);
        $instance['exclude_posts'] = sanitize_text_field($new_instance['exclude_posts']);
        $instance['post_id'] = sanitize_text_field($new_instance['post_id']);
        $instance['post_type'] = $new_instance['post_type'];

        return $instance;
    }

    function form($instance) {

        //Output admin widget options form
        extract(shortcode_atts(array(
                    'title' => '',
                    'number_posts' => 5,
                    'exclude_posts' => '',
                    'exclude_cats' => '',
                    'post_id' => '',
                    'post_type' => ''
                        ), $instance));
        ?>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('title')); ?>"><?php esc_html_e("Title:", 'nrgnetwork'); ?></label>
            <input type="text" class="widefat" id="<?php echo esc_attr($this->get_field_id('title')); ?>" name="<?php echo esc_attr($this->get_field_name('title')); ?>" value="<?php echo esc_attr($title); ?>"  />
        </p>
        <p>
            <input type="text" id="<?php echo esc_attr($this->get_field_id('number_posts')); ?>" name="<?php echo esc_attr($this->get_field_name('number_posts')); ?>" value="<?php echo esc_attr($number_posts); ?>" size="3" />
            <label for="<?php echo esc_attr($this->get_field_id('number_posts')); ?>">Number of posts to show</label>
        </p>
        <p>
            <input type="text" id="<?php echo esc_attr($this->get_field_id('exclude_cats')); ?>" name="<?php echo esc_attr($this->get_field_name('exclude_cats')); ?>" value="<?php echo esc_attr($exclude_cats); ?>" size="3" />
            <label for="<?php echo esc_attr($this->get_field_id('exclude_cats')); ?>">Exclude category ID (optional)</label>
            <br><small>You can include multiple categories with comma separation.</small>
        </p>
        <p>
            <input type="text" id="<?php echo esc_attr($this->get_field_id('exclude_posts')); ?>" name="<?php echo esc_attr($this->get_field_name('exclude_posts')); ?>" value="<?php echo esc_attr($exclude_posts); ?>" size="3" />
            <label for="<?php echo esc_attr($this->get_field_id('exclude_posts')); ?>">Exclude post ID (optional)</label>
            <br><small>You can include multiple posts with comma separation.</small>
        </p>
        <p>
            <input type="text" id="<?php echo esc_attr($this->get_field_id('post_id')); ?>" name="<?php echo esc_attr($this->get_field_name('post_id')); ?>" value="<?php echo esc_attr($post_id); ?>" />
            <label for="<?php echo esc_attr($this->get_field_id('post_id')); ?>">Post ID (optional)</label>
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('post_type')); ?>"><?php esc_html_e('Select Type:', 'nrgnetwork') ?></label>
            <select id="<?php echo esc_attr($this->get_field_id('post_type')); ?>" name="<?php echo esc_attr($this->get_field_name('post_type')); ?>">
                <option value="post" <?php if($post_type == 'post') echo 'selected="selected"'; ?>>Post</option>
                <option value="portfolio" <?php if($post_type == 'portfolio') echo 'selected="selected"'; ?>>Portfolio</option>
            </select>
            
        </p>

        <?php
    }

}

add_action('widgets_init', create_function('', 'return register_widget("tt_PostSliderWidget");'));
