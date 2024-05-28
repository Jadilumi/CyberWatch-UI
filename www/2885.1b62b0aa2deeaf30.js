"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([[2885], {
  2885: (Ae, $, y) => {
    y.r($), y.d($, {ion_datetime: () => N, ion_picker_legacy: () => X, ion_picker_legacy_column: () => q});
    var M = y(467), o = y(5539), ne = y(3126), _ = y(4920), v = y(4929), S = y(5083), F = y(333), E = y(3992),
      V = y(3635), s = y(3761), ae = y(7838), C = y(2478), j = y(9986), B = y(1086);
    y(8476), y(7567), y(1970), y(8438);
    const K = (e, i, t, a) => !!(null === e.day || void 0 !== a && !a.includes(e.day) || i && (0, s.i)(e, i) || t && (0, s.b)(e, t)),
      R = (e, {
        minParts: i,
        maxParts: t
      }) => !!(((e, i, t) => !!(i && i.year > e || t && t.year < e))(e.year, i, t) || i && (0, s.i)(e, i) || t && (0, s.b)(e, t)),
      U = (e, i) => {
        var t, a, n, r;
        (null !== (t = null == i ? void 0 : i.date) && void 0 !== t && t.timeZone || null !== (a = null == i ? void 0 : i.date) && void 0 !== a && a.timeZoneName || null !== (n = null == i ? void 0 : i.time) && void 0 !== n && n.timeZone || null !== (r = null == i ? void 0 : i.time) && void 0 !== r && r.timeZoneName) && (0, v.p)('Datetime: "timeZone" and "timeZoneName" are not supported in "formatOptions".', e)
      }, Y = (e, i, t) => {
        if (t) switch (i) {
          case"date":
          case"month-year":
          case"month":
          case"year":
            void 0 === t.date && (0, v.p)(`Datetime: The '${i}' presentation requires a date object in formatOptions.`, e);
            break;
          case"time":
            void 0 === t.time && (0, v.p)("Datetime: The 'time' presentation requires a time object in formatOptions.", e);
            break;
          case"date-time":
          case"time-date":
            void 0 === t.date && void 0 === t.time && (0, v.p)(`Datetime: The '${i}' presentation requires either a date or time object (or both) in formatOptions.`, e)
        }
      }, N = class {
        constructor(e) {
          var i = this;
          (0, o.r)(this, e), this.ionCancel = (0, o.d)(this, "ionCancel", 7), this.ionChange = (0, o.d)(this, "ionChange", 7), this.ionValueChange = (0, o.d)(this, "ionValueChange", 7), this.ionFocus = (0, o.d)(this, "ionFocus", 7), this.ionBlur = (0, o.d)(this, "ionBlur", 7), this.ionStyle = (0, o.d)(this, "ionStyle", 7), this.ionRender = (0, o.d)(this, "ionRender", 7), this.inputId = "ion-dt-" + pe++, this.prevPresentation = null, this.warnIfIncorrectValueUsage = () => {
            const {multiple: t, value: a} = this;
            !t && Array.isArray(a) && (0, v.p)(`ion-datetime was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".\n\n  Value Passed: [${a.map(n => `'${n}'`).join(", ")}]\n`, this.el)
          }, this.setValue = t => {
            this.value = t, this.ionChange.emit({value: t})
          }, this.getActivePartsWithFallback = () => {
            var t;
            const {defaultParts: a} = this;
            return null !== (t = this.getActivePart()) && void 0 !== t ? t : a
          }, this.getActivePart = () => {
            const {activeParts: t} = this;
            return Array.isArray(t) ? t[0] : t
          }, this.closeParentOverlay = t => {
            const a = this.el.closest("ion-modal, ion-popover");
            a && a.dismiss(void 0, t)
          }, this.setWorkingParts = t => {
            this.workingParts = Object.assign({}, t)
          }, this.setActiveParts = (t, a = !1) => {
            if (this.readonly) return;
            const {multiple: n, minParts: r, maxParts: d, activeParts: l} = this, c = (0, s.v)(t, r, d);
            if (this.setWorkingParts(c), n) {
              const h = Array.isArray(l) ? l : [l];
              this.activeParts = a ? h.filter(g => !(0, s.c)(g, c)) : [...h, c]
            } else this.activeParts = Object.assign({}, c);
            null !== this.el.querySelector('[slot="buttons"]') || this.showDefaultButtons || this.confirm()
          }, this.initializeKeyboardListeners = () => {
            const t = this.calendarBodyRef;
            if (!t) return;
            const a = this.el.shadowRoot, n = t.querySelector(".calendar-month:nth-of-type(2)"),
              d = new MutationObserver(l => {
                var c;
                null !== (c = l[0].oldValue) && void 0 !== c && c.includes("ion-focused") || !t.classList.contains("ion-focused") || this.focusWorkingDay(n)
              });
            d.observe(t, {attributeFilter: ["class"], attributeOldValue: !0}), this.destroyKeyboardMO = () => {
              null == d || d.disconnect()
            }, t.addEventListener("keydown", l => {
              const c = a.activeElement;
              if (!c || !c.classList.contains("calendar-day")) return;
              const p = (0, s.f)(c);
              let h;
              switch (l.key) {
                case"ArrowDown":
                  l.preventDefault(), h = (0, s.p)(p);
                  break;
                case"ArrowUp":
                  l.preventDefault(), h = (0, s.o)(p);
                  break;
                case"ArrowRight":
                  l.preventDefault(), h = (0, s.n)(p);
                  break;
                case"ArrowLeft":
                  l.preventDefault(), h = (0, s.m)(p);
                  break;
                case"Home":
                  l.preventDefault(), h = (0, s.l)(p);
                  break;
                case"End":
                  l.preventDefault(), h = (0, s.k)(p);
                  break;
                case"PageUp":
                  l.preventDefault(), h = l.shiftKey ? (0, s.j)(p) : (0, s.d)(p);
                  break;
                case"PageDown":
                  l.preventDefault(), h = l.shiftKey ? (0, s.h)(p) : (0, s.e)(p);
                  break;
                default:
                  return
              }
              K(h, this.minParts, this.maxParts) || (this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), h)), requestAnimationFrame(() => this.focusWorkingDay(n)))
            })
          }, this.focusWorkingDay = t => {
            const a = t.querySelectorAll(".calendar-day-padding"), {day: n} = this.workingParts;
            if (null === n) return;
            const r = t.querySelector(`.calendar-day-wrapper:nth-of-type(${a.length + n}) .calendar-day`);
            r && r.focus()
          }, this.processMinParts = () => {
            const {min: t, defaultParts: a} = this;
            this.minParts = void 0 !== t ? (0, s.q)(t, a) : void 0
          }, this.processMaxParts = () => {
            const {max: t, defaultParts: a} = this;
            this.maxParts = void 0 !== t ? (0, s.r)(t, a) : void 0
          }, this.initializeCalendarListener = () => {
            const t = this.calendarBodyRef;
            if (!t) return;
            const a = t.querySelectorAll(".calendar-month"), n = a[0], r = a[1], d = a[2],
              c = "ios" === (0, V.b)(this) && typeof navigator < "u" && navigator.maxTouchPoints > 1;
            (0, o.w)(() => {
              t.scrollLeft = n.clientWidth * ((0, S.i)(this.el) ? -1 : 1);
              const p = f => {
                const k = t.getBoundingClientRect(),
                  u = ((0, S.i)(this.el) ? t.scrollLeft >= -2 : t.scrollLeft <= 2) ? n : d, D = u.getBoundingClientRect();
                if (Math.abs(D.x - k.x) > 2) return;
                const {forceRenderDate: P} = this;
                return void 0 !== P ? {
                  month: P.month,
                  year: P.year,
                  day: P.day
                } : u === n ? (0, s.d)(f) : u === d ? (0, s.e)(f) : void 0
              }, h = () => {
                c && (t.style.removeProperty("pointer-events"), b = !1);
                const f = p(this.workingParts);
                if (!f) return;
                const {month: k, day: x, year: u} = f;
                R({month: k, year: u, day: null}, {
                  minParts: Object.assign(Object.assign({}, this.minParts), {day: null}),
                  maxParts: Object.assign(Object.assign({}, this.maxParts), {day: null})
                }) || (t.style.setProperty("overflow", "hidden"), (0, o.w)(() => {
                  this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), {
                    month: k,
                    day: x,
                    year: u
                  })), t.scrollLeft = r.clientWidth * ((0, S.i)(this.el) ? -1 : 1), t.style.removeProperty("overflow"), this.resolveForceDateScrolling && this.resolveForceDateScrolling()
                }))
              };
              let g, b = !1;
              const m = () => {
                g && clearTimeout(g), !b && c && (t.style.setProperty("pointer-events", "none"), b = !0), g = setTimeout(h, 50)
              };
              t.addEventListener("scroll", m), this.destroyCalendarListener = () => {
                t.removeEventListener("scroll", m)
              }
            })
          }, this.destroyInteractionListeners = () => {
            const {destroyCalendarListener: t, destroyKeyboardMO: a} = this;
            void 0 !== t && t(), void 0 !== a && a()
          }, this.processValue = t => {
            const a = null != t && (!Array.isArray(t) || t.length > 0),
              n = a ? (0, s.s)(t) : this.defaultParts, {minParts: r, maxParts: d, workingParts: l, el: c} = this;
            if (this.warnIfIncorrectValueUsage(), !n) return;
            a && (0, s.w)(n, r, d);
            const p = Array.isArray(n) ? n[0] : n, h = (0, s.P)(p, r, d), {
              month: g,
              day: b,
              year: m,
              hour: f,
              minute: k
            } = h, x = (0, s.Q)(f);
            this.activeParts = a ? Array.isArray(n) ? [...n] : {
              month: g,
              day: b,
              year: m,
              hour: f,
              minute: k,
              ampm: x
            } : [];
            const u = void 0 !== g && g !== l.month || void 0 !== m && m !== l.year,
              D = c.classList.contains("datetime-ready"), {isGridStyle: P, showMonthAndYear: A} = this;
            let O = !0;
            if (Array.isArray(n)) {
              const T = n[0].month;
              for (const H of n) if (H.month !== T) {
                O = !1;
                break
              }
            }
            O && (P && u && D && !A ? this.animateToDate(h) : this.setWorkingParts({
              month: g,
              day: b,
              year: m,
              hour: f,
              minute: k,
              ampm: x
            }))
          }, this.animateToDate = function () {
            var t = (0, M.A)(function* (a) {
              const {workingParts: n} = i;
              i.forceRenderDate = a;
              const r = new Promise(l => {
                i.resolveForceDateScrolling = l
              });
              (0, s.i)(a, n) ? i.prevMonth() : i.nextMonth(), yield r, i.resolveForceDateScrolling = void 0, i.forceRenderDate = void 0
            });
            return function (a) {
              return t.apply(this, arguments)
            }
          }(), this.onFocus = () => {
            this.ionFocus.emit()
          }, this.onBlur = () => {
            this.ionBlur.emit()
          }, this.hasValue = () => null != this.value, this.nextMonth = () => {
            const t = this.calendarBodyRef;
            if (!t) return;
            const a = t.querySelector(".calendar-month:last-of-type");
            a && t.scrollTo({top: 0, left: 2 * a.offsetWidth * ((0, S.i)(this.el) ? -1 : 1), behavior: "smooth"})
          }, this.prevMonth = () => {
            const t = this.calendarBodyRef;
            !t || !t.querySelector(".calendar-month:first-of-type") || t.scrollTo({top: 0, left: 0, behavior: "smooth"})
          }, this.toggleMonthAndYearView = () => {
            this.showMonthAndYear = !this.showMonthAndYear
          }, this.showMonthAndYear = !1, this.activeParts = [], this.workingParts = {
            month: 5,
            day: 28,
            year: 2021,
            hour: 13,
            minute: 52,
            ampm: "pm"
          }, this.isTimePopoverOpen = !1, this.forceRenderDate = void 0, this.color = "primary", this.name = this.inputId, this.disabled = !1, this.formatOptions = void 0, this.readonly = !1, this.isDateEnabled = void 0, this.min = void 0, this.max = void 0, this.presentation = "date-time", this.cancelText = "Cancel", this.doneText = "Done", this.clearText = "Clear", this.yearValues = void 0, this.monthValues = void 0, this.dayValues = void 0, this.hourValues = void 0, this.minuteValues = void 0, this.locale = "default", this.firstDayOfWeek = 0, this.titleSelectedDatesFormatter = void 0, this.multiple = !1, this.highlightedDates = void 0, this.value = void 0, this.showDefaultTitle = !1, this.showDefaultButtons = !1, this.showClearButton = !1, this.showDefaultTimeLabel = !0, this.hourCycle = void 0, this.size = "fixed", this.preferWheel = !1
        }

        formatOptionsChanged() {
          const {el: e, formatOptions: i, presentation: t} = this;
          Y(e, t, i), U(e, i)
        }

        disabledChanged() {
          this.emitStyle()
        }

        minChanged() {
          this.processMinParts()
        }

        maxChanged() {
          this.processMaxParts()
        }

        presentationChanged() {
          const {el: e, formatOptions: i, presentation: t} = this;
          Y(e, t, i)
        }

        get isGridStyle() {
          const {presentation: e, preferWheel: i} = this;
          return ("date" === e || "date-time" === e || "time-date" === e) && !i
        }

        yearValuesChanged() {
          this.parsedYearValues = (0, s.t)(this.yearValues)
        }

        monthValuesChanged() {
          this.parsedMonthValues = (0, s.t)(this.monthValues)
        }

        dayValuesChanged() {
          this.parsedDayValues = (0, s.t)(this.dayValues)
        }

        hourValuesChanged() {
          this.parsedHourValues = (0, s.t)(this.hourValues)
        }

        minuteValuesChanged() {
          this.parsedMinuteValues = (0, s.t)(this.minuteValues)
        }

        valueChanged() {
          var e = this;
          return (0, M.A)(function* () {
            const {value: i} = e;
            e.hasValue() && e.processValue(i), e.emitStyle(), e.ionValueChange.emit({value: i})
          })()
        }

        confirm(e = !1) {
          var i = this;
          return (0, M.A)(function* () {
            const {isCalendarPicker: t, activeParts: a, preferWheel: n, workingParts: r} = i;
            (void 0 !== a || !t) && (Array.isArray(a) && 0 === a.length ? i.setValue(n ? (0, s.u)(r) : void 0) : i.setValue((0, s.u)(a))), e && i.closeParentOverlay(ue)
          })()
        }

        reset(e) {
          var i = this;
          return (0, M.A)(function* () {
            i.processValue(e)
          })()
        }

        cancel(e = !1) {
          var i = this;
          return (0, M.A)(function* () {
            i.ionCancel.emit(), e && i.closeParentOverlay(me)
          })()
        }

        get isCalendarPicker() {
          const {presentation: e} = this;
          return "date" === e || "date-time" === e || "time-date" === e
        }

        connectedCallback() {
          this.clearFocusVisible = (0, ne.startFocusVisible)(this.el).destroy
        }

        disconnectedCallback() {
          this.clearFocusVisible && (this.clearFocusVisible(), this.clearFocusVisible = void 0)
        }

        initializeListeners() {
          this.initializeCalendarListener(), this.initializeKeyboardListeners()
        }

        componentDidLoad() {
          const {el: e, intersectionTrackerRef: i} = this, a = new IntersectionObserver(l => {
            l[0].isIntersecting && (this.initializeListeners(), (0, o.w)(() => {
              this.el.classList.add("datetime-ready")
            }))
          }, {threshold: .01, root: e});
          (0, _.r)(() => null == a ? void 0 : a.observe(i));
          const r = new IntersectionObserver(l => {
            l[0].isIntersecting || (this.destroyInteractionListeners(), this.showMonthAndYear = !1, (0, o.w)(() => {
              this.el.classList.remove("datetime-ready")
            }))
          }, {threshold: 0, root: e});
          (0, _.r)(() => null == r ? void 0 : r.observe(i));
          const d = (0, _.g)(this.el);
          d.addEventListener("ionFocus", l => l.stopPropagation()), d.addEventListener("ionBlur", l => l.stopPropagation())
        }

        componentDidRender() {
          const {
            presentation: e,
            prevPresentation: i,
            calendarBodyRef: t,
            minParts: a,
            preferWheel: n,
            forceRenderDate: r
          } = this, d = !n && ["date-time", "time-date", "date"].includes(e);
          if (void 0 !== a && d && t) {
            const l = t.querySelector(".calendar-month:nth-of-type(1)");
            l && void 0 === r && (t.scrollLeft = l.clientWidth * ((0, S.i)(this.el) ? -1 : 1))
          }
          null !== i ? e !== i && (this.prevPresentation = e, this.destroyInteractionListeners(), this.initializeListeners(), this.showMonthAndYear = !1, (0, _.r)(() => {
            this.ionRender.emit()
          })) : this.prevPresentation = e
        }

        componentWillLoad() {
          const {el: e, formatOptions: i, highlightedDates: t, multiple: a, presentation: n, preferWheel: r} = this;
          a && ("date" !== n && (0, v.p)('Multiple date selection is only supported for presentation="date".', e), r && (0, v.p)('Multiple date selection is not supported with preferWheel="true".', e)), void 0 !== t && ("date" !== n && "date-time" !== n && "time-date" !== n && (0, v.p)("The highlightedDates property is only supported with the date, date-time, and time-date presentations.", e), r && (0, v.p)('The highlightedDates property is not supported with preferWheel="true".', e)), i && (Y(e, n, i), U(e, i));
          const d = this.parsedHourValues = (0, s.t)(this.hourValues),
            l = this.parsedMinuteValues = (0, s.t)(this.minuteValues),
            c = this.parsedMonthValues = (0, s.t)(this.monthValues),
            p = this.parsedYearValues = (0, s.t)(this.yearValues), h = this.parsedDayValues = (0, s.t)(this.dayValues),
            g = this.todayParts = (0, s.s)((0, s.x)());
          this.processMinParts(), this.processMaxParts(), this.defaultParts = (0, s.y)({
            refParts: g,
            monthValues: c,
            dayValues: h,
            yearValues: p,
            hourValues: d,
            minuteValues: l,
            minParts: this.minParts,
            maxParts: this.maxParts
          }), this.processValue(this.value), this.emitStyle()
        }

        emitStyle() {
          this.ionStyle.emit({interactive: !0, datetime: !0, "interactive-disabled": this.disabled})
        }

        renderFooter() {
          const {disabled: e, readonly: i, showDefaultButtons: t, showClearButton: a} = this, n = e || i;
          if (null === this.el.querySelector('[slot="buttons"]') && !t && !a) return;
          const d = () => {
            this.reset(), this.setValue(void 0)
          };
          return (0, o.h)("div", {class: "datetime-footer"}, (0, o.h)("div", {class: "datetime-buttons"}, (0, o.h)("div", {
            class: {
              "datetime-action-buttons": !0,
              "has-clear-button": this.showClearButton
            }
          }, (0, o.h)("slot", {name: "buttons"}, (0, o.h)("ion-buttons", null, t && (0, o.h)("ion-button", {
            id: "cancel-button",
            color: this.color,
            onClick: () => this.cancel(!0),
            disabled: n
          }, this.cancelText), (0, o.h)("div", {class: "datetime-action-buttons-container"}, a && (0, o.h)("ion-button", {
            id: "clear-button",
            color: this.color,
            onClick: () => d(),
            disabled: n
          }, this.clearText), t && (0, o.h)("ion-button", {
            id: "confirm-button",
            color: this.color,
            onClick: () => this.confirm(!0),
            disabled: n
          }, this.doneText)))))))
        }

        renderWheelPicker(e = this.presentation) {
          const i = "time-date" === e ? [this.renderTimePickerColumns(e), this.renderDatePickerColumns(e)] : [this.renderDatePickerColumns(e), this.renderTimePickerColumns(e)];
          return (0, o.h)("ion-picker", null, i)
        }

        renderDatePickerColumns(e) {
          return "date-time" === e || "time-date" === e ? this.renderCombinedDatePickerColumn() : this.renderIndividualDatePickerColumns(e)
        }

        renderCombinedDatePickerColumn() {
          const {
            defaultParts: e,
            disabled: i,
            workingParts: t,
            locale: a,
            minParts: n,
            maxParts: r,
            todayParts: d,
            isDateEnabled: l
          } = this, c = this.getActivePartsWithFallback(), p = (0, s.z)(t), h = p[p.length - 1];
          p[0].day = 1, h.day = (0, s.A)(h.month, h.year);
          const g = void 0 !== n && (0, s.b)(n, p[0]) ? n : p[0], b = void 0 !== r && (0, s.i)(r, h) ? r : h,
            m = (0, s.B)(a, d, g, b, this.parsedDayValues, this.parsedMonthValues);
          let f = m.items;
          const k = m.parts;
          l && (f = f.map((u, D) => {
            const P = k[D];
            let A;
            try {
              A = !l((0, s.u)(P))
            } catch (O) {
              (0, v.a)("Exception thrown from provided `isDateEnabled` function. Please check your function and try again.", O)
            }
            return Object.assign(Object.assign({}, u), {disabled: A})
          }));
          const x = null !== t.day ? `${t.year}-${t.month}-${t.day}` : `${e.year}-${e.month}-${e.day}`;
          return (0, o.h)("ion-picker-column", {
            "aria-label": "Select a date",
            class: "date-column",
            color: this.color,
            disabled: i,
            value: x,
            onIonChange: u => {
              const {value: D} = u.detail, P = k.find(({month: A, day: O, year: T}) => D === `${T}-${A}-${O}`);
              this.setWorkingParts(Object.assign(Object.assign({}, t), P)), this.setActiveParts(Object.assign(Object.assign({}, c), P)), u.stopPropagation()
            }
          }, f.map(u => (0, o.h)("ion-picker-column-option", {
            part: u.value === x ? `${w} ${I}` : w,
            key: u.value,
            disabled: u.disabled,
            value: u.value
          }, u.text)))
        }

        renderIndividualDatePickerColumns(e) {
          const {workingParts: i, isDateEnabled: t} = this,
            n = "year" !== e && "time" !== e ? (0, s.C)(this.locale, i, this.minParts, this.maxParts, this.parsedMonthValues) : [];
          let d = "date" === e ? (0, s.D)(this.locale, i, this.minParts, this.maxParts, this.parsedDayValues) : [];
          t && (d = d.map(g => {
            const {value: b} = g, m = "string" == typeof b ? parseInt(b) : b, f = {month: i.month, day: m, year: i.year};
            let k;
            try {
              k = !t((0, s.u)(f))
            } catch (x) {
              (0, v.a)("Exception thrown from provided `isDateEnabled` function. Please check your function and try again.", x)
            }
            return Object.assign(Object.assign({}, g), {disabled: k})
          }));
          const c = "month" !== e && "time" !== e ? (0, s.E)(this.locale, this.defaultParts, this.minParts, this.maxParts, this.parsedYearValues) : [];
          let h = [];
          return h = (0, s.F)(this.locale, {
            month: "numeric",
            day: "numeric"
          }) ? [this.renderMonthPickerColumn(n), this.renderDayPickerColumn(d), this.renderYearPickerColumn(c)] : [this.renderDayPickerColumn(d), this.renderMonthPickerColumn(n), this.renderYearPickerColumn(c)], h
        }

        renderDayPickerColumn(e) {
          var i;
          if (0 === e.length) return [];
          const {disabled: t, workingParts: a} = this, n = this.getActivePartsWithFallback(),
            r = null !== (i = null !== a.day ? a.day : this.defaultParts.day) && void 0 !== i ? i : void 0;
          return (0, o.h)("ion-picker-column", {
            "aria-label": "Select a day",
            class: "day-column",
            color: this.color,
            disabled: t,
            value: r,
            onIonChange: d => {
              this.setWorkingParts(Object.assign(Object.assign({}, a), {day: d.detail.value})), this.setActiveParts(Object.assign(Object.assign({}, n), {day: d.detail.value})), d.stopPropagation()
            }
          }, e.map(d => (0, o.h)("ion-picker-column-option", {
            part: d.value === r ? `${w} ${I}` : w,
            key: d.value,
            disabled: d.disabled,
            value: d.value
          }, d.text)))
        }

        renderMonthPickerColumn(e) {
          if (0 === e.length) return [];
          const {disabled: i, workingParts: t} = this, a = this.getActivePartsWithFallback();
          return (0, o.h)("ion-picker-column", {
            "aria-label": "Select a month",
            class: "month-column",
            color: this.color,
            disabled: i,
            value: t.month,
            onIonChange: n => {
              this.setWorkingParts(Object.assign(Object.assign({}, t), {month: n.detail.value})), this.setActiveParts(Object.assign(Object.assign({}, a), {month: n.detail.value})), n.stopPropagation()
            }
          }, e.map(n => (0, o.h)("ion-picker-column-option", {
            part: n.value === t.month ? `${w} ${I}` : w,
            key: n.value,
            disabled: n.disabled,
            value: n.value
          }, n.text)))
        }

        renderYearPickerColumn(e) {
          if (0 === e.length) return [];
          const {disabled: i, workingParts: t} = this, a = this.getActivePartsWithFallback();
          return (0, o.h)("ion-picker-column", {
            "aria-label": "Select a year",
            class: "year-column",
            color: this.color,
            disabled: i,
            value: t.year,
            onIonChange: n => {
              this.setWorkingParts(Object.assign(Object.assign({}, t), {year: n.detail.value})), this.setActiveParts(Object.assign(Object.assign({}, a), {year: n.detail.value})), n.stopPropagation()
            }
          }, e.map(n => (0, o.h)("ion-picker-column-option", {
            part: n.value === t.year ? `${w} ${I}` : w,
            key: n.value,
            disabled: n.disabled,
            value: n.value
          }, n.text)))
        }

        renderTimePickerColumns(e) {
          if (["date", "month", "month-year", "year"].includes(e)) return [];
          const t = void 0 !== this.getActivePart(), {
            hoursData: a,
            minutesData: n,
            dayPeriodData: r
          } = (0, s.G)(this.locale, this.workingParts, this.hourCycle, t ? this.minParts : void 0, t ? this.maxParts : void 0, this.parsedHourValues, this.parsedMinuteValues);
          return [this.renderHourPickerColumn(a), this.renderMinutePickerColumn(n), this.renderDayPeriodPickerColumn(r)]
        }

        renderHourPickerColumn(e) {
          const {disabled: i, workingParts: t} = this;
          if (0 === e.length) return [];
          const a = this.getActivePartsWithFallback();
          return (0, o.h)("ion-picker-column", {
            "aria-label": "Select an hour",
            color: this.color,
            disabled: i,
            value: a.hour,
            numericInput: !0,
            onIonChange: n => {
              this.setWorkingParts(Object.assign(Object.assign({}, t), {hour: n.detail.value})), this.setActiveParts(Object.assign(Object.assign({}, a), {hour: n.detail.value})), n.stopPropagation()
            }
          }, e.map(n => (0, o.h)("ion-picker-column-option", {
            part: n.value === a.hour ? `${w} ${I}` : w,
            key: n.value,
            disabled: n.disabled,
            value: n.value
          }, n.text)))
        }

        renderMinutePickerColumn(e) {
          const {disabled: i, workingParts: t} = this;
          if (0 === e.length) return [];
          const a = this.getActivePartsWithFallback();
          return (0, o.h)("ion-picker-column", {
            "aria-label": "Select a minute",
            color: this.color,
            disabled: i,
            value: a.minute,
            numericInput: !0,
            onIonChange: n => {
              this.setWorkingParts(Object.assign(Object.assign({}, t), {minute: n.detail.value})), this.setActiveParts(Object.assign(Object.assign({}, a), {minute: n.detail.value})), n.stopPropagation()
            }
          }, e.map(n => (0, o.h)("ion-picker-column-option", {
            part: n.value === a.minute ? `${w} ${I}` : w,
            key: n.value,
            disabled: n.disabled,
            value: n.value
          }, n.text)))
        }

        renderDayPeriodPickerColumn(e) {
          const {disabled: i, workingParts: t} = this;
          if (0 === e.length) return [];
          const a = this.getActivePartsWithFallback(), n = (0, s.H)(this.locale);
          return (0, o.h)("ion-picker-column", {
            "aria-label": "Select a day period",
            style: n ? {order: "-1"} : {},
            color: this.color,
            disabled: i,
            value: a.ampm,
            onIonChange: r => {
              const d = (0, s.R)(t, r.detail.value);
              this.setWorkingParts(Object.assign(Object.assign({}, t), {
                ampm: r.detail.value,
                hour: d
              })), this.setActiveParts(Object.assign(Object.assign({}, a), {
                ampm: r.detail.value,
                hour: d
              })), r.stopPropagation()
            }
          }, e.map(r => (0, o.h)("ion-picker-column-option", {
            part: r.value === a.ampm ? `${w} ${I}` : w,
            key: r.value,
            disabled: r.disabled,
            value: r.value
          }, r.text)))
        }

        renderWheelView(e) {
          const {locale: i} = this, a = (0, s.F)(i) ? "month-first" : "year-first";
          return (0, o.h)("div", {class: {[`wheel-order-${a}`]: !0}}, this.renderWheelPicker(e))
        }

        renderCalendarHeader(e) {
          const {disabled: i} = this, t = "ios" === e ? E.l : E.p, a = "ios" === e ? E.o : E.q, n = i || ((e, i, t) => {
            const a = Object.assign(Object.assign({}, (0, s.d)(this.workingParts)), {day: null});
            return R(a, {minParts: i, maxParts: t})
          })(0, this.minParts, this.maxParts), r = i || ((e, i) => {
            const t = Object.assign(Object.assign({}, (0, s.e)(this.workingParts)), {day: null});
            return R(t, {maxParts: i})
          })(0, this.maxParts), d = this.el.getAttribute("dir") || void 0;
          return (0, o.h)("div", {class: "calendar-header"}, (0, o.h)("div", {class: "calendar-action-buttons"}, (0, o.h)("div", {class: "calendar-month-year"}, (0, o.h)("button", {
            class: {
              "calendar-month-year-toggle": !0,
              "ion-activatable": !0,
              "ion-focusable": !0
            },
            part: "month-year-button",
            disabled: i,
            "aria-label": this.showMonthAndYear ? "Hide year picker" : "Show year picker",
            onClick: () => this.toggleMonthAndYearView()
          }, (0, o.h)("span", {id: "toggle-wrapper"}, (0, s.J)(this.locale, this.workingParts), (0, o.h)("ion-icon", {
            "aria-hidden": "true",
            icon: this.showMonthAndYear ? t : a,
            lazy: !1,
            flipRtl: !0
          })), "md" === e && (0, o.h)("ion-ripple-effect", null))), (0, o.h)("div", {class: "calendar-next-prev"}, (0, o.h)("ion-buttons", null, (0, o.h)("ion-button", {
            "aria-label": "Previous month",
            disabled: n,
            onClick: () => this.prevMonth()
          }, (0, o.h)("ion-icon", {
            dir: d,
            "aria-hidden": "true",
            slot: "icon-only",
            icon: E.c,
            lazy: !1,
            flipRtl: !0
          })), (0, o.h)("ion-button", {
            "aria-label": "Next month",
            disabled: r,
            onClick: () => this.nextMonth()
          }, (0, o.h)("ion-icon", {
            dir: d,
            "aria-hidden": "true",
            slot: "icon-only",
            icon: E.o,
            lazy: !1,
            flipRtl: !0
          }))))), (0, o.h)("div", {
            class: "calendar-days-of-week",
            "aria-hidden": "true"
          }, (0, s.I)(this.locale, e, this.firstDayOfWeek % 7).map(l => (0, o.h)("div", {class: "day-of-week"}, l))))
        }

        renderMonth(e, i) {
          const {disabled: t, readonly: a} = this,
            n = void 0 === this.parsedYearValues || this.parsedYearValues.includes(i),
            r = void 0 === this.parsedMonthValues || this.parsedMonthValues.includes(e), d = !n || !r, l = t || a,
            c = t || R({
              month: e,
              year: i,
              day: null
            }, {
              minParts: Object.assign(Object.assign({}, this.minParts), {day: null}),
              maxParts: Object.assign(Object.assign({}, this.maxParts), {day: null})
            }), p = this.workingParts.month === e && this.workingParts.year === i, h = this.getActivePartsWithFallback();
          return (0, o.h)("div", {
            "aria-hidden": p ? null : "true",
            class: {"calendar-month": !0, "calendar-month-disabled": !p && c}
          }, (0, o.h)("div", {class: "calendar-month-grid"}, (0, s.K)(e, i, this.firstDayOfWeek % 7).map((g, b) => {
            const {day: m, dayOfWeek: f} = g, {el: k, highlightedDates: x, isDateEnabled: u, multiple: D} = this,
              P = {month: e, day: m, year: i}, A = null === m, {
                isActive: O,
                isToday: T,
                ariaLabel: H,
                ariaSelected: we,
                disabled: Pe,
                text: Ce
              } = ((e, i, t, a, n, r, d) => {
                const c = void 0 !== (Array.isArray(t) ? t : [t]).find(g => (0, s.c)(i, g)), p = (0, s.c)(i, a);
                return {
                  disabled: K(i, n, r, d),
                  isActive: c,
                  isToday: p,
                  ariaSelected: c ? "true" : null,
                  ariaLabel: (0, s.g)(e, p, i),
                  text: null != i.day ? (0, s.a)(e, i) : null
                }
              })(this.locale, P, this.activeParts, this.todayParts, this.minParts, this.maxParts, this.parsedDayValues),
              te = (0, s.u)(P);
            let W = d || Pe;
            if (!W && void 0 !== u) try {
              W = !u(te)
            } catch (z) {
              (0, v.a)("Exception thrown from provided `isDateEnabled` function. Please check your function and try again.", k, z)
            }
            const De = W && l, Me = W || l;
            let L, ie;
            return void 0 !== x && !O && null !== m && (L = ((e, i, t) => {
              if (Array.isArray(e)) {
                const a = i.split("T")[0], n = e.find(r => r.date === a);
                if (n) return {textColor: n.textColor, backgroundColor: n.backgroundColor}
              } else try {
                return e(i)
              } catch (a) {
                (0, v.a)("Exception thrown from provided `highlightedDates` callback. Please check your function and try again.", t, a)
              }
            })(x, te, k)), A || (ie = `calendar-day${O ? " active" : ""}${T ? " today" : ""}${W ? " disabled" : ""}`), (0, o.h)("div", {class: "calendar-day-wrapper"}, (0, o.h)("button", {
              ref: z => {
                z && (z.style.setProperty("color", `${L ? L.textColor : ""}`, "important"), z.style.setProperty("background-color", `${L ? L.backgroundColor : ""}`, "important"))
              },
              tabindex: "-1",
              "data-day": m,
              "data-month": e,
              "data-year": i,
              "data-index": b,
              "data-day-of-week": f,
              disabled: Me,
              class: {
                "calendar-day-padding": A,
                "calendar-day": !0,
                "calendar-day-active": O,
                "calendar-day-constrained": De,
                "calendar-day-today": T
              },
              part: ie,
              "aria-hidden": A ? "true" : null,
              "aria-selected": we,
              "aria-label": H,
              onClick: () => {
                A || (this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), {
                  month: e,
                  day: m,
                  year: i
                })), D ? this.setActiveParts({
                  month: e,
                  day: m,
                  year: i
                }, O) : this.setActiveParts(Object.assign(Object.assign({}, h), {month: e, day: m, year: i})))
              }
            }, Ce))
          })))
        }

        renderCalendarBody() {
          return (0, o.h)("div", {
            class: "calendar-body ion-focusable",
            ref: e => this.calendarBodyRef = e,
            tabindex: "0"
          }, (0, s.z)(this.workingParts, this.forceRenderDate).map(({month: e, year: i}) => this.renderMonth(e, i)))
        }

        renderCalendar(e) {
          return (0, o.h)("div", {
            class: "datetime-calendar",
            key: "datetime-calendar"
          }, this.renderCalendarHeader(e), this.renderCalendarBody())
        }

        renderTimeLabel() {
          if (null !== this.el.querySelector('[slot="time-label"]') || this.showDefaultTimeLabel) return (0, o.h)("slot", {name: "time-label"}, "Time")
        }

        renderTimeOverlay() {
          var e = this;
          const {disabled: i, hourCycle: t, isTimePopoverOpen: a, locale: n, formatOptions: r} = this, d = (0, s.L)(n, t),
            l = this.getActivePartsWithFallback();
          return [(0, o.h)("div", {class: "time-header"}, this.renderTimeLabel()), (0, o.h)("button", {
            class: {
              "time-body": !0,
              "time-body-active": a
            },
            part: "time-button" + (a ? " active" : ""),
            "aria-expanded": "false",
            "aria-haspopup": "true",
            disabled: i,
            onClick: (c = (0, M.A)(function* (p) {
              const {popoverRef: h} = e;
              h && (e.isTimePopoverOpen = !0, h.present(new CustomEvent("ionShadowTarget", {detail: {ionShadowTarget: p.target}})), yield h.onWillDismiss(), e.isTimePopoverOpen = !1)
            }), function (h) {
              return c.apply(this, arguments)
            })
          }, (0, s.M)(n, l, d, null == r ? void 0 : r.time)), (0, o.h)("ion-popover", {
            alignment: "center",
            translucent: !0,
            overlayIndex: 1,
            arrow: !1,
            onWillPresent: c => {
              c.target.querySelectorAll("ion-picker-column").forEach(h => h.scrollActiveItemIntoView())
            },
            style: {"--offset-y": "-10px", "--min-width": "fit-content"},
            keyboardEvents: !0,
            ref: c => this.popoverRef = c
          }, this.renderWheelPicker("time"))];
          var c
        }

        getHeaderSelectedDateText() {
          var e;
          const {activeParts: i, formatOptions: t, multiple: a, titleSelectedDatesFormatter: n} = this,
            r = Array.isArray(i);
          let d;
          if (a && r && 1 !== i.length) {
            if (d = `${i.length} days`, void 0 !== n) try {
              d = n((0, s.u)(i))
            } catch (l) {
              (0, v.a)("Exception in provided `titleSelectedDatesFormatter`: ", l)
            }
          } else d = (0, s.N)(this.locale, this.getActivePartsWithFallback(), null !== (e = null == t ? void 0 : t.date) && void 0 !== e ? e : {
            weekday: "short",
            month: "short",
            day: "numeric"
          });
          return d
        }

        renderHeader(e = !0) {
          if (null !== this.el.querySelector('[slot="title"]') || this.showDefaultTitle) return (0, o.h)("div", {class: "datetime-header"}, (0, o.h)("div", {class: "datetime-title"}, (0, o.h)("slot", {name: "title"}, "Select Date")), e && (0, o.h)("div", {class: "datetime-selected-date"}, this.getHeaderSelectedDateText()))
        }

        renderTime() {
          const {presentation: e} = this;
          return (0, o.h)("div", {class: "datetime-time"}, "time" === e ? this.renderWheelPicker() : this.renderTimeOverlay())
        }

        renderCalendarViewMonthYearPicker() {
          return (0, o.h)("div", {class: "datetime-year"}, this.renderWheelView("month-year"))
        }

        renderDatetime(e) {
          const {presentation: i, preferWheel: t} = this;
          if (t && ("date" === i || "date-time" === i || "time-date" === i)) return [this.renderHeader(!1), this.renderWheelView(), this.renderFooter()];
          switch (i) {
            case"date-time":
              return [this.renderHeader(), this.renderCalendar(e), this.renderCalendarViewMonthYearPicker(), this.renderTime(), this.renderFooter()];
            case"time-date":
              return [this.renderHeader(), this.renderTime(), this.renderCalendar(e), this.renderCalendarViewMonthYearPicker(), this.renderFooter()];
            case"time":
              return [this.renderHeader(!1), this.renderTime(), this.renderFooter()];
            case"month":
            case"month-year":
            case"year":
              return [this.renderHeader(!1), this.renderWheelView(), this.renderFooter()];
            default:
              return [this.renderHeader(), this.renderCalendar(e), this.renderCalendarViewMonthYearPicker(), this.renderFooter()]
          }
        }

        render() {
          const {
              name: e,
              value: i,
              disabled: t,
              el: a,
              color: n,
              readonly: r,
              showMonthAndYear: d,
              preferWheel: l,
              presentation: c,
              size: p,
              isGridStyle: h
            } = this, g = (0, V.b)(this), b = "year" === c || "month" === c || "month-year" === c, m = d || b, f = d && !b,
            x = ("date" === c || "date-time" === c || "time-date" === c) && l;
          return (0, _.d)(!0, a, e, (0, s.O)(i), t), (0, o.h)(o.f, {
            key: "48313af4ec8e2a2666cd8c89932c5131dfa7b556",
            "aria-disabled": t ? "true" : null,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            class: Object.assign({}, (0, F.c)(n, {
              [g]: !0,
              "datetime-readonly": r,
              "datetime-disabled": t,
              "show-month-and-year": m,
              "month-year-picker-open": f,
              [`datetime-presentation-${c}`]: !0,
              [`datetime-size-${p}`]: !0,
              "datetime-prefer-wheel": x,
              "datetime-grid": h
            }))
          }, (0, o.h)("div", {
            key: "b72570048236415aed915488305046d987d51dcf",
            class: "intersection-tracker",
            ref: u => this.intersectionTrackerRef = u
          }), this.renderDatetime(g))
        }

        get el() {
          return (0, o.i)(this)
        }

        static get watchers() {
          return {
            formatOptions: ["formatOptionsChanged"],
            disabled: ["disabledChanged"],
            min: ["minChanged"],
            max: ["maxChanged"],
            presentation: ["presentationChanged"],
            yearValues: ["yearValuesChanged"],
            monthValues: ["monthValuesChanged"],
            dayValues: ["dayValuesChanged"],
            hourValues: ["hourValuesChanged"],
            minuteValues: ["minuteValuesChanged"],
            value: ["valueChanged"]
          }
        }
      };
    let pe = 0;
    const me = "datetime-cancel", ue = "datetime-confirm", w = "wheel-item", I = "active";
    N.style = {
      ios: ':host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled) .calendar-days-of-week,:host(.datetime-disabled) .datetime-time{opacity:0.4}:host(.datetime-readonly){pointer-events:none;}:host(.datetime-readonly) .calendar-action-buttons,:host(.datetime-readonly) .calendar-body,:host(.datetime-readonly) .datetime-year{pointer-events:initial}:host(.datetime-readonly) .calendar-day[disabled]:not(.calendar-day-constrained),:host(.datetime-readonly) .datetime-action-buttons ion-button[disabled]{opacity:1}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.datetime-action-buttons .datetime-action-buttons-container{display:-ms-flexbox;display:flex}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-button{--background:transparent}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.calendar-days-of-week .day-of-week{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:0;min-height:0;overflow:visible}.calendar-day{border-radius:50%;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day:focus{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons .calendar-month-year-toggle{color:var(--ion-color-base)}.calendar-month-year{min-width:0}.calendar-month-year-toggle{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;position:relative;border:0;outline:none;background:transparent;cursor:pointer;z-index:1}.calendar-month-year-toggle::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:-1}.calendar-month-year-toggle.ion-focused::after{background:currentColor}.calendar-month-year-toggle:disabled{opacity:0.3;pointer-events:none}.calendar-month-year-toggle ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0}.calendar-month-year-toggle #toggle-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}ion-picker{--highlight-background:var(--wheel-highlight-background);--highlight-border-radius:var(--wheel-highlight-border-radius);--fade-background-rgb:var(--wheel-fade-background-rgb)}:host{--background:var(--ion-color-light, #f4f5f8);--background-rgb:var(--ion-color-light-rgb, 244, 245, 248);--title-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}:host(.datetime-presentation-date-time:not(.datetime-prefer-wheel)),:host(.datetime-presentation-time-date:not(.datetime-prefer-wheel)),:host(.datetime-presentation-date:not(.datetime-prefer-wheel)){min-height:350px}:host .datetime-header{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px;border-bottom:0.55px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #cccccc));font-size:min(0.875rem, 22.4px)}:host .datetime-header .datetime-title{color:var(--title-color)}:host .datetime-header .datetime-selected-date{margin-top:10px}.calendar-month-year-toggle{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;min-height:44px;font-size:min(1rem, 25.6px);font-weight:600}.calendar-month-year-toggle.ion-focused::after{opacity:0.15}.calendar-month-year-toggle #toggle-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:10px;margin-bottom:10px}:host .calendar-action-buttons .calendar-month-year-toggle ion-icon,:host .calendar-action-buttons ion-buttons ion-button{color:var(--ion-color-base)}:host .calendar-action-buttons ion-buttons{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:0}:host .calendar-action-buttons ion-buttons ion-button{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host .calendar-days-of-week{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;color:var(--ion-color-step-300, var(--ion-text-color-step-700, #b3b3b3));font-size:min(0.75rem, 19.2px);font-weight:600;line-height:24px;text-transform:uppercase}@supports (border-radius: mod(1px, 1px)){.calendar-days-of-week .day-of-week{width:clamp(20px, calc(mod(min(1rem, 24px), 24px) * 10), 100%);height:24px;overflow:hidden}.calendar-day{border-radius:max(8px, mod(min(1rem, 24px), 24px) * 10)}}@supports ((border-radius: mod(1px, 1px)) and (background: -webkit-named-image(apple-pay-logo-black)) and (not (contain-intrinsic-size: none))) or (not (border-radius: mod(1px, 1px))){.calendar-days-of-week .day-of-week{width:auto;height:auto;overflow:initial}.calendar-day{border-radius:32px}}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;-ms-flex-align:center;align-items:center;height:calc(100% - 16px)}:host .calendar-day-wrapper{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;height:0;min-height:1rem}:host .calendar-day{width:40px;min-width:40px;height:40px;font-size:min(1.25rem, 32px)}.calendar-day.calendar-day-active{background:rgba(var(--ion-color-base-rgb), 0.2);font-size:min(1.375rem, 35.2px)}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-base);font-weight:600}:host .calendar-day.calendar-day-today.calendar-day-active{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:16px;font-size:min(1rem, 25.6px)}:host .datetime-time .time-header{font-weight:600}:host .datetime-buttons{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;border-top:0.55px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #cccccc))}:host .datetime-buttons ::slotted(ion-buttons),:host .datetime-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host .datetime-action-buttons{width:100%}',
      md: ':host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled) .calendar-days-of-week,:host(.datetime-disabled) .datetime-time{opacity:0.4}:host(.datetime-readonly){pointer-events:none;}:host(.datetime-readonly) .calendar-action-buttons,:host(.datetime-readonly) .calendar-body,:host(.datetime-readonly) .datetime-year{pointer-events:initial}:host(.datetime-readonly) .calendar-day[disabled]:not(.calendar-day-constrained),:host(.datetime-readonly) .datetime-action-buttons ion-button[disabled]{opacity:1}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.datetime-action-buttons .datetime-action-buttons-container{display:-ms-flexbox;display:flex}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-button{--background:transparent}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.calendar-days-of-week .day-of-week{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:0;min-height:0;overflow:visible}.calendar-day{border-radius:50%;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day:focus{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons .calendar-month-year-toggle{color:var(--ion-color-base)}.calendar-month-year{min-width:0}.calendar-month-year-toggle{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;position:relative;border:0;outline:none;background:transparent;cursor:pointer;z-index:1}.calendar-month-year-toggle::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:-1}.calendar-month-year-toggle.ion-focused::after{background:currentColor}.calendar-month-year-toggle:disabled{opacity:0.3;pointer-events:none}.calendar-month-year-toggle ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0}.calendar-month-year-toggle #toggle-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}ion-picker{--highlight-background:var(--wheel-highlight-background);--highlight-border-radius:var(--wheel-highlight-border-radius);--fade-background-rgb:var(--wheel-fade-background-rgb)}:host{--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #ffffff));--title-color:var(--ion-color-contrast)}:host .datetime-header{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:20px;background:var(--ion-color-base);color:var(--title-color)}:host .datetime-header .datetime-title{font-size:0.75rem;text-transform:uppercase}:host .datetime-header .datetime-selected-date{margin-top:30px;font-size:2.125rem}:host .calendar-action-buttons ion-button{--color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959))}.calendar-month-year-toggle{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:12px;min-height:48px;background:transparent;color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959));z-index:1}.calendar-month-year-toggle.ion-focused::after{opacity:0.04}.calendar-month-year-toggle ion-ripple-effect{color:currentColor}@media (any-hover: hover){.calendar-month-year-toggle.ion-activatable:not(.ion-focused):hover::after{background:currentColor;opacity:0.04}}:host .calendar-days-of-week{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:0px;padding-bottom:0px;color:var(--ion-color-step-500, var(--ion-text-color-step-500, gray));font-size:0.875rem;line-height:36px}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:4px;padding-bottom:4px;grid-template-rows:repeat(6, 1fr)}:host .calendar-day{width:42px;min-width:42px;height:42px;font-size:0.875rem}:host .calendar-day.calendar-day-today{border:1px solid var(--ion-color-base);color:var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-contrast)}.calendar-day.calendar-day-active{border:1px solid var(--ion-color-base);background:var(--ion-color-base)}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:8px}:host .time-header{color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959))}:host(.datetime-presentation-month) .datetime-year,:host(.datetime-presentation-year) .datetime-year,:host(.datetime-presentation-month-year) .datetime-year{margin-top:20px;margin-bottom:20px}:host .datetime-buttons{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:10px;padding-bottom:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}'
    };
    const Z = e => {
        const i = (0, j.c)(), t = (0, j.c)(), a = (0, j.c)();
        return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity", .01, "var(--backdrop-opacity)").beforeStyles({"pointer-events": "none"}).afterClearStyles(["pointer-events"]), a.addElement(e.querySelector(".picker-wrapper")).fromTo("transform", "translateY(100%)", "translateY(0%)"), i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([t, a])
      }, G = e => {
        const i = (0, j.c)(), t = (0, j.c)(), a = (0, j.c)();
        return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", .01), a.addElement(e.querySelector(".picker-wrapper")).fromTo("transform", "translateY(0%)", "translateY(100%)"), i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([t, a])
      }, X = class {
        constructor(e) {
          (0, o.r)(this, e), this.didPresent = (0, o.d)(this, "ionPickerDidPresent", 7), this.willPresent = (0, o.d)(this, "ionPickerWillPresent", 7), this.willDismiss = (0, o.d)(this, "ionPickerWillDismiss", 7), this.didDismiss = (0, o.d)(this, "ionPickerDidDismiss", 7), this.didPresentShorthand = (0, o.d)(this, "didPresent", 7), this.willPresentShorthand = (0, o.d)(this, "willPresent", 7), this.willDismissShorthand = (0, o.d)(this, "willDismiss", 7), this.didDismissShorthand = (0, o.d)(this, "didDismiss", 7), this.delegateController = (0, C.d)(this), this.lockController = (0, ae.c)(), this.triggerController = (0, C.e)(), this.onBackdropTap = () => {
            this.dismiss(void 0, C.B)
          }, this.dispatchCancelHandler = i => {
            if ((0, C.i)(i.detail.role)) {
              const a = this.buttons.find(n => "cancel" === n.role);
              this.callButtonHandler(a)
            }
          }, this.presented = !1, this.overlayIndex = void 0, this.delegate = void 0, this.hasController = !1, this.keyboardClose = !0, this.enterAnimation = void 0, this.leaveAnimation = void 0, this.buttons = [], this.columns = [], this.cssClass = void 0, this.duration = 0, this.showBackdrop = !0, this.backdropDismiss = !0, this.animated = !0, this.htmlAttributes = void 0, this.isOpen = !1, this.trigger = void 0
        }

        onIsOpenChange(e, i) {
          !0 === e && !1 === i ? this.present() : !1 === e && !0 === i && this.dismiss()
        }

        triggerChanged() {
          const {trigger: e, el: i, triggerController: t} = this;
          e && t.addClickListener(i, e)
        }

        connectedCallback() {
          (0, C.j)(this.el), this.triggerChanged()
        }

        disconnectedCallback() {
          this.triggerController.removeClickListener()
        }

        componentWillLoad() {
          (0, C.k)(this.el)
        }

        componentDidLoad() {
          (0, v.p)("ion-picker-legacy and ion-picker-legacy-column have been deprecated in favor of new versions of the ion-picker and ion-picker-column components. These new components display inline with your page content allowing for more presentation flexibility than before.", this.el), !0 === this.isOpen && (0, _.r)(() => this.present()), this.triggerChanged()
        }

        present() {
          var e = this;
          return (0, M.A)(function* () {
            const i = yield e.lockController.lock();
            yield e.delegateController.attachViewToDom(), yield(0, C.f)(e, "pickerEnter", Z, Z, void 0), e.duration > 0 && (e.durationTimeout = setTimeout(() => e.dismiss(), e.duration)), i()
          })()
        }

        dismiss(e, i) {
          var t = this;
          return (0, M.A)(function* () {
            const a = yield t.lockController.lock();
            t.durationTimeout && clearTimeout(t.durationTimeout);
            const n = yield(0, C.g)(t, e, i, "pickerLeave", G, G);
            return n && t.delegateController.removeViewFromDom(), a(), n
          })()
        }

        onDidDismiss() {
          return (0, C.h)(this.el, "ionPickerDidDismiss")
        }

        onWillDismiss() {
          return (0, C.h)(this.el, "ionPickerWillDismiss")
        }

        getColumn(e) {
          return Promise.resolve(this.columns.find(i => i.name === e))
        }

        buttonClick(e) {
          var i = this;
          return (0, M.A)(function* () {
            const t = e.role;
            return (0, C.i)(t) ? i.dismiss(void 0, t) : (yield i.callButtonHandler(e)) ? i.dismiss(i.getSelected(), e.role) : Promise.resolve()
          })()
        }

        callButtonHandler(e) {
          var i = this;
          return (0, M.A)(function* () {
            return !(e && !1 === (yield(0, C.s)(e.handler, i.getSelected())))
          })()
        }

        getSelected() {
          const e = {};
          return this.columns.forEach((i, t) => {
            const a = void 0 !== i.selectedIndex ? i.options[i.selectedIndex] : void 0;
            e[i.name] = {text: a ? a.text : void 0, value: a ? a.value : void 0, columnIndex: t}
          }), e
        }

        render() {
          const {htmlAttributes: e} = this, i = (0, V.b)(this);
          return (0, o.h)(o.f, Object.assign({
            key: "26e3144adcdf01605271d01e468bb4a75ce854b1",
            "aria-modal": "true",
            tabindex: "-1"
          }, e, {
            style: {zIndex: `${2e4 + this.overlayIndex}`},
            class: Object.assign({[i]: !0, [`picker-${i}`]: !0, "overlay-hidden": !0}, (0, F.g)(this.cssClass)),
            onIonBackdropTap: this.onBackdropTap,
            onIonPickerWillDismiss: this.dispatchCancelHandler
          }), (0, o.h)("ion-backdrop", {
            key: "fa212d21406606186cd95f8c7a4f119696ac8d4a",
            visible: this.showBackdrop,
            tappable: this.backdropDismiss
          }), (0, o.h)("div", {
            key: "19ea889f65cb6a68a9db26cf9f83c6587cfcf07e",
            tabindex: "0"
          }), (0, o.h)("div", {
            key: "5fc0f5d26915ba353b9f0335946f94b6fda95e1e",
            class: "picker-wrapper ion-overlay-wrapper",
            role: "dialog"
          }, (0, o.h)("div", {
            key: "3fa5bff4ac0013ef31845482a27a14caebbdcd2f",
            class: "picker-toolbar"
          }, this.buttons.map(t => (0, o.h)("div", {class: be(t)}, (0, o.h)("button", {
            type: "button",
            onClick: () => this.buttonClick(t),
            class: ye(t)
          }, t.text)))), (0, o.h)("div", {
            key: "2ff6376956d01dcd9ec01b8d6972dd4b37ffb1a1",
            class: "picker-columns"
          }, (0, o.h)("div", {
            key: "4adcef77429f10a3faa50b41d1eaf3404387997c",
            class: "picker-above-highlight"
          }), this.presented && this.columns.map(t => (0, o.h)("ion-picker-legacy-column", {col: t})), (0, o.h)("div", {
            key: "e0f37d3e9896eb2bc0f0aef4762a897130851963",
            class: "picker-below-highlight"
          }))), (0, o.h)("div", {key: "671bb7d0f487b0d7c7fa70388f8fa1de77448b9f", tabindex: "0"}))
        }

        get el() {
          return (0, o.i)(this)
        }

        static get watchers() {
          return {isOpen: ["onIsOpenChange"], trigger: ["triggerChanged"]}
        }
      }, be = e => ({[`picker-toolbar-${e.role}`]: void 0 !== e.role, "picker-toolbar-button": !0}),
      ye = e => Object.assign({"picker-button": !0, "ion-activatable": !0}, (0, F.g)(e.cssClass));
    X.style = {
      ios: ".sc-ion-picker-legacy-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.sc-ion-picker-legacy-ios-h{inset-inline-start:0}.overlay-hidden.sc-ion-picker-legacy-ios-h{display:none}.picker-wrapper.sc-ion-picker-legacy-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-legacy-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-legacy-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-legacy-ios:active,.picker-button.sc-ion-picker-legacy-ios:focus{outline:none}.picker-columns.sc-ion-picker-legacy-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-legacy-ios,.picker-below-highlight.sc-ion-picker-legacy-ios{display:none;pointer-events:none}.sc-ion-picker-legacy-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-legacy-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-legacy-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-legacy-ios:last-child .picker-button.sc-ion-picker-legacy-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-legacy-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-legacy-ios,.picker-button.ion-activated.sc-ion-picker-legacy-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #0054e9);font-size:16px}.picker-columns.sc-ion-picker-legacy-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-legacy-ios{top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}.picker-above-highlight.sc-ion-picker-legacy-ios{inset-inline-start:0}.picker-below-highlight.sc-ion-picker-legacy-ios{top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}.picker-below-highlight.sc-ion-picker-legacy-ios{inset-inline-start:0}",
      md: ".sc-ion-picker-legacy-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.sc-ion-picker-legacy-md-h{inset-inline-start:0}.overlay-hidden.sc-ion-picker-legacy-md-h{display:none}.picker-wrapper.sc-ion-picker-legacy-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-legacy-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-legacy-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-legacy-md:active,.picker-button.sc-ion-picker-legacy-md:focus{outline:none}.picker-columns.sc-ion-picker-legacy-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-legacy-md,.picker-below-highlight.sc-ion-picker-legacy-md{display:none;pointer-events:none}.sc-ion-picker-legacy-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-legacy-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-legacy-md,.picker-button.ion-activated.sc-ion-picker-legacy-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #0054e9);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}.picker-columns.sc-ion-picker-legacy-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-legacy-md{top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}.picker-above-highlight.sc-ion-picker-legacy-md{inset-inline-start:0}.picker-below-highlight.sc-ion-picker-legacy-md{top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}.picker-below-highlight.sc-ion-picker-legacy-md{inset-inline-start:0}"
    };
    const q = class {
      constructor(e) {
        (0, o.r)(this, e), this.ionPickerColChange = (0, o.d)(this, "ionPickerColChange", 7), this.optHeight = 0, this.rotateFactor = 0, this.scaleFactor = 1, this.velocity = 0, this.y = 0, this.noAnimate = !0, this.colDidChange = !1, this.col = void 0
      }

      colChanged() {
        this.colDidChange = !0
      }

      connectedCallback() {
        var e = this;
        return (0, M.A)(function* () {
          let i = 0, t = .81;
          "ios" === (0, V.b)(e) && (i = -.46, t = 1), e.rotateFactor = i, e.scaleFactor = t, e.gesture = (yield Promise.resolve().then(y.bind(y, 8607))).createGesture({
            el: e.el,
            gestureName: "picker-swipe",
            gesturePriority: 100,
            threshold: 0,
            passive: !1,
            onStart: n => e.onStart(n),
            onMove: n => e.onMove(n),
            onEnd: n => e.onEnd(n)
          }), e.gesture.enable(), e.tmrId = setTimeout(() => {
            e.noAnimate = !1, e.refresh(!0)
          }, 250)
        })()
      }

      componentDidLoad() {
        this.onDomChange()
      }

      componentDidUpdate() {
        this.colDidChange && (this.onDomChange(!0, !1), this.colDidChange = !1)
      }

      disconnectedCallback() {
        void 0 !== this.rafId && cancelAnimationFrame(this.rafId), this.tmrId && clearTimeout(this.tmrId), this.gesture && (this.gesture.destroy(), this.gesture = void 0)
      }

      emitColChange() {
        this.ionPickerColChange.emit(this.col)
      }

      setSelected(e, i) {
        const t = e > -1 ? -e * this.optHeight : 0;
        this.velocity = 0, void 0 !== this.rafId && cancelAnimationFrame(this.rafId), this.update(t, i, !0), this.emitColChange()
      }

      update(e, i, t) {
        if (!this.optsEl) return;
        let a = 0, n = 0;
        const {col: r, rotateFactor: d} = this, l = r.selectedIndex, c = r.selectedIndex = this.indexForY(-e),
          p = 0 === i ? "" : i + "ms", h = `scale(${this.scaleFactor})`, g = this.optsEl.children;
        for (let b = 0; b < g.length; b++) {
          const m = g[b], f = r.options[b], k = b * this.optHeight + e;
          let x = "";
          if (0 !== d) {
            const D = k * d;
            Math.abs(D) <= 90 ? (a = 0, n = 90, x = `rotateX(${D}deg) `) : a = -9999
          } else n = 0, a = k;
          const u = c === b;
          x += `translate3d(0px,${a}px,${n}px) `, 1 !== this.scaleFactor && !u && (x += h), this.noAnimate ? (f.duration = 0, m.style.transitionDuration = "") : i !== f.duration && (f.duration = i, m.style.transitionDuration = p), x !== f.transform && (f.transform = x), m.style.transform = x, f.selected = u, u ? m.classList.add(J) : m.classList.remove(J)
        }
        this.col.prevSelected = l, t && (this.y = e), this.lastIndex !== c && ((0, B.b)(), this.lastIndex = c)
      }

      decelerate() {
        if (0 !== this.velocity) {
          this.velocity *= ve, this.velocity = this.velocity > 0 ? Math.max(this.velocity, 1) : Math.min(this.velocity, -1);
          let e = this.y + this.velocity;
          e > this.minY ? (e = this.minY, this.velocity = 0) : e < this.maxY && (e = this.maxY, this.velocity = 0), this.update(e, 0, !0), Math.round(e) % this.optHeight != 0 || Math.abs(this.velocity) > 1 ? this.rafId = requestAnimationFrame(() => this.decelerate()) : (this.velocity = 0, this.emitColChange(), (0, B.h)())
        } else if (this.y % this.optHeight != 0) {
          const e = Math.abs(this.y % this.optHeight);
          this.velocity = e > this.optHeight / 2 ? 1 : -1, this.decelerate()
        }
      }

      indexForY(e) {
        return Math.min(Math.max(Math.abs(Math.round(e / this.optHeight)), 0), this.col.options.length - 1)
      }

      onStart(e) {
        e.event.cancelable && e.event.preventDefault(), e.event.stopPropagation(), (0, B.a)(), void 0 !== this.rafId && cancelAnimationFrame(this.rafId);
        const i = this.col.options;
        let t = i.length - 1, a = 0;
        for (let n = 0; n < i.length; n++) i[n].disabled || (t = Math.min(t, n), a = Math.max(a, n));
        this.minY = -t * this.optHeight, this.maxY = -a * this.optHeight
      }

      onMove(e) {
        e.event.cancelable && e.event.preventDefault(), e.event.stopPropagation();
        let i = this.y + e.deltaY;
        i > this.minY ? (i = Math.pow(i, .8), this.bounceFrom = i) : i < this.maxY ? (i += Math.pow(this.maxY - i, .9), this.bounceFrom = i) : this.bounceFrom = 0, this.update(i, 0, !1)
      }

      onEnd(e) {
        if (this.bounceFrom > 0) return this.update(this.minY, 100, !0), void this.emitColChange();
        if (this.bounceFrom < 0) return this.update(this.maxY, 100, !0), void this.emitColChange();
        if (this.velocity = (0, _.j)(-Q, 23 * e.velocityY, Q), 0 === this.velocity && 0 === e.deltaY) {
          const i = e.event.target.closest(".picker-opt");
          null != i && i.hasAttribute("opt-index") && this.setSelected(parseInt(i.getAttribute("opt-index"), 10), ee)
        } else {
          if (this.y += e.deltaY, Math.abs(e.velocityY) < .05) {
            const i = e.deltaY > 0, t = Math.abs(this.y) % this.optHeight / this.optHeight;
            i && t > .5 ? this.velocity = -1 * Math.abs(this.velocity) : !i && t <= .5 && (this.velocity = Math.abs(this.velocity))
          }
          this.decelerate()
        }
      }

      refresh(e, i) {
        var t;
        let a = this.col.options.length - 1, n = 0;
        const r = this.col.options;
        for (let l = 0; l < r.length; l++) r[l].disabled || (a = Math.min(a, l), n = Math.max(n, l));
        if (0 !== this.velocity) return;
        const d = (0, _.j)(a, null !== (t = this.col.selectedIndex) && void 0 !== t ? t : 0, n);
        if (this.col.prevSelected !== d || e) {
          const l = d * this.optHeight * -1, c = i ? ee : 0;
          this.velocity = 0, this.update(l, c, !0)
        }
      }

      onDomChange(e, i) {
        const t = this.optsEl;
        t && (this.optHeight = t.firstElementChild ? t.firstElementChild.clientHeight : 0), this.refresh(e, i)
      }

      render() {
        const e = this.col, i = (0, V.b)(this);
        return (0, o.h)(o.f, {
          key: "56289a294e5c580f3e7fe5fc12777aa7f80ad19b",
          class: Object.assign({
            [i]: !0,
            "picker-col": !0,
            "picker-opts-left": "left" === this.col.align,
            "picker-opts-right": "right" === this.col.align
          }, (0, F.g)(e.cssClass)),
          style: {"max-width": this.col.columnWidth}
        }, e.prefix && (0, o.h)("div", {
          key: "d21f44667b5df567d6879723fe643ea7c2c60bef",
          class: "picker-prefix",
          style: {width: e.prefixWidth}
        }, e.prefix), (0, o.h)("div", {
          key: "bb427e5f24fd832703926e0e847ad05567597262",
          class: "picker-opts",
          style: {maxWidth: e.optionsWidth},
          ref: t => this.optsEl = t
        }, e.options.map((t, a) => (0, o.h)("button", {
          "aria-label": t.ariaLabel,
          class: {"picker-opt": !0, "picker-opt-disabled": !!t.disabled},
          "opt-index": a
        }, t.text))), e.suffix && (0, o.h)("div", {
          key: "0413f7c074b6534b8967387ecb9957a79a267aff",
          class: "picker-suffix",
          style: {width: e.suffixWidth}
        }, e.suffix))
      }

      get el() {
        return (0, o.i)(this)
      }

      static get watchers() {
        return {col: ["colChanged"]}
      }
    }, J = "picker-opt-selected", ve = .97, Q = 90, ee = 150;
    q.style = {
      ios: ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt{inset-inline-start:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}:host-context([dir=rtl]) .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}",
      md: ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt{inset-inline-start:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #0054e9)}"
    }
  }
}]);
