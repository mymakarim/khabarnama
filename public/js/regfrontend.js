function request_recaptcha_token() {
  0 !==
    jQuery('.ur-frontend-form').find(
      'form.register #ur-recaptcha-node #node_recaptcha_register.g-recaptcha-v3'
    ).length &&
    grecaptcha.ready(function () {
      grecaptcha
        .execute(ur_google_recaptcha_code.site_key, { action: 'register' })
        .then(function (e) {
          jQuery('form.register').find('#g-recaptcha-response').text(e)
        })
    })
  0 !==
    jQuery('.ur-frontend-form').find(
      'form.login .ur-form-row .ur-form-grid #ur-recaptcha-node #node_recaptcha_login.g-recaptcha-v3'
    ).length &&
    grecaptcha.ready(function () {
      grecaptcha.execute(ur_google_recaptcha_code.site_key, { action: 'login' }).then(function (e) {
        jQuery('form.login').find('#g-recaptcha-response').text(e)
      })
    })
}
function ur_includes(e, r) {
  if (Array.isArray(e)) for (var t = 0; t < e.length; t += 1) if (e[t] === r) return !0
  return !1
}
!(function (e) {
  var r = function () {
    var r = user_registration_params.ursL10n
    ;(e.fn.ur_form_submission = function () {
      return this.each(function () {
        var t = e(this),
          a = [],
          i = user_registration_params.form_required_fields,
          s = {
            init: function () {},
            get_form_data: function (r) {
              if (
                r === t.closest('.ur-frontend-form').attr('id') ||
                e('.ur-frontend-form')
                  .find('form.edit-profile')
                  .hasClass('user-registration-EditProfileForm')
              ) {
                var a = this,
                  i = [],
                  n = s.separate_form_handler(''),
                  o = new Array()
                e.each(n, function () {
                  var r = e(this).attr('name')
                  if (s.separate_form_handler('[name="' + r + '"]').length < 2) {
                    var t = a.get_fieldwise_data(e(this)),
                      n = document.querySelector('.field-invite_code')
                    'invite_code' === t.field_name
                      ? 'none' !== n.style.display && i.push(t)
                      : i.push(t)
                  } else e.inArray(r, o) < 0 && o.push(r)
                })
                for (var d = 0; d < o.length; d++) {
                  var u = s.separate_form_handler('[name="' + o[d] + '"]'),
                    f =
                      (u.get(0).tagName.toLowerCase(),
                      'undefined' !== u.eq(0).attr('type') ? u.eq(0).attr('type') : 'null'),
                    l = new Array()
                  if (
                    (e.each(u, function () {
                      var r = e(this),
                        t = ''
                      switch (r.get(0).tagName.toLowerCase()) {
                        case 'input':
                          switch (f) {
                            case 'checkbox':
                            case 'radio':
                              t = r.prop('checked') ? r.val() : ''
                              break
                            default:
                              t = r.val()
                          }
                          break
                        case 'select':
                        case 'textarea':
                          t = r.val()
                      }
                      '' !== t && l.push(t)
                    }),
                    'checkbox' == f)
                  )
                    var c = JSON.stringify(l)
                  else if ('radio' == f) c = l[0]
                  else c = u.val()
                  var p = o[d]
                  p = p.replace('[]', '')
                  var _ = {
                    value: c,
                    field_type: f,
                    label: u.eq(0).attr('data-label'),
                    field_name: p
                  }
                  i.push(_)
                }
                return e(document).trigger('user_registration_frontend_form_data_filter', [i]), i
              }
            },
            get_fieldwise_data: function (r) {
              var t = {},
                s = r.get(0).tagName.toLowerCase(),
                n = 'undefined' !== r.attr('name') ? r.attr('name') : 'null',
                o = []
              e('.field-phone').each(function () {
                var r = e(this).find('.form-row').attr('id')
                e(this)
                  .find('.form-row')
                  .find('#' + r)
                  .hasClass('ur-smart-phone-field') && o.push(e(this).find('.form-row').attr('id'))
              })
              var d = 'undefined' !== r.attr('type') ? r.attr('type') : 'null',
                u = r.get(0).className.split(' ')[0]
              switch (((t.value = ''), s)) {
                case 'input':
                  switch (d) {
                    case 'checkbox':
                    case 'radio':
                      t.value = r.prop('checked') ? r.val() : ''
                      break
                    default:
                      t.value = r.val()
                  }
                  ur_includes(o, n) && (t.value = r.siblings('input[type="hidden"]').val())
                  break
                case 'select':
                  t.value = r.val()
                  break
                case 'textarea':
                  switch (u) {
                    case 'wysiwyg':
                      tinyMCE.triggerSave(), (t.value = r.val())
                      break
                    default:
                      t.value = r.val()
                  }
              }
              return (
                e(document).trigger('user_registration_frontend_form_data_render', [r, t]),
                (t.field_type =
                  'undefined' !== r.eq(0).attr('type') ? r.eq(0).attr('type') : 'null'),
                r.attr('data-label') !== undefined
                  ? (t.label = r.attr('data-label'))
                  : r.prev().length && 'label' === r.prev().get(0).tagName.toLowerCase()
                  ? (t.label = r.prev().text())
                  : (t.label = t.field_type),
                r.attr('name') !== undefined && '' !== r.attr('name')
                  ? ((t.field_name = r.attr('name')),
                    (t.field_name = t.field_name.replace('[]', '')))
                  : (t.field_name = ''),
                e.inArray(t.field_name, i.join(',').trim()) >= 0 && a.push(t.field_name),
                t
              )
            },
            show_message: function (r, t, a, i) {
              if (
                (a.closest('.user-registration').find('.ur-message').remove(),
                e('.ur-frontend-form')
                  .find('form.edit-profile')
                  .hasClass('user-registration-EditProfileForm'))
              ) {
                ;(s = e('<div class="user-registration-' + t + '"/>')).append(r)
                e('.user-registration').find('.user-registration-MyAccount-navigation').length
                  ? s.insertBefore('.user-registration-MyAccount-navigation')
                  : s.insertBefore('.ur-frontend-form')
              } else {
                var s
                ;(s = e(
                  '<div class="ur-message user-registration-' +
                    t +
                    '" id="ur-submit-message-node"/>'
                )).append(r),
                  '1' === i ? a.append(s) : a.prepend(s)
              }
            },
            separate_form_handler: function (r) {
              return e('.ur-frontend-form')
                .find('form.edit-profile')
                .hasClass('user-registration-EditProfileForm')
                ? t.find('.user-registration-profile-fields').find('.ur-edit-profile-field' + r)
                : t
                    .closest('.ur-frontend-form')
                    .find('.ur-form-grid')
                    .find('.ur-frontend-field' + r)
            },
            missing_attachment_handler: function (r) {
              var t = []
              if (1 <= r.length) {
                r.each(function () {
                  var r = e(this).attr('id')
                  ;-1 === e.inArray(r, t) && t.push(r)
                })
                for (var a = 0; a < t.length; a++) {
                  for (
                    var i = e('#' + t[a])
                        .val()
                        .split(','),
                      s = i.length;
                    s >= 0;
                    s--
                  )
                    e.isNumeric(i[s]) || i.splice(s, 1)
                  e('#' + t[a]).val(i)
                }
              }
            }
          },
          n = {
            init: function () {
              this.form_submit_event(), this.edit_profile_event()
            },
            form_submit_event: function () {
              e('.ur-frontend-form').each(function () {
                var t = e(this)
                t.find('form.register')
                  .off('submit')
                  .on('submit', function (a) {
                    a.preventDefault()
                    var i = e(this)
                    if (
                      (e.extend(e.validator.messages, {
                        required: user_registration_params.message_required_fields,
                        url: user_registration_params.message_url_fields,
                        email: user_registration_params.message_email_fields,
                        number: user_registration_params.message_number_fields,
                        confirmpassword: user_registration_params.message_confirm_password_fields
                      }),
                      i.find('.user-registration-password-strength').length > 0)
                    ) {
                      var n = i
                          .find('.user-registration-password-strength')
                          .attr('data-current-strength'),
                        o = i.find('.user-registration-password-strength').attr('data-min-strength')
                      if (parseInt(n, 0) < parseInt(o, 0)) {
                        if ('' != i.find('#user_pass').val()) {
                          i.find('#user_pass_error').remove()
                          var d =
                            '<label id="user_pass_error" class="user-registration-error" for="user_pass">' +
                            r.password_strength_error +
                            '.</label>'
                          i.find('.user-registration-password-hint').after(d),
                            i.find('#user_pass').attr('aria-invalid', !0),
                            i.find('#user_pass').trigger('focus')
                        }
                        return !1
                      }
                    }
                    var u = i.find('.ur-smart-phone-field')
                    if ('true' === u.attr('aria-invalid')) {
                      ;(c = u.closest('p.form-row')).find('#' + u.data('id') + '-error').remove()
                      var f =
                        '<label id="' +
                        u.data('id') +
                        '-error" class="user-registration-error" for="' +
                        u.data('id') +
                        '">' +
                        user_registration_params.message_validate_phone_number +
                        '</label>'
                      return c.append(f), c.find('#' + u.data('id')).attr('aria-invalid', !0), !0
                    }
                    var l = i.find('.urfu-file-input')
                    s.missing_attachment_handler(l)
                    if (
                      1 ===
                      i.find('.uraf-profile-picture-upload').find('.user-registration-error').length
                    ) {
                      var c,
                        p = i
                          .find('.uraf-profile-picture-upload')
                          .find('.uraf-profile-picture-input')
                      ;(c = i.find('.uraf-profile-picture-upload'))
                        .find('#' + p.attr('name') + '-error')
                        .remove(),
                        c.find('.uraf-profile-picture-file-error').remove()
                      var _ =
                        '<label id="' +
                        p.attr('name') +
                        '-error" class="user-registration-error" for="' +
                        p.attr('name') +
                        '">' +
                        user_registration_params.message_required_fields +
                        '</label>'
                      c.find('button.wp_uraf_profile_picture_upload').after(_)
                    }
                    if (i.valid()) {
                      i.find('.ur-submit-button').prop('disabled', !0)
                      var m,
                        g = 0,
                        h = '0',
                        v = i.find('[name="g-recaptcha-response"]').val()
                      try {
                        m = JSON.stringify(
                          s.get_form_data(i.closest('.ur-frontend-form').attr('id'))
                        )
                      } catch (y) {
                        m = ''
                      }
                      1 === e(this).closest('form').find('input[name="ur-user-form-id"]').length &&
                        (g = e(this).closest('form').find('input[name="ur-user-form-id"]').val()),
                        1 ===
                          e(this).closest('form').find('input[name="ur_frontend_form_nonce"]')
                            .length &&
                          (h = e(this)
                            .closest('form')
                            .find('input[name="ur_frontend_form_nonce"]')
                            .val())
                      var w = {
                        action: 'user_registration_user_form_submit',
                        security: user_registration_params.user_registration_form_data_save,
                        form_data: m,
                        captchaResponse: v,
                        form_id: g,
                        ur_frontend_form_nonce: h
                      }
                      if (
                        (e(document).trigger('user_registration_frontend_before_form_submit', [
                          w,
                          i
                        ]),
                        'undefined' != typeof ur_google_recaptcha_code &&
                          '1' === t.find('form.register').data('captcha-enabled'))
                      ) {
                        if (0 === (v = i.find('[name="g-recaptcha-response"]').val()).length)
                          return (
                            s.show_message('<p>' + r.captcha_error + '</p>', 'error', i, '1'),
                            void i.find('.ur-submit-button').prop('disabled', !1)
                          )
                        if ('v3' == ur_google_recaptcha_code.version) request_recaptcha_token()
                        else
                          for (var b = 0; b <= google_recaptcha_user_registration; b++)
                            grecaptcha.reset(b)
                      }
                      i.find('.ur-submit-button').find('span').addClass('ur-front-spinner'),
                        e.ajax({
                          url: user_registration_params.ajax_url,
                          data: w,
                          type: 'POST',
                          async: !0,
                          complete: function (t) {
                            var a = []
                            if (
                              ((a.status = !1),
                              e(document).trigger(
                                'user_registration_frontend_before_ajax_complete_success_message',
                                [t, a]
                              ),
                              !a.status)
                            ) {
                              i.find('.ur-submit-button')
                                .find('span')
                                .removeClass('ur-front-spinner')
                              var n = i.find('input[name="ur-redirect-url"]').val(),
                                o = e('<ul class=""/>'),
                                d = 'error'
                              try {
                                var u = JSON.parse(t.responseText)
                                'undefined' != typeof u.success &&
                                  !0 === u.success &&
                                  'undefined' != typeof u.data.paypal_redirect &&
                                  (window.location = u.data.paypal_redirect),
                                  'undefined' != typeof u.success &&
                                    !0 === u.success &&
                                    (d = 'message'),
                                  'message' === d
                                    ? (i.find('.user-registration-password-hint').remove(),
                                      i.find('.user-registration-password-strength').remove(),
                                      'admin_approval' == u.data.form_login_option
                                        ? o.append('<li>' + r.user_under_approval + '</li>')
                                        : 'email_confirmation' == u.data.form_login_option
                                        ? o.append('<li>' + r.user_email_pending + '</li>')
                                        : 'payment' == u.data.form_login_option
                                        ? o.append('<li>' + u.data.message + '</li>')
                                        : o.append((u.data.message, r.user_successfully_saved)),
                                      'undefined' !=
                                        typeof u.data.auto_password_generation_success_message &&
                                        o.append(
                                          '<li>' +
                                            u.data.auto_password_generation_success_message +
                                            '</li>'
                                        ),
                                      i[0].reset(),
                                      jQuery('#billing_country').trigger('change'),
                                      jQuery('#shipping_country').trigger('change'),
                                      void 0 !== n && '' !== n
                                        ? window.setTimeout(function () {
                                            window.location = n
                                          }, 1e3)
                                        : 'undefined' != typeof u.data.auto_login &&
                                          u.data.auto_login &&
                                          location.reload())
                                    : 'error' === d &&
                                      ('object' == typeof u.data.message
                                        ? e.each(u.data.message, function (e, r) {
                                            o.append('<li>' + r + '</li>')
                                          })
                                        : o.append('<li>' + u.data.message + '</li>'))
                              } catch (l) {
                                o.append('<li>' + l.message + '</li>')
                              }
                              var f = JSON.parse(t.responseText).data.success_message_positon
                              s.show_message(o, d, i, f),
                                '1' === f
                                  ? e(window).scrollTop(i.find('.ur-button-container').offset().top)
                                  : e(window).scrollTop(
                                      i.closest('.ur-frontend-form').offset().top
                                    ),
                                e(document).trigger(
                                  'user_registration_frontend_after_ajax_complete',
                                  [t.responseText, d, i]
                                ),
                                i.find('.ur-submit-button').prop('disabled', !1)
                            }
                          }
                        })
                    }
                  })
              })
            },
            edit_profile_event: function () {
              e('form.user-registration-EditProfileForm').on('submit', function (r) {
                var t = e(this)
                e.extend(e.validator.messages, {
                  required: user_registration_params.message_required_fields,
                  url: user_registration_params.message_url_fields,
                  email: user_registration_params.message_email_fields,
                  number: user_registration_params.message_number_fields
                })
                var a = t.find('.ur-smart-phone-field')
                if ('true' === a.attr('aria-invalid')) {
                  ;(n = a.closest('p.form-row')).find('#' + a.data('id') + '-error').remove()
                  var i =
                    '<label id="' +
                    a.data('id') +
                    '-error" class="user-registration-error" for="' +
                    a.data('id') +
                    '">' +
                    user_registration_params.message_validate_phone_number +
                    '</label>'
                  return n.append(i), n.find('#' + a.data('id')).attr('aria-invalid', !0), !0
                }
                if (
                  1 ===
                  t.find('.uraf-profile-picture-upload').find('.user-registration-error').length
                ) {
                  var n,
                    o = t.find('.uraf-profile-picture-upload').find('.uraf-profile-picture-input')
                  ;(n = t.find('.uraf-profile-picture-upload'))
                    .find('#' + o.attr('name') + '-error')
                    .remove(),
                    n.find('.uraf-profile-picture-file-error').remove()
                  var d =
                    '<label id="' +
                    o.attr('name') +
                    '-error" class="user-registration-error" for="' +
                    o.attr('name') +
                    '">' +
                    user_registration_params.message_required_fields +
                    '</label>'
                  n.find('button.wp_uraf_profile_picture_upload').after(d)
                }
                if (t.valid()) {
                  r.preventDefault(),
                    t.find('.user-registration-submit-Button').prop('disabled', !0)
                  var u = t.find('.urfu-file-input')
                  s.missing_attachment_handler(u)
                  var f
                  try {
                    f = s.get_form_data()
                    var l = e('#profile_pic_url').val()
                    f.push({ value: l, field_name: 'user_registration_profile_pic_url' }),
                      (f = JSON.stringify(f))
                  } catch (p) {
                    f = ''
                  }
                  var c = {
                    action: 'user_registration_update_profile_details',
                    security: user_registration_params.user_registration_profile_details_save,
                    form_data: f
                  }
                  t
                    .find('.user-registration-submit-Button')
                    .find('span')
                    .addClass('ur-front-spinner'),
                    e.ajax({
                      type: 'POST',
                      url: user_registration_params.ajax_url,
                      dataType: 'JSON',
                      data: c,
                      complete: function (r) {
                        t.find('span.ur-front-spinner').removeClass('ur-front-spinner'),
                          t.closest('.user-registration').find('.user-registration-error').remove(),
                          t
                            .closest('.user-registration')
                            .find('.user-registration-message')
                            .remove()
                        var a = e('<ul class=""/>'),
                          i = 'error'
                        try {
                          var n = JSON.parse(r.responseText)
                          'undefined' != typeof n.success && !0 === n.success && (i = 'message'),
                            'object' == typeof n.data.message
                              ? e.each(n.data.message, function (e, r) {
                                  a.append('<li>' + r + '</li>')
                                })
                              : a.append('<li>' + n.data.message + '</li>')
                        } catch (o) {
                          a.append('<li>' + o.message + '</li>')
                        }
                        s.show_message(a, i, t, '0'),
                          t.find('.user-registration-submit-Button').prop('disabled', !1),
                          e(window).scrollTop(e('.user-registration').position())
                      }
                    })
                }
              })
            }
          }
        s.init(), n.init()
      })
    }),
      e(function () {
        e('.ur-submit-button').on('click', function () {
          e(this).closest('form.register').ur_form_submission()
        }),
          e('.user-registration-submit-Button').on('click', function () {
            e('.ur-frontend-form')
              .find('form.edit-profile')
              .hasClass('user-registration-EditProfileForm') &&
              'yes' === user_registration_params.ajax_submission_on_edit_profile &&
              e('form.user-registration-EditProfileForm').ur_form_submission()
          })
        var t = {}
        e(document.body).on('click', '#load_flatpickr', function () {
          var r = e(this).data('id'),
            a = t[r]
          if (!a) {
            var i = e(this).closest('.ur-field-item').find('#formated_date').val()
            if (0 < e('.ur-frontend-form').length)
              var s = e('.ur-frontend-form #' + r)
                .attr('type', 'text')
                .val(i)
            else
              s = e('.woocommerce-MyAccount-content #' + r)
                .attr('type', 'text')
                .val(i)
            e(this).attr('data-date-format', s.data('date-format')),
              e(this).attr('data-mode', s.data('mode')),
              e(this).attr('data-min-date', s.data('min-date')),
              e(this).attr('data-max-date', s.data('max-date')),
              e(this).attr('data-default-date', i),
              (a = e(this).flatpickr({
                disableMobile: !0,
                onChange: function (t, a, i) {
                  e('#' + r).val(a)
                }
              })),
              (t[r] = a)
          }
          a && a.open()
        }),
          e('.ur-frontend-form').each(function () {
            e(this)
              .find('form.register')
              .on('focusout', '#user_pass, #password_1', function () {
                $this = e(this)
                var t = e(this).attr('name'),
                  a = e(this).data('id'),
                  i = $this.closest('form').attr('data-enable-strength-password')
                if ('yes' === i || '1' === i) {
                  var s = $this.closest('form'),
                    n = s.attr('data-minimum-password-strength'),
                    o = []
                  ;(o =
                    'function' == typeof wp.passwordStrength.userInputDisallowedList
                      ? wp.passwordStrength.userInputDisallowedList()
                      : wp.passwordStrength.userInputBlacklist()).push(
                    s.find('input[data-id="user_email"]').val()
                  ),
                    o.push(s.find('input[data-id="user_login"]').val())
                  if (wp.passwordStrength.meter($this.val(), o) < n && '' !== $this.val()) {
                    s.find('#' + a + '_error').remove()
                    var d =
                      '<label id="' +
                      a +
                      '_error" class="user-registration-error" for="' +
                      t +
                      '">' +
                      r.password_strength_error +
                      '.</label>'
                    s.find('.user-registration-password-hint').after(d)
                  }
                }
              })
          })
      }),
      e(function () {
        request_recaptcha_token()
      }),
      e(function () {
        e('.user-registration-EditProfileForm.edit-profile .field-country').length > 0 &&
          e('.field-country').each(function () {
            var r = e(this).find('.ur-data-holder').data('option-value'),
              t = e(this).find('.ur-data-holder').data('option-html'),
              a = e(this).find('select')
            r &&
              t &&
              (0 === a.find('option[value="' + r + '"]').length &&
                a.append(
                  "<option class='ur-remove' selected='selected' value='" +
                    r +
                    "'>" +
                    t +
                    '</option>'
                ),
              e(this).on('click', function () {
                e(this).find('.ur-remove').remove()
              }))
          })
      })
  }
  r(),
    e(window).on('load', function () {
      r()
    })
})(jQuery)
var google_recaptcha_user_registration,
  onloadURCallback = function () {
    jQuery('.ur-frontend-form')
      .find('form.register')
      .each(function (e) {
        $this = jQuery(this)
        var r = $this.closest('.ur-frontend-form').attr('id')
        0 !== $this.find('#ur-recaptcha-node #node_recaptcha_register').length &&
          ($this.find('#ur-recaptcha-node .g-recaptcha').attr('id', 'node_recaptcha_register_' + r),
          (google_recaptcha_user_registration = grecaptcha.render('node_recaptcha_register_' + r, {
            sitekey: ur_google_recaptcha_code.site_key,
            theme: 'light',
            style:
              'transform:scale(0.77);-webkit-transform:scale(0.77);transform-origin:0 0;-webkit-transform-origin:0 0;'
          })))
      }),
      jQuery('.ur-frontend-form')
        .find('form.login')
        .each(function (e) {
          $this = jQuery(this)
          var r = $this.find('#ur-recaptcha-node')
          0 !== r.length &&
            grecaptcha.render(r.find('.g-recaptcha').attr('id'), {
              sitekey: ur_google_recaptcha_code.site_key,
              theme: 'light',
              style:
                'transform:scale(0.77);-webkit-transform:scale(0.77);transform-origin:0 0;-webkit-transform-origin:0 0;'
            })
        })
  }
!(function (e) {
  e(document).on('click', '.password_preview', function (r) {
    r.preventDefault()
    var t = user_registration_params.ursL10n,
      a = e(this).hasClass('dashicons-hidden') ? 'show' : 'hide',
      i = e(this).closest('.user-registration-form-row').find('input[name="password"]')
    if (
      (0 === i.length && (i = e(this).closest('.field-user_pass').find('input[name="user_pass"]')),
      0 === i.length &&
        (i = e(this)
          .closest('.field-user_confirm_password')
          .find('input[name="user_confirm_password"]')),
      0 === i.length &&
        (i = e(this).closest('.user-registration-form-row').find('input[name="password_current"]')),
      0 === i.length &&
        (i = e(this).closest('.user-registration-form-row').find('input[name="password_1"]')),
      0 === i.length &&
        (i = e(this).closest('.user-registration-form-row').find('input[name="password_2"]')),
      i.length > 0)
    )
      switch (a) {
        case 'show':
          i.attr('type', 'text'),
            e(this).removeClass('dashicons-hidden').addClass('dashicons-visibility'),
            e(this).attr('title', t.hide_password_title)
          break
        case 'hide':
          i.attr('type', 'password'),
            e(this).removeClass('dashicons-visibility').addClass('dashicons-hidden'),
            e(this).attr('title', t.show_password_title)
      }
  })
})(jQuery)
