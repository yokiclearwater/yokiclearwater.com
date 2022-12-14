!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports._vantaEffect = e())
    : (t._vantaEffect = e());
})("undefined" != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function i(s) {
      if (e[s]) return e[s].exports;
      var o = (e[s] = { i: s, l: !1, exports: {} });
      return t[s].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
    }
    return (
      (i.m = t),
      (i.c = e),
      (i.d = function (t, e, s) {
        i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
      }),
      (i.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (i.t = function (t, e) {
        if ((1 & e && (t = i(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (
          (i.r(s),
          Object.defineProperty(s, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            i.d(
              s,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return s;
      }),
      (i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return i.d(e, "a", e), e;
      }),
      (i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (i.p = ""),
      i((i.s = 10))
    );
  })({
    0: function (t, e, i) {
      "use strict";
      function s() {
        return "undefined" != typeof navigator
          ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ) || window.innerWidth < 600
          : null;
      }
      i.d(e, "e", function () {
        return s;
      }),
        i.d(e, "i", function () {
          return o;
        }),
        i.d(e, "h", function () {
          return n;
        }),
        i.d(e, "g", function () {
          return r;
        }),
        i.d(e, "f", function () {
          return h;
        }),
        i.d(e, "b", function () {
          return a;
        }),
        i.d(e, "c", function () {
          return l;
        }),
        i.d(e, "d", function () {
          return c;
        }),
        i.d(e, "a", function () {
          return p;
        }),
        (Number.prototype.clamp = function (t, e) {
          return Math.min(Math.max(this, t), e);
        });
      const o = (t) => t[Math.floor(Math.random() * t.length)];
      function n(t, e) {
        return (
          null == t && (t = 0),
          null == e && (e = 1),
          t + Math.random() * (e - t)
        );
      }
      function r(t, e) {
        return (
          null == t && (t = 0),
          null == e && (e = 1),
          Math.floor(t + Math.random() * (e - t + 1))
        );
      }
      const h = (t) => document.querySelector(t),
        a = (t) =>
          "number" == typeof t ? "#" + ("00000" + t.toString(16)).slice(-6) : t,
        l = (t, e = 1) => {
          const i = a(t),
            s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),
            o = s
              ? {
                  r: parseInt(s[1], 16),
                  g: parseInt(s[2], 16),
                  b: parseInt(s[3], 16),
                }
              : null;
          return "rgba(" + o.r + "," + o.g + "," + o.b + "," + e + ")";
        },
        c = (t) => 0.299 * t.r + 0.587 * t.g + 0.114 * t.b;
      function p(t) {
        for (; t.children && t.children.length > 0; )
          p(t.children[0]), t.remove(t.children[0]);
        t.geometry && t.geometry.dispose(),
          t.material &&
            (Object.keys(t.material).forEach((e) => {
              t.material[e] &&
                null !== t.material[e] &&
                "function" == typeof t.material[e].dispose &&
                t.material[e].dispose();
            }),
            t.material.dispose());
      }
    },
    1: function (t, e, i) {
      "use strict";
      i.d(e, "a", function () {
        return r;
      });
      var s = i(0);
      const o = "object" == typeof window;
      let n = (o && window.THREE) || {};
      o && !window.VANTA && (window.VANTA = {});
      const r = (o && window.VANTA) || {};
      (r.register = (t, e) => (r[t] = (t) => new e(t))), (r.version = "0.5.22");
      const h = function () {
        return (
          Array.prototype.unshift.call(arguments, "[VANTA]"),
          console.error.apply(this, arguments)
        );
      };
      (r.VantaBase = class {
        constructor(t = {}) {
          if (!o) return !1;
          (r.current = this),
            (this.windowMouseMoveWrapper =
              this.windowMouseMoveWrapper.bind(this)),
            (this.windowTouchWrapper = this.windowTouchWrapper.bind(this)),
            (this.windowGyroWrapper = this.windowGyroWrapper.bind(this)),
            (this.resize = this.resize.bind(this)),
            (this.animationLoop = this.animationLoop.bind(this)),
            (this.restart = this.restart.bind(this));
          const e =
            "function" == typeof this.getDefaultOptions
              ? this.getDefaultOptions()
              : this.defaultOptions;
          if (
            ((this.options = Object.assign(
              {
                mouseControls: !0,
                touchControls: !0,
                gyroControls: !1,
                minHeight: 200,
                minWidth: 200,
                scale: 1,
                scaleMobile: 1,
              },
              e
            )),
            (t instanceof HTMLElement || "string" == typeof t) &&
              (t = { el: t }),
            Object.assign(this.options, t),
            this.options.THREE && (n = this.options.THREE),
            (this.el = this.options.el),
            null == this.el)
          )
            h('Instance needs "el" param!');
          else if (!(this.options.el instanceof HTMLElement)) {
            const t = this.el;
            if (((this.el = Object(s.f)(t)), !this.el))
              return void h("Cannot find element", t);
          }
          this.prepareEl(), this.initThree(), this.setSize();
          try {
            this.init();
          } catch (t) {
            return (
              h("Init error", t),
              this.renderer &&
                this.renderer.domElement &&
                this.el.removeChild(this.renderer.domElement),
              void (
                this.options.backgroundColor &&
                (console.log("[VANTA] Falling back to backgroundColor"),
                (this.el.style.background = Object(s.b)(
                  this.options.backgroundColor
                )))
              )
            );
          }
          this.initMouse(), this.resize(), this.animationLoop();
          const i = window.addEventListener;
          i("resize", this.resize),
            window.requestAnimationFrame(this.resize),
            this.options.mouseControls &&
              (i("scroll", this.windowMouseMoveWrapper),
              i("mousemove", this.windowMouseMoveWrapper)),
            this.options.touchControls &&
              (i("touchstart", this.windowTouchWrapper),
              i("touchmove", this.windowTouchWrapper)),
            this.options.gyroControls &&
              i("deviceorientation", this.windowGyroWrapper);
        }
        setOptions(t = {}) {
          Object.assign(this.options, t), this.triggerMouseMove();
        }
        prepareEl() {
          let t, e;
          if ("undefined" != typeof Node && Node.TEXT_NODE)
            for (t = 0; t < this.el.childNodes.length; t++) {
              const e = this.el.childNodes[t];
              if (e.nodeType === Node.TEXT_NODE) {
                const t = document.createElement("span");
                (t.textContent = e.textContent),
                  e.parentElement.insertBefore(t, e),
                  e.remove();
              }
            }
          for (t = 0; t < this.el.children.length; t++)
            (e = this.el.children[t]),
              "static" === getComputedStyle(e).position &&
                (e.style.position = "relative"),
              "auto" === getComputedStyle(e).zIndex && (e.style.zIndex = 1);
          "static" === getComputedStyle(this.el).position &&
            (this.el.style.position = "relative");
        }
        applyCanvasStyles(t, e = {}) {
          Object.assign(t.style, {
            position: "absolute",
            zIndex: 0,
            top: 0,
            left: 0,
            background: "",
          }),
            Object.assign(t.style, e),
            t.classList.add("vanta-canvas");
        }
        initThree() {
          n.WebGLRenderer
            ? ((this.renderer = new n.WebGLRenderer({
                alpha: !0,
                antialias: !0,
              })),
              this.el.appendChild(this.renderer.domElement),
              this.applyCanvasStyles(this.renderer.domElement),
              isNaN(this.options.backgroundAlpha) &&
                (this.options.backgroundAlpha = 1),
              (this.scene = new n.Scene()))
            : console.warn("[VANTA] No THREE defined on window");
        }
        getCanvasElement() {
          return this.renderer
            ? this.renderer.domElement
            : this.p5renderer
            ? this.p5renderer.canvas
            : void 0;
        }
        getCanvasRect() {
          const t = this.getCanvasElement();
          return !!t && t.getBoundingClientRect();
        }
        windowMouseMoveWrapper(t) {
          const e = this.getCanvasRect();
          if (!e) return !1;
          const i = t.clientX - e.left,
            s = t.clientY - e.top;
          i >= 0 &&
            s >= 0 &&
            i <= e.width &&
            s <= e.height &&
            ((this.mouseX = i),
            (this.mouseY = s),
            this.options.mouseEase || this.triggerMouseMove(i, s));
        }
        windowTouchWrapper(t) {
          const e = this.getCanvasRect();
          if (!e) return !1;
          if (1 === t.touches.length) {
            const i = t.touches[0].clientX - e.left,
              s = t.touches[0].clientY - e.top;
            i >= 0 &&
              s >= 0 &&
              i <= e.width &&
              s <= e.height &&
              ((this.mouseX = i),
              (this.mouseY = s),
              this.options.mouseEase || this.triggerMouseMove(i, s));
          }
        }
        windowGyroWrapper(t) {
          const e = this.getCanvasRect();
          if (!e) return !1;
          const i = Math.round(2 * t.alpha) - e.left,
            s = Math.round(2 * t.beta) - e.top;
          i >= 0 &&
            s >= 0 &&
            i <= e.width &&
            s <= e.height &&
            ((this.mouseX = i),
            (this.mouseY = s),
            this.options.mouseEase || this.triggerMouseMove(i, s));
        }
        triggerMouseMove(t, e) {
          void 0 === t &&
            void 0 === e &&
            (this.options.mouseEase
              ? ((t = this.mouseEaseX), (e = this.mouseEaseY))
              : ((t = this.mouseX), (e = this.mouseY))),
            this.uniforms &&
              ((this.uniforms.iMouse.value.x = t / this.scale),
              (this.uniforms.iMouse.value.y = e / this.scale));
          const i = t / this.width,
            s = e / this.height;
          "function" == typeof this.onMouseMove && this.onMouseMove(i, s);
        }
        setSize() {
          this.scale || (this.scale = 1),
            Object(s.e)() && this.options.scaleMobile
              ? (this.scale = this.options.scaleMobile)
              : this.options.scale && (this.scale = this.options.scale),
            (this.width = Math.max(this.el.offsetWidth, this.options.minWidth)),
            (this.height = Math.max(
              this.el.offsetHeight,
              this.options.minHeight
            ));
        }
        initMouse() {
          ((!this.mouseX && !this.mouseY) ||
            (this.mouseX === this.options.minWidth / 2 &&
              this.mouseY === this.options.minHeight / 2)) &&
            ((this.mouseX = this.width / 2),
            (this.mouseY = this.height / 2),
            this.triggerMouseMove(this.mouseX, this.mouseY));
        }
        resize() {
          this.setSize(),
            this.camera &&
              ((this.camera.aspect = this.width / this.height),
              "function" == typeof this.camera.updateProjectionMatrix &&
                this.camera.updateProjectionMatrix()),
            this.renderer &&
              (this.renderer.setSize(this.width, this.height),
              this.renderer.setPixelRatio(
                window.devicePixelRatio / this.scale
              )),
            "function" == typeof this.onResize && this.onResize();
        }
        isOnScreen() {
          const t = this.el.offsetHeight,
            e = this.el.getBoundingClientRect(),
            i =
              window.pageYOffset ||
              (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollTop,
            s = e.top + i;
          return s - window.innerHeight <= i && i <= s + t;
        }
        animationLoop() {
          return (
            this.t || (this.t = 0),
            (this.t += 1),
            this.t2 || (this.t2 = 0),
            (this.t2 += this.options.speed || 1),
            this.uniforms && (this.uniforms.iTime.value = 0.016667 * this.t2),
            this.options.mouseEase &&
              ((this.mouseEaseX = this.mouseEaseX || this.mouseX || 0),
              (this.mouseEaseY = this.mouseEaseY || this.mouseY || 0),
              Math.abs(this.mouseEaseX - this.mouseX) +
                Math.abs(this.mouseEaseY - this.mouseY) >
                0.1 &&
                ((this.mouseEaseX += 0.05 * (this.mouseX - this.mouseEaseX)),
                (this.mouseEaseY += 0.05 * (this.mouseY - this.mouseEaseY)),
                this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))),
            (this.isOnScreen() || this.options.forceAnimate) &&
              ("function" == typeof this.onUpdate && this.onUpdate(),
              this.scene &&
                this.camera &&
                (this.renderer.render(this.scene, this.camera),
                this.renderer.setClearColor(
                  this.options.backgroundColor,
                  this.options.backgroundAlpha
                )),
              this.fps && this.fps.update && this.fps.update(),
              "function" == typeof this.afterRender && this.afterRender()),
            (this.req = window.requestAnimationFrame(this.animationLoop))
          );
        }
        restart() {
          if (this.scene)
            for (; this.scene.children.length; )
              this.scene.remove(this.scene.children[0]);
          "function" == typeof this.onRestart && this.onRestart(), this.init();
        }
        init() {
          "function" == typeof this.onInit && this.onInit();
        }
        destroy() {
          "function" == typeof this.onDestroy && this.onDestroy();
          const t = window.removeEventListener;
          t("touchstart", this.windowTouchWrapper),
            t("touchmove", this.windowTouchWrapper),
            t("scroll", this.windowMouseMoveWrapper),
            t("mousemove", this.windowMouseMoveWrapper),
            t("deviceorientation", this.windowGyroWrapper),
            t("resize", this.resize),
            window.cancelAnimationFrame(this.req);
          const e = this.scene;
          e && e.children && Object(s.a)(e),
            this.renderer &&
              (this.renderer.domElement &&
                this.el.removeChild(this.renderer.domElement),
              (this.renderer = null),
              (this.scene = null)),
            r.current === this && (r.current = null);
        }
      }),
        (e.b = r.VantaBase);
    },
    10: function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i(1),
        o = i(0);
      const n = "object" == typeof window;
      let r = n && window.THREE;
      class h extends s.b {
        static initClass() {
          this.prototype.defaultOptions = {
            color: 16727937,
            color2: 16777215,
            size: 1,
            backgroundColor: 2299196,
            points: 10,
            maxDistance: 20,
            spacing: 15,
            showDots: !0,
          };
        }
        constructor(t) {
          (r = t.THREE || r), super(t);
        }
        genPoint(t, e, i) {
          let s;
          if ((this.points || (this.points = []), this.options.showDots)) {
            const t = new r.SphereGeometry(0.25, 12, 12),
              e = new r.MeshLambertMaterial({ color: this.options.color });
            s = new r.Mesh(t, e);
          } else s = new r.Object3D();
          return (
            this.cont.add(s),
            (s.ox = t),
            (s.oy = e),
            (s.oz = i),
            s.position.set(t, e, i),
            (s.r = 0),
            this.points.push(s)
          );
        }
        onInit() {
          (this.cont = new r.Group()),
            this.cont.position.set(-50, -20, 0),
            this.scene.add(this.cont);
          let t = this.options.points,
            { spacing: e } = this.options;
          const i = t * t * 2;
          (this.linePositions = new Float32Array(i * i * 3)),
            (this.lineColors = new Float32Array(i * i * 3));
          const s = Object(o.d)(new r.Color(this.options.color)),
            n = Object(o.d)(new r.Color(this.options.backgroundColor));
          this.blending = s > n ? "additive" : "subtractive";
          const h = new r.BufferGeometry();
          h.setAttribute(
            "position",
            new r.BufferAttribute(this.linePositions, 3).setUsage(
              r.DynamicDrawUsage
            )
          ),
            h.setAttribute(
              "color",
              new r.BufferAttribute(this.lineColors, 3).setUsage(
                r.DynamicDrawUsage
              )
            ),
            h.computeBoundingSphere(),
            h.setDrawRange(0, 0);
          const a = new r.LineBasicMaterial({
            vertexColors: r.VertexColors,
            blending: "additive" === this.blending ? r.AdditiveBlending : null,
            transparent: !0,
          });
          (this.linesMesh = new r.LineSegments(h, a)),
            this.cont.add(this.linesMesh);
          for (let i = 0; i <= t; i++)
            for (let s = 0; s <= t; s++) {
              const o = 0,
                n = (i - t / 2) * e;
              let r = (s - t / 2) * e;
              this.genPoint(n, o, r);
            }
          (this.camera = new r.PerspectiveCamera(
            20,
            this.width / this.height,
            0.01,
            1e4
          )),
            this.camera.position.set(50, 100, 150),
            this.scene.add(this.camera);
          const l = new r.AmbientLight(16777215, 0.75);
          this.scene.add(l),
            (this.spot = new r.SpotLight(16777215, 1)),
            this.spot.position.set(0, 200, 0),
            (this.spot.distance = 400),
            (this.spot.target = this.cont),
            this.scene.add(this.spot),
            (this.cont2 = new r.Group()),
            this.cont2.position.set(0, 15, 0),
            this.scene.add(this.cont2);
          const c = new r.LineBasicMaterial({ color: this.options.color2 }),
            p = new r.Geometry();
          for (let t = 0; t < 80; t++) {
            const t = Object(o.h)(18, 24),
              e = t + Object(o.h)(1, 6),
              i = Object(o.h)(-1, 1),
              s = Math.sqrt(1 - i * i),
              n = Object(o.h)(0, 2 * Math.PI),
              h = Math.sin(n) * s,
              a = Math.cos(n) * s;
            p.vertices.push(new r.Vector3(a * t, h * t, i * t)),
              p.vertices.push(new r.Vector3(a * e, h * e, i * e));
          }
          (this.linesMesh2 = new r.LineSegments(p, c)),
            this.linesMesh2.position.set(0, 0, 0),
            this.cont2.add(this.linesMesh2);
          const u = new r.LineBasicMaterial({
              color: this.options.color2,
              linewidth: 2,
            }),
            d = new r.Geometry();
          d.vertices.push(new r.Vector3(0, 30, 0)),
            d.vertices.push(new r.Vector3(0, -30, 0));
          for (let t = 0; t < 4; t++) {
            let e = 0.15 * Math.cos((t / 4) * Math.PI * 2),
              i = 0.15 * Math.sin((t / 4) * Math.PI * 2),
              s = [
                17.9, 12, 8, 5, 3, 2, 1.5, 1.1, 0.8, 0.6, 0.45, 0.3, 0.2, 0.1,
                0.05, 0.03, 0.02, 0.01,
              ];
            for (let t = 0; t < s.length; t++) {
              let o = s[t],
                n = 6 * (t + 1);
              d.vertices.push(new r.Vector3(e * n, o, i * n)),
                d.vertices.push(new r.Vector3(e * n, -o, i * n));
            }
          }
          (this.linesMesh3 = new r.LineSegments(d, u)),
            this.linesMesh3.position.set(0, 0, 0),
            this.cont2.add(this.linesMesh3);
          const m = new r.LineBasicMaterial({ color: this.options.color }),
            f = new r.SphereGeometry(18 * this.options.size, 18, 14),
            w = new r.EdgesGeometry(f);
          (this.sphere = new r.LineSegments(w, m)),
            this.sphere.position.set(0, 0, 0),
            this.cont2.add(this.sphere),
            (this.cont2.rotation.x = -0.25);
        }
        onUpdate() {
          let t;
          null != this.helper && this.helper.update(),
            null != this.controls && this.controls.update();
          const e = this.camera;
          Math.abs(e.tx - e.position.x) > 0.01 &&
            ((t = e.tx - e.position.x), (e.position.x += 0.02 * t)),
            Math.abs(e.ty - e.position.y) > 0.01 &&
              ((t = e.ty - e.position.y), (e.position.y += 0.02 * t)),
            n && window.innerWidth < 480
              ? e.lookAt(new r.Vector3(-10, 0, 0))
              : n && window.innerWidth < 720
              ? e.lookAt(new r.Vector3(-20, 0, 0))
              : e.lookAt(new r.Vector3(-40, 0, 0));
          let i = 0,
            s = 0,
            o = 0;
          const h = new r.Color(this.options.backgroundColor),
            a = new r.Color(this.options.color),
            l = new r.Color(this.options.color2),
            c = a.clone().sub(h);
          this.rayCaster &&
            this.rayCaster.setFromCamera(
              new r.Vector2(this.rcMouseX, this.rcMouseY),
              this.camera
            ),
            this.linesMesh2 &&
              ((this.linesMesh2.rotation.z += 0.002),
              (this.linesMesh2.rotation.x += 8e-4),
              (this.linesMesh2.rotation.y += 5e-4)),
            this.sphere &&
              ((this.sphere.rotation.y += 0.002),
              (this.linesMesh3.rotation.y -= 0.004));
          for (let t = 0; t < this.points.length; t++) {
            let e, n;
            const l = this.points[t];
            n = this.rayCaster
              ? this.rayCaster.ray.distanceToPoint(l.position)
              : 1e3;
            const p = n.clamp(5, 15);
            (l.scale.z = (0.25 * (15 - p)).clamp(1, 100)),
              (l.scale.x = l.scale.y = l.scale.z),
              (l.position.y =
                2 *
                Math.sin(
                  l.position.x / 10 + 0.01 * this.t + (l.position.z / 10) * 0.5
                ));
            for (let n = t; n < this.points.length; n++) {
              const t = this.points[n],
                p = l.position.x - t.position.x,
                u = l.position.y - t.position.y,
                d = l.position.z - t.position.z;
              if (
                ((e = Math.sqrt(p * p + u * u + d * d)),
                e < this.options.maxDistance)
              ) {
                let n,
                  p = 2 * (1 - e / this.options.maxDistance);
                (p = p.clamp(0, 1)),
                  (n =
                    "additive" === this.blending
                      ? new r.Color(0).lerp(c, p)
                      : h.clone().lerp(a, p)),
                  (this.linePositions[i++] = l.position.x),
                  (this.linePositions[i++] = l.position.y),
                  (this.linePositions[i++] = l.position.z),
                  (this.linePositions[i++] = t.position.x),
                  (this.linePositions[i++] = t.position.y),
                  (this.linePositions[i++] = t.position.z),
                  (this.lineColors[s++] = n.r),
                  (this.lineColors[s++] = n.g),
                  (this.lineColors[s++] = n.b),
                  (this.lineColors[s++] = n.r),
                  (this.lineColors[s++] = n.g),
                  (this.lineColors[s++] = n.b),
                  o++;
              }
            }
          }
          return (
            this.linesMesh.geometry.setDrawRange(0, 2 * o),
            (this.linesMesh.geometry.attributes.position.needsUpdate = !0),
            (this.linesMesh.geometry.attributes.color.needsUpdate = !0),
            this.sphere.material.color.set(a),
            this.linesMesh2.material.color.set(l),
            this.linesMesh3.material.color.set(l),
            0.001 * this.t
          );
        }
        onMouseMove(t, e) {
          const i = this.camera;
          i.oy ||
            ((i.oy = i.position.y),
            (i.ox = i.position.x),
            (i.oz = i.position.z));
          const s = Math.atan2(i.oz, i.ox),
            o = Math.sqrt(i.oz * i.oz + i.ox * i.ox),
            n = s + 1.5 * (t - 0.5) * (this.options.mouseCoeffX || 1);
          (i.tz = o * Math.sin(n)),
            (i.tx = o * Math.cos(n)),
            (i.ty = i.oy + 80 * (e - 0.5) * (this.options.mouseCoeffY || 1)),
            this.rayCaster,
            (this.rcMouseX = 2 * t - 1),
            (this.rcMouseY = 2 * -t + 1);
        }
        onRestart() {
          this.scene.remove(this.linesMesh), (this.points = []);
        }
      }
      h.initClass(), (e.default = s.a.register("GLOBE", h));
    },
  });
});
