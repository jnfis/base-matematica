/* Semana 4 · Ecuaciones: despejar la incógnita */
CURSO.semana({
  n: 4,
  bloque: 'B',
  titulo: 'Ecuaciones: despejar la incógnita',
  subtitulo: 'Ecuaciones de primer grado, con paréntesis y fracciones, problemas de planteo y despeje de fórmulas.',
  meta: 'Resolver una ecuación es el gesto básico de toda la ingeniería: tienes una relación y quieres el valor que falta. Lo harás miles de veces: en física para despejar una velocidad, en economía para encontrar un precio de equilibrio, en operaciones para decidir cuántas unidades producir.',
  resumen: [
    { t: 'Principio de equivalencia', f: String.raw`a=b\ \Rightarrow\ a+c=b+c,\quad a\cdot c=b\cdot c\ (c\neq 0)` },
    { t: 'Orden para resolver', f: String.raw`\text{paréntesis}\to\text{fracciones}\to\text{agrupar}\to\text{dividir}` },
    { t: 'Eliminar denominadores', f: String.raw`\text{multiplica toda la ecuación por el MCM}` },
    { t: 'Verificar', f: String.raw`\text{reemplaza la solución en la ecuación original}` },
    { t: 'Operaciones inversas', f: String.raw`+\leftrightarrow-,\quad \times\leftrightarrow\div,\quad x^2\leftrightarrow\sqrt{\ }` },
    { t: 'Despeje típico', f: String.raw`v=\frac{d}{t}\ \Rightarrow\ t=\frac{d}{v},\quad d=v\cdot t` }
  ],
  sesiones: [
    /* ------------------------------------------------------------------ */
    {
      id: '4.1',
      titulo: 'Ecuaciones de primer grado',
      duracion: 60,
      objetivo: 'Resolver ecuaciones lineales aplicando el principio de equivalencia y verificar la solución.',
      porque: 'Es la operación más repetida de toda la carrera. Y lo bueno: una vez entendido el principio, no hay nada más que memorizar.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Qué es resolver una ecuación',
          html: String.raw`<p>Una ecuación es una igualdad con un valor desconocido: \(3x+5=20\). Resolverla es encontrar el número que la hace verdadera. Aquí, \(x=5\), porque \(3\cdot 5+5=20\).</p>
<p>Imagina una <strong>balanza</strong> equilibrada. Si quitas 5 de un platillo, debes quitar 5 del otro para que siga equilibrada. Esa es toda la idea:</p>
<span class="formula">\(\text{Lo que hagas a un lado de la igualdad, hazlo también al otro.}\)</span>`
        },
        {
          tipo: 'concepto', titulo: 'Los pasos',
          html: String.raw`<ol>
<li>Deja los términos con \(x\) a un lado y los números al otro, sumando o restando lo mismo a ambos lados.</li>
<li>Reduce términos semejantes en cada lado.</li>
<li>Divide ambos lados por el coeficiente de \(x\).</li>
<li>Verifica reemplazando en la ecuación original.</li>
</ol>
<p>El famoso "pasar al otro lado cambiando el signo" es un atajo de "restar a ambos lados". Funciona, pero entiende por qué: así nunca te equivocas con las fórmulas más complicadas.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Cuatro ecuaciones resueltas',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(3x+5=20\). Resto 5: \(3x=15\). Divido por 3: \(x=5\). Verifico: \(3\cdot 5+5=20\). Correcto.</div></div>
<div class="paso"><span class="paso-n">2</span><div>\(5x-4=2x+11\). Resto \(2x\): \(3x-4=11\). Sumo 4: \(3x=15\). \(x=5\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>\(7-2x=1\). Resto 7: \(-2x=-6\). Divido por \(-2\): \(x=3\).</div></div>
<div class="paso"><span class="paso-n">4</span><div>\(4x=0\). Divido por 4: \(x=0\). Cero también es una solución válida.</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'El IVA al revés',
          html: String.raw`<p>Un equipo cuesta $214.200 con IVA. ¿Cuál es su valor neto? Si \(x\) es el neto, con 19 % de IVA se cumple:</p>
<span class="formula">\(1{,}19x=214200\ \Rightarrow\ x=\dfrac{214200}{1{,}19}=180000\)</span>
<p>Es lo mismo que hiciste en la semana 2, pero ahora lo ves como ecuación. Esa es la gracia: lo que ya sabes se vuelve un caso particular de algo más general.</p>`
        },
        {
          tipo: 'error', titulo: 'Tres descuidos frecuentes',
          html: String.raw`<p>Mover un término sin cambiarle el signo: de \(x+4=9\) sale \(x=9-4\), no \(x=9+4\).</p>
<p>Dividir un solo lado: en \(3x=15\), el 3 divide a <strong>los dos</strong> lados.</p>
<p>No verificar. Reemplazar la solución tarda 10 segundos y detecta casi todos los errores.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Resuelve \(2x+7=19\).</p>`, respuesta: 6, pista: 'Resta 7 a ambos lados y luego divide por 2.', solucion: String.raw`<p>\(2x=12\), \(x=6\). Verificación: \(2\cdot 6+7=19\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Resuelve \(5x-3=2x+12\).</p>`, respuesta: 5, pista: 'Junta las x a un lado restando 2x.', solucion: String.raw`<p>\(3x-3=12\), \(3x=15\), \(x=5\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Resuelve \(9-4x=1\).</p>`, respuesta: 2, pista: 'Resta 9 y luego divide por −4.', solucion: String.raw`<p>\(-4x=-8\), \(x=2\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Resuelve \(6x+4=4x-10\).</p>`, respuesta: -7, pista: 'La solución es negativa; no te asustes.', solucion: String.raw`<p>\(2x+4=-10\), \(2x=-14\), \(x=-7\). Verificación: \(6(-7)+4=-38\) y \(4(-7)-10=-38\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>¿Cuál es el primer paso más conveniente para resolver \(4x-9=3\)?</p>`, opciones: ['Dividir ambos lados por 4', 'Sumar 9 a ambos lados', 'Restar 3 a ambos lados'], correcta: 1, pista: 'Primero aísla el término con x.', solucion: String.raw`<p>Sumando 9 queda \(4x=12\), y recién ahí conviene dividir por 4: \(x=3\). Dividir primero también funciona, pero deja fracciones.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Un producto cuesta $35.700 con IVA incluido (19 %). Plantea \(1{,}19x=35700\) y calcula el valor neto.</p>`, respuesta: 30000, unidad: '$', pista: 'Divide ambos lados por 1,19.', solucion: String.raw`<p>\(x=35700\div 1{,}19=30000\).</p>` }
      ],
      cuaderno: [
        'Escribe el principio de equivalencia junto a un dibujo de la balanza.',
        'Resuelve 5x − 4 = 2x + 11 mostrando cada paso en una línea nueva, y verifica al final.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Escribe una ecuación de tu vida (por ejemplo, cuántos meses necesitas para juntar cierta plata ahorrando x al mes) y resuélvela.'
      ],
      videos: [
        { titulo: 'Ecuaciones de primer grado', q: 'julioprofe ecuaciones de primer grado' },
        { titulo: 'Ecuaciones lineales desde cero', q: 'profe alex ecuaciones de primer grado desde cero' }
      ],
      cierre: 'Una ecuación es una balanza. Lo que hagas a un lado, hazlo al otro, y la igualdad se mantiene.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '4.2',
      titulo: 'Ecuaciones con paréntesis, fracciones y decimales',
      duracion: 60,
      objetivo: 'Resolver ecuaciones que primero hay que limpiar: desarrollar paréntesis, eliminar denominadores y manejar decimales.',
      porque: 'Las ecuaciones reales casi nunca vienen limpias. Las fórmulas de física y de costos traen fracciones y paréntesis, y hay que saber qué hacer primero.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Primero limpiar, después resolver',
          html: String.raw`<ol>
<li><strong>Paréntesis:</strong> desarróllalos con la propiedad distributiva.</li>
<li><strong>Fracciones:</strong> multiplica <em>toda</em> la ecuación por el mínimo común múltiplo de los denominadores. Desaparecen.</li>
<li><strong>Decimales:</strong> multiplica todo por 10, 100 o 1000 para dejar enteros (opcional, pero evita errores).</li>
<li>Reduce y resuelve como en la sesión anterior.</li>
</ol>`
        },
        {
          tipo: 'concepto', titulo: 'Eliminar denominadores',
          html: String.raw`<p>En \(\dfrac{x}{2}+\dfrac{x}{3}=10\), el MCM de 2 y 3 es 6. Multiplico cada término por 6:</p>
<span class="formula">\(6\cdot\dfrac{x}{2}+6\cdot\dfrac{x}{3}=6\cdot 10\ \Rightarrow\ 3x+2x=60\ \Rightarrow\ 5x=60\ \Rightarrow\ x=12\)</span>
<p>Con decimales: \(0{,}2x+1{,}5=3{,}1\). Multiplico por 10: \(2x+15=31\), \(2x=16\), \(x=8\).</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Cuatro casos típicos',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(3(x-2)=2(x+4)\). Distribuyo: \(3x-6=2x+8\). Resto \(2x\), sumo 6: \(x=14\).</div></div>
<div class="paso"><span class="paso-n">2</span><div>\(\dfrac{x+1}{4}=3\). Multiplico por 4: \(x+1=12\), \(x=11\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>\(\dfrac{x}{5}-2=\dfrac{x}{10}+1\). Multiplico todo por 10: \(2x-20=x+10\), \(x=30\).</div></div>
<div class="paso"><span class="paso-n">4</span><div>\(0{,}25x+6=0{,}5x-2\). Multiplico por 100: \(25x+600=50x-200\), \(800=25x\), \(x=32\).</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'Dos máquinas trabajando juntas',
          html: String.raw`<p>Una máquina hace \(\frac{1}{4}\) de un pedido por hora y otra \(\frac{1}{6}\). ¿En cuántas horas \(t\) terminan el pedido trabajando juntas?</p>
<span class="formula">\(\left(\dfrac{1}{4}+\dfrac{1}{6}\right)t=1\ \Rightarrow\ \dfrac{3t}{12}+\dfrac{2t}{12}=1\ \Rightarrow\ 5t=12\ \Rightarrow\ t=2{,}4\ \text{horas}\)</span>
<p>Menos que las 4 horas de la más rápida sola, como debe ser.</p>`
        },
        {
          tipo: 'error', titulo: 'Multiplicar solo algunos términos',
          html: String.raw`<p>Al multiplicar por el MCM, <strong>todos</strong> los términos se multiplican, incluso los que no tienen fracción. En \(\frac{x}{3}+4=9\), al multiplicar por 3 queda \(x+12=27\), no \(x+4=27\).</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Resuelve \(2(x+3)=16\).</p>`, respuesta: 5, pista: 'Distribuye o divide por 2 primero.', solucion: String.raw`<p>\(2x+6=16\), \(2x=10\), \(x=5\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Resuelve \(4(x-1)=2x+10\).</p>`, respuesta: 7, pista: 'Distribuye el 4 y junta las x.', solucion: String.raw`<p>\(4x-4=2x+10\), \(2x=14\), \(x=7\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Resuelve \(\dfrac{x}{3}+4=9\).</p>`, respuesta: 15, pista: 'Resta 4 y multiplica por 3.', solucion: String.raw`<p>\(\frac{x}{3}=5\), \(x=15\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Resuelve \(\dfrac{x}{2}+\dfrac{x}{5}=14\).</p>`, respuesta: 20, pista: 'Multiplica todo por 10.', solucion: String.raw`<p>\(5x+2x=140\), \(7x=140\), \(x=20\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Resuelve \(0{,}3x-2=1{,}6\).</p>`, respuesta: 12, pista: 'Suma 2 y divide por 0,3 (o multiplica todo por 10 primero).', solucion: String.raw`<p>\(0{,}3x=3{,}6\), \(x=12\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Resuelve \(\dfrac{x-2}{3}=\dfrac{x+4}{5}\).</p>`, respuesta: 11, pista: 'Multiplica en cruz: 5(x − 2) = 3(x + 4).', solucion: String.raw`<p>\(5x-10=3x+12\), \(2x=22\), \(x=11\).</p>` }
      ],
      cuaderno: [
        'Escribe el orden de limpieza (paréntesis → fracciones → reducir → resolver) y explica por qué ese orden.',
        'Resuelve x/2 + x/5 = 14 multiplicando por el MCM y muestra cómo desaparece cada denominador.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Verifica al menos tres de tus soluciones reemplazando en la ecuación original.'
      ],
      videos: [
        { titulo: 'Ecuaciones con paréntesis', q: 'julioprofe ecuaciones de primer grado con parentesis' },
        { titulo: 'Ecuaciones con fracciones', q: 'profe alex ecuaciones con fracciones' }
      ],
      cierre: 'Primero limpia, después resuelve. Una ecuación sin paréntesis ni denominadores es una ecuación fácil.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '4.3',
      titulo: 'Problemas: del enunciado a la ecuación',
      duracion: 60,
      objetivo: 'Traducir un problema en palabras a una ecuación, resolverla e interpretar el resultado.',
      porque: 'En la universidad nadie te dará la ecuación lista. Te darán una situación: costos, producción, mezclas, tiempos. La habilidad que vale es pasar de la situación a la ecuación.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'El método en cinco pasos',
          html: String.raw`<ol>
<li>Lee dos veces y subraya <strong>qué se pregunta</strong>.</li>
<li>Nombra la incógnita con unidad: "\(x\) = número de horas".</li>
<li>Escribe las demás cantidades en función de \(x\).</li>
<li>Plantea la igualdad que el enunciado describe.</li>
<li>Resuelve, verifica y responde <strong>con unidad y en una frase</strong>.</li>
</ol>
<p>El paso 2 es el que la gente se salta, y es el que ordena todo lo demás.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Costos: cuántas unidades alcanzan',
          html: String.raw`<p>Producir \(q\) unidades cuesta \(80000+1200q\). ¿Cuántas se pueden producir con $200.000?</p>
<span class="formula">\(80000+1200q=200000\ \Rightarrow\ 1200q=120000\ \Rightarrow\ q=100\)</span>
<p>Respuesta: 100 unidades. Verificación: \(80000+1200\cdot 100=200000\).</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Punto de equilibrio',
          html: String.raw`<p>El costo de producir \(q\) unidades es \(50000+300q\) y cada una se vende a $800. ¿Cuántas hay que vender para no perder ni ganar?</p>
<span class="formula">\(800q=50000+300q\ \Rightarrow\ 500q=50000\ \Rightarrow\ q=100\)</span>
<p>Con 100 unidades el ingreso iguala al costo. Desde la 101 en adelante hay utilidad. Este cálculo lo harás en Economía, Contabilidad y Evaluación de Proyectos.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Cantidades relacionadas',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>Un turno tiene el triple de operarios que de supervisores, 48 personas en total. Sea \(s\) el número de supervisores: \(s+3s=48\), \(4s=48\), \(s=12\). Hay 12 supervisores y 36 operarios.</div></div>
<div class="paso"><span class="paso-n">2</span><div>Tres pedidos de tamaños consecutivos suman 96 unidades: \(n+(n+1)+(n+2)=96\), \(3n+3=96\), \(n=31\). Los pedidos son de 31, 32 y 33.</div></div>`
        },
        {
          tipo: 'error', titulo: '"x = 100" no es una respuesta',
          html: String.raw`<p>Termina siempre con una frase y una unidad: "se pueden producir 100 unidades". Y pasa el resultado por el sentido común: si te da \(-20\) operarios o \(3{,}7\) personas, el error está en el planteo, no en la realidad.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Un taller cobra $15.000 por la visita más $8.000 por hora de trabajo. Una cuenta fue de $55.000. ¿Cuántas horas trabajó?</p>`, respuesta: 5, unidad: 'horas', pista: '15000 + 8000h = 55000.', solucion: String.raw`<p>\(8000h=40000\), \(h=5\) horas.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>La suma de un número y su doble es 51. ¿Cuál es el número?</p>`, respuesta: 17, pista: 'x + 2x = 51.', solucion: String.raw`<p>\(3x=51\), \(x=17\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>El costo de producir \(q\) unidades es \(40000+250q\) y cada una se vende a $650. ¿Cuántas unidades se necesitan para alcanzar el punto de equilibrio?</p>`, respuesta: 100, unidad: 'unidades', pista: 'Ingreso igual a costo: 650q = 40000 + 250q.', solucion: String.raw`<p>\(400q=40000\), \(q=100\) unidades.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Un galpón rectangular tiene un largo igual al doble de su ancho, y su perímetro mide 90 m. ¿Cuánto mide el ancho?</p>`, respuesta: 15, unidad: 'm', pista: 'Perímetro = 2·largo + 2·ancho, con largo = 2a.', solucion: String.raw`<p>\(2(2a)+2a=90\), \(6a=90\), \(a=15\) m (y el largo, 30 m).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Tres números consecutivos suman 123. ¿Cuál es el menor?</p>`, respuesta: 40, pista: 'n + (n+1) + (n+2) = 123.', solucion: String.raw`<p>\(3n+3=123\), \(3n=120\), \(n=40\). Son 40, 41 y 42.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>En una línea hay el triple de operarios que de supervisores; en total son 52 personas. ¿Cuántos supervisores hay?</p>`, respuesta: 13, unidad: 'supervisores', pista: 's + 3s = 52.', solucion: String.raw`<p>\(4s=52\), \(s=13\) supervisores (y 39 operarios).</p>` }
      ],
      cuaderno: [
        'Copia el método de cinco pasos y úsalo literalmente en cada ejercicio: escribe "x = …" antes de calcular nada.',
        'Resuelve el problema del punto de equilibrio y explica con una frase qué significa el resultado para el negocio.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Inventa un problema de tu trabajo o tu casa y plantea su ecuación (no hace falta resolverlo).'
      ],
      videos: [
        { titulo: 'Problemas con ecuaciones de primer grado', q: 'julioprofe problemas con ecuaciones de primer grado' },
        { titulo: 'Planteamiento de problemas con ecuaciones', q: 'profe alex planteamiento de problemas con ecuaciones' }
      ],
      cierre: 'Nombra la incógnita con unidad antes de escribir cualquier número. La mitad de los problemas se resuelven al plantearlos bien.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '4.4',
      titulo: 'Despejar fórmulas',
      duracion: 60,
      objetivo: 'Despejar cualquier variable de una fórmula tratándola como una ecuación.',
      porque: 'En Mecánica, Termodinámica y Electromagnetismo pasarás más tiempo despejando que calculando. Una fórmula es una ecuación con varias letras, y se despeja exactamente igual.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Una fórmula es una ecuación con más letras',
          html: String.raw`<p>\(v=\dfrac{d}{t}\) relaciona velocidad, distancia y tiempo. Si conoces \(v\) y \(d\) y quieres \(t\), tienes que <strong>despejar</strong> \(t\): aislarla usando operaciones inversas, igual que con \(x\).</p>
<span class="formula">\(v=\dfrac{d}{t}\ \Rightarrow\ v\cdot t=d\ \Rightarrow\ t=\dfrac{d}{v}\)</span>
<p>Operaciones inversas: sumar y restar, multiplicar y dividir, elevar al cuadrado y sacar raíz.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Estrategia',
          html: String.raw`<ol>
<li>Ubica la variable que quieres despejar.</li>
<li>Deshaz las operaciones que la rodean <strong>de afuera hacia adentro</strong>: lo contrario de evaluar. Si a la variable primero la multiplican y luego le suman algo, tú primero restas y después divides.</li>
<li>Si está en un denominador, multiplica por él al principio.</li>
<li>Si está dentro de una raíz o una potencia, deshazla al final.</li>
</ol>`
        },
        {
          tipo: 'ejemplo', titulo: 'Despejes que vas a necesitar',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>Área del triángulo \(A=\dfrac{b\cdot h}{2}\). Despejar \(h\): \(2A=b\cdot h\), luego \(h=\dfrac{2A}{b}\).</div></div>
<div class="paso"><span class="paso-n">2</span><div>Interés simple \(I=C\cdot i\cdot t\). Despejar \(t\): \(t=\dfrac{I}{C\cdot i}\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>Velocidad final \(v=v_0+a\cdot t\). Despejar \(a\): \(v-v_0=a\cdot t\), luego \(a=\dfrac{v-v_0}{t}\).</div></div>
<div class="paso"><span class="paso-n">4</span><div>Temperatura \(F=\dfrac{9}{5}C+32\). Despejar \(C\): \(F-32=\dfrac{9}{5}C\), luego \(C=\dfrac{5}{9}(F-32)\).</div></div>
<div class="paso"><span class="paso-n">5</span><div>Pitágoras \(c^2=a^2+b^2\). Despejar \(b\): \(b^2=c^2-a^2\), luego \(b=\sqrt{c^2-a^2}\).</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'El costo al revés',
          html: String.raw`<p>En la semana 3 calculaste el costo \(C=F+v\cdot q\). Ahora al revés: ¿cuántas unidades \(q\) se producen con un costo total \(C\)?</p>
<span class="formula">\(C-F=v\cdot q\ \Rightarrow\ q=\dfrac{C-F}{v}\)</span>
<p>Con \(C=260000\), \(F=80000\) y \(v=1200\): \(q=\frac{180000}{1200}=150\) unidades. Despejar una vez te ahorra resolver la misma ecuación cien veces.</p>`
        },
        {
          tipo: 'error', titulo: 'Despejar solo un pedazo',
          html: String.raw`<p>En \(C=F+v\cdot q\) no puedes "dividir por \(v\)" solo al \(C\). Primero resta \(F\) a ambos lados y recién entonces divide <strong>todo</strong> el lado por \(v\). El orden de afuera hacia adentro evita este error.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'opcion', enunciado: String.raw`<p>De \(v=\dfrac{d}{t}\), despeja \(d\):</p>`, opciones: [String.raw`\(d=\dfrac{v}{t}\)`, String.raw`\(d=v\cdot t\)`, String.raw`\(d=\dfrac{t}{v}\)`], correcta: 1, pista: 'Multiplica ambos lados por t.', solucion: String.raw`<p>\(v\cdot t=d\). Distancia = velocidad × tiempo.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>De \(P=2a+2b\), despeja \(b\):</p>`, opciones: [String.raw`\(b=\dfrac{P-2a}{2}\)`, String.raw`\(b=P-2a\)`, String.raw`\(b=\dfrac{P-a}{2}\)`], correcta: 0, pista: 'Resta 2a y después divide todo por 2.', solucion: String.raw`<p>\(P-2a=2b\), así que \(b=\frac{P-2a}{2}\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Con \(I=C\cdot i\cdot t\), calcula \(t\) si \(I=90000\), \(C=1000000\) e \(i=0{,}03\) anual.</p>`, respuesta: 3, unidad: 'años', pista: 't = I / (C · i).', solucion: String.raw`<p>\(C\cdot i=30000\); \(t=90000\div 30000=3\) años.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Con \(F=\dfrac{9}{5}C+32\), ¿a cuántos grados Celsius equivalen 212 °F?</p>`, respuesta: 100, unidad: '°C', pista: 'C = 5/9 · (F − 32).', solucion: String.raw`<p>\(C=\frac{5}{9}(212-32)=\frac{5}{9}\cdot 180=100\) °C.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>De \(c^2=a^2+b^2\), despeja \(a\):</p>`, opciones: [String.raw`\(a=c-b\)`, String.raw`\(a=\sqrt{c^2-b^2}\)`, String.raw`\(a=\sqrt{c^2}-\sqrt{b^2}\)`], correcta: 1, pista: 'Primero aísla a², después saca raíz a todo.', solucion: String.raw`<p>\(a^2=c^2-b^2\), y la raíz se aplica a toda la resta: \(a=\sqrt{c^2-b^2}\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Con \(C=F+v\cdot q\): si \(C=500000\), \(F=125000\) y \(v=2500\), ¿cuánto vale \(q\)?</p>`, respuesta: 150, unidad: 'unidades', pista: 'q = (C − F) / v.', solucion: String.raw`<p>\(q=\frac{500000-125000}{2500}=\frac{375000}{2500}=150\).</p>` }
      ],
      cuaderno: [
        'Escribe la tabla de operaciones inversas (suma y resta, multiplicación y división, potencia y raíz).',
        'Despeja las tres variables de v = d/t y las tres de I = C·i·t.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Busca una fórmula que uses o conozcas (IMC, consumo de bencina, interés de un crédito) y despeja cada variable.'
      ],
      videos: [
        { titulo: 'Despeje de fórmulas', q: 'julioprofe despeje de formulas' },
        { titulo: 'Cómo despejar variables en fórmulas de física', q: 'como despejar variables de una formula fisica' }
      ],
      cierre: 'Despejar es resolver una ecuación donde los demás números tienen nombre de letra.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '4.5',
      titulo: 'Repaso y mini test de la semana 4',
      duracion: 60,
      tipo: 'test',
      objetivo: 'Comprobar que resuelves ecuaciones de primer grado, planteas problemas y despejas fórmulas.',
      intro: String.raw`<p><strong>Repasa 10 minutos</strong> con el cuaderno cerrado:</p>
<ul>
<li>¿Qué significa el principio de equivalencia?</li>
<li>¿Qué haces primero si hay paréntesis y fracciones?</li>
<li>¿Cuáles son los cinco pasos para plantear un problema?</li>
<li>¿Cómo despejas una variable que está multiplicada y luego sumada a algo?</li>
</ul>
<p>Luego resuelve las 10 preguntas en el cuaderno y marca aquí. <strong>Meta: 8 de 10.</strong></p>`,
      ejercicios: [
        { tipo: 'num', area: 'Ecuaciones básicas (4.1)', enunciado: String.raw`<p>\(3x-8=13\)</p>`, respuesta: 7, solucion: String.raw`<p>\(3x=21\), \(x=7\).</p>` },
        { tipo: 'num', area: 'Ecuaciones básicas (4.1)', enunciado: String.raw`<p>\(7x+2=4x-13\)</p>`, respuesta: -5, solucion: String.raw`<p>\(3x=-15\), \(x=-5\).</p>` },
        { tipo: 'num', area: 'Paréntesis y fracciones (4.2)', enunciado: String.raw`<p>\(5(x-3)=20\)</p>`, respuesta: 7, solucion: String.raw`<p>\(x-3=4\), \(x=7\).</p>` },
        { tipo: 'num', area: 'Paréntesis y fracciones (4.2)', enunciado: String.raw`<p>\(\dfrac{x}{4}+3=8\)</p>`, respuesta: 20, solucion: String.raw`<p>\(\frac{x}{4}=5\), \(x=20\).</p>` },
        { tipo: 'num', area: 'Paréntesis y fracciones (4.2)', enunciado: String.raw`<p>\(\dfrac{x}{3}+\dfrac{x}{6}=9\)</p>`, respuesta: 18, solucion: String.raw`<p>Por 6: \(2x+x=54\), \(x=18\).</p>` },
        { tipo: 'num', area: 'Problemas (4.3)', enunciado: String.raw`<p>Un plan de celular cobra $9.900 fijos más $150 por minuto. Una cuenta fue de $21.900. ¿Cuántos minutos se usaron?</p>`, respuesta: 80, unidad: 'min', solucion: String.raw`<p>\(150m=12000\), \(m=80\) minutos.</p>` },
        { tipo: 'num', area: 'Problemas (4.3)', enunciado: String.raw`<p>Costo \(=30000+400q\); cada unidad se vende a $1.000. ¿Cuántas unidades para el punto de equilibrio?</p>`, respuesta: 50, unidad: 'unidades', solucion: String.raw`<p>\(1000q=30000+400q\), \(600q=30000\), \(q=50\).</p>` },
        { tipo: 'opcion', area: 'Despeje de fórmulas (4.4)', enunciado: String.raw`<p>De \(A=\dfrac{b\cdot h}{2}\), despeja \(b\):</p>`, opciones: [String.raw`\(b=\dfrac{2A}{h}\)`, String.raw`\(b=\dfrac{A}{2h}\)`, String.raw`\(b=\dfrac{2h}{A}\)`], correcta: 0, solucion: String.raw`<p>\(2A=b\cdot h\), así que \(b=\frac{2A}{h}\).</p>` },
        { tipo: 'num', area: 'Despeje de fórmulas (4.4)', enunciado: String.raw`<p>Con \(v=v_0+a\cdot t\): si \(v=30\), \(v_0=10\) y \(t=4\), ¿cuánto vale \(a\)?</p>`, respuesta: 5, solucion: String.raw`<p>\(a=\frac{v-v_0}{t}=\frac{20}{4}=5\).</p>` },
        { tipo: 'num', area: 'Despeje de fórmulas (4.4)', enunciado: String.raw`<p>Con \(F=\dfrac{9}{5}C+32\), ¿a cuántos °C equivalen 50 °F?</p>`, respuesta: 10, unidad: '°C', solucion: String.raw`<p>\(C=\frac{5}{9}(50-32)=\frac{5}{9}\cdot 18=10\).</p>` }
      ],
      cuaderno: [
        'Haz la hoja resumen de la semana 4: principio de equivalencia, orden de limpieza, método de cinco pasos, operaciones inversas.',
        'Resuelve el test completo en el cuaderno antes de responder en pantalla.',
        'Anota tu puntaje y las preguntas falladas.',
        'Si fallaste 3 o más, repite la sesión correspondiente antes de la semana 5.'
      ],
      videos: [
        { titulo: 'Ejercicios resueltos de ecuaciones de primer grado', q: 'ejercicios resueltos ecuaciones de primer grado con fracciones y parentesis' }
      ],
      cierre: 'Resolver ecuaciones ya no es un misterio: es un procedimiento. Ahora toca factorizar.'
    }
  ]
});
