/* Semana 10 · Razonamiento lógico y conjuntos */
CURSO.semana({
  n: 10,
  bloque: 'D',
  titulo: 'Razonamiento lógico y conjuntos',
  subtitulo: 'Proposiciones y tablas de verdad, condicionales y argumentos, conjuntos y diagramas de Venn, sucesiones y sumatorias.',
  meta: 'Razonamiento Lógico es un ramo del semestre 1, y Programación usa exactamente estas ideas (condiciones con "y", "o" y "no"). Los conjuntos y las sumatorias reaparecen en Estadística e Investigación de Operaciones. Es una semana distinta: menos cuentas, más pensar con precisión.',
  resumen: [
    { t: 'Negación', f: String.raw`\neg p\quad (\text{no } p)` },
    { t: 'Conjunción y disyunción', f: String.raw`p\wedge q\ (\text{y}),\qquad p\vee q\ (\text{o})` },
    { t: 'Condicional', f: String.raw`p\rightarrow q\ \text{ es falso solo si } p \text{ es V y } q \text{ es F}` },
    { t: 'Contrarrecíproca (equivalente)', f: String.raw`p\rightarrow q\ \equiv\ \neg q\rightarrow\neg p` },
    { t: 'Leyes de De Morgan', f: String.raw`\neg(p\wedge q)\equiv\neg p\vee\neg q,\qquad \neg(p\vee q)\equiv\neg p\wedge\neg q` },
    { t: 'Unión de conjuntos', f: String.raw`|A\cup B|=|A|+|B|-|A\cap B|` },
    { t: 'Progresión aritmética', f: String.raw`a_n=a_1+(n-1)d,\qquad S_n=\frac{n(a_1+a_n)}{2}` },
    { t: 'Progresión geométrica', f: String.raw`a_n=a_1\cdot r^{\,n-1}` },
    { t: 'Sumatoria de los primeros n enteros', f: String.raw`\sum_{i=1}^{n} i=\frac{n(n+1)}{2}` }
  ],
  sesiones: [
    /* ------------------------------------------------------------------ */
    {
      id: '10.1',
      titulo: 'Proposiciones y conectivos',
      duracion: 60,
      objetivo: 'Reconocer proposiciones, usar los conectivos no, y, o, y construir tablas de verdad.',
      porque: 'Toda condición en un programa, toda regla de negocio y todo argumento se construyen con "y", "o" y "no". Razonamiento Lógico y Programación empiezan aquí.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Qué es una proposición',
          html: String.raw`<p>Un enunciado que es <strong>verdadero o falso</strong>, pero no ambos. "Santiago es la capital de Chile" (V). "\(3>5\)" (F). "El 7 es primo" (V).</p>
<p>No son proposiciones las preguntas ("¿qué hora es?"), las órdenes ("cierra la puerta") ni los enunciados con valor desconocido ("\(x>5\)" sin saber cuánto vale \(x\)).</p>`
        },
        {
          tipo: 'concepto', titulo: 'Los tres conectivos',
          html: String.raw`<ul>
<li><strong>Negación</strong> \(\neg p\) ("no p"): invierte el valor.</li>
<li><strong>Conjunción</strong> \(p\wedge q\) ("p y q"): verdadera solo si <em>ambas</em> lo son.</li>
<li><strong>Disyunción</strong> \(p\vee q\) ("p o q"): falsa solo si <em>ambas</em> son falsas. Es un "o" inclusivo: si las dos son verdaderas, también es verdadera.</li>
</ul>
<table class="mini-tabla">
<tr><th>p</th><th>q</th><th>\(p\wedge q\)</th><th>\(p\vee q\)</th></tr>
<tr><td>V</td><td>V</td><td>V</td><td>V</td></tr>
<tr><td>V</td><td>F</td><td>F</td><td>V</td></tr>
<tr><td>F</td><td>V</td><td>F</td><td>V</td></tr>
<tr><td>F</td><td>F</td><td>F</td><td>F</td></tr>
</table>`
        },
        {
          tipo: 'concepto', titulo: 'Tablas de verdad',
          html: String.raw`<p>Para evaluar una expresión compuesta, lista todas las combinaciones de valores (\(2^n\) filas para \(n\) proposiciones) y calcula por partes, de adentro hacia afuera. Por ejemplo, \(\neg p\vee q\):</p>
<table class="mini-tabla">
<tr><th>p</th><th>q</th><th>\(\neg p\)</th><th>\(\neg p\vee q\)</th></tr>
<tr><td>V</td><td>V</td><td>F</td><td>V</td></tr>
<tr><td>V</td><td>F</td><td>F</td><td>F</td></tr>
<tr><td>F</td><td>V</td><td>V</td><td>V</td></tr>
<tr><td>F</td><td>F</td><td>V</td><td>V</td></tr>
</table>`
        },
        {
          tipo: 'ejemplo', titulo: 'Una regla de negocio',
          html: String.raw`<p>"Se despacha un pedido si está pagado <strong>y</strong> (hay stock <strong>o</strong> el cliente aceptó esperar)." Con \(p\) = pagado, \(q\) = hay stock, \(r\) = aceptó esperar: \(p\wedge(q\vee r)\).</p>
<p>Pedido pagado, sin stock, cliente acepta esperar: \(p=V\), \(q=F\), \(r=V\). Entonces \(q\vee r=V\) y \(p\wedge V=V\): se despacha. Así se escribe una condición en cualquier lenguaje de programación.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Negar correctamente: leyes de De Morgan',
          html: String.raw`<span class="formula">\(\neg(p\wedge q)\equiv\neg p\vee\neg q\qquad\qquad \neg(p\vee q)\equiv\neg p\wedge\neg q\)</span>
<p>Negar "pagado y con stock" es "no pagado <strong>o</strong> sin stock". Basta que falle una. Negar "pagado o con stock" es "no pagado <strong>y</strong> sin stock": deben fallar las dos. Al negar, la "y" se vuelve "o" y viceversa.</p>`
        },
        {
          tipo: 'error', titulo: 'El "o" y la negación de "todos"',
          html: String.raw`<p>El "o" matemático es inclusivo: "café o té" permite tomar ambos. Y la negación de "todos los pedidos llegaron" no es "ninguno llegó", sino "al menos uno no llegó".</p>`
        }
      ],
      ejercicios: [
        { tipo: 'opcion', enunciado: String.raw`<p>¿Cuál de estos enunciados es una proposición?</p>`, opciones: ['¿Qué hora es?', 'Cierra la puerta.', 'El 7 es un número primo.'], correcta: 2, pista: 'Debe poder ser verdadero o falso.', solucion: String.raw`<p>"El 7 es un número primo" es verdadero: es una proposición. Las otras no tienen valor de verdad.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Si \(p\) es V y \(q\) es F, el valor de \(p\wedge q\) es:</p>`, opciones: ['Verdadero', 'Falso'], correcta: 1, pista: '"Y" exige que ambas sean verdaderas.', solucion: String.raw`<p>Falso: q no se cumple.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Si \(p\) es V y \(q\) es F, el valor de \(p\vee q\) es:</p>`, opciones: ['Verdadero', 'Falso'], correcta: 0, pista: '"O" se conforma con una.', solucion: String.raw`<p>Verdadero: p se cumple.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Si \(p=F\), \(q=F\) y \(r=V\), el valor de \(p\vee(q\wedge r)\) es:</p>`, opciones: ['Verdadero', 'Falso'], correcta: 1, pista: 'Primero el paréntesis.', solucion: String.raw`<p>\(q\wedge r=F\) (q es falsa); luego \(F\vee F=F\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>La negación de "está pagado y hay stock" es:</p>`, opciones: ['No está pagado y no hay stock', 'No está pagado o no hay stock', 'Está pagado o hay stock'], correcta: 1, pista: 'De Morgan: la "y" se vuelve "o".', solucion: String.raw`<p>\(\neg(p\wedge q)\equiv\neg p\vee\neg q\). Basta que falle una condición.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>¿Cuántas filas tiene la tabla de verdad de una expresión con 3 proposiciones?</p>`, respuesta: 8, pista: '2 elevado al número de proposiciones.', solucion: String.raw`<p>\(2^3=8\) combinaciones.</p>` }
      ],
      cuaderno: [
        'Escribe las tablas de verdad de ¬p, p ∧ q y p ∨ q.',
        'Construye la tabla completa de ¬p ∨ q (4 filas).',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Escribe una regla de tu trabajo con "y", "o" y "no", y niégala usando De Morgan.'
      ],
      videos: [
        { titulo: 'Lógica proposicional: conectivos y tablas de verdad', q: 'logica proposicional conectivos tablas de verdad explicacion' },
        { titulo: 'Leyes de De Morgan', q: 'leyes de de morgan logica proposicional' }
      ],
      cierre: '"Y" exige todo; "o" se conforma con algo; "no" da vuelta. Con tres palabras se construye toda la lógica.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '10.2',
      titulo: 'Condicionales y argumentos',
      duracion: 60,
      objetivo: 'Entender la implicación "si… entonces", su recíproca y su contrarrecíproca, los cuantificadores y las dos formas válidas de argumentar.',
      porque: '"Si la temperatura supera 80°, la máquina se apaga": toda especificación técnica es un condicional. Saber qué se puede concluir y qué no es la diferencia entre un buen y un mal razonamiento, y es el corazón del ramo Razonamiento Lógico.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'El condicional p → q',
          html: String.raw`<p>"Si \(p\), entonces \(q\)". \(p\) es la hipótesis y \(q\) la conclusión. Es una promesa: solo se rompe cuando \(p\) ocurre y \(q\) no.</p>
<table class="mini-tabla">
<tr><th>p</th><th>q</th><th>\(p\rightarrow q\)</th></tr>
<tr><td>V</td><td>V</td><td>V</td></tr>
<tr><td>V</td><td>F</td><td><strong>F</strong></td></tr>
<tr><td>F</td><td>V</td><td>V</td></tr>
<tr><td>F</td><td>F</td><td>V</td></tr>
</table>
<p>Si \(p\) no ocurre, la promesa no se rompe, pase lo que pase con \(q\).</p>`
        },
        {
          tipo: 'concepto', titulo: 'Recíproca y contrarrecíproca',
          html: String.raw`<p>De "si llueve, el piso está mojado" (\(p\rightarrow q\)):</p>
<ul>
<li><strong>Recíproca</strong> \(q\rightarrow p\): "si el piso está mojado, llueve". <strong>No</strong> es equivalente: pudo ser la manguera.</li>
<li><strong>Contrarrecíproca</strong> \(\neg q\rightarrow\neg p\): "si el piso no está mojado, no llueve". <strong>Sí</strong> es equivalente al original.</li>
</ul>
<span class="formula">\(p\rightarrow q\ \equiv\ \neg q\rightarrow\neg p\)</span>`
        },
        {
          tipo: 'concepto', titulo: 'Argumentos válidos y falacias',
          html: String.raw`<table class="mini-tabla">
<tr><th>Nombre</th><th>Forma</th><th>¿Válido?</th></tr>
<tr><td>Modus ponens</td><td>\(p\rightarrow q\), ocurre \(p\), luego \(q\)</td><td>Sí</td></tr>
<tr><td>Modus tollens</td><td>\(p\rightarrow q\), no ocurre \(q\), luego no \(p\)</td><td>Sí</td></tr>
<tr><td>Afirmar el consecuente</td><td>\(p\rightarrow q\), ocurre \(q\), luego \(p\)</td><td><strong>No</strong></td></tr>
<tr><td>Negar el antecedente</td><td>\(p\rightarrow q\), no ocurre \(p\), luego no \(q\)</td><td><strong>No</strong></td></tr>
</table>
<p>Solo hay dos movimientos seguros: avanzar con \(p\) o retroceder con \(\neg q\).</p>`
        },
        {
          tipo: 'concepto', titulo: 'Cuantificadores: todos y existe',
          html: String.raw`<p>"<strong>Para todo</strong>" (\(\forall\)) y "<strong>existe</strong>" (\(\exists\)) se niegan cruzándose:</p>
<ul>
<li>Negar "todas las piezas pasan el control" es "existe al menos una pieza que no lo pasa". Un solo contraejemplo refuta un "todos".</li>
<li>Negar "existe un proveedor que cumple" es "ningún proveedor cumple" (todos fallan).</li>
</ul>`
        },
        {
          tipo: 'ejemplo', titulo: 'Una regla de control de calidad',
          html: String.raw`<p>Regla: "si una pieza pesa más de 2 kg, se rechaza".</p>
<div class="paso"><span class="paso-n">1</span><div>La pieza A fue rechazada. ¿Pesa más de 2 kg? <strong>No se puede concluir</strong>: pudo rechazarse por otra causa (afirmar el consecuente).</div></div>
<div class="paso"><span class="paso-n">2</span><div>La pieza B pesa 2,5 kg. Se rechaza (modus ponens).</div></div>
<div class="paso"><span class="paso-n">3</span><div>La pieza C no fue rechazada. Entonces no pesa más de 2 kg (modus tollens).</div></div>`
        },
        {
          tipo: 'error', titulo: 'Confundir el condicional con su recíproca',
          html: String.raw`<p>"Si estudias, apruebas" no dice que si apruebas, estudiaste. Es el error de razonamiento más común en la vida diaria, y el que más se pregunta en pruebas de lógica.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'opcion', enunciado: String.raw`<p>\(p\rightarrow q\) es falso solo cuando:</p>`, opciones: [String.raw`\(p\) es V y \(q\) es F`, String.raw`\(p\) es F y \(q\) es V`, 'Ambas son F'], correcta: 0, pista: 'La promesa rota.', solucion: String.raw`<p>Cuando la hipótesis ocurre y la conclusión no.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>La contrarrecíproca de "si hay stock, se despacha" es:</p>`, opciones: ['Si se despacha, hay stock', 'Si no se despacha, no hay stock', 'Si no hay stock, no se despacha'], correcta: 1, pista: 'Niega las dos partes y dales vuelta.', solucion: String.raw`<p>\(\neg q\rightarrow\neg p\): "si no se despacha, no hay stock". Es equivalente a la original.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>"Si la presión supera 5 bar, la válvula se abre. La válvula se abrió." ¿Qué se concluye?</p>`, opciones: ['La presión superó 5 bar', 'Nada con seguridad', 'La presión no superó 5 bar'], correcta: 1, pista: 'Afirmar el consecuente no es válido.', solucion: String.raw`<p>La válvula pudo abrirse por otra razón (una prueba manual, por ejemplo). No se puede concluir nada seguro.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>"Si la presión supera 5 bar, la válvula se abre. La válvula no se abrió." ¿Qué se concluye?</p>`, opciones: ['La presión superó 5 bar', 'La presión no superó 5 bar', 'Nada con seguridad'], correcta: 1, pista: 'Modus tollens.', solucion: String.raw`<p>Si hubiera superado 5 bar, se habría abierto. Como no se abrió, no superó 5 bar.</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>La negación de "todos los pedidos llegaron a tiempo" es:</p>`, opciones: ['Ningún pedido llegó a tiempo', 'Al menos un pedido no llegó a tiempo', 'Todos los pedidos llegaron tarde'], correcta: 1, pista: 'Basta un contraejemplo.', solucion: String.raw`<p>Negar "todos" es "existe al menos uno que no".</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>Un argumento de la forma "\(p\rightarrow q\); no \(p\); por lo tanto no \(q\)" es:</p>`, opciones: ['Válido (modus tollens)', 'Inválido (negar el antecedente)', 'Válido (modus ponens)'], correcta: 1, pista: 'Compara con la tabla de argumentos.', solucion: String.raw`<p>Negar el antecedente no permite concluir nada: "si llueve, el piso se moja; no llueve" no implica que el piso esté seco.</p>` }
      ],
      cuaderno: [
        'Escribe la tabla de verdad de p → q y marca la única fila falsa.',
        'Para "si llueve, el piso está mojado", escribe la recíproca, la inversa y la contrarrecíproca, y di cuáles son verdaderas.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Escribe dos reglas de tu trabajo como condicionales y aplica modus ponens y modus tollens a cada una.'
      ],
      videos: [
        { titulo: 'Condicional, recíproca, inversa y contrarrecíproca', q: 'condicional reciproca inversa contrarreciproca logica' },
        { titulo: 'Modus ponens y modus tollens', q: 'modus ponens modus tollens explicacion ejemplos' }
      ],
      cierre: 'De "si p entonces q" puedes avanzar con p o retroceder con no-q. Todo lo demás es tentación.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '10.3',
      titulo: 'Conjuntos y diagramas de Venn',
      duracion: 60,
      objetivo: 'Operar con conjuntos (unión, intersección, complemento) y resolver problemas de conteo con diagramas de Venn.',
      porque: 'Probabilidad (semestre 4) se construye sobre conjuntos: "la probabilidad de A o B" es la unión. Los filtros de una base de datos y las consultas en Excel son operaciones de conjuntos.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Conjuntos y pertenencia',
          html: String.raw`<p>Un conjunto es una colección de elementos: \(A=\{2,4,6\}\). Se escribe \(4\in A\) ("4 pertenece a A"). El número de elementos es la cardinalidad, \(|A|=3\). El conjunto de todo lo que se considera es el universo \(U\).</p>`
        },
        {
          tipo: 'concepto', titulo: 'Las operaciones',
          html: String.raw`<ul>
<li><strong>Unión</strong> \(A\cup B\): lo que está en A <em>o</em> en B (o en ambos).</li>
<li><strong>Intersección</strong> \(A\cap B\): lo que está en A <em>y</em> en B.</li>
<li><strong>Complemento</strong> \(A^c\): lo que <em>no</em> está en A.</li>
<li><strong>Diferencia</strong> \(A-B\): lo que está en A pero no en B.</li>
</ul>
<p>Son los conectivos de la sesión 10.1 con otro disfraz: unión es "o", intersección es "y", complemento es "no".</p>`
        },
        {
          tipo: 'concepto', titulo: 'Contar con un diagrama de Venn',
          html: String.raw`<span class="formula">\(|A\cup B|=|A|+|B|-|A\cap B|\)</span>
<p>Al sumar \(|A|+|B|\), los que están en ambos se cuentan dos veces; por eso se resta la intersección. En el diagrama, llena primero la intersección y luego hacia afuera.</p>
<svg viewBox="0 0 320 190" width="100%" style="max-width:340px;display:block;margin:8px auto" role="img" aria-label="Diagrama de Venn con dos conjuntos">
<rect x="10" y="10" width="300" height="170" fill="none" stroke="currentColor" stroke-opacity="0.35"/>
<circle cx="125" cy="95" r="62" fill="var(--primary)" fill-opacity="0.15" stroke="var(--primary)"/>
<circle cx="195" cy="95" r="62" fill="var(--teal)" fill-opacity="0.15" stroke="var(--teal)"/>
<g font-size="12" fill="currentColor" text-anchor="middle"><text x="95" y="100">18</text><text x="160" y="100">12</text><text x="225" y="100">13</text><text x="280" y="170">7</text></g>
<g font-size="11" fill="currentColor"><text x="70" y="38">Soldar (30)</text><text x="190" y="38">Grúa (25)</text><text x="16" y="170">U = 50</text></g>
</svg>`
        },
        {
          tipo: 'ejemplo', titulo: 'Los operarios',
          html: String.raw`<p>De 50 operarios, 30 saben soldar, 25 manejan grúa y 12 hacen ambas cosas. ¿Cuántos no saben ninguna?</p>
<div class="paso"><span class="paso-n">1</span><div>Ambas: 12 (va en la intersección).</div></div>
<div class="paso"><span class="paso-n">2</span><div>Solo soldar: \(30-12=18\). Solo grúa: \(25-12=13\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>Con alguna: \(18+12+13=43\) (o bien \(30+25-12=43\)). Ninguna: \(50-43=7\).</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'Filtros en una planilla',
          html: String.raw`<p>Clientes que compraron en marzo <strong>y</strong> en abril: intersección. Que compraron en marzo <strong>o</strong> en abril: unión. Que compraron en marzo <strong>pero no</strong> en abril: diferencia. Cada filtro de Excel o consulta a una base de datos es una de estas operaciones.</p>`
        },
        {
          tipo: 'error', titulo: 'Contar dos veces',
          html: String.raw`<p>\(|A|+|B|\) no es la unión: los que están en ambos quedan contados dos veces. Resta siempre la intersección.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>\(A=\{1,2,3,4,5\}\) y \(B=\{4,5,6,7\}\). ¿Cuántos elementos tiene \(A\cup B\)?</p>`, respuesta: 7, pista: 'Lista los elementos sin repetir.', solucion: String.raw`<p>\(\{1,2,3,4,5,6,7\}\): 7 elementos.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Con los mismos conjuntos, ¿cuántos elementos tiene \(A\cap B\)?</p>`, respuesta: 2, pista: 'Los que están en ambos.', solucion: String.raw`<p>\(\{4,5\}\): 2 elementos.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(|A|=30\), \(|B|=25\), \(|A\cap B|=12\). ¿Cuánto vale \(|A\cup B|\)?</p>`, respuesta: 43, pista: 'Suma y resta la intersección.', solucion: String.raw`<p>\(30+25-12=43\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>De 50 operarios, 43 tienen al menos una de dos certificaciones. ¿Cuántos no tienen ninguna?</p>`, respuesta: 7, pista: 'Total menos los que tienen alguna.', solucion: String.raw`<p>\(50-43=7\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>En una encuesta a 80 personas, 45 toman café, 30 toman té y 15 toman ambos. ¿Cuántas toman solo café?</p>`, respuesta: 30, pista: 'Café menos ambos.', solucion: String.raw`<p>\(45-15=30\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>De esas 80 personas, ¿cuántas no toman ni café ni té?</p>`, respuesta: 20, pista: 'Primero la unión: 45 + 30 − 15.', solucion: String.raw`<p>Unión \(=60\); \(80-60=20\).</p>` }
      ],
      cuaderno: [
        'Dibuja un diagrama de Venn de dos conjuntos y nombra sus cuatro regiones.',
        'Resuelve el problema de los operarios llenando el diagrama desde la intersección hacia afuera.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Escribe tres filtros que usarías en una planilla de clientes como operaciones de conjuntos.'
      ],
      videos: [
        { titulo: 'Operaciones entre conjuntos', q: 'julioprofe operaciones entre conjuntos union interseccion' },
        { titulo: 'Problemas con diagramas de Venn', q: 'profe alex problemas con diagramas de venn dos conjuntos' }
      ],
      cierre: 'Unión es "o", intersección es "y". Y para contar la unión, resta lo que contaste dos veces.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '10.4',
      titulo: 'Sucesiones, sumatorias y conteo',
      duracion: 60,
      objetivo: 'Reconocer progresiones aritméticas y geométricas, usar la notación de sumatoria y aplicar el principio multiplicativo.',
      porque: 'Las sumatorias son el lenguaje de Estadística (el promedio es una sumatoria) y de Investigación de Operaciones (la función objetivo es una sumatoria). Las progresiones modelan cuotas, depreciaciones e intereses.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Sucesiones y progresiones',
          html: String.raw`<p>Una sucesión es una lista ordenada \(a_1,a_2,a_3,\ldots\). Lo interesante es la regla.</p>
<p><strong>Progresión aritmética:</strong> se suma siempre lo mismo (\(d\)). 5, 8, 11, 14, … tiene \(d=3\).</p>
<span class="formula">\(a_n=a_1+(n-1)d\qquad S_n=\dfrac{n(a_1+a_n)}{2}\)</span>
<p><strong>Progresión geométrica:</strong> se multiplica siempre por lo mismo (\(r\)). 2, 6, 18, 54, … tiene \(r=3\). Es la exponencial de la semana 8 vista de a saltos.</p>
<span class="formula">\(a_n=a_1\cdot r^{\,n-1}\)</span>`
        },
        {
          tipo: 'concepto', titulo: 'La notación de sumatoria',
          html: String.raw`<span class="formula">\(\displaystyle\sum_{i=1}^{n} a_i=a_1+a_2+\cdots+a_n\)</span>
<p>El índice \(i\) recorre desde el valor de abajo hasta el de arriba. \(\sum_{i=1}^{4} i^2=1+4+9+16=30\). Fórmula útil: \(\sum_{i=1}^{n} i=\frac{n(n+1)}{2}\) (Gauss).</p>
<p>El promedio de \(n\) datos es \(\bar x=\frac{1}{n}\sum_{i=1}^{n}x_i\). Las constantes salen afuera: \(\sum 3a_i=3\sum a_i\). Las sumas se separan: \(\sum(a_i+b_i)=\sum a_i+\sum b_i\).</p>`
        },
        {
          tipo: 'concepto', titulo: 'Principio multiplicativo',
          html: String.raw`<p>Si hay \(m\) formas de hacer una cosa y \(n\) formas de hacer otra, hay \(m\cdot n\) formas de hacer ambas. 3 colores y 4 tallas: 12 productos distintos.</p>
<p>Ordenar \(n\) cosas distintas se puede hacer de \(n!=n\cdot(n-1)\cdots 2\cdot 1\) formas. 5 tareas en una máquina: \(5!=120\) secuencias. Por eso programar la producción es difícil: con 10 tareas hay 3.628.800 órdenes posibles.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Cuotas decrecientes',
          html: String.raw`<p>Un préstamo se paga en 12 cuotas mensuales que empiezan en $250.000 y bajan $10.000 cada mes. La cuota 12 es \(250000-11\cdot 10000=140000\). El total pagado:</p>
<span class="formula">\(S_{12}=\dfrac{12\,(250000+140000)}{2}=2340000\)</span>`
        },
        {
          tipo: 'ejemplo', titulo: 'Sumatorias y conteos rápidos',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(\sum_{i=1}^{100} i=\frac{100\cdot 101}{2}=5050\).</div></div>
<div class="paso"><span class="paso-n">2</span><div>\(\sum_{i=1}^{3}(2i+1)=3+5+7=15\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>Patentes con 4 letras (26 opciones) y 2 dígitos (10 opciones): \(26^4\cdot 10^2=45697600\) combinaciones.</div></div>`
        },
        {
          tipo: 'tip', titulo: 'Escribe los primeros términos',
          html: String.raw`<p>Antes de usar cualquier fórmula con una sumatoria, escribe a mano los tres primeros términos. Así ves qué estás sumando y detectas si la fórmula es la correcta.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Progresión 5, 8, 11, 14, … ¿Cuál es el término 20?</p>`, respuesta: 62, pista: 'a₁ + 19·d.', solucion: String.raw`<p>\(5+19\cdot 3=62\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Suma de los primeros 20 términos de esa progresión.</p>`, respuesta: 670, pista: 'n(a₁ + aₙ)/2.', solucion: String.raw`<p>\(\frac{20(5+62)}{2}=670\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Progresión geométrica 2, 6, 18, … ¿Cuál es el término 5?</p>`, respuesta: 162, pista: '2 · 3⁴.', solucion: String.raw`<p>\(2\cdot 81=162\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(\displaystyle\sum_{i=1}^{5}(2i+1)\)</p>`, respuesta: 35, pista: 'Escribe los cinco términos.', solucion: String.raw`<p>\(3+5+7+9+11=35\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(\displaystyle\sum_{i=1}^{50} i\)</p>`, respuesta: 1275, pista: 'Fórmula de Gauss.', solucion: String.raw`<p>\(\frac{50\cdot 51}{2}=1275\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Un producto viene en 4 tamaños, 5 colores y 2 materiales. ¿Cuántas variantes hay?</p>`, respuesta: 40, pista: 'Multiplica.', solucion: String.raw`<p>\(4\cdot 5\cdot 2=40\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>¿De cuántas formas se pueden ordenar 4 tareas en una máquina?</p>`, respuesta: 24, pista: '4!.', solucion: String.raw`<p>\(4\cdot 3\cdot 2\cdot 1=24\).</p>` }
      ],
      cuaderno: [
        'Escribe las fórmulas de progresión aritmética y geométrica con un ejemplo de cada una.',
        'Desarrolla la sumatoria de (2i + 1) desde i = 1 hasta 5 término a término y súmala.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Escribe el promedio de 5 notas con notación de sumatoria.'
      ],
      videos: [
        { titulo: 'Progresiones aritméticas y geométricas', q: 'julioprofe progresiones aritmeticas y geometricas' },
        { titulo: 'Notación de sumatoria (sigma)', q: 'profe alex notacion sumatoria sigma explicacion' }
      ],
      cierre: 'Una sumatoria es una suma con uniforme. Escribe los primeros términos y deja de temerle al símbolo.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '10.5',
      titulo: 'Repaso y mini test de la semana 10',
      duracion: 60,
      tipo: 'test',
      objetivo: 'Cerrar el bloque D: lógica proposicional, condicionales, conjuntos y sumatorias.',
      intro: String.raw`<p><strong>Repasa 10 minutos</strong> con el cuaderno cerrado:</p>
<ul>
<li>¿Cuándo es falsa una "y"? ¿Y una "o"? ¿Y un "si… entonces"?</li>
<li>¿Cuáles son los dos argumentos válidos?</li>
<li>¿Cómo se cuenta una unión?</li>
<li>¿Qué es una progresión aritmética?</li>
</ul>
<p>Luego resuelve las 10 preguntas en el cuaderno y marca aquí. <strong>Meta: 8 de 10.</strong></p>`,
      ejercicios: [
        { tipo: 'opcion', area: 'Proposiciones (10.1)', enunciado: String.raw`<p>Si \(p=V\) y \(q=F\), ¿cuánto vale \(p\wedge\neg q\)?</p>`, opciones: ['Verdadero', 'Falso'], correcta: 0, solucion: String.raw`<p>\(\neg q=V\), y \(V\wedge V=V\).</p>` },
        { tipo: 'opcion', area: 'Proposiciones (10.1)', enunciado: String.raw`<p>La negación de "hay stock o hay proveedor" es:</p>`, opciones: ['No hay stock y no hay proveedor', 'No hay stock o no hay proveedor', 'Hay stock y hay proveedor'], correcta: 0, solucion: String.raw`<p>De Morgan: la "o" negada se vuelve "y".</p>` },
        { tipo: 'opcion', area: 'Condicionales (10.2)', enunciado: String.raw`<p>"Si \(x>10\), la pieza se rechaza. \(x=12\)." Conclusión:</p>`, opciones: ['Se rechaza', 'Nada con seguridad', 'No se rechaza'], correcta: 0, solucion: String.raw`<p>Modus ponens: ocurre la hipótesis, ocurre la conclusión.</p>` },
        { tipo: 'opcion', area: 'Condicionales (10.2)', enunciado: String.raw`<p>"Si \(x>10\), la pieza se rechaza. No se rechazó." Conclusión:</p>`, opciones: [String.raw`\(x>10\)`, String.raw`\(x\le 10\)`, 'Nada con seguridad'], correcta: 1, solucion: String.raw`<p>Modus tollens: si no ocurrió la conclusión, no ocurrió la hipótesis.</p>` },
        { tipo: 'opcion', area: 'Condicionales (10.2)', enunciado: String.raw`<p>La negación de "existe un lote defectuoso" es:</p>`, opciones: ['Existe un lote no defectuoso', 'Todos los lotes son defectuosos', 'Ningún lote es defectuoso'], correcta: 2, solucion: String.raw`<p>Negar "existe" es "ninguno".</p>` },
        { tipo: 'num', area: 'Conjuntos (10.3)', enunciado: String.raw`<p>\(|A|=40\), \(|B|=35\), \(|A\cap B|=20\). ¿\(|A\cup B|\)?</p>`, respuesta: 55, solucion: String.raw`<p>\(40+35-20=55\).</p>` },
        { tipo: 'num', area: 'Conjuntos (10.3)', enunciado: String.raw`<p>De 100 clientes, 60 compran online, 50 en tienda y 25 en ambos canales. ¿Cuántos no compran en ninguno?</p>`, respuesta: 15, solucion: String.raw`<p>Unión \(=60+50-25=85\); \(100-85=15\).</p>` },
        { tipo: 'num', area: 'Sucesiones y sumatorias (10.4)', enunciado: String.raw`<p>Progresión 3, 7, 11, … ¿término 15?</p>`, respuesta: 59, solucion: String.raw`<p>\(3+14\cdot 4=59\).</p>` },
        { tipo: 'num', area: 'Sucesiones y sumatorias (10.4)', enunciado: String.raw`<p>\(\displaystyle\sum_{i=1}^{4} i^2\)</p>`, respuesta: 30, solucion: String.raw`<p>\(1+4+9+16=30\).</p>` },
        { tipo: 'num', area: 'Sucesiones y sumatorias (10.4)', enunciado: String.raw`<p>3 modelos, 6 colores y 2 acabados. ¿Cuántas combinaciones?</p>`, respuesta: 36, solucion: String.raw`<p>\(3\cdot 6\cdot 2=36\).</p>` }
      ],
      cuaderno: [
        'Haz la hoja resumen de la semana 10: tablas de ∧, ∨ y →, De Morgan, argumentos válidos, fórmula de la unión, progresiones y sumatoria.',
        'Resuelve el test completo en el cuaderno antes de responder en pantalla.',
        'Anota tu puntaje y las preguntas falladas.',
        'Escribe tres situaciones de tu trabajo donde alguien haya "afirmado el consecuente" sin darse cuenta.'
      ],
      videos: [
        { titulo: 'Ejercicios de lógica proposicional resueltos', q: 'ejercicios resueltos logica proposicional tablas de verdad argumentos' }
      ],
      cierre: 'Fin del Bloque D. Pensar con precisión también es matemática. Ahora, la probada de cálculo.'
    }
  ]
});
