/* Semana 1 · Los números vuelven */
CURSO.semana({
  n: 1,
  bloque: 'A',
  titulo: 'Los números vuelven',
  subtitulo: 'Enteros con signo, jerarquía de operaciones y fracciones.',
  meta: 'Todo lo que viene (álgebra, funciones, cálculo) se apoya en operar con confianza. Si aquí quedan dudas, cada paso posterior cuesta el doble. Esta semana es simple a propósito: la meta es que vuelvas a sentirte cómodo con los números.',
  resumen: [
    { t: 'Regla de signos (multiplicar y dividir)', f: String.raw`(+)(+)=+ \quad (+)(-)=- \quad (-)(-)=+` },
    { t: 'Restar es sumar el opuesto', f: String.raw`a-(-b)=a+b` },
    { t: 'Orden de las operaciones', f: String.raw`(\ ) \ \to\ \text{potencias} \ \to\ \times\ \div \ \to\ +\ -` },
    { t: 'Fracción equivalente', f: String.raw`\frac{a}{b}=\frac{a\cdot k}{b\cdot k}` },
    { t: 'Suma de fracciones', f: String.raw`\frac{a}{b}+\frac{c}{d}=\frac{ad+bc}{bd}` },
    { t: 'Producto de fracciones', f: String.raw`\frac{a}{b}\cdot\frac{c}{d}=\frac{ac}{bd}` },
    { t: 'División de fracciones', f: String.raw`\frac{a}{b}\div\frac{c}{d}=\frac{a}{b}\cdot\frac{d}{c}` }
  ],
  sesiones: [
    /* ------------------------------------------------------------------ */
    {
      id: '1.1',
      titulo: 'Enteros, signos y recta numérica',
      duracion: 60,
      objetivo: 'Ordenar números con signo, entender el valor absoluto y sumar o restar enteros sin dudar.',
      porque: 'En la universidad vas a sumar saldos, diferencias de temperatura, pérdidas y ganancias. Un error de signo arruina un ejercicio entero aunque todo lo demás esté bien.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'La recta numérica',
          html: String.raw`<p>Los números negativos viven a la izquierda del cero. Cuanto más a la izquierda, <strong>menor</strong> es el número: \(-8 < -3\), aunque 8 sea "más grande" que 3.</p>
<p>El <strong>valor absoluto</strong> es la distancia al cero, sin importar el lado: \(|{-7}| = 7\) y \(|7| = 7\).</p>
<p>Piensa en plata: \(-7\) es una deuda de 7; \(+7\) es un ahorro de 7. Las dos tienen "tamaño" 7.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Sumar y restar con signos',
          html: String.raw`<p>Solo hay dos situaciones al <strong>sumar</strong>:</p>
<ul>
<li><strong>Mismo signo:</strong> suma los valores absolutos y conserva el signo. \((-8)+(-5) = -13\). Dos deudas se juntan en una deuda mayor.</li>
<li><strong>Distinto signo:</strong> resta el menor del mayor y pon el signo del que tiene mayor valor absoluto. \((-8)+5 = -3\). Una deuda de 8 y un ahorro de 5 dejan una deuda de 3.</li>
</ul>
<p>Y una sola regla para <strong>restar</strong>: restar es sumar el opuesto.</p>
<span class="formula">\(a - (-b) = a + b \qquad\qquad a - b = a + (-b)\)</span>
<p>Así, \(6-(-4) = 6+4 = 10\), y \(-3-7 = -3+(-7) = -10\).</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Cuatro casos, con el razonamiento',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\((-12)+7\): distinto signo. \(12-7=5\), gana el negativo: <strong>\(-5\)</strong>.</div></div>
<div class="paso"><span class="paso-n">2</span><div>\((-12)+(-7)\): mismo signo. \(12+7=19\), signo negativo: <strong>\(-19\)</strong>.</div></div>
<div class="paso"><span class="paso-n">3</span><div>\(9-(-4)\): restar es sumar el opuesto: \(9+4=\) <strong>\(13\)</strong>.</div></div>
<div class="paso"><span class="paso-n">4</span><div>\(-9-4\): es \(-9+(-4)\), mismo signo: <strong>\(-13\)</strong>.</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'En una bodega',
          html: String.raw`<p>El registro de un producto durante la semana fue: entrada de 120, salida de 45, salida de 80 y entrada de 30. ¿Cuál es el saldo?</p>
<p>Escribe cada movimiento con su signo y suma de izquierda a derecha:</p>
<span class="formula">\(120 - 45 - 80 + 30 = 75 - 80 + 30 = -5 + 30 = 25\)</span>
<p>Quedan 25 unidades. Si en algún momento el saldo da negativo (como el \(-5\) intermedio), significa que se prometió más de lo que había: en logística eso se llama quiebre de stock.</p>`
        },
        {
          tipo: 'error', titulo: 'Confundir "menos por menos" con "menos y menos"',
          html: String.raw`<p>"Menos por menos da más" es una regla de <strong>multiplicación</strong>. En \(-3-7\) no hay multiplicación: son dos deudas, y el resultado es \(-10\), no \(+10\) ni \(-4\).</p>
<p>La regla solo aplica cuando hay dos signos seguidos: \(5-(-2)=5+2=7\).</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Calcula \((-12)+7\).</p>`, respuesta: -5, pista: 'Signos distintos: resta 12 − 7 y conserva el signo del mayor en valor absoluto.', solucion: String.raw`<p>\(12-7=5\) y gana el negativo: \(-5\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(-9-6\).</p>`, respuesta: -15, pista: 'Es −9 + (−6): dos negativos se juntan.', solucion: String.raw`<p>\(-9+(-6)=-15\). Dos deudas forman una deuda mayor.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(4-(-11)\).</p>`, respuesta: 15, pista: 'Restar un negativo es sumar.', solucion: String.raw`<p>\(4-(-11)=4+11=15\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>¿Cuál de estos números es el <strong>menor</strong>?</p>`, opciones: [String.raw`\(-3\)`, String.raw`\(-8\)`, String.raw`\(0\)`, String.raw`\(-1\)`], correcta: 1, pista: 'Dibuja la recta: el menor es el que está más a la izquierda.', solucion: String.raw`<p>En la recta, \(-8\) está más a la izquierda que \(-3\), \(-1\) y \(0\). Por eso es el menor.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(|{-14}| - |6|\).</p>`, respuesta: 8, pista: 'Primero convierte cada valor absoluto en un número sin signo.', solucion: String.raw`<p>\(|{-14}|=14\) y \(|6|=6\), así que \(14-6=8\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>En una ciudad amanece a \(-4\,°C\). A mediodía la temperatura sube 9 grados y en la noche baja 6. ¿Cuál es la temperatura final?</p>`, respuesta: -1, unidad: '°C', pista: 'Escríbelo como una sola cuenta: −4 + 9 − 6.', solucion: String.raw`<p>\(-4+9=5\), y \(5-6=-1\). Termina en \(-1\,°C\).</p>` }
      ],
      cuaderno: [
        'Dibuja una recta numérica de −10 a 10 y marca −7, −2, 0, 3 y 8. Escribe debajo cuál es el menor y cuál el mayor.',
        'Escribe con tus palabras las dos reglas para sumar con signos, con un ejemplo de cada una, y la regla "restar es sumar el opuesto".',
        'Resuelve los 6 ejercicios a mano, con el paso intermedio, antes de comprobarlos en pantalla.',
        'Cierra con una línea: qué te confundió más hoy. Si nada, escribe "nada" (también vale).'
      ],
      videos: [
        { titulo: 'Suma y resta de números enteros', q: 'julioprofe suma y resta de numeros enteros' },
        { titulo: 'Ley de los signos explicada desde cero', q: 'matematicas profe alex ley de los signos suma y resta' }
      ],
      cierre: 'Restar es sumar el opuesto. Si lo tienes claro, el signo deja de ser un problema.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '1.2',
      titulo: 'Multiplicar, dividir y el orden de las operaciones',
      duracion: 60,
      objetivo: 'Aplicar la regla de signos en productos y cocientes, y resolver expresiones respetando la jerarquía de operaciones.',
      porque: 'Toda fórmula de ingeniería es una expresión con varias operaciones. Si cambias el orden, obtienes otro número. Las calculadoras y Excel siguen exactamente esta jerarquía, así que vale la pena hablar su idioma.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Regla de signos al multiplicar y dividir',
          html: String.raw`<p>Aquí sí aplica la regla famosa:</p>
<span class="formula">\((+)(+)=+ \qquad (-)(-)=+ \qquad (+)(-)=- \qquad (-)(+)=-\)</span>
<p>Signos <strong>iguales</strong> dan positivo; signos <strong>distintos</strong> dan negativo. Lo mismo al dividir.</p>
<p>\((-3)(-4)=12\), \((-3)(4)=-12\), \(-20\div 5=-4\), \(-20\div(-5)=4\).</p>`
        },
        {
          tipo: 'concepto', titulo: 'La jerarquía de operaciones',
          html: String.raw`<p>Cuando hay varias operaciones, el orden es siempre este:</p>
<ol>
<li><strong>Paréntesis</strong>, de adentro hacia afuera.</li>
<li><strong>Potencias y raíces.</strong></li>
<li><strong>Multiplicaciones y divisiones</strong>, de izquierda a derecha.</li>
<li><strong>Sumas y restas</strong>, de izquierda a derecha.</li>
</ol>
<p>Dos detalles que causan la mitad de los errores: multiplicar y dividir tienen el <em>mismo</em> rango (se resuelven en el orden en que aparecen), y la potencia va antes que el signo: \(-3^2=-9\), pero \((-3)^2=9\).</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Paso a paso',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(2+3\times 4\): primero el producto, \(2+12=\) <strong>\(14\)</strong>. No es 20.</div></div>
<div class="paso"><span class="paso-n">2</span><div>\((2+3)\times 4\): el paréntesis manda, \(5\times 4=\) <strong>\(20\)</strong>.</div></div>
<div class="paso"><span class="paso-n">3</span><div>\(20-8\div 2\times 3\): de izquierda a derecha, \(8\div 2=4\), \(4\times 3=12\), \(20-12=\) <strong>\(8\)</strong>.</div></div>
<div class="paso"><span class="paso-n">4</span><div>\(5+2\times(6-4)^2\): paréntesis \(=2\), potencia \(=4\), producto \(=8\), suma \(=\) <strong>\(13\)</strong>.</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'Una compra con dos precios',
          html: String.raw`<p>Compras 3 cajas a $4.500 y 2 cajas a $2.800. El total es:</p>
<span class="formula">\(3\times 4500 + 2\times 2800 = 13500 + 5600 = 19100\)</span>
<p>Sin la jerarquía, alguien podría calcular \(3\times 4500+2 = 13502\) y luego multiplicar por 2800. La jerarquía es la que hace que la cuenta signifique lo que quieres decir.</p>`
        },
        {
          tipo: 'error', titulo: 'Dos trampas clásicas',
          html: String.raw`<p><strong>De izquierda a derecha:</strong> \(12\div 2\times 3 = 6\times 3 = 18\), no \(12\div 6 = 2\).</p>
<p><strong>El signo y la potencia:</strong> \(-2^2 = -(2^2) = -4\). Si quieres elevar el número negativo, necesitas paréntesis: \((-2)^2=4\).</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Calcula \((-6)\cdot(-7)\).</p>`, respuesta: 42, pista: 'Signos iguales: el resultado es positivo.', solucion: String.raw`<p>\(6\cdot 7=42\) y los signos son iguales: \(+42\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(-45\div 9\).</p>`, respuesta: -5, pista: 'Signos distintos: negativo.', solucion: String.raw`<p>\(45\div 9=5\), signos distintos: \(-5\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(3+4\times 5\).</p>`, respuesta: 23, pista: 'Primero la multiplicación.', solucion: String.raw`<p>\(4\times 5=20\), luego \(3+20=23\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \((3+4)\times 5\).</p>`, respuesta: 35, pista: 'El paréntesis se resuelve primero.', solucion: String.raw`<p>\(7\times 5=35\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(24\div 4\times 2-5\).</p>`, respuesta: 7, pista: 'División y multiplicación de izquierda a derecha, y al final la resta.', solucion: String.raw`<p>\(24\div 4=6\), \(6\times 2=12\), \(12-5=7\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(2\times(7-3)^2-10\).</p>`, respuesta: 22, pista: 'Paréntesis, después potencia, después producto.', solucion: String.raw`<p>\(7-3=4\), \(4^2=16\), \(2\times 16=32\), \(32-10=22\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>¿Cuánto vale \(-3^2\)?</p>`, opciones: [String.raw`\(9\)`, String.raw`\(-9\)`, String.raw`\(6\)`, String.raw`\(-6\)`], correcta: 1, pista: 'La potencia se calcula antes que el signo.', solucion: String.raw`<p>\(-3^2=-(3\cdot 3)=-9\). Para obtener 9 habría que escribir \((-3)^2\).</p>` }
      ],
      cuaderno: [
        'Copia la jerarquía de operaciones como una lista numerada de 4 pasos y subraya "de izquierda a derecha".',
        'Resuelve 5 + 2 × (6 − 4)² escribiendo un solo paso por línea.',
        'Inventa dos expresiones donde poner o quitar un paréntesis cambie el resultado, y resuélvelas.',
        'Resuelve los 7 ejercicios a mano antes de comprobarlos.'
      ],
      videos: [
        { titulo: 'Jerarquía de operaciones', q: 'julioprofe jerarquia de operaciones' },
        { titulo: 'Multiplicación y división de enteros', q: 'profe alex multiplicacion y division de numeros enteros' }
      ],
      cierre: 'Primero lo que está entre paréntesis, después potencias, después multiplicar y dividir, al final sumar y restar.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '1.3',
      titulo: 'Fracciones I: qué son y cómo compararlas',
      duracion: 60,
      objetivo: 'Entender qué representa una fracción, encontrar equivalentes, simplificar y comparar.',
      porque: 'Las fracciones aparecen en todas partes: proporciones de mezcla, rendimientos, fórmulas de física y toda el álgebra. Simplificar bien ahorra errores y tiempo.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Qué es una fracción',
          html: String.raw`<p>\(\dfrac{3}{4}\) significa "de 4 partes iguales, tomo 3". El de arriba es el <strong>numerador</strong> (cuántas tomo), el de abajo el <strong>denominador</strong> (en cuántas partes se dividió el todo).</p>
<p>Una fracción también es una <strong>división pendiente</strong>: \(\frac{3}{4}=3\div 4=0{,}75\).</p>
<p>Si el numerador es mayor que el denominador, la fracción vale más que 1 (se llama impropia): \(\frac{7}{4}=1\frac{3}{4}\), es decir, un entero y tres cuartos.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Equivalentes y simplificar',
          html: String.raw`<p>Multiplicar o dividir arriba y abajo por el mismo número <strong>no cambia</strong> el valor:</p>
<span class="formula">\(\dfrac{a}{b}=\dfrac{a\cdot k}{b\cdot k}\)</span>
<p>\(\frac{1}{2}=\frac{2}{4}=\frac{50}{100}\). <strong>Simplificar</strong> es dividir arriba y abajo por un divisor común hasta que no quede ninguno: \(\frac{12}{18}=\frac{12\div 6}{18\div 6}=\frac{2}{3}\).</p>`
        },
        {
          tipo: 'concepto', titulo: 'Comparar fracciones',
          html: String.raw`<p>Tres caminos, elige el que te acomode:</p>
<ul>
<li><strong>Mismo denominador:</strong> gana el numerador mayor. \(\frac{5}{8}>\frac{3}{8}\).</li>
<li><strong>Multiplicar en cruz:</strong> para comparar \(\frac{a}{b}\) y \(\frac{c}{d}\), compara \(a\cdot d\) con \(c\cdot b\). Si \(a\cdot d\) es mayor, la primera fracción es mayor.</li>
<li><strong>Pasar a decimal:</strong> dividir y comparar los decimales.</li>
</ul>`
        },
        {
          tipo: 'ejemplo', titulo: 'Simplificar y comparar',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>Simplificar \(\frac{36}{48}\): ambos se dividen por 12: \(\frac{3}{4}\). Si no ves el 12, divide por 2 varias veces: \(\frac{18}{24}\to\frac{9}{12}\to\) y luego por 3: \(\frac{3}{4}\).</div></div>
<div class="paso"><span class="paso-n">2</span><div>¿Cuál es mayor, \(\frac{5}{8}\) o \(\frac{2}{3}\)? En cruz: \(5\cdot 3=15\) y \(2\cdot 8=16\). Como \(15<16\), \(\frac{5}{8}<\frac{2}{3}\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>Comprobación con decimales: \(5\div 8=0{,}625\) y \(2\div 3=0{,}666\ldots\). Coincide.</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'En un turno',
          html: String.raw`<p>De un turno de 8 horas, 6 se dedicaron a producción y el resto a mantención. La fracción dedicada a producir es \(\frac{6}{8}=\frac{3}{4}\) del turno. En mantención se fue \(\frac{2}{8}=\frac{1}{4}\).</p>
<p>Fíjate que \(\frac{3}{4}+\frac{1}{4}=\frac{4}{4}=1\): el turno completo.</p>`
        },
        {
          tipo: 'tip', titulo: 'Para simplificar rápido',
          html: String.raw`<p>Prueba en este orden: si ambos números son pares, divide por 2. Si ambos terminan en 0 o 5, divide por 5. Si la suma de las cifras de cada uno es múltiplo de 3, divide por 3. Repite hasta que no se pueda más.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'texto', enunciado: String.raw`<p>Simplifica \(\dfrac{18}{24}\) al máximo. Escribe la respuesta como a/b.</p>`, respuesta: ['3/4'], compacto: true, placeholder: 'a/b', pista: 'Ambos son divisibles por 6.', solucion: String.raw`<p>\(\frac{18\div 6}{24\div 6}=\frac{3}{4}\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Simplifica \(\dfrac{40}{64}\) al máximo.</p>`, respuesta: ['5/8'], compacto: true, placeholder: 'a/b', pista: 'Divide por 2 varias veces, o por 8 de una vez.', solucion: String.raw`<p>\(\frac{40\div 8}{64\div 8}=\frac{5}{8}\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>¿Cuál es mayor?</p>`, opciones: [String.raw`\(\dfrac{3}{5}\)`, String.raw`\(\dfrac{5}{8}\)`, 'Son iguales'], correcta: 1, pista: 'Multiplica en cruz: 3·8 contra 5·5.', solucion: String.raw`<p>\(3\cdot 8=24\) y \(5\cdot 5=25\). Como \(24<25\), \(\frac{3}{5}<\frac{5}{8}\). En decimales: 0,6 contra 0,625.</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Escribe \(\dfrac{11}{4}\) como número mixto (por ejemplo, "1 3/4").</p>`, respuesta: ['2 3/4', '2 y 3/4', '2+3/4'], placeholder: 'entero fracción', pista: '¿Cuántas veces cabe 4 en 11 y cuánto sobra?', solucion: String.raw`<p>\(11\div 4=2\) y sobran 3, así que \(\frac{11}{4}=2\frac{3}{4}\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>¿Qué fracción de una hora son 45 minutos? Escríbela simplificada (como a/b).</p>`, respuesta: 0.75, placeholder: 'a/b', pista: 'Una hora tiene 60 minutos.', solucion: String.raw`<p>\(\frac{45}{60}=\frac{3}{4}\) de hora.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Un estanque de 20 litros tiene 12 litros. ¿Qué fracción está llena? Escríbela simplificada.</p>`, respuesta: 0.6, placeholder: 'a/b', pista: '12 de 20, y simplifica.', solucion: String.raw`<p>\(\frac{12}{20}=\frac{3}{5}\). Está llena en tres quintos.</p>` }
      ],
      cuaderno: [
        'Dibuja un rectángulo dividido en 8 partes iguales y pinta 6. Escribe la fracción y su forma simplificada.',
        'Escribe las tres formas de comparar fracciones con un ejemplo de cada una.',
        'Simplifica a mano: 18/24, 40/64, 45/75 y 100/250.',
        'Resuelve los ejercicios en el cuaderno antes de comprobarlos.'
      ],
      videos: [
        { titulo: 'Fracciones desde cero', q: 'profe alex fracciones desde cero' },
        { titulo: 'Simplificación de fracciones', q: 'julioprofe simplificacion de fracciones' }
      ],
      cierre: 'Una fracción es una división que todavía no hiciste. Y multiplicar arriba y abajo por lo mismo no la cambia.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '1.4',
      titulo: 'Fracciones II: operar con ellas',
      duracion: 60,
      objetivo: 'Sumar, restar, multiplicar y dividir fracciones, y calcular la fracción de una cantidad.',
      porque: 'En Álgebra I vas a sumar fracciones con letras usando exactamente estas reglas. Dominarlas con números hace que después sea rutina y no un obstáculo.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Sumar y restar',
          html: String.raw`<p>Solo se pueden sumar partes del <strong>mismo tamaño</strong>. Si los denominadores son iguales, suma los numeradores: \(\frac{2}{7}+\frac{3}{7}=\frac{5}{7}\).</p>
<p>Si son distintos, primero conviértelas a un denominador común (el mínimo común múltiplo es el más cómodo):</p>
<span class="formula">\(\dfrac{1}{4}+\dfrac{1}{6}=\dfrac{3}{12}+\dfrac{2}{12}=\dfrac{5}{12}\)</span>
<p>Si no encuentras el MCM, usa la fórmula directa, que siempre funciona (aunque luego haya que simplificar):</p>
<span class="formula">\(\dfrac{a}{b}+\dfrac{c}{d}=\dfrac{ad+bc}{bd}\)</span>`
        },
        {
          tipo: 'concepto', titulo: 'Multiplicar y dividir',
          html: String.raw`<p><strong>Multiplicar</strong> es lo más fácil: arriba con arriba, abajo con abajo. \(\frac{3}{4}\cdot\frac{2}{9}=\frac{6}{36}=\frac{1}{6}\). Si simplificas antes de multiplicar (cancelando en cruz) los números se mantienen chicos.</p>
<p><strong>Dividir</strong> es multiplicar por el inverso de la segunda fracción ("dar vuelta la segunda"):</p>
<span class="formula">\(\dfrac{a}{b}\div\dfrac{c}{d}=\dfrac{a}{b}\cdot\dfrac{d}{c}\)</span>
<p>\(\frac{3}{5}\div\frac{9}{10}=\frac{3}{5}\cdot\frac{10}{9}=\frac{30}{45}=\frac{2}{3}\).</p>`
        },
        {
          tipo: 'concepto', titulo: 'La fracción de una cantidad',
          html: String.raw`<p>"De" significa multiplicar. \(\frac{3}{4}\) de 200 es \(\frac{3}{4}\cdot 200=150\). En la práctica: divide por el denominador y multiplica por el numerador: \(200\div 4=50\), \(50\cdot 3=150\).</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Las cuatro operaciones, resueltas',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(\frac{2}{3}+\frac{1}{4}\): MCM de 3 y 4 es 12. \(\frac{8}{12}+\frac{3}{12}=\) <strong>\(\frac{11}{12}\)</strong>.</div></div>
<div class="paso"><span class="paso-n">2</span><div>\(\frac{5}{6}-\frac{1}{2}\): MCM es 6. \(\frac{5}{6}-\frac{3}{6}=\frac{2}{6}=\) <strong>\(\frac{1}{3}\)</strong>.</div></div>
<div class="paso"><span class="paso-n">3</span><div>\(\frac{3}{4}\cdot\frac{2}{9}\): \(\frac{6}{36}=\) <strong>\(\frac{1}{6}\)</strong>.</div></div>
<div class="paso"><span class="paso-n">4</span><div>\(\frac{3}{5}\div\frac{9}{10}=\frac{3}{5}\cdot\frac{10}{9}=\frac{30}{45}=\) <strong>\(\frac{2}{3}\)</strong>.</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'Dos máquinas',
          html: String.raw`<p>En un turno, la máquina A produce \(\frac{3}{4}\) de las piezas y la máquina B, \(\frac{1}{6}\). ¿Qué fracción falta por producir?</p>
<span class="formula">\(\dfrac{3}{4}+\dfrac{1}{6}=\dfrac{9}{12}+\dfrac{2}{12}=\dfrac{11}{12}\)</span>
<p>Falta \(1-\frac{11}{12}=\frac{1}{12}\) de la producción.</p>`
        },
        {
          tipo: 'error', titulo: 'Sumar denominadores',
          html: String.raw`<p>\(\frac{1}{2}+\frac{1}{3}\) <strong>no</strong> es \(\frac{2}{5}\). Piensa: media pizza más un tercio de pizza es claramente más que media pizza, y \(\frac{2}{5}\) es menos que la mitad. La respuesta correcta es \(\frac{3}{6}+\frac{2}{6}=\frac{5}{6}\).</p>
<p>Y al dividir, solo se invierte la <strong>segunda</strong> fracción.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(\dfrac{1}{2}+\dfrac{1}{3}\). Puedes responder como fracción (a/b) o decimal.</p>`, respuesta: 0.833333, placeholder: 'a/b', pista: 'Denominador común 6.', solucion: String.raw`<p>\(\frac{3}{6}+\frac{2}{6}=\frac{5}{6}\approx 0{,}83\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(\dfrac{3}{4}-\dfrac{1}{6}\).</p>`, respuesta: 0.583333, placeholder: 'a/b', pista: 'MCM de 4 y 6 es 12.', solucion: String.raw`<p>\(\frac{9}{12}-\frac{2}{12}=\frac{7}{12}\approx 0{,}58\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(\dfrac{2}{5}\cdot\dfrac{10}{3}\).</p>`, respuesta: 1.333333, placeholder: 'a/b', pista: 'Multiplica en línea y simplifica.', solucion: String.raw`<p>\(\frac{20}{15}=\frac{4}{3}\approx 1{,}33\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(\dfrac{3}{8}\div\dfrac{3}{4}\).</p>`, respuesta: 0.5, placeholder: 'a/b', pista: 'Multiplica por el inverso de 3/4.', solucion: String.raw`<p>\(\frac{3}{8}\cdot\frac{4}{3}=\frac{12}{24}=\frac{1}{2}\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(\dfrac{2}{3}\) de 360.</p>`, respuesta: 240, pista: 'Divide por 3 y multiplica por 2.', solucion: String.raw`<p>\(360\div 3=120\), \(120\cdot 2=240\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Un lote de 1.200 piezas: el lunes se envió \(\frac{1}{4}\) y el martes \(\frac{2}{5}\). ¿Cuántas piezas quedan?</p>`, respuesta: 420, unidad: 'piezas', pista: 'Calcula cada envío por separado y réstalos del total.', solucion: String.raw`<p>Lunes: \(1200\div 4=300\). Martes: \(1200\div 5\cdot 2=480\). Quedan \(1200-300-480=420\).</p>` }
      ],
      cuaderno: [
        'Escribe las cuatro reglas (sumar, restar, multiplicar, dividir) con un ejemplo resuelto de cada una.',
        'Resuelve 1/4 + 1/6 de dos formas: con MCM y con la fórmula (ad + bc)/bd. Comprueba que dan lo mismo.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Marca con un círculo el ejercicio que más te costó y escribe en una línea por qué.'
      ],
      videos: [
        { titulo: 'Suma y resta de fracciones con distinto denominador', q: 'julioprofe suma y resta de fracciones con distinto denominador' },
        { titulo: 'Multiplicación y división de fracciones', q: 'profe alex multiplicacion y division de fracciones' }
      ],
      cierre: 'Para sumar necesitas el mismo denominador; para multiplicar, no. Para dividir, multiplica por el inverso.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '1.5',
      titulo: 'Repaso y mini test de la semana 1',
      duracion: 60,
      tipo: 'test',
      objetivo: 'Comprobar que puedes operar con enteros y fracciones sin mirar las lecciones.',
      intro: String.raw`<p><strong>Antes del test, repasa 10 minutos</strong> con tu cuaderno cerrado y responde de memoria:</p>
<ul>
<li>¿Cuándo el resultado de una suma con signos es negativo?</li>
<li>¿En qué orden se resuelven las operaciones?</li>
<li>¿Qué se necesita para sumar dos fracciones? ¿Y para dividirlas?</li>
</ul>
<p>Luego resuelve las 10 preguntas en el cuaderno y marca las respuestas aquí. <strong>Meta: 8 de 10.</strong> Si sacas menos, repite las sesiones del área marcada antes de pasar a la semana 2.</p>`,
      ejercicios: [
        { tipo: 'num', area: 'Enteros y signos (1.1)', enunciado: String.raw`<p>\(-15+9\)</p>`, respuesta: -6, solucion: String.raw`<p>Signos distintos: \(15-9=6\), gana el negativo: \(-6\).</p>` },
        { tipo: 'num', area: 'Enteros y signos (1.1)', enunciado: String.raw`<p>\(-7-(-12)\)</p>`, respuesta: 5, solucion: String.raw`<p>\(-7+12=5\).</p>` },
        { tipo: 'num', area: 'Jerarquía de operaciones (1.2)', enunciado: String.raw`<p>\((-9)\cdot 4\)</p>`, respuesta: -36, solucion: String.raw`<p>Signos distintos: \(-36\).</p>` },
        { tipo: 'num', area: 'Jerarquía de operaciones (1.2)', enunciado: String.raw`<p>\(18-12\div 3\times 2\)</p>`, respuesta: 10, solucion: String.raw`<p>\(12\div 3=4\), \(4\times 2=8\), \(18-8=10\).</p>` },
        { tipo: 'num', area: 'Jerarquía de operaciones (1.2)', enunciado: String.raw`<p>\(3\times(8-5)^2\)</p>`, respuesta: 27, solucion: String.raw`<p>\(8-5=3\), \(3^2=9\), \(3\times 9=27\).</p>` },
        { tipo: 'texto', area: 'Fracciones: simplificar y comparar (1.3)', enunciado: String.raw`<p>Simplifica \(\dfrac{56}{72}\) al máximo (escribe a/b).</p>`, respuesta: ['7/9'], compacto: true, placeholder: 'a/b', solucion: String.raw`<p>Ambos se dividen por 8: \(\frac{7}{9}\).</p>` },
        { tipo: 'opcion', area: 'Fracciones: simplificar y comparar (1.3)', enunciado: String.raw`<p>¿Cuál es mayor?</p>`, opciones: [String.raw`\(\dfrac{7}{10}\)`, String.raw`\(\dfrac{2}{3}\)`, 'Son iguales'], correcta: 0, solucion: String.raw`<p>En cruz: \(7\cdot 3=21\) y \(2\cdot 10=20\). Como \(21>20\), \(\frac{7}{10}\) es mayor (0,7 contra 0,67).</p>` },
        { tipo: 'num', area: 'Fracciones: operar (1.4)', enunciado: String.raw`<p>\(\dfrac{5}{6}+\dfrac{1}{4}\) (fracción o decimal)</p>`, respuesta: 1.083333, placeholder: 'a/b', solucion: String.raw`<p>\(\frac{10}{12}+\frac{3}{12}=\frac{13}{12}\approx 1{,}08\).</p>` },
        { tipo: 'num', area: 'Fracciones: operar (1.4)', enunciado: String.raw`<p>\(\dfrac{4}{9}\div\dfrac{2}{3}\)</p>`, respuesta: 0.666667, placeholder: 'a/b', solucion: String.raw`<p>\(\frac{4}{9}\cdot\frac{3}{2}=\frac{12}{18}=\frac{2}{3}\).</p>` },
        { tipo: 'num', area: 'Fracciones: operar (1.4)', enunciado: String.raw`<p>\(\dfrac{3}{8}\) de 640</p>`, respuesta: 240, solucion: String.raw`<p>\(640\div 8=80\), \(80\cdot 3=240\).</p>` }
      ],
      cuaderno: [
        'Haz una hoja resumen de la semana 1: reglas de signos, jerarquía, cómo sumar y cómo dividir fracciones.',
        'Resuelve el test completo en el cuaderno antes de responder en pantalla.',
        'Anota tu puntaje y los números de las preguntas que fallaste.',
        'Si fallaste 3 o más, programa un repaso de la sesión correspondiente antes de empezar la semana 2.'
      ],
      videos: [
        { titulo: 'Repaso general de operaciones con enteros y fracciones', q: 'repaso operaciones con numeros enteros y fracciones ejercicios resueltos' }
      ],
      cierre: 'Un test no mide cuánto vales. Mide qué toca repasar.'
    }
  ]
});
