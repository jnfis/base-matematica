/* ==========================================================================
   Base Matemática · estructura del plan
   Este archivo debe cargarse antes que las semanas.
   ========================================================================== */
window.CURSO = {
  nombre: 'Base Matemática',
  semanas: [],
  semana: function (s) { this.semanas.push(s); },

  bloques: [
    {
      letra: 'A', titulo: 'Números', semanas: [1, 2, 3],
      desc: 'Enteros, fracciones, decimales, porcentajes, potencias y el lenguaje del álgebra.',
      prepara: 'Introducción a la Matemática para la Ingeniería (semestre 1).'
    },
    {
      letra: 'B', titulo: 'Álgebra', semanas: [4, 5, 6],
      desc: 'Ecuaciones, despeje de fórmulas, factorización, cuadráticas, sistemas e inecuaciones.',
      prepara: 'Álgebra I (semestre 2) y la parte algebraica de Cálculo Diferencial.'
    },
    {
      letra: 'C', titulo: 'Funciones', semanas: [7, 8],
      desc: 'Qué es una función, rectas, parábolas, exponenciales, logaritmos y lectura de gráficos.',
      prepara: 'Cálculo Diferencial y Economía (semestre 2).'
    },
    {
      letra: 'D', titulo: 'Geometría, trigonometría y lógica', semanas: [9, 10],
      desc: 'Áreas y volúmenes, Pitágoras, seno y coseno, proposiciones, conjuntos y sumatorias.',
      prepara: 'Razonamiento Lógico (semestre 1), Mecánica (semestre 3) y Estadística (semestre 4).'
    },
    {
      letra: 'E', titulo: 'Probada de cálculo', semanas: [11, 12],
      desc: 'Límites, la derivada como tasa de cambio, reglas básicas, máximos y mínimos, idea de integral.',
      prepara: 'Cálculo Diferencial (semestre 2) y Cálculo Integral (semestre 3).'
    }
  ],

  canales: [
    { nombre: 'julioprofe', url: 'https://www.youtube.com/results?search_query=julioprofe', desc: 'Explica paso a paso, sin saltarse nada. Ideal para aritmética, álgebra y ecuaciones.' },
    { nombre: 'Matemáticas profe Alex', url: 'https://www.youtube.com/results?search_query=matematicas+profe+alex', desc: 'Cursos completos desde cero, ordenados por tema. Muy bueno para fracciones, funciones y cálculo.' },
    { nombre: 'Khan Academy en español', url: 'https://es.khanacademy.org/math', desc: 'Lecciones cortas con ejercicios interactivos. Útil para practicar más de lo que te deja el plan.' },
    { nombre: 'Math2me', url: 'https://www.youtube.com/results?search_query=math2me', desc: 'Videos breves y directos para repasar un tema puntual en cinco minutos.' },
    { nombre: 'Daniel Carreón', url: 'https://www.youtube.com/results?search_query=daniel+carreon+matematicas', desc: 'Explicaciones muy claras de lo básico: fracciones, porcentajes, regla de tres.' },
    { nombre: 'Khan Academy · Cálculo', url: 'https://es.khanacademy.org/math/calculus-1', desc: 'Para las semanas 11 y 12: límites y derivadas con animaciones.' }
  ]
};
