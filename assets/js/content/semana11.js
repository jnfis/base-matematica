/* Semana 11 · Cálculo: el movimiento de las funciones */
CURSO.semana({
  n: 11,
  bloque: 'E',
  titulo: 'Cálculo: el movimiento de las funciones',
  subtitulo: 'La idea de límite, la tasa de cambio, la derivada como pendiente y las reglas básicas para derivar polinomios.',
  meta: 'Cálculo Diferencial es el ramo que más estudiantes de ingeniería repiten, y casi siempre por la base, no por el cálculo en sí. Aquí lo vas a ver antes y sin presión: solo las ideas y las reglas más simples. Cuando llegues al ramo, ya lo habrás visto una vez.',
  resumen: [
    { t: 'Límite por sustitución', f: String.raw`\lim_{x\to a} f(x)=f(a)\ \ \text{si } f \text{ es continua en } a` },
    { t: 'Caso 0/0', f: String.raw`\text{factoriza, simplifica y vuelve a sustituir}` },
    { t: 'Tasa de cambio promedio', f: String.raw`\frac{f(b)-f(a)}{b-a}` },
    { t: 'Derivada (definición)', f: String.raw`f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}` },
    { t: 'Regla de la potencia', f: String.raw`(x^n)'=n\,x^{\,n-1}` },
    { t: 'Constante y múltiplo', f: String.raw`(c)'=0,\qquad (c\cdot f)'=c\cdot f'` },
    { t: 'Suma y resta', f: String.raw`(f\pm g)'=f'\pm g'` },
    { t: 'Interpretación', f: String.raw`f'>0\ \text{crece},\quad f'<0\ \text{decrece},\quad f'=0\ \text{punto crítico}` }
  ],
  sesiones: [
    /* ------------------------------------------------------------------ */
    {
      id: '11.1',
      titulo: 'La idea de límite',
      duracion: 60,
      objetivo: 'Entender qué significa que una función se acerque a un valor, calcular límites por sustitución y resolver el caso 0/0 factorizando.',
      porque: 'El límite es el concepto que hace posible la derivada. En el ramo lo verás con mucha formalidad; aquí basta con la idea y los dos cálculos más comunes.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Acercarse sin llegar',
          html: String.raw`<p>El límite pregunta: <em>¿a qué valor se acerca \(f(x)\) cuando \(x\) se acerca a \(a\)?</em> No pregunta cuánto vale en \(a\).</p>
<table class="mini-tabla"><tr><th>x</th><td>1,9</td><td>1,99</td><td>1,999</td><td>→ 2 ←</td><td>2,001</td><td>2,01</td><td>2,1</td></tr>
<tr><th>x² + 1</th><td>4,61</td><td>4,96</td><td>4,996</td><td>→ 5 ←</td><td>5,004</td><td>5,04</td><td>5,41</td></tr></table>
<span class="formula">\(\displaystyle\lim_{x\to 2}(x^2+1)=5\)</span>`
        },
        {
          tipo: 'concepto', titulo: 'Sustitución: el caso fácil',
          html: String.raw`<p>Para funciones "normales" (polinomios, raíces y cocientes donde el denominador no se anula) el límite es simplemente el valor: sustituye. \(\lim_{x\to 3}(2x-1)=5\).</p>
<p>Una función así se llama <strong>continua</strong>: su gráfico se dibuja sin levantar el lápiz. Casi todo lo que viste en las semanas 7 y 8 es continuo.</p>`
        },
        {
          tipo: 'concepto', titulo: 'El caso 0/0',
          html: String.raw`<p>\(\displaystyle\lim_{x\to 2}\frac{x^2-4}{x-2}\). Al sustituir da \(\frac{0}{0}\): una <strong>indeterminación</strong>. No significa "no existe"; significa "todavía no sé". Se resuelve factorizando (semana 5):</p>
<span class="formula">\(\dfrac{x^2-4}{x-2}=\dfrac{(x+2)(x-2)}{x-2}=x+2\ \Rightarrow\ \lim_{x\to 2}(x+2)=4\)</span>
<p>La función tiene un "hoyo" en \(x=2\), pero el límite existe y vale 4: los valores cercanos se acercan a 4.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Tres límites',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(\lim_{x\to 1}(x^2+3x)=1+3=4\). Sustitución directa.</div></div>
<div class="paso"><span class="paso-n">2</span><div>\(\lim_{x\to 3}\dfrac{x^2-9}{x-3}\): da \(\frac00\). Factoriza: \(\dfrac{(x+3)(x-3)}{x-3}=x+3\). Límite \(=6\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>\(\lim_{x\to 0}\dfrac{5x^2+2x}{x}\): da \(\frac00\). Factor común: \(\dfrac{x(5x+2)}{x}=5x+2\). Límite \(=2\).</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'El costo medio a largo plazo',
          html: String.raw`<p>En la semana 5 viste el costo medio \(\dfrac{80000+1200q}{q}=\dfrac{80000}{q}+1200\). Cuando \(q\) crece sin límite, \(\frac{80000}{q}\) se acerca a 0:</p>
<span class="formula">\(\displaystyle\lim_{q\to\infty}\left(\frac{80000}{q}+1200\right)=1200\)</span>
<p>El costo por unidad nunca baja de $1.200, pero se acerca tanto como quieras. Esa recta a la que se acerca es una asíntota.</p>`
        },
        {
          tipo: 'error', titulo: '0/0 no es una respuesta',
          html: String.raw`<p>Si al sustituir obtienes \(\frac00\), no concluyas que el límite no existe ni que vale 0. Factoriza, simplifica y vuelve a sustituir. Y recuerda: el límite no necesita que \(f(a)\) exista.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>\(\displaystyle\lim_{x\to 3}(x^2-2x)\)</p>`, respuesta: 3, pista: 'Sustituye.', solucion: String.raw`<p>\(9-6=3\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(\displaystyle\lim_{x\to -1}(4x+7)\)</p>`, respuesta: 3, pista: 'Sustituye.', solucion: String.raw`<p>\(-4+7=3\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(\displaystyle\lim_{x\to 2}\frac{x^2-4}{x-2}\)</p>`, respuesta: 4, pista: 'Diferencia de cuadrados.', solucion: String.raw`<p>\(\frac{(x+2)(x-2)}{x-2}=x+2\to 4\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(\displaystyle\lim_{x\to 5}\frac{x^2-25}{x-5}\)</p>`, respuesta: 10, pista: 'Factoriza el numerador.', solucion: String.raw`<p>\(x+5\to 10\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(\displaystyle\lim_{x\to 0}\frac{3x^2+6x}{x}\)</p>`, respuesta: 6, pista: 'Factor común x.', solucion: String.raw`<p>\(3x+6\to 6\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Si al sustituir obtienes \(\frac{0}{0}\):</p>`, opciones: ['El límite no existe', 'Hay que factorizar y simplificar', 'El límite vale 0'], correcta: 1, pista: 'Indeterminación.', solucion: String.raw`<p>Es una indeterminación: se resuelve simplificando.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>¿A qué valor se acerca \(\dfrac{80000}{q}+1200\) cuando \(q\) crece sin límite?</p>`, respuesta: 1200, pista: 'El término con q en el denominador se va a cero.', solucion: String.raw`<p>A 1.200.</p>` }
      ],
      cuaderno: [
        'Escribe la idea de límite con tus palabras y copia la tabla de x² + 1 cerca de x = 2.',
        'Resuelve lim (x² − 4)/(x − 2) mostrando la factorización.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Haz una tabla de 80.000/q + 1.200 para q = 10, 100, 1.000 y 10.000, y anota hacia dónde va.'
      ],
      videos: [
        { titulo: 'Límites: idea intuitiva desde cero', q: 'profe alex limites desde cero idea intuitiva' },
        { titulo: 'Límites con indeterminación 0/0', q: 'julioprofe limites indeterminacion 0/0 factorizacion' }
      ],
      cierre: 'El límite pregunta hacia dónde va la función, no dónde está. Y 0/0 no es una respuesta: es una invitación a factorizar.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '11.2',
      titulo: 'Tasa de cambio y la pendiente que se mueve',
      duracion: 60,
      objetivo: 'Calcular tasas de cambio promedio, entender la velocidad instantánea como límite y conectar la pendiente de la secante con la de la tangente.',
      porque: 'La pregunta "¿a qué velocidad cambia esto ahora?" es la pregunta de la derivada. Si entiendes el paso de promedio a instantáneo, el resto del cálculo diferencial es técnica.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Tasa de cambio promedio',
          html: String.raw`<span class="formula">\(\text{tasa promedio entre } a \text{ y } b=\dfrac{f(b)-f(a)}{b-a}\)</span>
<p>Es la pendiente de la recta <strong>secante</strong> que une los puntos \((a,f(a))\) y \((b,f(b))\). Si \(s(t)=t^2\) es la posición en metros, entre \(t=1\) y \(t=3\) la velocidad media es \(\frac{9-1}{2}=4\) m/s.</p>`
        },
        {
          tipo: 'concepto', titulo: 'De promedio a instantáneo',
          html: String.raw`<p>¿Y la velocidad <em>justo</em> en \(t=1\)? Achica el intervalo:</p>
<table class="mini-tabla"><tr><th>Intervalo</th><td>1 a 2</td><td>1 a 1,1</td><td>1 a 1,01</td><td>1 a 1,001</td></tr>
<tr><th>Velocidad media</th><td>3</td><td>2,1</td><td>2,01</td><td>2,001</td></tr></table>
<p>Se acerca a <strong>2</strong>. Esa es la velocidad instantánea en \(t=1\): un límite de velocidades medias. Gráficamente, la secante gira hasta convertirse en la <strong>tangente</strong>.</p>
<svg viewBox="0 0 320 215" width="100%" style="max-width:360px;display:block;margin:8px auto" role="img" aria-label="Curva con una recta secante y una recta tangente">
<line x1="30" y1="190" x2="300" y2="190" stroke="currentColor" stroke-opacity="0.35"/>
<line x1="40" y1="10" x2="40" y2="200" stroke="currentColor" stroke-opacity="0.35"/>
<path d="M40,190 Q160,190 280,10" fill="none" stroke="var(--primary)" stroke-width="2"/>
<line x1="100" y1="190" x2="290" y2="0" stroke="var(--warn)" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="60" y1="200" x2="240" y2="110" stroke="var(--danger)" stroke-width="1.5"/>
<circle cx="120" cy="170" r="4" fill="currentColor"/><circle cx="280" cy="10" r="4" fill="currentColor"/>
<text x="126" y="186" font-size="10" fill="currentColor">(1, 1)</text>
<text x="238" y="22" font-size="10" fill="currentColor">(3, 9)</text>
<text x="200" y="76" font-size="10" fill="var(--warn-ink)">secante, pendiente 4</text>
<text x="150" y="135" font-size="10" fill="var(--danger-ink)">tangente, pendiente 2</text>
</svg>`
        },
        {
          tipo: 'concepto', titulo: 'La derivada, definida',
          html: String.raw`<span class="formula">\(f'(x)=\displaystyle\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}\)</span>
<p>Es la tasa de cambio con el intervalo \(h\) tendiendo a cero. Para \(f(x)=x^2\):</p>
<span class="formula">\(\dfrac{(x+h)^2-x^2}{h}=\dfrac{2xh+h^2}{h}=2x+h\ \xrightarrow{h\to 0}\ 2x\)</span>
<p>Así que \((x^2)'=2x\). En \(x=1\) da 2, justo lo que mostraba la tabla. Fíjate que usaste el cuadrado de binomio (semana 5) y un límite \(\frac00\) (sesión anterior).</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Costo marginal',
          html: String.raw`<p>Si el costo de producir \(q\) unidades es \(C(q)=0{,}5q^2+100q\), su derivada \(C'(q)=q+100\) es el <strong>costo marginal</strong>: aproximadamente lo que cuesta producir una unidad más.</p>
<p>La unidad número 10 cuesta unos $110; la número 50, unos $150. El costo por unidad adicional va subiendo. Economía usa la palabra "marginal" para decir "derivada".</p>`
        },
        {
          tipo: 'tip', titulo: 'La derivada tiene unidades',
          html: String.raw`<p>Si \(f\) está en metros y \(x\) en segundos, \(f'\) está en metros por segundo. Si \(C\) está en pesos y \(q\) en unidades, \(C'\) está en pesos por unidad. Pensar las unidades te dice qué significa el número.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>\(f(x)=x^2\). Tasa de cambio promedio entre \(x=2\) y \(x=4\).</p>`, respuesta: 6, pista: '(16 − 4) / (4 − 2).', solucion: String.raw`<p>\(\frac{12}{2}=6\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(s(t)=t^2\) (metros). Velocidad media entre \(t=2\) y \(t=2{,}1\) (dos decimales).</p>`, respuesta: 4.1, tol: 0.01, unidad: 'm/s', pista: '(4,41 − 4) / 0,1.', solucion: String.raw`<p>\(\frac{0{,}41}{0{,}1}=4{,}1\) m/s.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Con \((t^2)'=2t\), ¿cuál es la velocidad instantánea en \(t=2\)?</p>`, respuesta: 4, unidad: 'm/s', pista: 'Evalúa 2t.', solucion: String.raw`<p>\(2\cdot 2=4\) m/s. La velocidad media del ejercicio anterior (4,1) se le acerca.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(f(x)=x^2\). Pendiente de la recta tangente en \(x=5\).</p>`, respuesta: 10, pista: 'f\'(5).', solucion: String.raw`<p>\(2\cdot 5=10\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Si \(f'(3)=-2\), en \(x=3\) la función:</p>`, opciones: ['Crece', 'Decrece', 'Tiene un máximo con seguridad'], correcta: 1, pista: 'Signo de la derivada.', solucion: String.raw`<p>Derivada negativa: la función está bajando en ese punto.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(C(q)=0{,}5q^2+100q\) tiene costo marginal \(C'(q)=q+100\). ¿Cuál es el costo marginal en \(q=80\)?</p>`, respuesta: 180, unidad: '$', pista: 'Evalúa q + 100.', solucion: String.raw`<p>\(80+100=180\).</p>` }
      ],
      cuaderno: [
        'Escribe la fórmula de tasa de cambio promedio y la definición de derivada, una debajo de la otra, y marca qué cambia.',
        'Haz la tabla de velocidades medias de s(t) = t² desde t = 1 con intervalos de 1; 0,1; 0,01 y 0,001.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Dibuja una curva, una secante y la tangente en un punto, y explica con una frase la diferencia.'
      ],
      videos: [
        { titulo: 'La derivada como pendiente de la recta tangente', q: 'profe alex derivada pendiente recta tangente explicacion' },
        { titulo: 'Derivada por definición', q: 'julioprofe derivada por definicion limite' }
      ],
      cierre: 'La derivada es una pendiente que cambia de punto en punto. Es la tasa de cambio exacta, no la promedio.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '11.3',
      titulo: 'Reglas básicas de derivación',
      duracion: 60,
      objetivo: 'Derivar polinomios con las reglas de la potencia, la constante, el múltiplo constante y la suma.',
      porque: 'Con cuatro reglas derivas cualquier polinomio, que es la mayor parte de lo que se deriva en el primer mes de Cálculo Diferencial. Verlo antes te deja tiempo para lo difícil.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Las cuatro reglas',
          html: String.raw`<table class="mini-tabla">
<tr><th>Regla</th><th>Fórmula</th><th>Ejemplo</th></tr>
<tr><td>Constante</td><td>\((c)'=0\)</td><td>\((7)'=0\)</td></tr>
<tr><td>Potencia</td><td>\((x^n)'=n\,x^{\,n-1}\)</td><td>\((x^3)'=3x^2\)</td></tr>
<tr><td>Múltiplo constante</td><td>\((c\cdot f)'=c\cdot f'\)</td><td>\((5x^2)'=10x\)</td></tr>
<tr><td>Suma y resta</td><td>\((f\pm g)'=f'\pm g'\)</td><td>\((x^3+5x^2)'=3x^2+10x\)</td></tr>
</table>
<p>La regla de la potencia en palabras: <strong>baja el exponente, multiplícalo, y réstale uno al exponente</strong>.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Casos de la potencia que conviene saber',
          html: String.raw`<p>\((x)'=1\) (es \(x^1\): baja el 1, y \(x^0=1\)). \((\sqrt x)'=(x^{1/2})'=\frac12 x^{-1/2}=\dfrac{1}{2\sqrt x}\). \(\left(\dfrac1x\right)'=(x^{-1})'=-x^{-2}=-\dfrac{1}{x^2}\).</p>
<p>Los exponentes fraccionarios y negativos de la semana 3 aparecen aquí con todo su sentido.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Derivar término a término',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(f(x)=2x^4-3x^2+5x-7\). Derivo cada término: \(8x^3-6x+5-0\). Así, \(f'(x)=8x^3-6x+5\).</div></div>
<div class="paso"><span class="paso-n">2</span><div>\(g(x)=\dfrac{x^3}{3}+4\). \(g'(x)=\dfrac{3x^2}{3}+0=x^2\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>\(h(x)=3\sqrt x\). \(h'(x)=3\cdot\dfrac{1}{2\sqrt x}=\dfrac{3}{2\sqrt x}\).</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'La utilidad y su derivada',
          html: String.raw`<p>\(U(q)=-2q^2+120q-500\). Su derivada es \(U'(q)=-4q+120\).</p>
<p>En \(q=20\): \(U'=40>0\), la utilidad todavía sube: conviene producir más. En \(q=40\): \(U'=-40<0\), ya se pasó: cada unidad extra reduce la utilidad. En \(q=30\): \(U'=0\). Ahí está el máximo, y lo confirmarás en la semana 12.</p>`
        },
        {
          tipo: 'error', titulo: 'Tres errores de principiante',
          html: String.raw`<p>Derivar una constante como si fuera \(x\): \((5)'=0\), no 5.</p>
<p>Olvidar restar uno al exponente: \((x^5)'=5x^4\), no \(5x^5\).</p>
<p>Perder el término lineal: \((3x)'=3\), no 0.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'texto', enunciado: String.raw`<p>Deriva \(x^5\). Escribe los exponentes con ^ (x^4).</p>`, respuesta: ['5x^4'], compacto: true, placeholder: 'ax^n', pista: 'Baja el 5 y réstale uno al exponente.', solucion: String.raw`<p>\(5x^4\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Deriva \(4x^3\).</p>`, respuesta: ['12x^2'], compacto: true, placeholder: 'ax^n', pista: '4 · 3 = 12.', solucion: String.raw`<p>\(12x^2\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Deriva \(3x^2-8x+1\).</p>`, respuesta: ['6x-8', '-8+6x'], compacto: true, placeholder: 'ax+b', pista: 'Término a término; la constante desaparece.', solucion: String.raw`<p>\(6x-8\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(f(x)=x^3-6x\). Calcula \(f'(2)\).</p>`, respuesta: 6, pista: 'f\'(x) = 3x² − 6.', solucion: String.raw`<p>\(3\cdot 4-6=6\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Deriva \(\dfrac{x^4}{2}+9\).</p>`, respuesta: ['2x^3'], compacto: true, placeholder: 'ax^n', pista: '4/2 = 2.', solucion: String.raw`<p>\(\frac{4x^3}{2}=2x^3\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(U(q)=-2q^2+120q-500\). Calcula \(U'(10)\).</p>`, respuesta: 80, pista: 'U\'(q) = −4q + 120.', solucion: String.raw`<p>\(-40+120=80\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>¿Para qué valor de \(q\) se cumple \(U'(q)=0\)?</p>`, respuesta: 30, pista: 'Resuelve −4q + 120 = 0.', solucion: String.raw`<p>\(q=30\).</p>` }
      ],
      cuaderno: [
        'Escribe las cuatro reglas con un ejemplo cada una.',
        'Deriva f(x) = 2x⁴ − 3x² + 5x − 7 término a término, escribiendo la derivada de cada uno.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Deriva x² por definición (como en 11.2) y comprueba que la regla de la potencia da lo mismo.'
      ],
      videos: [
        { titulo: 'Reglas básicas de derivación', q: 'julioprofe reglas de derivacion basicas potencia' },
        { titulo: 'Derivadas de polinomios desde cero', q: 'profe alex derivadas de polinomios desde cero' }
      ],
      cierre: 'Baja el exponente, multiplícalo, réstale uno. Las constantes desaparecen y las sumas se derivan por separado.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '11.4',
      titulo: 'Interpretar la derivada',
      duracion: 60,
      objetivo: 'Usar la derivada para saber dónde una función crece o decrece, encontrar puntos críticos y leer su significado en contexto.',
      porque: 'La derivada no es un trámite algebraico: es información. Saber leerla te permite decir "conviene producir más" o "el costo está subiendo cada vez más rápido", que es lo que hace un ingeniero industrial.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'El signo de la derivada',
          html: String.raw`<table class="mini-tabla">
<tr><th>Si en un punto…</th><th>entonces la función…</th></tr>
<tr><td>\(f'>0\)</td><td>crece (sube)</td></tr>
<tr><td>\(f'<0\)</td><td>decrece (baja)</td></tr>
<tr><td>\(f'=0\)</td><td>está plana: <strong>punto crítico</strong>, posible máximo o mínimo</td></tr>
</table>`
        },
        {
          tipo: 'concepto', titulo: 'Encontrar y clasificar puntos críticos',
          html: String.raw`<ol>
<li>Deriva.</li>
<li>Resuelve \(f'(x)=0\) (una ecuación: semana 4 o 6).</li>
<li>Mira el signo de \(f'\) a cada lado del punto: si pasa de + a −, es un <strong>máximo</strong>; si pasa de − a +, es un <strong>mínimo</strong>.</li>
</ol>`
        },
        {
          tipo: 'ejemplo', titulo: 'La parábola, otra vez',
          html: String.raw`<p>\(f(x)=x^2-4x+3\). Derivada: \(f'(x)=2x-4\). Igualo a cero: \(x=2\).</p>
<p>Signos: \(f'(1)=-2<0\) (baja antes), \(f'(3)=2>0\) (sube después): <strong>mínimo</strong> en \(x=2\), con \(f(2)=-1\).</p>
<p>Es exactamente el vértice que calculaste en la semana 7 con \(-\frac{b}{2a}\). La derivada hace lo mismo, pero sirve para cualquier función, no solo parábolas.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Una cúbica con máximo y mínimo',
          html: String.raw`<p>\(f(x)=x^3-3x\). \(f'(x)=3x^2-3=0\) da \(x=\pm 1\). Signos: \(f'(-2)=9>0\), \(f'(0)=-3<0\), \(f'(2)=9>0\). Máximo en \(x=-1\) (vale 2) y mínimo en \(x=1\) (vale \(-2\)).</p>
<svg viewBox="0 0 320 200" width="100%" style="max-width:340px;display:block;margin:8px auto" role="img" aria-label="Gráfico de x cubo menos 3x con un máximo y un mínimo">
<line x1="30" y1="100" x2="300" y2="100" stroke="currentColor" stroke-opacity="0.35"/>
<line x1="160" y1="10" x2="160" y2="190" stroke="currentColor" stroke-opacity="0.35"/>
<polyline fill="none" stroke="var(--primary)" stroke-width="2" stroke-linejoin="round" points="50,170 63.75,103.8 77.5,60.6 91.25,37.1 105,30 118.75,36 132.5,51.9 146.25,74.3 160,100 173.75,125.7 187.5,148.1 201.25,164 215,170 228.75,162.9 242.5,139.4 256.25,96.2 270,30"/>
<circle cx="105" cy="30" r="4" fill="var(--danger)"/><circle cx="215" cy="170" r="4" fill="var(--success)"/>
<text x="60" y="24" font-size="10" fill="currentColor">máximo (−1, 2)</text>
<text x="222" y="184" font-size="10" fill="currentColor">mínimo (1, −2)</text>
</svg>`
        },
        {
          tipo: 'ejemplo', titulo: 'Costo marginal creciente',
          html: String.raw`<p>\(C(q)=0{,}01q^3-1{,}5q^2+100q\). Costo marginal: \(C'(q)=0{,}03q^2-3q+100\).</p>
<p>\(C'(50)=75-150+100=25\): la unidad 50 es barata de producir. \(C'(150)=675-450+100=325\): la 150 es cara. La derivada no dice cuánto cuesta producir, dice cómo cambia el costo. Un gerente que entiende eso toma mejores decisiones.</p>`
        },
        {
          tipo: 'error', titulo: 'Derivada cero no garantiza nada',
          html: String.raw`<p>\(f(x)=x^3\) tiene \(f'(0)=0\), pero en 0 no hay máximo ni mínimo: la función sigue subiendo. Siempre mira los signos a los lados del punto crítico.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>\(f(x)=x^2-10x+3\). ¿En qué \(x\) está el punto crítico?</p>`, respuesta: 5, pista: 'f\'(x) = 2x − 10 = 0.', solucion: String.raw`<p>\(x=5\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Ese punto crítico es:</p>`, opciones: ['Un máximo', 'Un mínimo'], correcta: 1, pista: 'Signo de f\' antes y después de 5.', solucion: String.raw`<p>\(f'(4)=-2<0\) y \(f'(6)=2>0\): de − a +, es un mínimo.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(f(x)=x^3-12x\). ¿Cuál es el punto crítico positivo?</p>`, respuesta: 2, pista: 'f\'(x) = 3x² − 12 = 0.', solucion: String.raw`<p>\(x^2=4\), \(x=\pm 2\). El positivo es 2.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>En \(x=2\), la función anterior tiene:</p>`, opciones: ['Un máximo', 'Un mínimo'], correcta: 1, pista: 'Evalúa f\'(1) y f\'(3).', solucion: String.raw`<p>\(f'(1)=-9<0\) y \(f'(3)=15>0\): mínimo.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Si \(U'(100)>0\), entonces:</p>`, opciones: ['Conviene producir más de 100', 'Conviene producir menos de 100', '100 es el óptimo'], correcta: 0, pista: 'La utilidad todavía sube.', solucion: String.raw`<p>Derivada positiva: cada unidad extra aumenta la utilidad. Todavía no se llega al máximo.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(C'(q)=0{,}03q^2-3q+100\). Costo marginal en \(q=100\).</p>`, respuesta: 100, unidad: '$', pista: '0,03·10.000 − 300 + 100.', solucion: String.raw`<p>\(300-300+100=100\).</p>` }
      ],
      cuaderno: [
        'Escribe la tabla: signo de f\' → comportamiento de f.',
        'Para f(x) = x³ − 3x, calcula f\', sus ceros y la tabla de signos; dibuja la curva.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Explica con una frase qué significa "costo marginal" para un gerente.'
      ],
      videos: [
        { titulo: 'Crecimiento, decrecimiento y puntos críticos', q: 'julioprofe crecimiento decrecimiento puntos criticos derivada' },
        { titulo: 'Máximos y mínimos con la primera derivada', q: 'profe alex maximos y minimos primera derivada' }
      ],
      cierre: 'Derivada positiva, la función sube. Negativa, baja. Cero, se detiene a pensar. Tú decides qué hace después mirando los lados.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '11.5',
      titulo: 'Repaso y mini test de la semana 11',
      duracion: 60,
      tipo: 'test',
      objetivo: 'Comprobar límites, tasa de cambio, reglas de derivación e interpretación de la derivada.',
      intro: String.raw`<p><strong>Repasa 10 minutos</strong> con el cuaderno cerrado:</p>
<ul>
<li>¿Qué se hace cuando un límite da 0/0?</li>
<li>¿Qué es la derivada en una frase?</li>
<li>Las cuatro reglas de derivación.</li>
<li>¿Qué dice el signo de la derivada?</li>
</ul>
<p>Luego resuelve las 10 preguntas en el cuaderno y marca aquí. <strong>Meta: 8 de 10.</strong> Escribe los exponentes con ^ (x^2).</p>`,
      ejercicios: [
        { tipo: 'num', area: 'Límites (11.1)', enunciado: String.raw`<p>\(\displaystyle\lim_{x\to 2}(x^2+3x)\)</p>`, respuesta: 10, solucion: String.raw`<p>\(4+6=10\).</p>` },
        { tipo: 'num', area: 'Límites (11.1)', enunciado: String.raw`<p>\(\displaystyle\lim_{x\to 4}\frac{x^2-16}{x-4}\)</p>`, respuesta: 8, solucion: String.raw`<p>\(x+4\to 8\).</p>` },
        { tipo: 'num', area: 'Tasa de cambio (11.2)', enunciado: String.raw`<p>Tasa de cambio promedio de \(f(x)=x^2\) entre \(x=1\) y \(x=3\).</p>`, respuesta: 4, solucion: String.raw`<p>\(\frac{9-1}{2}=4\).</p>` },
        { tipo: 'num', area: 'Tasa de cambio (11.2)', enunciado: String.raw`<p>Pendiente de la tangente a \(f(x)=x^2\) en \(x=-3\).</p>`, respuesta: -6, solucion: String.raw`<p>\(2\cdot(-3)=-6\).</p>` },
        { tipo: 'texto', area: 'Reglas de derivación (11.3)', enunciado: String.raw`<p>Deriva \(x^6\).</p>`, respuesta: ['6x^5'], compacto: true, placeholder: 'ax^n', solucion: String.raw`<p>\(6x^5\).</p>` },
        { tipo: 'texto', area: 'Reglas de derivación (11.3)', enunciado: String.raw`<p>Deriva \(5x^2-2x+9\).</p>`, respuesta: ['10x-2', '-2+10x'], compacto: true, placeholder: 'ax+b', solucion: String.raw`<p>\(10x-2\).</p>` },
        { tipo: 'num', area: 'Reglas de derivación (11.3)', enunciado: String.raw`<p>\(f(x)=2x^3-x\). Calcula \(f'(1)\).</p>`, respuesta: 5, solucion: String.raw`<p>\(f'(x)=6x^2-1\); \(6-1=5\).</p>` },
        { tipo: 'num', area: 'Interpretar la derivada (11.4)', enunciado: String.raw`<p>\(f(x)=x^2-8x+1\). ¿Dónde está su punto crítico?</p>`, respuesta: 4, solucion: String.raw`<p>\(2x-8=0\), \(x=4\).</p>` },
        { tipo: 'opcion', area: 'Interpretar la derivada (11.4)', enunciado: String.raw`<p>Si \(f'(x)<0\) en un intervalo, ahí \(f\) es:</p>`, opciones: ['Creciente', 'Decreciente', 'Constante'], correcta: 1, solucion: String.raw`<p>Decreciente.</p>` },
        { tipo: 'num', area: 'Interpretar la derivada (11.4)', enunciado: String.raw`<p>\(U(q)=-3q^2+180q\). ¿Para qué \(q\) la derivada es cero?</p>`, respuesta: 30, solucion: String.raw`<p>\(-6q+180=0\), \(q=30\).</p>` }
      ],
      cuaderno: [
        'Haz la hoja resumen de la semana 11: límite y caso 0/0, definición de derivada, cuatro reglas, tabla de signos.',
        'Resuelve el test completo en el cuaderno antes de responder en pantalla.',
        'Anota tu puntaje y las preguntas falladas.',
        'Si fallaste 3 o más, repite la sesión correspondiente antes de la semana 12.'
      ],
      videos: [
        { titulo: 'Ejercicios resueltos de derivadas básicas', q: 'ejercicios resueltos derivadas basicas polinomios' }
      ],
      cierre: 'Ya derivaste. Lo que en el semestre 2 asusta a medio curso, tú lo viste con calma. Última semana.'
    }
  ]
});
