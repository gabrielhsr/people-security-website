window.addEventListener('load', function () {
	// Cookie Alert

	let messageCookie = `Este site armazena cookies em seu computador. Esses cookies são usados para coletar informações sobre como você interage com nosso site e nos permite lembrar de você. Usamos essas informações para melhorar e personalizar sua experiência e para análises e métricas sobre nossos visitantes, tanto nesse site quanto em outras mídias. Para obter mais informações sobre os cookies que usamos, leia nossa <a href="" data-toggle="modal" data-target="#myModal">Política de Privacidade</a>. </br></br> Se você recusar, suas informações não serão rastreadas quando você acessar este site. Um cookie simples será usado em seu navegador para lembrar sobre sua preferência de não ser rastreado.`;

	window.cookieconsent.initialise({
		palette: {
			popup: {
				background: '#252e39',
			},
			button: {
				background: '#14a7d0',
			},
		},
		theme: 'classic',
		type: 'opt-out',
		content: {
			message: messageCookie,
			allow: 'Aceitar',
			deny: 'Recusar',
		},
	});

	// WhatsApp Button Effect
	$(window).scroll(function () {
		if (
			$(window).scrollTop() + $(window).height() >
			$(document).height() - 45
		) {
			$('#whatsapp-button').attr('style', 'margin-bottom: 250px !important');
		} else {
			$('#whatsapp-button').attr('style', 'margin-bottom: 0px !important');
		}
	});

	// Smooth scroll effect
	$('#navbar a, .carousel-item a').on('click', function (event) {
		console.log('detect');

		if (this.hash !== '') {
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top,
				},
				800,
				function () {
					window.location.hash = hash;
				}
			);
		}
	});

	// Front-End Form Validation
	var forms = document.getElementsByClassName('needs-validation');

	var validation = Array.prototype.filter.call(forms, function (form) {
		form.addEventListener(
			'submit',
			function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			},
			false
		);
	});

	// Form

	(function ($) {
		'use strict';
		var form = $('.contact__form'),
			message = $('.contact__msg'),
			form_data;
		// Success function
		function done_func(response) {
			message.fadeIn().removeClass('alert-danger').addClass('alert-success');
			message.text(response);
			setTimeout(function () {
				message.fadeOut();
			}, 2000);
			form.find('input:not([type="submit"]), textarea').val('');
		}
		// fail function
		function fail_func(data) {
			message.fadeIn().removeClass('alert-success').addClass('alert-success');
			message.text(data.responseText);
			setTimeout(function () {
				message.fadeOut();
			}, 2000);
		}

		form.submit(function (e) {
			e.preventDefault();
			form_data = $(this).serialize();
			$.ajax({
				type: 'POST',
				url: form.attr('action'),
				data: form_data,
			})
				.done(done_func)
				.fail(fail_func);
		});
	})(jQuery);
});
