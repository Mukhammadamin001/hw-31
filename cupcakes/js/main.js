(function () {
  'use strict';

  /* ---------- reviews slider ---------- */
  var slider = document.querySelector('[data-slider]');
  if (slider) {
    var slides = Array.prototype.slice.call(slider.querySelectorAll('[data-slide]'));
    var current = 0;

    var render = function () {
      var n = slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.remove('is-active', 'is-prev', 'is-next');
        if (i === current) slide.classList.add('is-active');
        else if (i === (current - 1 + n) % n) slide.classList.add('is-prev');
        else if (i === (current + 1) % n) slide.classList.add('is-next');
        slide.setAttribute('aria-hidden', i === current ? 'false' : 'true');
        slide.querySelectorAll('a').forEach(function (a) { a.tabIndex = i === current ? 0 : -1; });
      });
    };

    var go = function (step) {
      current = (current + step + slides.length) % slides.length;
      render();
    };

    slider.querySelector('[data-prev]').addEventListener('click', function () { go(-1); });
    slider.querySelector('[data-next]').addEventListener('click', function () { go(1); });

    // swipe on touch screens
    var startX = null;
    slider.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      startX = null;
    });

    render();
  }

  /* ---------- phone mask: +7 (___) ___-__-__ ---------- */
  var formatPhone = function (value) {
    var digits = value.replace(/\D/g, '');
    if (digits.charAt(0) === '8' || digits.charAt(0) === '7') digits = digits.slice(1);
    digits = digits.slice(0, 10);
    var out = '+7';
    if (digits.length) out += ' (' + digits.slice(0, 3);
    if (digits.length >= 3) out += ')';
    if (digits.length > 3) out += ' ' + digits.slice(3, 6);
    if (digits.length > 6) out += '-' + digits.slice(6, 8);
    if (digits.length > 8) out += '-' + digits.slice(8, 10);
    return { text: out, complete: digits.length === 10 };
  };

  var phone = document.querySelector('[data-phone]');
  if (phone) {
    phone.addEventListener('input', function () {
      phone.value = phone.value ? formatPhone(phone.value).text : '';
      phone.classList.remove('is-invalid');
    });
    phone.addEventListener('focus', function () { if (!phone.value) phone.value = '+7 ('; });
    phone.addEventListener('blur', function () { if (phone.value === '+7 (' || phone.value === '+7') phone.value = ''; });
  }

  /* ---------- order form ---------- */
  var form = document.querySelector('[data-order]');
  if (form) {
    var status = form.querySelector('.order__status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = phone && formatPhone(phone.value).complete;
      var agreed = form.elements.agree.checked;
      status.classList.toggle('is-error', !(ok && agreed));
      if (!ok) {
        phone.classList.add('is-invalid');
        status.textContent = 'Введите номер телефона полностью';
        phone.focus();
      } else if (!agreed) {
        status.textContent = 'Подтвердите согласие на обработку данных';
      } else {
        status.textContent = 'Спасибо! Мы перезвоним вам в течение 15 минут.';
        form.reset();
      }
    });
  }

  /* ---------- photo / sketch upload ---------- */
  var upload = document.querySelector('[data-upload]');
  if (upload) {
    var label = document.querySelector('[data-upload-label]');
    var initial = label.textContent;
    upload.addEventListener('change', function () {
      var file = upload.files && upload.files[0];
      label.textContent = file ? 'Файл: ' + (file.name.length > 18 ? file.name.slice(0, 15) + '…' : file.name) : initial;
    });
  }
})();
