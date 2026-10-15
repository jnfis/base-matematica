/* Semana 9 · Geometría y trigonometría */
CURSO.semana({
  n: 9,
  bloque: 'D',
  titulo: 'Geometría y trigonometría',
  subtitulo: 'Perímetros, áreas y volúmenes, Pitágoras, semejanza, seno, coseno y tangente, y una primera mirada a los radianes.',
  meta: 'Mecánica descompone fuerzas con seno y coseno; Electromagnetismo y Ondas vive de las funciones trigonométricas; y cualquier cálculo de bodegas, estanques o terrenos necesita áreas y volúmenes. Es la semana más visual del plan.',
  resumen: [
    { t: 'Rectángulo', f: String.raw`A=b\cdot h,\qquad P=2b+2h` },
    { t: 'Triángulo', f: String.raw`A=\frac{b\cdot h}{2}` },
    { t: 'Círculo', f: String.raw`A=\pi r^2,\qquad P=2\pi r` },
    { t: 'Volumen de caja y de cilindro', f: String.raw`V=l\cdot a\cdot h,\qquad V=\pi r^2 h` },
    { t: 'Pitágoras', f: String.raw`c^2=a^2+b^2` },
    { t: 'Distancia entre dos puntos', f: String.raw`d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}` },
    { t: 'Razones trigonométricas', f: String.raw`\sin\theta=\frac{\text{op}}{\text{hip}},\quad \cos\theta=\frac{\text{ady}}{\text{hip}},\quad \tan\theta=\frac{\text{op}}{\text{ady}}` },
    { t: 'Valores notables', f: String.raw`\sin 30°=\tfrac12,\quad \cos 60°=\tfrac12,\quad \tan 45°=1,\quad \sin 45°=\tfrac{\sqrt2}{2}` },
    { t: 'Grados a radianes', f: String.raw`\text{rad}=\text{grados}\cdot\frac{\pi}{180},\qquad \pi\ \text{rad}=180°` }
  ],
  sesiones: [
    /* ------------------------------------------------------------------ */
    {
      id: '9.1',
      titulo: 'Perímetro, área y volumen',
      duracion: 60,
      objetivo: 'Calcular perímetros, áreas y volúmenes de figuras básicas, con las unidades correctas.',
      porque: 'Cuánta pintura, cuánto piso, cuánto cabe en un estanque, cuántos pallets entran en una bodega: todo son áreas y volúmenes. En Química Industrial y Termodinámica los volúmenes aparecen en cada problema.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Perímetro y área',
          html: String.raw`<p>El <strong>perímetro</strong> es el contorno (se mide en metros). El <strong>área</strong> es la superficie (en metros cuadrados).</p>
<table class="mini-tabla">
<tr><th>Figura</th><th>Área</th><th>Perímetro</th></tr>
<tr><td>Rectángulo (base \(b\), altura \(h\))</td><td>\(b\cdot h\)</td><td>\(2b+2h\)</td></tr>
<tr><td>Cuadrado (lado \(l\))</td><td>\(l^2\)</td><td>\(4l\)</td></tr>
<tr><td>Triángulo (base \(b\), altura \(h\))</td><td>\(\dfrac{b\cdot h}{2}\)</td><td>suma de los lados</td></tr>
<tr><td>Círculo (radio \(r\))</td><td>\(\pi r^2\)</td><td>\(2\pi r\)</td></tr>
<tr><td>Trapecio (bases \(B\), \(b\), altura \(h\))</td><td>\(\dfrac{(B+b)\cdot h}{2}\)</td><td>suma de los lados</td></tr>
</table>
<p>\(\pi\approx 3{,}1416\). La altura siempre es perpendicular a la base.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Volumen',
          html: String.raw`<p>El volumen es el espacio que ocupa un cuerpo (metros cúbicos). Caja: \(V=l\cdot a\cdot h\). Cubo: \(V=l^3\). Cilindro: \(V=\pi r^2 h\) (área de la base por la altura).</p>
<p>Recuerda de la semana 2: \(1\ \text{m}^3=1000\) litros y \(1\) litro \(=1000\ \text{cm}^3\).</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Un galpón, un estanque, un triángulo',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>Galpón de 12 m por 8 m. Perímetro \(2\cdot 12+2\cdot 8=40\) m (para el cerco). Área \(12\cdot 8=96\) m² (para el piso).</div></div>
<div class="paso"><span class="paso-n">2</span><div>Estanque cilíndrico de radio 1 m y altura 2 m. \(V=\pi\cdot 1^2\cdot 2\approx 6{,}28\) m³, es decir, 6.280 litros.</div></div>
<div class="paso"><span class="paso-n">3</span><div>Triángulo de base 10 cm y altura 6 cm: área \(\frac{10\cdot 6}{2}=30\) cm².</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'Figuras compuestas',
          html: String.raw`<p>Un galpón con forma de L se parte en dos rectángulos: uno de 12 × 8 y otro de 4 × 5. Área total: \(96+20=116\) m². Cualquier figura rara se descompone en figuras conocidas, o se resta un pedazo a una figura grande.</p>`
        },
        {
          tipo: 'error', titulo: 'Unidades mezcladas y el radio',
          html: String.raw`<p>Si un lado está en centímetros y otro en metros, convierte todo antes de multiplicar. Y el área del círculo usa el <strong>radio</strong>: si te dan el diámetro, divide por 2 primero.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Área de un rectángulo de 7,5 m por 4 m.</p>`, respuesta: 30, unidad: 'm²', pista: 'Base por altura.', solucion: String.raw`<p>\(7{,}5\cdot 4=30\) m².</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Perímetro de ese rectángulo.</p>`, respuesta: 23, unidad: 'm', pista: '2b + 2h.', solucion: String.raw`<p>\(15+8=23\) m.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Área de un triángulo de base 12 cm y altura 5 cm.</p>`, respuesta: 30, unidad: 'cm²', pista: 'Base por altura, dividido por 2.', solucion: String.raw`<p>\(\frac{12\cdot 5}{2}=30\) cm².</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Área de un círculo de radio 3 m (usa \(\pi\approx 3{,}14\), dos decimales).</p>`, respuesta: 28.26, tol: 0.05, unidad: 'm²', pista: 'π · 3².', solucion: String.raw`<p>\(3{,}14\cdot 9=28{,}26\) m².</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Volumen de una caja de 2 m por 1,5 m por 0,8 m.</p>`, respuesta: 2.4, tol: 0.01, unidad: 'm³', pista: 'Multiplica las tres medidas.', solucion: String.raw`<p>\(2\cdot 1{,}5\cdot 0{,}8=2{,}4\) m³.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Un estanque cilíndrico tiene radio 0,5 m y altura 2 m. ¿Cuántos litros caben? (\(\pi\approx 3{,}14\))</p>`, respuesta: 1570, tol: 10, unidad: 'L', pista: 'Calcula el volumen en m³ y multiplica por 1000.', solucion: String.raw`<p>\(3{,}14\cdot 0{,}25\cdot 2=1{,}57\) m³ \(=1570\) litros.</p>` }
      ],
      cuaderno: [
        'Escribe las fórmulas de área y volumen con un dibujo de cada figura.',
        'Mide una pieza de tu casa (largo, ancho, alto) y calcula el área del piso y el volumen de aire.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Dibuja un galpón en forma de L con medidas inventadas y calcula su área de dos formas (sumando o restando rectángulos).'
      ],
      videos: [
        { titulo: 'Áreas y perímetros de figuras geométricas', q: 'daniel carreon areas y perimetros de figuras geometricas' },
        { titulo: 'Volumen de un cilindro', q: 'julioprofe volumen de un cilindro' }
      ],
      cierre: 'Perímetro en metros, área en metros cuadrados, volumen en metros cúbicos. Si la unidad no calza, la fórmula tampoco.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '9.2',
      titulo: 'Pitágoras y semejanza',
      duracion: 60,
      objetivo: 'Usar el teorema de Pitágoras para calcular lados y distancias, y resolver problemas con triángulos semejantes y escalas.',
      porque: 'Distancias en planos, longitud de rampas y cables, descomposición de fuerzas en Mecánica: todo empieza en Pitágoras. La semejanza es la base de las escalas y de la trigonometría.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Teorema de Pitágoras',
          html: String.raw`<p>En un triángulo <strong>rectángulo</strong> (con un ángulo de 90°), el lado más largo se llama hipotenusa \(c\) y los otros dos, catetos \(a\) y \(b\):</p>
<span class="formula">\(c^2=a^2+b^2\qquad c=\sqrt{a^2+b^2}\qquad a=\sqrt{c^2-b^2}\)</span>
<p>Ternas que conviene reconocer: 3-4-5, 5-12-13, 6-8-10, 8-15-17.</p>`
        },
        {
          tipo: 'concepto', titulo: 'Distancia entre dos puntos',
          html: String.raw`<p>Es Pitágoras en el plano: la diferencia en \(x\) y la diferencia en \(y\) son los catetos.</p>
<span class="formula">\(d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\)</span>
<p>De \((1,2)\) a \((4,6)\): \(\sqrt{3^2+4^2}=\sqrt{25}=5\).</p>`
        },
        {
          tipo: 'concepto', titulo: 'Semejanza',
          html: String.raw`<p>Dos triángulos con los mismos ángulos tienen la misma forma y sus lados son <strong>proporcionales</strong>. Es la regla de tres (semana 2) aplicada a figuras: una sombra, un plano a escala, una maqueta.</p>
<p>Si la razón de semejanza es \(k\), los lados se multiplican por \(k\) y las áreas por \(k^2\): un plano a escala 1:100 tiene áreas 10.000 veces más chicas.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Rampas, cables y sombras',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>Una rampa sube 1,5 m a lo largo de 4 m horizontales. Su largo es \(\sqrt{1{,}5^2+4^2}=\sqrt{2{,}25+16}=\sqrt{18{,}25}\approx 4{,}27\) m.</div></div>
<div class="paso"><span class="paso-n">2</span><div>Un cable de 13 m va desde el tope de un poste de 12 m hasta el suelo. Toca el suelo a \(\sqrt{169-144}=5\) m del pie del poste.</div></div>
<div class="paso"><span class="paso-n">3</span><div>Un poste de 2 m da una sombra de 3 m. Un edificio da una sombra de 24 m a la misma hora: su altura es \(\frac{2\cdot 24}{3}=16\) m (triángulos semejantes).</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: '¿Cabe la viga?',
          html: String.raw`<p>Una bodega mide 12 m por 8 m. ¿Se puede apoyar en el piso una viga de 15 m en diagonal? La diagonal mide \(\sqrt{144+64}=\sqrt{208}\approx 14{,}4\) m. No cabe: faltan 60 cm.</p>`
        },
        {
          tipo: 'error', titulo: 'Dos descuidos',
          html: String.raw`<p>Pitágoras solo funciona si hay un ángulo recto. Y no olvides la raíz al final: \(c^2=25\) significa \(c=5\), no 25.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>Un triángulo rectángulo tiene catetos 6 y 8. ¿Cuánto mide la hipotenusa?</p>`, respuesta: 10, pista: '√(36 + 64).', solucion: String.raw`<p>\(\sqrt{100}=10\). Es la terna 6-8-10.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>La hipotenusa mide 13 y un cateto 5. ¿Cuánto mide el otro cateto?</p>`, respuesta: 12, pista: '√(169 − 25).', solucion: String.raw`<p>\(\sqrt{144}=12\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Distancia entre los puntos \((0,0)\) y \((6,8)\).</p>`, respuesta: 10, pista: 'Catetos 6 y 8.', solucion: String.raw`<p>\(\sqrt{36+64}=10\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Una escalera de 5 m se apoya en una pared con su pie a 3 m de ella. ¿A qué altura llega?</p>`, respuesta: 4, unidad: 'm', pista: 'La escalera es la hipotenusa.', solucion: String.raw`<p>\(\sqrt{25-9}=4\) m.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Un poste de 2 m proyecta una sombra de 3 m. A la misma hora, un árbol proyecta una sombra de 10,5 m. ¿Cuánto mide el árbol?</p>`, respuesta: 7, unidad: 'm', pista: 'Proporción: 2/3 = h/10,5.', solucion: String.raw`<p>\(h=\frac{2\cdot 10{,}5}{3}=7\) m.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Diagonal de un rectángulo de 9 m por 12 m.</p>`, respuesta: 15, unidad: 'm', pista: 'Terna 9-12-15 (el triple de 3-4-5).', solucion: String.raw`<p>\(\sqrt{81+144}=\sqrt{225}=15\) m.</p>` }
      ],
      cuaderno: [
        'Dibuja un triángulo rectángulo, marca la hipotenusa y escribe el teorema.',
        'Verifica Pitágoras con las ternas 3-4-5 y 5-12-13.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Mide la diagonal de una hoja o una mesa y compárala con la que da Pitágoras.'
      ],
      videos: [
        { titulo: 'Teorema de Pitágoras', q: 'julioprofe teorema de pitagoras' },
        { titulo: 'Semejanza de triángulos', q: 'profe alex semejanza de triangulos' }
      ],
      cierre: 'Si hay un ángulo recto, hay Pitágoras. Si hay dos triángulos con la misma forma, hay proporción.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '9.3',
      titulo: 'Seno, coseno y tangente',
      duracion: 60,
      objetivo: 'Definir las razones trigonométricas en un triángulo rectángulo, usarlas para calcular lados y ángulos, y resolver problemas de elevación y pendientes.',
      porque: 'En Mecánica vas a descomponer cada fuerza en componentes con seno y coseno. Si estas tres razones te resultan naturales, ese ramo pierde la mitad de su dificultad.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'Las tres razones',
          html: String.raw`<p>En un triángulo rectángulo, fija un ángulo agudo \(\theta\). El cateto <strong>opuesto</strong> es el que no toca a \(\theta\); el <strong>adyacente</strong> es el que sí lo toca (y no es la hipotenusa).</p>
<span class="formula">\(\sin\theta=\dfrac{\text{opuesto}}{\text{hipotenusa}}\qquad \cos\theta=\dfrac{\text{adyacente}}{\text{hipotenusa}}\qquad \tan\theta=\dfrac{\text{opuesto}}{\text{adyacente}}\)</span>
<p>Para recordarlo: <strong>SOH-CAH-TOA</strong>. Estas razones dependen solo del ángulo, no del tamaño del triángulo (semejanza).</p>`
        },
        {
          tipo: 'concepto', titulo: 'Valores notables y la calculadora',
          html: String.raw`<table class="mini-tabla">
<tr><th>\(\theta\)</th><td>30°</td><td>45°</td><td>60°</td></tr>
<tr><th>\(\sin\theta\)</th><td>0,5</td><td>0,707</td><td>0,866</td></tr>
<tr><th>\(\cos\theta\)</th><td>0,866</td><td>0,707</td><td>0,5</td></tr>
<tr><th>\(\tan\theta\)</th><td>0,577</td><td>1</td><td>1,732</td></tr>
</table>
<p>Para los demás ángulos, calculadora en modo <strong>grados (DEG)</strong>. Para encontrar un ángulo a partir de una razón, usa las teclas inversas: \(\sin^{-1}\), \(\cos^{-1}\), \(\tan^{-1}\).</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Calcular lados y ángulos',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>Hipotenusa 10 y ángulo 30°. Opuesto \(=10\cdot\sin 30°=5\). Adyacente \(=10\cdot\cos 30°\approx 8{,}66\).</div></div>
<div class="paso"><span class="paso-n">2</span><div>Opuesto 6 y adyacente 8. \(\tan\theta=0{,}75\), así que \(\theta=\tan^{-1}(0{,}75)\approx 36{,}9°\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>Una rampa con pendiente del 8 % sube 8 por cada 100 horizontales: \(\tan\theta=0{,}08\), \(\theta\approx 4{,}6°\).</div></div>`
        },
        {
          tipo: 'ejemplo', titulo: 'Componentes de una fuerza',
          html: String.raw`<p>Una fuerza de 100 N tira de una caja con un ángulo de 30° sobre la horizontal. ¿Cuánto de esa fuerza empuja hacia adelante y cuánto hacia arriba?</p>
<span class="formula">\(F_x=100\cdot\cos 30°\approx 86{,}6\ \text{N}\qquad F_y=100\cdot\sin 30°=50\ \text{N}\)</span>
<p>Esto es exactamente lo que harás en Mecánica en el semestre 3, con cada fuerza de cada problema.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Ángulo de elevación',
          html: String.raw`<p>Desde un punto a 50 m del pie de una torre, el tope se ve con un ángulo de 40° sobre la horizontal. La altura es el cateto opuesto y los 50 m el adyacente: \(h=50\cdot\tan 40°\approx 42\) m.</p>`
        },
        {
          tipo: 'error', titulo: 'La calculadora en radianes',
          html: String.raw`<p>Si \(\sin 30\) te da \(-0{,}988\), la calculadora está en radianes. Cámbiala a DEG. Y revisa siempre cuál cateto es el opuesto: el que está <em>enfrente</em> del ángulo.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>\(\sin 30°\)</p>`, respuesta: 0.5, tol: 0.001, pista: 'Valor notable.', solucion: String.raw`<p>\(\sin 30°=0{,}5\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Triángulo rectángulo con hipotenusa 20 y un ángulo de 30°. ¿Cuánto mide el cateto opuesto a ese ángulo?</p>`, respuesta: 10, pista: '20 · sen 30°.', solucion: String.raw`<p>\(20\cdot 0{,}5=10\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>En el mismo triángulo, ¿cuánto mide el cateto adyacente? (dos decimales)</p>`, respuesta: 17.32, tol: 0.02, pista: '20 · cos 30°.', solucion: String.raw`<p>\(20\cdot 0{,}866=17{,}32\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Una fuerza de 200 N actúa a 60° sobre la horizontal. ¿Cuál es su componente vertical? (dos decimales)</p>`, respuesta: 173.21, tol: 0.05, unidad: 'N', pista: '200 · sen 60°.', solucion: String.raw`<p>\(200\cdot 0{,}866=173{,}21\) N.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Desde 30 m del pie de un poste, el tope se ve con un ángulo de 45°. ¿Cuánto mide el poste?</p>`, respuesta: 30, unidad: 'm', pista: 'tan 45° = 1.', solucion: String.raw`<p>\(h=30\cdot\tan 45°=30\) m.</p>` },
        { tipo: 'num', enunciado: String.raw`<p>El cateto opuesto mide 6 y el adyacente 8. ¿Cuánto vale \(\tan\theta\)?</p>`, respuesta: 0.75, tol: 0.001, pista: 'Opuesto sobre adyacente.', solucion: String.raw`<p>\(\frac{6}{8}=0{,}75\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Si \(\tan\theta=1\), ¿cuánto mide \(\theta\) en grados?</p>`, respuesta: 45, unidad: '°', pista: 'Opuesto igual al adyacente.', solucion: String.raw`<p>\(\theta=45°\).</p>` }
      ],
      cuaderno: [
        'Dibuja un triángulo rectángulo con θ marcado y escribe las tres razones con SOH-CAH-TOA.',
        'Copia la tabla de valores notables (30°, 45°, 60°).',
        'Resuelve los ejercicios a mano, con la calculadora en modo DEG.',
        'Descompón una fuerza de 100 N a 30° en sus dos componentes y dibuja el resultado con flechas.'
      ],
      videos: [
        { titulo: 'Razones trigonométricas: seno, coseno y tangente', q: 'julioprofe razones trigonometricas seno coseno tangente' },
        { titulo: 'Problemas de ángulo de elevación', q: 'profe alex problemas angulo de elevacion trigonometria' }
      ],
      cierre: 'Seno: opuesto sobre hipotenusa. Coseno: adyacente sobre hipotenusa. Tangente: opuesto sobre adyacente. Y la calculadora en grados.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '9.4',
      titulo: 'Radianes y el círculo unitario',
      duracion: 60,
      objetivo: 'Convertir entre grados y radianes, ubicar ángulos en el círculo unitario y entender el seno como una onda.',
      porque: 'Cálculo trabaja en radianes, no en grados. Y Electromagnetismo y Ondas describe señales y vibraciones con la función seno. Esta sesión es un puente hacia los dos.',
      bloques: [
        {
          tipo: 'concepto', titulo: 'El radián',
          html: String.raw`<p>Un radián es el ángulo cuyo arco mide lo mismo que el radio. Una vuelta completa tiene \(2\pi\) radianes, así que:</p>
<span class="formula">\(\pi\ \text{rad}=180°\qquad \text{rad}=\text{grados}\cdot\dfrac{\pi}{180}\qquad \text{grados}=\text{rad}\cdot\dfrac{180}{\pi}\)</span>
<p>\(90°=\frac{\pi}{2}\), \(60°=\frac{\pi}{3}\), \(45°=\frac{\pi}{4}\), \(30°=\frac{\pi}{6}\). Un radián son unos 57,3°. Un ángulo escrito sin unidad ("2") está en radianes.</p>`
        },
        {
          tipo: 'concepto', titulo: 'El círculo unitario',
          html: String.raw`<p>Dibuja un círculo de radio 1. Un ángulo \(\theta\) medido desde el eje \(x\) marca un punto del círculo cuyas coordenadas son \((\cos\theta,\ \sin\theta)\).</p>
<p>Así, seno y coseno existen para <strong>cualquier</strong> ángulo, no solo para los de un triángulo: \(\sin 90°=1\), \(\cos 180°=-1\), \(\sin 270°=-1\). Los signos dependen del cuadrante: arriba el seno es positivo, abajo negativo; a la derecha el coseno es positivo, a la izquierda negativo.</p>`
        },
        {
          tipo: 'concepto', titulo: 'El seno como onda',
          html: String.raw`<p>Si el punto gira y anotas su altura (\(\sin\theta\)) a medida que avanza el ángulo, obtienes una onda que sube hasta 1, baja hasta \(-1\) y se repite cada \(2\pi\).</p>
<svg viewBox="0 0 320 200" width="100%" style="max-width:380px;display:block;margin:8px auto" role="img" aria-label="Gráfico de la función seno entre 0 y 2π">
<line x1="30" y1="100" x2="300" y2="100" stroke="currentColor" stroke-opacity="0.35"/>
<line x1="40" y1="20" x2="40" y2="180" stroke="currentColor" stroke-opacity="0.35"/>
<polyline fill="none" stroke="var(--primary)" stroke-width="2" stroke-linejoin="round" points="40,100 60,70 80,48 100,40 120,48 140,70 160,100 180,130 200,152 220,160 240,152 260,130 280,100"/>
<g font-size="10" fill="currentColor"><text x="36" y="114">0</text><text x="92" y="114">π/2</text><text x="156" y="114">π</text><text x="210" y="114">3π/2</text><text x="272" y="114">2π</text><text x="20" y="44">1</text><text x="14" y="164">−1</text></g>
</svg>
<p>Con \(y=A\sin(Bx)\), \(A\) es la amplitud (cuánto sube) y \(B\) cambia el período (cuán seguido se repite). Corriente alterna, vibraciones, mareas y sonido se describen así.</p>`
        },
        {
          tipo: 'ejemplo', titulo: 'Conversiones y un motor',
          html: String.raw`<div class="paso"><span class="paso-n">1</span><div>\(120°\) en radianes: \(120\cdot\frac{\pi}{180}=\frac{2\pi}{3}\approx 2{,}09\).</div></div>
<div class="paso"><span class="paso-n">2</span><div>\(\frac{\pi}{4}\) en grados: \(\frac{\pi}{4}\cdot\frac{180}{\pi}=45°\).</div></div>
<div class="paso"><span class="paso-n">3</span><div>\(\sin\frac{\pi}{2}=\sin 90°=1\); \(\cos\pi=\cos 180°=-1\).</div></div>
<div class="paso"><span class="paso-n">4</span><div>Un motor gira a 1.800 vueltas por minuto. Cada vuelta son \(2\pi\) radianes: \(1800\cdot 2\pi\approx 11310\) rad/min. Así se mide la velocidad angular en Mecánica.</div></div>`
        },
        {
          tipo: 'tip', titulo: 'Para no perderse con los radianes',
          html: String.raw`<p>Recuerda una sola cosa: \(\pi\approx 3{,}14\) radianes son 180°. De ahí sale todo: la mitad (\(\pi/2\)) son 90°, el doble (\(2\pi\)) es la vuelta completa.</p>`
        }
      ],
      ejercicios: [
        { tipo: 'num', enunciado: String.raw`<p>60° en radianes (dos decimales).</p>`, respuesta: 1.05, tol: 0.01, pista: '60 · π / 180.', solucion: String.raw`<p>\(\frac{\pi}{3}\approx 1{,}05\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(\dfrac{\pi}{2}\) radianes en grados.</p>`, respuesta: 90, unidad: '°', pista: 'La mitad de 180.', solucion: String.raw`<p>\(90°\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>270° en radianes es un múltiplo de \(\pi\). Escribe solo el coeficiente (por ejemplo, 0,5 para \(\pi/2\)).</p>`, respuesta: 1.5, tol: 0.01, pista: '270/180.', solucion: String.raw`<p>\(270°=\frac{3\pi}{2}=1{,}5\pi\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(\sin 90°\)</p>`, respuesta: 1, pista: 'El punto más alto del círculo.', solucion: String.raw`<p>\(\sin 90°=1\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>\(\cos 180°\)</p>`, respuesta: -1, pista: 'El punto más a la izquierda del círculo.', solucion: String.raw`<p>\(\cos 180°=-1\).</p>` },
        { tipo: 'opcion', enunciado: String.raw`<p>\(y=3\sin x\) oscila entre:</p>`, opciones: [String.raw`\(0\) y \(3\)`, String.raw`\(-3\) y \(3\)`, String.raw`\(-1\) y \(1\)`], correcta: 1, pista: 'El seno va de −1 a 1; multiplícalo por 3.', solucion: String.raw`<p>Amplitud 3: entre \(-3\) y \(3\).</p>` },
        { tipo: 'num', enunciado: String.raw`<p>Un motor gira a 600 vueltas por minuto. ¿Cuántos radianes gira por minuto? (\(\pi\approx 3{,}14\), redondea al entero)</p>`, respuesta: 3768, tol: 10, unidad: 'rad/min', pista: 'Cada vuelta son 2π radianes.', solucion: String.raw`<p>\(600\cdot 2\cdot 3{,}14=3768\) rad/min.</p>` }
      ],
      cuaderno: [
        'Dibuja el círculo unitario con los ángulos 0°, 30°, 45°, 60°, 90°, 180°, 270° y 360°, y sus radianes.',
        'Escribe la conversión grados ↔ radianes y aplícala a cinco ángulos.',
        'Resuelve los ejercicios a mano antes de comprobarlos.',
        'Dibuja la onda y = sen(x) de 0 a 2π marcando dónde vale 1, 0 y −1.'
      ],
      videos: [
        { titulo: 'Conversión de grados a radianes', q: 'julioprofe conversion de grados a radianes' },
        { titulo: 'Círculo unitario explicado', q: 'profe alex circulo unitario trigonometrico' }
      ],
      cierre: 'π radianes son 180 grados. El seno de un ángulo es la altura de un punto que gira. Con eso entiendes las ondas.'
    },

    /* ------------------------------------------------------------------ */
    {
      id: '9.5',
      titulo: 'Repaso y mini test de la semana 9',
      duracion: 60,
      tipo: 'test',
      objetivo: 'Comprobar áreas y volúmenes, Pitágoras, razones trigonométricas y radianes.',
      intro: String.raw`<p><strong>Repasa 10 minutos</strong> con el cuaderno cerrado:</p>
<ul>
<li>Área del triángulo, del círculo y volumen del cilindro.</li>
<li>¿Cuándo se puede usar Pitágoras?</li>
<li>SOH-CAH-TOA: ¿qué significa cada letra?</li>
<li>¿Cuántos grados son π radianes?</li>
</ul>
<p>Luego resuelve las 10 preguntas en el cuaderno (calculadora en DEG) y marca aquí. <strong>Meta: 8 de 10.</strong></p>`,
      ejercicios: [
        { tipo: 'num', area: 'Áreas y volúmenes (9.1)', enunciado: String.raw`<p>Área de un rectángulo de 9 m por 6 m.</p>`, respuesta: 54, unidad: 'm²', solucion: String.raw`<p>\(9\cdot 6=54\).</p>` },
        { tipo: 'num', area: 'Áreas y volúmenes (9.1)', enunciado: String.raw`<p>Volumen de una caja de 3 m por 2 m por 1,5 m.</p>`, respuesta: 9, unidad: 'm³', solucion: String.raw`<p>\(3\cdot 2\cdot 1{,}5=9\).</p>` },
        { tipo: 'num', area: 'Áreas y volúmenes (9.1)', enunciado: String.raw`<p>Área de un círculo de radio 2 m (\(\pi\approx 3{,}14\), dos decimales).</p>`, respuesta: 12.56, tol: 0.05, unidad: 'm²', solucion: String.raw`<p>\(3{,}14\cdot 4=12{,}56\).</p>` },
        { tipo: 'num', area: 'Pitágoras y semejanza (9.2)', enunciado: String.raw`<p>Catetos 9 y 12. Hipotenusa.</p>`, respuesta: 15, solucion: String.raw`<p>\(\sqrt{81+144}=15\).</p>` },
        { tipo: 'num', area: 'Pitágoras y semejanza (9.2)', enunciado: String.raw`<p>Un poste de 1,5 m da una sombra de 2 m. Un edificio da una sombra de 20 m. ¿Altura del edificio?</p>`, respuesta: 15, unidad: 'm', solucion: String.raw`<p>\(\frac{1{,}5\cdot 20}{2}=15\) m.</p>` },
        { tipo: 'num', area: 'Trigonometría (9.3)', enunciado: String.raw`<p>Hipotenusa 10 y ángulo de 60°. Cateto opuesto (dos decimales).</p>`, respuesta: 8.66, tol: 0.02, solucion: String.raw`<p>\(10\cdot\sin 60°=8{,}66\).</p>` },
        { tipo: 'num', area: 'Trigonometría (9.3)', enunciado: String.raw`<p>Cateto opuesto 5 y adyacente 5. ¿Cuánto mide el ángulo?</p>`, respuesta: 45, unidad: '°', solucion: String.raw`<p>\(\tan\theta=1\), \(\theta=45°\).</p>` },
        { tipo: 'num', area: 'Trigonometría (9.3)', enunciado: String.raw`<p>Una fuerza de 50 N a 30° sobre la horizontal. Componente horizontal (dos decimales).</p>`, respuesta: 43.3, tol: 0.05, unidad: 'N', solucion: String.raw`<p>\(50\cdot\cos 30°=43{,}30\) N.</p>` },
        { tipo: 'num', area: 'Radianes (9.4)', enunciado: String.raw`<p>180° en radianes (dos decimales).</p>`, respuesta: 3.14, tol: 0.01, solucion: String.raw`<p>\(\pi\approx 3{,}14\).</p>` },
        { tipo: 'num', area: 'Radianes (9.4)', enunciado: String.raw`<p>\(\sin 270°\)</p>`, respuesta: -1, solucion: String.raw`<p>El punto más bajo del círculo: \(-1\).</p>` }
      ],
      cuaderno: [
        'Haz la hoja resumen de la semana 9: áreas, volúmenes, Pitágoras, SOH-CAH-TOA, conversión a radianes.',
        'Resuelve el test completo en el cuaderno antes de responder en pantalla.',
        'Anota tu puntaje y las preguntas falladas.',
        'Si fallaste 3 o más, repite la sesión correspondiente antes de la semana 10.'
      ],
      videos: [
        { titulo: 'Ejercicios resueltos de trigonometría en triángulos rectángulos', q: 'ejercicios resueltos trigonometria triangulo rectangulo aplicaciones' }
      ],
      cierre: 'Con Pitágoras y tres razones resuelves cualquier triángulo. Mecánica te lo va a agradecer.'
    }
  ]
});
