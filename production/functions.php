<?php

/*
  Plugin Name: Custom Registration
  Plugin URI: http://code.tutsplus.com
  Description: Updates user rating based on number of posts.
  Version: 1.0
  Author: Agbonghama Collins
  Author URI: http://tech4sky.com
 */

function custom_registration_function() {
  $reg = false;

    if (isset($_POST['submit'])) {
        registration_validation(
        $_POST['username'],
        $_POST['password'],
        $_POST['email'],
        $_POST['website'],
        $_POST['fname'],
        $_POST['lname'],
        $_POST['nickname'],
        $_POST['bio']
        );

        // sanitize user form input
        global $username, $password, $email, $website, $first_name, $last_name, $nickname, $bio;
        $username   =   sanitize_user($_POST['username']);
        $password   =   esc_attr($_POST['password']);
        $email      =   sanitize_email($_POST['email']);
        $website    =   esc_url($_POST['website']);
        $first_name =   sanitize_text_field($_POST['fname']);
        $last_name  =   sanitize_text_field($_POST['lname']);
        $nickname   =   sanitize_text_field($_POST['nickname']);
        $bio        =   esc_textarea($_POST['bio']);

        // call @function complete_registration to create the user
        // only when no WP_error is found
        $reg = complete_registration(
        $username,
        $password,
        $email,
        $website,
        $first_name,
        $last_name,
        $nickname,
        $bio
        );
    }

    if (!$reg) {
      registration_form(
          $username,
          $password,
          $email,
          $website,
          $first_name,
          $last_name,
          $nickname,
          $bio
          );
    }
}

function registration_form( $username, $password, $email, $website, $first_name, $last_name, $nickname, $bio ) {
    echo '
    <form action="' . $_SERVER['REQUEST_URI'] . '" method="post">
        <input type="text" style="display: none" placeholder="{{mainObj.form.placeholders.login}}" name="username" ng-model="auth_login" required>
        <input type="text" style="display: none" placeholder="{{mainObj.form.placeholders.name}}" name="fname" value="Подписчик" required>
        <input type="email" placeholder="{{mainObj.form.placeholders.mail}}" name="email" ng-model="auth_login" required>
        <input type="password" style="display: none;" name="password" value="Abc123" required>
        <input type="text" style="display: none;" name="website" value="' . (isset($_POST['website']) ? $website : null) . '">
        <input type="text" style="display: none;"  placeholder="{{mainObj.form.placeholders.sname}}" name="lname" value="' . (isset($_POST['lname']) ? $last_name : null) . '">
        <input type="submit" name="submit" value="{{mainObj.form.placeholders.register}}" ng-click="auth.submit();">
    </form>
    <a href="" ng-click="auth.return_auth();">{{mainObj.modal.back}}</a>
    ';
}

function registration_validation( $username, $password, $email, $website, $first_name, $last_name, $nickname, $bio )  {
    global $reg_errors;
    $reg_errors = new WP_Error;

    if ( empty( $username ) || empty( $password ) || empty( $email ) ) {
        $reg_errors->add('field', '{{mainObj.form.errors.error1}}');
    }

    if ( strlen( $username ) < 4 ) {
        $reg_errors->add('username_length', '{{mainObj.form.errors.error2}}');
    }

    if ( username_exists( $username ) )
        $reg_errors->add('user_name', '{{mainObj.form.errors.error3}}');

    if ( !validate_username( $username ) ) {
        $reg_errors->add('username_invalid', '{{mainObj.form.errors.error4}}');
    }

    if ( strlen( $password ) < 5 ) {
        $reg_errors->add('password', '{{mainObj.form.errors.error5}}');
    }

    if ( !is_email( $email ) ) {
        $reg_errors->add('email_invalid', '{{mainObj.form.errors.error6}}');
    }

    if ( email_exists( $email ) ) {
        $reg_errors->add('email', '{{mainObj.form.errors.error7}}');
    }

    if ( is_wp_error( $reg_errors ) ) {

        foreach ( $reg_errors->get_error_messages() as $error ) {
            echo '<div>';
            echo '<strong>{{mainObj.form.errors.error}}</strong>:';
            echo $error . '<br/>';

            echo '</div>';
        }
    }
}

function complete_registration() {
    global $reg_errors, $username, $password, $email, $website, $first_name, $last_name, $nickname, $bio;
    if ( count($reg_errors->get_error_messages()) < 1 ) {
        $userdata = array(
        'user_login'    =>  $username,
        'user_email'    =>  $email,
        'user_pass'     =>  $password,
        'user_url'      =>  $website,
        'first_name'    =>  $first_name,
        'last_name'     =>  $last_name,
        'nickname'      =>  $nickname,
        'description'   =>  $bio,
        );
        $user = wp_insert_user( $userdata );
        echo 'Подписка оформлена, спасибо!<br>';
        echo '<a href="" ng-click="auth.return_main();">{{mainObj.modal.close}}</a>';
        echo '<script>localStorage.setItem("afterReg", 1)</script>';
        return true;
    }
}

// Register a new shortcode: [cr_custom_registration]
add_shortcode('cr_custom_registration', 'custom_registration_shortcode');

// The callback function that will replace [book]
function custom_registration_shortcode() {
    ob_start();
    custom_registration_function();
    return ob_get_clean();
}

function author_log() { ?>
    <? if ( !is_user_logged_in() ): ?>

            <form id="auth" action="<?php echo wp_login_url(get_permalink()); ?>" method="POST">
                <input id="username" name="log" type="text" placeholder="{{mainObj.form.placeholders.mail}}"  value="<?php echo wp_specialchars(stripslashes($user_login), 1) ?>">
                <input id="password" name="pwd" type="password" placeholder="{{mainObj.form.placeholders.password}}">
                <button name="submit" type="submit">{{mainObj.modal.signin}}</button>
                <div class="reg" ng-click="auth.open_reg();">{{mainObj.modal.registration}}</div>
            </form>
    <? else: ?>
        <h3 class="succes">Вы уже вошли</h3>
    <? endif?>
<?php
}
?>

<?php

function remove_menus(){
    global $menu;
    $restricted = array(
        __('Dashboard'),
        __('Posts'),
        //__('Media'),
        __('Links'),
        __('Pages'),
        __('Appearance'),
        __('Tools'),
        //__('Users'),
        //__('Settings'),
        __('Comments'),
        //__('Plugins')
    );
    end ($menu);
    while (prev($menu)){
        $value = explode(' ', $menu[key($menu)][0]);
        if( in_array( ($value[0] != NULL ? $value[0] : "") , $restricted ) ){
            unset($menu[key($menu)]);
        }
    }
}
add_action('admin_menu', 'remove_menus');

if (is_admin()) {
  // колонка "ID" для таксономий (рубрик, меток и т.д.) в админке
  foreach (get_taxonomies() as $taxonomy) {
    add_action("manage_edit-${taxonomy}_columns", 'tax_add_col');
    add_filter("manage_edit-${taxonomy}_sortable_columns", 'tax_add_col');
    add_filter("manage_${taxonomy}_custom_column", 'tax_show_id', 10, 3);
  }
  add_action('admin_print_styles-edit-tags.php', 'tax_id_style');
  function tax_add_col($columns) {return $columns + array ('tax_id' => 'ID');}
  function tax_show_id($v, $name, $id) {return 'tax_id' === $name ? $id : $v;}
  function tax_id_style() {print '<style>#tax_id{width:4em}</style>';}

  // колонка "ID" для постов и страниц в админке
  add_filter('manage_posts_columns', 'posts_add_col', 5);
  add_action('manage_posts_custom_column', 'posts_show_id', 5, 2);
  add_filter('manage_pages_columns', 'posts_add_col', 5);
  add_action('manage_pages_custom_column', 'posts_show_id', 5, 2);
  add_action('admin_print_styles-edit.php', 'posts_id_style');
  function posts_add_col($defaults) {$defaults['wps_post_id'] = __('ID'); return $defaults;}
  function posts_show_id($column_name, $id) {if ($column_name === 'wps_post_id') echo $id;}
  function posts_id_style() {print '<style>#wps_post_id{width:4em}</style>';}
}
