/* Semana 7 · Funciones I: ver las relaciones */
CURSO.semana({
  n: 7,
  bloque: 'C',
  titulo: 'Funciones I: ver las relaciones',
  subtitulo: 'Qué es una función, cómo se evalúa y se grafica, rectas y parábolas con significado.',
  meta: 'Cálculo Diferencial es, en el fondo, el estudio de funciones. Economía las usa para costos, ingresos y demanda. Si entiendes qué es una función y sabes leer una recta y una parábola, el semestre 2 empieza cuesta abajo.',
  resumen: [
    { t: 'Notación', f: String.raw`f(x)=\ldots,\qquad f(2)=\text{valor de } f \text{ cuando } x=2` },
    { t: 'Recta', f: String.raw`y=mx+b,\qquad m=\frac{y_2-y_1}{x_2-x_1}` },
    { t: 'Pendiente como tasa de cambio', f: String.raw`m=\frac{\Delta y}{\Delta x}` },
    { t: 'Recta por un punto y pendiente', f: String.raw`y-y_1=m(x-x_1)` },
    { t: 'Costo, ingreso, utilidad', f: String.raw`C=F+vq,\qquad I=pq,\qquad U=I-C` },
    { t: 'Punto de equilibrio', f: String.raw`q^*=\frac{F}{p-v}` },
    { t: 'Parábola y vértice', f: String.raw`y=ax^2+bx+c,\qquad x_v=-\frac{b}{2a}` }
  ],
  sesiones: [
    /* ------------------------------------------------------------------ */
    {
      id: '7.1',
      titulo: 'Qué es una función',
      duracion: 60,
      objetivo: 'Entender una función como una regla de entrada y salida, usar la notación f(x), evaluar y reconocer dominio y recorrido.',
      porque: 'Una función es la forma matemática de decir "esto depende de aquello": el costo depende de la cantidad, la demanda del precio, la posición del tiempo. Todo el cálculo trabaja sobre funciones.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Una máquina de entrada y salida',
          html: String.raw`<p>Una función es una regla que a cada entrada \(x\) le asigna <strong>una sola</strong> salida \(y\). Se escribe \(y=f(x)\): "y es función de x".</p>
<p>\(f(x)=2x+3\) es la regla "duplica y suma 3". Entra 4, sale \(f(4)=2\cdot 4+3=11\). A \(x\) se le llama variable independiente; a \(y\), dependiente.</p>
<p>Una misma función se puede presentar como fórmula, como tabla, como gráfico o en palabras. Son cuatro caras de lo mismo.</p>`
        },
        {
          tipo: 'concepto', titulo: 'La notación f(x)',
          html: String.raw`<p>\(f(x)\) no significa "f por x". Significa "la salida de f cuando entra x". Evaluar es reemplazar:</p>
<span class="formula">\(g(x)=x^2-1:\qquad g(3)=8,\qquad g(-3)=(-3)^2-1=8,\qquad g(0)=-1\)</span>
<p>Usa paréntesis al reemplazar negativos, igual que en la semana 3. Y fíjate en que dos entradas distintas pueden dar la misma salida; lo que no puede pasar es que una entrada dé dos salidas.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Dominio y recorrido',
          html: String.raw`<p>El <strong>dominio</strong> es el conjunto de entradas permitidas. Se excluyen las que producen división por cero o raíz de negativo, y las que el contexto prohíbe (no se producen \(-3\) unidades).</p>
<p>\(f(x)=\dfrac{1}{x-2}\) tiene dominio \(x\neq 2\). \(f(x)=\sqrt{x-1}\) tiene dominio \(x\ge 1\). \(C(q)=80000+1200q\) tiene dominio \(q\ge 0\).</p>
<p>El <strong>recorrido</strong> es el conjunto de salidas que efectivamente se obtienen.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Tabla y gráfico de f(x) = 2x + 3',
          html: String.raw`<table class="mini-tabla"><tr><th>x</th><td>−2</td><td>−1</td><td>0</td><td>1</td><td>2</td></tr><tr><th>f(x)</th><td>−1</td><td>1</td><td>3</td><td>5</td><td>7</td></tr></table>
<p>Cada columna es un punto \((x,y)\) del plano. Al marcarlos quedan alineados: la función es una recta.</p>
<svg viewBox="0 0 320 200" width="100%" style="max-width:360px;display:block;margin:8px auto" role="img" aria-label="Puntos de f(x)=2x+3 alineados sobre una recta">
<line x1="40" y1="154" x2="300" y2="154" stroke="currentColor" stroke-opacity="0.35"/>
<line x1="160" y1="10" x2="160" y2="195" stroke="currentColor" stroke-opacity="0.35"/>
<text x="296" y="168" font-size="11" fill="currentColor" text-anchor="end">x</text>
<text x="166" y="18" font-size="11" fill="currentColor">y</text>
<line x1="60" y1="190" x2="260" y2="10" stroke="var(--primary)" stroke-width="2"/>
<circle cx="80" cy="172" r="4" fill="var(--primary)"/><circle cx="120" cy="136" r="4" fill="var(--primary)"/><circle cx="160" cy="100" r="4" fill="var(--primary)"/><circle cx="200" cy="64" r="4" fill="var(--primary)"/><circle cx="240" cy="28" r="4" fill="var(--primary)"/>
<text x="166" y="98" font-size="10" fill="currentColor">(0, 3)</text>
<text x="206" y="62" font-size="10" fill="currentColor">(1, 5)</text>
<text x="84" y="186" font-size="10" fill="currentColor">(−2, −1)</text>
</svg>`
        },
        {
          tipo: 'ejemplo', titulo: 'El costo como función',
          html: String.raw`<p>\(C(q)=80000+1200q\) es una función de \(q\). \(C(0)=80000\) es el costo fijo (lo que pagas aunque no produzcas nada). \(C(100)=200000\). El dominio son los enteros desde 0.</p>
<p>Esta notación ya la usaste en las semanas 3 y 4 sin llamarla función. Ahora tiene nombre.</p>`
        },
        {
          tipo: 'error', titulo: 'Dos confusiones',
          html: String.raw`<p>\(f(x)\) no es una multiplicación: \(f(2)\) no es "f por 2".</p>
<p>Una tabla donde \(x=2\) aparece con dos salidas distintas no es una función. A cada entrada, una sola salida.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Si \(f(x)=3x-4\), calcula \(f(5)\).</p>`, respuesta: 11, pista: 'Reemplaza x por 5.', solucion: String.raw`<p>\(3\cdot 5-4=11\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Si \(g(x)=x^2-2x\), calcula \(g(-3)\).</p>`, respuesta: 15, pista: 'Paréntesis en el −3.', solucion: String.raw`<p>\((-3)^2-2(-3)=9+6=15\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Si \(h(x)=\dfrac{x+6}{2}\), calcula \(h(4)\).</p>`, respuesta: 5, pista: 'Suma primero, divide después.', solucion: String.raw`<p>\(\frac{10}{2}=5\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>¿Qué valor de \(x\) <strong>no</strong> pertenece al dominio de \(f(x)=\dfrac{5}{x-7}\)?</p>`, respuesta: 7, pista: 'División por cero.', solucion: String.raw`<p>\(x=7\) anula el denominador.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>El dominio de \(f(x)=\sqrt{x-3}\) es:</p>`, opciones: [String.raw`\(x\ge 3\)`, String.raw`\(x>0\)`, 'Todos los números reales'], correcta: 0, pista: 'Lo de adentro de la raíz no puede ser negativo.', solucion: String.raw`<p>\(x-3\ge 0\), es decir, \(x\ge 3\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Si \(C(q)=50000+900q\), calcula \(C(120)\).</p>`, respuesta: 158000, unidad: '$', pista: '50000 + 900·120.', solucion: String.raw`<p>\(50000+108000=158000\).</p>` }
      ],
      cuaderno: [
        'Escribe la definición de función con el dibujo de la máquina (entrada → regla → salida).',
        'Haz la tabla y el gráfico de f(x) = 2x + 3 para x de −2 a 2 en papel cuadriculado.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Escribe tres funciones de tu vida diaria en palabras y en fórmula (por ejemplo, lo que pagas de luz según los kWh).'
      ],
      videos: [
        { titulo: 'Qué es una función', q: 'profe alex que es una funcion matematica' },
        { titulo: 'Dominio de una función', q: 'julioprofe dominio de una funcion' }
      ],
      cierre: 'Una función es una regla: entra un número, sale uno solo. f(x) es la salida, no una multiplicación.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '7.2',
      titulo: 'Rectas: pendiente e intercepto',
      duracion: 60,
      objetivo: 'Graficar una recta a partir de su ecuación, calcular la pendiente entre dos puntos y escribir la ecuación de una recta.',
      porque: 'La recta es el modelo más usado en ingeniería: costos lineales, consumo, depreciación, tendencias. La pendiente es la primera tasa de cambio que conoces, y la derivada, en la semana 11, es su generalización.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'y = mx + b',
          html: String.raw`<p>Toda recta no vertical se escribe así. \(b\) es el <strong>intercepto</strong>: donde la recta corta al eje \(y\) (cuando \(x=0\)). \(m\) es la <strong>pendiente</strong>: cuánto sube \(y\) por cada unidad que avanza \(x\).</p>
<p>Si \(m>0\) la recta sube; si \(m<0\) baja; si \(m=0\) es horizontal. Mientras mayor es \(|m|\), más empinada.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Pendiente entre dos puntos',
          html: String.raw`<span class="formula">\(m=\dfrac{y_2-y_1}{x_2-x_1}=\dfrac{\Delta y}{\Delta x}\)</span>
<p>Entre \((1,3)\) y \((4,9)\): \(m=\dfrac{9-3}{4-1}=\dfrac{6}{3}=2\). Por cada unidad de \(x\), \(y\) sube 2. El orden de los puntos no importa mientras sea el mismo arriba y abajo.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Escribir la ecuación',
          html: String.raw`<p>Con la pendiente y un punto \((x_1,y_1)\): \(y-y_1=m(x-x_1)\). Con dos puntos: calcula \(m\) y usa cualquiera de los dos.</p>
<span class="formula">\((1,3)\ \text{y}\ (4,9):\quad m=2,\quad y-3=2(x-1)\ \Rightarrow\ y=2x+1\)</span>
<p>Comprobación: con \(x=4\), \(y=9\). Correcto.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Graficar y = −2x + 5',
          html: String.raw`<p>Intercepto: \((0,5)\). Pendiente \(-2\): por cada paso a la derecha, baja 2. Así salen \((1,3)\) y \((2,1)\). Corta al eje \(x\) cuando \(y=0\): \(x=2{,}5\).</p>
<svg viewBox="0 0 320 200" width="100%" style="max-width:360px;display:block;margin:8px auto" role="img" aria-label="Gráfico de la recta y = -2x + 5">
<line x1="30" y1="145" x2="300" y2="145" stroke="currentColor" stroke-opacity="0.35"/>
<line x1="88" y1="10" x2="88" y2="195" stroke="currentColor" stroke-opacity="0.35"/>
<text x="296" y="159" font-size="11" fill="currentColor" text-anchor="end">x</text>
<text x="94" y="18" font-size="11" fill="currentColor">y</text>
<line x1="64" y1="10" x2="256" y2="190" stroke="var(--primary)" stroke-width="2"/>
<circle cx="88" cy="32.5" r="4" fill="var(--primary)"/><circle cx="136" cy="77.5" r="4" fill="var(--primary)"/><circle cx="184" cy="122.5" r="4" fill="var(--primary)"/><circle cx="208" cy="145" r="4" fill="var(--primary)"/>
<text x="96" y="30" font-size="10" fill="currentColor">(0, 5)</text>
<text x="144" y="75" font-size="10" fill="currentColor">(1, 3)</text>
<text x="192" y="120" font-size="10" fill="currentColor">(2, 1)</text>
<text x="212" y="160" font-size="10" fill="currentColor">(2,5; 0)</text>
</svg>`
        },
        {
          tipo: 'ejemplo', titulo: 'Depreciación lineal',
          html: String.raw`<p>Una máquina cuesta $12.000.000 y pierde $1.500.000 de valor cada año. Su valor en el año \(t\) es:</p>
<span class="formula">\(V(t)=12000000-1500000\,t\)</span>
<p>El intercepto es el valor inicial; la pendiente negativa es la pérdida anual. Vale cero cuando \(1500000\,t=12000000\), es decir, a los 8 años.</p>`
        },
        {
          tipo: 'error', titulo: 'Confundir los papeles',
          html: String.raw`<p>En \(y=3+2x\) la pendiente es 2 (el número que acompaña a \(x\)) y el intercepto es 3, aunque el 3 aparezca primero.</p>
<p>Al calcular \(m\), resta en el mismo orden arriba y abajo: \((y_2-y_1)\) sobre \((x_2-x_1)\), no sobre \((x_1-x_2)\).</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>La pendiente de \(y=4x-7\).</p>`, respuesta: 4, pista: 'El coeficiente de x.', solucion: String.raw`<p>\(m=4\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>El intercepto con el eje \(y\) de \(y=-3x+2\).</p>`, respuesta: 2, pista: 'El valor de y cuando x = 0.', solucion: String.raw`<p>\(b=2\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>La pendiente de la recta que pasa por \((2,5)\) y \((6,13)\).</p>`, respuesta: 2, pista: '(13 − 5) / (6 − 2).', solucion: String.raw`<p>\(\frac{8}{4}=2\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Una recta pasa por \((0,4)\) con pendiente 3. ¿Cuánto vale \(y\) cuando \(x=5\)?</p>`, respuesta: 19, pista: 'y = 3x + 4.', solucion: String.raw`<p>\(3\cdot 5+4=19\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Una recta con pendiente negativa:</p>`, opciones: ['Sube de izquierda a derecha', 'Baja de izquierda a derecha', 'Es horizontal'], correcta: 1, pista: 'Pendiente negativa: y disminuye cuando x crece.', solucion: String.raw`<p>Baja. Cada paso a la derecha la lleva más abajo.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Con \(V(t)=12000000-1500000\,t\), ¿en qué año \(t\) el valor llega a cero?</p>`, respuesta: 8, unidad: 'años', pista: 'Iguala a cero y despeja.', solucion: String.raw`<p>\(t=\frac{12000000}{1500000}=8\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Escribe la ecuación de la recta que pasa por \((1,3)\) y \((3,7)\), en la forma y=mx+b.</p>`, respuesta: ['y=2x+1', '2x+1'], compacto: true, placeholder: 'y=mx+b', pista: 'Primero m = (7 − 3)/(3 − 1).', solucion: String.raw`<p>\(m=2\); \(y-3=2(x-1)\), así que \(y=2x+1\).</p>` }
      ],
      cuaderno: [
        'Escribe y = mx + b y dibuja tres rectas: pendiente positiva, negativa y cero.',
        'Grafica y = −2x + 5 en papel cuadriculado marcando el intercepto y dos puntos más.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Escribe la función de depreciación de algo que tengas (auto, computador, celular) y calcula cuándo valdría cero.'
      ],
      videos: [
        { titulo: 'Pendiente de una recta', q: 'julioprofe pendiente de una recta' },
        { titulo: 'Función lineal y su gráfica', q: 'profe alex funcion lineal grafica pendiente' }
      ],
      cierre: 'La pendiente es cuánto cambia y por cada unidad de x. Es la primera tasa de cambio que conoces, y no será la última.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '7.3',
      titulo: 'La recta aplicada: costos, ingresos y punto de equilibrio',
      duracion: 60,
      objetivo: 'Modelar costos e ingresos con rectas, calcular la utilidad y encontrar el punto de equilibrio gráfica y algebraicamente.',
      porque: 'Es el ejercicio favorito de Economía, Contabilidad y Evaluación de Proyectos. Lo vas a ver en todos esos ramos, y ahora ya tienes las herramientas para hacerlo solo.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Tres rectas',
          html: String.raw`<span class="formula">\(C(q)=F+v\,q\qquad I(q)=p\,q\qquad U(q)=I(q)-C(q)=(p-v)\,q-F\)</span>
<p><strong>Costo:</strong> fijo \(F\) más variable \(v\) por unidad. <strong>Ingreso:</strong> precio \(p\) por cantidad; pasa por el origen (sin ventas no hay ingreso). <strong>Utilidad:</strong> la diferencia. Su pendiente, \(p-v\), es el <strong>margen</strong> por unidad.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Punto de equilibrio',
          html: String.raw`<p>Es la cantidad donde ingreso y costo son iguales (utilidad cero). Antes, se pierde; después, se gana.</p>
<span class="formula">\(p\,q=F+v\,q\ \Rightarrow\ q^*=\dfrac{F}{p-v}\)</span>
<svg viewBox="0 0 320 200" width="100%" style="max-width:360px;display:block;margin:8px auto" role="img" aria-label="Rectas de costo e ingreso que se cruzan en el punto de equilibrio">
<line x1="40" y1="190" x2="300" y2="190" stroke="currentColor" stroke-opacity="0.35"/>
<line x1="40" y1="10" x2="40" y2="190" stroke="currentColor" stroke-opacity="0.35"/>
<text x="296" y="186" font-size="11" fill="currentColor" text-anchor="end">q</text>
<text x="46" y="18" font-size="11" fill="currentColor">$</text>
<line x1="40" y1="135" x2="280" y2="69" stroke="var(--warn)" stroke-width="2"/>
<line x1="40" y1="190" x2="280" y2="14" stroke="var(--primary)" stroke-width="2"/>
<circle cx="160" cy="102" r="4" fill="currentColor"/>
<line x1="160" y1="102" x2="160" y2="190" stroke="currentColor" stroke-opacity="0.4" stroke-dasharray="3 3"/>
<text x="164" y="186" font-size="10" fill="currentColor">q*</text>
<text x="284" y="72" font-size="10" fill="var(--warn-ink)">C(q)</text>
<text x="284" y="18" font-size="10" fill="var(--primary-ink)">I(q)</text>
<text x="60" y="60" font-size="10" fill="currentColor" fill-opacity="0.7">pérdida</text>
<text x="200" y="140" font-size="10" fill="currentColor" fill-opacity="0.7">ganancia</text>
</svg>`
        },
        {
          tipo: 'ejemplo', titulo: 'Con números',
          html: String.raw`<p>\(F=50000\), \(v=300\), \(p=800\). Punto de equilibrio: \(q^*=\dfrac{50000}{800-300}=100\) unidades.</p>
<p>Utilidad al vender 150: \(U(150)=500\cdot 150-50000=25000\). Al vender 80: \(U(80)=40000-50000=-10000\), una pérdida.</p>`
        },
        {
          tipo: 'ejemplo', titulo: '¿Conviene la máquina nueva?',
          html: String.raw`<p>La máquina A cuesta \(200000+500q\) por mes y la B, \(500000+200q\). ¿Desde qué cantidad conviene B?</p>
<span class="formula">\(200000+500q=500000+200q\ \Rightarrow\ 300q=300000\ \Rightarrow\ q=1000\)</span>
<p>Con menos de 1.000 unidades al mes conviene A (menor costo fijo); con más, B (menor costo por unidad). Igualar dos costos es la misma idea que el punto de equilibrio.</p>`
        },
        {
          tipo: 'tip', titulo: 'Interpreta siempre pendiente e intercepto',
          html: String.raw`<p>En \(C(q)\), el intercepto es el costo fijo y la pendiente el costo por unidad. En \(U(q)\), la pendiente es el margen y el intercepto es \(-F\) (si no vendes nada, pierdes el fijo). Decirlo con palabras es lo que te piden en las pruebas.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>\(F=120000\), \(v=400\), \(p=1000\). Punto de equilibrio en unidades.</p>`, respuesta: 200, unidad: 'unidades', pista: 'F / (p − v).', solucion: String.raw`<p>\(\frac{120000}{600}=200\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Con los datos anteriores, utilidad al vender 350 unidades.</p>`, respuesta: 90000, unidad: '$', pista: '(p − v)·q − F.', solucion: String.raw`<p>\(600\cdot 350-120000=90000\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Con los mismos datos, utilidad al vender 150 unidades (con signo).</p>`, respuesta: -30000, unidad: '$', pista: 'Está bajo el punto de equilibrio: debe dar negativa.', solucion: String.raw`<p>\(600\cdot 150-120000=-30000\). Pérdida de $30.000.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>En \(U(q)=(p-v)q-F\), la pendiente representa:</p>`, opciones: ['El costo fijo', 'El margen por unidad', 'El precio'], correcta: 1, pista: 'Lo que acompaña a q.', solucion: String.raw`<p>\(p-v\): lo que gana cada unidad vendida después de pagar su costo variable.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Máquina A: \(200000+500q\). Máquina B: \(500000+200q\). ¿A partir de qué cantidad conviene B?</p>`, respuesta: 1000, unidad: 'unidades', pista: 'Iguala los costos.', solucion: String.raw`<p>\(300q=300000\), \(q=1000\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Si el precio sube a $1.200 (con \(F=120000\) y \(v=400\)), ¿cuál es el nuevo punto de equilibrio?</p>`, respuesta: 150, unidad: 'unidades', pista: 'Mayor margen, menos unidades para equilibrar.', solucion: String.raw`<p>\(\frac{120000}{800}=150\).</p>` }
      ],
      cuaderno: [
        'Escribe las tres fórmulas (C, I, U) y la del punto de equilibrio, con el significado de cada letra.',
        'Grafica C(q) = 50.000 + 300q e I(q) = 800q en el mismo plano (q de 0 a 200) y marca el cruce.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Inventa un pequeño negocio (por ejemplo, vender completos en un evento): estima F, v y p, y calcula cuántos necesitas vender para no perder.'
      ],
      videos: [
        { titulo: 'Punto de equilibrio', q: 'punto de equilibrio costo fijo variable explicacion grafica' },
        { titulo: 'Funciones de costo, ingreso y utilidad', q: 'funcion de costo ingreso y utilidad ejercicios resueltos' }
      ],
      cierre: 'Costo, ingreso y utilidad son tres rectas. Donde se cruzan las dos primeras empieza la ganancia.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '7.4',
      titulo: 'La parábola: función cuadrática',
      duracion: 60,
      objetivo: 'Graficar una parábola, encontrar su vértice y sus ceros, e interpretar el máximo o mínimo.',
      porque: 'Cuando el precio depende de la cantidad, el ingreso es una parábola y tiene un máximo. En cálculo encontrarás máximos con la derivada; aquí aprendes a verlos.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'y = ax² + bx + c',
          html: String.raw`<p>Su gráfico es una <strong>parábola</strong>. Si \(a>0\) abre hacia arriba y tiene un <strong>mínimo</strong>; si \(a<0\) abre hacia abajo y tiene un <strong>máximo</strong>. \(c\) es el intercepto con el eje \(y\).</p>
<p>Es simétrica respecto a una recta vertical que pasa por su punto más bajo (o más alto): el <strong>vértice</strong>.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Vértice y ceros',
          html: String.raw`<span class="formula">\(x_v=-\dfrac{b}{2a},\qquad y_v=f(x_v)\)</span>
<p>Los <strong>ceros</strong> (donde la parábola corta al eje \(x\)) son las soluciones de \(ax^2+bx+c=0\): factorización o fórmula general, semana 6. Por la simetría, el vértice está justo en el medio de los dos ceros.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Graficar y = x² − 4x + 3',
          html: String.raw`<p>\(a=1>0\): abre hacia arriba. Ceros: \((x-1)(x-3)=0\), en 1 y 3. Vértice: \(x_v=\frac{4}{2}=2\), \(y_v=4-8+3=-1\). Intercepto: 3.</p>
<table class="mini-tabla"><tr><th>x</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>y</th><td>3</td><td>0</td><td>−1</td><td>0</td><td>3</td></tr></table>
<svg viewBox="0 0 320 200" width="100%" style="max-width:360px;display:block;margin:8px auto" role="img" aria-label="Parábola y = x² − 4x + 3 con vértice en (2, −1)">
<line x1="30" y1="154" x2="300" y2="154" stroke="currentColor" stroke-opacity="0.35"/>
<line x1="80" y1="10" x2="80" y2="195" stroke="currentColor" stroke-opacity="0.35"/>
<text x="296" y="168" font-size="11" fill="currentColor" text-anchor="end">x</text>
<text x="86" y="18" font-size="11" fill="currentColor">y</text>
<path d="M40,10 Q160,334 280,10" fill="none" stroke="var(--primary)" stroke-width="2"/>
<circle cx="120" cy="154" r="4" fill="var(--primary)"/><circle cx="200" cy="154" r="4" fill="var(--primary)"/><circle cx="160" cy="172" r="4" fill="var(--danger)"/><circle cx="80" cy="100" r="4" fill="var(--primary)"/>
<text x="112" y="148" font-size="10" fill="currentColor">1</text>
<text x="204" y="148" font-size="10" fill="currentColor">3</text>
<text x="166" y="186" font-size="10" fill="currentColor">vértice (2, −1)</text>
<text x="86" y="98" font-size="10" fill="currentColor">(0, 3)</text>
</svg>`
        },
        {
          tipo: 'ejemplo', titulo: 'El ingreso máximo',
          html: String.raw`<p>\(I(q)=100q-2q^2\). Como \(a=-2<0\), tiene máximo. \(q_v=-\dfrac{100}{2\cdot(-2)}=25\) y \(I(25)=2500-1250=1250\).</p>
<p>Los ceros están en 0 y 50 (semana 5), y 25 es justo el medio. Vender 25 unidades maximiza el ingreso; vender más lo reduce, porque el precio cae.</p>`
        },
        {
          tipo: 'error', titulo: 'El máximo no está en un cero',
          html: String.raw`<p>En los ceros la función vale cero: ahí no hay máximo ni mínimo. El vértice está en el medio. Y mira siempre el signo de \(a\): te dice si lo que encontraste es un máximo o un mínimo.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'opcion', enunciado: String.raw`<p>\(y=-3x^2+2x+1\) tiene:</p>`, opciones: ['Un mínimo', 'Un máximo', 'Ninguno de los dos'], correcta: 1, pista: 'Mira el signo de a.', solucion: String.raw`<p>\(a=-3<0\): abre hacia abajo, tiene máximo.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>La coordenada \(x\) del vértice de \(y=x^2-6x+5\).</p>`, respuesta: 3, pista: '−b / (2a).', solucion: String.raw`<p>\(x_v=\frac{6}{2}=3\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>La coordenada \(y\) del vértice de la parábola anterior.</p>`, respuesta: -4, pista: 'Evalúa en x = 3.', solucion: String.raw`<p>\(9-18+5=-4\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>El mayor de los ceros de \(y=x^2-6x+5\).</p>`, respuesta: 5, pista: 'Factoriza.', solucion: String.raw`<p>\((x-1)(x-5)=0\): 1 y 5.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(I(q)=80q-q^2\). ¿Qué cantidad \(q\) maximiza el ingreso?</p>`, respuesta: 40, unidad: 'unidades', pista: 'a = −1, b = 80.', solucion: String.raw`<p>\(q_v=-\frac{80}{2\cdot(-1)}=40\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>¿Cuál es ese ingreso máximo?</p>`, respuesta: 1600, unidad: '$', pista: 'Evalúa I(40).', solucion: String.raw`<p>\(80\cdot 40-1600=1600\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>El intercepto con el eje \(y\) de \(y=2x^2-5x+7\).</p>`, respuesta: 7, pista: 'El valor cuando x = 0.', solucion: String.raw`<p>\(c=7\).</p>` }
      ],
      cuaderno: [
        'Escribe la fórmula del vértice y la regla del signo de a (hacia arriba o hacia abajo).',
        'Grafica y = x² − 4x + 3 con una tabla de x = 0 a 4 en papel cuadriculado, marcando ceros y vértice.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Para I(q) = 100q − 2q², haz una tabla con q = 0, 10, 20, 25, 30, 40, 50 y comprueba que el máximo está en 25.'
      ],
      videos: [
        { titulo: 'Función cuadrática: vértice y gráfica', q: 'julioprofe funcion cuadratica vertice grafica' },
        { titulo: 'Parábola desde cero', q: 'profe alex funcion cuadratica parabola desde cero' }
      ],
      cierre: 'El signo de a dice si hay máximo o mínimo; −b/(2a) dice dónde. Con eso lees cualquier parábola.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '7.5',
      titulo: 'Repaso y mini test de la semana 7',
      duracion: 60,
      tipo: 'test',
      objetivo: 'Comprobar que evalúas funciones, lees rectas, calculas puntos de equilibrio y analizas parábolas.',
      intro: String.raw`<p><strong>Repasa 10 minutos</strong> con el cuaderno cerrado:</p>
<ul>
<li>¿Qué significa f(3)?</li>
<li>¿Qué representan m y b en y = mx + b?</li>
<li>¿Cómo se calcula el punto de equilibrio?</li>
<li>¿Dónde está el vértice de una parábola y cómo sé si es máximo o mínimo?</li>
</ul>
<p>Luego resuelve las 10 preguntas en el cuaderno y marca aquí. <strong>Meta: 8 de 10.</strong></p>`,
      ejercicios: [
        { tipo: 'num', area: 'Funciones (7.1)', enunciado: String.raw`<p>Si \(f(x)=2x^2-3\), calcula \(f(-2)\).</p>`, respuesta: 5, solucion: String.raw`<p>\(2\cdot 4-3=5\).</p>` },
        { tipo: 'num', area: 'Funciones (7.1)', enunciado: String.raw`<p>¿Qué valor queda excluido del dominio de \(\dfrac{3}{x+4}\)?</p>`, respuesta: -4, solucion: String.raw`<p>\(x=-4\) anula el denominador.</p>` },
        { tipo: 'num', area: 'Rectas (7.2)', enunciado: String.raw`<p>Pendiente de la recta que pasa por \((1,2)\) y \((5,14)\).</p>`, respuesta: 3, solucion: String.raw`<p>\(\frac{12}{4}=3\).</p>` },
        { tipo: 'num', area: 'Rectas (7.2)', enunciado: String.raw`<p>Intercepto con el eje \(y\) de \(y=5-2x\).</p>`, respuesta: 5, solucion: String.raw`<p>\(b=5\).</p>` },
        { tipo: 'texto', area: 'Rectas (7.2)', enunciado: String.raw`<p>Ecuación de la recta con pendiente \(-1\) que pasa por \((0,6)\), en la forma y=mx+b.</p>`, respuesta: ['y=-x+6', '-x+6', 'y=6-x', '6-x', 'y=-1x+6'], compacto: true, placeholder: 'y=mx+b', solucion: String.raw`<p>\(y=-x+6\).</p>` },
        { tipo: 'num', area: 'Costos e ingresos (7.3)', enunciado: String.raw`<p>\(F=90000\), \(v=250\), \(p=700\). Punto de equilibrio en unidades.</p>`, respuesta: 200, unidad: 'unidades', solucion: String.raw`<p>\(\frac{90000}{450}=200\).</p>` },
        { tipo: 'num', area: 'Costos e ingresos (7.3)', enunciado: String.raw`<p>Con esos datos, utilidad al vender 300 unidades.</p>`, respuesta: 45000, unidad: '$', solucion: String.raw`<p>\(450\cdot 300-90000=45000\).</p>` },
        { tipo: 'num', area: 'Parábola (7.4)', enunciado: String.raw`<p>Coordenada \(x\) del vértice de \(y=2x^2-8x+1\).</p>`, respuesta: 2, solucion: String.raw`<p>\(x_v=\frac{8}{4}=2\).</p>` },
        { tipo: 'opcion', area: 'Parábola (7.4)', enunciado: String.raw`<p>\(y=4x^2-x+2\) abre hacia:</p>`, opciones: ['Arriba', 'Abajo'], correcta: 0, solucion: String.raw`<p>\(a=4>0\): hacia arriba.</p>` },
        { tipo: 'num', area: 'Parábola (7.4)', enunciado: String.raw`<p>\(I(q)=60q-3q^2\). Cantidad que maximiza el ingreso.</p>`, respuesta: 10, unidad: 'unidades', solucion: String.raw`<p>\(q_v=-\frac{60}{2\cdot(-3)}=10\).</p>` }
      ],
      cuaderno: [
        'Haz la hoja resumen de la semana 7: notación f(x), recta (m, b, dos puntos), costo-ingreso-utilidad, vértice.',
        'Resuelve el test completo en el cuaderno antes de responder en pantalla.',
        'Anota tu puntaje y las preguntas falladas.',
        'Si fallaste 3 o más, repite la sesión correspondiente antes de la semana 8.'
      ],
      videos: [
        { titulo: 'Ejercicios resueltos de función lineal y cuadrática', q: 'ejercicios resueltos funcion lineal y cuadratica aplicaciones' }
      ],
      cierre: 'Rectas y parábolas describen la mitad de los problemas de ingeniería. Ya sabes leerlas.'
    }
  ]
});
