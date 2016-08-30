<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="ru"> <!--<![endif]-->
<!-- html manifest="app.cache" -->
<head>

	<meta charset="utf-8">

	<title>Smart Realtor – агентство элитной недвижимости</title>
	<meta name="description" content="Smart Realtor – агентство элитной недвижимости г. Астана
Более 7000 эксклюзивных объектов недвижимости в городе Астана. Аренда и сдача, продажа и покупка жилой и коммерческой недвижимости. Высококвалифицированный менеджмент и самая большая база объектов делает нас лидерами на рынке.">

	<!--[if IE]> <meta http-equiv="refresh" content="1;https://www.google.ru/chrome/browser/desktop/"> <![endif]-->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<link rel="shortcut icon" href="<?php echo get_template_directory_uri();?>/img/favicon/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri();?>/img/favicon/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory_uri();?>/img/favicon/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory_uri();?>/img/favicon/apple-touch-icon-114x114.png">

	<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/style.min.css">
	<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
	<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/bower_components/fancybox/source/jquery.fancybox.css">




	<!-- with CDN -->
	<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.js"></script>
	<script src="https://code.angularjs.org/1.5.0/angular-animate.min.js"></script>
	<script src="<?php echo get_template_directory_uri();?>/js/angular-ymaps.js"></script>
	<script src="<?php echo get_template_directory_uri();?>/js/controller.js"></script>

<!-- 	preloader css -->
	<style>
		.preloader{
				width: 100%;
				height: 100%;
				position: fixed;
				top: 0;
				left: 0;
				background: #fff;
				z-index: 5000;
				transition: opacity .3s ease;
		}
		.cssload-loader-inner {
				bottom: 0;
				height: 58px;
				left: 0;
				margin: auto;
				position: fixed;
				right: 0;
				top: 0;
				width: 97px;
				z-index: 5000;
		}

		.cssload-cssload-loader-line-wrap-wrap {
				animation: cssload-spin 2300ms cubic-bezier(.175, .885, .32, 1.275) infinite;
				-o-animation: cssload-spin 2300ms cubic-bezier(.175, .885, .32, 1.275) infinite;
				-ms-animation: cssload-spin 2300ms cubic-bezier(.175, .885, .32, 1.275) infinite;
				-webkit-animation: cssload-spin 2300ms cubic-bezier(.175, .885, .32, 1.275) infinite;
				-moz-animation: cssload-spin 2300ms cubic-bezier(.175, .885, .32, 1.275) infinite;
				box-sizing: border-box;
				-o-box-sizing: border-box;
				-ms-box-sizing: border-box;
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				height: 49px;
				left: 0;
				overflow: hidden;
				position: absolute;
				top: 0;
				transform-origin: 50% 100%;
				-o-transform-origin: 50% 100%;
				-ms-transform-origin: 50% 100%;
				-webkit-transform-origin: 50% 100%;
				-moz-transform-origin: 50% 100%;
				width: 97px;
		}
		.cssload-loader-line-wrap {
				border: 4px solid transparent;
				border-radius: 100%;
				-o-border-radius: 100%;
				-ms-border-radius: 100%;
				-webkit-border-radius: 100%;
				-moz-border-radius: 100%;
				box-sizing: border-box;
				-o-box-sizing: border-box;
				-ms-box-sizing: border-box;
				-webkit-box-sizing: border-box;
				-moz-box-sizing: border-box;
				height: 97px;
				left: 0;
				margin: 0 auto;
				position: absolute;
				right: 0;
				top: 0;
				width: 97px;
		}
		.cssload-cssload-loader-line-wrap-wrap:nth-child(1) { animation-delay: -57.5ms;
				-o-animation-delay: -57.5ms;
				-ms-animation-delay: -57.5ms;
				-webkit-animation-delay: -57.5ms;
				-moz-animation-delay: -57.5ms; }
		.cssload-cssload-loader-line-wrap-wrap:nth-child(2) { animation-delay: -115ms;
				-o-animation-delay: -115ms;
				-ms-animation-delay: -115ms;
				-webkit-animation-delay: -115ms;
				-moz-animation-delay: -115ms; }
		.cssload-cssload-loader-line-wrap-wrap:nth-child(3) { animation-delay: -172.5ms;
				-o-animation-delay: -172.5ms;
				-ms-animation-delay: -172.5ms;
				-webkit-animation-delay: -172.5ms;
				-moz-animation-delay: -172.5ms; }
		.cssload-cssload-loader-line-wrap-wrap:nth-child(4) { animation-delay: -230ms;
				-o-animation-delay: -230ms;
				-ms-animation-delay: -230ms;
				-webkit-animation-delay: -230ms;
				-moz-animation-delay: -230ms; }
		.cssload-cssload-loader-line-wrap-wrap:nth-child(5) { animation-delay: -287.5ms;
				-o-animation-delay: -287.5ms;
				-ms-animation-delay: -287.5ms;
				-webkit-animation-delay: -287.5ms;
				-moz-animation-delay: -287.5ms; }

		.cssload-cssload-loader-line-wrap-wrap:nth-child(1) .cssload-loader-line-wrap {
				border-color: rgb(234,71,71);
				height: 88px;
				width: 88px;
				top: 7px;
		}
		.cssload-cssload-loader-line-wrap-wrap:nth-child(2) .cssload-loader-line-wrap {
				border-color: rgb(234,234,71);
				height: 74px;
				width: 74px;
				top: 14px;
		}
		.cssload-cssload-loader-line-wrap-wrap:nth-child(3) .cssload-loader-line-wrap {
				border-color: rgb(71,234,71);
				height: 60px;
				width: 60px;
				top: 20px;
		}
		.cssload-cssload-loader-line-wrap-wrap:nth-child(4) .cssload-loader-line-wrap {
				border-color: rgb(71,234,234);
				height: 47px;
				width: 47px;
				top: 27px;
		}
		.cssload-cssload-loader-line-wrap-wrap:nth-child(5) .cssload-loader-line-wrap {
				border-color: rgb(71,71,234);
				height: 33px;
				width: 33px;
				top: 34px;
		}




		@keyframes cssload-spin {
				0%, 15% {
				transform: rotate(0);
				transform: rotate(0);
			}
			100% {
				transform: rotate(360deg);
				transform: rotate(360deg);
			}
		}

		@-o-keyframes cssload-spin {
				0%, 15% {
				-o-transform: rotate(0);
				transform: rotate(0);
			}
			100% {
				-o-transform: rotate(360deg);
				transform: rotate(360deg);
			}
		}

		@-ms-keyframes cssload-spin {
				0%, 15% {
				-ms-transform: rotate(0);
				transform: rotate(0);
			}
			100% {
				-ms-transform: rotate(360deg);
				transform: rotate(360deg);
			}
		}

		@-webkit-keyframes cssload-spin {
				0%, 15% {
				-webkit-transform: rotate(0);
				transform: rotate(0);
			}
			100% {
				-webkit-transform: rotate(360deg);
				transform: rotate(360deg);
			}
		}

		@-moz-keyframes cssload-spin {
				0%, 15% {
				-moz-transform: rotate(0);
				transform: rotate(0);
			}
			100% {
				-moz-transform: rotate(360deg);
				transform: rotate(360deg);
			}
		}
	</style>
</head>

<body ng-app="realty_app" ng-controller="main">
<div class="preloader" ng-if="preloader">
	<div class="cssload-loader-inner">
			<div class="cssload-cssload-loader-line-wrap-wrap">
				<div class="cssload-loader-line-wrap"></div>
			</div>
			<div class="cssload-cssload-loader-line-wrap-wrap">
				<div class="cssload-loader-line-wrap"></div>
			</div>
			<div class="cssload-cssload-loader-line-wrap-wrap">
				<div class="cssload-loader-line-wrap"></div>
			</div>
			<div class="cssload-cssload-loader-line-wrap-wrap">
				<div class="cssload-loader-line-wrap"></div>
			</div>
			<div class="cssload-cssload-loader-line-wrap-wrap">
				<div class="cssload-loader-line-wrap"></div>
			</div>
		</div>
</div>
	<!-- Здесь пишем код -->

<div class="content">
	<div class="nav top_style">
		<div class="container">
				<a href="#main"><img src="<?php echo get_template_directory_uri();?>/img/logo.jpg" alt="logotype"></a>
				<h1>{{mainObj.header.slogan}}</h1>
				<div class="lang">
					<div class="lang_wrap">
						<div class="ru lang_elem" ng-click="lang.setLang('rus')">RU</div>
						<div class="en lang_elem" ng-click="lang.setLang('eng')">EN</div>
					</div>
				</div>
				<div class="numbers">
					<h3><span>+7 (701) 530-78-88</span></h3>
					<h4 ng-click="feedback.open(mainObj.header.number, false)"><span>{{mainObj.header.number}}</span></h4>
				</div>
				<nav>
					<a href="#main">{{mainObj.header.menu1}}</a>
					<a href="#qual">{{mainObj.header.menu2}}</a>
					<a href="#catalog">{{mainObj.header.menu3}}</a>
					<a href="#recomend">{{mainObj.header.menu4}}</a>
					<a href="#service">{{mainObj.header.menu5}}</a>
					<a href="#sotr">{{mainObj.header.menu6}}</a>
					<a href="#advise">{{mainObj.header.menu7}}</a>
					<a href="#contact">{{mainObj.header.menu8}}</a>
				</nav>
		</div>
	</div>

	<section id="main">
		<a name="main"></a>
		<video src="<?php echo get_template_directory_uri();?>/video.mp4" loop preload autoplay></video>
		<img src="<?php echo get_template_directory_uri();?>{{uarcLogo}}" alt="UARC_logo">
		<div class="container">
			<div class="wrap_button">
				<a href="{{mainVid}}" class="fancybox fancybox.iframe"><div class="button_main button_watch"><span>{{mainObj.mainPage.mainButton}}</span></div></a>
			</div>
			<h4>{{mainObj.mainPage.header}}</h4>
			<div class="navigation_button">
				<a href="#catalog">{{mainObj.mainPage.button1}}</a>
				<a href="#catalog">{{mainObj.mainPage.button2}}</a>
				<a href="#sotr">{{mainObj.mainPage.button3}}</a>
				<a href="#sotr">{{mainObj.mainPage.button4}}</a>
			</div>
		</div>
	</section>

	<section id="spec">
		<header><h2>{{mainObj.specPage.header}}</h2></header>
		<div class="container">
			<div class="spec_block">
				<div ng-repeat="specs in spec" class="spec_block_mod">
					<div class="sticker_wrap">
						<div class="{{specs.type_sale === 'Аренда' ? 'sticker_green' : 'sticker_blue'}}">
							<div class="triangle"></div>
							<span>{{specs.type_sale === 'Аренда' ? mainObj.specPage.arend : mainObj.specPage.sale}}</span>
						</div>
					</div>
					<div class="wrap_thumb"><img ng-src="{{specs.thumbnail}}" alt=""></div>
					<h3>{{specs.name_view}}</h3>
					<p>{{specs.content_view}}</p>
					<ul>
						<li><span>{{mainObj.specPage.floor}}:</span> {{specs.floor}}</li>
						<li><span>{{mainObj.specPage.square}}:</span> {{specs.square}}м<sup>2</sup></li>
						<li><span>{{mainObj.specPage.price}}:</span> {{specs.price}} ₸</li>
					</ul>
					<div class="read_more" ng-click="info.change($index, spec, true)">{{mainObj.specPage.more}}</div>
				</div>
			</div>
		</div>
	</section>

	<section id="qual">
		<a name="qual"></a>
		<h2>{{mainObj.qualityPage.header}}</h2>
		<div class="container">
			<div class="first_column">
				<div class="icon_elem">
					<div class="icon icon_1"></div>
					<div class="text">
						<h3>{{mainObj.qualityPage.icons1.header}}</h3>
						<p>{{mainObj.qualityPage.icons1.content}}</p>
					</div>
				</div>
				<div class="icon_elem icon_elem_margin">
					<div class="icon icon_2"></div>
					<div class="text">
						<h3>{{mainObj.qualityPage.icons2.header}}</h3>
						<p>{{mainObj.qualityPage.icons2.content}}</p>
					</div>
				</div>
				<div class="icon_elem icon_elem_margin">
					<div class="icon icon_3"></div>
					<div class="text">
						<h3>{{mainObj.qualityPage.icons3.header}}</h3>
						<p>{{mainObj.qualityPage.icons3.content}}</p>
					</div>
				</div>
			</div>
			<div class="second_column">
				<div class="icon_elem">
					<div class="icon icon_4"></div>
					<div class="text">
						<h3>{{mainObj.qualityPage.icons4.header}}</h3>
						<p>{{mainObj.qualityPage.icons4.content}} <br>
					    {{mainObj.qualityPage.icons4.content2}} <br>
							{{mainObj.qualityPage.icons4.content3}}</p>
					</div>
				</div>
				<div class="icon_elem">
					<div class="icon icon_5"></div>
					<div class="text">
						<h3>{{mainObj.qualityPage.icons5.header}}</h3>
						<p>{{mainObj.qualityPage.icons5.content}}<br>
							{{mainObj.qualityPage.icons5.content2}}</p>
					</div>
				</div>
				<div class="icon_elem">
					<div class="icon icon_6"></div>
					<div class="text">
						<h3>{{mainObj.qualityPage.icons6.header}}</h3>
						<p>{{mainObj.qualityPage.icons6.content}}<br>
							{{mainObj.qualityPage.icons6.content2}}<br>
							{{mainObj.qualityPage.icons6.content3}}</p>
					</div>
				</div>
			</div>
			<div class="third_column">
				<form id="qual_form">
					<h4>{{mainObj.form.headers.header1}} <br> <span>{{mainObj.form.headers.header2}}</span></h4>
					<input name="name" type="text" placeholder="{{mainObj.form.placeholders.name}}" required>
					<input name="phone" type="number" placeholder="{{mainObj.form.placeholders.telephone}}" required>
					<input name="emailFrom" type="text" placeholder="{{mainObj.form.placeholders.mail}}" required>
					<input name="emailTo" type="email" style="display:none;" value="main@smartrealtor.kz">
					<textarea name="message" rows="8" cols="10" placeholder="{{mainObj.form.placeholders.ques}}" required></textarea>
					<h4 style="display:none;">Преимущества</h4>
					<button ng-click="feedback.submit('#qual_form');">{{mainObj.form.placeholders.send}}</button>
				</form>
			</div>
		</div>
	</section>

	<section id="catalog" ng-controller="sliderDemoCtrl">
		<a name="catalog"></a>
		<h2>{{mainObj.catalogPage.header}}</h2>
		<div class="container">
			<div class="configure">
				<div class="left_block">
					<div class="wrap_1">
						<div class="drop_down">
							<header><span>{{dropDown1FilterView}}</span></header>
							<div class="list_block">
								<div class="list_elem" ng-click="changeValueFilter('Все', 1, 'Any')">{{mainObj.catalogPage.menu1_3}}</div>
								<div class="list_elem" ng-click="changeValueFilter('Купить', 1, 'To buy')">{{mainObj.catalogPage.menu1_1}}</div>
								<div class="list_elem" ng-click="changeValueFilter('Снять в аренду', 1, 'To rent')">{{mainObj.catalogPage.menu1_2}}</div>
							</div>
						</div>
					</div>
					<div class="wrap_2">
						<div class="drop_down">
							<header><span>{{dropDown2FilterView}}</span></header>
							<div class="list_block">
								<div class="list_elem" ng-click="changeValueFilter('Все', 2, 'Any')">{{mainObj.catalogPage.menu1_3}}</div>
								<div class="list_elem" ng-click="changeValueFilter('Квартира', 2, 'Apartment')">{{mainObj.catalogPage.menu2_1}}</div>
								<div class="list_elem" ng-click="changeValueFilter('Дом', 2, 'House')">{{mainObj.catalogPage.menu2_2}}</div>
								<div class="list_elem" ng-click="changeValueFilter('Офис', 2, 'Office')">{{mainObj.catalogPage.menu2_3}}</div>
								<div class="list_elem" ng-click="changeValueFilter('Земельный участок', 2, 'Land')">{{mainObj.catalogPage.menu2_4}}</div>
							</div>
						</div>
					</div>
					<div class="wrap_3">
						<div class="drop_down">
							<header><span>{{dropDown3FilterView}}</span></header>
							<div class="list_block">
								<div class="list_elem" ng-click="changeValueFilter('Все', 3, 'Any')">{{mainObj.catalogPage.menu3_1}}</div>
								<div class="list_elem" ng-click="changeValueFilter('2-х комнатные', 3, '2')">{{mainObj.catalogPage.menu3_3}}</div>
								<div class="list_elem" ng-click="changeValueFilter('3-х комнатные', 3, '3')">{{mainObj.catalogPage.menu3_4}}</div>
								<div class="list_elem" ng-click="changeValueFilter('4-х комнатные', 3, '4')">{{mainObj.catalogPage.menu3_5}}</div>
								<div class="list_elem" ng-click="changeValueFilter('5-и и более комнатные', 3, '5')">{{mainObj.catalogPage.menu3_7}}</div>
								<div class="list_elem" ng-click="changeValueFilter('Пентхаус', 3, 'Penthouse')">{{mainObj.catalogPage.menu3_6}}</div>
								<div class="list_elem" ng-click="changeValueFilter('Таунхаус', 3, 'Townhouse')">{{mainObj.catalogPage.menu3_8}}</div>
							</div>
						</div>
					</div>
				</div>
				<div class="right_block">
					<h5>{{mainObj.specPage.square}}</h5>
	                <div class="sliderExample">
	                    <div ui-slider="{range: true}" min="0" max="{{sliderMax}}" step="1" use-decimals ng-model="sliderExample9"></div>
	                    <input id="sliderFrom" type="text" ng-model="sliderExample9[0]"><input id="sliderTo" type="text" ng-model="sliderExample9[1]" class="second">
	                </div>
	                <h5 class="second">{{mainObj.specPage.price}}</h5>
	                <div class="price">
	                	<input type="text" placeholder="{{mainObj.catalogPage.from}}" ng-model="price[0]">
	                	<div class="line"></div>
	                	<input type="text" placeholder="{{mainObj.catalogPage.to}}" ng-model="price[3]" ng-change="changeFilterPrice();">
	                	<div id="tenge" class="val active" ng-click="coefChange('#tenge', 1, 'тг')">₸</div>
	                	<div id="dollar" class="val" ng-click="coefChange('#dollar', coef.coef_dol, '$')">$</div>
	                </div>
				</div>
			</div>
			<div class="search_result">
				<header class="main">
					<div class="search_left"><span>{{mainObj.catalogPage.search}}:</span> {{catalog_search.length}} {{mainObj.catalogPage.search_content}}</div>
					<div class="reset_filter" ng-click="reset_filter();">{{mainObj.catalogPage.clear}}</div>
				</header>
				<div class="content_seach">
					<article ng-repeat="stack in catalog_search | filter:typeView | filter:type | filter:quantityRoom | filter:squareRange | filter:priceRange">
						<header>{{stack.name_view}}</header>
						<div class="{{stack.length}}"></div>
						<div class="wrap_img"><img ng-src="{{stack.thumbnail}}"></div>
						<div class="info">
							<ul>
								<li><span>{{mainObj.specPage.floor}}:</span> {{stack.floor}}</li>
								<li><span>{{mainObj.specPage.square}}:</span> {{stack.square}} м<sup>2</sup></li>
								<li><span>{{mainObj.specPage.price}}:</span> {{ ((stack.price / coef.active).toFixed()) | currency : " " : 0}} {{coef.cur}}</li>
							</ul>
							<button ng-click="info.change($index, catalog_search, true)">{{mainObj.specPage.more}}</button>
						</div>
					</article>
				</div>
			</div>
		</div>
	</section>

<!-- ru -->
	<section ng-if="lang.language === 'eng'" id="clients">
		<a name="clients"></a>
		<h2>{{mainObj.clientPage.header}}</h2>
		<div class="container">
			<div class="clients_block">
				<div ng-repeat="partners in partner_en" class="clients_elem">
					<h3>{{partners.name}}</h3>
					<div class="img_wrap">
						<img ng-src="{{partners.url}}" alt="">
					</div>
				</div>
			</div>
		</div>
	</section>

<!-- eng -->
	<section ng-if="lang.language === 'rus'" id="clients">
		<a name="clients"></a>
		<h2>{{mainObj.clientPage.header}}</h2>
		<div class="container">
			<div class="clients_block">
				<div ng-repeat="partners in partner_ru" class="clients_elem">
					<h3>{{partners.name}}</h3>
					<div class="img_wrap">
						<img ng-src="{{partners.url}}" alt="">
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="recom">
		<a name="recomend"></a>
		<h2>{{mainObj.recomendPage.header}}</h2>
		<div class="container">
			<p class="main">{{mainObj.recomendPage.main_content_part1}} <span>Smart Realtor</span> {{mainObj.recomendPage.main_content_part2}}</p>
			<div class="first_column">
				<h3>{{mainObj.recomendPage.header_director}}</h3>
				<a href="{{obrVid}}" class="fancybox fancybox.iframe"><div class="wrap_img"><img src="http://smartrealtor.kz/wp-content/uploads/2016/04/Скриншот-2016-04-14-21.37.19.png" alt=""></div></a>
				<h3 class="mini">{{mainObj.recomendPage.header_after_video}}</h3>
				<p>{{mainObj.recomendPage.content}}</p>
			</div>
			<div class="second_column">
				<h3>{{mainObj.recomendPage.header_clients}}</h3>
				<div class="reviews">
					<div class="wrap_rev"><img src="<?php echo get_template_directory_uri();?>/img/example._rev.jpg" alt=""></div>
					<div class="wrap_rev"><img src="<?php echo get_template_directory_uri();?>/img/example._rev.jpg" alt=""></div>
					<div class="wrap_rev"><img src="<?php echo get_template_directory_uri();?>/img/example._rev.jpg" alt=""></div>
					<div class="wrap_rev"><img src="<?php echo get_template_directory_uri();?>/img/example._rev.jpg" alt=""></div>
					<div class="wrap_rev"><img src="<?php echo get_template_directory_uri();?>/img/example._rev.jpg" alt=""></div>
					<div class="wrap_rev"><img src="<?php echo get_template_directory_uri();?>/img/example._rev.jpg" alt=""></div>
					<div class="wrap_rev"><img src="<?php echo get_template_directory_uri();?>/img/example._rev.jpg" alt=""></div>
					<div class="wrap_rev"><img src="<?php echo get_template_directory_uri();?>/img/example._rev.jpg" alt=""></div>
				</div>
			</div>
		</div>
	</section>

	<section id="service">
		<a name="service"></a>
		<h2>{{mainObj.servicePage.header}}</h2>
		<div class="container">
			<img src="<?php echo get_template_directory_uri();?>{{backImage}}" alt="background">
			<div class="handy">
				<img src="<?php echo get_template_directory_uri();?>/img/handy_logo.png" alt="">
				<p>— {{mainObj.servicePage.subHeader}}<span> Smart Realtor</span></p>
			</div>
			<div class="info">
				<h3>{{mainObj.servicePage.listHeader}}</h3>
				<div class="wrap">
					<ul class="column_first">
						<li>{{mainObj.servicePage.listElem1}}</li>
						<li>{{mainObj.servicePage.listElem2}}</li>
						<li>{{mainObj.servicePage.listElem3}}</li>
						<li>{{mainObj.servicePage.listElem4}}</li>
						<li>{{mainObj.servicePage.listElem5}}</li>
						<li>{{mainObj.servicePage.listElem6}}</li>
						<li>{{mainObj.servicePage.listElem7}}</li>
					</ul>
					<ul class="column_second">
						<li>{{mainObj.servicePage.listElem8}}</li>
						<li>{{mainObj.servicePage.listElem9}}</li>
						<li>{{mainObj.servicePage.listElem10}}</li>
						<li>{{mainObj.servicePage.listElem11}}</li>
						<li>{{mainObj.servicePage.listElem12}}</li>
						<li>{{mainObj.servicePage.listElem13}}</li>
						<li>{{mainObj.servicePage.listElem14}}</li>
						<li>{{mainObj.servicePage.listElem15}}</li>
					</ul>
				</div>
				<p>{{mainObj.servicePage.sloganTop}}<br><span>{{mainObj.servicePage.sloganBot}}</span></p>
				<div class="contact">
					<div class="image_block">
						<div class="image_wrap">
							<img src="http://smartrealtor.kz/wp-content/uploads/2016/04/sergey.jpg">
						</div>
					</div>
					<div class="number">{{mainObj.modal.number_sergey}}</div>
					<div class="mail"><span>handyman@smartrealtor.kz</span></div>
				</div>
				<form id="service_form" method="POST">
					<h3>{{mainObj.form.headers.header3}}</h3>
					<input name="name" type="text" placeholder="{{mainObj.form.placeholders.name}}" required>
					<input name="theme" type="text" required value="tech" style="display: none;">
					<input name="phone" type="number" placeholder="{{mainObj.form.placeholders.telephone}}" required>
					<input name="emailFrom" type="email" placeholder="{{mainObj.form.placeholders.mail}}" required>
					<textarea name="message" rows="4" cols="10" placeholder="{{mainObj.form.placeholders.write}}" required></textarea>
					<input name="emailTo" type="text" style="display:none;" value="handyman@smartrealtor.kz">
					<h4 style="display:none;">Сервис</h4>
					<button ng-click="feedback.submit('#service_form');">{{mainObj.form.placeholders.send}}</button>
				</form>
				<h4 class="slogan">
					{{mainObj.servicePage.wordSlogan1}}<br>
					{{mainObj.servicePage.wordSlogan2}} <br>
					<span>{{mainObj.servicePage.wordSlogan3}}</span>
				</h4>
			</div>
		</div>
	</section>

	<section id="sotr">
		<a name="sotr"></a>
		<h2>{{mainObj.sotrPage.header}}</h2>
		<div class="container">
			<div class="first_column">
				<h3>
					{{mainObj.sotrPage.subHeader}} <br>
					{{mainObj.sotrPage.subHeader2}} <br>
				</h3>
				<p><strong>{{mainObj.sotrPage.content1}}</strong></p>
				<p>
					{{mainObj.sotrPage.content2.list1}} <br>
					{{mainObj.sotrPage.content2.list2}} <br>
					{{mainObj.sotrPage.content2.list3}} <br>
					{{mainObj.sotrPage.content2.list4}} <br>
					{{mainObj.sotrPage.content2.list5}} <br>
				</p>
				<p><strong>{{mainObj.sotrPage.content3}}</strong></p>
				<p>
					{{mainObj.sotrPage.content4.list1}} <br>
					{{mainObj.sotrPage.content4.list2}} <br>
					{{mainObj.sotrPage.content4.list3}} <br>
				</p>
			</div>
			<div class="second_column">
				<div class="wrapper">
					<h4>{{mainObj.sotrPage.planeHeader1}} <br>
						<span class="bold">{{mainObj.sotrPage.planeHeader2}}</span>
						<span class="and">{{mainObj.sotrPage.planeHeader3}}</span>
						<span class="thin" >{{mainObj.sotrPage.planeHeader4}}</span>
					</h4>
					<div class="icon"></div>
					<div class="wrap_button"><div class="button_main" ng-click="feedback.open(mainObj.sotrPage.header, true)"><span>{{mainObj.sotrPage.button}}</span></div></div>
				</div>
			</div>
		</div>
	</section>

	<section id="advise">
		<a name="advise"></a>
		<h2>{{mainObj.bonus.header}}</h2>
		<div class="container">
			<div class="first_column">
				<p class="text">{{mainObj.bonus.content1}} <img src="http://smartrealtor.kz/wp-content/uploads/2016/07/1.png" style="width: 105px;vertical-align: middle;"></p>
				<p class="text">{{mainObj.bonus.content2}}</p>
				<img src="<?php echo get_template_directory_uri();?>/img/confetti.png" alt="confeti">
				<p class="label" ng-click="feedback.open(mainObj.form.headers.header4, false)"><span  class="second">{{mainObj.bonus.button1}} <br></span> <span  class="third">{{mainObj.bonus.button2}}</span></p>
			</div>
			<div class="second_colimn">
				<div class="wrap">
					<img ng-src="{{image_}}">
				</div>
			</div>
		</div>
	</section>

	<div id="map">
		<a name="contact"></a>
		<yandex-map center="[51.143884,71.415955]" zoom="16" style="width: 700px; height: 600px; display: block;">
			<ymap-marker properties="map.index" coordinates="[51.143884,71.415955]"></ymap-marker>
		</yandex-map>
		<div class="first_column">
			<div class="wrap">
				<h3>{{mainObj.contacts.adress1}} <br> {{mainObj.contacts.adress2}}</h3>
				<h4><span>+7 (701) 530-78-88</span></h4>
				<h5><span>+7 (7172) 782-784 <br>office@smartrealtor.kz</span></h5>
				<button ng-click="feedback.open(mainObj.form.headers.header3, true)">{{mainObj.contacts.button}}</button>
				<div class="social">
					<a href="https://www.facebook.com/SmartRealtorAstana/?fref=ts" target="_blank"><div class="icon_social icon_social_1"></div></a>
					<a href="https://www.instagram.com/smart_realtor_astana/" target="_blank"><div class="icon_social icon_social_2"></div></a>
					<div class="icon_social icon_social_3"></div>
					<div class="icon_social icon_social_4"></div>
					<a href="https://vk.com/id273055816" target="_blank"><div class="icon_social icon_social_5"></div></a>
				</div>
			</div>
		</div>
	</div>

	<footer>
		<div class="container">
			<h3>© «Smart Realtor» — 2016</h3>
			<img src="<?php echo get_template_directory_uri();?>/img/mind_logo.png" alt="">
		</div>
	</footer>

	<!-- Модальные окна -->

	<div ng-if="auth.show" class="auth modal">
		<!-- <div class="wrap" ng-if="!auth.registration_show">
			<div class="window">
				<div class="closer" ng-click="auth.close()"></div>
				<h3>{{mainObj.modal.auth}}</h3>
				<?php author_log(); ?>
			</div>
		</div> -->
		<div class="wrap">
			<div class="window">
				<h3>{{mainObj.form.headers.header5}}</h3>
				<?php custom_registration_function(); ?>
			</div>
		</div>
	</div>

	<div ng-if="lang.show" class="lang modal">
		<div class="wrap">
			<div class="window">
				<h3>Выберите язык</h3>
				<div class="language">
					<div class="rus" ng-click="lang.setLang('rus')">
						<div class="icon_lan"></div>
						<div class="but">Русский</div>
					</div>
					<div class="eng" ng-click="lang.setLang('eng')">
						<div class="icon_lan"></div>
						<div class="but">English</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div ng-if="info.show" class="info modal">
		<div class="wrap">
			<div class="window">
				<div class="closer" ng-click="info.close()"></div>
				<div class="column_first">
					<a class="fancybox first" rel="gallery1" href="{{info.thumbnail}}">
						<img class="first" ng-src="{{info.thumbnail}}">
					</a>
					<div class="lenta">
						<a ng-repeat="image in info.images" class="fancybox {{ $index == 2 ? 'last' : ''}}" rel="gallery1" href="{{info.images[$index]}}" >
							<img ng-src="{{info.images[$index]}}">
						</a>
					</div>
					<div class="manager">
						<h3>{{mainObj.modal.manager}}</h3>
						<div class="photo_wrap">
							<img ng-src="{{info.author.image}}" alt="">
						</div>
						<div class="info">
							<h4>{{info.author.name}}</h4>
							<h5>{{info.author.telephone}}</h5>
						</div>
					</div>
					<a class="fancybox_map" ng-click="map.open();">{{mainObj.modal.viewMap}}</a>
				</div>
				<div class="second_column">
					<h4>{{info.name}}</h4>
					<ul>
						<li><span>{{mainObj.specPage.id}}:</span> {{info.id_floor}}</li>
						<li><span>{{mainObj.specPage.floor}}:</span> {{info.floor}}</li>
						<li><span>{{mainObj.specPage.square}}:</span> {{info.square}} м<sup>2</sup></li>
						<li class="last"><span>{{mainObj.specPage.price}}:</span> {{ ((stack.price / coef.active).toFixed()) | currency : " " : 0}} {{coef.cur}}</li>
					</ul>
					<p>{{info.content_view}}</p>
					<form id="catalog_form" method="POST">
						<h5>{{mainObj.modal.feedback}}</h5>
						<div class="column_first">
							<input name="name"  type="text" placeholder="{{mainObj.form.placeholders.name}}" required>
							<input name="phone" type="number" placeholder="{{mainObj.form.placeholders.telephone}}" required>
							<input name="emailFrom" type="text" placeholder="{{mainObj.form.placeholders.mail}}" required>
							<input name="emailTo" type="email" style="display:none;" ng-model="info.author.email">
							<h4 style="display:none;">Заявка с каталога</h4>
						</div>
						<textarea name="message" cols="30" rows="5" placeholder="{{mainObj.form.placeholders.comment}}" required></textarea>
						<button ng-click="feedback.submit('#catalog_form');">{{mainObj.form.placeholders.send}}</button>
					</form>
				</div>
				<div class="share_button">
					<a href="https://www.facebook.com/v2.3/dialog/share?redirect_uri=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Freturn%2Fclose&display=popup&href=https%3A%2F%2Fsmartrealtor.kz%2F&client_id=966242223397117&ret=login&ext=1459514878&hash=Aeb_uxs9d5KPQrrF" target="_blank"><div class="facebook"></div></a>
					<a href="http://vk.com/share.php?url=https%3A%2F%2Fsmartrealtor.kz%2F&title=SmartRealtor&description=&image=" target="_blank"><div class="vk"></div></a>
					<a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fsmartrealtor.kz%2F&title=" target="_blank"><div class="linkedin"></div></a>
					<a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fsmartrealtor.kz%2F&text=" target="_blank"><div class="twitter"></div></a>
				</div>
			</div>
		</div>
	</div>

	<div ng-if="feedback.show" class="auth modal feedback">
		<div class="wrap">
			<div class="window">
				<div class="closer" ng-click="feedback.close()"></div>
				<h3>{{feedback.header}}</h3>
				<form id="feedback" method="POST">
					<input name="name" type="text" placeholder="{{mainObj.form.placeholders.name}}" required>
					<input name="phone" type="number" placeholder="{{mainObj.form.placeholders.telephone}}" required>
					<input name="emailFrom" type="text" placeholder="{{mainObj.form.placeholders.mail}}" required>
					<input name="emailTo" type="email" style="display:none;" value="main@smartrealtor.kz">
					<textarea ng-if="feedback.textarea_show" name="message" rows="8" cols="10" placeholder="{{mainObj.form.placeholders.write}}" required>{{feedback.header === mainObj.sotrPage.header ? mainObj.form.placeholders.textarea_value_sotr : ''}}</textarea>
					<h4 style="display:none;">{{feedback.input_header}}</h4>
					<button ng-click="feedback.submit('#feedback');">{{mainObj.form.placeholders.send}}</button>
					<h4>{{mainObj.form.placeholders.feed}}</h4>
				</form>
			</div>
		</div>
	</div>

	<div ng-show="lang.language === 'rus'" class="slide {{auth.open_res === 0 ? 'close' : 'open'}}">
		<div class="wrap">
			<div class="closer" ng-click="auth.open_res = 0;"></div>
			<div class="woman"></div>
			<div class="window">
				<form id="resume" enctype="multipart/form-data" action="<?php echo get_template_directory_uri();?>/mailWithFile.php" method="POST">
					<h3>Быстрая отправка резюме</h3>
					<input name="name" type="text" placeholder="ФИО" required></input>
					<input name="phone" type="number" placeholder="Контактный телефон" required></input>
					<input name="filename" type="text" style="display: none"></input>
					<label><span>Загрузить резюме</span><input name="resume" type="file" style="display: none"></input></label>
					<h5 id="sost"></h5>
					<button>{{mainObj.form.placeholders.send}}</button>
					<h4>Наш специалист свяжется с Вами и ответит на все вопросы</h4>
				</form>
			</div>
			<div class="button" ng-click="auth.open_res === 0 ? auth.open_res = 1 : auth.open_res = 0"></div>
		</div>
	</div>

	<div ng-if="map.show" class="map_yan modal">
		<div class="wrap">
			<div class="window">
				<div class="closer" ng-click="map.show = false"></div>
				<yandex-map center="map.center" zoom="map.zoom" style="width: 700px; height: 600px; display: block;">
					<ymap-marker properties="map.index" coordinates="map.marker"></ymap-marker>
				</yandex-map>
			</div>
		</div>
	</div>

	<div id="mail" class="not_visible_mail"></div>
</div>


	<!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri();?>/bower_components/html5shiv/es5-shim.min.js"></script>
	<script src="<?php echo get_template_directory_uri();?>/bower_components/html5shiv/html5shiv.min.js"></script>
	<script src="<?php echo get_template_directory_uri();?>/bower_components/html5shiv/html5shiv-printshiv.min.js"></script>
	<script src="<?php echo get_template_directory_uri();?>/bower_components/respond/respond.min.js"></script>
	<![endif]-->


	<!-- local -->
	<script src="<?php echo get_template_directory_uri();?>/bower_components/fancybox/source/jquery.fancybox.pack.js"></script>
	<script src="<?php echo get_template_directory_uri();?>/bower_components/nav/nav.js"></script>
	<script src="<?php echo get_template_directory_uri();?>/js/common.js"></script>
	<script src="<?php echo get_template_directory_uri();?>/js/slider.js"></script>
	<script crossorigin="anonymous" async type="text/javascript" src="//api.pozvonim.com/widget/callback/v3/2b45961021aefe57671c32f5c503cee2/connect" id="check-code-pozvonim" charset="UTF-8"></script>
	<!-- Yandex.Metrika counter -->
	<script type="text/javascript">
	    (function (d, w, c) {
	        (w[c] = w[c] || []).push(function() {
	            try {
	                w.yaCounter37059845 = new Ya.Metrika({
	                    id:37059845,
	                    clickmap:true,
	                    trackLinks:true,
	                    accurateTrackBounce:true,
	                    webvisor:true
	                });
	            } catch(e) { }
	        });

	        var n = d.getElementsByTagName("script")[0],
	            s = d.createElement("script"),
	            f = function () { n.parentNode.insertBefore(s, n); };
	        s.type = "text/javascript";
	        s.async = true;
	        s.src = "https://mc.yandex.ru/metrika/watch.js";

	        if (w.opera == "[object Opera]") {
	            d.addEventListener("DOMContentLoaded", f, false);
	        } else { f(); }
	    })(document, window, "yandex_metrika_callbacks");
	</script>
	<noscript><div><img src="https://mc.yandex.ru/watch/37059845" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
	<!-- /Yandex.Metrika counter -->
</body>
</html>
