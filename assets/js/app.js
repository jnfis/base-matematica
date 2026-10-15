/* ==========================================================================
   Base Matemática · aplicación
   Router por hash, render de lecciones, ejercicios autocorregidos,
   progreso en localStorage, guía del cuaderno y tema claro/oscuro.
   ========================================================================== */
(function () {
  'use strict';

  const CURSO = window.CURSO || { semanas: [], bloques: [], canales: [] };
  const STORE = 'basemat.progreso.v1';
  const THEME = 'basemat.tema';

  /* ---------- utilidades ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = n => String(n).padStart(2, '0');
  const hoy = () => { const d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); };
  const cssId = s => String(s).replace(/[^a-zA-Z0-9_-]/g, '_');
  const letras = 'abcdefgh';
  const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  function fechaCorta(iso) {
    if (!iso) return '';
    const p = iso.split('-');
    if (p.length < 3) return iso;
    return parseInt(p[2], 10) + ' ' + MESES[parseInt(p[1], 10) - 1] + ' ' + p[0];
  }

  /* ---------- estado persistente ---------- */
  function defaults() {
    return { v: 1, completadas: {}, ejercicios: {}, cuaderno: {}, dias: [], tests: {}, creado: hoy() };
  }
  function load() {
    try {
      const raw = localStorage.getItem(STORE);
      if (!raw) return defaults();
      const s = JSON.parse(raw);
      return Object.assign(defaults(), s);
    } catch (e) { return defaults(); }
  }
  let state = load();
  function save() { try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* sin almacenamiento */ } }
  function actividad() {
    const d = hoy();
    if (!state.dias.includes(d)) state.dias.push(d);
    save();
  }

  /* ---------- índice del curso ---------- */
  const semanas = (CURSO.semanas || []).slice().sort((a, b) => a.n - b.n);
  const sesiones = [];
  semanas.forEach(w => (w.sesiones || []).forEach((s, i) => { s.semana = w.n; s.indice = i; sesiones.push(s); }));
  const sesionPorId = {}; sesiones.forEach(s => { sesionPorId[s.id] = s; });
  const semanaPorN = {}; semanas.forEach(w => { semanaPorN[w.n] = w; });
  const bloques = CURSO.bloques || [];
  const bloquePorLetra = {}; bloques.forEach(b => { bloquePorLetra[b.letra] = b; });
  const ejercicioPorKey = {};

  const TOTAL = sesiones.length;
  function completada(id) { return !!state.completadas[id]; }
  function progresoTotal() {
    const done = sesiones.filter(s => completada(s.id)).length;
    return { done, total: TOTAL, pct: TOTAL ? Math.round(100 * done / TOTAL) : 0 };
  }
  function progresoSemana(n) {
    const w = semanaPorN[n];
    if (!w) return { done: 0, total: 0 };
    const done = w.sesiones.filter(s => completada(s.id)).length;
    return { done, total: w.sesiones.length };
  }
  function proximaPendiente() { return sesiones.find(s => !completada(s.id)) || null; }
  function vecinos(id) {
    const i = sesiones.findIndex(s => s.id === id);
    return { ant: i > 0 ? sesiones[i - 1] : null, sig: i >= 0 && i < sesiones.length - 1 ? sesiones[i + 1] : null };
  }
  function rachaActual() {
    const dias = new Set(state.dias);
    if (!dias.size) return 0;
    const d = new Date();
    let racha = 0;
    // Si hoy no hay actividad, la racha cuenta desde ayer.
    if (!dias.has(hoy())) d.setDate(d.getDate() - 1);
    for (;;) {
      const iso = d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
      if (!dias.has(iso)) break;
      racha++;
      d.setDate(d.getDate() - 1);
    }
    return racha;
  }

  /* ---------- tema ---------- */
  function temaActual() { return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
  function aplicarTema(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem(THEME, t); } catch (e) { }
    const b = $('#tema-btn');
    if (b) b.setAttribute('aria-label', t === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  }

  /* ---------- fórmulas ---------- */
  function renderMath(el) {
    if (!el) return;
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(el, {
          delimiters: [
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
          ],
          throwOnError: false,
          strict: false
        });
      } catch (e) { /* se muestra el texto plano */ }
    }
  }
  function sinKatex(html) {
    if (window.renderMathInElement) return html;
    return html
      .replace(/\\\[([\s\S]*?)\\\]/g, (m, t) => '<div class="math-fallback">' + t + '</div>')
      .replace(/\\\(([\s\S]*?)\\\)/g, (m, t) => '<code>' + t + '</code>');
  }

  /* ---------- evaluación de ejercicios ---------- */
  function normalizarNumero(str) {
    let s = String(str == null ? '' : str).trim().toLowerCase().replace(/−/g, '-');
    s = s.replace(/\s+/g, '').replace(/\$/g, '').replace(/%$/, '').replace(/^\+/, '');
    s = s.replace(/,/g, '.');
    if (/^-?\d+(\.\d+)?\/-?\d+(\.\d+)?$/.test(s)) {
      const p = s.split('/');
      const a = parseFloat(p[0]), b = parseFloat(p[1]);
      if (!b) return NaN;
      return a / b;
    }
    if (/^-?(\d+\.?\d*|\.\d+)$/.test(s)) return parseFloat(s);
    return NaN;
  }
  function normalizarTexto(str) {
    return String(str == null ? '' : str).toLowerCase().trim().replace(/\s+/g, ' ')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  function evaluar(ej, valor) {
    if (ej.tipo === 'opcion') return Number(valor) === Number(ej.correcta);
    if (ej.tipo === 'num') {
      const v = normalizarNumero(valor);
      if (isNaN(v)) return null;
      const r = Number(ej.respuesta);
      const tol = ej.tol != null ? ej.tol : Math.max(0.011, Math.abs(r) * 0.002);
      return Math.abs(v - r) <= tol;
    }
    if (ej.tipo === 'texto') {
      // compacto: respuestas algebraicas; se ignoran espacios y signos de multiplicación,
      // y los exponentes ² ³ se escriben como ^2 ^3.
      const norm = s => {
        let v = normalizarTexto(s).replace(/−/g, '-');
        if (ej.compacto) v = v.replace(/[\s*·]/g, '').replace(/²/g, '^2').replace(/³/g, '^3').replace(/\*\*/g, '^');
        return v;
      };
      const v = norm(valor);
      if (!v) return null;
      const acc = Array.isArray(ej.respuesta) ? ej.respuesta : [ej.respuesta];
      return acc.some(a => norm(a) === v);
    }
    return null;
  }

  /* ---------- HTML de ejercicios ---------- */
  function feedbackHtml(ej, st) {
    if (st.ok) {
      return '<div class="ex-feedback ok"><div class="fb-title">Correcto.</div>' + (ej.solucion || '') + '</div>';
    }
    if (st.visto) {
      return '<div class="ex-feedback info"><div class="fb-title">Solución</div>' + (ej.solucion || '') + '<p class="ex-help">Anota en tu cuaderno por qué funciona este camino y vuelve a intentarlo en el repaso de la semana.</p></div>';
    }
    if (st.intentos > 0) {
      const pista = ej.pista ? '<p>' + ej.pista + '</p>' : '<p>Revisa el procedimiento del ejemplo y vuelve a intentarlo.</p>';
      const mas = st.intentos >= 2 ? '<p class="ex-help">Si quieres, mira la solución y luego resuélvelo de nuevo en tu cuaderno.</p>' : '';
      return '<div class="ex-feedback bad"><div class="fb-title">Todavía no.</div>' + pista + mas + '</div>';
    }
    return '';
  }

  function exerciseHtml(ej, key, n) {
    ejercicioPorKey[key] = ej;
    const st = state.ejercicios[key] || {};
    const cls = st.ok ? ' ok' : (st.intentos > 0 && !st.visto ? ' bad' : '');
    let input = '';
    if (ej.tipo === 'opcion') {
      input = '<div class="opts" role="group" aria-label="Alternativas">' + ej.opciones.map((o, i) => {
        let c = 'opt';
        if (st.ok && i === Number(ej.correcta)) c += ' ok';
        else if (st.visto && i === Number(ej.correcta)) c += ' ok';
        else if (!st.ok && st.ultima === i) c += ' bad';
        const dis = (st.ok || st.visto) ? ' disabled' : '';
        return '<button type="button" class="' + c + '" data-action="opt" data-key="' + key + '" data-i="' + i + '"' + dis + '>' +
          '<span class="opt-letter">' + letras[i] + '</span><span>' + o + '</span></button>';
      }).join('') + '</div>';
    } else {
      const ph = ej.placeholder || (ej.tipo === 'num' ? 'Tu respuesta' : 'Escribe aquí');
      const dis = (st.ok || st.visto) ? ' disabled' : '';
      input = '<input type="text" inputmode="' + (ej.tipo === 'num' ? 'decimal' : 'text') + '" autocomplete="off" data-key="' + key + '" placeholder="' + esc(ph) + '" value="' + esc(st.valor || '') + '"' + dis + ' aria-label="Respuesta del ejercicio ' + n + '">' +
        (ej.unidad ? '<span class="ex-unit">' + esc(ej.unidad) + '</span>' : '');
    }
    const puedeResponder = !st.ok && !st.visto;
    const actions = (ej.tipo === 'opcion' || !puedeResponder) ? '' :
      '<button type="button" class="btn btn-primary btn-sm" data-action="check" data-key="' + key + '">Comprobar</button>';
    const solBtn = (puedeResponder && (st.intentos || 0) >= 2) ?
      '<button type="button" class="btn btn-ghost btn-sm" data-action="solucion" data-key="' + key + '">Ver solución</button>' : '';
    const status = st.ok ? '<span class="ex-status ok">Correcto</span>' : (st.visto ? '<span class="ex-status">Solución vista</span>' : (st.intentos > 0 ? '<span class="ex-status bad">Intento ' + st.intentos + '</span>' : ''));
    const help = (ej.tipo === 'num' && puedeResponder && !st.intentos) ? '<p class="ex-help">Decimales con coma o punto. Fracciones como 3/4. Sin separador de miles.</p>' : '';
    return '<div class="ex' + cls + '" id="ex-' + cssId(key) + '" data-key="' + key + '" data-n="' + n + '">' +
      '<div class="ex-head"><span class="ex-num">Ejercicio ' + n + '</span>' + status + '</div>' +
      '<div class="ex-body">' + ej.enunciado + '</div>' +
      '<div class="ex-input">' + input + '</div>' +
      ((actions || solBtn) ? '<div class="ex-actions">' + actions + solBtn + '</div>' : '') +
      help + feedbackHtml(ej, st) +
      '</div>';
  }

  function rerenderEx(key) {
    const old = $('#ex-' + cssId(key));
    if (!old) return;
    const n = old.getAttribute('data-n');
    const tmp = document.createElement('div');
    tmp.innerHTML = sinKatex(exerciseHtml(ejercicioPorKey[key], key, n));
    const nuevo = tmp.firstElementChild;
    old.replaceWith(nuevo);
    renderMath(nuevo);
    return nuevo;
  }

  function mensajeTemporal(key, texto) {
    const ex = $('#ex-' + cssId(key));
    if (!ex) return;
    let fb = $('.ex-feedback.temp', ex);
    if (!fb) {
      fb = document.createElement('div');
      fb.className = 'ex-feedback info temp';
      ex.appendChild(fb);
    }
    fb.textContent = texto;
  }

  function comprobar(key, valor) {
    const ej = ejercicioPorKey[key];
    if (!ej) return;
    const r = evaluar(ej, valor);
    if (r === null) {
      mensajeTemporal(key, ej.tipo === 'num'
        ? 'Escribe un número. Puedes usar coma o punto para los decimales, o una fracción como 3/4.'
        : 'Escribe una respuesta antes de comprobar.');
      return;
    }
    const st = state.ejercicios[key] || { intentos: 0 };
    st.intentos = (st.intentos || 0) + 1;
    st.valor = String(valor);
    if (ej.tipo === 'opcion') st.ultima = Number(valor);
    st.ok = !!r;
    st.fecha = hoy();
    state.ejercicios[key] = st;
    actividad();
    const el = rerenderEx(key);
    if (el && !st.ok && ej.tipo !== 'opcion') {
      const inp = $('input', el);
      if (inp) { inp.focus(); inp.select(); }
    }
    actualizarTestResumen();
  }

  function verSolucion(key) {
    const st = state.ejercicios[key] || { intentos: 0 };
    st.visto = true;
    state.ejercicios[key] = st;
    actividad();
    rerenderEx(key);
    actualizarTestResumen();
  }

  /* ---------- tests (repaso semanal, diagnóstico, simulacro) ---------- */
  let testActivo = null; // { id, keys, ejercicios }

  function resultadoTest() {
    if (!testActivo) return null;
    const keys = testActivo.keys;
    let ok = 0, resp = 0;
    const areas = {};
    keys.forEach((k, i) => {
      const st = state.ejercicios[k] || {};
      const ej = testActivo.ejercicios[i];
      const a = ej.area || 'General';
      areas[a] = areas[a] || { ok: 0, total: 0 };
      areas[a].total++;
      if (st.ok) { ok++; areas[a].ok++; }
      if (st.ok || st.visto || st.intentos) resp++;
    });
    return { ok, total: keys.length, respondidas: resp, areas };
  }

  function testResumenHtml(final) {
    const r = resultadoTest();
    if (!r) return '';
    const guardado = state.tests[testActivo.id];
    if (!final && !guardado) {
      return '<div class="card test-result"><p><strong>' + r.respondidas + ' de ' + r.total + '</strong> respondidas.</p>' +
        '<p class="msg">Cuando termines, pulsa <em>Ver mi resultado</em>. Puedes dejar preguntas sin responder: contarán como no logradas.</p>' +
        '<div class="data-actions"><button type="button" class="btn btn-primary" data-action="test-result">Ver mi resultado</button></div></div>';
    }
    const res = guardado || r;
    const pct = Math.round(100 * res.ok / res.total);
    let nota = '';
    if (pct >= 85) nota = 'Excelente. Esta parte está firme: sigue adelante.';
    else if (pct >= 65) nota = 'Bien. Repasa las áreas marcadas antes de seguir.';
    else nota = 'Esta parte todavía no está firme. Vuelve a las sesiones marcadas, resuelve de nuevo en el cuaderno y repite el test.';
    const areas = Object.keys(res.areas || {}).map(a => {
      const x = res.areas[a];
      const p = Math.round(100 * x.ok / x.total);
      return '<li class="' + (p < 70 ? 'weak' : '') + '"><span>' + esc(a) + '</span><span class="mono">' + x.ok + '/' + x.total + ' · ' + p + '%</span></li>';
    }).join('');
    return '<div class="card test-result">' +
      '<div class="score"><span class="score-num">' + res.ok + ' / ' + res.total + '</span><span class="score-label">' + pct + '% correcto' + (guardado && guardado.fecha ? ' · ' + fechaCorta(guardado.fecha) : '') + '</span></div>' +
      '<p>' + nota + '</p>' +
      (areas ? '<ul class="area-list">' + areas + '</ul>' : '') +
      '<div class="data-actions" style="margin-top:14px"><button type="button" class="btn btn-ghost btn-sm" data-action="test-reset">Reiniciar este test</button></div>' +
      '</div>';
  }

  function actualizarTestResumen() {
    const box = $('#test-resumen');
    if (!box || !testActivo) return;
    box.innerHTML = testResumenHtml(false);
  }

  function guardarResultadoTest() {
    const r = resultadoTest();
    if (!r) return;
    state.tests[testActivo.id] = { ok: r.ok, total: r.total, areas: r.areas, fecha: hoy() };
    actividad();
    const box = $('#test-resumen');
    if (box) box.innerHTML = testResumenHtml(true);
    // Los ejercicios sin responder quedan con la solución visible.
    testActivo.keys.forEach(k => {
      const st = state.ejercicios[k] || {};
      if (!st.ok && !st.visto) { st.visto = true; st.intentos = st.intentos || 0; state.ejercicios[k] = st; rerenderEx(k); }
    });
    save();
    const box2 = $('#test-resumen');
    if (box2) box2.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function reiniciarTest() {
    if (!testActivo) return;
    if (!window.confirm('¿Reiniciar este test? Se borrarán tus respuestas de este test (no el resto de tu progreso).')) return;
    testActivo.keys.forEach(k => { delete state.ejercicios[k]; });
    delete state.tests[testActivo.id];
    save();
    render();
  }

  /* ---------- barra lateral ---------- */
  function renderSidebar(activeId, activeWeek) {
    const sb = $('#sidebar');
    if (!sb) return;
    const p = progresoTotal();
    const prox = proximaPendiente();
    const semanaAbierta = activeWeek || (activeId && sesionPorId[activeId] ? sesionPorId[activeId].semana : (prox ? prox.semana : 1));
    let html = '<div class="sb-head">' +
      '<div class="sb-title">Tu avance <span>' + p.done + ' / ' + p.total + '</span></div>' +
      '<div class="bar"><div class="bar-fill" style="width:' + p.pct + '%"></div></div>' +
      (prox ? '<div class="sb-next"><a href="#/sesion/' + prox.id + '">Siguiente: ' + prox.id + ' · ' + esc(prox.titulo) + '</a></div>'
            : '<div class="sb-next">Plan completo. Repite el simulacro cuando quieras.</div>') +
      '</div>';
    let bloqueActual = null;
    semanas.forEach(w => {
      if (w.bloque !== bloqueActual) {
        bloqueActual = w.bloque;
        const b = bloquePorLetra[w.bloque];
        html += '<div class="sb-bloque">Bloque ' + esc(w.bloque) + (b ? ' · ' + esc(b.titulo) : '') + '</div>';
      }
      const ps = progresoSemana(w.n);
      html += '<details class="sb-week"' + (w.n === semanaAbierta ? ' open' : '') + '>' +
        '<summary><span class="sb-week-num">' + pad(w.n) + '</span><span class="sb-week-title">' + esc(w.titulo) + '</span>' +
        '<span class="sb-week-count' + (ps.done === ps.total ? ' full' : '') + '">' + ps.done + '/' + ps.total + '</span></summary><ul>';
      w.sesiones.forEach(s => {
        const done = completada(s.id);
        const cur = prox && prox.id === s.id;
        html += '<li><a class="sb-link' + (s.id === activeId ? ' active' : '') + '" href="#/sesion/' + s.id + '">' +
          '<span class="dot' + (done ? ' done' : (cur ? ' current' : '')) + '"></span><span>' + s.id + ' · ' + esc(s.titulo) + '</span></a></li>';
      });
      html += '</ul></details>';
    });
    sb.innerHTML = html;
  }

  function actualizarPill() {
    const p = progresoTotal();
    const pill = $('#pill-progreso');
    if (pill) pill.textContent = p.done + '/' + p.total + ' sesiones · ' + p.pct + '%';
    const f = $('#footer-conteo');
    if (f) f.textContent = semanas.length + ' semanas · ' + TOTAL + ' sesiones';
  }

  /* ---------- páginas ---------- */
  function navActiva(route) {
    $$('#nav a').forEach(a => a.classList.toggle('active', a.getAttribute('data-route') === route));
  }

  function setMain(html) {
    const main = $('#main');
    main.innerHTML = sinKatex(html);
    renderMath(main);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function paginaInicio() {
    const p = progresoTotal();
    const prox = proximaPendiente();
    const racha = rachaActual();
    const cta = prox
      ? '<a class="btn btn-primary" href="#/sesion/' + prox.id + '">' + (p.done ? 'Continuar con la sesión ' + prox.id : 'Empezar por la sesión 1.1') + '</a>'
      : '<a class="btn btn-primary" href="#/sesion/12.4">Repetir el simulacro final</a>';
    const bloquesHtml = bloques.map(b => {
      const done = b.semanas.reduce((acc, n) => acc + progresoSemana(n).done, 0);
      const total = b.semanas.reduce((acc, n) => acc + progresoSemana(n).total, 0);
      return '<a class="bloque-card" href="#/semana/' + b.semanas[0] + '">' +
        '<div class="bloque-letra">' + esc(b.letra) + '</div>' +
        '<div><h3>' + esc(b.titulo) + '</h3><p>' + esc(b.desc) + '</p><p style="margin-top:4px"><small>Prepara: ' + esc(b.prepara) + '</small></p></div>' +
        '<div class="bloque-semanas">Semanas ' + b.semanas[0] + '–' + b.semanas[b.semanas.length - 1] + '<br>' + done + '/' + total + ' sesiones</div></a>';
    }).join('');
    const canales = (CURSO.canales || []).map(c =>
      '<a class="canal" href="' + esc(c.url) + '" target="_blank" rel="noopener"><strong>' + esc(c.nombre) + '</strong><span>' + esc(c.desc) + '</span></a>').join('');
    const diag = state.tests['diagnostico'];
    const diagTxt = diag ? 'Tu último resultado: <strong>' + diag.ok + ' de ' + diag.total + '</strong> (' + fechaCorta(diag.fecha) + '). Puedes repetirlo cuando quieras.'
      : 'Son ' + (CURSO.diagnostico ? CURSO.diagnostico.ejercicios.length : 16) + ' preguntas, unos 20 minutos. Te dice en qué semanas poner más atención. Repítelo al final para ver cuánto avanzaste.';

    return '<div class="content-wide">' +
      '<section class="hero">' +
      '<div class="eyebrow">Plan de nivelación · 12 semanas · ' + TOTAL + ' sesiones</div>' +
      '<h1>Llega al primer día de clases con la base <em>lista</em>.</h1>' +
      '<p class="lead">Un plan ligero para recuperar la matemática que olvidaste y anticipar lo que viene en Ingeniería Industrial: números, álgebra, funciones, lógica y una probada de cálculo. Una hora al día, cinco días a la semana, con tu cuaderno al lado.</p>' +
      '<div class="hero-actions">' + cta + '<a class="btn" href="#/plan">Ver el plan completo</a><a class="btn btn-ghost" href="#/diagnostico">Diagnóstico inicial</a></div>' +
      '<div class="stats">' +
      '<div class="stat"><div class="stat-label">Progreso</div><div class="stat-value">' + p.pct + '%</div><div class="stat-sub">' + p.done + ' de ' + p.total + ' sesiones</div></div>' +
      '<div class="stat"><div class="stat-label">Ritmo</div><div class="stat-value">5 × 60′</div><div class="stat-sub">cinco sesiones por semana</div></div>' +
      '<div class="stat"><div class="stat-label">Racha</div><div class="stat-value">' + racha + '</div><div class="stat-sub">' + (racha === 1 ? 'día seguido' : 'días seguidos') + '</div></div>' +
      '<div class="stat"><div class="stat-label">Días activos</div><div class="stat-value">' + state.dias.length + '</div><div class="stat-sub">desde el ' + fechaCorta(state.creado) + '</div></div>' +
      '</div></section>' +

      '<h2 style="margin-top:0">Cómo funciona cada sesión</h2>' +
      '<div class="steps">' +
      '<div class="step"><div class="step-n">1</div><h3>Lee y mira los ejemplos</h3><p>Cada sesión explica una sola idea, con ejemplos resueltos paso a paso. Unos 15 a 20 minutos de lectura tranquila.</p></div>' +
      '<div class="step"><div class="step-n">2</div><h3>Resuelve en tu cuaderno</h3><p>Copia la fórmula clave y resuelve cada ejercicio a mano antes de escribir la respuesta en pantalla. La guía del cuaderno te dice qué anotar.</p></div>' +
      '<div class="step"><div class="step-n">3</div><h3>Comprueba y marca la sesión</h3><p>Sabrás al instante si acertaste y verás la solución. Al terminar, marca la sesión como completada: el avance queda guardado en este navegador.</p></div>' +
      '</div>' +

      '<h2>Tu ruta en cinco bloques</h2>' +
      '<p class="lead" style="font-size:1rem">Cada bloque prepara ramos concretos de la malla. El orden importa: cada semana usa lo de la anterior.</p>' +
      '<div class="bloques">' + bloquesHtml + '</div>' +

      '<h2>Diagnóstico inicial (opcional)</h2>' +
      '<div class="card"><p>' + diagTxt + '</p><a class="btn btn-sm" href="#/diagnostico">' + (diag ? 'Repetir el diagnóstico' : 'Hacer el diagnóstico') + '</a></div>' +

      '<h2>Canales en español que complementan el plan</h2>' +
      '<p class="lead" style="font-size:1rem">Cada sesión enlaza búsquedas específicas en YouTube. Estos son los canales en los que más conviene quedarse.</p>' +
      '<div class="canales">' + canales + '</div>' +
      '</div>';
  }

  function paginaPlan() {
    const cards = semanas.map(w => {
      const ps = progresoSemana(w.n);
      const b = bloquePorLetra[w.bloque];
      return '<div class="week-card' + (ps.done === ps.total ? ' done' : '') + '">' +
        '<div class="week-card-head"><h3><a href="#/semana/' + w.n + '">Semana ' + w.n + ' · ' + esc(w.titulo) + '</a></h3><span class="sb-week-count' + (ps.done === ps.total ? ' full' : '') + '">' + ps.done + '/' + ps.total + '</span></div>' +
        '<p class="sub">' + esc(w.subtitulo) + '</p>' +
        '<div class="bar"><div class="bar-fill' + (ps.done === ps.total ? ' success' : '') + '" style="width:' + (ps.total ? Math.round(100 * ps.done / ps.total) : 0) + '%"></div></div>' +
        '<ol>' + w.sesiones.map(s => '<li><a href="#/sesion/' + s.id + '" class="' + (completada(s.id) ? 'done' : '') + '"><span class="dot' + (completada(s.id) ? ' done' : '') + '"></span><span>' + s.id + ' · ' + esc(s.titulo) + '</span></a></li>').join('') + '</ol>' +
        '<div class="eyebrow" style="margin:6px 0 0">Bloque ' + esc(w.bloque) + (b ? ' · ' + esc(b.titulo) : '') + '</div>' +
        '</div>';
    }).join('');
    return '<div class="content-wide">' +
      '<div class="eyebrow">Plan completo</div><h1>Doce semanas, una idea por sesión.</h1>' +
      '<p class="lead">Cuatro sesiones de contenido y una de repaso con mini test cada semana. Si una semana se te hace pesada, repite el repaso antes de avanzar: es mejor llegar firme que llegar rápido.</p>' +
      '<div class="week-grid" style="margin-top:28px">' + cards + '</div></div>';
  }

  function paginaSemana(n) {
    const w = semanaPorN[n];
    if (!w) return paginaNoEncontrada();
    const b = bloquePorLetra[w.bloque];
    const ps = progresoSemana(n);
    const lista = w.sesiones.map((s, i) => '<a class="session-row' + (completada(s.id) ? ' done' : '') + '" href="#/sesion/' + s.id + '">' +
      '<span class="n">' + s.id + '</span><div><h3>' + esc(s.titulo) + '</h3><p>' + esc(s.objetivo || '') + '</p></div>' +
      '<span class="dur">' + (s.duracion || 60) + ' min' + (completada(s.id) ? ' · hecha' : '') + '</span></a>').join('');
    const resumen = (w.resumen || []).map(r => '<div class="resumen-item"><span class="t">' + r.t + '</span><span class="f">\\(' + r.f + '\\)</span></div>').join('');
    const ant = semanaPorN[n - 1], sig = semanaPorN[n + 1];
    return '<div class="content">' +
      '<div class="eyebrow">Semana ' + n + ' · Bloque ' + esc(w.bloque) + (b ? ' · ' + esc(b.titulo) : '') + ' · ' + ps.done + '/' + ps.total + ' sesiones</div>' +
      '<h1>' + esc(w.titulo) + '</h1>' +
      '<p class="lead">' + esc(w.subtitulo) + '</p>' +
      (w.meta ? '<div class="callout"><div class="callout-label">Por qué esta semana importa</div><p>' + w.meta + '</p></div>' : '') +
      '<div class="session-list">' + lista + '</div>' +
      (resumen ? '<h2>Fórmulas y reglas de la semana</h2><p class="ex-intro">Cópialas en una hoja resumen de tu cuaderno al terminar la semana.</p><div class="resumen-list">' + resumen + '</div>' : '') +
      '<div class="lesson-nav" style="margin-top:36px">' +
      (ant ? '<a href="#/semana/' + ant.n + '"><small>Semana anterior</small>' + esc(ant.titulo) + '</a>' : '<span></span>') +
      (sig ? '<a class="next" href="#/semana/' + sig.n + '"><small>Semana siguiente</small>' + esc(sig.titulo) + '</a>' : '') +
      '</div></div>';
  }

  function bloqueHtml(b) {
    const labels = { concepto: 'Concepto', ejemplo: 'Ejemplo resuelto', tip: 'Truco', error: 'Error común' };
    const tipo = labels[b.tipo] ? b.tipo : 'concepto';
    return '<div class="block block-' + tipo + '"><div class="block-label">' + labels[tipo] + '</div>' +
      (b.titulo ? '<h3>' + b.titulo + '</h3>' : '') + (b.html || '') + '</div>';
  }

  function videosHtml(videos) {
    if (!videos || !videos.length) return '';
    return '<section class="videos"><h2>Si quieres verlo explicado en video</h2><ul class="video-list">' + videos.map(v => {
      const url = v.url || ('https://www.youtube.com/results?search_query=' + encodeURIComponent(v.q || v.titulo));
      return '<li><a href="' + esc(url) + '" target="_blank" rel="noopener"><span class="video-ico" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span><span>' + esc(v.titulo) + (v.q ? '<small>Búsqueda en YouTube: ' + esc(v.q) + '</small>' : '<small>Abre en una pestaña nueva</small>') + '</span></a></li>';
    }).join('') + '</ul></section>';
  }

  function cuadernoHtml(sesionId, items) {
    if (!items || !items.length) return '';
    const st = state.cuaderno[sesionId] || {};
    return '<section class="notebook"><h2><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h12a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2z"/><path d="M8 4v16M12 9h4M12 13h4"/></svg>En tu cuaderno</h2>' +
      '<p class="intro">Hazlo a mano. Escribir el procedimiento es lo que fija la idea; la pantalla solo comprueba.</p>' +
      '<ul class="check-list">' + items.map((t, i) => '<li><label class="' + (st[i] ? 'done' : '') + '"><input type="checkbox" data-cuaderno="' + sesionId + '" data-i="' + i + '"' + (st[i] ? ' checked' : '') + '><span>' + t + '</span></label></li>').join('') + '</ul></section>';
  }

  function paginaSesion(id) {
    const s = sesionPorId[id];
    if (!s) return paginaNoEncontrada();
    const w = semanaPorN[s.semana];
    const v = vecinos(id);
    const done = completada(id);
    const esTest = s.tipo === 'test';
    testActivo = null;
    const keys = (s.ejercicios || []).map((e, i) => id + ':' + i);
    if (esTest) testActivo = { id: id, keys: keys, ejercicios: s.ejercicios || [] };

    const ejercicios = (s.ejercicios || []).map((e, i) => exerciseHtml(e, keys[i], i + 1)).join('');
    const bloquesHtml = (s.bloques || []).map(bloqueHtml).join('');

    let html = '<div class="content">' +
      '<div class="eyebrow">Semana ' + s.semana + ' · ' + esc(w ? w.titulo : '') + ' · Sesión ' + s.id + ' · ' + (s.duracion || 60) + ' min</div>' +
      '<h1>' + esc(s.titulo) + '</h1>' +
      '<div class="meta-row">' + (done ? '<span class="chip success">Completada el ' + fechaCorta(state.completadas[id]) + '</span>' : '<span class="chip">Pendiente</span>') +
      (esTest ? '<span class="chip primary">Mini test · ' + keys.length + ' preguntas</span>' : '<span class="chip primary">' + keys.length + ' ejercicios</span>') + '</div>' +
      (s.objetivo ? '<p class="lead">' + s.objetivo + '</p>' : '') +
      (s.porque ? '<div class="callout"><div class="callout-label">Por qué te sirve</div><p>' + s.porque + '</p></div>' : '') +
      (s.intro ? '<div class="card" style="margin-bottom:18px">' + s.intro + '</div>' : '') +
      bloquesHtml;

    if (keys.length) {
      html += '<section class="ex-section"><h2>' + (esTest ? 'Test de la semana' : 'Practica') + '</h2>' +
        '<p class="ex-intro">' + (esTest
          ? 'Resuelve todo en el cuaderno primero, sin mirar las lecciones. Luego responde aquí y pide el resultado al final.'
          : 'Resuelve cada uno en el cuaderno antes de escribir la respuesta. Si fallas dos veces, aparece la solución.') + '</p>' +
        ejercicios +
        (esTest ? '<div id="test-resumen">' + testResumenHtml(false) + '</div>' : '') +
        '</section>';
    }

    html += cuadernoHtml(id, s.cuaderno);
    html += videosHtml(s.videos);

    html += '<div class="lesson-footer">' +
      (s.cierre ? '<p class="cierre">' + s.cierre + '</p>' : '') +
      '<div class="complete-row">' +
      (done
        ? '<button type="button" class="btn btn-success" data-action="completar" data-id="' + id + '">Sesión completada</button><span class="hint">Pulsa de nuevo si quieres marcarla como pendiente.</span>'
        : '<button type="button" class="btn btn-primary" data-action="completar" data-id="' + id + '">Marcar sesión como completada</button><span class="hint">Márcala cuando hayas resuelto los ejercicios en tu cuaderno.</span>') +
      '</div>' +
      '<div class="lesson-nav">' +
      (v.ant ? '<a href="#/sesion/' + v.ant.id + '"><small>Anterior · ' + v.ant.id + '</small>' + esc(v.ant.titulo) + '</a>' : '<span></span>') +
      (v.sig ? '<a class="next" href="#/sesion/' + v.sig.id + '"><small>Siguiente · ' + v.sig.id + '</small>' + esc(v.sig.titulo) + '</a>' : '<a class="next" href="#/progreso"><small>Fin del plan</small>Ver mi progreso</a>') +
      '</div></div></div>';
    return html;
  }

  function paginaDiagnostico() {
    const d = CURSO.diagnostico;
    if (!d) return paginaNoEncontrada();
    const keys = d.ejercicios.map((e, i) => 'diag:' + i);
    testActivo = { id: 'diagnostico', keys: keys, ejercicios: d.ejercicios };
    const ejercicios = d.ejercicios.map((e, i) => exerciseHtml(e, keys[i], i + 1)).join('');
    return '<div class="content">' +
      '<div class="eyebrow">Diagnóstico inicial · ' + keys.length + ' preguntas · 20 min</div>' +
      '<h1>' + esc(d.titulo) + '</h1>' +
      '<div class="card" style="margin-bottom:22px">' + d.intro + '</div>' +
      '<section class="ex-section" style="margin-top:0">' + ejercicios + '<div id="test-resumen">' + testResumenHtml(false) + '</div></section>' +
      '<div class="lesson-nav" style="margin-top:30px"><a href="#/"><small>Inicio</small>Volver al inicio</a><a class="next" href="#/sesion/1.1"><small>Empezar</small>Sesión 1.1</a></div>' +
      '</div>';
  }

  function paginaFormulario() {
    const partes = semanas.map(w => {
      const items = (w.resumen || []).map(r => '<div class="resumen-item"><span class="t">' + r.t + '</span><span class="f">\\(' + r.f + '\\)</span></div>').join('');
      if (!items) return '';
      return '<h2><a href="#/semana/' + w.n + '">Semana ' + w.n + ' · ' + esc(w.titulo) + '</a></h2><div class="resumen-list">' + items + '</div>';
    }).join('');
    return '<div class="content">' +
      '<div class="eyebrow">Formulario</div><h1>Todas las reglas del plan en una página.</h1>' +
      '<p class="lead">Úsalo para armar la hoja resumen de tu cuaderno y para repasar antes de cada mini test. Memorizar no es la meta: entender de dónde sale cada regla sí.</p>' +
      partes + '</div>';
  }

  function paginaProgreso() {
    const p = progresoTotal();
    const keys = Object.keys(state.ejercicios);
    const okCount = keys.filter(k => state.ejercicios[k].ok).length;
    const intentos = keys.reduce((a, k) => a + (state.ejercicios[k].intentos || 0), 0);
    const racha = rachaActual();
    const bars = semanas.map(w => {
      const ps = progresoSemana(w.n);
      const pct = ps.total ? Math.round(100 * ps.done / ps.total) : 0;
      return '<div class="week-bar"><span class="lbl"><a href="#/semana/' + w.n + '">S' + w.n + ' · ' + esc(w.titulo) + '</a></span><div class="bar"><div class="bar-fill' + (pct === 100 ? ' success' : '') + '" style="width:' + pct + '%"></div></div><span class="val">' + ps.done + '/' + ps.total + '</span></div>';
    }).join('');
    const tests = Object.keys(state.tests).map(id => {
      const t = state.tests[id];
      const nombre = id === 'diagnostico' ? 'Diagnóstico inicial' : (sesionPorId[id] ? 'Sesión ' + id + ' · ' + sesionPorId[id].titulo : id);
      const href = id === 'diagnostico' ? '#/diagnostico' : '#/sesion/' + id;
      return '<li><span><a href="' + href + '">' + esc(nombre) + '</a></span><span class="mono">' + t.ok + '/' + t.total + ' · ' + Math.round(100 * t.ok / t.total) + '% · ' + fechaCorta(t.fecha) + '</span></li>';
    }).join('');
    return '<div class="content">' +
      '<div class="eyebrow">Progreso</div><h1>Lo que ya tienes hecho.</h1>' +
      '<div class="stats" style="margin-top:18px">' +
      '<div class="stat"><div class="stat-label">Sesiones</div><div class="stat-value">' + p.done + '</div><div class="stat-sub">de ' + p.total + ' · ' + p.pct + '%</div></div>' +
      '<div class="stat"><div class="stat-label">Ejercicios correctos</div><div class="stat-value">' + okCount + '</div><div class="stat-sub">' + intentos + ' intentos en total</div></div>' +
      '<div class="stat"><div class="stat-label">Racha</div><div class="stat-value">' + racha + '</div><div class="stat-sub">' + (racha === 1 ? 'día seguido' : 'días seguidos') + '</div></div>' +
      '<div class="stat"><div class="stat-label">Días activos</div><div class="stat-value">' + state.dias.length + '</div><div class="stat-sub">desde el ' + fechaCorta(state.creado) + '</div></div>' +
      '</div>' +
      '<h2>Por semana</h2><div class="week-bars">' + bars + '</div>' +
      '<h2>Tests</h2>' + (tests ? '<ul class="area-list">' + tests + '</ul>' : '<p class="empty">Todavía no has pedido el resultado de ningún test.</p>') +
      '<h2>Tus datos</h2>' +
      '<div class="card"><p>El progreso se guarda solo en este navegador y en esta dirección. Si abres el sitio desde otro lugar (por ejemplo, primero desde tu computador y después desde GitHub Pages), exporta aquí e importa allá.</p>' +
      '<div class="data-actions"><button type="button" class="btn btn-sm" data-action="export">Exportar progreso</button><button type="button" class="btn btn-sm" data-action="import">Importar progreso</button><button type="button" class="btn btn-ghost btn-sm" data-action="reset">Borrar todo</button><input type="file" id="import-file" accept="application/json" hidden></div>' +
      '<div class="msg" id="data-msg"></div></div>' +
      '</div>';
  }

  function paginaNoEncontrada() {
    return '<div class="content"><h1>No encontré esa página.</h1><p><a href="#/">Volver al inicio</a></p></div>';
  }

  /* ---------- datos: exportar / importar / borrar ---------- */
  function exportar() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'base-matematica-progreso-' + hoy() + '.json';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    const m = $('#data-msg'); if (m) m.textContent = 'Archivo descargado. Guárdalo donde lo encuentres después.';
  }
  function importarArchivo(file) {
    const r = new FileReader();
    r.onload = () => {
      try {
        const data = JSON.parse(r.result);
        if (!data || typeof data !== 'object' || !data.completadas || !data.ejercicios) throw new Error('formato');
        if (!window.confirm('Esto reemplaza el progreso guardado en este navegador por el del archivo. ¿Continuar?')) return;
        state = Object.assign(defaults(), data);
        save();
        render();
        const m = $('#data-msg'); if (m) m.textContent = 'Progreso importado.';
      } catch (e) {
        const m = $('#data-msg'); if (m) m.textContent = 'Ese archivo no parece un progreso exportado desde aquí.';
      }
    };
    r.readAsText(file);
  }
  function borrarTodo() {
    if (!window.confirm('¿Borrar todo tu progreso en este navegador? Esta acción no se puede deshacer. Si quieres conservarlo, exporta primero.')) return;
    state = defaults();
    save();
    render();
  }

  /* ---------- router ---------- */
  function ruta() {
    const h = (location.hash || '#/').replace(/^#/, '');
    const partes = h.split('/').filter(Boolean);
    return { seccion: partes[0] || '', arg: partes.slice(1).join('/') };
  }

  function render() {
    const r = ruta();
    testActivo = null;
    let html = '', route = '', activeId = null, activeWeek = null;
    switch (r.seccion) {
      case '': route = 'home'; html = paginaInicio(); break;
      case 'plan': route = 'plan'; html = paginaPlan(); break;
      case 'semana': route = 'plan'; activeWeek = parseInt(r.arg, 10); html = paginaSemana(activeWeek); break;
      case 'sesion': route = 'plan'; activeId = decodeURIComponent(r.arg); html = paginaSesion(activeId); break;
      case 'formulario': route = 'formulario'; html = paginaFormulario(); break;
      case 'progreso': route = 'progreso'; html = paginaProgreso(); break;
      case 'diagnostico': route = 'home'; html = paginaDiagnostico(); break;
      default: html = paginaNoEncontrada();
    }
    setMain(html);
    navActiva(route);
    renderSidebar(activeId, activeWeek);
    actualizarPill();
    cerrarMenu();
    const t = r.seccion === 'sesion' && sesionPorId[activeId] ? sesionPorId[activeId].id + ' · ' + sesionPorId[activeId].titulo : (r.seccion === 'semana' && semanaPorN[activeWeek] ? 'Semana ' + activeWeek : '');
    document.title = (t ? t + ' · ' : '') + 'Base Matemática';
  }

  /* ---------- menú móvil ---------- */
  function abrirMenu() {
    $('#sidebar').classList.add('open');
    $('#sidebar-backdrop').hidden = false;
    $('#menu-btn').setAttribute('aria-expanded', 'true');
  }
  function cerrarMenu() {
    const sb = $('#sidebar');
    if (!sb) return;
    sb.classList.remove('open');
    $('#sidebar-backdrop').hidden = true;
    $('#menu-btn').setAttribute('aria-expanded', 'false');
  }

  /* ---------- eventos ---------- */
  function onClick(e) {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const action = btn.getAttribute('data-action');
    const key = btn.getAttribute('data-key');
    switch (action) {
      case 'check': {
        const inp = $('#ex-' + cssId(key) + ' input[type="text"]');
        comprobar(key, inp ? inp.value : '');
        break;
      }
      case 'opt':
        comprobar(key, btn.getAttribute('data-i'));
        break;
      case 'solucion':
        verSolucion(key);
        break;
      case 'completar': {
        const id = btn.getAttribute('data-id');
        if (state.completadas[id]) delete state.completadas[id];
        else state.completadas[id] = hoy();
        actividad();
        const y = window.scrollY;
        render();
        window.scrollTo({ top: y, behavior: 'auto' });
        break;
      }
      case 'test-result': guardarResultadoTest(); break;
      case 'test-reset': reiniciarTest(); break;
      case 'export': exportar(); break;
      case 'import': { const f = $('#import-file'); if (f) f.click(); break; }
      case 'reset': borrarTodo(); break;
    }
  }

  function onChange(e) {
    const cb = e.target;
    if (cb.matches('input[type="checkbox"][data-cuaderno]')) {
      const id = cb.getAttribute('data-cuaderno');
      const i = cb.getAttribute('data-i');
      state.cuaderno[id] = state.cuaderno[id] || {};
      state.cuaderno[id][i] = cb.checked;
      cb.closest('label').classList.toggle('done', cb.checked);
      actividad();
    } else if (cb.id === 'import-file' && cb.files && cb.files[0]) {
      importarArchivo(cb.files[0]);
      cb.value = '';
    }
  }

  function onKeydown(e) {
    if (e.key === 'Enter' && e.target.matches('.ex input[type="text"]')) {
      e.preventDefault();
      comprobar(e.target.getAttribute('data-key'), e.target.value);
    }
  }

  function init() {
    aplicarTema(temaActual());
    $('#tema-btn').addEventListener('click', () => aplicarTema(temaActual() === 'dark' ? 'light' : 'dark'));
    $('#menu-btn').addEventListener('click', () => { $('#sidebar').classList.contains('open') ? cerrarMenu() : abrirMenu(); });
    $('#sidebar-backdrop').addEventListener('click', cerrarMenu);
    $('#sidebar').addEventListener('click', e => { if (e.target.closest('a')) cerrarMenu(); });
    const main = $('#main');
    main.addEventListener('click', onClick);
    main.addEventListener('change', onChange);
    main.addEventListener('keydown', onKeydown);
    window.addEventListener('hashchange', render);
    if (!TOTAL) {
      $('#main').innerHTML = '<div class="content"><h1>Sin contenido</h1><p>No se cargaron las semanas del curso. Revisa que los archivos de <code>assets/js/content/</code> estén presentes.</p></div>';
      return;
    }
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
