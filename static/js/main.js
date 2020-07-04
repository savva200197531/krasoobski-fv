$(document).ready(function () {

  // маски на инпуты

  $("input[name=phone]").mask("+7(999)999-99-99");
  $("input[name=fast-phone]").mask("+7(999)999-99-99");

  // форма на 1м слайде (быстрая отправка телефона)

  $('.phone-form__form').submit(() => {
    const $form = $(this);
    if ($form.find('[name=fast-phone]').val().length < 16) {
      console.log($form.find('[name=fast-phone]').val().length);
      alert('Укажите номер телефона полностью!');
      return false;
    }

    $('form button[type=submit]').prop('disabled', true);

    // if (Cookies.get('timeout') === 'Y') {
    //   alert('Вы уже отправили форму!');
    //   return false;
    // }

    let data = {};

    data.phoneFast = $form.find('[name=fast-phone]').val();

    console.log(data);

    $.post(
      "/",
      $.param(data),
      function (resp) {
        // Cookies.set('timeout', 'Y', { expires: 1 / 100 });
      }
    );

    return false;
  });

  // основная форма

  $(".request-form__form").submit(() => {
    const $form = $(this);
    if ($form.find('[name=phone]').val().length < 16) {
      console.log($form.find('[name=phone]').val().length);
      alert('Укажите номер телефона полностью!');
      return false;
    }

    $('form button[type=submit]').prop('disabled', true);

    // if (Cookies.get('timeout') === 'Y') {
    //   alert('Вы уже отправили форму!');
    //   return false;
    // }

    let data = {};

    data.name = $form.find('[name=name]').val();
    data.phone = $form.find('[name=phone]').val();
    data.phoneFast = $form.find('[name=fast-phone]').val();

    if ($('[name=q1]:checked').val() == 'Свой вариант') {
      data.q1 = $('[name=q1_val]').val();
    } else {
      data.q1 = $('[name=q1]:checked').val();
    }
    data.q2 = $('[name=q2]:checked').val();
    data.q3 = $('[name=q3]:checked').val();
    data.q4 = $('[name=q4]:checked').val();

    data.hc = $('input[name="HC"]').val();

    // data.utm_source = Cookies.get('_uc_utm_source');
    // data.utm_medium = Cookies.get('_uc_utm_medium');
    // data.utm_campaign = Cookies.get('_uc_utm_campaign');
    // data.utm_content = Cookies.get('_uc_utm_content');
    // data.utm_term = Cookies.get('_uc_utm_term');

    console.log(data);


    $.post(
      "/",
      $.param(data),
      function (resp) {
        // Cookies.set('timeout', 'Y', { expires: 1 / 100 });
      }
    );

    return false;
  });
})


