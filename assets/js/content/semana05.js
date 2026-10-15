/* Semana 5 · Productos notables y factorización */
CURSO.semana({
  n: 5,
  bloque: 'B',
  titulo: 'Productos notables y factorización',
  subtitulo: 'Multiplicar polinomios, los tres productos notables, factorizar y simplificar fracciones algebraicas.',
  meta: 'Factorizar es desarmar una expresión en sus factores. Es la herramienta con la que se resuelven ecuaciones cuadráticas, se simplifican fracciones con letras y, en cálculo, se calculan límites. Álgebra I vive de esto.',
  resumen: [
    { t: 'Cuadrado de una suma', f: String.raw`(a+b)^2=a^2+2ab+b^2` },
    { t: 'Cuadrado de una diferencia', f: String.raw`(a-b)^2=a^2-2ab+b^2` },
    { t: 'Suma por diferencia', f: String.raw`(a+b)(a-b)=a^2-b^2` },
    { t: 'Factor común', f: String.raw`ab+ac=a(b+c)` },
    { t: 'Trinomio cuadrado perfecto', f: String.raw`a^2+2ab+b^2=(a+b)^2` },
    { t: 'Trinomio x² + bx + c', f: String.raw`x^2+bx+c=(x+p)(x+q),\quad p+q=b,\ \ p\cdot q=c` },
    { t: 'Simplificar fracción algebraica', f: String.raw`\frac{a\cdot k}{b\cdot k}=\frac{a}{b}\quad (k\neq 0)` }
  ],
  sesiones: [
    /* ------------------------------------------------------------------ */
    {
      id: '5.1',
      titulo: 'Multiplicar polinomios y productos notables',
      duracion: 60,
      objetivo: 'Multiplicar binomios término a término y reconocer los tres productos notables.',
      porque: 'Los productos notables son atajos que vas a ver una y otra vez: en cuadráticas, en derivadas, en física. Reconocerlos de un vistazo ahorra minutos en cada prueba.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Binomio por binomio',
          html: String.raw`<p>Cada término del primero multiplica a cada término del segundo. Son cuatro productos, y luego se reducen los semejantes:</p>
<span class="formula">\((x+3)(x+5)=x\cdot x+x\cdot 5+3\cdot x+3\cdot 5=x^2+5x+3x+15=x^2+8x+15\)</span>
<p>Es la distributiva aplicada dos veces. Si tienes dudas, dibuja flechas desde cada término del primer paréntesis hacia los dos del segundo.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Los tres productos notables',
          html: String.raw`<span class="formula">\((a+b)^2=a^2+2ab+b^2\qquad (a-b)^2=a^2-2ab+b^2\qquad (a+b)(a-b)=a^2-b^2\)</span>
<p>Salen de multiplicar término a término, pero se usan tanto que conviene reconocerlos. Para \((a+b)^2\) piensa en un cuadrado de lado \(a+b\): se parte en un cuadrado \(a^2\), un cuadrado \(b^2\) y dos rectángulos \(ab\).</p>
<p>\((x+4)^2=x^2+8x+16\); \((2x-3)^2=4x^2-12x+9\); \((x+5)(x-5)=x^2-25\).</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Reconocer y aplicar',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\((x-2)(x+7)\): cuatro productos, \(x^2+7x-2x-14=\) <strong>\(x^2+5x-14\)</strong>.</div></div>
<div class="paso"><span class="paso-n">2</span><div>\((3x+1)^2\): cuadrado de suma con \(a=3x\), \(b=1\): \(9x^2+6x+1\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>\((2a-5b)(2a+5b)\): suma por diferencia: \(4a^2-25b^2\).</div></div>
<div class="paso"><span class="paso-n">4</span><div>Cálculo mental: \(31^2=(30+1)^2=900+60+1=961\); \(29\cdot 31=(30-1)(30+1)=900-1=899\).</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'Ampliar una bodega',
          html: String.raw`<p>Una bodega cuadrada de lado \(x\) metros se amplía 3 metros por lado. La nueva área es:</p>
<span class="formula">\((x+3)^2=x^2+6x+9\)</span>
<p>El área original (\(x^2\)) más dos franjas de \(3x\) más una esquina de 9 m². Si la bodega medía 10 m de lado, pasa de 100 m² a \(100+60+9=169\) m².</p>`
        },
        {
          tipo: 'error', titulo: 'El término del medio',
          html: String.raw`<p>\((a+b)^2\) <strong>no</strong> es \(a^2+b^2\). Falta el doble producto \(2ab\). Con \(a=b=1\): \((1+1)^2=4\), mientras que \(1^2+1^2=2\). Este es, probablemente, el error más común de todo el álgebra.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'texto', enunciado: String.raw`<p>Desarrolla \((x+2)(x+6)\). Escribe los exponentes con ^ (por ejemplo, x^2).</p>`, respuesta: ['x^2+8x+12'], compacto: true, placeholder: 'x^2+...', pista: 'Cuatro productos y reduce.', solucion: String.raw`<p>\(x^2+6x+2x+12=x^2+8x+12\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Desarrolla \((x+5)^2\).</p>`, respuesta: ['x^2+10x+25'], compacto: true, placeholder: 'x^2+...', pista: 'a² + 2ab + b² con a = x, b = 5.', solucion: String.raw`<p>\(x^2+2\cdot 5x+25=x^2+10x+25\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Desarrolla \((x-3)^2\).</p>`, respuesta: ['x^2-6x+9'], compacto: true, placeholder: 'x^2-...', pista: 'El término del medio es negativo; el último, positivo.', solucion: String.raw`<p>\(x^2-6x+9\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Desarrolla \((x+7)(x-7)\).</p>`, respuesta: ['x^2-49'], compacto: true, placeholder: 'x^2-...', pista: 'Suma por diferencia.', solucion: String.raw`<p>\(x^2-49\). Los términos \(-7x\) y \(+7x\) se cancelan.</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Desarrolla \((2x+1)^2\).</p>`, respuesta: ['4x^2+4x+1'], compacto: true, placeholder: '4x^2+...', pista: 'a = 2x: su cuadrado es 4x².', solucion: String.raw`<p>\((2x)^2+2\cdot 2x\cdot 1+1=4x^2+4x+1\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(41^2\) mentalmente usando \((40+1)^2\).</p>`, respuesta: 1681, pista: '1600 + 2·40·1 + 1.', solucion: String.raw`<p>\(1600+80+1=1681\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>\((a-b)^2\) es igual a:</p>`, opciones: [String.raw`\(a^2-b^2\)`, String.raw`\(a^2-2ab+b^2\)`, String.raw`\(a^2+b^2\)`], correcta: 1, pista: 'Tres términos, el del medio negativo.', solucion: String.raw`<p>\((a-b)^2=a^2-2ab+b^2\). La opción \(a^2-b^2\) es el resultado de \((a+b)(a-b)\), otro producto.</p>` }
      ],
      cuaderno: [
        'Escribe los tres productos notables y dibuja el cuadrado de lado a + b dividido en cuatro regiones para justificar el primero.',
        'Desarrolla (x + 3)(x + 5) marcando los cuatro productos con flechas.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Calcula mentalmente 21², 19·21 y 52² usando productos notables; anota el proceso.'
      ],
      videos: [
        { titulo: 'Productos notables', q: 'julioprofe productos notables' },
        { titulo: 'Multiplicación de polinomios', q: 'profe alex multiplicacion de polinomios' }
      ],
      cierre: '(a + b)² tiene tres términos, no dos. El del medio, 2ab, es el que todos olvidan.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '5.2',
      titulo: 'Factorizar I: factor común y diferencia de cuadrados',
      duracion: 60,
      objetivo: 'Extraer factor común y reconocer la diferencia de cuadrados y el trinomio cuadrado perfecto.',
      porque: 'Factorizar es el camino inverso de multiplicar. Permite resolver ecuaciones (si un producto es cero, uno de los factores es cero), simplificar y encontrar dónde una función vale cero.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Qué es factorizar',
          html: String.raw`<p>Factorizar es escribir una expresión como <strong>producto</strong>. Así como \(6=2\cdot 3\), también \(x^2+5x=x(x+5)\). Para comprobar, multiplica de vuelta: \(x\cdot x+x\cdot 5=x^2+5x\).</p>
<p>¿Para qué? Porque un producto igual a cero es fácil de analizar: si \(x(x+5)=0\), entonces \(x=0\) o \(x+5=0\). Eso resuelve ecuaciones que de otra forma no sabrías atacar.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Factor común',
          html: String.raw`<p>Busca el mayor factor que aparece en <strong>todos</strong> los términos: el mayor número que divide a todos los coeficientes y cada letra con su menor exponente.</p>
<span class="formula">\(6x^2+9x=3x(2x+3)\qquad 4a^3b-8a^2b^2=4a^2b(a-2b)\)</span>
<p>Lo que queda dentro del paréntesis es cada término dividido por el factor común. Comprueba multiplicando.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Diferencia de cuadrados y trinomio cuadrado perfecto',
          html: String.raw`<p>Los productos notables leídos al revés:</p>
<span class="formula">\(a^2-b^2=(a+b)(a-b)\qquad a^2+2ab+b^2=(a+b)^2\qquad a^2-2ab+b^2=(a-b)^2\)</span>
<p>\(x^2-16=(x+4)(x-4)\); \(9y^2-25=(3y+5)(3y-5)\); \(x^2+10x+25=(x+5)^2\).</p>
<p>Para reconocer un trinomio cuadrado perfecto: el primero y el último son cuadrados, y el del medio es el doble del producto de sus raíces (\(2\cdot x\cdot 5=10x\)).</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Factorizar en dos pasos',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(5x^2-20\): factor común 5: \(5(x^2-4)\). Lo de adentro es diferencia de cuadrados: <strong>\(5(x+2)(x-2)\)</strong>.</div></div>
<div class="paso"><span class="paso-n">2</span><div>\(2x^3-8x\): factor común \(2x\): \(2x(x^2-4)=\) <strong>\(2x(x+2)(x-2)\)</strong>.</div></div>
<div class="paso"><span class="paso-n">3</span><div>\(x^2-12x+36\): \(x^2\) y \(36=6^2\), y \(2\cdot x\cdot 6=12x\). Es <strong>\((x-6)^2\)</strong>.</div></div>
<p>Regla práctica: <strong>siempre</strong> busca factor común primero; luego mira si lo que queda es un producto notable.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Dónde el ingreso es cero',
          html: String.raw`<p>El ingreso de vender \(q\) unidades a un precio que baja con la cantidad es \(I=100q-2q^2\). Factorizando:</p>
<span class="formula">\(I=2q(50-q)\)</span>
<p>El ingreso es cero cuando \(q=0\) (no vendes nada) o cuando \(q=50\) (el precio cayó a cero). Entre medio, el ingreso es positivo. Con la factorización lo ves sin calcular nada.</p>`
        },
        {
          tipo: 'error', titulo: 'Dos descuidos',
          html: String.raw`<p>Al sacar factor común de \(3x+3\), queda \(3(x+1)\), no \(3(x)\): el 3 dividido por 3 deja un 1 que no desaparece.</p>
<p>\(a^2+b^2\) (suma de cuadrados) <strong>no</strong> se factoriza con números reales. Solo la diferencia tiene fórmula.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'texto', enunciado: String.raw`<p>Factoriza \(4x+12\).</p>`, respuesta: ['4(x+3)'], compacto: true, placeholder: 'por ejemplo: 2(x+5)', pista: '¿Qué número divide a 4 y a 12?', solucion: String.raw`<p>\(4(x+3)\). Comprobación: \(4x+12\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Factoriza \(6x^2-9x\).</p>`, respuesta: ['3x(2x-3)'], compacto: true, placeholder: 'por ejemplo: 2x(x-4)', pista: 'Factor común 3x.', solucion: String.raw`<p>\(3x(2x-3)\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Factoriza \(x^2-25\).</p>`, respuesta: ['(x+5)(x-5)', '(x-5)(x+5)'], compacto: true, placeholder: '(x+a)(x-a)', pista: 'Diferencia de cuadrados.', solucion: String.raw`<p>\((x+5)(x-5)\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Factoriza \(x^2+14x+49\).</p>`, respuesta: ['(x+7)^2', '(x+7)(x+7)'], compacto: true, placeholder: '(x+a)^2', pista: '49 = 7² y 2·7 = 14.', solucion: String.raw`<p>Trinomio cuadrado perfecto: \((x+7)^2\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Factoriza completamente \(3x^2-27\).</p>`, respuesta: ['3(x+3)(x-3)', '3(x-3)(x+3)'], compacto: true, placeholder: '3(...)(...)', pista: 'Factor común primero, después diferencia de cuadrados.', solucion: String.raw`<p>\(3(x^2-9)=3(x+3)(x-3)\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>¿Cuál de estas expresiones <strong>no</strong> se puede factorizar con números reales?</p>`, opciones: [String.raw`\(x^2-9\)`, String.raw`\(x^2+9\)`, String.raw`\(x^2-6x+9\)`], correcta: 1, pista: 'Suma de cuadrados.', solucion: String.raw`<p>\(x^2-9=(x+3)(x-3)\) y \(x^2-6x+9=(x-3)^2\). La suma \(x^2+9\) no tiene factorización real.</p>` }
      ],
      cuaderno: [
        'Escribe las tres técnicas (factor común, diferencia de cuadrados, trinomio cuadrado perfecto) con un ejemplo y su comprobación por multiplicación.',
        'Factoriza 2x³ − 8x paso a paso: primero el factor común, después lo que quede.',
        'Resuelve los ejercicios a mano antes de comprobarlos y comprueba cada uno multiplicando de vuelta.',
        'Explica con una frase por qué factorizar sirve para resolver ecuaciones (pista: producto igual a cero).'
      ],
      videos: [
        { titulo: 'Factor común', q: 'julioprofe factor comun' },
        { titulo: 'Diferencia de cuadrados', q: 'profe alex factorizacion diferencia de cuadrados' }
      ],
      cierre: 'Factorizar es multiplicar al revés. Si tienes dudas, multiplica de vuelta y mira si llegas a lo mismo.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '5.3',
      titulo: 'Factorizar II: trinomios',
      duracion: 60,
      objetivo: 'Factorizar trinomios de la forma x² + bx + c y, con una técnica sencilla, ax² + bx + c.',
      porque: 'Las ecuaciones cuadráticas, los ceros de las parábolas y muchos límites en cálculo se resuelven factorizando un trinomio. Es la técnica estrella de Álgebra I.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'x² + bx + c: buscar dos números',
          html: String.raw`<p>Como \((x+p)(x+q)=x^2+(p+q)x+pq\), para factorizar \(x^2+bx+c\) necesitas dos números que <strong>multiplicados den \(c\)</strong> y <strong>sumados den \(b\)</strong>.</p>
<span class="formula">\(x^2+7x+12\): \(3\cdot 4=12\) y \(3+4=7\), así que \(=(x+3)(x+4)\)</span>
<p>Pista para los signos: si \(c\) es positivo, los dos números tienen el signo de \(b\). Si \(c\) es negativo, tienen signos distintos y el de mayor valor absoluto lleva el signo de \(b\).</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Los cuatro casos de signos',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(x^2+5x+6\): \(2\cdot 3=6\), \(2+3=5\): \((x+2)(x+3)\).</div></div>
<div class="paso"><span class="paso-n">2</span><div>\(x^2-7x+10\): \((-2)(-5)=10\), \(-2-5=-7\): \((x-2)(x-5)\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>\(x^2+2x-15\): \(5\cdot(-3)=-15\), \(5-3=2\): \((x+5)(x-3)\).</div></div>
<div class="paso"><span class="paso-n">4</span><div>\(x^2-x-12\): \((-4)\cdot 3=-12\), \(-4+3=-1\): \((x-4)(x+3)\).</div></div>`
        },
        {
          tipo: 'concepto', titulo: 'ax² + bx + c, cuando a no es 1',
          html: String.raw`<p>Busca dos números que multiplicados den \(a\cdot c\) y sumados den \(b\). Con ellos separa el término del medio y factoriza por grupos.</p>
<p>\(2x^2+7x+3\): \(a\cdot c=6\); los números son 6 y 1 (\(6\cdot 1=6\), \(6+1=7\)).</p>
<span class="formula">\(2x^2+6x+x+3=2x(x+3)+1(x+3)=(2x+1)(x+3)\)</span>
<p>Comprobación: \((2x+1)(x+3)=2x^2+6x+x+3\). Correcto.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Cuándo el beneficio es cero',
          html: String.raw`<p>El beneficio de una línea de producción es \(B=q^2-30q+200\) (en miles de pesos). Factorizando: \((-10)(-20)=200\) y \(-10-20=-30\):</p>
<span class="formula">\(B=(q-10)(q-20)\)</span>
<p>El beneficio se anula en \(q=10\) y \(q=20\). Entre esos valores es negativo (pérdida) y fuera, positivo. En la semana 7 vas a dibujar esta parábola.</p>`
        },
        {
          tipo: 'tip', titulo: 'Si no encuentras los números',
          html: String.raw`<p>Lista los pares de factores de \(c\) de forma ordenada (1 y 12, 2 y 6, 3 y 4) y prueba las sumas. Si ninguno funciona, el trinomio no se factoriza con enteros: en la semana 6 verás la fórmula general, que resuelve cualquier caso. Y comprueba siempre multiplicando.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'texto', enunciado: String.raw`<p>Factoriza \(x^2+8x+15\).</p>`, respuesta: ['(x+3)(x+5)', '(x+5)(x+3)'], compacto: true, placeholder: '(x+a)(x+b)', pista: 'Dos números que multiplicados den 15 y sumados 8.', solucion: String.raw`<p>3 y 5: \((x+3)(x+5)\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Factoriza \(x^2-9x+20\).</p>`, respuesta: ['(x-4)(x-5)', '(x-5)(x-4)'], compacto: true, placeholder: '(x-a)(x-b)', pista: 'c positivo y b negativo: ambos números negativos.', solucion: String.raw`<p>\(-4\) y \(-5\): \((x-4)(x-5)\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Factoriza \(x^2+3x-10\).</p>`, respuesta: ['(x+5)(x-2)', '(x-2)(x+5)'], compacto: true, placeholder: '(x+a)(x-b)', pista: 'Signos distintos; el mayor es positivo.', solucion: String.raw`<p>5 y \(-2\): \((x+5)(x-2)\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Factoriza \(x^2-2x-24\).</p>`, respuesta: ['(x-6)(x+4)', '(x+4)(x-6)'], compacto: true, placeholder: '(x-a)(x+b)', pista: 'Signos distintos; el mayor es negativo.', solucion: String.raw`<p>\(-6\) y 4: \((x-6)(x+4)\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Para factorizar \(x^2-5x-14\) necesitas dos números que:</p>`, opciones: [String.raw`sumen \(-5\) y multiplicados den \(-14\)`, String.raw`sumen \(-14\) y multiplicados den \(-5\)`, String.raw`sumen \(5\) y multiplicados den \(14\)`], correcta: 0, pista: 'Suma = b, producto = c.', solucion: String.raw`<p>Son \(-7\) y 2: \((x-7)(x+2)\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Factoriza \(2x^2+5x+3\).</p>`, respuesta: ['(2x+3)(x+1)', '(x+1)(2x+3)'], compacto: true, placeholder: '(2x+a)(x+b)', pista: 'a·c = 6; busca dos números que multiplicados den 6 y sumados 5.', solucion: String.raw`<p>2 y 3: \(2x^2+2x+3x+3=2x(x+1)+3(x+1)=(2x+3)(x+1)\).</p>` }
      ],
      cuaderno: [
        'Escribe la regla de los dos números (producto c, suma b) y la tabla de signos.',
        'Factoriza x² − x − 12 listando todos los pares de factores de −12 hasta encontrar el que suma −1.',
        'Resuelve los ejercicios a mano antes de comprobarlos y comprueba multiplicando.',
        'Anota un trinomio que no se pueda factorizar con enteros (por ejemplo x² + x + 1) y escribe por qué.'
      ],
      videos: [
        { titulo: 'Factorización de trinomios de la forma x² + bx + c', q: 'julioprofe factorizacion de trinomios de la forma x2+bx+c' },
        { titulo: 'Factorización de trinomios ax² + bx + c', q: 'profe alex factorizacion trinomio ax2+bx+c' }
      ],
      cierre: 'Dos números: que multiplicados den c y sumados den b. Esa frase resuelve la mayoría de los trinomios.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '5.4',
      titulo: 'Fracciones algebraicas',
      duracion: 60,
      objetivo: 'Simplificar, multiplicar y sumar fracciones con letras, y reconocer los valores que anulan el denominador.',
      porque: 'En cálculo, casi todo límite y toda derivada de un cociente pasa por simplificar una fracción algebraica. Y la idea de dominio (dónde una expresión existe) nace aquí.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Qué es y cuándo existe',
          html: String.raw`<p>Una fracción algebraica es un cociente de polinomios, como \(\dfrac{x^2-4}{x-2}\). Tiene una condición: el denominador no puede ser cero. Aquí, \(x\neq 2\). A esa condición se le llama <strong>restricción</strong>, y al conjunto de valores permitidos, dominio.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Simplificar: factorizar y cancelar factores',
          html: String.raw`<span class="formula">\(\dfrac{x^2-4}{x-2}=\dfrac{(x+2)(x-2)}{x-2}=x+2\qquad (x\neq 2)\)</span>
<p>Se cancelan <strong>factores</strong> (cosas que multiplican a todo el numerador y a todo el denominador), igual que con \(\frac{12}{18}\). Otro: \(\dfrac{x^2+5x}{x^2-25}=\dfrac{x(x+5)}{(x+5)(x-5)}=\dfrac{x}{x-5}\).</p>`
        },
        {
          tipo: 'concepto', titulo: 'Operar',
          html: String.raw`<p>Multiplicar y dividir: igual que con números, factorizando primero y cancelando en cruz. Sumar y restar: denominador común.</p>
<span class="formula">\(\dfrac{1}{x}+\dfrac{1}{2x}=\dfrac{2}{2x}+\dfrac{1}{2x}=\dfrac{3}{2x}\qquad\quad \dfrac{2}{x+1}+\dfrac{3}{x}=\dfrac{2x+3(x+1)}{x(x+1)}=\dfrac{5x+3}{x(x+1)}\)</span>`
        },
        {
          tipo: 'ejemplo', titulo: 'Simplificar en varios pasos',
          html: String.raw`<p>\(\dfrac{3x^2-12}{6x+12}\). Factor común arriba y abajo: \(\dfrac{3(x^2-4)}{6(x+2)}\). Diferencia de cuadrados: \(\dfrac{3(x+2)(x-2)}{6(x+2)}\). Cancela \((x+2)\) y simplifica \(\frac{3}{6}\):</p>
<span class="formula">\(=\dfrac{x-2}{2}\qquad (x\neq -2)\)</span>`
        },
        {
          tipo: 'ejemplo', titulo: 'El costo medio',
          html: String.raw`<p>Si el costo total es \(C(q)=80000+1200q\), el costo por unidad (costo medio) es:</p>
<span class="formula">\(\dfrac{C(q)}{q}=\dfrac{80000+1200q}{q}=\dfrac{80000}{q}+1200\)</span>
<p>Con 10 unidades es $9.200 cada una; con 1.000, $1.280. Mientras más produces, el costo medio baja y se acerca a $1.200 sin llegar nunca. Eso es un límite, y lo verás en la semana 11.</p>`
        },
        {
          tipo: 'error', titulo: 'Cancelar términos',
          html: String.raw`<p>En \(\dfrac{x+3}{x+5}\) <strong>no</strong> se cancela la \(x\). La \(x\) está sumada, no multiplicando a todo. Prueba con \(x=1\): \(\frac{4}{6}\), que no es \(\frac{3}{5}\). Solo se cancelan factores.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>¿Qué valor de \(x\) <strong>no</strong> está permitido en \(\dfrac{x+1}{x-3}\)?</p>`, respuesta: 3, pista: 'El que hace cero el denominador.', solucion: String.raw`<p>\(x-3=0\) cuando \(x=3\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Simplifica \(\dfrac{x^2-9}{x+3}\).</p>`, respuesta: ['x-3'], compacto: true, placeholder: 'x-...', pista: 'Factoriza el numerador como diferencia de cuadrados.', solucion: String.raw`<p>\(\frac{(x+3)(x-3)}{x+3}=x-3\), con \(x\neq -3\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Simplifica \(\dfrac{4x^2+8x}{4x}\).</p>`, respuesta: ['x+2'], compacto: true, placeholder: 'x+...', pista: 'Factor común 4x arriba.', solucion: String.raw`<p>\(\frac{4x(x+2)}{4x}=x+2\), con \(x\neq 0\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Simplifica \(\dfrac{x^2+7x+12}{x+4}\).</p>`, respuesta: ['x+3'], compacto: true, placeholder: 'x+...', pista: 'Factoriza el trinomio.', solucion: String.raw`<p>\(\frac{(x+3)(x+4)}{x+4}=x+3\), con \(x\neq -4\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>\(\dfrac{x+2}{x+4}\) se puede simplificar a:</p>`, opciones: [String.raw`\(\dfrac{1}{2}\)`, String.raw`\(\dfrac{x}{2}\)`, 'No se puede simplificar'], correcta: 2, pista: '¿Hay algún factor común a todo el numerador y a todo el denominador?', solucion: String.raw`<p>No hay factores comunes: \(x+2\) y \(x+4\) son sumas, no productos. Se queda como está.</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Calcula \(\dfrac{1}{x}+\dfrac{1}{2x}\). Escribe la respuesta como a/(bx), por ejemplo 5/(3x).</p>`, respuesta: ['3/(2x)', '3/2x'], compacto: true, placeholder: 'a/(bx)', pista: 'Denominador común 2x.', solucion: String.raw`<p>\(\frac{2}{2x}+\frac{1}{2x}=\frac{3}{2x}\).</p>` }
      ],
      cuaderno: [
        'Escribe la regla de oro: solo se cancelan factores, nunca términos. Da un ejemplo correcto y uno incorrecto.',
        'Simplifica (3x² − 12)/(6x + 12) paso a paso, con la restricción anotada.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Calcula el costo medio de C(q) = 80.000 + 1.200q para q = 10, 100 y 1.000 y escribe qué observas.'
      ],
      videos: [
        { titulo: 'Simplificación de fracciones algebraicas', q: 'julioprofe simplificacion de fracciones algebraicas' },
        { titulo: 'Suma y resta de fracciones algebraicas', q: 'profe alex suma y resta de fracciones algebraicas' }
      ],
      cierre: 'Factoriza, cancela factores, anota qué valores quedan prohibidos. En ese orden.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '5.5',
      titulo: 'Repaso y mini test de la semana 5',
      duracion: 60,
      tipo: 'test',
      objetivo: 'Comprobar que desarrollas productos notables, factorizas y simplificas fracciones algebraicas.',
      intro: String.raw`<p><strong>Repasa 10 minutos</strong> con el cuaderno cerrado:</p>
<ul>
<li>Escribe de memoria los tres productos notables.</li>
<li>¿Qué buscas primero al factorizar cualquier expresión?</li>
<li>¿Qué dos números necesitas para factorizar x² + bx + c?</li>
<li>¿Qué se puede cancelar en una fracción y qué no?</li>
</ul>
<p>Luego resuelve las 10 preguntas en el cuaderno y marca aquí. <strong>Meta: 8 de 10.</strong> Escribe los exponentes con ^ (x^2).</p>`,
      ejercicios: [
        { tipo: 'texto', area: 'Productos notables (5.1)', enunciado: String.raw`<p>Desarrolla \((x+4)(x-2)\).</p>`, respuesta: ['x^2+2x-8'], compacto: true, placeholder: 'x^2+...', solucion: String.raw`<p>\(x^2-2x+4x-8=x^2+2x-8\).</p>` },
        { tipo: 'texto', area: 'Productos notables (5.1)', enunciado: String.raw`<p>Desarrolla \((x-6)^2\).</p>`, respuesta: ['x^2-12x+36'], compacto: true, placeholder: 'x^2-...', solucion: String.raw`<p>\(x^2-12x+36\).</p>` },
        { tipo: 'texto', area: 'Productos notables (5.1)', enunciado: String.raw`<p>Desarrolla \((3x+2)(3x-2)\).</p>`, respuesta: ['9x^2-4'], compacto: true, placeholder: '9x^2-...', solucion: String.raw`<p>Suma por diferencia: \(9x^2-4\).</p>` },
        { tipo: 'opcion', area: 'Productos notables (5.1)', enunciado: String.raw`<p>\((a+b)^2\) es igual a:</p>`, opciones: [String.raw`\(a^2+b^2\)`, String.raw`\(a^2+2ab+b^2\)`, String.raw`\(a^2+ab+b^2\)`], correcta: 1, solucion: String.raw`<p>\(a^2+2ab+b^2\).</p>` },
        { tipo: 'texto', area: 'Factor común y diferencia de cuadrados (5.2)', enunciado: String.raw`<p>Factoriza \(5x^2-10x\).</p>`, respuesta: ['5x(x-2)'], compacto: true, placeholder: '5x(...)', solucion: String.raw`<p>\(5x(x-2)\).</p>` },
        { tipo: 'texto', area: 'Factor común y diferencia de cuadrados (5.2)', enunciado: String.raw`<p>Factoriza \(x^2-36\).</p>`, respuesta: ['(x+6)(x-6)', '(x-6)(x+6)'], compacto: true, placeholder: '(x+a)(x-a)', solucion: String.raw`<p>\((x+6)(x-6)\).</p>` },
        { tipo: 'texto', area: 'Trinomios (5.3)', enunciado: String.raw`<p>Factoriza \(x^2+9x+18\).</p>`, respuesta: ['(x+3)(x+6)', '(x+6)(x+3)'], compacto: true, placeholder: '(x+a)(x+b)', solucion: String.raw`<p>3 y 6: \((x+3)(x+6)\).</p>` },
        { tipo: 'texto', area: 'Trinomios (5.3)', enunciado: String.raw`<p>Factoriza \(x^2-4x-21\).</p>`, respuesta: ['(x-7)(x+3)', '(x+3)(x-7)'], compacto: true, placeholder: '(x-a)(x+b)', solucion: String.raw`<p>\(-7\) y 3: \((x-7)(x+3)\).</p>` },
        { tipo: 'texto', area: 'Fracciones algebraicas (5.4)', enunciado: String.raw`<p>Simplifica \(\dfrac{x^2-16}{x-4}\).</p>`, respuesta: ['x+4'], compacto: true, placeholder: 'x+...', solucion: String.raw`<p>\(\frac{(x+4)(x-4)}{x-4}=x+4\).</p>` },
        { tipo: 'num', area: 'Fracciones algebraicas (5.4)', enunciado: String.raw`<p>¿Qué valor de \(x\) anula el denominador de \(\dfrac{5}{2x-8}\)?</p>`, respuesta: 4, solucion: String.raw`<p>\(2x-8=0\) cuando \(x=4\).</p>` }
      ],
      cuaderno: [
        'Haz la hoja resumen de la semana 5: tres productos notables, técnicas de factorización en orden, regla de cancelar factores.',
        'Resuelve el test completo en el cuaderno antes de responder en pantalla.',
        'Anota tu puntaje y las preguntas falladas.',
        'Si fallaste 3 o más, repite la sesión correspondiente antes de la semana 6.'
      ],
      videos: [
        { titulo: 'Ejercicios resueltos de factorización', q: 'ejercicios resueltos de factorizacion casos' }
      ],
      cierre: 'Multiplicar y factorizar son el mismo camino en direcciones opuestas. Ya sabes recorrerlo en las dos.'
    }
  ]
});
