!(function (e) {
  var a,
    i = ''
  ;(a = e('.ur-frontend-form form')).hasClass('edit-profile') && (i = 'user_registration_')
  var r = {
    $user_registration: a,
    init: function () {
      this.add_validation_methods(),
        this.load_validation(),
        this.init_inputMask(),
        this.init_tiptip(),
        this.$user_registration.on(
          'input validate change',
          '.input-text, select, input:checkbox input:radio',
          this.validate_field
        )
    },
    init_inputMask: function () {
      'undefined' != typeof e.fn.inputmask && e('.ur-masked-input').inputmask()
    },
    init_tiptip: function () {
      if ('undefined' != typeof tipTip) {
        e('.user-registration-help-tip').tipTip({
          attribute: 'title',
          fadeIn: 50,
          fadeOut: 50,
          delay: 200
        })
      }
    },
    add_validation_methods: function () {
      ;(e.validator.methods.email = function (e, a) {
        var i = new RegExp(
          /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
        )
        return this.optional(a) || i.test(e)
      }),
        e.validator.addMethod(
          'lengthValidator',
          function (e, a, i) {
            return e.length <= i
          },
          e.validator.format('Please enter less than {0} characters.')
        ),
        e.validator.addMethod(
          'SpecialCharacterValidator',
          function (e, a) {
            var i = new RegExp(/^(?=.{3,20}$)[a-zA-Z][a-zA-Z0-9_.]*(?: [a-zA-Z0-9]+)*$/)
            return this.optional(a) || i.test(e)
          },
          user_registration_params.message_username_character_fields
        ),
        e.validator.addMethod(
          'checkLimit',
          function (a, i, r) {
            var s = parseInt(r || 0, 10),
              t = ''
            if (e(i).closest('.field-checkbox').length) {
              t = e(i).closest('ul').find('input[type="checkbox"]:checked')
            } else e(i).closest('.field-multi_select2').length && (t = e(i).val())
            return 0 === s || t.length <= s
          },
          e.validator.format('Please select no more than {0} options.')
        )
    },
    load_validation: function () {
      if ('undefined' == typeof e.fn.validate) return !1
      var a = this
      a.$user_registration.each(function () {
        var i = e(this),
          r = a.custom_validation(i)
        a.custom_validation_messages(),
          i.validate({
            errorClass: 'user-registration-error',
            validClass: 'user-registration-valid',
            rules: r.rules,
            messages: r.messages,
            focusInvalid: !1,
            invalidHandler: function (a, i) {
              i.numberOfInvalids() && e(window).scrollTop(e(i.errorList[0].element).offset().top)
            },
            errorPlacement: function (e, a) {
              if (a.is('#password_2')) a.parent().after(e)
              else if (
                'radio' === a.attr('type') ||
                'checkbox' === a.attr('type') ||
                'password' === a.attr('type')
              )
                a.parent().parent().parent().append(e)
              else if (a.is('select') && a.attr('class').match(/date-month|date-day|date-year/))
                0 === a.parent().find('label.user-registration-error:visible').length &&
                  a.parent().find('select:last').after(e)
              else if (a.hasClass('ur-smart-phone-field')) {
                var i = a.closest('p.form-row')
                i.find('#' + a.data('id') + '-error').remove(), i.append(e)
              } else
                'number' === a.attr('type') && a.hasClass('ur-range-input')
                  ? e.insertAfter(a.closest('.ur-range-row').find('.ur-range-number'))
                  : a.hasClass('urfu-file-input') || a.closest('.field-multi_select2').length
                  ? e.insertAfter(a.parent().parent())
                  : e.insertAfter(a)
            },
            highlight: function (a, i, r) {
              var s = e(a)
              s.closest('.form-row'), s.attr('name')
            },
            unhighlight: function (a, i, r) {
              var s = e(a),
                t = s.closest('.form-row'),
                u = s.attr('name')
              'radio' === s.attr('type') || 'checkbox' === s.attr('type')
                ? t
                    .find("input[name='" + u + "']")
                    .addClass(r)
                    .removeClass(i)
                : s.addClass(r).removeClass(i),
                t.removeClass('user-registration-has-error')
            },
            submitHandler: function (a) {
              return !(
                e(a).hasClass('register') ||
                (e(a).hasClass('edit-profile') &&
                  'yes' === user_registration_params.ajax_submission_on_edit_profile)
              )
            }
          })
      })
    },
    validate_field: function (a) {
      e.extend(e.validator.messages, {
        required: user_registration_params.message_required_fields,
        url: user_registration_params.message_url_fields,
        email: user_registration_params.message_email_fields,
        number: user_registration_params.message_number_fields,
        confirmpassword: user_registration_params.message_confirm_password_fields
      })
      var i = e(this),
        r = i.closest('.form-row'),
        s = !0,
        t = r.is('.validate-required'),
        u = r.is('.validate-email'),
        n = a.type
      if (
        ('input' === n &&
          r.removeClass(
            'user-registration-invalid user-registration-invalid-required-field user-registration-invalid-email user-registration-validated'
          ),
        'validate' === n || 'change' === n)
      ) {
        if (
          (t &&
            ('checkbox' !== i.attr('type') || i.is(':checked')
              ? '' === i.val() &&
                (r
                  .removeClass('user-registration-validated')
                  .addClass('user-registration-invalid user-registration-invalid-required-field'),
                (s = !1))
              : (r
                  .removeClass('user-registration-validated')
                  .addClass('user-registration-invalid user-registration-invalid-required-field'),
                (s = !1))),
          u && i.val())
        ) {
          new RegExp(
            /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
          ).test(i.val()) ||
            (r
              .removeClass('user-registration-validated')
              .addClass('user-registration-invalid user-registration-invalid-email'),
            (s = !1))
        }
        s &&
          r
            .removeClass(
              'user-registration-invalid user-registration-invalid-required-field user-registration-invalid-email'
            )
            .addClass('user-registration-validated')
      }
    },
    custom_validation: function (a) {
      var r = {},
        s = {}
      if (a.find('#user_confirm_email').length) {
        var t = a.closest('.ur-frontend-form').attr('id')
        ;(r.user_confirm_email = { equalTo: '#' + t + ' #user_email' }),
          (s.user_confirm_email = user_registration_params.message_confirm_email_fields)
      }
      if (a.hasClass('edit-password'))
        (r.password_2 = { equalTo: '#password_1' }),
          (s.password_2 = user_registration_params.message_confirm_password_fields)
      else if (a.hasClass('register') && a.find('#user_confirm_password').length) {
        t = a.closest('.ur-frontend-form').attr('id')
        ;(r.user_confirm_password = { equalTo: '#' + t + ' #user_pass' }),
          (s.user_confirm_password = user_registration_params.message_confirm_password_fields)
      }
      var u = a.find('#user_login'),
        n = {}
      u.length &&
        void 0 !== u.data('username-length') &&
        (n.lengthValidator = u.data('username-length')),
        'no' == u.data('username-character') &&
          (n.SpecialCharacterValidator = u.data('username-character')),
        (r.user_login = n)
      var F = a.find('.field-checkbox'),
        d = a.find('.field-multi_select2')
      return (
        F.length &&
          F.each(function () {
            r[i + e(this).data('field-id') + '[]'] = {
              checkLimit: e(this).find('ul').data('choice-limit')
                ? e(this).find('ul').data('choice-limit')
                : 0
            }
          }),
        d.length &&
          d.each(function () {
            r[i + e(this).data('field-id') + '[]'] = {
              checkLimit: e(this).find('select').data('choice-limit')
                ? e(this).find('select').data('choice-limit')
                : 0
            }
          }),
        { rules: r, messages: s }
      )
    },
    custom_validation_messages: function () {
      ;(e.validator.messages.required = user_registration_params.message_required_fields),
        (e.validator.messages.url = user_registration_params.message_url_fields),
        (e.validator.messages.email = user_registration_params.message_email_fields),
        (e.validator.messages.number = user_registration_params.message_number_fields),
        (e.validator.messages.confirmpassword =
          user_registration_params.message_confirm_password_fields),
        (e.validator.messages.max = function (e, a) {
          return user_registration_params.message_confirm_number_field_max.replace('%qty%', a.max)
        }),
        (e.validator.messages.min = function (e, a) {
          return user_registration_params.message_confirm_number_field_min.replace('%qty%', a.min)
        }),
        (e.validator.messages.step = function (e, a) {
          return user_registration_params.message_confirm_number_field_step.replace('%qty%', a.step)
        })
    }
  }
  e(window).on('load', function () {
    r.init()
  })
})(jQuery)
