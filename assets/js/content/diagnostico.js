/* Diagnóstico inicial · 16 preguntas que recorren las 12 semanas */
CURSO.diagnostico = {
  titulo: '¿Dónde estás hoy?',
  intro: String.raw`<p>Responde <strong>sin ayuda</strong>: sin mirar las lecciones y sin calculadora, salvo para una raíz. No importa el puntaje; importa saber dónde estás.</p>
<p>Las preguntas van en el orden del plan, de la semana 1 a la 12. Es normal fallar las últimas: todavía no las has estudiado. Al final, pulsa <em>Ver mi resultado</em> y verás las semanas donde poner más atención.</p>
<p>Anota el resultado en la primera página de tu cuaderno. En la semana 12 lo vas a repetir.</p>`,
  ejercicios: [
    { tipo: 'num', area: 'Semana 1 · Números', enunciado: String.raw`<p>\(-7+12\)</p>`, respuesta: 5, solucion: String.raw`<p>Signos distintos: \(12-7=5\), positivo.</p>` },
    { tipo: 'num', area: 'Semana 1 · Números', enunciado: String.raw`<p>\(\dfrac{3}{4}-\dfrac{1}{2}\) (fracción o decimal)</p>`, respuesta: 0.25, placeholder: 'a/b', solucion: String.raw`<p>\(\frac{3}{4}-\frac{2}{4}=\frac{1}{4}\).</p>` },
    { tipo: 'num', area: 'Semana 1 · Números', enunciado: String.raw`<p>\(4+2\times 3^2\)</p>`, respuesta: 22, solucion: String.raw`<p>Potencia primero: \(4+2\cdot 9=22\).</p>` },
    { tipo: 'num', area: 'Semana 2 · Porcentajes y proporciones', enunciado: String.raw`<p>El 25 % de 480.</p>`, respuesta: 120, solucion: String.raw`<p>La cuarta parte: 120.</p>` },
    { tipo: 'num', area: 'Semana 2 · Porcentajes y proporciones', enunciado: String.raw`<p>6 kg cuestan $9.000. ¿Cuánto cuestan 10 kg?</p>`, respuesta: 15000, unidad: '$', solucion: String.raw`<p>\(1500\) por kilo; \(15000\).</p>` },
    { tipo: 'num', area: 'Semana 3 · Potencias y álgebra', enunciado: String.raw`<p>\(2^3\cdot 2^2\)</p>`, respuesta: 32, solucion: String.raw`<p>\(2^5=32\).</p>` },
    { tipo: 'num', area: 'Semana 3 · Potencias y álgebra', enunciado: String.raw`<p>Evalúa \(2x+5\) en \(x=-3\).</p>`, respuesta: -1, solucion: String.raw`<p>\(-6+5=-1\).</p>` },
    { tipo: 'num', area: 'Semana 4 · Ecuaciones', enunciado: String.raw`<p>\(5x-2=18\)</p>`, respuesta: 4, solucion: String.raw`<p>\(5x=20\), \(x=4\).</p>` },
    { tipo: 'texto', area: 'Semana 5 · Factorización', enunciado: String.raw`<p>Factoriza \(x^2-9\).</p>`, respuesta: ['(x+3)(x-3)', '(x-3)(x+3)'], compacto: true, placeholder: '(x+a)(x-a)', solucion: String.raw`<p>Diferencia de cuadrados: \((x+3)(x-3)\).</p>` },
    { tipo: 'num', area: 'Semana 6 · Cuadráticas y sistemas', enunciado: String.raw`<p>La solución positiva de \(x^2=36\).</p>`, respuesta: 6, solucion: String.raw`<p>\(x=\pm 6\); la positiva es 6.</p>` },
    { tipo: 'num', area: 'Semana 7 · Funciones', enunciado: String.raw`<p>Si \(f(x)=3x-1\), calcula \(f(4)\).</p>`, respuesta: 11, solucion: String.raw`<p>\(12-1=11\).</p>` },
    { tipo: 'num', area: 'Semana 7 · Funciones', enunciado: String.raw`<p>La pendiente de \(y=-2x+9\).</p>`, respuesta: -2, solucion: String.raw`<p>El coeficiente de \(x\): \(-2\).</p>` },
    { tipo: 'num', area: 'Semana 8 · Exponencial y logaritmos', enunciado: String.raw`<p>\(\log_{10}100\)</p>`, respuesta: 2, solucion: String.raw`<p>\(10^2=100\).</p>` },
    { tipo: 'num', area: 'Semana 9 · Geometría', enunciado: String.raw`<p>Un triángulo rectángulo tiene catetos 3 y 4. ¿Cuánto mide la hipotenusa?</p>`, respuesta: 5, solucion: String.raw`<p>\(\sqrt{9+16}=5\).</p>` },
    { tipo: 'opcion', area: 'Semana 10 · Lógica', enunciado: String.raw`<p>"Si llueve, se suspende el partido. El partido no se suspendió." ¿Qué se concluye?</p>`, opciones: ['Llovió', 'No llovió', 'Nada con seguridad'], correcta: 1, solucion: String.raw`<p>Si hubiera llovido, se habría suspendido. No se suspendió: no llovió.</p>` },
    { tipo: 'texto', area: 'Semanas 11 y 12 · Cálculo', enunciado: String.raw`<p>Deriva \(x^3\). Escribe los exponentes con ^ (por ejemplo, 2x^5).</p>`, respuesta: ['3x^2'], compacto: true, placeholder: 'ax^n', solucion: String.raw`<p>Baja el exponente y réstale uno: \(3x^2\).</p>` }
  ]
};
