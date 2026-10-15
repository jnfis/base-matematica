/* Semana 3 · Potencias, raíces y el lenguaje del álgebra */
CURSO.semana({
  n: 3,
  bloque: 'A',
  titulo: 'Potencias, raíces y el lenguaje del álgebra',
  subtitulo: 'Exponentes, raíces, notación científica y cómo traducir frases a expresiones con letras.',
  meta: 'Aquí los números empiezan a volverse letras. Las reglas de potencias se usan en todo el cálculo y la física; el lenguaje algebraico es la puerta de Álgebra I. Si esta semana queda clara, las tres siguientes fluyen.',
  resumen: [
    { t: 'Producto de potencias (misma base)', f: String.raw`a^m\cdot a^n=a^{m+n}` },
    { t: 'Cociente de potencias', f: String.raw`\frac{a^m}{a^n}=a^{m-n}` },
    { t: 'Potencia de una potencia', f: String.raw`(a^m)^n=a^{m\cdot n}` },
    { t: 'Potencia de un producto', f: String.raw`(ab)^n=a^n b^n` },
    { t: 'Exponente cero y negativo', f: String.raw`a^0=1,\qquad a^{-n}=\frac{1}{a^n}` },
    { t: 'Raíz como exponente fraccionario', f: String.raw`\sqrt[n]{a}=a^{1/n},\qquad \sqrt[n]{a^m}=a^{m/n}` },
    { t: 'Raíz de un producto', f: String.raw`\sqrt{ab}=\sqrt{a}\cdot\sqrt{b}` },
    { t: 'Notación científica', f: String.raw`a\times 10^n,\quad 1\le a<10` },
    { t: 'Propiedad distributiva', f: String.raw`a(b+c)=ab+ac` }
  ],
  sesiones: [
    /* ------------------------------------------------------------------ */
    {
      id: '3.1',
      titulo: 'Potencias y sus reglas',
      duracion: 60,
      objetivo: 'Calcular potencias con base y exponente enteros y aplicar las reglas básicas con seguridad.',
      porque: 'Interés compuesto, crecimiento, áreas y volúmenes, fórmulas de física: todo usa potencias. En Cálculo Diferencial vas a derivar potencias durante todo el semestre.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Qué es una potencia',
          html: String.raw`<p>\(2^4\) es "2 multiplicado por sí mismo 4 veces": \(2\cdot 2\cdot 2\cdot 2=16\). El 2 es la <strong>base</strong> y el 4 el <strong>exponente</strong>.</p>
<p>Con base negativa, cuenta los signos: \((-2)^3=(-2)(-2)(-2)=-8\) y \((-2)^4=16\). Exponente par, resultado positivo; impar, conserva el signo.</p>
<p>Cuidado con \(-2^4\): sin paréntesis, la potencia va primero y el signo después: \(-16\).</p>`
        },
        {
          tipo: 'concepto', titulo: 'Las reglas',
          html: String.raw`<table class="mini-tabla">
<tr><th>Regla</th><th>Fórmula</th><th>Ejemplo</th></tr>
<tr><td>Producto, misma base</td><td>\(a^m\cdot a^n=a^{m+n}\)</td><td>\(2^3\cdot 2^4=2^7=128\)</td></tr>
<tr><td>Cociente, misma base</td><td>\(\dfrac{a^m}{a^n}=a^{m-n}\)</td><td>\(\dfrac{5^6}{5^4}=5^2=25\)</td></tr>
<tr><td>Potencia de potencia</td><td>\((a^m)^n=a^{mn}\)</td><td>\((3^2)^3=3^6=729\)</td></tr>
<tr><td>Potencia de un producto</td><td>\((ab)^n=a^nb^n\)</td><td>\((2x)^3=8x^3\)</td></tr>
<tr><td>Exponente cero</td><td>\(a^0=1\)</td><td>\(7^0=1\)</td></tr>
<tr><td>Exponente negativo</td><td>\(a^{-n}=\dfrac{1}{a^n}\)</td><td>\(2^{-3}=\dfrac{1}{8}\)</td></tr>
</table>
<p>Todas salen de la definición. Por ejemplo, \(2^3\cdot 2^4\) es \((2\cdot 2\cdot 2)(2\cdot 2\cdot 2\cdot 2)\): siete doses multiplicados.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Aplicando las reglas',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(10^5\cdot 10^2=10^7\) (se suman exponentes).</div></div>
<div class="paso"><span class="paso-n">2</span><div>\(\dfrac{x^8}{x^5}=x^3\) (se restan).</div></div>
<div class="paso"><span class="paso-n">3</span><div>\((2^3)^2=2^6=64\) (se multiplican).</div></div>
<div class="paso"><span class="paso-n">4</span><div>\(5^{-2}=\dfrac{1}{25}=0{,}04\) (negativo: pasa al denominador).</div></div>
<div class="paso"><span class="paso-n">5</span><div>\(\dfrac{3^4}{3^4}=3^0=1\) (cualquier cosa dividida por sí misma es 1).</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'Duplicación',
          html: String.raw`<p>Algo que se duplica cada hora (un cultivo, un rumor, un capital con interés altísimo) crece como potencia de 2. Tras 10 horas, se multiplicó por \(2^{10}=1024\): más de mil veces. Tras 20 horas, por \(2^{20}\), más de un millón.</p>
<p>Ese crecimiento "explosivo" es el exponencial, y lo vas a estudiar en la semana 8.</p>`
        },
        {
          tipo: 'error', titulo: 'Tres errores que se repiten',
          html: String.raw`<p>\(2^3\cdot 2^4\) no es \(2^{12}\) ni \(4^7\): se suman exponentes y la base no cambia.</p>
<p>\(2^3\cdot 5^2\) no se puede juntar en una sola potencia: las bases son distintas. Calcula cada una: \(8\cdot 25=200\).</p>
<p>\((a+b)^2\) no es \(a^2+b^2\). Prueba con \(a=b=1\): \((1+1)^2=4\), pero \(1+1=2\). Esto lo verás en la semana 5.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(3^4\).</p>`, respuesta: 81, pista: '3·3·3·3.', solucion: String.raw`<p>\(3\cdot 3=9\), \(9\cdot 3=27\), \(27\cdot 3=81\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \((-3)^3\).</p>`, respuesta: -27, pista: 'Exponente impar: conserva el signo.', solucion: String.raw`<p>\((-3)(-3)=9\), \(9\cdot(-3)=-27\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>\(2^5\cdot 2^3\) es igual a:</p>`, opciones: [String.raw`\(2^{15}\)`, String.raw`\(2^8\)`, String.raw`\(4^8\)`], correcta: 1, pista: 'Misma base, multiplicando: suma exponentes.', solucion: String.raw`<p>\(2^{5+3}=2^8=256\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(10^7\div 10^4\).</p>`, respuesta: 1000, pista: 'Resta exponentes.', solucion: String.raw`<p>\(10^{7-4}=10^3=1000\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(5^{-2}\) (como decimal).</p>`, respuesta: 0.04, tol: 0.001, pista: 'Es 1 dividido por 5².', solucion: String.raw`<p>\(5^{-2}=\frac{1}{25}=0{,}04\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \((2^2)^3\).</p>`, respuesta: 64, pista: 'Multiplica los exponentes.', solucion: String.raw`<p>\(2^{6}=64\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(-2^4\).</p>`, respuesta: -16, pista: 'Sin paréntesis, primero la potencia.', solucion: String.raw`<p>\(-(2^4)=-16\).</p>` }
      ],
      cuaderno: [
        'Copia la tabla de las seis reglas con un ejemplo numérico propio para cada una.',
        'Calcula a mano 2¹, 2², 2³ … hasta 2¹⁰ y repásalos hasta sabértelos: los vas a usar siempre.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Escribe la diferencia entre (−2)⁴ y −2⁴, con el resultado de cada uno.'
      ],
      videos: [
        { titulo: 'Leyes de los exponentes', q: 'julioprofe leyes de los exponentes' },
        { titulo: 'Potencias desde cero', q: 'profe alex potencias desde cero' }
      ],
      cierre: 'Misma base y multiplicando: suma exponentes. Misma base y dividiendo: resta. Potencia de potencia: multiplica.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '3.2',
      titulo: 'Raíces, exponentes fraccionarios y notación científica',
      duracion: 60,
      objetivo: 'Calcular raíces cuadradas y cúbicas, entenderlas como potencias y usar la notación científica.',
      porque: 'La raíz aparece en Pitágoras, en la desviación estándar de Estadística y en la fórmula de la ecuación cuadrática. La notación científica es el idioma de la física y de las calculadoras.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'La raíz deshace la potencia',
          html: String.raw`<p>\(\sqrt{49}=7\) porque \(7^2=49\). \(\sqrt[3]{27}=3\) porque \(3^3=27\). La raíz pregunta: "¿qué número elevado a esto da aquello?"</p>
<p>La raíz cuadrada de un negativo no existe entre los números reales (ningún número al cuadrado da negativo). La cúbica sí: \(\sqrt[3]{-8}=-2\).</p>
<p>Si no es exacta, estima entre dos cuadrados conocidos: \(\sqrt{40}\) está entre \(\sqrt{36}=6\) y \(\sqrt{49}=7\), más cerca de 6 (vale 6,32).</p>`
        },
        {
          tipo: 'concepto', titulo: 'Raíz = exponente fraccionario',
          html: String.raw`<span class="formula">\(\sqrt{a}=a^{1/2}\qquad \sqrt[3]{a}=a^{1/3}\qquad \sqrt[n]{a^m}=a^{m/n}\)</span>
<p>Tiene sentido: \(a^{1/2}\cdot a^{1/2}=a^{1}=a\), así que \(a^{1/2}\) es "el número que multiplicado por sí mismo da \(a\)". Con esto, todas las reglas de potencias valen para raíces.</p>
<p>\(8^{2/3}=(\sqrt[3]{8})^2=2^2=4\). Primero la raíz (número chico), luego la potencia.</p>
<p>Propiedades útiles: \(\sqrt{ab}=\sqrt{a}\sqrt{b}\) y \(\sqrt{\frac{a}{b}}=\frac{\sqrt a}{\sqrt b}\). Sirven para simplificar: \(\sqrt{50}=\sqrt{25\cdot 2}=5\sqrt{2}\).</p>`
        },
        {
          tipo: 'concepto', titulo: 'Notación científica',
          html: String.raw`<p>Para números muy grandes o muy chicos se escribe \(a\times 10^n\) con \(1\le a<10\):</p>
<p>\(345000=3{,}45\times 10^5\) (la coma se corrió 5 lugares a la izquierda). \(0{,}0021=2{,}1\times 10^{-3}\) (se corrió 3 lugares a la derecha).</p>
<p>Para multiplicar: multiplica los números y suma los exponentes. \((2\times 10^3)(3\times 10^4)=6\times 10^7\).</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Raíces y potencias fraccionarias',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(\sqrt{144}=12\), porque \(12^2=144\).</div></div>
<div class="paso"><span class="paso-n">2</span><div>\(\sqrt[3]{125}=5\), porque \(5^3=125\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>\(16^{3/4}=(\sqrt[4]{16})^3=2^3=8\).</div></div>
<div class="paso"><span class="paso-n">4</span><div>\(\sqrt{72}=\sqrt{36\cdot 2}=6\sqrt{2}\approx 8{,}49\).</div></div>
<div class="paso"><span class="paso-n">5</span><div>\((4\times 10^5)(2\times 10^{-2})=8\times 10^3=8000\).</div></div>`
        },
        {
          tipo: 'error', titulo: 'La raíz no se reparte en sumas',
          html: String.raw`<p>\(\sqrt{9+16}=\sqrt{25}=5\). No es \(\sqrt 9+\sqrt{16}=3+4=7\). La raíz se reparte en productos y cocientes, nunca en sumas o restas. Mismo caso que \((a+b)^2\).</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(\sqrt{169}\).</p>`, respuesta: 13, pista: '¿Qué número al cuadrado da 169?', solucion: String.raw`<p>\(13^2=169\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(\sqrt[3]{64}\).</p>`, respuesta: 4, pista: '¿Qué número al cubo da 64?', solucion: String.raw`<p>\(4^3=64\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Calcula \(27^{2/3}\).</p>`, respuesta: 9, pista: 'Primero la raíz cúbica, luego el cuadrado.', solucion: String.raw`<p>\(\sqrt[3]{27}=3\), y \(3^2=9\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>\(\sqrt{a\cdot b}\) es igual a:</p>`, opciones: [String.raw`\(\sqrt a+\sqrt b\)`, String.raw`\(\sqrt a\cdot\sqrt b\)`, String.raw`\(a\cdot b\)`], correcta: 1, pista: 'La raíz se reparte en productos.', solucion: String.raw`<p>\(\sqrt{ab}=\sqrt a\sqrt b\). Comprueba con \(\sqrt{4\cdot 9}=\sqrt{36}=6=2\cdot 3\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Escribe \(0{,}00052\) en notación científica. ¿Cuál es el exponente de 10?</p>`, respuesta: -4, pista: 'Cuenta cuántos lugares corres la coma hasta dejar 5,2.', solucion: String.raw`<p>\(0{,}00052=5{,}2\times 10^{-4}\). El exponente es \(-4\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\((4\times 10^5)\cdot(2\times 10^3)=8\times 10^{n}\). ¿Cuánto vale \(n\)?</p>`, respuesta: 8, pista: 'Suma los exponentes.', solucion: String.raw`<p>\(4\cdot 2=8\) y \(10^{5+3}=10^8\). Así que \(n=8\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Estima \(\sqrt{50}\) con dos decimales.</p>`, respuesta: 7.07, tol: 0.01, pista: 'Está entre 7 y 8, muy cerca de 7.', solucion: String.raw`<p>\(7^2=49\), así que \(\sqrt{50}\) es apenas más que 7: \(7{,}07\).</p>` }
      ],
      cuaderno: [
        'Escribe la lista de cuadrados perfectos de 1² a 15² y los cubos de 1³ a 5³.',
        'Explica con tus palabras por qué a^(1/2) es la raíz cuadrada (pista: multiplícalo por sí mismo).',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Escribe cinco números de tu entorno en notación científica (la población de Chile, tu sueldo anual, el grosor de una hoja, etc.).'
      ],
      videos: [
        { titulo: 'Exponentes fraccionarios y radicales', q: 'julioprofe exponentes fraccionarios y radicales' },
        { titulo: 'Notación científica', q: 'profe alex notacion cientifica' }
      ],
      cierre: 'Una raíz es una potencia con exponente fraccionario. Si lo ves así, todas las reglas de potencias te sirven.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '3.3',
      titulo: 'El lenguaje algebraico',
      duracion: 60,
      objetivo: 'Traducir frases a expresiones con variables, identificar sus partes y evaluarlas.',
      porque: 'Un modelo matemático es una frase traducida a símbolos: "el costo es 500 fijo más 20 por unidad" es C = 500 + 20q. Formular problemas, que es el corazón de Investigación de Operaciones, empieza con esta traducción.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Variables, términos y coeficientes',
          html: String.raw`<p>Una <strong>variable</strong> es una letra que representa un número desconocido o que puede cambiar. Una <strong>expresión</strong> combina números y letras con operaciones: \(3x^2-5x+7\).</p>
<p>Sus partes: cada sumando es un <strong>término</strong> (\(3x^2\), \(-5x\), \(7\)); el número que multiplica a la letra es el <strong>coeficiente</strong> (3, \(-5\)); el término sin letra es el <strong>término independiente</strong> (7); el mayor exponente es el <strong>grado</strong> (2).</p>
<p>Convenciones: \(2\cdot x\) se escribe \(2x\); \(x\cdot x\) es \(x^2\); \(1x\) es simplemente \(x\).</p>`
        },
        {
          tipo: 'concepto', titulo: 'Diccionario español → álgebra',
          html: String.raw`<table class="mini-tabla">
<tr><th>Frase</th><th>Expresión</th></tr>
<tr><td>el doble de un número</td><td>\(2x\)</td></tr>
<tr><td>la mitad de un número</td><td>\(\dfrac{x}{2}\)</td></tr>
<tr><td>un número aumentado en 5</td><td>\(x+5\)</td></tr>
<tr><td>un número disminuido en 3</td><td>\(x-3\)</td></tr>
<tr><td>el cuadrado de la suma de dos números</td><td>\((x+y)^2\)</td></tr>
<tr><td>la suma de los cuadrados de dos números</td><td>\(x^2+y^2\)</td></tr>
<tr><td>el 15 % de un precio</td><td>\(0{,}15p\)</td></tr>
<tr><td>tres números consecutivos</td><td>\(n,\ n+1,\ n+2\)</td></tr>
</table>
<p>Las palabras "de" y "del" suelen indicar multiplicación; "más que" y "aumentado" suma; "menos que" y "disminuido" resta.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Valor numérico',
          html: String.raw`<p>Evaluar una expresión es reemplazar cada letra por un número y calcular respetando la jerarquía. Para \(x=-2\):</p>
<span class="formula">\(3x^2-5x+7=3(-2)^2-5(-2)+7=3\cdot 4+10+7=29\)</span>
<p>Usa paréntesis al reemplazar un negativo. Es la forma más segura de no perder un signo.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Modelos de una línea',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>Costo de producir \(q\) piezas con un costo fijo de $120.000 y $350 por pieza: \(C=120000+350q\). Para \(q=400\): \(120000+140000=\) <strong>$260.000</strong>.</div></div>
<div class="paso"><span class="paso-n">2</span><div>Ingreso por vender \(q\) unidades a precio \(p\): \(I=p\cdot q\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>Sueldo con base \(B\) y comisión del 3 % de las ventas \(V\): \(S=B+0{,}03V\).</div></div>
<div class="paso"><span class="paso-n">4</span><div>Perímetro de un rectángulo de lados \(a\) y \(b\): \(P=2a+2b\).</div></div>`
        },
        {
          tipo: 'error', titulo: 'El paréntesis que las palabras esconden',
          html: String.raw`<p>"El doble de un número, más 5" es \(2x+5\). "El doble de un número más 5" (sin coma, pensando en la suma completa) es \(2(x+5)\). Cuando traduzcas, pregúntate qué se duplica: solo el número o toda la suma. Si hay duda, el contexto decide.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'opcion', enunciado: String.raw`<p>"El triple de un número, disminuido en 4" se escribe:</p>`, opciones: [String.raw`\(3(x-4)\)`, String.raw`\(3x-4\)`, String.raw`\(3-4x\)`], correcta: 1, pista: 'Primero se triplica el número; después se le quita 4.', solucion: String.raw`<p>El triple es \(3x\); disminuido en 4 es \(3x-4\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Evalúa \(2x^2-3x+1\) para \(x=3\).</p>`, respuesta: 10, pista: 'Reemplaza y respeta la jerarquía.', solucion: String.raw`<p>\(2\cdot 9-9+1=18-9+1=10\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Evalúa \(5a-2b\) para \(a=-1\) y \(b=4\).</p>`, respuesta: -13, pista: 'Usa paréntesis al reemplazar el negativo.', solucion: String.raw`<p>\(5(-1)-2(4)=-5-8=-13\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Un taller tiene costos fijos de $80.000 y cada unidad cuesta $1.200. El costo total \(C\) de producir \(q\) unidades es:</p>`, opciones: [String.raw`\(C=80000q+1200\)`, String.raw`\(C=80000+1200q\)`, String.raw`\(C=(80000+1200)q\)`], correcta: 1, pista: 'Lo fijo no depende de q; lo variable se multiplica por q.', solucion: String.raw`<p>Fijo más variable por unidad: \(C=80000+1200q\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>En \(4x^3-7x+2\), ¿cuál es el coeficiente de \(x\)?</p>`, respuesta: -7, pista: 'Incluye el signo.', solucion: String.raw`<p>El término es \(-7x\), así que el coeficiente es \(-7\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Con \(C=80000+1200q\), calcula el costo de producir 150 unidades.</p>`, respuesta: 260000, unidad: '$', pista: 'Reemplaza q por 150.', solucion: String.raw`<p>\(80000+1200\cdot 150=80000+180000=260000\).</p>` }
      ],
      cuaderno: [
        'Arma tu diccionario español → álgebra con al menos 12 frases (doble, mitad, cuadrado, consecutivo, aumentado, disminuido, porcentaje, etc.).',
        'Escribe tres situaciones de tu trabajo o tu casa como expresiones con letras (por ejemplo, el sueldo con comisión o la cuenta de la luz).',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Para 4x³ − 7x + 2, identifica por escrito los términos, los coeficientes y el grado.'
      ],
      videos: [
        { titulo: 'Lenguaje algebraico', q: 'profe alex lenguaje algebraico expresiones' },
        { titulo: 'Valor numérico de una expresión algebraica', q: 'julioprofe valor numerico de una expresion algebraica' }
      ],
      cierre: 'El álgebra es español comprimido. Si puedes decirlo, puedes escribirlo con letras.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '3.4',
      titulo: 'Reducir expresiones: términos semejantes y distributiva',
      duracion: 60,
      objetivo: 'Sumar términos semejantes, eliminar paréntesis con la propiedad distributiva y multiplicar un monomio por un polinomio.',
      porque: 'Simplificar antes de resolver es la mitad del trabajo en toda ecuación. En cálculo, antes de derivar casi siempre tendrás que reducir una expresión.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Términos semejantes',
          html: String.raw`<p>Dos términos son <strong>semejantes</strong> si tienen exactamente la misma parte literal: mismas letras con los mismos exponentes. \(3x\) y \(-5x\) sí; \(3x\) y \(3x^2\) no; \(2a^2b\) y \(-a^2b\) sí.</p>
<p>Los semejantes se juntan sumando sus coeficientes: \(3x-5x+7x=5x\). Los que no son semejantes se dejan como están: \(3x+2x^2\) no se puede reducir más.</p>
<p>Piénsalo como unidades: 3 manzanas más 5 manzanas son 8 manzanas, pero 3 manzanas más 2 peras siguen siendo 3 manzanas y 2 peras.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Propiedad distributiva',
          html: String.raw`<span class="formula">\(a(b+c)=ab+ac\)</span>
<p>El número de afuera multiplica a <strong>cada</strong> término de adentro: \(3(2x-4)=6x-12\).</p>
<p>Con un signo negativo delante, todos los signos de adentro cambian: \(-(b-c)=-b+c\) y \(-2(x-5)=-2x+10\).</p>`
        },
        {
          tipo: 'concepto', titulo: 'Monomio por polinomio',
          html: String.raw`<p>Es la distributiva con letras: multiplica coeficientes y suma exponentes de la misma letra.</p>
<span class="formula">\(2x(3x^2-x+4)=6x^3-2x^2+8x\)</span>`
        },
        {
          tipo: 'ejemplo', titulo: 'Reducir paso a paso',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(4x+3-2x+9\): junta las \(x\) (\(4x-2x=2x\)) y los números (\(3+9=12\)): <strong>\(2x+12\)</strong>.</div></div>
<div class="paso"><span class="paso-n">2</span><div>\(5(x-2)-3(x+1)\): distribuye: \(5x-10-3x-3\). Reduce: <strong>\(2x-13\)</strong>.</div></div>
<div class="paso"><span class="paso-n">3</span><div>\(3a^2b-5ab+a^2b\): los dos \(a^2b\) se juntan: <strong>\(4a^2b-5ab\)</strong>.</div></div>
<div class="paso"><span class="paso-n">4</span><div>\(x-(2x-7)\): el menos cambia los signos: \(x-2x+7=\) <strong>\(-x+7\)</strong>.</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'Sumar los costos de dos máquinas',
          html: String.raw`<p>La máquina A cuesta \(500+20q\) por turno y la B, \(300+25q\). El costo total de las dos es:</p>
<span class="formula">\((500+20q)+(300+25q)=800+45q\)</span>
<p>Reducir es lo que convierte dos fórmulas en una sola que se puede evaluar rápido.</p>`
        },
        {
          tipo: 'error', titulo: 'El signo menos antes del paréntesis',
          html: String.raw`<p>\(-(x-3)=-x+3\), no \(-x-3\). El menos multiplica a los dos términos. Y \(3x+2x^2\) no es \(5x^3\): no son semejantes y no se multiplican, se suman.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'texto', enunciado: String.raw`<p>Reduce \(7x-3x+5x\).</p>`, respuesta: ['9x'], compacto: true, placeholder: 'por ejemplo: 4x', pista: 'Suma los coeficientes: 7 − 3 + 5.', solucion: String.raw`<p>\((7-3+5)x=9x\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Reduce \(4a+2b-a+3b\).</p>`, respuesta: ['3a+5b', '5b+3a'], compacto: true, placeholder: 'por ejemplo: 2a+3b', pista: 'Junta las a por un lado y las b por otro.', solucion: String.raw`<p>\(4a-a=3a\) y \(2b+3b=5b\): \(3a+5b\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Desarrolla \(3(2x-5)\).</p>`, respuesta: ['6x-15', '-15+6x'], compacto: true, placeholder: 'por ejemplo: 4x-8', pista: 'Multiplica el 3 por cada término.', solucion: String.raw`<p>\(3\cdot 2x-3\cdot 5=6x-15\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Desarrolla \(-2(x-4)\).</p>`, respuesta: ['-2x+8', '8-2x'], compacto: true, placeholder: 'por ejemplo: -3x+6', pista: 'Menos por menos da más.', solucion: String.raw`<p>\(-2\cdot x-2\cdot(-4)=-2x+8\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Reduce \(5(x-2)-3(x+1)\).</p>`, respuesta: ['2x-13', '-13+2x'], compacto: true, placeholder: 'por ejemplo: 4x-9', pista: 'Distribuye los dos paréntesis y luego junta.', solucion: String.raw`<p>\(5x-10-3x-3=2x-13\).</p>` },
        { tipo: 'texto', enunciado: String.raw`<p>Multiplica \(2x(3x^2-x+4)\). Escribe los exponentes con ^ (por ejemplo, x^2).</p>`, respuesta: ['6x^3-2x^2+8x'], compacto: true, placeholder: 'por ejemplo: 2x^3+4x', pista: 'Multiplica coeficientes y suma exponentes término a término.', solucion: String.raw`<p>\(2x\cdot 3x^2=6x^3\), \(2x\cdot(-x)=-2x^2\), \(2x\cdot 4=8x\). Resultado: \(6x^3-2x^2+8x\).</p>` }
      ],
      cuaderno: [
        'Escribe la regla de los términos semejantes y da tres pares que sí lo sean y tres que no.',
        'Desarrolla −(x − 3) y −2(x − 5) paso a paso, mostrando cómo cambia cada signo.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Inventa dos máquinas con costos "fijo + variable·q", suma sus costos y reduce.'
      ],
      videos: [
        { titulo: 'Reducción de términos semejantes', q: 'julioprofe reduccion de terminos semejantes' },
        { titulo: 'Propiedad distributiva con signos', q: 'profe alex propiedad distributiva con signos' }
      ],
      cierre: 'Solo se juntan los términos con exactamente la misma parte literal. El menos delante de un paréntesis cambia todos los signos de adentro.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '3.5',
      titulo: 'Repaso y mini test de la semana 3',
      duracion: 60,
      tipo: 'test',
      objetivo: 'Cerrar el bloque de números: potencias, raíces, notación científica y primeras expresiones con letras.',
      intro: String.raw`<p><strong>Repasa 10 minutos</strong> con el cuaderno cerrado:</p>
<ul>
<li>¿Qué pasa con los exponentes al multiplicar, al dividir y al elevar una potencia a otra?</li>
<li>¿Qué significa un exponente negativo? ¿Y uno fraccionario?</li>
<li>¿Qué términos se pueden juntar y cuáles no?</li>
</ul>
<p>Luego resuelve las 10 preguntas en el cuaderno y marca aquí. <strong>Meta: 8 de 10.</strong> Con esto cierras el Bloque A.</p>`,
      ejercicios: [
        { tipo: 'num', area: 'Potencias (3.1)', enunciado: String.raw`<p>\(2^6\)</p>`, respuesta: 64, solucion: String.raw`<p>\(2^6=64\).</p>` },
        { tipo: 'opcion', area: 'Potencias (3.1)', enunciado: String.raw`<p>\(3^4\cdot 3^2\) es igual a:</p>`, opciones: [String.raw`\(3^8\)`, String.raw`\(3^6\)`, String.raw`\(9^6\)`], correcta: 1, solucion: String.raw`<p>Misma base, se suman exponentes: \(3^6=729\).</p>` },
        { tipo: 'num', area: 'Potencias (3.1)', enunciado: String.raw`<p>\(4^{-1}\) como decimal.</p>`, respuesta: 0.25, tol: 0.001, solucion: String.raw`<p>\(4^{-1}=\frac{1}{4}=0{,}25\).</p>` },
        { tipo: 'num', area: 'Raíces (3.2)', enunciado: String.raw`<p>\(\sqrt{225}\)</p>`, respuesta: 15, solucion: String.raw`<p>\(15^2=225\).</p>` },
        { tipo: 'num', area: 'Raíces (3.2)', enunciado: String.raw`<p>\(8^{2/3}\)</p>`, respuesta: 4, solucion: String.raw`<p>\(\sqrt[3]{8}=2\), \(2^2=4\).</p>` },
        { tipo: 'num', area: 'Notación científica (3.2)', enunciado: String.raw`<p>Escribe \(6{,}2\times 10^4\) como número normal.</p>`, respuesta: 62000, solucion: String.raw`<p>Corre la coma 4 lugares a la derecha: \(62000\).</p>` },
        { tipo: 'opcion', area: 'Lenguaje algebraico (3.3)', enunciado: String.raw`<p>"La mitad de un número, más 6" se escribe:</p>`, opciones: [String.raw`\(\dfrac{x}{2}+6\)`, String.raw`\(\dfrac{x+6}{2}\)`, String.raw`\(\dfrac{x}{2+6}\)`], correcta: 0, solucion: String.raw`<p>Primero la mitad del número, \(\frac{x}{2}\), y a eso se le suma 6.</p>` },
        { tipo: 'num', area: 'Lenguaje algebraico (3.3)', enunciado: String.raw`<p>Evalúa \(x^2-4x+3\) en \(x=-1\).</p>`, respuesta: 8, solucion: String.raw`<p>\((-1)^2-4(-1)+3=1+4+3=8\).</p>` },
        { tipo: 'texto', area: 'Reducir expresiones (3.4)', enunciado: String.raw`<p>Reduce \(8y-3-5y+10\).</p>`, respuesta: ['3y+7', '7+3y'], compacto: true, placeholder: 'por ejemplo: 2y+5', solucion: String.raw`<p>\(8y-5y=3y\) y \(-3+10=7\): \(3y+7\).</p>` },
        { tipo: 'texto', area: 'Reducir expresiones (3.4)', enunciado: String.raw`<p>Desarrolla y reduce \(4(2x-3)-(x+2)\).</p>`, respuesta: ['7x-14', '-14+7x'], compacto: true, placeholder: 'por ejemplo: 3x-5', solucion: String.raw`<p>\(8x-12-x-2=7x-14\).</p>` }
      ],
      cuaderno: [
        'Haz la hoja resumen de la semana 3: reglas de potencias, raíz como exponente fraccionario, notación científica, distributiva.',
        'Resuelve el test completo en el cuaderno antes de responder en pantalla.',
        'Anota tu puntaje y las preguntas falladas.',
        'Escribe en media página qué aprendiste en el Bloque A y qué todavía te cuesta. Lo vas a releer en la semana 6.'
      ],
      videos: [
        { titulo: 'Ejercicios resueltos de leyes de exponentes', q: 'ejercicios resueltos leyes de los exponentes' }
      ],
      cierre: 'Fin del Bloque A. Ya puedes operar con números y leer expresiones con letras. Ahora toca resolverlas.'
    }
  ]
});
