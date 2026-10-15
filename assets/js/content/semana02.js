/* Semana 2 · Decimales, porcentajes y proporciones */
CURSO.semana({
  n: 2,
  bloque: 'A',
  titulo: 'Decimales, porcentajes y proporciones',
  subtitulo: 'Decimales, porcentajes, regla de tres y unidades: la matemática del día a día en la industria.',
  meta: 'Rendimientos, descuentos, IVA, tasas de producción y conversión de unidades son porcentajes y proporciones. Es lo que más vas a usar en los ramos de gestión, economía y operaciones, y lo que más se pregunta en los diagnósticos de nivelación.',
  resumen: [
    { t: 'Fracción a decimal', f: String.raw`\frac{a}{b}=a\div b` },
    { t: 'Porcentaje de una cantidad', f: String.raw`p\%\ \text{de}\ N=\frac{p}{100}\cdot N` },
    { t: 'Aumento o descuento en un paso', f: String.raw`N\cdot\left(1\pm\frac{p}{100}\right)` },
    { t: 'Quitar el IVA (19 %)', f: String.raw`\text{neto}=\frac{\text{total}}{1{,}19}` },
    { t: 'Variación porcentual', f: String.raw`\frac{\text{final}-\text{inicial}}{\text{inicial}}\cdot 100` },
    { t: 'Proporción directa', f: String.raw`\frac{a}{b}=\frac{c}{x}\ \Rightarrow\ x=\frac{b\cdot c}{a}` },
    { t: 'Proporción inversa', f: String.raw`a\cdot b=c\cdot x\ \Rightarrow\ x=\frac{a\cdot b}{c}` },
    { t: 'Factor de conversión', f: String.raw`2{,}5\ \text{h}\cdot\frac{60\ \text{min}}{1\ \text{h}}=150\ \text{min}` }
  ],
  sesiones: [
    /* ------------------------------------------------------------------ */
    {
      id: '2.1',
      titulo: 'Decimales: leerlos, redondearlos y operar',
      duracion: 60,
      objetivo: 'Pasar de fracción a decimal y viceversa, redondear con criterio y operar con decimales.',
      porque: 'Los resultados reales casi nunca son enteros. Saber cuántos decimales conservar y cómo redondear es parte del oficio: un ingeniero reporta 2,67 kg, no 2,666666.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'De fracción a decimal y de vuelta',
          html: String.raw`<p>Para pasar una fracción a decimal, <strong>divide</strong>: \(\frac{1}{4}=1\div 4=0{,}25\). Algunos decimales son exactos (\(0{,}25\)) y otros periódicos (\(\frac{1}{3}=0{,}333\ldots\)).</p>
<p>Para pasar un decimal a fracción, usa la posición: \(0{,}75=\frac{75}{100}=\frac{3}{4}\); \(0{,}4=\frac{4}{10}=\frac{2}{5}\); \(1{,}25=\frac{125}{100}=\frac{5}{4}\).</p>
<p>En Chile se escribe la coma decimal (2,5), pero las calculadoras, Excel y los software usan punto (2.5). Son el mismo número; aquí puedes usar cualquiera de los dos.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Redondear',
          html: String.raw`<p>Mira la cifra que sigue a la que quieres conservar: si es <strong>5 o más</strong>, la última cifra sube; si es menos de 5, se queda. \(2{,}6666\) con dos decimales es \(2{,}67\); \(3{,}142\) con dos decimales es \(3{,}14\).</p>
<p>Dos reglas de oficio: redondea <strong>al final</strong>, no en los pasos intermedios (los errores se acumulan), y conserva los decimales que el contexto necesita: pesos sin decimales, kilos con dos, porcentajes con uno.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Operar con decimales',
          html: String.raw`<ul>
<li><strong>Sumar y restar:</strong> alinea las comas. \(2{,}45+0{,}8=3{,}25\).</li>
<li><strong>Multiplicar:</strong> multiplica como enteros y luego cuenta los decimales totales. \(1{,}5\times 0{,}2\): \(15\times 2=30\), con 2 decimales: \(0{,}30\).</li>
<li><strong>Dividir:</strong> corre la coma en ambos hasta que el divisor sea entero. \(4{,}5\div 0{,}5=45\div 5=9\).</li>
</ul>
<p>Multiplicar por 10, 100 o 1000 corre la coma a la derecha; dividir, a la izquierda: \(3{,}2\times 100=320\) y \(3{,}2\div 10=0{,}32\).</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Conversiones y cuentas',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(\frac{7}{8}=7\div 8=\) <strong>\(0{,}875\)</strong>.</div></div>
<div class="paso"><span class="paso-n">2</span><div>\(0{,}125=\frac{125}{1000}=\) <strong>\(\frac{1}{8}\)</strong> (dividiendo por 125).</div></div>
<div class="paso"><span class="paso-n">3</span><div>\(3{,}456\) redondeado a un decimal: la cifra siguiente es 5, sube: <strong>\(3{,}5\)</strong>.</div></div>
<div class="paso"><span class="paso-n">4</span><div>\(2{,}35\times 4\): \(235\times 4=940\), dos decimales: <strong>\(9{,}40\)</strong>.</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'Un promedio de pesos',
          html: String.raw`<p>Tres piezas pesan 2,45 kg, 2,52 kg y 2,48 kg. El peso promedio es la suma dividida por 3:</p>
<span class="formula">\(\dfrac{2{,}45+2{,}52+2{,}48}{3}=\dfrac{7{,}45}{3}=2{,}4833\ldots\approx 2{,}48\ \text{kg}\)</span>
<p>Reportar 2,4833333 sería falso: la balanza solo mide centésimas. Dos decimales es lo honesto.</p>`
        },
        {
          tipo: 'tip', titulo: 'Las conversiones que conviene saber de memoria',
          html: String.raw`<table class="mini-tabla"><tr><th>Fracción</th><td>1/2</td><td>1/4</td><td>3/4</td><td>1/5</td><td>1/8</td><td>1/3</td><td>2/3</td></tr>
<tr><th>Decimal</th><td>0,5</td><td>0,25</td><td>0,75</td><td>0,2</td><td>0,125</td><td>0,333…</td><td>0,666…</td></tr></table>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Escribe \(\dfrac{5}{8}\) como decimal.</p>`, respuesta: 0.625, tol: 0.001, pista: 'Divide 5 entre 8.', solucion: String.raw`<p>\(5\div 8=0{,}625\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Escribe \(0{,}35\) como fracción simplificada (formato a/b).</p>`, respuesta: ['7/20'], compacto: true, placeholder: 'a/b', pista: '35/100 y simplifica por 5.', solucion: String.raw`<p>\(0{,}35=\frac{35}{100}=\frac{7}{20}\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Redondea \(12{,}4567\) a dos decimales.</p>`, respuesta: 12.46, tol: 0.001, pista: 'Mira la tercera cifra decimal.', solucion: String.raw`<p>La tercera decimal es 6 (5 o más), así que la segunda sube: \(12{,}46\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(3{,}2\times 1{,}5\).</p>`, respuesta: 4.8, tol: 0.001, pista: '32 × 15 = 480, y luego cuenta los decimales.', solucion: String.raw`<p>\(32\times 15=480\), con dos decimales: \(4{,}80\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(7{,}2\div 0{,}6\).</p>`, respuesta: 12, pista: 'Corre la coma: 72 ÷ 6.', solucion: String.raw`<p>\(72\div 6=12\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>El promedio de 1,8; 2,1 y 2,4.</p>`, respuesta: 2.1, tol: 0.001, pista: 'Suma y divide por 3.', solucion: String.raw`<p>\(1{,}8+2{,}1+2{,}4=6{,}3\), y \(6{,}3\div 3=2{,}1\).</p>` }
      ],
      cuaderno: [
        'Copia la tabla de fracciones y decimales del truco y repásala hasta decirla de memoria.',
        'Escribe la regla de redondeo con un ejemplo que suba y otro que se quede.',
        'Resuelve a mano los ejercicios antes de comprobarlos.',
        'Anota tres situaciones de tu trabajo o tu casa en las que uses decimales (plata, peso, tiempo).'
      ],
      videos: [
        { titulo: 'De fracción a decimal y de decimal a fracción', q: 'profe alex convertir fraccion a decimal y decimal a fraccion' },
        { titulo: 'Redondeo de números decimales', q: 'redondeo de numeros decimales explicacion facil' }
      ],
      cierre: 'Redondea al final, no en el camino. Y conserva los decimales que el contexto necesita, no más.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '2.2',
      titulo: 'Porcentajes: la herramienta más usada de todas',
      duracion: 60,
      objetivo: 'Calcular un porcentaje de una cantidad, aumentos, descuentos, el IVA y variaciones porcentuales.',
      porque: 'Eficiencia del 87 %, merma del 3 %, IVA del 19 %, aumento de costos del 12 %: casi todo indicador de gestión es un porcentaje. Lo vas a usar en economía, contabilidad, operaciones y en la vida.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Un porcentaje es una fracción de 100',
          html: String.raw`<p>\(25\%\) significa \(\frac{25}{100}=0{,}25\). Para calcular el \(p\%\) de una cantidad \(N\):</p>
<span class="formula">\(p\%\ \text{de}\ N=\dfrac{p}{100}\cdot N\)</span>
<p>\(20\%\) de 350 es \(0{,}20\cdot 350=70\).</p>
<p>Atajos mentales: el 10 % es dividir por 10; el 50 % es la mitad; el 25 % es la cuarta parte; el 5 % es la mitad del 10 %; el 1 % es dividir por 100. Con eso armas casi cualquier porcentaje: el 15 % es 10 % más 5 %.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Aumentos y descuentos en un solo paso',
          html: String.raw`<p>Aumentar un 19 % es quedarse con el 119 %: multiplicar por \(1{,}19\). Descontar un 15 % es quedarse con el 85 %: multiplicar por \(0{,}85\).</p>
<span class="formula">\(\text{nuevo}=N\cdot\left(1\pm\dfrac{p}{100}\right)\)</span>
<p>Para el IVA chileno: <strong>total = neto × 1,19</strong>, y por lo tanto <strong>neto = total ÷ 1,19</strong>.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Variación porcentual y "qué porcentaje es"',
          html: String.raw`<span class="formula">\(\text{variación}=\dfrac{\text{final}-\text{inicial}}{\text{inicial}}\cdot 100\)</span>
<p>De 80 a 100: \(\frac{20}{80}\cdot 100=+25\%\). De 100 a 80: \(\frac{-20}{100}\cdot 100=-20\%\). No es simétrico porque la base cambia.</p>
<p>Para saber qué porcentaje representa una parte: \(\frac{\text{parte}}{\text{total}}\cdot 100\). 36 piezas defectuosas de 240 son \(\frac{36}{240}\cdot 100=15\%\).</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Con IVA, sin IVA y creciendo',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>Precio neto $45.000. Con IVA: \(45000\cdot 1{,}19=\) <strong>$53.550</strong>.</div></div>
<div class="paso"><span class="paso-n">2</span><div>Boleta de $23.800 con IVA. Neto: \(23800\div 1{,}19=\) <strong>$20.000</strong>.</div></div>
<div class="paso"><span class="paso-n">3</span><div>La producción pasó de 1.250 a 1.400 unidades: \(\frac{150}{1250}\cdot 100=\) <strong>+12 %</strong>.</div></div>
<div class="paso"><span class="paso-n">4</span><div>Un sueldo de $850.000 sube 4 %: \(850000\cdot 1{,}04=\) <strong>$884.000</strong>.</div></div>`
        },
        {
          tipo: 'error', titulo: 'Porcentajes que no se suman',
          html: String.raw`<p>Dos descuentos del 20 % <strong>no</strong> son un 40 %: \(100\cdot 0{,}8\cdot 0{,}8=64\), o sea, un 36 % de descuento. Cada porcentaje se aplica sobre la cantidad que quedó.</p>
<p>Para quitar el IVA no restes el 19 % del total: \(23800\cdot 0{,}81=19278\), que está mal. Divide por 1,19.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Calcula el 15 % de 800.</p>`, respuesta: 120, pista: '10 % es 80 y 5 % es 40.', solucion: String.raw`<p>\(0{,}15\cdot 800=120\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Un producto cuesta $12.500 y tiene 30 % de descuento. ¿Cuál es el precio final?</p>`, respuesta: 8750, unidad: '$', pista: 'Multiplica por 0,70.', solucion: String.raw`<p>\(12500\cdot 0{,}70=8750\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Un servicio tiene un valor neto de $36.000. ¿Cuánto es con IVA (19 %)?</p>`, respuesta: 42840, unidad: '$', pista: 'Multiplica por 1,19.', solucion: String.raw`<p>\(36000\cdot 1{,}19=42840\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>¿Qué porcentaje de 250 es 40?</p>`, respuesta: 16, unidad: '%', pista: 'Parte dividido por total, por 100.', solucion: String.raw`<p>\(\frac{40}{250}\cdot 100=16\%\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Las ventas pasaron de 60 a 75 unidades. ¿Cuál fue la variación porcentual?</p>`, respuesta: 25, unidad: '%', pista: 'Diferencia dividida por el valor inicial.', solucion: String.raw`<p>\(\frac{75-60}{60}\cdot 100=\frac{15}{60}\cdot 100=25\%\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Una boleta dice $59.500 con IVA incluido. ¿Cuál es el valor neto?</p>`, respuesta: 50000, unidad: '$', pista: 'Divide por 1,19.', solucion: String.raw`<p>\(59500\div 1{,}19=50000\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Un producto sube un 25 % y después baja un 25 %. ¿Qué pasa con el precio?</p>`, opciones: ['Vuelve al precio original', 'Queda más barato que al principio', 'Queda más caro que al principio'], correcta: 1, pista: 'Prueba con un precio de 100.', solucion: String.raw`<p>De 100 sube a 125; el 25 % de 125 es 31,25, así que baja a 93,75. Queda más barato, porque el descuento se aplicó sobre una base mayor.</p>` }
      ],
      cuaderno: [
        'Escribe los atajos del 10 %, 5 %, 25 %, 50 % y 1 % con un ejemplo cada uno.',
        'Anota la fórmula de variación porcentual y calcula la de un precio que conozcas (por ejemplo, el pan o la bencina) entre dos fechas.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Explica con un ejemplo numérico por qué dos descuentos de 20 % no son 40 %.'
      ],
      videos: [
        { titulo: 'Porcentajes desde cero', q: 'daniel carreon porcentajes' },
        { titulo: 'Cómo calcular el IVA y descuentos', q: 'como calcular el iva y descuentos porcentaje explicacion' }
      ],
      cierre: 'Aumentar p % es multiplicar por (1 + p/100). Descontar, por (1 − p/100). Con eso resuelves casi todo.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '2.3',
      titulo: 'Razones, proporciones y regla de tres',
      duracion: 60,
      objetivo: 'Resolver problemas de proporcionalidad directa e inversa y trabajar con razones y tasas.',
      porque: 'Cuánto material para 500 piezas si 120 usan 18 kg; cuánto tardan 4 máquinas en lo que 3 hacen en 10 horas. Planificación de la producción e investigación de operaciones empiezan con estas preguntas.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Razón, tasa y escala',
          html: String.raw`<p>Una <strong>razón</strong> compara dos cantidades dividiendo: "3 de cada 5" es \(3:5\) o \(\frac{3}{5}\). Una <strong>tasa</strong> es una razón entre cantidades de distinta unidad: 30 piezas/hora, $1.500 por kilo, 12 km por litro.</p>
<p>Una <strong>escala</strong> 1:50 dice que 1 cm del plano son 50 cm reales.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Proporcionalidad directa',
          html: String.raw`<p>Dos cantidades son directamente proporcionales si al duplicar una se duplica la otra (más piezas, más material). Se resuelve con la regla de tres:</p>
<span class="formula">\(\dfrac{a}{b}=\dfrac{c}{x}\ \Rightarrow\ x=\dfrac{b\cdot c}{a}\)</span>
<p>Ordena los datos en dos columnas, una por magnitud, y mantén cada fila consistente.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Proporcionalidad inversa',
          html: String.raw`<p>Son inversamente proporcionales si al duplicar una, la otra se reduce a la mitad (más máquinas, menos tiempo). Aquí el <strong>producto</strong> se mantiene constante:</p>
<span class="formula">\(a\cdot b=c\cdot x\ \Rightarrow\ x=\dfrac{a\cdot b}{c}\)</span>`
        },
        {
          tipo: 'ejemplo', titulo: 'Directa, inversa y escala',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>120 piezas usan 18 kg de material. Para 500 piezas (directa): \(x=\frac{18\cdot 500}{120}=\) <strong>75 kg</strong>.</div></div>
<div class="paso"><span class="paso-n">2</span><div>3 máquinas iguales terminan un pedido en 10 horas. Con 4 máquinas (inversa): \(3\cdot 10=4\cdot x\), \(x=\) <strong>7,5 horas</strong>.</div></div>
<div class="paso"><span class="paso-n">3</span><div>Escala 1:50. Una pared mide 4 cm en el plano: \(4\cdot 50=200\) cm = <strong>2 m</strong>.</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'Con una tasa de producción',
          html: String.raw`<p>Una línea produce 240 piezas en 8 horas. Su tasa es \(240\div 8=30\) piezas/hora. Un pedido de 1.500 piezas tardará \(1500\div 30=50\) horas, algo más de 6 turnos de 8 horas.</p>
<p>Calcular la tasa primero (cuánto por unidad de tiempo) suele ser más claro que la regla de tres, y es lo mismo.</p>`
        },
        {
          tipo: 'error', titulo: 'Aplicar regla de tres directa a todo',
          html: String.raw`<p>Antes de calcular pregúntate: <em>si sube una, ¿sube la otra?</em> Si más operarios hacen el trabajo en menos días, la relación es inversa y la regla de tres directa da un resultado absurdo (más operarios, más días).</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>5 kg de un insumo cuestan $7.500. ¿Cuánto cuestan 8 kg?</p>`, respuesta: 12000, unidad: '$', pista: 'Calcula primero el precio por kilo.', solucion: String.raw`<p>\(7500\div 5=1500\) por kilo; \(1500\cdot 8=12000\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Una máquina produce 240 piezas en 8 horas. ¿Cuántas produce en 30 horas al mismo ritmo?</p>`, respuesta: 900, unidad: 'piezas', pista: 'Tasa: 30 piezas por hora.', solucion: String.raw`<p>\(240\div 8=30\) piezas/h; \(30\cdot 30=900\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>6 operarios terminan un trabajo en 12 días. ¿Cuántos días tardan 9 operarios al mismo ritmo?</p>`, respuesta: 8, unidad: 'días', pista: 'Es inversa: el producto operarios × días se mantiene.', solucion: String.raw`<p>\(6\cdot 12=72\) "días-operario"; \(72\div 9=8\) días.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>En un plano a escala 1:200, un galpón mide 3,5 cm de largo. ¿Cuántos metros mide en la realidad?</p>`, respuesta: 7, unidad: 'm', pista: 'Multiplica por 200 y pasa de cm a m.', solucion: String.raw`<p>\(3{,}5\cdot 200=700\) cm \(=7\) m.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Una bomba llena un estanque en 6 horas. ¿Qué relación hay entre el número de bombas iguales y el tiempo de llenado?</p>`, opciones: ['Directa: más bombas, más tiempo', 'Inversa: más bombas, menos tiempo', 'No hay relación'], correcta: 1, pista: 'Imagina dos bombas trabajando a la vez.', solucion: String.raw`<p>Con 2 bombas se tarda la mitad, 3 horas. El producto bombas × horas se mantiene en 6: relación inversa.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>En una línea, la razón entre piezas buenas y defectuosas es 24:1. De 1.000 piezas, ¿cuántas se esperan defectuosas?</p>`, respuesta: 40, unidad: 'piezas', pista: 'De cada 25 piezas, 1 es defectuosa.', solucion: String.raw`<p>24 buenas + 1 defectuosa = 25 piezas por grupo. \(1000\div 25=40\) defectuosas.</p>` }
      ],
      cuaderno: [
        'Escribe la diferencia entre proporción directa e inversa con un ejemplo real de cada una.',
        'Resuelve el problema de las máquinas (3 máquinas, 10 horas) con una tabla de dos columnas.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Anota una tasa que uses en tu trabajo o en tu día (pedidos por día, kilómetros por litro, etc.).'
      ],
      videos: [
        { titulo: 'Regla de tres simple directa e inversa', q: 'julioprofe regla de tres simple directa e inversa' },
        { titulo: 'Razones y proporciones', q: 'profe alex razones y proporciones' }
      ],
      cierre: 'Si sube una y sube la otra, directa. Si sube una y baja la otra, inversa. Decide eso antes de calcular.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '2.4',
      titulo: 'Unidades, estimación y orden de magnitud',
      duracion: 60,
      objetivo: 'Convertir unidades con factores de conversión y estimar resultados para detectar errores.',
      porque: 'Física, termodinámica y procesos trabajan con unidades. La mayoría de los errores en esos ramos no son de matemática, son de unidades. Y estimar antes de calcular te avisa cuando algo salió mal.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'El sistema métrico en una tabla',
          html: String.raw`<table class="mini-tabla"><tr><th>Prefijo</th><td>kilo (k)</td><td>hecto (h)</td><td>deca (da)</td><td>unidad</td><td>deci (d)</td><td>centi (c)</td><td>mili (m)</td></tr>
<tr><th>Factor</th><td>×1000</td><td>×100</td><td>×10</td><td>1</td><td>÷10</td><td>÷100</td><td>÷1000</td></tr></table>
<p>Sirve para metros, gramos y litros. Además: 1 L = 1.000 mL = 1.000 cm³; 1 hora = 60 min = 3.600 s; 1 tonelada = 1.000 kg.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Factor de conversión',
          html: String.raw`<p>Un factor de conversión es una fracción que vale 1, como \(\frac{60\ \text{min}}{1\ \text{h}}\). Multiplicar por ella no cambia la cantidad, solo la unidad. Escribe las unidades y cancela las que se repiten arriba y abajo:</p>
<span class="formula">\(2{,}5\ \text{h}\cdot\dfrac{60\ \text{min}}{1\ \text{h}}=150\ \text{min}\)</span>
<p>Se pueden encadenar: \(72\ \frac{\text{km}}{\text{h}}\cdot\frac{1000\ \text{m}}{1\ \text{km}}\cdot\frac{1\ \text{h}}{3600\ \text{s}}=20\ \frac{\text{m}}{\text{s}}\). Atajo: de km/h a m/s se divide por 3,6.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Estimar y orden de magnitud',
          html: String.raw`<p>Antes de calcular, redondea a números cómodos: \(19\times 52\approx 20\times 50=1000\). Si tu resultado exacto da 98,8 o 9.880, algo falló. El <strong>orden de magnitud</strong> es la potencia de 10 más cercana: 1.000 es "del orden de \(10^3\)".</p>
<p>Esta costumbre de estimar es la que distingue a quien entiende lo que calcula de quien solo aprieta teclas.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Conversiones frecuentes',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>3,2 km en metros: \(3{,}2\cdot 1000=\) <strong>3.200 m</strong>.</div></div>
<div class="paso"><span class="paso-n">2</span><div>450 g en kilos: \(450\div 1000=\) <strong>0,45 kg</strong>.</div></div>
<div class="paso"><span class="paso-n">3</span><div>90 km/h en m/s: \(90\div 3{,}6=\) <strong>25 m/s</strong>.</div></div>
<div class="paso"><span class="paso-n">4</span><div>2 h 45 min en horas: \(45\div 60=0{,}75\), así que <strong>2,75 h</strong>.</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'Un turno completo',
          html: String.raw`<p>Una máquina saca una pieza cada 12 segundos. ¿Cuántas en un turno de 8 horas?</p>
<span class="formula">\(8\ \text{h}\cdot\dfrac{3600\ \text{s}}{1\ \text{h}}=28800\ \text{s};\qquad 28800\div 12=2400\ \text{piezas}\)</span>
<p>Estimación previa: \(30000\div 10\approx 3000\). El resultado exacto, 2.400, está en el mismo orden. Tiene sentido.</p>`
        },
        {
          tipo: 'error', titulo: 'Áreas y volúmenes',
          html: String.raw`<p>1 m tiene 100 cm, pero 1 m² tiene \(100\cdot 100=10.000\) cm², y 1 m³ tiene \(1.000.000\) cm³. Al convertir áreas y volúmenes, el factor también se eleva al cuadrado o al cubo.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Convierte 4,5 km a metros.</p>`, respuesta: 4500, unidad: 'm', pista: 'Multiplica por 1000.', solucion: String.raw`<p>\(4{,}5\cdot 1000=4500\) m.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Convierte 2 horas y 20 minutos a horas (decimal, dos decimales).</p>`, respuesta: 2.3333, unidad: 'h', pista: '20 minutos son 20/60 de hora.', solucion: String.raw`<p>\(20\div 60=0{,}333\ldots\), así que \(2{,}33\) h.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Convierte 54 km/h a m/s.</p>`, respuesta: 15, unidad: 'm/s', pista: 'Divide por 3,6.', solucion: String.raw`<p>\(54\cdot\frac{1000}{3600}=15\) m/s.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Una máquina produce una pieza cada 15 segundos. ¿Cuántas piezas produce en 2 horas?</p>`, respuesta: 480, unidad: 'piezas', pista: '2 horas en segundos, dividido por 15.', solucion: String.raw`<p>\(2\cdot 3600=7200\) s; \(7200\div 15=480\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Sin calcular exacto, ¿cuánto vale aproximadamente \(49\times 21\)?</p>`, opciones: ['Cerca de 100', 'Cerca de 1.000', 'Cerca de 10.000'], correcta: 1, pista: 'Redondea a 50 × 20.', solucion: String.raw`<p>\(50\times 20=1000\). El valor exacto es 1.029.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Convierte 3 m² a cm².</p>`, respuesta: 30000, unidad: 'cm²', pista: '1 m² = 10.000 cm².', solucion: String.raw`<p>\(3\cdot 10000=30000\) cm².</p>` }
      ],
      cuaderno: [
        'Copia la tabla de prefijos (kilo, hecto, deca, unidad, deci, centi, mili) con sus factores.',
        'Convierte 72 km/h a m/s escribiendo las unidades en cada paso y tachando las que se cancelan.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Antes de cada ejercicio, anota tu estimación; después compárala con el resultado exacto.'
      ],
      videos: [
        { titulo: 'Conversión de unidades con factores de conversión', q: 'julioprofe conversion de unidades factores de conversion' },
        { titulo: 'Convertir km/h a m/s', q: 'convertir km/h a m/s explicacion facil' }
      ],
      cierre: 'Escribe siempre las unidades. Si no se cancelan como esperabas, el error está ahí.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '2.5',
      titulo: 'Repaso y mini test de la semana 2',
      duracion: 60,
      tipo: 'test',
      objetivo: 'Comprobar que manejas decimales, porcentajes, proporciones y unidades sin ayuda.',
      intro: String.raw`<p><strong>Repasa 10 minutos</strong> con el cuaderno cerrado:</p>
<ul>
<li>¿Cómo se aumenta y cómo se descuenta un porcentaje en un solo paso?</li>
<li>¿Cómo se quita el IVA a un total?</li>
<li>¿Cómo distingues una proporción directa de una inversa?</li>
<li>¿Qué factor pasa de km/h a m/s?</li>
</ul>
<p>Luego resuelve las 10 preguntas en el cuaderno y marca aquí. <strong>Meta: 8 de 10.</strong></p>`,
      ejercicios: [
        { tipo: 'num', area: 'Decimales (2.1)', enunciado: String.raw`<p>\(\dfrac{7}{8}\) como decimal.</p>`, respuesta: 0.875, tol: 0.001, solucion: String.raw`<p>\(7\div 8=0{,}875\).</p>` },
        { tipo: 'num', area: 'Decimales (2.1)', enunciado: String.raw`<p>Redondea \(3{,}14159\) a dos decimales.</p>`, respuesta: 3.14, tol: 0.001, solucion: String.raw`<p>La tercera decimal es 1: se queda en \(3{,}14\).</p>` },
        { tipo: 'num', area: 'Porcentajes (2.2)', enunciado: String.raw`<p>El 12 % de 450.</p>`, respuesta: 54, solucion: String.raw`<p>\(0{,}12\cdot 450=54\).</p>` },
        { tipo: 'num', area: 'Porcentajes (2.2)', enunciado: String.raw`<p>Un neto de $20.000 con IVA del 19 %.</p>`, respuesta: 23800, unidad: '$', solucion: String.raw`<p>\(20000\cdot 1{,}19=23800\).</p>` },
        { tipo: 'num', area: 'Porcentajes (2.2)', enunciado: String.raw`<p>Variación porcentual de 50 a 40 (con signo).</p>`, respuesta: -20, unidad: '%', solucion: String.raw`<p>\(\frac{40-50}{50}\cdot 100=-20\%\).</p>` },
        { tipo: 'opcion', area: 'Porcentajes (2.2)', enunciado: String.raw`<p>Un producto de $10.000 recibe dos descuentos sucesivos de 10 %. Precio final:</p>`, opciones: ['$8.000', '$8.100', '$9.000'], correcta: 1, solucion: String.raw`<p>\(10000\cdot 0{,}9=9000\), y \(9000\cdot 0{,}9=8100\).</p>` },
        { tipo: 'num', area: 'Proporciones (2.3)', enunciado: String.raw`<p>4 kg cuestan $6.000. ¿Cuánto cuestan 10 kg?</p>`, respuesta: 15000, unidad: '$', solucion: String.raw`<p>\(6000\div 4=1500\) por kilo; \(1500\cdot 10=15000\).</p>` },
        { tipo: 'num', area: 'Proporciones (2.3)', enunciado: String.raw`<p>8 máquinas tardan 6 horas. ¿Cuánto tardan 12 máquinas?</p>`, respuesta: 4, unidad: 'h', solucion: String.raw`<p>Inversa: \(8\cdot 6=48\); \(48\div 12=4\) horas.</p>` },
        { tipo: 'num', area: 'Unidades (2.4)', enunciado: String.raw`<p>2,5 horas en minutos.</p>`, respuesta: 150, unidad: 'min', solucion: String.raw`<p>\(2{,}5\cdot 60=150\).</p>` },
        { tipo: 'num', area: 'Unidades (2.4)', enunciado: String.raw`<p>36 km/h en m/s.</p>`, respuesta: 10, unidad: 'm/s', solucion: String.raw`<p>\(36\div 3{,}6=10\).</p>` }
      ],
      cuaderno: [
        'Haz la hoja resumen de la semana 2: porcentajes (atajos, aumento, descuento, IVA, variación), regla de tres directa e inversa, factores de conversión.',
        'Resuelve el test completo en el cuaderno antes de responder en pantalla.',
        'Anota tu puntaje y las preguntas falladas.',
        'Si fallaste 3 o más, repite la sesión correspondiente antes de la semana 3.'
      ],
      videos: [
        { titulo: 'Ejercicios resueltos de porcentajes y regla de tres', q: 'ejercicios resueltos porcentajes y regla de tres' }
      ],
      cierre: 'Lo de esta semana es lo que más vas a usar en tu vida profesional. Vale la pena dejarlo firme.'
    }
  ]
});
