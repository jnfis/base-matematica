/* Semana 12 · Aplicar y cerrar */
CURSO.semana({
  n: 12,
  bloque: 'E',
  titulo: 'Aplicar y cerrar',
  subtitulo: 'Optimización con derivadas, la idea de integral, un mínimo de estadística descriptiva, el simulacro final y el plan para seguir.',
  meta: 'La última semana junta todo: usas la derivada para decidir, miras por primera vez la integral que verás en el semestre 3, pruebas la estadística del semestre 4 y mides cuánto avanzaste con un simulacro completo.',
  resumen: [
    { t: 'Optimizar', f: String.raw`f'(x)=0\ \to\ \text{candidatos};\ \ \text{verifica con los signos de } f' \text{ y el dominio}` },
    { t: 'Derivada de 1/x', f: String.raw`\left(\frac{1}{x}\right)'=-\frac{1}{x^2}` },
    { t: 'Antiderivada de potencias', f: String.raw`\int x^n\,dx=\frac{x^{n+1}}{n+1}+C` },
    { t: 'Integral como área', f: String.raw`\int_a^b f(x)\,dx=F(b)-F(a)` },
    { t: 'Promedio', f: String.raw`\bar{x}=\frac{1}{n}\sum x_i` },
    { t: 'Mediana', f: String.raw`\text{el valor del medio, con los datos ordenados}` },
    { t: 'Rango', f: String.raw`\text{máximo}-\text{mínimo}` },
    { t: 'Desviación estándar', f: String.raw`\sigma=\sqrt{\frac{\sum(x_i-\bar x)^2}{n}}` }
  ],
  sesiones: [
    /* ------------------------------------------------------------------ */
    {
      id: '12.1',
      titulo: 'Optimizar con la derivada',
      duracion: 60,
      objetivo: 'Resolver problemas de máximo y mínimo: plantear la función, derivar, igualar a cero y verificar.',
      porque: 'Minimizar costos, maximizar utilidades, encontrar el lote óptimo: esto es Ingeniería Industrial en una frase. Métodos Cuantitativos y Optimización (semestre 6) hace exactamente esto con más variables.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'El método',
          html: String.raw`<ol>
<li>Escribe la función a optimizar en <strong>una sola variable</strong>.</li>
<li>Deriva.</li>
<li>Iguala la derivada a cero y resuelve: son los candidatos.</li>
<li>Verifica con los signos de la derivada (o con el contexto) si es máximo o mínimo.</li>
<li>Responde con unidades y en una frase.</li>
</ol>`
        },
        {
          tipo: 'ejemplo', titulo: 'Utilidad máxima',
          html: String.raw`<p>\(U(q)=-2q^2+120q-500\). Derivada: \(U'(q)=-4q+120\). Igualo a cero: \(q=30\).</p>
<p>Verifico: \(U'(20)=40>0\) y \(U'(40)=-40<0\). De + a −: máximo. \(U(30)=-1800+3600-500=1300\).</p>
<p>Respuesta: producir 30 unidades, con una utilidad máxima de $1.300.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'El lote que minimiza el costo medio',
          html: String.raw`<p>El costo por unidad de un lote de \(q\) piezas es \(CM(q)=\dfrac{80000}{q}+1200+0{,}5q\): un costo fijo que se reparte, un costo unitario y un costo de almacenamiento que crece con el lote.</p>
<span class="formula">\(CM'(q)=-\dfrac{80000}{q^2}+0{,}5=0\ \Rightarrow\ q^2=160000\ \Rightarrow\ q=400\)</span>
<p>Antes de 400 la derivada es negativa (el costo medio baja) y después es positiva (sube): <strong>mínimo</strong>. \(CM(400)=200+1200+200=1600\). Este es, en esencia, el modelo del lote económico que verás en Administración de Operaciones.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'El cerco',
          html: String.raw`<p>Con 100 m de cerco quieres cerrar un rectángulo contra una pared (la pared es un lado, no necesita cerco). Si \(x\) es el lado perpendicular a la pared, el lado paralelo mide \(100-2x\), y el área:</p>
<span class="formula">\(A(x)=x(100-2x)=100x-2x^2\qquad A'(x)=100-4x=0\ \Rightarrow\ x=25\)</span>
<p>Máximo (la parábola abre hacia abajo). Área \(25\cdot 50=1250\) m².</p>`
        },
        {
          tipo: 'tip', titulo: 'Mira los bordes',
          html: String.raw`<p>Si la variable tiene un rango (\(q\) entre 0 y 100, por ejemplo), compara también los valores en los extremos: el máximo puede estar en un borde y no donde la derivada es cero.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>\(U(q)=-q^2+80q-700\). ¿Qué cantidad maximiza la utilidad?</p>`, respuesta: 40, unidad: 'unidades', pista: 'U\'(q) = −2q + 80 = 0.', solucion: String.raw`<p>\(q=40\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>¿Cuál es esa utilidad máxima?</p>`, respuesta: 900, unidad: '$', pista: 'Evalúa U(40).', solucion: String.raw`<p>\(-1600+3200-700=900\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(C(q)=q^2-60q+1000\). ¿Qué cantidad minimiza el costo?</p>`, respuesta: 30, unidad: 'unidades', pista: 'C\'(q) = 2q − 60 = 0.', solucion: String.raw`<p>\(q=30\). La parábola abre hacia arriba: mínimo.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(CM(q)=\dfrac{20000}{q}+0{,}5q\). ¿Qué cantidad lo minimiza? (Resuelve \(-\frac{20000}{q^2}+0{,}5=0\).)</p>`, respuesta: 200, unidad: 'unidades', pista: 'q² = 40.000.', solucion: String.raw`<p>\(q^2=40000\), \(q=200\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Con 120 m de cerco contra una pared, \(A(x)=x(120-2x)\). ¿Qué \(x\) maximiza el área?</p>`, respuesta: 30, unidad: 'm', pista: 'A\'(x) = 120 − 4x.', solucion: String.raw`<p>\(x=30\) m (y el otro lado, 60 m).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Después de encontrar \(f'(c)=0\), ¿qué falta?</p>`, opciones: ['Nada: c es el óptimo', 'Verificar si es máximo o mínimo y revisar el dominio', 'Derivar otra vez, siempre'], correcta: 1, pista: 'Un punto crítico es solo un candidato.', solucion: String.raw`<p>Hay que clasificarlo (signos) y comparar con los bordes del dominio si los hay.</p>` }
      ],
      cuaderno: [
        'Escribe el método de cinco pasos para optimizar.',
        'Resuelve completo el problema del costo medio mínimo, incluida la derivada de 1/q.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Plantea un problema de optimización de tu trabajo (aunque no puedas resolverlo): qué maximizar o minimizar y de qué depende.'
      ],
      videos: [
        { titulo: 'Problemas de optimización con derivadas', q: 'julioprofe problemas de optimizacion derivadas' },
        { titulo: 'Máximos y mínimos aplicados', q: 'profe alex problemas de maximos y minimos aplicaciones derivada' }
      ],
      cierre: 'Derivar e igualar a cero encuentra los candidatos. El contexto y los signos eligen al ganador.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '12.2',
      titulo: 'La integral: acumular',
      duracion: 60,
      objetivo: 'Entender la integral como área acumulada y como operación inversa de la derivada, y calcular antiderivadas de potencias.',
      porque: 'Cálculo Integral es el ramo del semestre 3. Verlo una hora ahora no te lo enseña, pero te quita el miedo: es derivar al revés y sumar áreas.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Área bajo una curva',
          html: String.raw`<p>Si una máquina produce a 30 piezas por hora durante 8 horas, el total es \(30\cdot 8=240\): el área del rectángulo bajo la recta de la tasa. Si la tasa cambia con el tiempo, el total acumulado es el <strong>área bajo la curva</strong>. Eso es la integral:</p>
<span class="formula">\(\displaystyle\int_a^b f(x)\,dx=\text{área bajo } f \text{ entre } a \text{ y } b\)</span>
<svg viewBox="0 0 320 200" width="100%" style="max-width:340px;display:block;margin:8px auto" role="img" aria-label="Área bajo la recta p(t)=10t entre 0 y 4">
<polygon points="40,190 260,190 260,30" fill="var(--primary)" fill-opacity="0.2"/>
<line x1="30" y1="190" x2="300" y2="190" stroke="currentColor" stroke-opacity="0.35"/>
<line x1="40" y1="10" x2="40" y2="195" stroke="currentColor" stroke-opacity="0.35"/>
<line x1="40" y1="190" x2="275" y2="19" stroke="var(--primary)" stroke-width="2"/>
<text x="296" y="186" font-size="11" fill="currentColor" text-anchor="end">t (h)</text>
<text x="46" y="18" font-size="11" fill="currentColor">p(t) = 10t</text>
<text x="255" y="186" font-size="10" fill="currentColor" text-anchor="end">4</text>
<text x="150" y="150" font-size="11" fill="currentColor">área = 80 piezas</text>
</svg>
<p>Con \(p(t)=10t\) piezas por hora entre 0 y 4 horas, el área es un triángulo: \(\frac{4\cdot 40}{2}=80\) piezas.</p>`
        },
        {
          tipo: 'concepto', titulo: 'La antiderivada: derivar al revés',
          html: String.raw`<p>¿Qué función tiene derivada \(2x\)? \(x^2\). También \(x^2+5\) y \(x^2-3\): por eso se agrega una constante \(C\). Se escribe \(\int 2x\,dx=x^2+C\).</p>
<span class="formula">\(\displaystyle\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\)</span>
<p>Es la regla de la potencia al revés: <strong>sube el exponente y divide por el nuevo exponente</strong>. \(\int x^2\,dx=\frac{x^3}{3}+C\); \(\int 6x\,dx=3x^2+C\); \(\int 5\,dx=5x+C\).</p>`
        },
        {
          tipo: 'concepto', titulo: 'Cómo se calcula el área (la idea del teorema fundamental)',
          html: String.raw`<p>Si \(F\) es una antiderivada de \(f\), el área entre \(a\) y \(b\) es \(F(b)-F(a)\).</p>
<span class="formula">\(\displaystyle\int_0^4 10t\,dt=\left[5t^2\right]_0^4=5\cdot 16-0=80\)</span>
<p>Coincide con el triángulo. Para curvas que no son rectas, esta es la única forma de obtener el área exacta.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Velocidad y distancia',
          html: String.raw`<p>Un objeto se mueve con velocidad \(v(t)=3t^2\) m/s. La distancia recorrida entre \(t=0\) y \(t=2\) es la integral de la velocidad:</p>
<span class="formula">\(\displaystyle\int_0^2 3t^2\,dt=\left[t^3\right]_0^2=8\ \text{m}\)</span>
<p>Derivar la posición da la velocidad; integrar la velocidad devuelve la posición. Son operaciones inversas.</p>`
        },
        {
          tipo: 'tip', titulo: 'Cambiar y acumular',
          html: String.raw`<p>Derivar responde "cuánto cambia". Integrar responde "cuánto se acumula". Si entiendes esa dupla, el semestre 3 ya tiene sentido antes de empezar.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'texto', enunciado: String.raw`<p>\(\displaystyle\int 4x\,dx\) (sin la constante). Escribe los exponentes con ^.</p>`, respuesta: ['2x^2'], compacto: true, placeholder: 'ax^n', pista: 'Sube el exponente y divide por 2.', solucion: String.raw`<p>\(\frac{4x^2}{2}=2x^2\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>\(\displaystyle\int x^3\,dx\) (sin la constante).</p>`, respuesta: ['x^4/4', '(x^4)/4', '1/4x^4', '0.25x^4', '(1/4)x^4'], compacto: true, placeholder: 'x^n/n', pista: 'Sube el exponente a 4 y divide por 4.', solucion: String.raw`<p>\(\frac{x^4}{4}\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Una máquina produce a 25 piezas por hora, constantes, durante 6 horas. ¿Total?</p>`, respuesta: 150, unidad: 'piezas', pista: 'Área del rectángulo.', solucion: String.raw`<p>\(25\cdot 6=150\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(p(t)=10t\) piezas por hora. Producción entre \(t=0\) y \(t=4\).</p>`, respuesta: 80, unidad: 'piezas', pista: 'Triángulo, o integral de 10t.', solucion: String.raw`<p>\(5t^2\) evaluado en 4: \(80\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(v(t)=3t^2\). Distancia entre \(t=0\) y \(t=3\).</p>`, respuesta: 27, unidad: 'm', pista: 'Antiderivada t³.', solucion: String.raw`<p>\(3^3-0=27\) m.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(\displaystyle\int_0^3 2x\,dx\)</p>`, respuesta: 9, pista: 'Antiderivada x².', solucion: String.raw`<p>\(3^2-0^2=9\).</p>` }
      ],
      cuaderno: [
        'Dibuja la tasa p(t) = 10t de 0 a 4 y sombrea el área; calcúlala como triángulo y compárala con la integral.',
        'Escribe la regla de la potencia para derivar y para integrar, una al lado de la otra.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Explica con un ejemplo de tu trabajo la diferencia entre "cuánto cambia" y "cuánto se acumula".'
      ],
      videos: [
        { titulo: 'La integral como área bajo la curva', q: 'profe alex integral definida area bajo la curva idea' },
        { titulo: 'Integrales básicas: regla de la potencia', q: 'julioprofe integrales basicas regla de la potencia' }
      ],
      cierre: 'La integral acumula lo que la derivada reparte. Son la misma moneda por los dos lados.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '12.3',
      titulo: 'Estadística descriptiva mínima',
      duracion: 60,
      objetivo: 'Calcular promedio, mediana, moda, rango y la idea de desviación estándar, y leer una tabla de frecuencias.',
      porque: 'Fundamentos de Estadística para Data Science (semestre 4) empieza aquí, y en Gestión de Operaciones medirás todo con promedios y dispersión. Una hora de estadística ahora te ahorra una semana después.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Medidas de centro',
          html: String.raw`<ul>
<li><strong>Promedio</strong> (media): \(\bar x=\dfrac{1}{n}\sum x_i\). Suma todo y divide por la cantidad.</li>
<li><strong>Mediana</strong>: ordena los datos y toma el del medio. Si son pares, el promedio de los dos del medio.</li>
<li><strong>Moda</strong>: el valor que más se repite.</li>
</ul>
<p>La mediana resiste los valores extremos; el promedio no. Para sueldos o tiempos con casos raros, la mediana describe mejor lo "típico".</p>`
        },
        {
          tipo: 'concepto', titulo: 'Medidas de dispersión',
          html: String.raw`<p><strong>Rango:</strong> máximo menos mínimo. <strong>Desviación estándar:</strong> cuánto se alejan los datos del promedio, en promedio.</p>
<span class="formula">\(\sigma=\sqrt{\dfrac{\sum(x_i-\bar x)^2}{n}}\)</span>
<p>Dos máquinas pueden tener el mismo tiempo promedio y muy distinta dispersión. En calidad, poca dispersión es sinónimo de proceso controlado.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Tiempos de ciclo de una máquina',
          html: String.raw`<p>Datos (segundos): 12, 15, 11, 15, 17.</p>
<div class="paso"><span class="paso-n">1</span><div>Promedio: \(\frac{12+15+11+15+17}{5}=\frac{70}{5}=14\).</div></div>
<div class="paso"><span class="paso-n">2</span><div>Ordenados: 11, 12, 15, 15, 17. Mediana: 15. Moda: 15. Rango: \(17-11=6\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>Desvíos respecto a 14: \(-2, 1, -3, 1, 3\). Cuadrados: \(4, 1, 9, 1, 9\), suma 24. \(\sigma=\sqrt{24/5}=\sqrt{4{,}8}\approx 2{,}19\) s.</div></div>`
        },
        {
          tipo: 'concepto', titulo: 'Tablas de frecuencia',
          html: String.raw`<p>Para datos por categoría, cuenta cuántos hay de cada tipo (frecuencia) y qué fracción del total representan (frecuencia relativa, en porcentaje).</p>
<table class="mini-tabla"><tr><th>Defecto</th><th>Frecuencia</th><th>Porcentaje</th></tr>
<tr><td>Pintura</td><td>30</td><td>15 %</td></tr><tr><td>Medida</td><td>12</td><td>6 %</td></tr><tr><td>Sin defecto</td><td>158</td><td>79 %</td></tr><tr><th>Total</th><th>200</th><th>100 %</th></tr></table>
<p>Ordenar los defectos de mayor a menor frecuencia es el primer paso del diagrama de Pareto que usarás en calidad.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Promedio contra mediana',
          html: String.raw`<p>Sueldos de un equipo (miles): 500, 550, 600, 650, 5.000. Promedio: 1.460. Mediana: 600. ¿Cuál describe mejor al equipo? La mediana: cuatro de cinco personas ganan cerca de 600. El 5.000 arrastra el promedio.</p>`
        },
        {
          tipo: 'error', titulo: 'Dos descuidos',
          html: String.raw`<p>Buscar la mediana sin ordenar los datos. Y comparar dos promedios sin mirar la dispersión: un promedio de 14 segundos con desviación 2 es un proceso; con desviación 10 es otro muy distinto.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Promedio de 8, 12, 10, 14, 6.</p>`, respuesta: 10, pista: 'Suma 50, divide por 5.', solucion: String.raw`<p>\(50\div 5=10\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Mediana de 8, 12, 10, 14, 6.</p>`, respuesta: 10, pista: 'Ordena primero.', solucion: String.raw`<p>6, 8, 10, 12, 14: el del medio es 10.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Mediana de 3, 9, 4, 12.</p>`, respuesta: 6.5, tol: 0.01, pista: 'Cantidad par: promedia los dos del medio.', solucion: String.raw`<p>3, 4, 9, 12: \(\frac{4+9}{2}=6{,}5\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Rango de 8, 12, 10, 14, 6.</p>`, respuesta: 8, pista: 'Máximo menos mínimo.', solucion: String.raw`<p>\(14-6=8\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Desviación estándar de 2, 4, 4, 4, 5, 5, 7, 9 (un decimal).</p>`, respuesta: 2, tol: 0.05, pista: 'El promedio es 5. Los cuadrados de los desvíos suman 32.', solucion: String.raw`<p>Desvíos: \(-3,-1,-1,-1,0,0,2,4\). Cuadrados: \(9,1,1,1,0,0,4,16\), suma 32. \(\sigma=\sqrt{32/8}=\sqrt 4=2\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Sueldos (miles): 500, 520, 540, 560, 4.000. ¿Qué medida describe mejor el sueldo típico?</p>`, opciones: ['El promedio', 'La mediana', 'El rango'], correcta: 1, pista: 'Hay un valor extremo.', solucion: String.raw`<p>La mediana (540) no se deja arrastrar por el 4.000; el promedio (1.224) sí.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>De 200 piezas, 30 tienen defecto de pintura. ¿Qué porcentaje es?</p>`, respuesta: 15, unidad: '%', pista: '30/200 · 100.', solucion: String.raw`<p>\(15\%\).</p>` }
      ],
      cuaderno: [
        'Escribe las fórmulas de promedio, mediana, moda, rango y desviación estándar con el ejemplo de los tiempos de ciclo.',
        'Toma 8 datos de tu vida (minutos de viaje, gasto diario) y calcula las cinco medidas.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Escribe por qué la mediana resiste los valores extremos y el promedio no.'
      ],
      videos: [
        { titulo: 'Media, mediana y moda', q: 'daniel carreon media mediana y moda' },
        { titulo: 'Desviación estándar explicada', q: 'julioprofe desviacion estandar explicacion' }
      ],
      cierre: 'El promedio dice dónde está el centro; la desviación dice cuánto se dispersan. Un ingeniero mira las dos.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '12.4',
      titulo: 'Simulacro final',
      duracion: 90,
      tipo: 'test',
      objetivo: 'Medir todo el plan de una vez, por bloque, para saber exactamente qué repasar antes de entrar a clases.',
      intro: String.raw`<p><strong>25 preguntas, unos 90 minutos.</strong> Cubren los cinco bloques. Resuelve todo en el cuaderno, en orden, sin mirar las lecciones ni el formulario. Calculadora solo para raíces y logaritmos.</p>
<p><strong>Meta: 20 de 25.</strong> El resultado aparece por bloque. Un bloque bajo 70 % merece volver a sus sesiones; entre 70 y 85 %, repetir su mini test; sobre 85 %, está firme. Escribe los exponentes con ^ (x^2).</p>
<p>Si hiciste el diagnóstico inicial, compara: ese era tu punto de partida.</p>`,
      ejercicios: [
        { tipo: 'num', area: 'Bloque A · Números', enunciado: String.raw`<p>\(-8+3\cdot(-2)\)</p>`, respuesta: -14, solucion: String.raw`<p>\(-8-6=-14\).</p>` },
        { tipo: 'num', area: 'Bloque A · Números', enunciado: String.raw`<p>\(\dfrac{2}{3}+\dfrac{1}{6}\) (fracción o decimal)</p>`, respuesta: 0.833333, placeholder: 'a/b', solucion: String.raw`<p>\(\frac{4}{6}+\frac{1}{6}=\frac{5}{6}\).</p>` },
        { tipo: 'num', area: 'Bloque A · Números', enunciado: String.raw`<p>El 35 % de 1.200.</p>`, respuesta: 420, solucion: String.raw`<p>\(0{,}35\cdot 1200=420\).</p>` },
        { tipo: 'num', area: 'Bloque A · Números', enunciado: String.raw`<p>Una boleta de $47.600 incluye IVA (19 %). ¿Valor neto?</p>`, respuesta: 40000, unidad: '$', solucion: String.raw`<p>\(47600\div 1{,}19=40000\).</p>` },
        { tipo: 'num', area: 'Bloque A · Números', enunciado: String.raw`<p>5 máquinas terminan un pedido en 12 horas. ¿Cuántas horas tardan 8 máquinas?</p>`, respuesta: 7.5, tol: 0.01, unidad: 'h', solucion: String.raw`<p>Inversa: \(5\cdot 12=60\); \(60\div 8=7{,}5\).</p>` },
        { tipo: 'num', area: 'Bloque A · Números', enunciado: String.raw`<p>\(2^5\cdot 2^{-2}\)</p>`, respuesta: 8, solucion: String.raw`<p>\(2^3=8\).</p>` },
        { tipo: 'texto', area: 'Bloque A · Números', enunciado: String.raw`<p>Reduce \(2(3x-1)-(x-4)\).</p>`, respuesta: ['5x+2', '2+5x'], compacto: true, placeholder: 'ax+b', solucion: String.raw`<p>\(6x-2-x+4=5x+2\).</p>` },
        { tipo: 'num', area: 'Bloque B · Álgebra', enunciado: String.raw`<p>\(3x-7=2x+4\)</p>`, respuesta: 11, solucion: String.raw`<p>\(x=11\).</p>` },
        { tipo: 'opcion', area: 'Bloque B · Álgebra', enunciado: String.raw`<p>De \(v=\dfrac{d}{t}\), despeja \(t\):</p>`, opciones: [String.raw`\(t=\dfrac{d}{v}\)`, String.raw`\(t=\dfrac{v}{d}\)`, String.raw`\(t=v\cdot d\)`], correcta: 0, solucion: String.raw`<p>\(t=\frac{d}{v}\).</p>` },
        { tipo: 'texto', area: 'Bloque B · Álgebra', enunciado: String.raw`<p>Factoriza \(x^2+6x+8\).</p>`, respuesta: ['(x+2)(x+4)', '(x+4)(x+2)'], compacto: true, placeholder: '(x+a)(x+b)', solucion: String.raw`<p>2 y 4: \((x+2)(x+4)\).</p>` },
        { tipo: 'num', area: 'Bloque B · Álgebra', enunciado: String.raw`<p>La solución mayor de \(x^2-3x-10=0\).</p>`, respuesta: 5, solucion: String.raw`<p>\((x-5)(x+2)=0\): 5 y \(-2\).</p>` },
        { tipo: 'num', area: 'Bloque B · Álgebra', enunciado: String.raw`<p>\(x+y=14\) y \(x-y=4\). ¿Cuánto vale \(x\)?</p>`, respuesta: 9, solucion: String.raw`<p>\(2x=18\), \(x=9\).</p>` },
        { tipo: 'opcion', area: 'Bloque B · Álgebra', enunciado: String.raw`<p>La solución de \(-4x\ge 20\) es:</p>`, opciones: [String.raw`\(x\ge -5\)`, String.raw`\(x\le -5\)`, String.raw`\(x\le 5\)`], correcta: 1, solucion: String.raw`<p>Dividir por \(-4\) invierte: \(x\le -5\).</p>` },
        { tipo: 'num', area: 'Bloque C · Funciones', enunciado: String.raw`<p>Si \(f(x)=x^2-3x\), calcula \(f(-2)\).</p>`, respuesta: 10, solucion: String.raw`<p>\(4+6=10\).</p>` },
        { tipo: 'num', area: 'Bloque C · Funciones', enunciado: String.raw`<p>Pendiente de la recta que pasa por \((2,1)\) y \((6,9)\).</p>`, respuesta: 2, solucion: String.raw`<p>\(\frac{8}{4}=2\).</p>` },
        { tipo: 'num', area: 'Bloque C · Funciones', enunciado: String.raw`<p>\(F=60000\), \(v=200\), \(p=500\). Punto de equilibrio en unidades.</p>`, respuesta: 200, unidad: 'unidades', solucion: String.raw`<p>\(\frac{60000}{300}=200\).</p>` },
        { tipo: 'num', area: 'Bloque C · Funciones', enunciado: String.raw`<p>Coordenada \(x\) del vértice de \(y=x^2-10x+4\).</p>`, respuesta: 5, solucion: String.raw`<p>\(x_v=\frac{10}{2}=5\).</p>` },
        { tipo: 'num', area: 'Bloque C · Funciones', enunciado: String.raw`<p>\(\log_2 16\)</p>`, respuesta: 4, solucion: String.raw`<p>\(2^4=16\).</p>` },
        { tipo: 'num', area: 'Bloque D · Geometría y lógica', enunciado: String.raw`<p>Catetos 5 y 12. ¿Hipotenusa?</p>`, respuesta: 13, solucion: String.raw`<p>\(\sqrt{25+144}=13\).</p>` },
        { tipo: 'num', area: 'Bloque D · Geometría y lógica', enunciado: String.raw`<p>Hipotenusa 8 y ángulo de 30°. ¿Cateto opuesto?</p>`, respuesta: 4, solucion: String.raw`<p>\(8\cdot\sin 30°=4\).</p>` },
        { tipo: 'opcion', area: 'Bloque D · Geometría y lógica', enunciado: String.raw`<p>"Si \(p\), entonces \(q\). No \(q\)." Conclusión:</p>`, opciones: [String.raw`\(p\)`, String.raw`No \(p\)`, 'Nada con seguridad'], correcta: 1, solucion: String.raw`<p>Modus tollens: no \(p\).</p>` },
        { tipo: 'num', area: 'Bloque D · Geometría y lógica', enunciado: String.raw`<p>\(|A|=20\), \(|B|=15\), \(|A\cap B|=5\). ¿\(|A\cup B|\)?</p>`, respuesta: 30, solucion: String.raw`<p>\(20+15-5=30\).</p>` },
        { tipo: 'num', area: 'Bloque E · Cálculo', enunciado: String.raw`<p>\(\displaystyle\lim_{x\to 3}\frac{x^2-9}{x-3}\)</p>`, respuesta: 6, solucion: String.raw`<p>\(x+3\to 6\).</p>` },
        { tipo: 'texto', area: 'Bloque E · Cálculo', enunciado: String.raw`<p>Deriva \(4x^3-2x\).</p>`, respuesta: ['12x^2-2', '-2+12x^2'], compacto: true, placeholder: 'ax^2+b', solucion: String.raw`<p>\(12x^2-2\).</p>` },
        { tipo: 'num', area: 'Bloque E · Cálculo', enunciado: String.raw`<p>\(U(q)=-q^2+60q\). ¿Qué \(q\) maximiza la utilidad?</p>`, respuesta: 30, unidad: 'unidades', solucion: String.raw`<p>\(U'(q)=-2q+60=0\), \(q=30\).</p>` }
      ],
      cuaderno: [
        'Resuelve las 25 preguntas en el cuaderno, en orden y con el tiempo medido.',
        'Anota el resultado por bloque y clasifica cada uno: firme, repasar o rehacer.',
        'Compara con tu diagnóstico inicial, si lo hiciste.',
        'Escribe la lista de las preguntas falladas con la sesión a la que pertenecen.'
      ],
      videos: [
        { titulo: 'Repaso general de matemática para ingreso a ingeniería', q: 'repaso matematica ingreso universidad ingenieria ejercicios resueltos' }
      ],
      cierre: 'El número importa menos que el mapa: ahora sabes exactamente dónde poner el tiempo que te queda.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '12.5',
      titulo: 'Cierre: cómo seguir',
      duracion: 60,
      objetivo: 'Convertir el resultado del simulacro en un plan de repaso y preparar tu forma de estudiar matemáticas en la universidad.',
      porque: 'El plan termina, pero el hábito sigue. Lo que decidas en esta sesión determina si llegas al primer día con la base viva o con la base olvidada.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Leer el simulacro',
          html: String.raw`<table class="mini-tabla">
<tr><th>Resultado del bloque</th><th>Qué hacer</th></tr>
<tr><td>85 % o más</td><td>Firme. Un repaso del formulario antes de clases basta.</td></tr>
<tr><td>Entre 65 % y 85 %</td><td>Repasa la hoja resumen de la semana y repite su mini test.</td></tr>
<tr><td>Menos de 65 %</td><td>Rehaz las sesiones del bloque, con cuaderno, y vuelve a hacer el test.</td></tr>
</table>
<p>Si el tiempo es poco, el orden de prioridad es A (números) y B (álgebra) primero: sin ellos, C y E no se sostienen.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Hasta el inicio de clases',
          html: String.raw`<p>Mantén <strong>dos o tres sesiones cortas por semana</strong> (30 minutos): repetir un mini test, rehacer los ejercicios fallados del cuaderno, resolver problemas nuevos en Khan Academy. Y repite el diagnóstico inicial una semana antes de empezar: compara con la primera vez.</p>
<p>La base no se pierde por falta de talento. Se pierde por falta de contacto.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Cómo estudiar matemáticas en la universidad',
          html: String.raw`<ul>
<li><strong>Todas las clases.</strong> En matemáticas, cada clase usa la anterior. Faltar a una cuesta tres.</li>
<li><strong>Las guías antes de la ayudantía.</strong> Llega con dudas concretas, no con la guía en blanco.</li>
<li><strong>Cuaderno de errores.</strong> Cada error anotado con su corrección vale más que diez ejercicios bien hechos.</li>
<li><strong>Bloques de 50 minutos</strong> con descanso. Y explícale a alguien lo que aprendiste: si no puedes explicarlo, no lo sabes todavía.</li>
<li><strong>Ninguna duda cumple una semana.</strong> Profesor, ayudante, compañero, video: lo que sea, pero esa semana.</li>
<li><strong>Usa la nivelación de la universidad.</strong> La UDLA ofrece diagnóstico, asignaturas de nivelación, tutorías académicas y talleres de técnicas de estudio (SIAE). No son para los que van mal: son para los que quieren ir bien.</li>
</ul>`
        },
        {
          tipo: 'concepto', titulo: 'Mapa: qué semana prepara qué ramo',
          html: String.raw`<table class="mini-tabla">
<tr><th>Ramo de la malla</th><th>Semanas de este plan</th></tr>
<tr><td>Introducción a la Matemática para la Ingeniería (S1)</td><td>1 a 6 y 9</td></tr>
<tr><td>Razonamiento Lógico (S1) y Programación (S1)</td><td>10</td></tr>
<tr><td>Álgebra I (S2)</td><td>3 a 6</td></tr>
<tr><td>Cálculo Diferencial (S2) y Economía (S2)</td><td>7, 8, 11 y 12</td></tr>
<tr><td>Cálculo Integral (S3) y Mecánica (S3)</td><td>12.2 y 9</td></tr>
<tr><td>Fundamentos de Estadística (S4)</td><td>12.3 y 10.4</td></tr>
</table>`
        },
        {
          tipo: 'tip', titulo: 'Tu cuaderno es tu mejor material',
          html: String.raw`<p>Las hojas resumen de cada semana son un formulario escrito con tu letra y tus ejemplos. Reléelas la semana antes del primer día. Nadie te va a explicar mejor que tú mismo hace dos meses.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'opcion', enunciado: String.raw`<p>Si en el simulacro un bloque dio 60 %, lo recomendado es:</p>`, opciones: ['Seguir adelante: ya pasó', 'Rehacer las sesiones de ese bloque y repetir el test', 'Olvidar ese bloque'], correcta: 1, pista: 'Mira la tabla de lectura del simulacro.', solucion: String.raw`<p>Menos de 65 %: rehacer las sesiones con cuaderno y repetir el test.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>La mejor forma de usar un error en un ejercicio es:</p>`, opciones: ['Borrarlo y seguir', 'Anotarlo en un cuaderno de errores y rehacerlo en unos días', 'Evitar ese tipo de ejercicio'], correcta: 1, pista: 'El error es información.', solucion: String.raw`<p>Anotarlo con su corrección y volver a intentarlo: así deja de repetirse.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>¿Cuántas sesiones tuvo este plan?</p>`, respuesta: 60, pista: '12 semanas por 5.', solucion: String.raw`<p>\(12\cdot 5=60\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Cuando no entiendas algo en la universidad, lo recomendable es:</p>`, opciones: ['Esperar a la prueba para ver si importa', 'Preguntar esa misma semana en clase, ayudantía o tutoría', 'Dejarlo para el final del semestre'], correcta: 1, pista: 'Ninguna duda cumple una semana.', solucion: String.raw`<p>Esa misma semana. Las dudas acumuladas son la causa principal de reprobar matemáticas.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Para no perder la base hasta el inicio de clases, ¿cuántas sesiones cortas por semana sugiere este plan como mínimo?</p>`, respuesta: 2, pista: 'Dos o tres.', solucion: String.raw`<p>Al menos 2 de unos 30 minutos.</p>` }
      ],
      cuaderno: [
        'Escribe tu resultado del simulacro por bloque y tu plan de repaso con fechas.',
        'Haz la lista de "mis 10 errores más repetidos" revisando todo el cuaderno.',
        'Repite el diagnóstico inicial y anota la diferencia con la primera vez.',
        'Escribe una carta corta a ti mismo para leer el primer día de clases: qué sabes hoy que no sabías hace 12 semanas.'
      ],
      videos: [
        { titulo: 'Cómo estudiar matemáticas en la universidad', q: 'como estudiar matematicas en la universidad consejos' },
        { titulo: 'Técnicas de estudio efectivas', q: 'tecnicas de estudio efectivas universidad' }
      ],
      cierre: 'Llegaste. No a saber todo, sino a no llegar en cero. Eso era el plan, y lo cumpliste.'
    }
  ]
});
