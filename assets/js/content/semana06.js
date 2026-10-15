/* Semana 6 · Cuadráticas, sistemas e inecuaciones */
CURSO.semana({
  n: 6,
  bloque: 'B',
  titulo: 'Cuadráticas, sistemas e inecuaciones',
  subtitulo: 'Ecuaciones de segundo grado, sistemas de dos ecuaciones, inecuaciones e intervalos. Cierre del bloque de álgebra con una evaluación de mitad del plan.',
  meta: 'Con esto completas la caja de herramientas algebraica que piden Álgebra I y Cálculo Diferencial: resolver cualquier ecuación de segundo grado, encontrar dónde se cruzan dos relaciones y trabajar con desigualdades. El test de esta semana cubre las seis primeras.',
  resumen: [
    { t: 'Fórmula general', f: String.raw`x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}` },
    { t: 'Discriminante', f: String.raw`\Delta=b^2-4ac:\ \ \Delta>0\ \text{dos soluciones},\ \ \Delta=0\ \text{una},\ \ \Delta<0\ \text{ninguna real}` },
    { t: 'Producto cero', f: String.raw`A\cdot B=0\ \Rightarrow\ A=0\ \text{ o }\ B=0` },
    { t: 'Sistema: sustitución', f: String.raw`\text{despeja una incógnita y reemplázala en la otra ecuación}` },
    { t: 'Sistema: reducción', f: String.raw`\text{suma las ecuaciones para eliminar una incógnita}` },
    { t: 'Inecuación', f: String.raw`\text{al multiplicar o dividir por un negativo, se invierte el sentido}` },
    { t: 'Intervalos', f: String.raw`a\lt x\le b\ \Leftrightarrow\ x\in(a,b]` }
  ],
  sesiones: [
    /* ------------------------------------------------------------------ */
    {
      id: '6.1',
      titulo: 'Ecuaciones cuadráticas',
      duracion: 60,
      objetivo: 'Resolver ecuaciones de segundo grado por factorización, por raíz directa y con la fórmula general.',
      porque: 'Las parábolas describen ingresos, trayectorias y costos con un óptimo. Resolver una cuadrática te dice dónde una función vale cero o cuándo dos cantidades se igualan. En cálculo la usarás para encontrar máximos y mínimos.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Forma general y producto cero',
          html: String.raw`<p>Una ecuación cuadrática se escribe \(ax^2+bx+c=0\), con \(a\neq 0\). Lo normal es que tenga <strong>dos</strong> soluciones.</p>
<p>Si logras factorizar, usas la regla del producto cero: si \(A\cdot B=0\), entonces \(A=0\) o \(B=0\).</p>
<span class="formula">\(x^2-5x+6=0\ \Rightarrow\ (x-2)(x-3)=0\ \Rightarrow\ x=2\ \text{ o }\ x=3\)</span>`
        },
        {
          tipo: 'concepto', titulo: 'Raíz directa, cuando no hay término en x',
          html: String.raw`<p>\(x^2=49\) tiene dos soluciones: \(x=7\) y \(x=-7\), porque ambas al cuadrado dan 49. Se escribe \(x=\pm 7\).</p>
<p>\(3x^2-12=0\ \Rightarrow\ x^2=4\ \Rightarrow\ x=\pm 2\). No olvides la negativa.</p>`
        },
        {
          tipo: 'concepto', titulo: 'La fórmula general',
          html: String.raw`<p>Funciona siempre, se pueda factorizar o no:</p>
<span class="formula">\(x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}\)</span>
<p>Lo de adentro de la raíz, \(\Delta=b^2-4ac\), se llama discriminante y anticipa cuántas soluciones hay: si es positivo, dos; si es cero, una; si es negativo, ninguna real.</p>
<p>Ejemplo: \(2x^2-3x-2=0\). Aquí \(a=2\), \(b=-3\), \(c=-2\). \(\Delta=9+16=25\). Entonces \(x=\dfrac{3\pm 5}{4}\): \(x=2\) o \(x=-\dfrac{1}{2}\).</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Cuatro ecuaciones, cuatro caminos',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(x^2+2x-15=0\): factoriza, \((x+5)(x-3)=0\): \(x=-5\) o \(x=3\).</div></div>
<div class="paso"><span class="paso-n">2</span><div>\(x^2-6x+9=0\): \((x-3)^2=0\): una sola solución, \(x=3\). (\(\Delta=36-36=0\).)</div></div>
<div class="paso"><span class="paso-n">3</span><div>\(x^2+4x+5=0\): \(\Delta=16-20=-4\). Sin solución real: la parábola nunca toca el eje.</div></div>
<div class="paso"><span class="paso-n">4</span><div>\(x^2-2x-1=0\): no se factoriza con enteros. Fórmula: \(\Delta=8\), \(x=\dfrac{2\pm\sqrt 8}{2}=1\pm\sqrt 2\), es decir, \(2{,}41\) y \(-0{,}41\).</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'Cuándo el ingreso vale $1.200',
          html: String.raw`<p>El ingreso es \(I=100q-2q^2\). ¿Para qué producción el ingreso es exactamente 1.200?</p>
<span class="formula">\(100q-2q^2=1200\ \Rightarrow\ 2q^2-100q+1200=0\ \Rightarrow\ q^2-50q+600=0\ \Rightarrow\ (q-20)(q-30)=0\)</span>
<p>Hay dos producciones que dan ese ingreso: 20 y 30 unidades. Entre ambas el ingreso es mayor (en la semana 7 verás que el máximo está en 25).</p>`
        },
        {
          tipo: 'error', titulo: 'Dividir por la incógnita',
          html: String.raw`<p>En \(x^2=5x\), si divides por \(x\) obtienes \(x=5\) y <strong>pierdes</strong> la solución \(x=0\). Pasa todo a un lado y factoriza: \(x(x-5)=0\), de donde \(x=0\) o \(x=5\).</p>
<p>Y en la raíz directa, no olvides el \(\pm\).</p>`
        }
      ],
      ejercicios: [
        { tipo: 'opcion', enunciado: String.raw`<p>Las soluciones de \((x-4)(x+1)=0\) son:</p>`, opciones: [String.raw`\(4\) y \(-1\)`, String.raw`\(-4\) y \(1\)`, String.raw`\(4\) y \(1\)`], correcta: 0, pista: 'Cada factor igualado a cero.', solucion: String.raw`<p>\(x-4=0\) da 4; \(x+1=0\) da \(-1\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>La solución positiva de \(x^2=81\).</p>`, respuesta: 9, pista: 'Raíz directa.', solucion: String.raw`<p>\(x=\pm 9\); la positiva es 9.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>La solución mayor de \(x^2-7x+12=0\).</p>`, respuesta: 4, pista: 'Factoriza: dos números que multiplicados den 12 y sumados 7.', solucion: String.raw`<p>\((x-3)(x-4)=0\): soluciones 3 y 4. La mayor es 4.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>La solución negativa de \(x^2+3x-10=0\).</p>`, respuesta: -5, pista: 'Factoriza con signos distintos.', solucion: String.raw`<p>\((x+5)(x-2)=0\): soluciones \(-5\) y 2.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>El discriminante de \(2x^2+3x-5=0\).</p>`, respuesta: 49, pista: 'b² − 4ac con a = 2, b = 3, c = −5.', solucion: String.raw`<p>\(9-4\cdot 2\cdot(-5)=9+40=49\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>La solución mayor de \(2x^2+3x-5=0\).</p>`, respuesta: 1, pista: 'Usa la fórmula general con Δ = 49.', solucion: String.raw`<p>\(x=\frac{-3\pm 7}{4}\): \(1\) y \(-2{,}5\). La mayor es 1.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Con \(I=100q-2q^2\), ¿cuál es la <strong>menor</strong> producción \(q\) para la que el ingreso es $800? (Plantea \(q^2-50q+400=0\).)</p>`, respuesta: 10, unidad: 'unidades', pista: 'Dos números que multiplicados den 400 y sumados 50.', solucion: String.raw`<p>\((q-10)(q-40)=0\): 10 o 40. La menor es 10.</p>` }
      ],
      cuaderno: [
        'Copia la fórmula general y el significado de cada caso del discriminante.',
        'Resuelve 2x² − 3x − 2 = 0 con la fórmula general, identificando a, b y c por escrito antes de reemplazar.',
        'Resuelve los ejercicios a mano antes de comprobarlos; verifica al menos dos soluciones reemplazando.',
        'Resuelve x² = 5x de dos formas: la correcta (factorizando) y la incorrecta (dividiendo por x), y anota qué solución se pierde.'
      ],
      videos: [
        { titulo: 'Ecuación cuadrática con la fórmula general', q: 'julioprofe ecuacion cuadratica formula general' },
        { titulo: 'Ecuaciones cuadráticas por factorización', q: 'profe alex ecuaciones cuadraticas por factorizacion' }
      ],
      cierre: 'Pasa todo a un lado, iguala a cero y elige: factorizar si se puede, fórmula general si no.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '6.2',
      titulo: 'Sistemas de dos ecuaciones',
      duracion: 60,
      objetivo: 'Resolver sistemas 2×2 por sustitución y por reducción, e interpretar la solución como un cruce.',
      porque: 'Dos restricciones, dos incógnitas: cuántas unidades de cada producto, qué mezcla cumple dos condiciones, dónde se cruzan oferta y demanda. Es la base de Investigación de Operaciones y de Economía.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Qué es un sistema',
          html: String.raw`<p>Dos ecuaciones con dos incógnitas. La solución es el par \((x,y)\) que cumple <strong>ambas</strong> a la vez. Si cada ecuación es una recta, la solución es el punto donde se cruzan.</p>
<p>Puede haber una solución (las rectas se cruzan), ninguna (son paralelas) o infinitas (son la misma recta). Lo normal en los problemas es una.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Sustitución',
          html: String.raw`<p>Despeja una incógnita en una ecuación y reemplázala en la <strong>otra</strong>.</p>
<span class="formula">\(\begin{cases}x+y=10\\ x-y=4\end{cases}\quad\Rightarrow\quad x=10-y\ \Rightarrow\ (10-y)-y=4\ \Rightarrow\ y=3,\ x=7\)</span>`
        },
        {
          tipo: 'concepto', titulo: 'Reducción (sumar y restar)',
          html: String.raw`<p>Acomoda las ecuaciones para que una incógnita tenga coeficientes opuestos y súmalas: esa incógnita desaparece.</p>
<span class="formula">\(\begin{cases}2x+3y=12\\ 4x-3y=6\end{cases}\quad\Rightarrow\quad \text{sumando: } 6x=18\ \Rightarrow\ x=3,\ \ y=2\)</span>
<p>Si los coeficientes no son opuestos, multiplica una ecuación (o las dos) por el número que haga falta.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Resuelto y verificado',
          html: String.raw`<p>\(3x+2y=16\) y \(x-y=2\). De la segunda, \(x=y+2\). En la primera: \(3(y+2)+2y=16\), \(5y+6=16\), \(y=2\). Luego \(x=4\).</p>
<p>Verificación en las dos: \(3\cdot 4+2\cdot 2=16\) y \(4-2=2\). Correcto.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Mesas y sillas',
          html: String.raw`<p>Una línea fabrica mesas (3 horas cada una) y sillas (1 hora cada una). En 40 horas produjo 20 piezas en total. ¿Cuántas de cada tipo?</p>
<span class="formula">\(\begin{cases}m+s=20\\ 3m+s=40\end{cases}\quad\Rightarrow\quad \text{restando: } 2m=20\ \Rightarrow\ m=10,\ s=10\)</span>
<p>Dos condiciones (piezas y horas) generan dos ecuaciones. Así se plantean casi todos los problemas de producción.</p>`
        },
        {
          tipo: 'error', titulo: 'Sustituir en la misma ecuación',
          html: String.raw`<p>Si despejas \(x\) de la primera ecuación y lo reemplazas en la primera, obtienes \(0=0\): no avanzaste. Siempre en la otra. Y verifica en <strong>las dos</strong>: cumplir una sola no basta.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>\(x+y=12\) y \(x-y=2\). ¿Cuánto vale \(x\)?</p>`, respuesta: 7, pista: 'Suma las dos ecuaciones.', solucion: String.raw`<p>\(2x=14\), \(x=7\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>En el sistema anterior, ¿cuánto vale \(y\)?</p>`, respuesta: 5, pista: 'Reemplaza x = 7 en cualquiera.', solucion: String.raw`<p>\(7+y=12\), \(y=5\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(2x+y=11\) y \(x-y=1\). ¿Cuánto vale \(x\)?</p>`, respuesta: 4, pista: 'Las y tienen signos opuestos: suma.', solucion: String.raw`<p>\(3x=12\), \(x=4\) (y \(y=3\)).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(3x+2y=19\) y \(x=y+3\). ¿Cuánto vale \(y\)?</p>`, respuesta: 2, pista: 'Sustituye x en la primera.', solucion: String.raw`<p>\(3(y+3)+2y=19\), \(5y=10\), \(y=2\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Una bodega guarda cajas chicas de 2 kg y grandes de 5 kg. Son 30 cajas que pesan 105 kg en total. ¿Cuántas cajas grandes hay?</p>`, respuesta: 15, unidad: 'cajas', pista: 'c + g = 30 y 2c + 5g = 105.', solucion: String.raw`<p>De la primera, \(c=30-g\). En la segunda: \(60-2g+5g=105\), \(3g=45\), \(g=15\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Un sistema cuyas dos rectas son paralelas tiene:</p>`, opciones: ['Una solución', 'Ninguna solución', 'Infinitas soluciones'], correcta: 1, pista: '¿Dónde se cruzan dos rectas paralelas?', solucion: String.raw`<p>No se cruzan nunca: no hay ningún par \((x,y)\) que cumpla ambas.</p>` }
      ],
      cuaderno: [
        'Escribe los dos métodos (sustitución y reducción) con un sistema resuelto por cada uno.',
        'Dibuja en un plano las rectas x + y = 10 y x − y = 4 (dos puntos cada una) y marca el cruce en (7, 3).',
        'Resuelve los ejercicios a mano antes de comprobarlos y verifica en ambas ecuaciones.',
        'Plantea el problema de las cajas con dos ecuaciones antes de resolverlo.'
      ],
      videos: [
        { titulo: 'Sistemas 2×2 por sustitución', q: 'julioprofe sistemas de ecuaciones 2x2 metodo de sustitucion' },
        { titulo: 'Sistemas por reducción', q: 'profe alex sistemas de ecuaciones metodo de reduccion' }
      ],
      cierre: 'Dos incógnitas piden dos ecuaciones. Resuelve con el método que deje la cuenta más simple.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '6.3',
      titulo: 'Inecuaciones e intervalos',
      duracion: 60,
      objetivo: 'Resolver inecuaciones lineales, escribir la solución como intervalo y representarla en la recta.',
      porque: 'Restricciones como "el costo no puede superar el presupuesto" o "la producción debe ser al menos 500" son inecuaciones. En Investigación de Operaciones todo problema se plantea con ellas, y en cálculo definen dominios.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Leer desigualdades',
          html: String.raw`<table class="mini-tabla">
<tr><th>Frase</th><th>Símbolo</th></tr>
<tr><td>al menos 500, como mínimo 500</td><td>\(q\ge 500\)</td></tr>
<tr><td>como máximo 20, no más de 20</td><td>\(x\le 20\)</td></tr>
<tr><td>más de 20</td><td>\(x>20\)</td></tr>
<tr><td>menos de 20</td><td>\(x<20\)</td></tr>
<tr><td>entre 3 y 8 (incluidos)</td><td>\(3\le x\le 8\)</td></tr>
</table>`
        },
        {
          tipo: 'concepto', titulo: 'Resolver: como una ecuación, con una excepción',
          html: String.raw`<p>Sumas, restas, multiplicas y divides a ambos lados igual que en una ecuación. La única diferencia:</p>
<span class="formula">\(\text{Si multiplicas o divides por un número negativo, el sentido se invierte.}\)</span>
<p>\(-2x<6\ \Rightarrow\ x>-3\). Comprueba con un número: \(x=0\) cumple \(-2\cdot 0<6\). Correcto.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Intervalos y recta numérica',
          html: String.raw`<p>La solución de una inecuación es un tramo de la recta. Se escribe con corchete si el extremo está incluido y con paréntesis si no. El infinito siempre lleva paréntesis.</p>
<p>\(x\ge 2\) es \([2,\infty)\); \(x<5\) es \((-\infty,5)\); \(3\le x<8\) es \([3,8)\). En el dibujo: punto lleno si está incluido, vacío si no.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Cuatro inecuaciones resueltas',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(3x-7\le 11\): \(3x\le 18\), \(x\le 6\). Intervalo \((-\infty,6]\).</div></div>
<div class="paso"><span class="paso-n">2</span><div>\(5-2x>1\): \(-2x>-4\), divido por \(-2\) e invierto: \(x<2\). Intervalo \((-\infty,2)\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>\(2(x+1)\ge x-3\): \(2x+2\ge x-3\), \(x\ge -5\). Intervalo \([-5,\infty)\).</div></div>
<div class="paso"><span class="paso-n">4</span><div>\(-1\lt 2x+3\le 9\): resto 3 en los tres lados, \(-4\lt 2x\le 6\); divido por 2: \(-2\lt x\le 3\). Intervalo \((-2,3]\).</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'Presupuesto',
          html: String.raw`<p>Producir \(q\) unidades cuesta \(80000+1200q\) y el presupuesto es $200.000. ¿Cuántas unidades se pueden producir?</p>
<span class="formula">\(80000+1200q\le 200000\ \Rightarrow\ 1200q\le 120000\ \Rightarrow\ q\le 100\)</span>
<p>Como máximo 100 unidades (y como mínimo 0, por sentido común: \(0\le q\le 100\)).</p>`
        },
        {
          tipo: 'error', titulo: 'Olvidar invertir el sentido',
          html: String.raw`<p>En \(-3x\le 12\), dividir por \(-3\) da \(x\ge -4\), no \(x\le -4\). Comprueba siempre con un número fácil: \(x=0\) cumple \(-3\cdot 0\le 12\), así que 0 debe estar en la solución, y lo está en \(x\ge -4\).</p>`
        }
      ],
      ejercicios: [
        { tipo: 'opcion', enunciado: String.raw`<p>La solución de \(2x+5>13\) es:</p>`, opciones: [String.raw`\(x>4\)`, String.raw`\(x>9\)`, String.raw`\(x<4\)`], correcta: 0, pista: 'Resta 5 y divide por 2 (positivo: no se invierte).', solucion: String.raw`<p>\(2x>8\), \(x>4\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>La solución de \(-3x\le 12\) es:</p>`, opciones: [String.raw`\(x\le -4\)`, String.raw`\(x\ge -4\)`, String.raw`\(x\ge 4\)`], correcta: 1, pista: 'Dividir por negativo invierte.', solucion: String.raw`<p>\(x\ge -4\). Prueba con \(x=0\): \(0\le 12\), cumple.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>La solución de \(4-x<1\) es:</p>`, opciones: [String.raw`\(x<3\)`, String.raw`\(x>3\)`, String.raw`\(x<-3\)`], correcta: 1, pista: 'Resta 4: −x < −3. Multiplica por −1 e invierte.', solucion: String.raw`<p>\(-x<-3\ \Rightarrow\ x>3\). Prueba con \(x=10\): \(4-10=-6<1\), cumple.</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Escribe \(x\ge 7\) como intervalo. Usa "inf" para infinito, por ejemplo [2,inf).</p>`, respuesta: ['[7,inf)', '[7,+inf)', '[7,∞)', '[7,+∞)'], compacto: true, placeholder: '[a,inf)', pista: 'El 7 está incluido; el infinito nunca se incluye.', solucion: String.raw`<p>\([7,\infty)\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Un plan de datos cuesta $5.000 fijos más $200 por GB. ¿Cuántos GB como máximo se pueden usar con $12.000? (Resuelve \(5000+200g\le 12000\).)</p>`, respuesta: 35, unidad: 'GB', pista: '200g ≤ 7000.', solucion: String.raw`<p>\(200g\le 7000\), \(g\le 35\). Como máximo 35 GB.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>El intervalo \((-2,3]\) contiene:</p>`, opciones: [String.raw`al \(-2\) pero no al \(3\)`, String.raw`al \(3\) pero no al \(-2\)`, 'a ambos'], correcta: 1, pista: 'Paréntesis excluye, corchete incluye.', solucion: String.raw`<p>El paréntesis en \(-2\) lo excluye; el corchete en 3 lo incluye.</p>` }
      ],
      cuaderno: [
        'Escribe la regla de la inversión del sentido con un ejemplo y su comprobación numérica.',
        'Dibuja en rectas numéricas los intervalos (−∞, 6], (−2, 3] y [−5, ∞).',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Escribe tres restricciones de tu trabajo o tu presupuesto como inecuaciones.'
      ],
      videos: [
        { titulo: 'Inecuaciones lineales', q: 'julioprofe inecuaciones lineales' },
        { titulo: 'Intervalos y desigualdades', q: 'profe alex intervalos y desigualdades' }
      ],
      cierre: 'Resuélvela como ecuación, pero si multiplicas o divides por un negativo, da vuelta el signo.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '6.4',
      titulo: 'Taller: elegir la herramienta correcta',
      duracion: 60,
      objetivo: 'Frente a un problema, decidir si se resuelve con una ecuación lineal, una cuadrática, un sistema o una inecuación, y resolverlo.',
      porque: 'En las pruebas y en el trabajo nadie te dice qué tipo de ecuación usar. Saber elegir es tan importante como saber resolver.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Guía de decisión',
          html: String.raw`<ul>
<li>¿Una incógnita y una relación de sumas y productos por números? → <strong>Ecuación lineal.</strong></li>
<li>¿Aparece la incógnita al cuadrado (áreas, ingreso con precio que depende de la cantidad, producto de dos cantidades que dependen de \(x\))? → <strong>Cuadrática.</strong></li>
<li>¿Dos incógnitas con dos condiciones distintas? → <strong>Sistema.</strong></li>
<li>¿Dice "al menos", "como máximo", "no superar", "hasta"? → <strong>Inecuación.</strong></li>
</ul>
<p>Decide primero, plantea después, calcula al final.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Lineal: cuánto hay que vender',
          html: String.raw`<p>Un vendedor gana $400.000 fijos más el 5 % de sus ventas. ¿Cuánto debe vender para ganar $650.000?</p>
<span class="formula">\(400000+0{,}05V=650000\ \Rightarrow\ 0{,}05V=250000\ \Rightarrow\ V=5000000\)</span>`
        },
        {
          tipo: 'ejemplo', titulo: 'Cuadrática: un terreno',
          html: String.raw`<p>Un terreno rectangular tiene 3 m más de largo que de ancho y su área es 70 m². Si el ancho es \(a\), el largo es \(a+3\):</p>
<span class="formula">\(a(a+3)=70\ \Rightarrow\ a^2+3a-70=0\ \Rightarrow\ (a+10)(a-7)=0\)</span>
<p>Las soluciones son \(-10\) y 7. Un ancho negativo no existe: el ancho es 7 m y el largo 10 m.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Sistema: entradas',
          html: String.raw`<p>Entradas de adulto a $5.000 y de niño a $3.000. Se vendieron 120 entradas por $480.000.</p>
<span class="formula">\(\begin{cases}a+n=120\\ 5000a+3000n=480000\end{cases}\ \Rightarrow\ 5a+3(120-a)=480\ \Rightarrow\ 2a=120\ \Rightarrow\ a=60,\ n=60\)</span>`
        },
        {
          tipo: 'ejemplo', titulo: 'Inecuación: un flete',
          html: String.raw`<p>Un flete cobra $20.000 más $500 por kilómetro. ¿Hasta cuántos kilómetros se puede contratar con $45.000?</p>
<span class="formula">\(20000+500k\le 45000\ \Rightarrow\ 500k\le 25000\ \Rightarrow\ k\le 50\)</span>`
        },
        {
          tipo: 'tip', titulo: 'Después de resolver, vuelve al enunciado',
          html: String.raw`<p>¿La respuesta tiene sentido? ¿Negativa donde no puede serlo? ¿Decimal donde deben ser unidades enteras? Descarta las soluciones imposibles y di por qué. Esa frase final vale puntos en cualquier prueba.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'opcion', enunciado: String.raw`<p>"Un rectángulo tiene 2 m más de largo que de ancho y su área es 48 m²." ¿Qué herramienta usas?</p>`, opciones: ['Ecuación lineal', 'Ecuación cuadrática', 'Sistema de ecuaciones'], correcta: 1, pista: 'Área = ancho × largo, y ambos dependen de la misma incógnita.', solucion: String.raw`<p>\(a(a+2)=48\) tiene la incógnita al cuadrado: cuadrática.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Resuelve el problema anterior: ¿cuánto mide el ancho?</p>`, respuesta: 6, unidad: 'm', pista: 'a² + 2a − 48 = 0.', solucion: String.raw`<p>\((a+8)(a-6)=0\). El ancho es 6 m (se descarta \(-8\)); el largo, 8 m.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>"Entre lápices a $300 y cuadernos a $1.200 compré 10 cosas por $4.800." ¿Qué herramienta usas?</p>`, opciones: ['Ecuación lineal', 'Ecuación cuadrática', 'Sistema de ecuaciones'], correcta: 2, pista: 'Dos incógnitas (lápices y cuadernos) y dos condiciones (cantidad y dinero).', solucion: String.raw`<p>\(l+c=10\) y \(300l+1200c=4800\): un sistema.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Resuelve el problema anterior: ¿cuántos cuadernos?</p>`, respuesta: 2, unidad: 'cuadernos', pista: 'l = 10 − c; reemplaza en la segunda.', solucion: String.raw`<p>\(300(10-c)+1200c=4800\), \(3000+900c=4800\), \(c=2\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Un técnico cobra $12.000 por visita más $9.000 por hora. ¿Cuántas horas como máximo puede contratar alguien con $57.000?</p>`, respuesta: 5, unidad: 'horas', pista: 'Inecuación: 12000 + 9000h ≤ 57000.', solucion: String.raw`<p>\(9000h\le 45000\), \(h\le 5\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>El beneficio de una línea es \(B=-q^2+40q-300\). ¿Cuál es la <strong>menor</strong> producción \(q\) con beneficio cero?</p>`, respuesta: 10, unidad: 'unidades', pista: 'Multiplica por −1: q² − 40q + 300 = 0.', solucion: String.raw`<p>\((q-10)(q-30)=0\): 10 y 30. La menor es 10.</p>` }
      ],
      cuaderno: [
        'Copia la guía de decisión como un diagrama de flujo con flechas.',
        'Para cada ejercicio, escribe primero la herramienta elegida y el planteo; solo después resuelve.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Relee lo que escribiste al final de la semana 3 (qué te costaba) y anota qué cambió.'
      ],
      videos: [
        { titulo: 'Problemas de planteo resueltos', q: 'problemas de planteo ecuaciones lineales cuadraticas sistemas resueltos' },
        { titulo: 'Problemas con sistemas de ecuaciones', q: 'julioprofe problemas con sistemas de ecuaciones 2x2' }
      ],
      cierre: 'Primero decide qué tipo de problema es. Después plantea. Al final calcula. Nunca al revés.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '6.5',
      titulo: 'Evaluación de mitad del plan',
      duracion: 60,
      tipo: 'test',
      objetivo: 'Comprobar las seis primeras semanas de una vez: números, porcentajes, potencias, ecuaciones, factorización y lo de esta semana.',
      intro: String.raw`<p>Este test es más largo: <strong>15 preguntas</strong> que cubren las semanas 1 a 6. Resérvate la hora completa. Resuelve todo en el cuaderno, en orden, sin mirar las lecciones ni el formulario.</p>
<p><strong>Meta: 12 de 15.</strong> El resultado se muestra por semana, para que sepas exactamente qué repasar antes de entrar al bloque de funciones. Escribe los exponentes con ^ (x^2).</p>`,
      ejercicios: [
        { tipo: 'num', area: 'Semana 1 · Números', enunciado: String.raw`<p>\(-6-(-9)\)</p>`, respuesta: 3, solucion: String.raw`<p>\(-6+9=3\).</p>` },
        { tipo: 'num', area: 'Semana 1 · Números', enunciado: String.raw`<p>\(2+3\cdot(4-1)^2\)</p>`, respuesta: 29, solucion: String.raw`<p>\(3^2=9\), \(3\cdot 9=27\), \(2+27=29\).</p>` },
        { tipo: 'num', area: 'Semana 1 · Números', enunciado: String.raw`<p>\(\dfrac{3}{4}+\dfrac{1}{6}\) (fracción o decimal)</p>`, respuesta: 0.916667, placeholder: 'a/b', solucion: String.raw`<p>\(\frac{9}{12}+\frac{2}{12}=\frac{11}{12}\).</p>` },
        { tipo: 'num', area: 'Semana 2 · Porcentajes y proporciones', enunciado: String.raw`<p>El 18 % de 1.500.</p>`, respuesta: 270, solucion: String.raw`<p>\(0{,}18\cdot 1500=270\).</p>` },
        { tipo: 'num', area: 'Semana 2 · Porcentajes y proporciones', enunciado: String.raw`<p>6 máquinas terminan un pedido en 10 horas. ¿Cuántas horas tardan 15 máquinas?</p>`, respuesta: 4, unidad: 'h', solucion: String.raw`<p>Inversa: \(6\cdot 10=60\); \(60\div 15=4\).</p>` },
        { tipo: 'num', area: 'Semana 3 · Potencias y álgebra', enunciado: String.raw`<p>\(2^{-3}\) como decimal.</p>`, respuesta: 0.125, tol: 0.001, solucion: String.raw`<p>\(\frac{1}{8}=0{,}125\).</p>` },
        { tipo: 'texto', area: 'Semana 3 · Potencias y álgebra', enunciado: String.raw`<p>Reduce \(3(x-2)+2(x+5)\).</p>`, respuesta: ['5x+4', '4+5x'], compacto: true, placeholder: 'ax+b', solucion: String.raw`<p>\(3x-6+2x+10=5x+4\).</p>` },
        { tipo: 'num', area: 'Semana 4 · Ecuaciones', enunciado: String.raw`<p>\(4x-9=2x+5\)</p>`, respuesta: 7, solucion: String.raw`<p>\(2x=14\), \(x=7\).</p>` },
        { tipo: 'num', area: 'Semana 4 · Ecuaciones', enunciado: String.raw`<p>\(\dfrac{x}{3}+\dfrac{x}{4}=7\)</p>`, respuesta: 12, solucion: String.raw`<p>Por 12: \(4x+3x=84\), \(x=12\).</p>` },
        { tipo: 'opcion', area: 'Semana 4 · Ecuaciones', enunciado: String.raw`<p>De \(P=2a+2b\), despeja \(a\):</p>`, opciones: [String.raw`\(a=\dfrac{P-2b}{2}\)`, String.raw`\(a=P-2b\)`, String.raw`\(a=\dfrac{P-b}{2}\)`], correcta: 0, solucion: String.raw`<p>\(P-2b=2a\), \(a=\frac{P-2b}{2}\).</p>` },
        { tipo: 'texto', area: 'Semana 5 · Factorización', enunciado: String.raw`<p>Factoriza \(x^2-5x+6\).</p>`, respuesta: ['(x-2)(x-3)', '(x-3)(x-2)'], compacto: true, placeholder: '(x-a)(x-b)', solucion: String.raw`<p>\(-2\) y \(-3\): \((x-2)(x-3)\).</p>` },
        { tipo: 'texto', area: 'Semana 5 · Factorización', enunciado: String.raw`<p>Simplifica \(\dfrac{x^2-1}{x+1}\).</p>`, respuesta: ['x-1'], compacto: true, placeholder: 'x-...', solucion: String.raw`<p>\(\frac{(x+1)(x-1)}{x+1}=x-1\).</p>` },
        { tipo: 'num', area: 'Semana 6 · Cuadráticas, sistemas e inecuaciones', enunciado: String.raw`<p>La solución mayor de \(x^2-2x-8=0\).</p>`, respuesta: 4, solucion: String.raw`<p>\((x-4)(x+2)=0\): 4 y \(-2\).</p>` },
        { tipo: 'num', area: 'Semana 6 · Cuadráticas, sistemas e inecuaciones', enunciado: String.raw`<p>\(x+y=9\) y \(x-y=1\). ¿Cuánto vale \(x\)?</p>`, respuesta: 5, solucion: String.raw`<p>\(2x=10\), \(x=5\).</p>` },
        { tipo: 'opcion', area: 'Semana 6 · Cuadráticas, sistemas e inecuaciones', enunciado: String.raw`<p>La solución de \(-2x+3\ge 11\) es:</p>`, opciones: [String.raw`\(x\le -4\)`, String.raw`\(x\ge -4\)`, String.raw`\(x\le 4\)`], correcta: 0, solucion: String.raw`<p>\(-2x\ge 8\), divido por \(-2\) e invierto: \(x\le -4\).</p>` }
      ],
      cuaderno: [
        'Resuelve las 15 preguntas en el cuaderno, en orden, sin mirar las lecciones.',
        'Anota el puntaje por semana que te muestra el resultado y marca las semanas con menos de 70 %.',
        'Dedica tu próxima sesión libre a repetir el mini test de esas semanas.',
        'Escribe media página: qué ha cambiado desde la semana 1 y qué te sigue costando.'
      ],
      videos: [
        { titulo: 'Repaso de álgebra básica para ingeniería', q: 'repaso algebra basica ecuaciones factorizacion sistemas ejercicios' }
      ],
      cierre: 'Mitad del camino. Lo que falta se construye sobre lo que ya tienes.'
    }
  ]
});
