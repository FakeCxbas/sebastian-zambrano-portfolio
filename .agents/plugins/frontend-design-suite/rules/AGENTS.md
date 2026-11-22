# Directrices de Diseño y Frontend para Agentes

Estas directrices son de cumplimiento obligatorio para todos los agentes de Antigravity al diseñar, crear, refactorizar o auditar interfaces de usuario y componentes web.

## 1. Prohibición de Patrones Genéricos de IA (Anti-Slop)
Salvo que el usuario lo solicite explícitamente, queda prohibido reproducir los clichés visuales habituales de código generado por IA:
- Paletas genéricas compuestas por fondos crema (#F4F1EA) con acentos terracota (#D97757) o negro mate con verde fosforescente.
- Empaquetar todo el contenido en tarjetas redondeadas idénticas con sombras difusas grises y degradados cosméticos.
- Subtítulos superiores ("eyebrows") en mayúsculas sostenidas espaciadas sobre cada título sin justificación funcional.
- Acentuar una sola palabra aleatoria en un titular con cursiva o color discordante.
- Marcadores numéricos ordinales (01, 02, 03) cuando el contenido no representa una secuencia temporal o de pasos.

## 2. Planificación Obligatoria Antes de Codificar
Para cualquier interfaz completa o rediseño estructural, el agente debe formular brevemente en su razonamiento o respuesta inicial:
- **Paleta base**: 4 a 6 valores hexadecimales con rol semántico explícito (fondo, superficie, texto primario, texto secundario, acento).
- **Tipografía**: Fuentes seleccionadas para titulares y cuerpo, con jerarquía y espaciado calculados.
- **Estructura visual**: Breve descripción del concepto y wireframe en formato ASCII que ilustre la distribución y alineación.

## 3. Accesibilidad Mandatoria (WCAG 2.2 AA)
- Contraste mínimo de 4.5:1 para texto normal y 3:1 para texto grande o elementos esenciales de interfaz.
- Área táctil efectiva mínima de 44x44 píxeles en controles interactivos para pantallas táctiles.
- Nunca eliminar el contorno de foco (`outline: none`) sin proveer un `:focus-visible` de alto contraste con anillo y desplazamiento.
- Uso estricto de elementos semánticos: `<button>` para acciones de estado o modales; `<a>` exclusivamente para navegación con URL.
- Respetar siempre la preferencia de usuario `@media (prefers-reduced-motion: reduce)`.

## 4. Redacción de Textos de Interfaz (Copywriting)
- Redacción desde la perspectiva del usuario con verbos en voz activa y lenguaje directo.
- Botones de acción con nombres explícitos ("Guardar cambios", "Crear cuenta", no "Enviar" o "Aceptar").
- Los estados de error deben explicar con sobriedad qué falló y cómo solucionarlo, sin disculpas vacías ni ambigüedades.
- Las pantallas vacías (empty states) deben servir de punto de partida para la acción, con un llamado claro y directo.
