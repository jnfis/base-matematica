/* Semana 8 · Funciones II: crecer y decrecer */
CURSO.semana({
  n: 8,
  bloque: 'C',
  titulo: 'Funciones II: crecer y decrecer',
  subtitulo: 'Exponenciales, logaritmos, lectura de gráficos y cómo elegir el modelo correcto.',
  meta: 'El interés compuesto, el crecimiento de una población, la depreciación acelerada y la demanda ante el precio no son rectas. Esta semana cierra el bloque de funciones con los modelos que faltan y con la habilidad más importante: leer un gráfico y entender qué dice.',
  resumen: [
    { t: 'Función exponencial', f: String.raw`f(x)=a\cdot b^x,\qquad b>1\ \text{crece},\quad 0\lt b\lt 1\ \text{decrece}` },
    { t: 'Interés compuesto', f: String.raw`M=C\,(1+i)^t` },
    { t: 'Regla del 70 (años para duplicar)', f: String.raw`t\approx\frac{70}{\text{tasa en \%}}` },
    { t: 'Logaritmo', f: String.raw`\log_b a=c\ \Leftrightarrow\ b^c=a` },
    { t: 'Propiedades', f: String.raw`\log(xy)=\log x+\log y,\quad \log\frac{x}{y}=\log x-\log y,\quad \log x^n=n\log x` },
    { t: 'Resolver una exponencial', f: String.raw`b^x=a\ \Rightarrow\ x=\frac{\log a}{\log b}` },
    { t: 'Tasa de cambio promedio', f: String.raw`\frac{f(b)-f(a)}{b-a}` },
    { t: 'Proporcionalidad inversa', f: String.raw`y=\frac{k}{x}` }
  ],
  sesiones: [
    /* ------------------------------------------------------------------ */
    {
      id: '8.1',
      titulo: 'Función exponencial',
      duracion: 60,
      objetivo: 'Reconocer crecimiento y decrecimiento exponencial, calcular con interés compuesto y compararlo con el crecimiento lineal.',
      porque: 'Un crédito, una inversión, una población de bacterias o la caída del valor de un equipo crecen o decrecen por porcentaje, no por una cantidad fija. Esa es la exponencial, y aparece en Economía, Estadística y Evaluación de Proyectos.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Crecer sumando o crecer multiplicando',
          html: String.raw`<p>Una recta <strong>suma</strong> lo mismo cada periodo (+100). Una exponencial <strong>multiplica</strong> por lo mismo cada periodo (×2, ×1,1).</p>
<span class="formula">\(f(x)=a\cdot b^x\): \(a\) es el valor inicial y \(b\) el factor por periodo</span>
<p>Si algo crece un \(i\) % por periodo, \(b=1+\frac{i}{100}\). Si decrece, \(b=1-\frac{i}{100}\).</p>
<table class="mini-tabla"><tr><th>t</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>10</td></tr>
<tr><th>100 + 100t</th><td>100</td><td>200</td><td>300</td><td>400</td><td>500</td><td>600</td><td>1.100</td></tr>
<tr><th>100 · 2ᵗ</th><td>100</td><td>200</td><td>400</td><td>800</td><td>1.600</td><td>3.200</td><td>102.400</td></tr></table>
<p>Al principio van parejas. Después, la exponencial se dispara.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Interés compuesto',
          html: String.raw`<span class="formula">\(M=C\,(1+i)^t\)</span>
<p>\(C\) es el capital inicial, \(i\) la tasa por periodo (como decimal) y \(t\) el número de periodos. $1.000.000 al 5 % anual durante 3 años: \(1000000\cdot 1{,}05^3=1157625\).</p>
<p>Con interés simple (sumar el 5 % del capital cada año) serían $1.150.000. La diferencia parece chica, pero crece cada año: por eso los créditos largos cuestan tanto.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Decrecimiento',
          html: String.raw`<p>Un equipo que pierde 20 % de valor al año vale \(V(t)=V_0\cdot 0{,}8^t\). Cada año queda el 80 % del año anterior. Nunca llega exactamente a cero, pero se acerca.</p>
<p><strong>Regla del 70:</strong> algo que crece al \(r\) % por periodo tarda aproximadamente \(70/r\) periodos en duplicarse. Al 7 % anual, unos 10 años. Sirve para estimar sin calculadora.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Tres exponenciales',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>500 bacterias se duplican cada hora: \(P(t)=500\cdot 2^t\). A las 4 horas, \(500\cdot 16=8000\).</div></div>
<div class="paso"><span class="paso-n">2</span><div>Un auto de $10.000.000 pierde 15 % anual: \(V(3)=10000000\cdot 0{,}85^3=6141250\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>Inflación de 4 % anual: lo que hoy cuesta $1.000 costará en 10 años \(1000\cdot 1{,}04^{10}\approx 1480\).</div></div>`
        },
        {
          tipo: 'error', titulo: 'Sumar porcentajes',
          html: String.raw`<p>Tres años al 10 % no son 30 %: es \(1{,}1^3=1{,}331\), un 33,1 %. Cada año el interés se calcula sobre lo acumulado. Ya lo viste con los descuentos en la semana 2: los porcentajes se multiplican, no se suman.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Si \(f(x)=3\cdot 2^x\), calcula \(f(4)\).</p>`, respuesta: 48, pista: '2⁴ = 16.', solucion: String.raw`<p>\(3\cdot 16=48\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>$2.000.000 al 6 % anual compuesto durante 2 años. ¿Cuál es el monto final?</p>`, respuesta: 2247200, unidad: '$', pista: '2.000.000 · 1,06².', solucion: String.raw`<p>\(1{,}06^2=1{,}1236\); \(2000000\cdot 1{,}1236=2247200\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Un equipo de $800.000 pierde 25 % de su valor cada año. ¿Cuánto vale después de 2 años?</p>`, respuesta: 450000, unidad: '$', pista: '800.000 · 0,75².', solucion: String.raw`<p>\(0{,}75^2=0{,}5625\); \(800000\cdot 0{,}5625=450000\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>¿Cuál crece más rápido a la larga?</p>`, opciones: [String.raw`\(f(t)=1000+500t\)`, String.raw`\(g(t)=1000\cdot 1{,}5^t\)`, 'Crecen igual'], correcta: 1, pista: 'Sumar contra multiplicar.', solucion: String.raw`<p>La exponencial. En \(t=10\): \(f=6000\) y \(g\approx 57665\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Regla del 70: ¿en cuántos años se duplica aproximadamente una inversión al 5 % anual?</p>`, respuesta: 14, unidad: 'años', pista: '70 / 5.', solucion: String.raw`<p>\(70\div 5=14\) años. (El valor exacto es 14,2.)</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Una población de 200 se triplica cada día. ¿Cuántos individuos hay después de 3 días?</p>`, respuesta: 5400, pista: '200 · 3³.', solucion: String.raw`<p>\(200\cdot 27=5400\).</p>` }
      ],
      cuaderno: [
        'Haz la tabla comparativa de 100 + 100t y 100·2ᵗ para t = 0 a 6 y grafica ambas en el mismo plano.',
        'Escribe M = C(1 + i)ᵗ y calcula cuánto tendrías en 5 años con $500.000 al 4 % anual.',
        'Resuelve los ejercicios a mano antes de comprobarlos (usa calculadora para las potencias).',
        'Escribe con tus palabras la diferencia entre crecer sumando y crecer multiplicando.'
      ],
      videos: [
        { titulo: 'Función exponencial desde cero', q: 'profe alex funcion exponencial desde cero' },
        { titulo: 'Interés compuesto explicado', q: 'julioprofe interes compuesto' }
      ],
      cierre: 'Lineal suma lo mismo cada periodo; exponencial multiplica por lo mismo. A la larga, multiplicar siempre gana.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '8.2',
      titulo: 'Logaritmos',
      duracion: 60,
      objetivo: 'Entender el logaritmo como el exponente que falta, usar sus propiedades y resolver ecuaciones exponenciales.',
      porque: 'El logaritmo responde "¿cuánto tiempo?": cuántos años para duplicar una inversión, cuántos periodos para que un equipo valga la mitad. En cálculo, ln(x) y eˣ son protagonistas, y en estadística los datos se transforman con logaritmos todo el tiempo.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'El exponente que falta',
          html: String.raw`<span class="formula">\(\log_b a=c\quad\Leftrightarrow\quad b^c=a\)</span>
<p>\(\log_2 8=3\) porque \(2^3=8\). \(\log_{10}1000=3\) porque \(10^3=1000\). \(\log_b 1=0\) siempre, porque \(b^0=1\).</p>
<p>Dos bases tienen nombre propio: base 10 se escribe \(\log\) y base \(e\approx 2{,}718\) se escribe \(\ln\) (logaritmo natural). Son las dos teclas de la calculadora.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Tres propiedades',
          html: String.raw`<span class="formula">\(\log(xy)=\log x+\log y\qquad \log\dfrac{x}{y}=\log x-\log y\qquad \log x^n=n\log x\)</span>
<p>Salen de las reglas de potencias (semana 3), porque un logaritmo es un exponente. La tercera es la más útil: <strong>baja el exponente</strong>, y con eso se resuelven las ecuaciones donde la incógnita está arriba.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Resolver bˣ = a',
          html: String.raw`<p>Aplica logaritmo a ambos lados y baja el exponente:</p>
<span class="formula">\(b^x=a\ \Rightarrow\ x\log b=\log a\ \Rightarrow\ x=\dfrac{\log a}{\log b}\)</span>
<p>\(2^x=100\): \(x=\dfrac{\log 100}{\log 2}=\dfrac{2}{0{,}301}\approx 6{,}64\). Comprobación: \(2^6=64\) y \(2^7=128\), así que 6,64 tiene sentido.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Logaritmos exactos y uno con calculadora',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(\log_3 81=4\), porque \(3^4=81\).</div></div>
<div class="paso"><span class="paso-n">2</span><div>\(\log 0{,}01=-2\), porque \(10^{-2}=0{,}01\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>\(\ln e^2=2\): el logaritmo deshace la potencia.</div></div>
<div class="paso"><span class="paso-n">4</span><div>¿Cuántos años para que $1.000.000 al 7 % llegue a $2.000.000? \(1{,}07^t=2\), \(t=\dfrac{\log 2}{\log 1{,}07}=\dfrac{0{,}3010}{0{,}0294}\approx 10{,}2\) años. Coincide con la regla del 70.</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'Cuándo vale la mitad',
          html: String.raw`<p>Un equipo pierde 20 % de valor al año. ¿Cuándo vale la mitad de lo que costó?</p>
<span class="formula">\(0{,}8^t=0{,}5\ \Rightarrow\ t=\dfrac{\log 0{,}5}{\log 0{,}8}=\dfrac{-0{,}301}{-0{,}097}\approx 3{,}1\ \text{años}\)</span>`
        },
        {
          tipo: 'error', titulo: 'El logaritmo de una suma',
          html: String.raw`<p>\(\log(a+b)\) <strong>no</strong> es \(\log a+\log b\). La propiedad es para productos. Y el logaritmo de cero o de un número negativo no existe: ninguna potencia de base positiva da cero ni negativo.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>\(\log_2 32\)</p>`, respuesta: 5, pista: '¿2 elevado a qué da 32?', solucion: String.raw`<p>\(2^5=32\), así que vale 5.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(\log_{10}10000\)</p>`, respuesta: 4, pista: 'Cuenta los ceros.', solucion: String.raw`<p>\(10^4=10000\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(\log_5 1\)</p>`, respuesta: 0, pista: 'Cualquier base elevada a 0 da 1.', solucion: String.raw`<p>\(5^0=1\), así que vale 0.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>\(\log(x\cdot y)\) es igual a:</p>`, opciones: [String.raw`\(\log x\cdot\log y\)`, String.raw`\(\log x+\log y\)`, String.raw`\(\log(x+y)\)`], correcta: 1, pista: 'El logaritmo convierte productos en sumas.', solucion: String.raw`<p>\(\log(xy)=\log x+\log y\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Resuelve \(3^x=81\).</p>`, respuesta: 4, pista: 'Potencias de 3.', solucion: String.raw`<p>\(3^4=81\), así que \(x=4\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>¿Cuántos años tarda $500.000 al 10 % anual en llegar a $1.000.000? Resuelve \(1{,}1^t=2\) y redondea a un decimal.</p>`, respuesta: 7.3, tol: 0.1, unidad: 'años', pista: 't = log 2 / log 1,1.', solucion: String.raw`<p>\(t=\frac{0{,}3010}{0{,}0414}\approx 7{,}3\) años. (La regla del 70 daba 7.)</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Un producto pierde 30 % de valor al año. ¿En cuántos años vale la mitad? Resuelve \(0{,}7^t=0{,}5\) con un decimal.</p>`, respuesta: 1.9, tol: 0.1, unidad: 'años', pista: 't = log 0,5 / log 0,7.', solucion: String.raw`<p>\(t=\frac{-0{,}301}{-0{,}155}\approx 1{,}9\) años.</p>` }
      ],
      cuaderno: [
        'Escribe la definición log_b(a) = c ⇔ bᶜ = a con tres ejemplos.',
        'Copia las tres propiedades y comprueba la tercera con log(2³) = 3·log 2 usando calculadora.',
        'Resuelve los ejercicios a mano (calculadora solo para los logaritmos).',
        'Resuelve 1,07ᵗ = 2 paso a paso y compara el resultado con la regla del 70.'
      ],
      videos: [
        { titulo: 'Logaritmos desde cero', q: 'julioprofe logaritmos desde cero' },
        { titulo: 'Ecuaciones exponenciales con logaritmos', q: 'profe alex ecuaciones exponenciales con logaritmos' }
      ],
      cierre: 'El logaritmo es el exponente que falta. Cuando la incógnita está arriba, el logaritmo la baja.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '8.3',
      titulo: 'Leer gráficos y funciones por tramos',
      duracion: 60,
      objetivo: 'Extraer información de un gráfico (crecimiento, decrecimiento, máximos, intersecciones, tasa de cambio) y entender funciones definidas por tramos.',
      porque: 'En la universidad y en el trabajo vas a leer más gráficos de los que vas a dibujar. Saber dónde una curva sube, baja o se cruza con otra es una habilidad que se evalúa en todos los ramos.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Vocabulario del gráfico',
          html: String.raw`<ul>
<li><strong>Creciente / decreciente:</strong> sube o baja al avanzar hacia la derecha. Se indica por intervalos.</li>
<li><strong>Máximo / mínimo:</strong> el punto más alto o más bajo (puede ser local, en una zona).</li>
<li><strong>Ceros:</strong> donde corta al eje \(x\). <strong>Intercepto:</strong> donde corta al eje \(y\).</li>
<li><strong>Intersección de dos curvas:</strong> donde valen lo mismo (equilibrio).</li>
<li><strong>Tasa de cambio promedio</strong> entre \(a\) y \(b\): \(\dfrac{f(b)-f(a)}{b-a}\), la pendiente de la recta que une esos dos puntos.</li>
<li><strong>Asíntota:</strong> una recta a la que la curva se acerca sin tocarla (como el costo medio acercándose a 1.200).</li>
</ul>`
        },
        {
          tipo: 'ejemplo', titulo: 'La producción durante un turno',
          html: String.raw`<p>El gráfico muestra la tasa de producción (piezas por hora) a lo largo de un turno de 8 horas.</p>
<svg viewBox="0 0 320 200" width="100%" style="max-width:380px;display:block;margin:8px auto" role="img" aria-label="Curva de producción por hora durante un turno">
<line x1="40" y1="170" x2="300" y2="170" stroke="currentColor" stroke-opacity="0.35"/>
<line x1="40" y1="10" x2="40" y2="170" stroke="currentColor" stroke-opacity="0.35"/>
<text x="296" y="186" font-size="11" fill="currentColor" text-anchor="end">hora</text>
<text x="46" y="18" font-size="11" fill="currentColor">piezas/h</text>
<path d="M40,150 C70,70 95,40 130,45 S165,120 180,125 S215,45 240,60 S275,130 290,160" fill="none" stroke="var(--primary)" stroke-width="2"/>
<g font-size="10" fill="currentColor"><text x="36" y="184">0</text><text x="98" y="184">2</text><text x="160" y="184">4</text><text x="222" y="184">6</text><text x="284" y="184">8</text></g>
<circle cx="125" cy="43" r="4" fill="var(--danger)"/><text x="100" y="36" font-size="10" fill="currentColor">máximo</text>
<circle cx="180" cy="125" r="4" fill="var(--warn)"/><text x="186" y="140" font-size="10" fill="currentColor">mínimo local</text>
</svg>
<p>Lectura: crece durante las primeras 3 horas (calentamiento), alcanza su <strong>máximo</strong> cerca de la hora 3, <strong>decrece</strong> hasta la hora 4,5 (colación), se recupera hasta la hora 6,5 y vuelve a caer al final del turno (cansancio). Un ingeniero industrial miraría ese valle y preguntaría cómo achicarlo.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Funciones por tramos',
          html: String.raw`<p>A veces la regla cambia según el intervalo. Una tarifa de agua: hasta 10 m³ se cobra $800 por m³; sobre 10 m³, cada m³ adicional cuesta $1.200.</p>
<span class="formula">\(f(x)=\begin{cases}800x & \text{si } x\le 10\\ 8000+1200(x-10) & \text{si } x>10\end{cases}\)</span>
<p>Para 14 m³: \(8000+1200\cdot 4=12800\). El valor absoluto también es una función por tramos: \(|x|=x\) si \(x\ge 0\) y \(|x|=-x\) si \(x<0\); su gráfico es una V.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Tasa de cambio promedio',
          html: String.raw`<p>Si la producción acumulada era de 120 piezas a las 2 horas y de 300 a las 5 horas, la tasa promedio entre esas horas fue:</p>
<span class="formula">\(\dfrac{300-120}{5-2}=\dfrac{180}{3}=60\ \text{piezas por hora}\)</span>
<p>Es una pendiente. En la semana 11 verás qué pasa cuando el intervalo se hace muy chico: ahí nace la derivada.</p>`
        },
        {
          tipo: 'tip', titulo: 'Antes de leer un gráfico, lee los ejes',
          html: String.raw`<p>Qué variable hay en cada eje, con qué unidad y en qué escala. ¿El eje vertical empieza en cero? Si no, una variación chica se ve enorme. La mitad de los gráficos engañosos juegan con eso.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'opcion', enunciado: String.raw`<p>Si la pendiente de una curva es negativa en un intervalo, en ese intervalo la función es:</p>`, opciones: ['Creciente', 'Decreciente', 'Constante'], correcta: 1, pista: 'Pendiente negativa: baja.', solucion: String.raw`<p>Decreciente: al avanzar en x, y disminuye.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Con la tarifa por tramos ($800 por m³ hasta 10; $1.200 por cada m³ sobre 10), ¿cuánto se paga por 7 m³?</p>`, respuesta: 5600, unidad: '$', pista: 'Primer tramo.', solucion: String.raw`<p>\(800\cdot 7=5600\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>¿Y por 16 m³?</p>`, respuesta: 15200, unidad: '$', pista: '8.000 por los primeros 10, más 1.200 por cada uno de los 6 restantes.', solucion: String.raw`<p>\(8000+1200\cdot 6=15200\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(|-8|+|3|-|-2|\)</p>`, respuesta: 9, pista: 'Cada valor absoluto es positivo.', solucion: String.raw`<p>\(8+3-2=9\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Las curvas de costo e ingreso se cruzan en \(q=120\). Eso significa que en \(q=120\):</p>`, opciones: ['La utilidad es máxima', 'La utilidad es cero', 'El costo es mínimo'], correcta: 1, pista: 'Intersección = igualdad.', solucion: String.raw`<p>Ingreso igual a costo: utilidad cero. Es el punto de equilibrio.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Una función vale \(f(2)=10\) y \(f(5)=4\). Su tasa de cambio promedio entre 2 y 5 es:</p>`, respuesta: -2, pista: '(4 − 10) / (5 − 2).', solucion: String.raw`<p>\(\frac{-6}{3}=-2\): baja 2 por cada unidad de x.</p>` }
      ],
      cuaderno: [
        'Escribe el vocabulario del gráfico (creciente, decreciente, máximo, mínimo, cero, intercepto, asíntota) con un dibujo pequeño para cada uno.',
        'Dibuja la tarifa por tramos del agua para x de 0 a 20 m³.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Busca un gráfico en una noticia (inflación, dólar, desempleo) y escribe tres cosas que dice: dónde sube, dónde baja, cuál es el máximo.'
      ],
      videos: [
        { titulo: 'Funciones definidas por tramos', q: 'funciones definidas por tramos explicacion' },
        { titulo: 'Análisis de gráficas: crecimiento, máximos y mínimos', q: 'analisis de graficas de funciones crecimiento decrecimiento maximos' }
      ],
      cierre: 'Un gráfico es una frase larga. Léelo de izquierda a derecha: dónde sube, dónde baja, dónde se cruza.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '8.4',
      titulo: 'Elegir el modelo',
      duracion: 60,
      objetivo: 'Reconocer, a partir de datos o de una situación, si el modelo es lineal, cuadrático, exponencial o de proporcionalidad inversa.',
      porque: 'Modelar es el trabajo del ingeniero: mirar datos y elegir la función que los describe. Esta sesión cierra el bloque de funciones conectando todo lo anterior con la toma de decisiones.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Las huellas de cada modelo',
          html: String.raw`<table class="mini-tabla">
<tr><th>Modelo</th><th>Qué mirar en los datos (x avanza de 1 en 1)</th><th>Fórmula</th></tr>
<tr><td>Lineal</td><td>las <strong>diferencias</strong> son constantes (+5, +5, +5)</td><td>\(y=mx+b\)</td></tr>
<tr><td>Exponencial</td><td>las <strong>razones</strong> son constantes (×1,2; ×1,2)</td><td>\(y=a\cdot b^x\)</td></tr>
<tr><td>Cuadrático</td><td>las diferencias de las diferencias son constantes</td><td>\(y=ax^2+bx+c\)</td></tr>
<tr><td>Inverso</td><td>el <strong>producto</strong> \(x\cdot y\) es constante</td><td>\(y=\dfrac{k}{x}\)</td></tr>
</table>`
        },
        {
          tipo: 'concepto', titulo: 'Proporcionalidad inversa',
          html: String.raw`<p>Es la de la semana 2 (más máquinas, menos tiempo) vista como función: \(y=\dfrac{k}{x}\). Su gráfico es una curva que baja y se acerca a los ejes sin tocarlos. Ejemplo: si un pedido requiere 120 horas-máquina, el tiempo con \(x\) máquinas es \(t=\dfrac{120}{x}\).</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Detectar el modelo en tres tablas',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\((1,300),(2,600),(3,900)\): diferencias de 300. Lineal: \(y=300x\).</div></div>
<div class="paso"><span class="paso-n">2</span><div>\((0,100),(1,120),(2,144)\): razones de 1,2. Exponencial: \(y=100\cdot 1{,}2^x\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>\((1,60),(2,30),(3,20),(4,15)\): producto siempre 60. Inversa: \(y=\dfrac{60}{x}\).</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'Demanda, precio e ingreso: dos modelos en uno',
          html: String.raw`<p>A $1.000 se venden 500 unidades; a $1.200, 400; a $1.400, 300. Por cada $200 de aumento se venden 100 menos: la demanda es lineal, \(q=1000-0{,}5p\).</p>
<p>El ingreso es precio por cantidad: \(I=p\cdot q=p(1000-0{,}5p)=1000p-0{,}5p^2\). Una parábola hacia abajo, con máximo en \(p=-\dfrac{1000}{2\cdot(-0{,}5)}=1000\). El precio que maximiza el ingreso es $1.000.</p>
<p>Una recta y una parábola trabajando juntas: así se ven los modelos en Economía.</p>`
        },
        {
          tipo: 'tip', titulo: 'Ningún modelo es perfecto',
          html: String.raw`<p>Elige el más simple que describa bien los datos en el rango que te interesa, y desconfía de extrapolar lejos: una exponencial que describe bien 5 años puede dar disparates a 50.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'opcion', enunciado: String.raw`<p>Datos: 50, 55, 60, 65, 70. ¿Qué modelo?</p>`, opciones: ['Lineal', 'Exponencial', 'Inverso'], correcta: 0, pista: 'Mira las diferencias.', solucion: String.raw`<p>Siempre +5: lineal.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Datos: 50, 100, 200, 400. ¿Qué modelo?</p>`, opciones: ['Lineal', 'Exponencial', 'Cuadrático'], correcta: 1, pista: 'Mira las razones.', solucion: String.raw`<p>Siempre ×2: exponencial.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Datos: \((2,30),(3,20),(5,12),(6,10)\). ¿Qué modelo?</p>`, opciones: ['Lineal', 'Exponencial', 'Inverso'], correcta: 2, pista: 'Multiplica x por y en cada par.', solucion: String.raw`<p>El producto es siempre 60: \(y=\frac{60}{x}\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Si \(y=\dfrac{60}{x}\), ¿cuánto vale \(y\) cuando \(x=15\)?</p>`, respuesta: 4, pista: '60 / 15.', solucion: String.raw`<p>\(y=4\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Con la demanda \(q=1000-0{,}5p\), ¿cuántas unidades se venden a \(p=800\)?</p>`, respuesta: 600, unidad: 'unidades', pista: '1000 − 0,5·800.', solucion: String.raw`<p>\(1000-400=600\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Con esa demanda, el ingreso \(I=1000p-0{,}5p^2\) es máximo en \(p=\) ?</p>`, respuesta: 1000, unidad: '$', pista: 'Vértice de la parábola.', solucion: String.raw`<p>\(p_v=-\frac{1000}{2\cdot(-0{,}5)}=1000\).</p>` }
      ],
      cuaderno: [
        'Haz una tabla de "huellas": qué mirar en los datos para cada modelo (diferencias, razones, productos).',
        'Clasifica los tres conjuntos de datos del ejemplo y escribe la fórmula de cada uno.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Escribe media página: qué aprendiste del Bloque C y qué te cuesta todavía.'
      ],
      videos: [
        { titulo: 'Modelos lineal, cuadrático y exponencial', q: 'modelos lineal cuadratico exponencial comparacion datos' },
        { titulo: 'Proporcionalidad inversa y su gráfica', q: 'proporcionalidad inversa grafica hiperbola' }
      ],
      cierre: 'Diferencias constantes: lineal. Razones constantes: exponencial. Producto constante: inverso. Mira los datos antes de elegir la fórmula.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '8.5',
      titulo: 'Repaso y mini test de la semana 8',
      duracion: 60,
      tipo: 'test',
      objetivo: 'Cerrar el bloque de funciones: exponenciales, logaritmos, lectura de gráficos y elección de modelo.',
      intro: String.raw`<p><strong>Repasa 10 minutos</strong> con el cuaderno cerrado:</p>
<ul>
<li>¿Qué diferencia a una exponencial de una recta?</li>
<li>¿Qué pregunta responde un logaritmo?</li>
<li>¿Cómo se calcula una tasa de cambio promedio?</li>
<li>¿Qué huella deja cada modelo en los datos?</li>
</ul>
<p>Luego resuelve las 10 preguntas en el cuaderno (calculadora permitida) y marca aquí. <strong>Meta: 8 de 10.</strong></p>`,
      ejercicios: [
        { tipo: 'num', area: 'Exponencial (8.1)', enunciado: String.raw`<p>Si \(f(x)=5\cdot 2^x\), calcula \(f(3)\).</p>`, respuesta: 40, solucion: String.raw`<p>\(5\cdot 8=40\).</p>` },
        { tipo: 'num', area: 'Exponencial (8.1)', enunciado: String.raw`<p>$1.000.000 al 8 % anual compuesto durante 2 años.</p>`, respuesta: 1166400, unidad: '$', solucion: String.raw`<p>\(1{,}08^2=1{,}1664\); monto $1.166.400.</p>` },
        { tipo: 'num', area: 'Exponencial (8.1)', enunciado: String.raw`<p>Un equipo de $600.000 pierde 10 % de valor al año. Valor tras 3 años.</p>`, respuesta: 437400, unidad: '$', solucion: String.raw`<p>\(0{,}9^3=0{,}729\); \(600000\cdot 0{,}729=437400\).</p>` },
        { tipo: 'num', area: 'Logaritmos (8.2)', enunciado: String.raw`<p>\(\log_2 64\)</p>`, respuesta: 6, solucion: String.raw`<p>\(2^6=64\).</p>` },
        { tipo: 'num', area: 'Logaritmos (8.2)', enunciado: String.raw`<p>Resuelve \(5^x=125\).</p>`, respuesta: 3, solucion: String.raw`<p>\(5^3=125\), \(x=3\).</p>` },
        { tipo: 'opcion', area: 'Logaritmos (8.2)', enunciado: String.raw`<p>\(\log\dfrac{x}{y}\) es igual a:</p>`, opciones: [String.raw`\(\log x-\log y\)`, String.raw`\(\dfrac{\log x}{\log y}\)`, String.raw`\(\log x\cdot\log y\)`], correcta: 0, solucion: String.raw`<p>El logaritmo de un cociente es la resta de logaritmos.</p>` },
        { tipo: 'num', area: 'Lectura de gráficos (8.3)', enunciado: String.raw`<p>Tarifa por tramos: $800 por m³ hasta 10 y $1.200 por cada m³ adicional. ¿Cuánto se paga por 12 m³?</p>`, respuesta: 10400, unidad: '$', solucion: String.raw`<p>\(8000+1200\cdot 2=10400\).</p>` },
        { tipo: 'num', area: 'Lectura de gráficos (8.3)', enunciado: String.raw`<p>Tasa de cambio promedio de \(f\) entre \(x=1\) (donde vale 3) y \(x=4\) (donde vale 15).</p>`, respuesta: 4, solucion: String.raw`<p>\(\frac{15-3}{4-1}=4\).</p>` },
        { tipo: 'opcion', area: 'Elegir modelo (8.4)', enunciado: String.raw`<p>Datos: 20, 40, 80, 160. ¿Qué modelo?</p>`, opciones: ['Lineal', 'Exponencial', 'Inverso'], correcta: 1, solucion: String.raw`<p>Siempre ×2: exponencial.</p>` },
        { tipo: 'num', area: 'Elegir modelo (8.4)', enunciado: String.raw`<p>Si \(y=\dfrac{90}{x}\), ¿cuánto vale \(y\) en \(x=18\)?</p>`, respuesta: 5, solucion: String.raw`<p>\(90\div 18=5\).</p>` }
      ],
      cuaderno: [
        'Haz la hoja resumen de la semana 8: exponencial e interés compuesto, logaritmo y propiedades, tasa de cambio promedio, huellas de cada modelo.',
        'Resuelve el test completo en el cuaderno antes de responder en pantalla.',
        'Anota tu puntaje y las preguntas falladas.',
        'Relee tus notas de las semanas 7 y 8 y escribe las tres ideas que te parecen más útiles para Economía.'
      ],
      videos: [
        { titulo: 'Ejercicios resueltos de funciones exponenciales y logarítmicas', q: 'ejercicios resueltos funciones exponenciales y logaritmicas aplicaciones' }
      ],
      cierre: 'Fin del Bloque C. Ya puedes mirar una función y decir qué hace. Ahora, geometría, trigonometría y lógica.'
    }
  ]
});
