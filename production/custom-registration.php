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
        $username	= 	sanitize_user($_POST['username']);
        $password 	= 	esc_attr($_POST['password']);
        $email 		= 	sanitize_email($_POST['email']);
        $website 	= 	esc_url($_POST['website']);
        $first_name = 	sanitize_text_field($_POST['fname']);
        $last_name 	= 	sanitize_text_field($_POST['lname']);
        $nickname 	= 	sanitize_text_field($_POST['nickname']);
        $bio 		= 	esc_textarea($_POST['bio']);

		// call @function complete_registration to create the user
		// only when no WP_error is found
        complete_registration(
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

function registration_form( $username, $password, $email, $website, $first_name, $last_name, $nickname, $bio ) {
    echo '
    <form action="' . $_SERVER['REQUEST_URI'] . '" method="post">
    	<input type="text" placeholder="{{mainObj.form.placeholders.login}}" name="username" value="' . (isset($_POST['username']) ? $username : null) . '">
    	<input type="password" placeholder="{{mainObj.form.placeholders.password}}" name="password" value="' . (isset($_POST['password']) ? $password : null) . '">
    	<input type="text" placeholder="{{mainObj.form.placeholders.mail}}" name="email" value="' . (isset($_POST['email']) ? $email : null) . '">
    	<input type="text" placeholder="{{mainObj.form.placeholders.Телефон}}" name="website" value="' . (isset($_POST['website']) ? $website : null) . '">
    	<input type="text" placeholder="{{mainObj.form.placeholders.name}}" name="fname" value="' . (isset($_POST['fname']) ? $first_name : null) . '">
    	<input type="text" placeholder="{{mainObj.form.placeholders.sname}}" name="lname" value="' . (isset($_POST['lname']) ? $last_name : null) . '">
    	<textarea name="bio" style="display: none;">' . (isset($_POST['bio']) ? $bio : null) . '</textarea>
    	<input type="submit" name="submit" value="Register"/>
	</form>
	';
}

function registration_validation( $username, $password, $email, $website, $first_name, $last_name, $nickname, $bio )  {
    global $reg_errors;
    $reg_errors = new WP_Error;

    if ( empty( $username ) || empty( $password ) || empty( $email ) ) {
        $reg_errors->add('field', 'Обязательные поля пропущены');
    }

    if ( strlen( $username ) < 4 ) {
        $reg_errors->add('username_length', 'Username слишком короткий.');
    }

    if ( username_exists( $username ) )
        $reg_errors->add('user_name', 'Извините, но пользователь с таким именем уже есть!');

    if ( !validate_username( $username ) ) {
        $reg_errors->add('username_invalid', 'Поле пользователь введено не корректно!');
    }

    if ( strlen( $password ) < 5 ) {
        $reg_errors->add('password', 'Минимальная длина пароля 5 символов.');
    }

    if ( !is_email( $email ) ) {
        $reg_errors->add('email_invalid', 'Некорректный email');
    }

    if ( email_exists( $email ) ) {
        $reg_errors->add('email', 'Email уже используется');
    }
    
    if ( !empty( $website ) ) {
        if ( !filter_var($website, FILTER_VALIDATE_URL) ) {
            $reg_errors->add('website', 'Некорректный номер телефона');
        }
    }

    if ( is_wp_error( $reg_errors ) ) {

        foreach ( $reg_errors->get_error_messages() as $error ) {
            echo '<div>';
            echo '<strong>Ошибка</strong>:';
            echo $error . '<br/>';

            echo '</div>';
        }
    }
}

function complete_registration() {
    global $reg_errors, $username, $password, $email, $website, $first_name, $last_name, $nickname, $bio;
    if ( count($reg_errors->get_error_messages()) < 1 ) {
        $userdata = array(
        'user_login'	=> 	$username,
        'user_email' 	=> 	$email,
        'user_pass' 	=> 	$password,
        'user_url' 		=> 	$website,
        'first_name' 	=> 	$first_name,
        'last_name' 	=> 	$last_name,
        'nickname' 		=> 	$nickname,
        'description' 	=> 	$bio,
		);
        $user = wp_insert_user( $userdata );
        echo 'Регистрация выполнена, теперь вы можете войти!';   
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
