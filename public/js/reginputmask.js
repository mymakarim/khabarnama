!(function (e) {
  function t(i) {
    if (n[i]) return n[i].exports
    var a = (n[i] = { i: i, l: !1, exports: {} })
    return e[i].call(a.exports, a, a.exports, t), (a.l = !0), a.exports
  }
  var n = {}
  ;(t.m = e),
    (t.c = n),
    (t.d = function (e, n, i) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: i })
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e['default']
            }
          : function () {
              return e
            }
      return t.d(n, 'a', n), n
    }),
    (t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (t.p = ''),
    t((t.s = 3))
})([
  function (e, t, n) {
    'use strict'
    var i, a, r, o
    'function' == typeof Symbol && Symbol.iterator,
      (o = function (e) {
        return e
      }),
      (a = [n(2)]),
      void 0 === (r = 'function' == typeof (i = o) ? i.apply(t, a) : i) || (e.exports = r)
  },
  function (e, t, n) {
    'use strict'
    var i,
      a,
      r,
      o,
      s =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            }
    ;(o = function (e, t, n, i) {
      function a(t, n, o) {
        if (!(this instanceof a)) return new a(t, n, o)
        ;(this.el = i),
          (this.events = {}),
          (this.maskset = i),
          (this.refreshValue = !1),
          !0 !== o &&
            (e.isPlainObject(t) ? (n = t) : ((n = n || {}), t && (n.alias = t)),
            (this.opts = e.extend(!0, {}, this.defaults, n)),
            (this.noMasksCache = n && n.definitions !== i),
            (this.userOptions = n || {}),
            (this.isRTL = this.opts.numericInput),
            r(this.opts.alias, n, this.opts))
      }
      function r(t, n, o) {
        var s = a.prototype.aliases[t]
        return s
          ? (s.alias && r(s.alias, i, o), e.extend(!0, o, s), e.extend(!0, o, n), !0)
          : (null === o.mask && (o.mask = t), !1)
      }
      function o(t, n) {
        function r(t, r, o) {
          var s = !1
          if (
            ((null !== t && '' !== t) ||
              ((s = null !== o.regex)
                ? (t = (t = o.regex).replace(/^(\^)(.*)(\$)$/, '$2'))
                : ((s = !0), (t = '.*'))),
            1 === t.length && !1 === o.greedy && 0 !== o.repeat && (o.placeholder = ''),
            o.repeat > 0 || '*' === o.repeat || '+' === o.repeat)
          ) {
            var l = '*' === o.repeat ? 0 : '+' === o.repeat ? 1 : o.repeat
            t =
              o.groupmarker[0] +
              t +
              o.groupmarker[1] +
              o.quantifiermarker[0] +
              l +
              ',' +
              o.repeat +
              o.quantifiermarker[1]
          }
          var u,
            c = s ? 'regex_' + o.regex : o.numericInput ? t.split('').reverse().join('') : t
          return (
            a.prototype.masksCache[c] === i || !0 === n
              ? ((u = {
                  mask: t,
                  maskToken: a.prototype.analyseMask(t, s, o),
                  validPositions: {},
                  _buffer: i,
                  buffer: i,
                  tests: {},
                  excludes: {},
                  metadata: r,
                  maskLength: i
                }),
                !0 !== n &&
                  ((a.prototype.masksCache[c] = u),
                  (u = e.extend(!0, {}, a.prototype.masksCache[c]))))
              : (u = e.extend(!0, {}, a.prototype.masksCache[c])),
            u
          )
        }
        if ((e.isFunction(t.mask) && (t.mask = t.mask(t)), e.isArray(t.mask))) {
          if (t.mask.length > 1) {
            if (null === t.keepStatic) {
              t.keepStatic = 'auto'
              for (var o = 0; o < t.mask.length; o++)
                if (t.mask[o].charAt(0) !== t.mask[0].charAt(0)) {
                  t.keepStatic = !0
                  break
                }
            }
            var s = t.groupmarker[0]
            return (
              e.each(t.isRTL ? t.mask.reverse() : t.mask, function (n, a) {
                s.length > 1 && (s += t.groupmarker[1] + t.alternatormarker + t.groupmarker[0]),
                  a.mask === i || e.isFunction(a.mask) ? (s += a) : (s += a.mask)
              }),
              r((s += t.groupmarker[1]), t.mask, t)
            )
          }
          t.mask = t.mask.pop()
        }
        return t.mask && t.mask.mask !== i && !e.isFunction(t.mask.mask)
          ? r(t.mask.mask, t.mask, t)
          : r(t.mask, t.mask, t)
      }
      function l(e) {
        var t = n.createElement('input'),
          i = 'on' + e,
          a = i in t
        return a || (t.setAttribute(i, 'return;'), (a = 'function' == typeof t[i])), (t = null), a
      }
      function u(r, o, c) {
        function d(e, t, n, a, r) {
          var o = c.greedy
          r && (c.greedy = !1), (t = t || 0)
          var s,
            l,
            u,
            p = [],
            f = 0,
            m = v()
          do {
            if (!0 === e && h().validPositions[f])
              (l = (u =
                r &&
                !0 === h().validPositions[f].match.optionality &&
                h().validPositions[f + 1] === i &&
                (!0 === h().validPositions[f].generatedInput ||
                  (h().validPositions[f].input == c.skipOptionalPartCharacter && f > 0))
                  ? b(f, A(f, s, f - 1))
                  : h().validPositions[f]).match),
                (s = u.locator.slice()),
                p.push(!0 === n ? u.input : !1 === n ? l.nativeDef : G(f, l))
            else {
              ;(l = (u = x(f, s, f - 1)).match), (s = u.locator.slice())
              var d = !0 !== a && (!1 !== c.jitMasking ? c.jitMasking : l.jit)
              ;(!1 === d || d === i || f < m || ('number' == typeof d && isFinite(d) && d > f)) &&
                p.push(!1 === n ? l.nativeDef : G(f, l))
            }
            'auto' === c.keepStatic && l.newBlockMarker && null !== l.fn && (c.keepStatic = f - 1),
              f++
          } while (((Z === i || f < Z) && (null !== l.fn || '' !== l.def)) || t > f)
          return (
            '' === p[p.length - 1] && p.pop(),
            (!1 === n && h().maskLength !== i) || (h().maskLength = f - 1),
            (c.greedy = o),
            p
          )
        }
        function h() {
          return o
        }
        function g(e) {
          var t = h()
          ;(t.buffer = i), !0 !== e && ((t.validPositions = {}), (t.p = 0))
        }
        function v(e, t, n) {
          var a = -1,
            r = -1,
            o = n || h().validPositions
          for (var s in (e === i && (e = -1), o)) {
            var l = parseInt(s)
            o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (a = l), l >= e && (r = l))
          }
          return -1 === a || a == e ? r : -1 == r ? a : e - a < r - e ? a : r
        }
        function k(e) {
          var t = e.locator[e.alternation]
          return (
            'string' == typeof t && t.length > 0 && (t = t.split(',')[0]),
            t !== i ? t.toString() : ''
          )
        }
        function y(e, t) {
          var n = (e.alternation != i ? e.mloc[k(e)] : e.locator).join('')
          if ('' !== n) for (; n.length < t; ) n += '0'
          return n
        }
        function b(e, t) {
          for (var n, a, r, o = y(P((e = e > 0 ? e - 1 : 0))), s = 0; s < t.length; s++) {
            var l = t[s]
            n = y(l, o.length)
            var u = Math.abs(n - o)
            ;(a === i ||
              ('' !== n && u < a) ||
              (r &&
                r.match.optionality &&
                'master' === r.match.newBlockMarker &&
                (!l.match.optionality || !l.match.newBlockMarker)) ||
              (r && r.match.optionalQuantifier && !l.match.optionalQuantifier)) &&
              ((a = u), (r = l))
          }
          return r
        }
        function x(e, t, n) {
          return h().validPositions[e] || b(e, A(e, t ? t.slice() : t, n))
        }
        function P(e, t) {
          return h().validPositions[e] ? h().validPositions[e] : (t || A(e))[0]
        }
        function S(e, t) {
          for (var n = !1, i = A(e), a = 0; a < i.length; a++)
            if (i[a].match && i[a].match.def === t) {
              n = !0
              break
            }
          return n
        }
        function A(t, n, a) {
          function r(n, a, s, u) {
            function d(s, u, g) {
              function v(t, n) {
                var i = 0 === e.inArray(t, n.matches)
                return (
                  i ||
                    e.each(n.matches, function (e, a) {
                      if (
                        (!0 === a.isQuantifier
                          ? (i = v(t, n.matches[e - 1]))
                          : !0 === a.isOptional
                          ? (i = v(t, a))
                          : !0 === a.isAlternate && (i = v(t, a)),
                        i)
                      )
                        return !1
                    }),
                  i
                )
              }
              function k(t, n, a) {
                var r, o
                if (
                  ((h().tests[t] || h().validPositions[t]) &&
                    e.each(h().tests[t] || [h().validPositions[t]], function (e, t) {
                      if (t.mloc[n]) return (r = t), !1
                      var s = a !== i ? a : t.alternation,
                        l = t.locator[s] !== i ? t.locator[s].toString().indexOf(n) : -1
                      ;(o === i || l < o) && -1 !== l && ((r = t), (o = l))
                    }),
                  r)
                ) {
                  var s = r.locator[r.alternation]
                  return (r.mloc[n] || r.mloc[s] || r.locator).slice(
                    (a !== i ? a : r.alternation) + 1
                  )
                }
                return a !== i ? k(t, n) : i
              }
              function y(e, t) {
                function n(e) {
                  for (var t, n, i = [], a = 0, r = e.length; a < r; a++)
                    if ('-' === e.charAt(a))
                      for (n = e.charCodeAt(a + 1); ++t < n; ) i.push(String.fromCharCode(t))
                    else (t = e.charCodeAt(a)), i.push(e.charAt(a))
                  return i.join('')
                }
                return c.regex && null !== e.match.fn && null !== t.match.fn
                  ? -1 !==
                      n(t.match.def.replace(/[\[\]]/g, '')).indexOf(
                        n(e.match.def.replace(/[\[\]]/g, ''))
                      )
                  : e.match.def === t.match.nativeDef
              }
              function b(e, t) {
                if (
                  t === i ||
                  (e.alternation === t.alternation &&
                    -1 === e.locator[e.alternation].toString().indexOf(t.locator[t.alternation]))
                ) {
                  e.mloc = e.mloc || {}
                  var n = e.locator[e.alternation]
                  if (n !== i) {
                    if (
                      ('string' == typeof n && (n = n.split(',')[0]),
                      e.mloc[n] === i && (e.mloc[n] = e.locator.slice()),
                      t !== i)
                    ) {
                      for (var a in t.mloc)
                        'string' == typeof a && (a = a.split(',')[0]),
                          e.mloc[a] === i && (e.mloc[a] = t.mloc[a])
                      e.locator[e.alternation] = Object.keys(e.mloc).join(',')
                    }
                    return !0
                  }
                  e.alternation = i
                }
                return !1
              }
              if (l > 5e3)
                throw (
                  'Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ' +
                  h().mask
                )
              if (l === t && s.matches === i)
                return p.push({ match: s, locator: u.reverse(), cd: m, mloc: {} }), !0
              if (s.matches !== i) {
                if (s.isGroup && g !== s) {
                  if ((s = d(n.matches[e.inArray(s, n.matches) + 1], u, g))) return !0
                } else if (s.isOptional) {
                  var x = s
                  if ((s = r(s, a, u, g))) {
                    if (
                      (e.each(p, function (e, t) {
                        t.match.optionality = !0
                      }),
                      (o = p[p.length - 1].match),
                      g !== i || !v(o, x))
                    )
                      return !0
                    ;(f = !0), (l = t)
                  }
                } else if (s.isAlternator) {
                  var P,
                    S = s,
                    A = [],
                    C = p.slice(),
                    E = u.length,
                    w = a.length > 0 ? a.shift() : -1
                  if (-1 === w || 'string' == typeof w) {
                    var M,
                      D = l,
                      O = a.slice(),
                      _ = []
                    if ('string' == typeof w) _ = w.split(',')
                    else for (M = 0; M < S.matches.length; M++) _.push(M.toString())
                    if (h().excludes[t]) {
                      for (var j = _.slice(), F = 0, T = h().excludes[t].length; F < T; F++)
                        _.splice(_.indexOf(h().excludes[t][F].toString()), 1)
                      0 === _.length && ((h().excludes[t] = i), (_ = j))
                    }
                    ;(!0 === c.keepStatic ||
                      (isFinite(parseInt(c.keepStatic)) && D >= c.keepStatic)) &&
                      (_ = _.slice(0, 1))
                    for (var R = !1, N = 0; N < _.length; N++) {
                      ;(M = parseInt(_[N])),
                        (p = []),
                        (a = ('string' == typeof w && k(l, M, E)) || O.slice()),
                        S.matches[M] && d(S.matches[M], [M].concat(u), g)
                          ? (s = !0)
                          : 0 === N && (R = !0),
                        (P = p.slice()),
                        (l = D),
                        (p = [])
                      for (var G = 0; G < P.length; G++) {
                        var I = P[G],
                          B = !1
                        ;(I.match.jit = I.match.jit || R),
                          (I.alternation = I.alternation || E),
                          b(I)
                        for (var L = 0; L < A.length; L++) {
                          var H = A[L]
                          if (
                            'string' != typeof w ||
                            (I.alternation !== i &&
                              -1 !== e.inArray(I.locator[I.alternation].toString(), _))
                          ) {
                            if (I.match.nativeDef === H.match.nativeDef) {
                              ;(B = !0), b(H, I)
                              break
                            }
                            if (y(I, H)) {
                              b(I, H) && ((B = !0), A.splice(A.indexOf(H), 0, I))
                              break
                            }
                            if (y(H, I)) {
                              b(H, I)
                              break
                            }
                            if (
                              ((q = H),
                              null === (z = I).match.fn &&
                                null !== q.match.fn &&
                                q.match.fn.test(z.match.def, h(), t, !1, c, !1))
                            ) {
                              b(I, H) && ((B = !0), A.splice(A.indexOf(H), 0, I))
                              break
                            }
                          }
                        }
                        B || A.push(I)
                      }
                    }
                    ;(p = C.concat(A)),
                      (l = t),
                      (f = p.length > 0),
                      (s = A.length > 0),
                      (a = O.slice())
                  } else s = d(S.matches[w] || n.matches[w], [w].concat(u), g)
                  if (s) return !0
                } else if (s.isQuantifier && g !== n.matches[e.inArray(s, n.matches) - 1])
                  for (
                    var V = s, K = a.length > 0 ? a.shift() : 0;
                    K < (isNaN(V.quantifier.max) ? K + 1 : V.quantifier.max) && l <= t;
                    K++
                  ) {
                    var U = n.matches[e.inArray(V, n.matches) - 1]
                    if ((s = d(U, [K].concat(u), U))) {
                      if (
                        (((o = p[p.length - 1].match).optionalQuantifier =
                          K > V.quantifier.min - 1),
                        (o.jit = K + U.matches.indexOf(o) >= V.quantifier.jit),
                        v(o, U) && K > V.quantifier.min - 1)
                      ) {
                        ;(f = !0), (l = t)
                        break
                      }
                      if (
                        V.quantifier.jit !== i &&
                        isNaN(V.quantifier.max) &&
                        o.optionalQuantifier &&
                        h().validPositions[t - 1] === i
                      ) {
                        p.pop(), (f = !0), (l = t), (m = i)
                        break
                      }
                      return !0
                    }
                  }
                else if ((s = r(s, a, u, g))) return !0
              } else l++
              var z, q
            }
            for (var g = a.length > 0 ? a.shift() : 0; g < n.matches.length; g++)
              if (!0 !== n.matches[g].isQuantifier) {
                var v = d(n.matches[g], [g].concat(s), u)
                if (v && l === t) return v
                if (l > t) break
              }
          }
          var o,
            s = h().maskToken,
            l = n ? a : 0,
            u = n ? n.slice() : [0],
            p = [],
            f = !1,
            m = n ? n.join('') : ''
          if (t > -1) {
            if (n === i) {
              for (var d, g = t - 1; (d = h().validPositions[g] || h().tests[g]) === i && g > -1; )
                g--
              d !== i &&
                g > -1 &&
                ((u = (function (t, n) {
                  var a = []
                  return (
                    e.isArray(n) || (n = [n]),
                    n.length > 0 &&
                      (n[0].alternation === i
                        ? 0 === (a = b(t, n.slice()).locator.slice()).length &&
                          (a = n[0].locator.slice())
                        : e.each(n, function (e, t) {
                            if ('' !== t.def)
                              if (0 === a.length) a = t.locator.slice()
                              else
                                for (var n = 0; n < a.length; n++)
                                  t.locator[n] &&
                                    -1 === a[n].toString().indexOf(t.locator[n]) &&
                                    (a[n] += ',' + t.locator[n])
                          })),
                    a
                  )
                })(g, d)),
                (m = u.join('')),
                (l = g))
            }
            if (h().tests[t] && h().tests[t][0].cd === m) return h().tests[t]
            for (var v = u.shift(); v < s.length && !((r(s[v], u, [v]) && l === t) || l > t); v++);
          }
          return (
            (0 === p.length || f) &&
              p.push({
                match: { fn: null, optionality: !1, casing: null, def: '', placeholder: '' },
                locator: [],
                mloc: {},
                cd: m
              }),
            n !== i && h().tests[t]
              ? e.extend(!0, [], p)
              : ((h().tests[t] = e.extend(!0, [], p)), h().tests[t])
          )
        }
        function C() {
          return (
            h()._buffer === i &&
              ((h()._buffer = d(!1, 1)), h().buffer === i && (h().buffer = h()._buffer.slice())),
            h()._buffer
          )
        }
        function E(e) {
          return (h().buffer !== i && !0 !== e) || (h().buffer = d(!0, v(), !0)), h().buffer
        }
        function w(e, t, n) {
          var a, r
          if (!0 === e) g(), (e = 0), (t = n.length)
          else for (a = e; a < t; a++) delete h().validPositions[a]
          for (r = e, a = e; a < t; a++)
            if ((g(!0), n[a] !== c.skipOptionalPartCharacter)) {
              var o = O(r, n[a], !0, !0)
              !1 !== o && (g(!0), (r = o.caret !== i ? o.caret : o.pos + 1))
            }
        }
        function M(t, n, a) {
          for (
            var r, o = c.greedy ? n : n.slice(0, 1), s = !1, l = a !== i ? a.split(',') : [], u = 0;
            u < l.length;
            u++
          )
            -1 !== (r = t.indexOf(l[u])) && t.splice(r, 1)
          for (var p = 0; p < t.length; p++)
            if (-1 !== e.inArray(t[p], o)) {
              s = !0
              break
            }
          return s
        }
        function D(t, n, a, r, o) {
          var s,
            l,
            u,
            c,
            p,
            f,
            m,
            d = e.extend(!0, {}, h().validPositions),
            y = !1,
            b = o !== i ? o : v()
          if (-1 === b && o === i) l = (c = P((s = 0))).alternation
          else
            for (; b >= 0; b--)
              if ((u = h().validPositions[b]) && u.alternation !== i) {
                if (c && c.locator[u.alternation] !== u.locator[u.alternation]) break
                ;(s = b), (l = h().validPositions[s].alternation), (c = u)
              }
          if (l !== i) {
            ;(m = parseInt(s)),
              (h().excludes[m] = h().excludes[m] || []),
              !0 !== t && h().excludes[m].push(k(c))
            var x = [],
              S = 0
            for (p = m; p < v(i, !0) + 1; p++)
              (f = h().validPositions[p]) && !0 !== f.generatedInput
                ? x.push(f.input)
                : p < t && S++,
                delete h().validPositions[p]
            for (; h().excludes[m] && h().excludes[m].length < 10; ) {
              var A = -1 * S,
                C = x.slice()
              for (h().tests[m] = i, g(!0), y = !0; C.length > 0; ) {
                var E = C.shift()
                if (!(y = O(v(i, !0) + 1, E, !1, r, !0))) break
              }
              if (y && n !== i) {
                var w = v(t) + 1
                for (p = m; p < v() + 1; p++)
                  ((f = h().validPositions[p]) === i || null == f.match.fn) && p < t + A && A++
                y = O((t += A) > w ? w : t, n, a, r, !0)
              }
              if (y) break
              if ((g(), (c = P(m)), (h().validPositions = e.extend(!0, {}, d)), !h().excludes[m])) {
                y = D(t, n, a, r, m - 1)
                break
              }
              var M = k(c)
              if (-1 !== h().excludes[m].indexOf(M)) {
                y = D(t, n, a, r, m - 1)
                break
              }
              for (h().excludes[m].push(M), p = m; p < v(i, !0) + 1; p++)
                delete h().validPositions[p]
            }
          }
          return (h().excludes[m] = i), y
        }
        function O(t, n, r, o, s, l) {
          function u(e) {
            return te
              ? e.begin - e.end > 1 || e.begin - e.end == 1
              : e.end - e.begin > 1 || e.end - e.begin == 1
          }
          function p(n, r, s) {
            var l = !1
            return (
              e.each(A(n), function (p, f) {
                var m = f.match
                if (
                  (E(!0),
                  !1 !==
                    (l =
                      null != m.fn
                        ? m.fn.test(r, h(), n, s, c, u(t))
                        : (r === m.def || r === c.skipOptionalPartCharacter) &&
                          '' !== m.def && { c: G(n, m, !0) || m.def, pos: n }))
                ) {
                  var d = l.c !== i ? l.c : r,
                    g = n
                  return (
                    (d =
                      d === c.skipOptionalPartCharacter && null === m.fn
                        ? G(n, m, !0) || m.def
                        : d),
                    l.remove !== i &&
                      (e.isArray(l.remove) || (l.remove = [l.remove]),
                      e.each(
                        l.remove.sort(function (e, t) {
                          return t - e
                        }),
                        function (e, t) {
                          j({ begin: t, end: t + 1 })
                        }
                      )),
                    l.insert !== i &&
                      (e.isArray(l.insert) || (l.insert = [l.insert]),
                      e.each(
                        l.insert.sort(function (e, t) {
                          return e - t
                        }),
                        function (e, t) {
                          O(t.pos, t.c, !0, o)
                        }
                      )),
                    !0 !== l && l.pos !== i && l.pos !== n && (g = l.pos),
                    (!0 === l || l.pos !== i || l.c !== i) &&
                      (j(
                        t,
                        e.extend({}, f, {
                          input: (function (t, n, i) {
                            switch (c.casing || n.casing) {
                              case 'upper':
                                t = t.toUpperCase()
                                break
                              case 'lower':
                                t = t.toLowerCase()
                                break
                              case 'title':
                                var r = h().validPositions[i - 1]
                                t =
                                  0 === i || (r && r.input === String.fromCharCode(a.keyCode.SPACE))
                                    ? t.toUpperCase()
                                    : t.toLowerCase()
                                break
                              default:
                                if (e.isFunction(c.casing)) {
                                  var o = Array.prototype.slice.call(arguments)
                                  o.push(h().validPositions), (t = c.casing.apply(this, o))
                                }
                            }
                            return t
                          })(d, m, g)
                        }),
                        o,
                        g
                      ) || (l = !1),
                      !1)
                  )
                }
              }),
              l
            )
          }
          r = !0 === r
          var f = t
          t.begin !== i && (f = te ? t.end : t.begin)
          var m = !0,
            d = e.extend(!0, {}, h().validPositions)
          if (
            (e.isFunction(c.preValidation) &&
              !r &&
              !0 !== o &&
              !0 !== l &&
              (m = c.preValidation(E(), f, n, u(t), c, h())),
            !0 === m)
          ) {
            if (
              (_(i, f, !0),
              (Z === i || f < Z) && ((m = p(f, n, r)), (!r || !0 === o) && !1 === m && !0 !== l))
            ) {
              var v = h().validPositions[f]
              if (
                !v ||
                null !== v.match.fn ||
                (v.match.def !== n && n !== c.skipOptionalPartCharacter)
              ) {
                if ((c.insertMode || h().validPositions[T(f)] === i) && !F(f, !0))
                  for (var k = f + 1, y = T(f); k <= y; k++)
                    if (!1 !== (m = p(k, n, r))) {
                      ;(m = _(f, m.pos !== i ? m.pos : k) || m), (f = k)
                      break
                    }
              } else m = { caret: T(f) }
            }
            !1 !== m ||
              !1 === c.keepStatic ||
              (null != c.regex && !U(E())) ||
              r ||
              !0 === s ||
              (m = D(f, n, r, o)),
              !0 === m && (m = { pos: f })
          }
          if (e.isFunction(c.postValidation) && !1 !== m && !r && !0 !== o && !0 !== l) {
            var b = c.postValidation(E(!0), m, c)
            if (b !== i) {
              if (b.refreshFromBuffer && b.buffer) {
                var x = b.refreshFromBuffer
                w(!0 === x ? x : x.start, x.end, b.buffer)
              }
              m = !0 === b ? m : b
            }
          }
          return (
            m && m.pos === i && (m.pos = f),
            (!1 !== m && !0 !== l) || (g(!0), (h().validPositions = e.extend(!0, {}, d))),
            m
          )
        }
        function _(t, n, a) {
          var r
          if (t === i) for (t = n - 1; t > 0 && !h().validPositions[t]; t--);
          for (var o = t; o < n; o++)
            if (h().validPositions[o] === i && !F(o, !0)) {
              var s = 0 == o ? P(o) : h().validPositions[o - 1]
              if (s) {
                var l,
                  u = y(s),
                  c = A(o).slice(),
                  p = i,
                  f = P(o)
                if (
                  ('' === c[c.length - 1].match.def && c.pop(),
                  e.each(c, function (e, t) {
                    l = y(t, u.length)
                    var n = Math.abs(l - u)
                    ;(p === i || n < p) &&
                      null === t.match.fn &&
                      !0 !== t.match.optionality &&
                      !0 !== t.match.optionalQuantifier &&
                      ((p = n), (f = t))
                  }),
                  ((f = e.extend({}, f, {
                    input: G(o, f.match, !0) || f.match.def
                  })).generatedInput = !0),
                  j(o, f, !0),
                  !0 !== a)
                ) {
                  var m = h().validPositions[n].input
                  ;(h().validPositions[n] = i), (r = O(n, m, !0, !0))
                }
              }
            }
          return r
        }
        function j(t, n, a, r) {
          function o(e, t, n) {
            var a = t[e]
            if (
              a !== i &&
              ((null === a.match.fn && !0 !== a.match.optionality) || a.input === c.radixPoint)
            ) {
              var r =
                  n.begin <= e - 1 ? t[e - 1] && null === t[e - 1].match.fn && t[e - 1] : t[e - 1],
                o = n.end > e + 1 ? t[e + 1] && null === t[e + 1].match.fn && t[e + 1] : t[e + 1]
              return r && o
            }
            return !1
          }
          var s = t.begin !== i ? t.begin : t,
            l = t.end !== i ? t.end : t
          if (
            (t.begin > t.end && ((s = t.end), (l = t.begin)),
            (r = r !== i ? r : s),
            s !== l || (c.insertMode && h().validPositions[r] !== i && a === i))
          ) {
            var u = e.extend(!0, {}, h().validPositions),
              p = v(i, !0)
            for (h().p = s, y = p; y >= s; y--)
              h().validPositions[y] &&
                '+' === h().validPositions[y].match.nativeDef &&
                (c.isNegative = !1),
                delete h().validPositions[y]
            var f = !0,
              m = r,
              d = (h().validPositions, !1),
              k = m,
              y = m
            for (
              n && ((h().validPositions[r] = e.extend(!0, {}, n)), k++, m++, s < l && y++);
              y <= p;
              y++
            ) {
              var b = u[y]
              if (
                b !== i &&
                (y >= l || (y >= s && !0 !== b.generatedInput && o(y, u, { begin: s, end: l })))
              ) {
                for (; '' !== P(k).match.def; ) {
                  if (!1 === d && u[k] && u[k].match.nativeDef === b.match.nativeDef)
                    (h().validPositions[k] = e.extend(!0, {}, u[k])),
                      (h().validPositions[k].input = b.input),
                      _(i, k, !0),
                      (m = k + 1),
                      (f = !0)
                  else if (S(k, b.match.def)) {
                    var x = O(k, b.input, !0, !0)
                    ;(f = !1 !== x), (m = x.caret || x.insert ? v() : k + 1), (d = !0)
                  } else if (
                    !(f =
                      !0 === b.generatedInput ||
                      (b.input === c.radixPoint && !0 === c.numericInput)) &&
                    '' === P(k).match.def
                  )
                    break
                  if (f) break
                  k++
                }
                '' == P(k).match.def && (f = !1), (k = m)
              }
              if (!f) break
            }
            if (!f) return (h().validPositions = e.extend(!0, {}, u)), g(!0), !1
          } else n && (h().validPositions[r] = e.extend(!0, {}, n))
          return g(!0), !0
        }
        function F(e, t) {
          var n = x(e).match
          if (('' === n.def && (n = P(e).match), null != n.fn)) return n.fn
          if (!0 !== t && e > -1) {
            var i = A(e)
            return i.length > 1 + ('' === i[i.length - 1].match.def ? 1 : 0)
          }
          return !1
        }
        function T(e, t) {
          for (
            var n = e + 1;
            '' !== P(n).match.def &&
            ((!0 === t && (!0 !== P(n).match.newBlockMarker || !F(n))) || (!0 !== t && !F(n)));

          )
            n++
          return n
        }
        function R(e, t) {
          var n,
            i = e
          if (i <= 0) return 0
          for (
            ;
            --i > 0 &&
            ((!0 === t && !0 !== P(i).match.newBlockMarker) ||
              (!0 !== t &&
                !F(i) &&
                ((n = A(i)).length < 2 || (2 === n.length && '' === n[1].match.def))));

          );
          return i
        }
        function N(t, n, a, r, o) {
          if (r && e.isFunction(c.onBeforeWrite)) {
            var s = c.onBeforeWrite.call(X, r, n, a, c)
            if (s) {
              if (s.refreshFromBuffer) {
                var l = s.refreshFromBuffer
                w(!0 === l ? l : l.start, l.end, s.buffer || n), (n = E(!0))
              }
              a !== i && (a = s.caret !== i ? s.caret : a)
            }
          }
          if (
            t !== i &&
            (t.inputmask._valueSet(n.join('')),
            a === i || (r !== i && 'blur' === r.type) ? Q(t, a, 0 === n.length) : H(t, a),
            !0 === o)
          ) {
            var u = e(t),
              p = t.inputmask._valueGet()
            ;(ie = !0),
              u.trigger('input'),
              setTimeout(function () {
                p === C().join('') ? u.trigger('cleared') : !0 === U(n) && u.trigger('complete')
              }, 0)
          }
        }
        function G(t, n, a) {
          if ((n = n || P(t).match).placeholder !== i || !0 === a)
            return e.isFunction(n.placeholder) ? n.placeholder(c) : n.placeholder
          if (null === n.fn) {
            if (t > -1 && h().validPositions[t] === i) {
              var r,
                o = A(t),
                s = []
              if (o.length > 1 + ('' === o[o.length - 1].match.def ? 1 : 0))
                for (var l = 0; l < o.length; l++)
                  if (
                    !0 !== o[l].match.optionality &&
                    !0 !== o[l].match.optionalQuantifier &&
                    (null === o[l].match.fn ||
                      r === i ||
                      !1 !== o[l].match.fn.test(r.match.def, h(), t, !0, c)) &&
                    (s.push(o[l]),
                    null === o[l].match.fn && (r = o[l]),
                    s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))
                  )
                    return c.placeholder.charAt(t % c.placeholder.length)
            }
            return n.def
          }
          return c.placeholder.charAt(t % c.placeholder.length)
        }
        function I(t, n, r, o, s) {
          var l = this || t.inputmask,
            u = o.slice(),
            p = '',
            f = -1,
            m = i
          if ((g(), r || !0 === c.autoUnmask)) f = T(f)
          else {
            var k = C().slice(0, T(-1)).join(''),
              y = u.join('').match(new RegExp('^' + a.escapeRegex(k), 'g'))
            y && y.length > 0 && (u.splice(0, y.length * k.length), (f = T(f)))
          }
          ;-1 === f ? ((h().p = T(f)), (f = 0)) : (h().p = f),
            (l.caretPos = { begin: f }),
            e.each(u, function (n, a) {
              if (a !== i)
                if (
                  h().validPositions[n] === i &&
                  u[n] === G(n) &&
                  F(n, !0) &&
                  !1 === O(n, u[n], !0, i, i, !0)
                )
                  h().p++
                else {
                  var o = new e.Event('_checkval')
                  ;(o.which = a.charCodeAt(0)), (p += a)
                  var s = v(i, !0)
                  !(function (e, t) {
                    return (
                      -1 !== d(!0, 0, !1).slice(e, T(e)).join('').replace(/'/g, '').indexOf(t) &&
                      !F(e) &&
                      (P(e).match.nativeDef === t.charAt(0) ||
                        (null === P(e).match.fn && P(e).match.nativeDef === "'" + t.charAt(0)) ||
                        (' ' === P(e).match.nativeDef &&
                          (P(e + 1).match.nativeDef === t.charAt(0) ||
                            (null === P(e + 1).match.fn &&
                              P(e + 1).match.nativeDef === "'" + t.charAt(0)))))
                    )
                  })(f, p)
                    ? (m = se.keypressEvent.call(t, o, !0, !1, r, l.caretPos.begin)) &&
                      ((f = l.caretPos.begin + 1), (p = ''))
                    : (m = se.keypressEvent.call(t, o, !0, !1, r, s + 1)),
                    m &&
                      (N(i, E(), m.forwardPosition, o, !1),
                      (l.caretPos = { begin: m.forwardPosition, end: m.forwardPosition }))
                }
            }),
            n &&
              N(
                t,
                E(),
                m ? m.forwardPosition : i,
                s || new e.Event('checkval'),
                s && 'input' === s.type
              )
        }
        function B(t) {
          if (t) {
            if (t.inputmask === i) return t.value
            t.inputmask && t.inputmask.refreshValue && se.setValueEvent.call(t)
          }
          var n = [],
            a = h().validPositions
          for (var r in a) a[r].match && null != a[r].match.fn && n.push(a[r].input)
          var o = 0 === n.length ? '' : (te ? n.reverse() : n).join('')
          if (e.isFunction(c.onUnMask)) {
            var s = (te ? E().slice().reverse() : E()).join('')
            o = c.onUnMask.call(X, s, o, c)
          }
          return o
        }
        function L(e) {
          return (
            !te ||
              'number' != typeof e ||
              (c.greedy && '' === c.placeholder) ||
              !ee ||
              (e = ee.inputmask._valueGet().length - e),
            e
          )
        }
        function H(a, r, o, s) {
          var l
          if (r === i)
            return (
              a.setSelectionRange
                ? ((r = a.selectionStart), (o = a.selectionEnd))
                : t.getSelection
                ? ((l = t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== a &&
                    l.commonAncestorContainer !== a) ||
                  ((r = l.startOffset), (o = l.endOffset))
                : n.selection &&
                  n.selection.createRange &&
                  (o =
                    (r =
                      0 -
                      (l = n.selection.createRange())
                        .duplicate()
                        .moveStart('character', -a.inputmask._valueGet().length)) + l.text.length),
              { begin: s ? r : L(r), end: s ? o : L(o) }
            )
          if (
            (e.isArray(r) && ((o = te ? r[0] : r[1]), (r = te ? r[1] : r[0])),
            r.begin !== i && ((o = te ? r.begin : r.end), (r = te ? r.end : r.begin)),
            'number' == typeof r)
          ) {
            ;(r = s ? r : L(r)), (o = 'number' == typeof (o = s ? o : L(o)) ? o : r)
            var u =
              parseInt(
                ((a.ownerDocument.defaultView || t).getComputedStyle
                  ? (a.ownerDocument.defaultView || t).getComputedStyle(a, null)
                  : a.currentStyle
                ).fontSize
              ) * o
            if (
              ((a.scrollLeft = u > a.scrollWidth ? u : 0),
              m || !1 !== c.insertMode || r !== o || o++,
              (a.inputmask.caretPos = { begin: r, end: o }),
              a.setSelectionRange)
            )
              (a.selectionStart = r), (a.selectionEnd = o)
            else if (t.getSelection) {
              if (((l = n.createRange()), a.firstChild === i || null === a.firstChild)) {
                var p = n.createTextNode('')
                a.appendChild(p)
              }
              l.setStart(
                a.firstChild,
                r < a.inputmask._valueGet().length ? r : a.inputmask._valueGet().length
              ),
                l.setEnd(
                  a.firstChild,
                  o < a.inputmask._valueGet().length ? o : a.inputmask._valueGet().length
                ),
                l.collapse(!0)
              var f = t.getSelection()
              f.removeAllRanges(), f.addRange(l)
            } else
              a.createTextRange &&
                ((l = a.createTextRange()).collapse(!0),
                l.moveEnd('character', o),
                l.moveStart('character', r),
                l.select())
            Q(a, { begin: r, end: o })
          }
        }
        function V(t) {
          var n,
            a,
            r = d(!0, v(), !0, !0),
            o = r.length,
            s = v(),
            l = {},
            u = h().validPositions[s],
            c = u !== i ? u.locator.slice() : i
          for (n = s + 1; n < r.length; n++)
            (c = (a = x(n, c, n - 1)).locator.slice()), (l[n] = e.extend(!0, {}, a))
          var p = u && u.alternation !== i ? u.locator[u.alternation] : i
          for (
            n = o - 1;
            n > s &&
            ((a = l[n]).match.optionality ||
              (a.match.optionalQuantifier && a.match.newBlockMarker) ||
              (p &&
                ((p !== l[n].locator[u.alternation] && null != a.match.fn) ||
                  (null === a.match.fn &&
                    a.locator[u.alternation] &&
                    M(a.locator[u.alternation].toString().split(','), p.toString().split(',')) &&
                    '' !== A(n)[0].def)))) &&
            r[n] === G(n, a.match);
            n--
          )
            o--
          return t ? { l: o, def: l[o] ? l[o].match : i } : o
        }
        function K(e) {
          e.length = 0
          for (var t, n = d(!0, 0, !0, i, !0); (t = n.shift()) !== i; ) e.push(t)
          return e
        }
        function U(t) {
          if (e.isFunction(c.isComplete)) return c.isComplete(t, c)
          if ('*' === c.repeat) return i
          var n = !1,
            a = V(!0),
            r = R(a.l)
          if (
            a.def === i ||
            a.def.newBlockMarker ||
            a.def.optionality ||
            a.def.optionalQuantifier
          ) {
            n = !0
            for (var o = 0; o <= r; o++) {
              var s = x(o).match
              if (
                (null !== s.fn &&
                  h().validPositions[o] === i &&
                  !0 !== s.optionality &&
                  !0 !== s.optionalQuantifier) ||
                (null === s.fn && t[o] !== G(o, s))
              ) {
                n = !1
                break
              }
            }
          }
          return n
        }
        function z(e, t, n, r, o) {
          if (
            (c.numericInput || te) &&
            (t === a.keyCode.BACKSPACE
              ? (t = a.keyCode.DELETE)
              : t === a.keyCode.DELETE && (t = a.keyCode.BACKSPACE),
            te)
          ) {
            var s = n.end
            ;(n.end = n.begin), (n.begin = s)
          }
          if (
            (t === a.keyCode.BACKSPACE && (n.end - n.begin < 1 || !1 === c.insertMode)
              ? ((n.begin = R(n.begin)),
                h().validPositions[n.begin] !== i &&
                  h().validPositions[n.begin].input === c.groupSeparator &&
                  n.begin--,
                !1 === c.insertMode && n.end !== h().maskLength && n.end--)
              : t === a.keyCode.DELETE &&
                n.begin === n.end &&
                ((n.end =
                  F(n.end, !0) &&
                  h().validPositions[n.end] &&
                  h().validPositions[n.end].input !== c.radixPoint
                    ? n.end + 1
                    : T(n.end) + 1),
                h().validPositions[n.begin] !== i &&
                  h().validPositions[n.begin].input === c.groupSeparator &&
                  n.end++),
            j(n),
            (!0 !== r && !1 !== c.keepStatic) || null !== c.regex)
          ) {
            var l = D(!0)
            if (l) {
              var u =
                l.caret !== i ? l.caret : l.pos ? T(l.pos.begin ? l.pos.begin : l.pos) : v(-1, !0)
              ;(t !== a.keyCode.DELETE || n.begin > u) && n.begin
            }
          }
          var p = v(n.begin, !0)
          if (p < n.begin || -1 === n.begin) h().p = T(p)
          else if (!0 !== r && ((h().p = n.begin), !0 !== o))
            for (; h().p < p && h().validPositions[h().p] === i; ) h().p++
        }
        function q(i) {
          var a = (i.ownerDocument.defaultView || t).getComputedStyle(i, null),
            r = n.createElement('div')
          ;(r.style.width = a.width),
            (r.style.textAlign = a.textAlign),
            (J = n.createElement('div')),
            (i.inputmask.colorMask = J),
            (J.className = 'im-colormask'),
            i.parentNode.insertBefore(J, i),
            i.parentNode.removeChild(i),
            J.appendChild(i),
            J.appendChild(r),
            (i.style.left = r.offsetLeft + 'px'),
            e(J).on('mouseleave', function (e) {
              return se.mouseleaveEvent.call(i, [e])
            }),
            e(J).on('mouseenter', function (e) {
              return se.mouseenterEvent.call(i, [e])
            }),
            e(J).on('click', function (e) {
              return (
                H(
                  i,
                  (function (e) {
                    var t,
                      r = n.createElement('span')
                    for (var o in a) isNaN(o) && -1 !== o.indexOf('font') && (r.style[o] = a[o])
                    ;(r.style.textTransform = a.textTransform),
                      (r.style.letterSpacing = a.letterSpacing),
                      (r.style.position = 'absolute'),
                      (r.style.height = 'auto'),
                      (r.style.width = 'auto'),
                      (r.style.visibility = 'hidden'),
                      (r.style.whiteSpace = 'nowrap'),
                      n.body.appendChild(r)
                    var s,
                      l = i.inputmask._valueGet(),
                      u = 0
                    for (t = 0, s = l.length; t <= s; t++) {
                      if (((r.innerHTML += l.charAt(t) || '_'), r.offsetWidth >= e)) {
                        var c = e - u,
                          p = r.offsetWidth - e
                        ;(r.innerHTML = l.charAt(t)), (t = (c -= r.offsetWidth / 3) < p ? t - 1 : t)
                        break
                      }
                      u = r.offsetWidth
                    }
                    return n.body.removeChild(r), t
                  })(e.clientX)
                ),
                se.clickEvent.call(i, [e])
              )
            }),
            e(i).on('keydown', function (e) {
              e.shiftKey ||
                !1 === c.insertMode ||
                setTimeout(function () {
                  Q(i)
                }, 0)
            })
        }
        function Q(e, t, a) {
          function r(e) {
            if ((e === i && (e = ''), p || (null !== o.fn && s.input !== i)))
              if (p && ((null !== o.fn && s.input !== i) || '' === o.def)) {
                p = !1
                var t = u.length
                ;(u[t - 1] = u[t - 1] + '</span>'), u.push(e)
              } else u.push(e)
            else (p = !0), u.push("<span class='im-static'>" + e)
          }
          var o,
            s,
            l,
            u = [],
            p = !1,
            f = 0
          if (J !== i) {
            var m = E()
            if ((t === i ? (t = H(e)) : t.begin === i && (t = { begin: t, end: t }), !0 !== a)) {
              var d = v()
              do {
                h().validPositions[f]
                  ? ((s = h().validPositions[f]), (o = s.match), (l = s.locator.slice()), r(m[f]))
                  : ((s = x(f, l, f - 1)),
                    (o = s.match),
                    (l = s.locator.slice()),
                    !1 === c.jitMasking ||
                    f < d ||
                    ('number' == typeof c.jitMasking && isFinite(c.jitMasking) && c.jitMasking > f)
                      ? r(G(f, o))
                      : (p = !1)),
                  f++
              } while (((Z === i || f < Z) && (null !== o.fn || '' !== o.def)) || d > f || p)
              p && r(),
                n.activeElement === e &&
                  (u.splice(
                    t.begin,
                    0,
                    t.begin === t.end || t.end > h().maskLength
                      ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">'
                      : '<mark class="im-caret-select">'
                  ),
                  u.splice(t.end + 1, 0, '</mark>'))
            }
            var g = J.getElementsByTagName('div')[0]
            ;(g.innerHTML = u.join('')), e.inputmask.positionColorMask(e, g)
          }
        }
        ;(o = o || this.maskset), (c = c || this.opts)
        var W,
          $,
          Z,
          J,
          Y,
          X = this,
          ee = this.el,
          te = this.isRTL,
          ne = !1,
          ie = !1,
          ae = !1,
          re = !1,
          oe = {
            on: function (t, n, r) {
              var o = function (t) {
                var n = this
                if (n.inputmask === i && 'FORM' !== this.nodeName) {
                  var o = e.data(n, '_inputmask_opts')
                  o ? new a(o).mask(n) : oe.off(n)
                } else {
                  if (
                    'setvalue' === t.type ||
                    'FORM' === this.nodeName ||
                    !(
                      n.disabled ||
                      (n.readOnly &&
                        !(
                          ('keydown' === t.type && t.ctrlKey && 67 === t.keyCode) ||
                          (!1 === c.tabThrough && t.keyCode === a.keyCode.TAB)
                        ))
                    )
                  ) {
                    switch (t.type) {
                      case 'input':
                        if (!0 === ie) return (ie = !1), t.preventDefault()
                        if (p) {
                          var s = arguments
                          return (
                            setTimeout(function () {
                              r.apply(n, s), H(n, n.inputmask.caretPos, i, !0)
                            }, 0),
                            !1
                          )
                        }
                        break
                      case 'keydown':
                        ;(ne = !1), (ie = !1)
                        break
                      case 'keypress':
                        if (!0 === ne) return t.preventDefault()
                        ne = !0
                        break
                      case 'click':
                        if (f || m)
                          return (
                            (s = arguments),
                            setTimeout(function () {
                              r.apply(n, s)
                            }, 0),
                            !1
                          )
                    }
                    var l = r.apply(n, arguments)
                    return !1 === l && (t.preventDefault(), t.stopPropagation()), l
                  }
                  t.preventDefault()
                }
              }
              ;(t.inputmask.events[n] = t.inputmask.events[n] || []),
                t.inputmask.events[n].push(o),
                -1 !== e.inArray(n, ['submit', 'reset'])
                  ? null !== t.form && e(t.form).on(n, o)
                  : e(t).on(n, o)
            },
            off: function (t, n) {
              var i
              t.inputmask &&
                t.inputmask.events &&
                (n ? ((i = [])[n] = t.inputmask.events[n]) : (i = t.inputmask.events),
                e.each(i, function (n, i) {
                  for (; i.length > 0; ) {
                    var a = i.pop()
                    ;-1 !== e.inArray(n, ['submit', 'reset'])
                      ? null !== t.form && e(t.form).off(n, a)
                      : e(t).off(n, a)
                  }
                  delete t.inputmask.events[n]
                }))
            }
          },
          se = {
            keydownEvent: function (t) {
              var n = this,
                i = e(n),
                r = t.keyCode,
                o = H(n)
              if (
                r === a.keyCode.BACKSPACE ||
                r === a.keyCode.DELETE ||
                (m && r === a.keyCode.BACKSPACE_SAFARI) ||
                (t.ctrlKey && r === a.keyCode.X && !l('cut'))
              )
                t.preventDefault(),
                  z(0, r, o),
                  N(n, E(!0), h().p, t, n.inputmask._valueGet() !== E().join(''))
              else if (r === a.keyCode.END || r === a.keyCode.PAGE_DOWN) {
                t.preventDefault()
                var s = T(v())
                c.insertMode || s !== h().maskLength || t.shiftKey || s--,
                  H(n, t.shiftKey ? o.begin : s, s, !0)
              } else
                (r === a.keyCode.HOME && !t.shiftKey) || r === a.keyCode.PAGE_UP
                  ? (t.preventDefault(), H(n, 0, t.shiftKey ? o.begin : 0, !0))
                  : ((c.undoOnEscape && r === a.keyCode.ESCAPE) || (90 === r && t.ctrlKey)) &&
                    !0 !== t.altKey
                  ? (I(n, !0, !1, W.split('')), i.trigger('click'))
                  : r !== a.keyCode.INSERT || t.shiftKey || t.ctrlKey
                  ? !0 === c.tabThrough && r === a.keyCode.TAB
                    ? (!0 === t.shiftKey
                        ? (null === P(o.begin).match.fn && (o.begin = T(o.begin)),
                          (o.end = R(o.begin, !0)),
                          (o.begin = R(o.end, !0)))
                        : ((o.begin = T(o.begin, !0)),
                          (o.end = T(o.begin, !0)),
                          o.end < h().maskLength && o.end--),
                      o.begin < h().maskLength && (t.preventDefault(), H(n, o.begin, o.end)))
                    : t.shiftKey ||
                      (!1 === c.insertMode &&
                        (r === a.keyCode.RIGHT
                          ? setTimeout(function () {
                              var e = H(n)
                              H(n, e.begin)
                            }, 0)
                          : r === a.keyCode.LEFT &&
                            setTimeout(function () {
                              var e = H(n)
                              H(n, te ? e.begin + 1 : e.begin - 1)
                            }, 0)))
                  : ((c.insertMode = !c.insertMode),
                    H(n, c.insertMode || o.begin !== h().maskLength ? o.begin : o.begin - 1))
              c.onKeyDown.call(this, t, E(), H(n).begin, c),
                (ae = -1 !== e.inArray(r, c.ignorables))
            },
            keypressEvent: function (t, n, r, o, s) {
              var l = this,
                u = e(l),
                p = t.which || t.charCode || t.keyCode
              if (!(!0 === n || (t.ctrlKey && t.altKey)) && (t.ctrlKey || t.metaKey || ae))
                return (
                  p === a.keyCode.ENTER &&
                    W !== E().join('') &&
                    ((W = E().join('')),
                    setTimeout(function () {
                      u.trigger('change')
                    }, 0)),
                  !0
                )
              if (p) {
                46 === p &&
                  !1 === t.shiftKey &&
                  '' !== c.radixPoint &&
                  (p = c.radixPoint.charCodeAt(0))
                var f,
                  m = n ? { begin: s, end: s } : H(l),
                  d = String.fromCharCode(p),
                  v = 0
                if (c._radixDance && c.numericInput) {
                  var k = E().indexOf(c.radixPoint.charAt(0)) + 1
                  m.begin <= k &&
                    (p === c.radixPoint.charCodeAt(0) && (v = 1), (m.begin -= 1), (m.end -= 1))
                }
                h().writeOutBuffer = !0
                var y = O(m, d, o)
                if (
                  (!1 !== y &&
                    (g(!0),
                    (f = y.caret !== i ? y.caret : T(y.pos.begin ? y.pos.begin : y.pos)),
                    (h().p = f)),
                  (f = (c.numericInput && y.caret === i ? R(f) : f) + v),
                  !1 !== r &&
                    (setTimeout(function () {
                      c.onKeyValidation.call(l, p, y, c)
                    }, 0),
                    h().writeOutBuffer && !1 !== y))
                ) {
                  var b = E()
                  N(l, b, f, t, !0 !== n)
                }
                if ((t.preventDefault(), n)) return !1 !== y && (y.forwardPosition = f), y
              }
            },
            pasteEvent: function (n) {
              var i,
                a = n.originalEvent || n,
                r = (e(this), this.inputmask._valueGet(!0)),
                o = H(this)
              te && ((i = o.end), (o.end = o.begin), (o.begin = i))
              var s = r.substr(0, o.begin),
                l = r.substr(o.end, r.length)
              if (
                (s === (te ? C().reverse() : C()).slice(0, o.begin).join('') && (s = ''),
                l === (te ? C().reverse() : C()).slice(o.end).join('') && (l = ''),
                t.clipboardData && t.clipboardData.getData)
              )
                r = s + t.clipboardData.getData('Text') + l
              else {
                if (!a.clipboardData || !a.clipboardData.getData) return !0
                r = s + a.clipboardData.getData('text/plain') + l
              }
              var u = r
              if (e.isFunction(c.onBeforePaste)) {
                if (!1 === (u = c.onBeforePaste.call(X, r, c))) return n.preventDefault()
                u || (u = r)
              }
              return (
                I(this, !1, !1, u.toString().split('')),
                N(this, E(), T(v()), n, W !== E().join('')),
                n.preventDefault()
              )
            },
            inputFallBackEvent: function (t) {
              var n = this,
                i = n.inputmask._valueGet()
              if (E().join('') !== i) {
                var r = H(n)
                if (
                  ((i = (function (e, t, n) {
                    if (f) {
                      var i = t.replace(E().join(''), '')
                      if (1 === i.length) {
                        var a = t.split('')
                        a.splice(n.begin, 0, i), (t = a.join(''))
                      }
                    }
                    return t
                  })(
                    0,
                    (i = (function (e, t, n) {
                      return (
                        '.' === t.charAt(n.begin - 1) &&
                          '' !== c.radixPoint &&
                          (((t = t.split(''))[n.begin - 1] = c.radixPoint.charAt(0)),
                          (t = t.join(''))),
                        t
                      )
                    })(0, i, r)),
                    r
                  )),
                  E().join('') !== i)
                ) {
                  var o = E().join(''),
                    s = !c.numericInput && i.length > o.length ? -1 : 0,
                    l = i.substr(0, r.begin),
                    u = i.substr(r.begin),
                    p = o.substr(0, r.begin + s),
                    m = o.substr(r.begin + s),
                    d = r,
                    h = '',
                    g = !1
                  if (l !== p) {
                    for (
                      var v = (g = l.length >= p.length) ? l.length : p.length, k = 0;
                      l.charAt(k) === p.charAt(k) && k < v;
                      k++
                    );
                    g && (0 === s && (d.begin = k), (h += l.slice(k, d.end)))
                  }
                  if (
                    (u !== m &&
                      (u.length > m.length
                        ? (h += u.slice(0, 1))
                        : u.length < m.length &&
                          ((d.end += m.length - u.length),
                          g ||
                            '' === c.radixPoint ||
                            '' !== u ||
                            l.charAt(d.begin + s - 1) !== c.radixPoint ||
                            (d.begin--, (h = c.radixPoint)))),
                    N(n, E(), { begin: d.begin + s, end: d.end + s }),
                    h.length > 0)
                  )
                    e.each(h.split(''), function (t, i) {
                      var a = new e.Event('keypress')
                      ;(a.which = i.charCodeAt(0)), (ae = !1), se.keypressEvent.call(n, a)
                    })
                  else {
                    d.begin === d.end - 1 &&
                      ((d.begin = R(d.begin + 1)),
                      d.begin === d.end - 1 ? H(n, d.begin) : H(n, d.begin, d.end))
                    var y = new e.Event('keydown')
                    ;(y.keyCode = c.numericInput ? a.keyCode.BACKSPACE : a.keyCode.DELETE),
                      se.keydownEvent.call(n, y),
                      !1 === c.insertMode && H(n, H(n).begin - 1)
                  }
                  t.preventDefault()
                }
              }
            },
            beforeInputEvent: function (t) {
              if (t.cancelable) {
                var n = this
                switch (t.inputType) {
                  case 'insertText':
                    return (
                      e.each(t.data.split(''), function (t, i) {
                        var a = new e.Event('keypress')
                        ;(a.which = i.charCodeAt(0)), (ae = !1), se.keypressEvent.call(n, a)
                      }),
                      t.preventDefault()
                    )
                  case 'deleteContentBackward':
                    return (
                      ((i = new e.Event('keydown')).keyCode = a.keyCode.BACKSPACE),
                      se.keydownEvent.call(n, i),
                      t.preventDefault()
                    )
                  case 'deleteContentForward':
                    var i
                    return (
                      ((i = new e.Event('keydown')).keyCode = a.keyCode.DELETE),
                      se.keydownEvent.call(n, i),
                      t.preventDefault()
                    )
                }
              }
            },
            setValueEvent: function (t) {
              this.inputmask.refreshValue = !1
              var n =
                (n = t && t.detail ? t.detail[0] : arguments[1]) || this.inputmask._valueGet(!0)
              e.isFunction(c.onBeforeMask) && (n = c.onBeforeMask.call(X, n, c) || n),
                I(this, !0, !1, (n = n.split(''))),
                (W = E().join('')),
                (c.clearMaskOnLostFocus || c.clearIncomplete) &&
                  this.inputmask._valueGet() === C().join('') &&
                  this.inputmask._valueSet('')
            },
            focusEvent: function (e) {
              var t = this.inputmask._valueGet()
              c.showMaskOnFocus &&
                (!c.showMaskOnHover || (c.showMaskOnHover && '' === t)) &&
                (this.inputmask._valueGet() !== E().join('')
                  ? N(this, E(), T(v()))
                  : !1 === re && H(this, T(v()))),
                !0 === c.positionCaretOnTab && !1 === re && se.clickEvent.apply(this, [e, !0]),
                (W = E().join(''))
            },
            mouseleaveEvent: function (e) {
              if (((re = !1), c.clearMaskOnLostFocus && n.activeElement !== this)) {
                var t = E().slice(),
                  i = this.inputmask._valueGet()
                i !== this.getAttribute('placeholder') &&
                  '' !== i &&
                  (-1 === v() && i === C().join('') ? (t = []) : K(t), N(this, t))
              }
            },
            clickEvent: function (t, a) {
              var r = this
              setTimeout(function () {
                if (n.activeElement === r) {
                  var t = H(r)
                  if ((a && (te ? (t.end = t.begin) : (t.begin = t.end)), t.begin === t.end))
                    switch (c.positionCaretOnClick) {
                      case 'none':
                        break
                      case 'select':
                        H(r, 0, E().length)
                        break
                      case 'ignore':
                        H(r, T(v()))
                        break
                      case 'radixFocus':
                        if (
                          (function (t) {
                            if ('' !== c.radixPoint) {
                              var n = h().validPositions
                              if (n[t] === i || n[t].input === G(t)) {
                                if (t < T(-1)) return !0
                                var a = e.inArray(c.radixPoint, E())
                                if (-1 !== a) {
                                  for (var r in n) if (a < r && n[r].input !== G(r)) return !1
                                  return !0
                                }
                              }
                            }
                            return !1
                          })(t.begin)
                        ) {
                          var o = E().join('').indexOf(c.radixPoint)
                          H(r, c.numericInput ? T(o) : o)
                          break
                        }
                      default:
                        var s = t.begin,
                          l = v(s, !0),
                          u = T(l)
                        if (s < u) H(r, F(s, !0) || F(s - 1, !0) ? s : T(s))
                        else {
                          var p = h().validPositions[l],
                            f = x(u, p ? p.match.locator : i, p),
                            m = G(u, f.match)
                          if (
                            ('' !== m &&
                              E()[u] !== m &&
                              !0 !== f.match.optionalQuantifier &&
                              !0 !== f.match.newBlockMarker) ||
                            (!F(u, c.keepStatic) && f.match.def === m)
                          ) {
                            var d = T(u)
                            ;(s >= d || s === u) && (u = d)
                          }
                          H(r, u)
                        }
                    }
                }
              }, 0)
            },
            dblclickEvent: function (e) {
              var t = this
              setTimeout(function () {
                H(t, 0, T(v()))
              }, 0)
            },
            cutEvent: function (i) {
              e(this)
              var r = H(this),
                o = i.originalEvent || i,
                s = t.clipboardData || o.clipboardData,
                l = te ? E().slice(r.end, r.begin) : E().slice(r.begin, r.end)
              s.setData('text', te ? l.reverse().join('') : l.join('')),
                n.execCommand && n.execCommand('copy'),
                z(0, a.keyCode.DELETE, r),
                N(this, E(), h().p, i, W !== E().join(''))
            },
            blurEvent: function (t) {
              var n = e(this)
              if (this.inputmask) {
                var a = this.inputmask._valueGet(),
                  r = E().slice()
                ;('' === a && J === i) ||
                  (c.clearMaskOnLostFocus && (-1 === v() && a === C().join('') ? (r = []) : K(r)),
                  !1 === U(r) &&
                    (setTimeout(function () {
                      n.trigger('incomplete')
                    }, 0),
                    c.clearIncomplete && (g(), (r = c.clearMaskOnLostFocus ? [] : C().slice()))),
                  N(this, r, i, t)),
                  W !== E().join('') && ((W = r.join('')), n.trigger('change'))
              }
            },
            mouseenterEvent: function (e) {
              ;(re = !0),
                n.activeElement !== this &&
                  c.showMaskOnHover &&
                  this.inputmask._valueGet() !== E().join('') &&
                  N(this, E())
            },
            submitEvent: function (e) {
              W !== E().join('') && $.trigger('change'),
                c.clearMaskOnLostFocus &&
                  -1 === v() &&
                  ee.inputmask._valueGet &&
                  ee.inputmask._valueGet() === C().join('') &&
                  ee.inputmask._valueSet(''),
                c.clearIncomplete && !1 === U(E()) && ee.inputmask._valueSet(''),
                c.removeMaskOnSubmit &&
                  (ee.inputmask._valueSet(ee.inputmask.unmaskedvalue(), !0),
                  setTimeout(function () {
                    N(ee, E())
                  }, 0))
            },
            resetEvent: function (e) {
              ;(ee.inputmask.refreshValue = !0),
                setTimeout(function () {
                  $.trigger('setvalue')
                }, 0)
            }
          }
        if (
          ((a.prototype.positionColorMask = function (e, t) {
            e.style.left = t.offsetLeft + 'px'
          }),
          r !== i)
        )
          switch (r.action) {
            case 'isComplete':
              return (ee = r.el), U(E())
            case 'unmaskedvalue':
              return (
                (ee !== i && r.value === i) ||
                  ((Y = r.value),
                  (Y = ((e.isFunction(c.onBeforeMask) && c.onBeforeMask.call(X, Y, c)) || Y).split(
                    ''
                  )),
                  I.call(this, i, !1, !1, Y),
                  e.isFunction(c.onBeforeWrite) && c.onBeforeWrite.call(X, i, E(), 0, c)),
                B(ee)
              )
            case 'mask':
              !(function (t) {
                oe.off(t)
                var a = (function (t, a) {
                  var r = t.getAttribute('type'),
                    o =
                      ('INPUT' === t.tagName && -1 !== e.inArray(r, a.supportsInputType)) ||
                      t.isContentEditable ||
                      'TEXTAREA' === t.tagName
                  if (!o)
                    if ('INPUT' === t.tagName) {
                      var l = n.createElement('input')
                      l.setAttribute('type', r), (o = 'text' === l.type), (l = null)
                    } else o = 'partial'
                  return (
                    !1 !== o
                      ? (function (t) {
                          function r() {
                            return this.inputmask
                              ? this.inputmask.opts.autoUnmask
                                ? this.inputmask.unmaskedvalue()
                                : -1 !== v() || !0 !== a.nullable
                                ? n.activeElement === this && a.clearMaskOnLostFocus
                                  ? (te ? K(E().slice()).reverse() : K(E().slice())).join('')
                                  : l.call(this)
                                : ''
                              : l.call(this)
                          }
                          function o(t) {
                            u.call(this, t), this.inputmask && e(this).trigger('setvalue', [t])
                          }
                          var l, u
                          if (!t.inputmask.__valueGet) {
                            if (!0 !== a.noValuePatching) {
                              if (Object.getOwnPropertyDescriptor) {
                                'function' != typeof Object.getPrototypeOf &&
                                  (Object.getPrototypeOf =
                                    'object' === s('test'.__proto__)
                                      ? function (e) {
                                          return e.__proto__
                                        }
                                      : function (e) {
                                          return e.constructor.prototype
                                        })
                                var c = Object.getPrototypeOf
                                  ? Object.getOwnPropertyDescriptor(
                                      Object.getPrototypeOf(t),
                                      'value'
                                    )
                                  : i
                                c && c.get && c.set
                                  ? ((l = c.get),
                                    (u = c.set),
                                    Object.defineProperty(t, 'value', {
                                      get: r,
                                      set: o,
                                      configurable: !0
                                    }))
                                  : 'INPUT' !== t.tagName &&
                                    ((l = function () {
                                      return this.textContent
                                    }),
                                    (u = function (e) {
                                      this.textContent = e
                                    }),
                                    Object.defineProperty(t, 'value', {
                                      get: r,
                                      set: o,
                                      configurable: !0
                                    }))
                              } else
                                n.__lookupGetter__ &&
                                  t.__lookupGetter__('value') &&
                                  ((l = t.__lookupGetter__('value')),
                                  (u = t.__lookupSetter__('value')),
                                  t.__defineGetter__('value', r),
                                  t.__defineSetter__('value', o))
                              ;(t.inputmask.__valueGet = l), (t.inputmask.__valueSet = u)
                            }
                            ;(t.inputmask._valueGet = function (e) {
                              return te && !0 !== e
                                ? l.call(this.el).split('').reverse().join('')
                                : l.call(this.el)
                            }),
                              (t.inputmask._valueSet = function (e, t) {
                                u.call(
                                  this.el,
                                  null === e || e === i
                                    ? ''
                                    : !0 !== t && te
                                    ? e.split('').reverse().join('')
                                    : e
                                )
                              }),
                              l === i &&
                                ((l = function () {
                                  return this.value
                                }),
                                (u = function (e) {
                                  this.value = e
                                }),
                                (function (t) {
                                  if (
                                    e.valHooks &&
                                    (e.valHooks[t] === i || !0 !== e.valHooks[t].inputmaskpatch)
                                  ) {
                                    var n =
                                        e.valHooks[t] && e.valHooks[t].get
                                          ? e.valHooks[t].get
                                          : function (e) {
                                              return e.value
                                            },
                                      r =
                                        e.valHooks[t] && e.valHooks[t].set
                                          ? e.valHooks[t].set
                                          : function (e, t) {
                                              return (e.value = t), e
                                            }
                                    e.valHooks[t] = {
                                      get: function (e) {
                                        if (e.inputmask) {
                                          if (e.inputmask.opts.autoUnmask)
                                            return e.inputmask.unmaskedvalue()
                                          var t = n(e)
                                          return -1 !==
                                            v(i, i, e.inputmask.maskset.validPositions) ||
                                            !0 !== a.nullable
                                            ? t
                                            : ''
                                        }
                                        return n(e)
                                      },
                                      set: function (t, n) {
                                        var i,
                                          a = e(t)
                                        return (
                                          (i = r(t, n)),
                                          t.inputmask && a.trigger('setvalue', [n]),
                                          i
                                        )
                                      },
                                      inputmaskpatch: !0
                                    }
                                  }
                                })(t.type),
                                (function (t) {
                                  oe.on(t, 'mouseenter', function (t) {
                                    var n = e(this)
                                    this.inputmask._valueGet() !== E().join('') &&
                                      n.trigger('setvalue')
                                  })
                                })(t))
                          }
                        })(t)
                      : (t.inputmask = i),
                    o
                  )
                })(t, c)
                if (
                  !1 !== a &&
                  (($ = e((ee = t))),
                  -1 === (Z = ee !== i ? ee.maxLength : i) && (Z = i),
                  !0 === c.colorMask && q(ee),
                  p &&
                    ('inputmode' in ee &&
                      ((ee.inputmode = c.inputmode), ee.setAttribute('inputmode', c.inputmode)),
                    !0 === c.disablePredictiveText &&
                      ('autocorrect' in ee
                        ? (ee.autocorrect = !1)
                        : (!0 !== c.colorMask && q(ee), (ee.type = 'password')))),
                  !0 === a &&
                    (oe.on(ee, 'submit', se.submitEvent),
                    oe.on(ee, 'reset', se.resetEvent),
                    oe.on(ee, 'blur', se.blurEvent),
                    oe.on(ee, 'focus', se.focusEvent),
                    !0 !== c.colorMask &&
                      (oe.on(ee, 'click', se.clickEvent),
                      oe.on(ee, 'mouseleave', se.mouseleaveEvent),
                      oe.on(ee, 'mouseenter', se.mouseenterEvent)),
                    oe.on(ee, 'dblclick', se.dblclickEvent),
                    oe.on(ee, 'paste', se.pasteEvent),
                    oe.on(ee, 'dragdrop', se.pasteEvent),
                    oe.on(ee, 'drop', se.pasteEvent),
                    oe.on(ee, 'cut', se.cutEvent),
                    oe.on(ee, 'complete', c.oncomplete),
                    oe.on(ee, 'incomplete', c.onincomplete),
                    oe.on(ee, 'cleared', c.oncleared),
                    p || !0 === c.inputEventOnly
                      ? ee.removeAttribute('maxLength')
                      : (oe.on(ee, 'keydown', se.keydownEvent),
                        oe.on(ee, 'keypress', se.keypressEvent)),
                    oe.on(ee, 'compositionstart', e.noop),
                    oe.on(ee, 'compositionupdate', e.noop),
                    oe.on(ee, 'compositionend', e.noop),
                    oe.on(ee, 'keyup', e.noop),
                    oe.on(ee, 'input', se.inputFallBackEvent),
                    oe.on(ee, 'beforeinput', se.beforeInputEvent)),
                  oe.on(ee, 'setvalue', se.setValueEvent),
                  (W = C().join('')),
                  '' !== ee.inputmask._valueGet(!0) ||
                    !1 === c.clearMaskOnLostFocus ||
                    n.activeElement === ee)
                ) {
                  var r =
                    (e.isFunction(c.onBeforeMask) &&
                      c.onBeforeMask.call(X, ee.inputmask._valueGet(!0), c)) ||
                    ee.inputmask._valueGet(!0)
                  '' !== r && I(ee, !0, !1, r.split(''))
                  var o = E().slice()
                  ;(W = o.join('')),
                    !1 === U(o) && c.clearIncomplete && g(),
                    c.clearMaskOnLostFocus &&
                      n.activeElement !== ee &&
                      (-1 === v() ? (o = []) : K(o)),
                    (!1 === c.clearMaskOnLostFocus ||
                      (c.showMaskOnFocus && n.activeElement === ee) ||
                      '' !== ee.inputmask._valueGet(!0)) &&
                      N(ee, o),
                    n.activeElement === ee && H(ee, T(v()))
                }
              })(ee)
              break
            case 'format':
              return (
                (Y = (
                  (e.isFunction(c.onBeforeMask) && c.onBeforeMask.call(X, r.value, c)) ||
                  r.value
                ).split('')),
                I.call(this, i, !0, !1, Y),
                r.metadata
                  ? {
                      value: te ? E().slice().reverse().join('') : E().join(''),
                      metadata: u.call(this, { action: 'getmetadata' }, o, c)
                    }
                  : te
                  ? E().slice().reverse().join('')
                  : E().join('')
              )
            case 'isValid':
              r.value
                ? ((Y = r.value.split('')), I.call(this, i, !0, !0, Y))
                : (r.value = E().join(''))
              for (var le = E(), ue = V(), ce = le.length - 1; ce > ue && !F(ce); ce--);
              return le.splice(ue, ce + 1 - ue), U(le) && r.value === E().join('')
            case 'getemptymask':
              return C().join('')
            case 'remove':
              return (
                ee &&
                  ee.inputmask &&
                  (e.data(ee, '_inputmask_opts', null),
                  ($ = e(ee)),
                  ee.inputmask._valueSet(c.autoUnmask ? B(ee) : ee.inputmask._valueGet(!0)),
                  oe.off(ee),
                  ee.inputmask.colorMask &&
                    ((J = ee.inputmask.colorMask).removeChild(ee),
                    J.parentNode.insertBefore(ee, J),
                    J.parentNode.removeChild(J)),
                  Object.getOwnPropertyDescriptor && Object.getPrototypeOf
                    ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(ee), 'value') &&
                      ee.inputmask.__valueGet &&
                      Object.defineProperty(ee, 'value', {
                        get: ee.inputmask.__valueGet,
                        set: ee.inputmask.__valueSet,
                        configurable: !0
                      })
                    : n.__lookupGetter__ &&
                      ee.__lookupGetter__('value') &&
                      ee.inputmask.__valueGet &&
                      (ee.__defineGetter__('value', ee.inputmask.__valueGet),
                      ee.__defineSetter__('value', ee.inputmask.__valueSet)),
                  (ee.inputmask = i)),
                ee
              )
            case 'getmetadata':
              if (e.isArray(o.metadata)) {
                var pe = d(!0, 0, !1).join('')
                return (
                  e.each(o.metadata, function (e, t) {
                    if (t.mask === pe) return (pe = t), !1
                  }),
                  pe
                )
              }
              return o.metadata
          }
      }
      var c = navigator.userAgent,
        p = l('touchstart'),
        f = /iemobile/i.test(c),
        m = /iphone/i.test(c) && !f
      return (
        (a.prototype = {
          dataAttribute: 'data-inputmask',
          defaults: {
            placeholder: '_',
            optionalmarker: ['[', ']'],
            quantifiermarker: ['{', '}'],
            groupmarker: ['(', ')'],
            alternatormarker: '|',
            escapeChar: '\\',
            mask: null,
            regex: null,
            oncomplete: e.noop,
            onincomplete: e.noop,
            oncleared: e.noop,
            repeat: 0,
            greedy: !1,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            clearIncomplete: !1,
            alias: null,
            onKeyDown: e.noop,
            onBeforeMask: null,
            onBeforePaste: function (t, n) {
              return e.isFunction(n.onBeforeMask) ? n.onBeforeMask.call(this, t, n) : t
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: e.noop,
            skipOptionalPartCharacter: ' ',
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: '',
            _radixDance: !1,
            groupSeparator: '',
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: ['text', 'tel', 'password', 'search'],
            ignorables: [
              8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116,
              117, 118, 119, 120, 121, 122, 123, 0, 229
            ],
            isComplete: null,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: i,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: 'lvp',
            casing: null,
            inputmode: 'verbatim',
            colorMask: !1,
            disablePredictiveText: !1,
            importDataAttributes: !0
          },
          definitions: {
            9: { validator: '[0-9ï¼‘-ï¼™]', definitionSymbol: '*' },
            a: { validator: '[A-Za-zÐ-ÑÐÑ‘Ã€-Ã¿Âµ]', definitionSymbol: '*' },
            '*': { validator: '[0-9ï¼‘-ï¼™A-Za-zÐ-ÑÐÑ‘Ã€-Ã¿Âµ]' }
          },
          aliases: {},
          masksCache: {},
          mask: function (s) {
            var l = this
            return (
              'string' == typeof s && (s = n.getElementById(s) || n.querySelectorAll(s)),
              (s = s.nodeName ? [s] : s),
              e.each(s, function (n, s) {
                var c = e.extend(!0, {}, l.opts)
                if (
                  (function (n, a, o, s) {
                    if (!0 === a.importDataAttributes) {
                      var l,
                        u,
                        c,
                        p,
                        f = function (e, a) {
                          null !== (a = a !== i ? a : n.getAttribute(s + '-' + e)) &&
                            ('string' == typeof a &&
                              (0 === e.indexOf('on')
                                ? (a = t[a])
                                : 'false' === a
                                ? (a = !1)
                                : 'true' === a && (a = !0)),
                            (o[e] = a))
                        },
                        m = n.getAttribute(s)
                      if (
                        (m &&
                          '' !== m &&
                          ((m = m.replace(/'/g, '"')), (u = JSON.parse('{' + m + '}'))),
                        u)
                      )
                        for (p in ((c = i), u))
                          if ('alias' === p.toLowerCase()) {
                            c = u[p]
                            break
                          }
                      for (l in (f('alias', c), o.alias && r(o.alias, o, a), a)) {
                        if (u)
                          for (p in ((c = i), u))
                            if (p.toLowerCase() === l.toLowerCase()) {
                              c = u[p]
                              break
                            }
                        f(l, c)
                      }
                    }
                    return (
                      e.extend(!0, a, o),
                      ('rtl' === n.dir || a.rightAlign) && (n.style.textAlign = 'right'),
                      ('rtl' === n.dir || a.numericInput) &&
                        ((n.dir = 'ltr'), n.removeAttribute('dir'), (a.isRTL = !0)),
                      Object.keys(o).length
                    )
                  })(s, c, e.extend(!0, {}, l.userOptions), l.dataAttribute)
                ) {
                  var p = o(c, l.noMasksCache)
                  p !== i &&
                    (s.inputmask !== i &&
                      ((s.inputmask.opts.autoUnmask = !0), s.inputmask.remove()),
                    (s.inputmask = new a(i, i, !0)),
                    (s.inputmask.opts = c),
                    (s.inputmask.noMasksCache = l.noMasksCache),
                    (s.inputmask.userOptions = e.extend(!0, {}, l.userOptions)),
                    (s.inputmask.isRTL = c.isRTL || c.numericInput),
                    (s.inputmask.el = s),
                    (s.inputmask.maskset = p),
                    e.data(s, '_inputmask_opts', c),
                    u.call(s.inputmask, { action: 'mask' }))
                }
              }),
              (s && s[0] && s[0].inputmask) || this
            )
          },
          option: function (t, n) {
            return 'string' == typeof t
              ? this.opts[t]
              : 'object' === (void 0 === t ? 'undefined' : s(t))
              ? (e.extend(this.userOptions, t), this.el && !0 !== n && this.mask(this.el), this)
              : void 0
          },
          unmaskedvalue: function (e) {
            return (
              (this.maskset = this.maskset || o(this.opts, this.noMasksCache)),
              u.call(this, { action: 'unmaskedvalue', value: e })
            )
          },
          remove: function () {
            return u.call(this, { action: 'remove' })
          },
          getemptymask: function () {
            return (
              (this.maskset = this.maskset || o(this.opts, this.noMasksCache)),
              u.call(this, { action: 'getemptymask' })
            )
          },
          hasMaskedValue: function () {
            return !this.opts.autoUnmask
          },
          isComplete: function () {
            return (
              (this.maskset = this.maskset || o(this.opts, this.noMasksCache)),
              u.call(this, { action: 'isComplete' })
            )
          },
          getmetadata: function () {
            return (
              (this.maskset = this.maskset || o(this.opts, this.noMasksCache)),
              u.call(this, { action: 'getmetadata' })
            )
          },
          isValid: function (e) {
            return (
              (this.maskset = this.maskset || o(this.opts, this.noMasksCache)),
              u.call(this, { action: 'isValid', value: e })
            )
          },
          format: function (e, t) {
            return (
              (this.maskset = this.maskset || o(this.opts, this.noMasksCache)),
              u.call(this, { action: 'format', value: e, metadata: t })
            )
          },
          setValue: function (t) {
            this.el && e(this.el).trigger('setvalue', [t])
          },
          analyseMask: function (t, n, r) {
            function o(e, t, n, i) {
              ;(this.matches = []),
                (this.openGroup = e || !1),
                (this.alternatorGroup = !1),
                (this.isGroup = e || !1),
                (this.isOptional = t || !1),
                (this.isQuantifier = n || !1),
                (this.isAlternator = i || !1),
                (this.quantifier = { min: 1, max: 1 })
            }
            function s(t, o, s) {
              s = s !== i ? s : t.matches.length
              var l = t.matches[s - 1]
              if (n)
                0 === o.indexOf('[') || (k && /\\d|\\s|\\w]/i.test(o)) || '.' === o
                  ? t.matches.splice(s++, 0, {
                      fn: new RegExp(o, r.casing ? 'i' : ''),
                      optionality: !1,
                      newBlockMarker: l === i ? 'master' : l.def !== o,
                      casing: null,
                      def: o,
                      placeholder: i,
                      nativeDef: o
                    })
                  : (k && (o = o[o.length - 1]),
                    e.each(o.split(''), function (e, n) {
                      ;(l = t.matches[s - 1]),
                        t.matches.splice(s++, 0, {
                          fn: null,
                          optionality: !1,
                          newBlockMarker: l === i ? 'master' : l.def !== n && null !== l.fn,
                          casing: null,
                          def: r.staticDefinitionSymbol || n,
                          placeholder: r.staticDefinitionSymbol !== i ? n : i,
                          nativeDef: (k ? "'" : '') + n
                        })
                    })),
                  (k = !1)
              else {
                var u = (r.definitions ? r.definitions[o] : i) || a.prototype.definitions[o]
                u && !k
                  ? t.matches.splice(s++, 0, {
                      fn: u.validator
                        ? 'string' == typeof u.validator
                          ? new RegExp(u.validator, r.casing ? 'i' : '')
                          : new (function () {
                              this.test = u.validator
                            })()
                        : new RegExp('.'),
                      optionality: !1,
                      newBlockMarker: l === i ? 'master' : l.def !== (u.definitionSymbol || o),
                      casing: u.casing,
                      def: u.definitionSymbol || o,
                      placeholder: u.placeholder,
                      nativeDef: o
                    })
                  : (t.matches.splice(s++, 0, {
                      fn: null,
                      optionality: !1,
                      newBlockMarker: l === i ? 'master' : l.def !== o && null !== l.fn,
                      casing: null,
                      def: r.staticDefinitionSymbol || o,
                      placeholder: r.staticDefinitionSymbol !== i ? o : i,
                      nativeDef: (k ? "'" : '') + o
                    }),
                    (k = !1))
              }
            }
            function l() {
              if (b.length > 0) {
                if ((s((m = b[b.length - 1]), p), m.isAlternator)) {
                  d = b.pop()
                  for (var e = 0; e < d.matches.length; e++)
                    d.matches[e].isGroup && (d.matches[e].isGroup = !1)
                  b.length > 0 ? (m = b[b.length - 1]).matches.push(d) : y.matches.push(d)
                }
              } else s(y, p)
            }
            function u(e) {
              var t = new o(!0)
              return (t.openGroup = !1), (t.matches = e), t
            }
            var c,
              p,
              f,
              m,
              d,
              h,
              g = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
              v =
                /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
              k = !1,
              y = new o(),
              b = [],
              x = []
            for (
              n && ((r.optionalmarker[0] = i), (r.optionalmarker[1] = i));
              (c = n ? v.exec(t) : g.exec(t));

            ) {
              if (((p = c[0]), n))
                switch (p.charAt(0)) {
                  case '?':
                    p = '{0,1}'
                    break
                  case '+':
                  case '*':
                    p = '{' + p + '}'
                }
              if (k) l()
              else
                switch (p.charAt(0)) {
                  case '(?=':
                  case '(?!':
                  case '(?<=':
                  case '(?<!':
                    break
                  case r.escapeChar:
                    ;(k = !0), n && l()
                    break
                  case r.optionalmarker[1]:
                  case r.groupmarker[1]:
                    if ((((f = b.pop()).openGroup = !1), f !== i))
                      if (b.length > 0) {
                        if (((m = b[b.length - 1]).matches.push(f), m.isAlternator)) {
                          d = b.pop()
                          for (var P = 0; P < d.matches.length; P++)
                            (d.matches[P].isGroup = !1), (d.matches[P].alternatorGroup = !1)
                          b.length > 0 ? (m = b[b.length - 1]).matches.push(d) : y.matches.push(d)
                        }
                      } else y.matches.push(f)
                    else l()
                    break
                  case r.optionalmarker[0]:
                    b.push(new o(!1, !0))
                    break
                  case r.groupmarker[0]:
                    b.push(new o(!0))
                    break
                  case r.quantifiermarker[0]:
                    var S = new o(!1, !1, !0),
                      A = (p = p.replace(/[{}]/g, '')).split('|'),
                      C = A[0].split(','),
                      E = isNaN(C[0]) ? C[0] : parseInt(C[0]),
                      w = 1 === C.length ? E : isNaN(C[1]) ? C[1] : parseInt(C[1])
                    ;('*' !== E && '+' !== E) || (E = '*' === w ? 0 : 1),
                      (S.quantifier = { min: E, max: w, jit: A[1] })
                    var M = b.length > 0 ? b[b.length - 1].matches : y.matches
                    if ((c = M.pop()).isAlternator) {
                      M.push(c), (M = c.matches)
                      var D = new o(!0),
                        O = M.pop()
                      M.push(D), (M = D.matches), (c = O)
                    }
                    c.isGroup || (c = u([c])), M.push(c), M.push(S)
                    break
                  case r.alternatormarker:
                    var _ = function (e) {
                      var t = e.pop()
                      return t.isQuantifier && (t = u([e.pop(), t])), t
                    }
                    if (b.length > 0) {
                      var j = (m = b[b.length - 1]).matches[m.matches.length - 1]
                      h =
                        m.openGroup &&
                        (j.matches === i || (!1 === j.isGroup && !1 === j.isAlternator))
                          ? b.pop()
                          : _(m.matches)
                    } else h = _(y.matches)
                    if (h.isAlternator) b.push(h)
                    else if (
                      (h.alternatorGroup
                        ? ((d = b.pop()), (h.alternatorGroup = !1))
                        : (d = new o(!1, !1, !1, !0)),
                      d.matches.push(h),
                      b.push(d),
                      h.openGroup)
                    ) {
                      h.openGroup = !1
                      var F = new o(!0)
                      ;(F.alternatorGroup = !0), b.push(F)
                    }
                    break
                  default:
                    l()
                }
            }
            for (; b.length > 0; ) (f = b.pop()), y.matches.push(f)
            return (
              y.matches.length > 0 &&
                ((function T(t) {
                  t &&
                    t.matches &&
                    e.each(t.matches, function (e, a) {
                      var o = t.matches[e + 1]
                      ;(o === i || o.matches === i || !1 === o.isQuantifier) &&
                        a &&
                        a.isGroup &&
                        ((a.isGroup = !1),
                        n ||
                          (s(a, r.groupmarker[0], 0),
                          !0 !== a.openGroup && s(a, r.groupmarker[1]))),
                        T(a)
                    })
                })(y),
                x.push(y)),
              (r.numericInput || r.isRTL) &&
                (function R(e) {
                  for (var t in ((e.matches = e.matches.reverse()), e.matches))
                    if (e.matches.hasOwnProperty(t)) {
                      var n = parseInt(t)
                      if (
                        e.matches[t].isQuantifier &&
                        e.matches[n + 1] &&
                        e.matches[n + 1].isGroup
                      ) {
                        var a = e.matches[t]
                        e.matches.splice(t, 1), e.matches.splice(n + 1, 0, a)
                      }
                      e.matches[t].matches !== i
                        ? (e.matches[t] = R(e.matches[t]))
                        : (e.matches[t] =
                            ((o = e.matches[t]) === r.optionalmarker[0]
                              ? (o = r.optionalmarker[1])
                              : o === r.optionalmarker[1]
                              ? (o = r.optionalmarker[0])
                              : o === r.groupmarker[0]
                              ? (o = r.groupmarker[1])
                              : o === r.groupmarker[1] && (o = r.groupmarker[0]),
                            o))
                    }
                  var o
                  return e
                })(x[0]),
              x
            )
          }
        }),
        (a.extendDefaults = function (t) {
          e.extend(!0, a.prototype.defaults, t)
        }),
        (a.extendDefinitions = function (t) {
          e.extend(!0, a.prototype.definitions, t)
        }),
        (a.extendAliases = function (t) {
          e.extend(!0, a.prototype.aliases, t)
        }),
        (a.format = function (e, t, n) {
          return a(t).format(e, n)
        }),
        (a.unmask = function (e, t) {
          return a(t).unmaskedvalue(e)
        }),
        (a.isValid = function (e, t) {
          return a(t).isValid(e)
        }),
        (a.remove = function (t) {
          'string' == typeof t && (t = n.getElementById(t) || n.querySelectorAll(t)),
            (t = t.nodeName ? [t] : t),
            e.each(t, function (e, t) {
              t.inputmask && t.inputmask.remove()
            })
        }),
        (a.setValue = function (t, i) {
          'string' == typeof t && (t = n.getElementById(t) || n.querySelectorAll(t)),
            (t = t.nodeName ? [t] : t),
            e.each(t, function (t, n) {
              n.inputmask ? n.inputmask.setValue(i) : e(n).trigger('setvalue', [i])
            })
        }),
        (a.escapeRegex = function (e) {
          return e.replace(
            new RegExp(
              '(\\' +
                ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^'].join(
                  '|\\'
                ) +
                ')',
              'gim'
            ),
            '\\$1'
          )
        }),
        (a.keyCode = {
          BACKSPACE: 8,
          BACKSPACE_SAFARI: 127,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          INSERT: 45,
          LEFT: 37,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38,
          X: 88,
          CONTROL: 17
        }),
        a
      )
    }),
      (a = [n(0), n(5), n(6)]),
      void 0 === (r = 'function' == typeof (i = o) ? i.apply(t, a) : i) || (e.exports = r)
  },
  function (e, t) {
    e.exports = jQuery
  },
  function (e, t, n) {
    'use strict'
    function i(e) {
      return e && e.__esModule ? e : { default: e }
    }
    n(4), n(7), n(8), n(9)
    var a = i(n(1)),
      r = i(n(0)),
      o = i(n(2))
    r['default'] === o['default'] && n(10), (window.Inputmask = a['default'])
  },
  function (e, t, n) {
    'use strict'
    var i, a, r, o
    'function' == typeof Symbol && Symbol.iterator,
      (o = function (e, t) {
        function n(e) {
          if (!e.tokenizer) {
            var t = []
            for (var n in o) -1 === t.indexOf(n[0]) && t.push(n[0])
            ;(e.tokenizer = '(' + t.join('+|') + ')+?|.'),
              (e.tokenizer = new RegExp(e.tokenizer, 'g'))
          }
          return e.tokenizer
        }
        function i(e, i, a) {
          for (var r, s = ''; (r = n(a).exec(e)); )
            if (void 0 === i)
              if (o[r[0]]) s += '(' + o[r[0]][0] + ')'
              else
                switch (r[0]) {
                  case '[':
                    s += '('
                    break
                  case ']':
                    s += ')?'
                    break
                  default:
                    s += t.escapeRegex(r[0])
                }
            else o[r[0]] ? (s += o[r[0]][3].call(i.date)) : (s += r[0])
          return s
        }
        function a(e, t) {
          for (e = String(e), t = t || 2; e.length < t; ) e = '0' + e
          return e
        }
        function r(e, t, i) {
          function a(e, t, n) {
            'year' === r
              ? ((e[r] = (function (e) {
                  var t =
                    4 === e.length
                      ? e
                      : new Date()
                          .getFullYear()
                          .toString()
                          .substr(0, 4 - e.length) + e
                  return (
                    i.min && i.min.year && i.max && i.max.year
                      ? ((t = t.replace(/[^0-9]/g, '')),
                        (t +=
                          i.min.year == i.max.year
                            ? i.min.year.substr(t.length)
                            : ('' !== t && 0 == i.max.year.indexOf(t)
                                ? parseInt(i.max.year) - 1
                                : parseInt(i.min.year) + 1
                              )
                                .toString()
                                .substr(t.length)))
                      : (t = t.replace(/[^0-9]/g, '0')),
                    t
                  )
                })(t)),
                (e['raw' + r] = t))
              : (e[r] = n.min && t.match(/[^0-9]/) ? n.min[r] : t),
              void 0 !== l && l.call(e.date, 'month' == r ? parseInt(e[r]) - 1 : e[r])
          }
          var r,
            s,
            l,
            u = { date: new Date(1, 0, 1) },
            c = e
          if ('string' == typeof c) {
            for (; (s = n(i).exec(t)); ) {
              var p = c.slice(0, s[0].length)
              o.hasOwnProperty(s[0]) && ((r = o[s[0]][2]), (l = o[s[0]][1]), a(u, p, i)),
                (c = c.slice(p.length))
            }
            return u
          }
        }
        var o = {
            d: ['[1-9]|[12][0-9]|3[01]', Date.prototype.setDate, 'day', Date.prototype.getDate],
            dd: [
              '0[1-9]|[12][0-9]|3[01]',
              Date.prototype.setDate,
              'day',
              function () {
                return a(Date.prototype.getDate.call(this), 2)
              }
            ],
            ddd: [''],
            dddd: [''],
            m: [
              '[1-9]|1[012]',
              Date.prototype.setMonth,
              'month',
              function () {
                return Date.prototype.getMonth.call(this) + 1
              }
            ],
            mm: [
              '0[1-9]|1[012]',
              Date.prototype.setMonth,
              'month',
              function () {
                return a(Date.prototype.getMonth.call(this) + 1, 2)
              }
            ],
            mmm: [''],
            mmmm: [''],
            yy: [
              '[0-9]{2}',
              Date.prototype.setFullYear,
              'year',
              function () {
                return a(Date.prototype.getFullYear.call(this), 2)
              }
            ],
            yyyy: [
              '[0-9]{4}',
              Date.prototype.setFullYear,
              'year',
              function () {
                return a(Date.prototype.getFullYear.call(this), 4)
              }
            ],
            h: ['[1-9]|1[0-2]', Date.prototype.setHours, 'hours', Date.prototype.getHours],
            hh: [
              '0[1-9]|1[0-2]',
              Date.prototype.setHours,
              'hours',
              function () {
                return a(Date.prototype.getHours.call(this), 2)
              }
            ],
            hhh: ['[0-9]+', Date.prototype.setHours, 'hours', Date.prototype.getHours],
            H: ['1?[0-9]|2[0-3]', Date.prototype.setHours, 'hours', Date.prototype.getHours],
            HH: [
              '[01][0-9]|2[0-3]',
              Date.prototype.setHours,
              'hours',
              function () {
                return a(Date.prototype.getHours.call(this), 2)
              }
            ],
            HHH: ['[0-9]+', Date.prototype.setHours, 'hours', Date.prototype.getHours],
            M: ['[1-5]?[0-9]', Date.prototype.setMinutes, 'minutes', Date.prototype.getMinutes],
            MM: [
              '[0-5][0-9]',
              Date.prototype.setMinutes,
              'minutes',
              function () {
                return a(Date.prototype.getMinutes.call(this), 2)
              }
            ],
            s: ['[1-5]?[0-9]', Date.prototype.setSeconds, 'seconds', Date.prototype.getSeconds],
            ss: [
              '[0-5][0-9]',
              Date.prototype.setSeconds,
              'seconds',
              function () {
                return a(Date.prototype.getSeconds.call(this), 2)
              }
            ],
            l: [
              '[0-9]{3}',
              Date.prototype.setMilliseconds,
              'milliseconds',
              function () {
                return a(Date.prototype.getMilliseconds.call(this), 3)
              }
            ],
            L: [
              '[0-9]{2}',
              Date.prototype.setMilliseconds,
              'milliseconds',
              function () {
                return a(Date.prototype.getMilliseconds.call(this), 2)
              }
            ],
            t: ['[ap]'],
            tt: ['[ap]m'],
            T: ['[AP]'],
            TT: ['[AP]M'],
            Z: [''],
            o: [''],
            S: ['']
          },
          s = {
            isoDate: 'yyyy-mm-dd',
            isoTime: 'HH:MM:ss',
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
          }
        return (
          t.extendAliases({
            datetime: {
              mask: function (e) {
                return (
                  (o.S = e.i18n.ordinalSuffix.join('|')),
                  (e.inputFormat = s[e.inputFormat] || e.inputFormat),
                  (e.displayFormat = s[e.displayFormat] || e.displayFormat || e.inputFormat),
                  (e.outputFormat = s[e.outputFormat] || e.outputFormat || e.inputFormat),
                  (e.placeholder =
                    '' !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[\[\]]/, '')),
                  (e.min = r(e.min, e.inputFormat, e)),
                  (e.max = r(e.max, e.inputFormat, e)),
                  (e.regex = i(e.inputFormat, void 0, e)),
                  null
                )
              },
              placeholder: '',
              inputFormat: 'isoDateTime',
              displayFormat: void 0,
              outputFormat: void 0,
              min: null,
              max: null,
              i18n: {
                dayNames: [
                  'Mon',
                  'Tue',
                  'Wed',
                  'Thu',
                  'Fri',
                  'Sat',
                  'Sun',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday'
                ],
                monthNames: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December'
                ],
                ordinalSuffix: ['st', 'nd', 'rd', 'th']
              },
              postValidation: function (e, t, n) {
                var i = t,
                  a = r(e.join(''), n.inputFormat, n)
                return (
                  i &&
                    a.date.getTime() == a.date.getTime() &&
                    (i =
                      (i = (function (e, t) {
                        return (
                          (!isFinite(e.day) ||
                            ('29' == e.day && !isFinite(e.rawyear)) ||
                            new Date(
                              e.date.getFullYear(),
                              isFinite(e.month) ? e.month : e.date.getMonth() + 1,
                              0
                            ).getDate() >= e.day) &&
                          t
                        )
                      })(a, i)) &&
                      (function (e, t) {
                        var n = !0
                        return (
                          t.min &&
                            t.min.date.getTime() == t.min.date.getTime() &&
                            (n = t.min.date.getTime() <= e.date.getTime()),
                          n &&
                            t.max &&
                            t.max.date.getTime() == t.max.date.getTime() &&
                            (n = t.max.date.getTime() >= e.date.getTime()),
                          n
                        )
                      })(a, n)),
                  i
                )
              },
              onKeyDown: function (i, r, o, s) {
                if (i.ctrlKey && i.keyCode === t.keyCode.RIGHT) {
                  for (var l, u = new Date(), c = ''; (l = n(s).exec(s.inputFormat)); )
                    'd' === l[0].charAt(0)
                      ? (c += a(u.getDate(), l[0].length))
                      : 'm' === l[0].charAt(0)
                      ? (c += a(u.getMonth() + 1, l[0].length))
                      : 'yyyy' === l[0]
                      ? (c += u.getFullYear().toString())
                      : 'y' === l[0].charAt(0) && (c += a(u.getYear(), l[0].length))
                  this.inputmask._valueSet(c), e(this).trigger('setvalue')
                }
              },
              onUnMask: function (e, t, n) {
                return i(n.outputFormat, r(e, n.inputFormat, n), n)
              },
              casing: function (e, t, n, i) {
                return 0 == t.nativeDef.indexOf('[ap]')
                  ? e.toLowerCase()
                  : 0 == t.nativeDef.indexOf('[AP]')
                  ? e.toUpperCase()
                  : e
              },
              insertMode: !1
            }
          }),
          t
        )
      }),
      (a = [n(0), n(1)]),
      void 0 === (r = 'function' == typeof (i = o) ? i.apply(t, a) : i) || (e.exports = r)
  },
  function (e, t, n) {
    'use strict'
    var i
    'function' == typeof Symbol && Symbol.iterator,
      void 0 ===
        (i = function () {
          return window
        }.call(t, n, t, e)) || (e.exports = i)
  },
  function (e, t, n) {
    'use strict'
    var i
    'function' == typeof Symbol && Symbol.iterator,
      void 0 ===
        (i = function () {
          return document
        }.call(t, n, t, e)) || (e.exports = i)
  },
  function (e, t, n) {
    'use strict'
    var i, a, r, o
    'function' == typeof Symbol && Symbol.iterator,
      (o = function (e, t) {
        return (
          t.extendDefinitions({
            A: { validator: '[A-Za-zÐ-ÑÐÑ‘Ã€-Ã¿Âµ]', casing: 'upper' },
            '&': { validator: '[0-9A-Za-zÐ-ÑÐÑ‘Ã€-Ã¿Âµ]', casing: 'upper' },
            '#': { validator: '[0-9A-Fa-f]', casing: 'upper' }
          }),
          t.extendAliases({
            cssunit: { regex: '[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)' },
            url: { regex: '(https?|ftp)//.*', autoUnmask: !1 },
            ip: {
              mask: 'i[i[i]].i[i[i]].i[i[i]].i[i[i]]',
              definitions: {
                i: {
                  validator: function (e, t, n, i, a) {
                    return (
                      n - 1 > -1 && '.' !== t.buffer[n - 1]
                        ? ((e = t.buffer[n - 1] + e),
                          (e =
                            n - 2 > -1 && '.' !== t.buffer[n - 2] ? t.buffer[n - 2] + e : '0' + e))
                        : (e = '00' + e),
                      new RegExp('25[0-5]|2[0-4][0-9]|[01][0-9][0-9]').test(e)
                    )
                  }
                }
              },
              onUnMask: function (e, t, n) {
                return e
              },
              inputmode: 'numeric'
            },
            email: {
              mask: '*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]',
              greedy: !1,
              casing: 'lower',
              onBeforePaste: function (e, t) {
                return (e = e.toLowerCase()).replace('mailto:', '')
              },
              definitions: {
                '*': { validator: "[0-9ï¼‘-ï¼™A-Za-zÐ-ÑÐÑ‘Ã€-Ã¿Âµ!#$%&'*+/=?^_`{|}~-]" },
                '-': { validator: '[0-9A-Za-z-]' }
              },
              onUnMask: function (e, t, n) {
                return e
              },
              inputmode: 'email'
            },
            mac: { mask: '##:##:##:##:##:##' },
            vin: {
              mask: 'V{13}9{4}',
              definitions: { V: { validator: '[A-HJ-NPR-Za-hj-npr-z\\d]', casing: 'upper' } },
              clearIncomplete: !0,
              autoUnmask: !0
            }
          }),
          t
        )
      }),
      (a = [n(0), n(1)]),
      void 0 === (r = 'function' == typeof (i = o) ? i.apply(t, a) : i) || (e.exports = r)
  },
  function (e, t, n) {
    'use strict'
    var i, a, r, o
    'function' == typeof Symbol && Symbol.iterator,
      (o = function (e, t, n) {
        function i(e, n) {
          for (var i = '', a = 0; a < e.length; a++)
            t.prototype.definitions[e.charAt(a)] ||
            n.definitions[e.charAt(a)] ||
            n.optionalmarker.start === e.charAt(a) ||
            n.optionalmarker.end === e.charAt(a) ||
            n.quantifiermarker.start === e.charAt(a) ||
            n.quantifiermarker.end === e.charAt(a) ||
            n.groupmarker.start === e.charAt(a) ||
            n.groupmarker.end === e.charAt(a) ||
            n.alternatormarker === e.charAt(a)
              ? (i += '\\' + e.charAt(a))
              : (i += e.charAt(a))
          return i
        }
        return (
          t.extendAliases({
            numeric: {
              mask: function (e) {
                if (
                  (0 !== e.repeat && isNaN(e.integerDigits) && (e.integerDigits = e.repeat),
                  (e.repeat = 0),
                  e.groupSeparator === e.radixPoint &&
                    e.digits &&
                    '0' !== e.digits &&
                    ('.' === e.radixPoint
                      ? (e.groupSeparator = ',')
                      : ',' === e.radixPoint
                      ? (e.groupSeparator = '.')
                      : (e.groupSeparator = '')),
                  ' ' === e.groupSeparator && (e.skipOptionalPartCharacter = n),
                  (e.autoGroup = e.autoGroup && '' !== e.groupSeparator),
                  e.autoGroup &&
                    ('string' == typeof e.groupSize &&
                      isFinite(e.groupSize) &&
                      (e.groupSize = parseInt(e.groupSize)),
                    isFinite(e.integerDigits)))
                ) {
                  var t = Math.floor(e.integerDigits / e.groupSize),
                    a = e.integerDigits % e.groupSize
                  ;(e.integerDigits = parseInt(e.integerDigits) + (0 === a ? t - 1 : t)),
                    e.integerDigits < 1 && (e.integerDigits = '*')
                }
                e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)),
                  'radixFocus' === e.positionCaretOnClick &&
                    '' === e.placeholder &&
                    !1 === e.integerOptional &&
                    (e.positionCaretOnClick = 'lvp'),
                  (e.definitions[';'] = e.definitions['~']),
                  (e.definitions[';'].definitionSymbol = '~'),
                  !0 === e.numericInput &&
                    ((e.positionCaretOnClick =
                      'radixFocus' === e.positionCaretOnClick ? 'lvp' : e.positionCaretOnClick),
                    (e.digitsOptional = !1),
                    isNaN(e.digits) && (e.digits = 2),
                    (e.decimalProtect = !1))
                var r = '[+]'
                if (
                  ((r += i(e.prefix, e)),
                  !0 === e.integerOptional
                    ? (r += '~{1,' + e.integerDigits + '}')
                    : (r += '~{' + e.integerDigits + '}'),
                  e.digits !== n)
                ) {
                  var o = e.decimalProtect ? ':' : e.radixPoint,
                    s = e.digits.toString().split(',')
                  isFinite(s[0]) && s[1] && isFinite(s[1])
                    ? (r += o + ';{' + e.digits + '}')
                    : (isNaN(e.digits) || parseInt(e.digits) > 0) &&
                      (e.digitsOptional
                        ? (r += '[' + o + ';{1,' + e.digits + '}]')
                        : (r += o + ';{' + e.digits + '}'))
                }
                return (r += i(e.suffix, e)), (r += '[-]'), (e.greedy = !1), r
              },
              placeholder: '',
              greedy: !1,
              digits: '*',
              digitsOptional: !0,
              enforceDigitsOnBlur: !1,
              radixPoint: '.',
              positionCaretOnClick: 'radixFocus',
              groupSize: 3,
              groupSeparator: '',
              autoGroup: !1,
              allowMinus: !0,
              negationSymbol: { front: '-', back: '' },
              integerDigits: '+',
              integerOptional: !0,
              prefix: '',
              suffix: '',
              rightAlign: !0,
              decimalProtect: !0,
              min: null,
              max: null,
              step: 1,
              insertMode: !0,
              autoUnmask: !1,
              unmaskAsNumber: !1,
              inputmode: 'numeric',
              preValidation: function (t, i, a, r, o, s) {
                if ('-' === a || a === o.negationSymbol.front)
                  return (
                    !0 === o.allowMinus &&
                    ((o.isNegative = o.isNegative === n || !o.isNegative),
                    '' === t.join('') || { caret: i, dopost: !0 })
                  )
                if (
                  !1 === r &&
                  a === o.radixPoint &&
                  o.digits !== n &&
                  (isNaN(o.digits) || parseInt(o.digits) > 0)
                ) {
                  var l = e.inArray(o.radixPoint, t)
                  if (-1 !== l && s.validPositions[l] !== n)
                    return !0 === o.numericInput ? i === l : { caret: l + 1 }
                }
                return !0
              },
              postValidation: function (i, a, r) {
                var o = r.suffix.split(''),
                  s = r.prefix.split('')
                if (a.pos === n && a.caret !== n && !0 !== a.dopost) return a
                var l = a.caret !== n ? a.caret : a.pos,
                  u = i.slice()
                r.numericInput && ((l = u.length - l - 1), (u = u.reverse()))
                var c = u[l]
                if (
                  (c === r.groupSeparator && (c = u[(l += 1)]),
                  l === u.length - r.suffix.length - 1 && c === r.radixPoint)
                )
                  return a
                c !== n &&
                  c !== r.radixPoint &&
                  c !== r.negationSymbol.front &&
                  c !== r.negationSymbol.back &&
                  ((u[l] = '?'),
                  r.prefix.length > 0 &&
                  l >= (!1 === r.isNegative ? 1 : 0) &&
                  l < r.prefix.length - 1 + (!1 === r.isNegative ? 1 : 0)
                    ? (s[l - (!1 === r.isNegative ? 1 : 0)] = '?')
                    : r.suffix.length > 0 &&
                      l >= u.length - r.suffix.length - (!1 === r.isNegative ? 1 : 0) &&
                      (o[l - (u.length - r.suffix.length - (!1 === r.isNegative ? 1 : 0))] = '?')),
                  (s = s.join('')),
                  (o = o.join(''))
                var p = u.join('').replace(s, '')
                if (
                  ((p = (p = (p = (p = p.replace(o, '')).replace(
                    new RegExp(t.escapeRegex(r.groupSeparator), 'g'),
                    ''
                  )).replace(
                    new RegExp('[-' + t.escapeRegex(r.negationSymbol.front) + ']', 'g'),
                    ''
                  )).replace(new RegExp(t.escapeRegex(r.negationSymbol.back) + '$'), '')),
                  isNaN(r.placeholder) &&
                    (p = p.replace(new RegExp(t.escapeRegex(r.placeholder), 'g'), '')),
                  p.length > 1 &&
                    1 !== p.indexOf(r.radixPoint) &&
                    ('0' === c && (p = p.replace(/^\?/g, '')), (p = p.replace(/^0/g, ''))),
                  p.charAt(0) === r.radixPoint &&
                    '' !== r.radixPoint &&
                    !0 !== r.numericInput &&
                    (p = '0' + p),
                  '' !== p)
                ) {
                  if (
                    ((p = p.split('')),
                    (!r.digitsOptional || (r.enforceDigitsOnBlur && 'blur' === a.event)) &&
                      isFinite(r.digits))
                  ) {
                    var f = e.inArray(r.radixPoint, p),
                      m = e.inArray(r.radixPoint, u)
                    ;-1 === f && (p.push(r.radixPoint), (f = p.length - 1))
                    for (var d = 1; d <= r.digits; d++)
                      (r.digitsOptional && (!r.enforceDigitsOnBlur || 'blur' !== a.event)) ||
                      (p[f + d] !== n && p[f + d] !== r.placeholder.charAt(0))
                        ? -1 !== m && u[m + d] !== n && (p[f + d] = p[f + d] || u[m + d])
                        : (p[f + d] = a.placeholder || r.placeholder.charAt(0))
                  }
                  if (
                    !0 !== r.autoGroup ||
                    '' === r.groupSeparator ||
                    (c === r.radixPoint && a.pos === n && !a.dopost)
                  )
                    p = p.join('')
                  else {
                    var h = p[p.length - 1] === r.radixPoint && a.c === r.radixPoint
                    ;(p = t(
                      (function (e, t) {
                        var n = ''
                        if (
                          ((n += '(' + t.groupSeparator + '*{' + t.groupSize + '}){*}'),
                          '' !== t.radixPoint)
                        ) {
                          var i = e.join('').split(t.radixPoint)
                          i[1] &&
                            (n += t.radixPoint + '*{' + i[1].match(/^\d*\??\d*/)[0].length + '}')
                        }
                        return n
                      })(p, r),
                      {
                        numericInput: !0,
                        jitMasking: !0,
                        definitions: { '*': { validator: '[0-9?]', cardinality: 1 } }
                      }
                    ).format(p.join(''))),
                      h && (p += r.radixPoint),
                      p.charAt(0) === r.groupSeparator && p.substr(1)
                  }
                }
                if (
                  (r.isNegative && 'blur' === a.event && (r.isNegative = '0' !== p),
                  (p = s + p),
                  (p += o),
                  r.isNegative && ((p = r.negationSymbol.front + p), (p += r.negationSymbol.back)),
                  (p = p.split('')),
                  c !== n)
                )
                  if (
                    c !== r.radixPoint &&
                    c !== r.negationSymbol.front &&
                    c !== r.negationSymbol.back
                  )
                    (l = e.inArray('?', p)) > -1 ? (p[l] = c) : (l = a.caret || 0)
                  else if (
                    c === r.radixPoint ||
                    c === r.negationSymbol.front ||
                    c === r.negationSymbol.back
                  ) {
                    var g = e.inArray(c, p)
                    ;-1 !== g && (l = g)
                  }
                r.numericInput && ((l = p.length - l - 1), (p = p.reverse()))
                var v = {
                  caret: c === n || a.pos !== n ? l + (r.numericInput ? -1 : 1) : l,
                  buffer: p,
                  refreshFromBuffer: a.dopost || i.join('') !== p.join('')
                }
                return v.refreshFromBuffer ? v : a
              },
              onBeforeWrite: function (i, a, r, o) {
                if (i)
                  switch (i.type) {
                    case 'keydown':
                      return o.postValidation(a, { caret: r, dopost: !0 }, o)
                    case 'blur':
                    case 'checkval':
                      var s
                      if (
                        ((function (e) {
                          e.parseMinMaxOptions === n &&
                            (null !== e.min &&
                              ((e.min = e.min
                                .toString()
                                .replace(new RegExp(t.escapeRegex(e.groupSeparator), 'g'), '')),
                              ',' === e.radixPoint && (e.min = e.min.replace(e.radixPoint, '.')),
                              (e.min = isFinite(e.min) ? parseFloat(e.min) : NaN),
                              isNaN(e.min) && (e.min = Number.MIN_VALUE)),
                            null !== e.max &&
                              ((e.max = e.max
                                .toString()
                                .replace(new RegExp(t.escapeRegex(e.groupSeparator), 'g'), '')),
                              ',' === e.radixPoint && (e.max = e.max.replace(e.radixPoint, '.')),
                              (e.max = isFinite(e.max) ? parseFloat(e.max) : NaN),
                              isNaN(e.max) && (e.max = Number.MAX_VALUE)),
                            (e.parseMinMaxOptions = 'done'))
                        })(o),
                        null !== o.min || null !== o.max)
                      ) {
                        if (
                          ((s = o.onUnMask(a.join(''), n, e.extend({}, o, { unmaskAsNumber: !0 }))),
                          null !== o.min && s < o.min)
                        )
                          return (
                            (o.isNegative = o.min < 0),
                            o.postValidation(
                              o.min.toString().replace('.', o.radixPoint).split(''),
                              { caret: r, dopost: !0, placeholder: '0' },
                              o
                            )
                          )
                        if (null !== o.max && s > o.max)
                          return (
                            (o.isNegative = o.max < 0),
                            o.postValidation(
                              o.max.toString().replace('.', o.radixPoint).split(''),
                              { caret: r, dopost: !0, placeholder: '0' },
                              o
                            )
                          )
                      }
                      return o.postValidation(a, { caret: r, placeholder: '0', event: 'blur' }, o)
                    case '_checkval':
                      return { caret: r }
                  }
              },
              regex: {
                integerPart: function (e, n) {
                  return n
                    ? new RegExp('[' + t.escapeRegex(e.negationSymbol.front) + '+]?')
                    : new RegExp('[' + t.escapeRegex(e.negationSymbol.front) + '+]?\\d+')
                },
                integerNPart: function (e) {
                  return new RegExp(
                    '[\\d' +
                      t.escapeRegex(e.groupSeparator) +
                      t.escapeRegex(e.placeholder.charAt(0)) +
                      ']+'
                  )
                }
              },
              definitions: {
                '~': {
                  validator: function (e, i, a, r, o, s) {
                    var l
                    if ('k' === e || 'm' === e) {
                      l = { insert: [], c: 0 }
                      for (var u = 0, c = 'k' === e ? 2 : 5; u < c; u++)
                        l.insert.push({ pos: a + u, c: 0 })
                      return (l.pos = a + c), l
                    }
                    if (
                      !0 ===
                      (l = r
                        ? new RegExp('[0-9' + t.escapeRegex(o.groupSeparator) + ']').test(e)
                        : new RegExp('[0-9]').test(e))
                    ) {
                      if (
                        !0 !== o.numericInput &&
                        i.validPositions[a] !== n &&
                        '~' === i.validPositions[a].match.def &&
                        !s
                      ) {
                        var p = i.buffer.join(''),
                          f = (p = (p = p.replace(
                            new RegExp('[-' + t.escapeRegex(o.negationSymbol.front) + ']', 'g'),
                            ''
                          )).replace(
                            new RegExp(t.escapeRegex(o.negationSymbol.back) + '$'),
                            ''
                          )).split(o.radixPoint)
                        f.length > 1 && (f[1] = f[1].replace(/0/g, o.placeholder.charAt(0))),
                          '0' === f[0] && (f[0] = f[0].replace(/0/g, o.placeholder.charAt(0))),
                          (p = f[0] + o.radixPoint + f[1] || '')
                        var m = i._buffer.join('')
                        for (
                          p === o.radixPoint && (p = m);
                          null === p.match(t.escapeRegex(m) + '$');

                        )
                          m = m.slice(1)
                        l =
                          (p = (p = p.replace(m, '')).split(''))[a] === n
                            ? { pos: a, remove: a }
                            : { pos: a }
                      }
                    } else
                      r ||
                        e !== o.radixPoint ||
                        i.validPositions[a - 1] !== n ||
                        (l = { insert: { pos: a, c: 0 }, pos: a + 1 })
                    return l
                  },
                  cardinality: 1
                },
                '+': {
                  validator: function (e, t, n, i, a) {
                    return a.allowMinus && ('-' === e || e === a.negationSymbol.front)
                  },
                  cardinality: 1,
                  placeholder: ''
                },
                '-': {
                  validator: function (e, t, n, i, a) {
                    return a.allowMinus && e === a.negationSymbol.back
                  },
                  cardinality: 1,
                  placeholder: ''
                },
                ':': {
                  validator: function (e, n, i, a, r) {
                    var o = '[' + t.escapeRegex(r.radixPoint) + ']',
                      s = new RegExp(o).test(e)
                    return (
                      s &&
                        n.validPositions[i] &&
                        n.validPositions[i].match.placeholder === r.radixPoint &&
                        (s = { caret: i + 1 }),
                      s
                    )
                  },
                  cardinality: 1,
                  placeholder: function (e) {
                    return e.radixPoint
                  }
                }
              },
              onUnMask: function (e, n, i) {
                if ('' === n && !0 === i.nullable) return n
                var a = e.replace(i.prefix, '')
                return (
                  (a = (a = a.replace(i.suffix, '')).replace(
                    new RegExp(t.escapeRegex(i.groupSeparator), 'g'),
                    ''
                  )),
                  '' !== i.placeholder.charAt(0) &&
                    (a = a.replace(new RegExp(i.placeholder.charAt(0), 'g'), '0')),
                  i.unmaskAsNumber
                    ? ('' !== i.radixPoint &&
                        -1 !== a.indexOf(i.radixPoint) &&
                        (a = a.replace(t.escapeRegex.call(this, i.radixPoint), '.')),
                      (a = (a = a.replace(
                        new RegExp('^' + t.escapeRegex(i.negationSymbol.front)),
                        '-'
                      )).replace(new RegExp(t.escapeRegex(i.negationSymbol.back) + '$'), '')),
                      Number(a))
                    : a
                )
              },
              isComplete: function (e, n) {
                var i = (n.numericInput ? e.slice().reverse() : e).join('')
                return (
                  (i = (i = (i = (i = (i = i.replace(
                    new RegExp('^' + t.escapeRegex(n.negationSymbol.front)),
                    '-'
                  )).replace(new RegExp(t.escapeRegex(n.negationSymbol.back) + '$'), '')).replace(
                    n.prefix,
                    ''
                  )).replace(n.suffix, '')).replace(
                    new RegExp(t.escapeRegex(n.groupSeparator) + '([0-9]{3})', 'g'),
                    '$1'
                  )),
                  ',' === n.radixPoint && (i = i.replace(t.escapeRegex(n.radixPoint), '.')),
                  isFinite(i)
                )
              },
              onBeforeMask: function (i, a) {
                if (
                  ((a.isNegative = n),
                  'number' == typeof i &&
                    '' !== a.radixPoint &&
                    (i = i.toString().replace('.', a.radixPoint)),
                  (i =
                    i.toString().charAt(i.length - 1) === a.radixPoint
                      ? i.toString().substr(0, i.length - 1)
                      : i.toString()),
                  '' !== a.radixPoint && isFinite(i))
                ) {
                  var r = i.split('.'),
                    o = '' !== a.groupSeparator ? parseInt(a.groupSize) : 0
                  2 === r.length &&
                    (r[0].length > o || r[1].length > o || (r[0].length <= o && r[1].length < o)) &&
                    (i = i.replace('.', a.radixPoint))
                }
                var s = i.match(/,/g),
                  l = i.match(/\./g)
                if (
                  ((i =
                    l && s
                      ? l.length > s.length
                        ? (i = i.replace(/\./g, '')).replace(',', a.radixPoint)
                        : s.length > l.length
                        ? (i = i.replace(/,/g, '')).replace('.', a.radixPoint)
                        : i.indexOf('.') < i.indexOf(',')
                        ? i.replace(/\./g, '')
                        : i.replace(/,/g, '')
                      : i.replace(new RegExp(t.escapeRegex(a.groupSeparator), 'g'), '')),
                  0 === a.digits &&
                    (-1 !== i.indexOf('.')
                      ? (i = i.substring(0, i.indexOf('.')))
                      : -1 !== i.indexOf(',') && (i = i.substring(0, i.indexOf(',')))),
                  '' !== a.radixPoint && isFinite(a.digits) && -1 !== i.indexOf(a.radixPoint))
                ) {
                  var u = i.split(a.radixPoint)[1].match(new RegExp('\\d*'))[0]
                  if (parseInt(a.digits) < u.toString().length) {
                    var c = Math.pow(10, parseInt(a.digits))
                    ;(i = i.replace(t.escapeRegex(a.radixPoint), '.')),
                      (i = (i = Math.round(parseFloat(i) * c) / c)
                        .toString()
                        .replace('.', a.radixPoint))
                  }
                }
                return (function (t, n) {
                  var i = e.inArray(n.radixPoint, t)
                  ;-1 === i && (t.push(n.radixPoint), (i = t.length - 1))
                  for (var a = 1; a <= n.digits; a++) t[i + a] = t[i + a] || '0'
                  return t
                })(i.toString().split(''), a).join('')
              },
              onKeyDown: function (n, i, a, r) {
                var o = e(this)
                if (n.ctrlKey)
                  switch (n.keyCode) {
                    case t.keyCode.UP:
                      o.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(r.step)),
                        o.trigger('setvalue')
                      break
                    case t.keyCode.DOWN:
                      o.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(r.step)),
                        o.trigger('setvalue')
                  }
              }
            },
            currency: {
              prefix: '$ ',
              groupSeparator: ',',
              alias: 'numeric',
              placeholder: '0',
              autoGroup: !0,
              digits: 2,
              digitsOptional: !1,
              clearMaskOnLostFocus: !1
            },
            decimal: { alias: 'numeric' },
            integer: { alias: 'numeric', digits: 0, radixPoint: '' },
            percentage: {
              alias: 'numeric',
              digits: 2,
              digitsOptional: !0,
              radixPoint: '.',
              placeholder: '0',
              autoGroup: !1,
              min: 0,
              max: 100,
              suffix: ' %',
              allowMinus: !1
            }
          }),
          t
        )
      }),
      (a = [n(0), n(1)]),
      void 0 === (r = 'function' == typeof (i = o) ? i.apply(t, a) : i) || (e.exports = r)
  },
  function (e, t, n) {
    'use strict'
    var i, a, r, o
    'function' == typeof Symbol && Symbol.iterator,
      (o = function (e, t) {
        function n(e, t) {
          var n = (e.mask || e)
              .replace(/#/g, '0')
              .replace(/\)/, '0')
              .replace(/[+()#-]/g, ''),
            i = (t.mask || t)
              .replace(/#/g, '0')
              .replace(/\)/, '0')
              .replace(/[+()#-]/g, '')
          return n.localeCompare(i)
        }
        var i = t.prototype.analyseMask
        return (
          (t.prototype.analyseMask = function (t, n, a) {
            var r = {}
            return (
              a.phoneCodes &&
                (a.phoneCodes &&
                  a.phoneCodes.length > 1e3 &&
                  ((function o(e, n, i) {
                    ;(n = n || ''), (i = i || r), '' !== n && (i[n] = {})
                    for (var a = '', s = i[n] || i, l = e.length - 1; l >= 0; l--)
                      (s[(a = (t = e[l].mask || e[l]).substr(0, 1))] = s[a] || []),
                        s[a].unshift(t.substr(1)),
                        e.splice(l, 1)
                    for (var u in s) s[u].length > 500 && o(s[u].slice(), u, s)
                  })(
                    (t = t.substr(1, t.length - 2)).split(
                      a.groupmarker[1] + a.alternatormarker + a.groupmarker[0]
                    )
                  ),
                  (t = (function s(t) {
                    var n = '',
                      i = []
                    for (var r in t)
                      e.isArray(t[r])
                        ? 1 === t[r].length
                          ? i.push(r + t[r])
                          : i.push(
                              r +
                                a.groupmarker[0] +
                                t[r].join(
                                  a.groupmarker[1] + a.alternatormarker + a.groupmarker[0]
                                ) +
                                a.groupmarker[1]
                            )
                        : i.push(r + s(t[r]))
                    return (
                      1 === i.length
                        ? (n += i[0])
                        : (n +=
                            a.groupmarker[0] +
                            i.join(a.groupmarker[1] + a.alternatormarker + a.groupmarker[0]) +
                            a.groupmarker[1]),
                      n
                    )
                  })(r))),
                (t = t.replace(/9/g, '\\9'))),
              i.call(this, t, n, a)
            )
          }),
          t.extendAliases({
            abstractphone: {
              groupmarker: ['<', '>'],
              countrycode: '',
              phoneCodes: [],
              keepStatic: 'auto',
              mask: function (e) {
                return (e.definitions = { '#': t.prototype.definitions[9] }), e.phoneCodes.sort(n)
              },
              onBeforeMask: function (e, t) {
                var n = e.replace(/^0{1,2}/, '').replace(/[\s]/g, '')
                return (
                  (n.indexOf(t.countrycode) > 1 || -1 === n.indexOf(t.countrycode)) &&
                    (n = '+' + t.countrycode + n),
                  n
                )
              },
              onUnMask: function (e, t, n) {
                return e.replace(/[()#-]/g, '')
              },
              inputmode: 'tel'
            }
          }),
          t
        )
      }),
      (a = [n(0), n(1)]),
      void 0 === (r = 'function' == typeof (i = o) ? i.apply(t, a) : i) || (e.exports = r)
  },
  function (e, t, n) {
    'use strict'
    var i,
      a,
      r,
      o,
      s =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            }
    ;(o = function (e, t) {
      return (
        void 0 === e.fn.inputmask &&
          (e.fn.inputmask = function (n, i) {
            var a,
              r = this[0]
            if ((void 0 === i && (i = {}), 'string' == typeof n))
              switch (n) {
                case 'unmaskedvalue':
                  return r && r.inputmask ? r.inputmask.unmaskedvalue() : e(r).val()
                case 'remove':
                  return this.each(function () {
                    this.inputmask && this.inputmask.remove()
                  })
                case 'getemptymask':
                  return r && r.inputmask ? r.inputmask.getemptymask() : ''
                case 'hasMaskedValue':
                  return !(!r || !r.inputmask) && r.inputmask.hasMaskedValue()
                case 'isComplete':
                  return !r || !r.inputmask || r.inputmask.isComplete()
                case 'getmetadata':
                  return r && r.inputmask ? r.inputmask.getmetadata() : void 0
                case 'setvalue':
                  t.setValue(r, i)
                  break
                case 'option':
                  if ('string' != typeof i)
                    return this.each(function () {
                      if (void 0 !== this.inputmask) return this.inputmask.option(i)
                    })
                  if (r && void 0 !== r.inputmask) return r.inputmask.option(i)
                  break
                default:
                  return (
                    (i.alias = n),
                    (a = new t(i)),
                    this.each(function () {
                      a.mask(this)
                    })
                  )
              }
            else {
              if ('object' == (void 0 === n ? 'undefined' : s(n)))
                return (
                  (a = new t(n)),
                  void 0 === n.mask && void 0 === n.alias
                    ? this.each(function () {
                        if (void 0 !== this.inputmask) return this.inputmask.option(n)
                        a.mask(this)
                      })
                    : this.each(function () {
                        a.mask(this)
                      })
                )
              if (void 0 === n)
                return this.each(function () {
                  ;(a = new t(i)).mask(this)
                })
            }
          }),
        e.fn.inputmask
      )
    }),
      (a = [n(2), n(1)]),
      void 0 === (r = 'function' == typeof (i = o) ? i.apply(t, a) : i) || (e.exports = r)
  }
])
