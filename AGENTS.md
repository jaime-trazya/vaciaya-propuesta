# Instrucciones para Codex y otros agentes

## Ramas y seguridad
- Trabaja en `pruebas` o ramas derivadas de ella, nunca directamente en `main`.
- No hagas merge a `main`, despliegues de produccion ni cambios de dominio sin aprobacion expresa del propietario.
- Antes de modificar archivos, sincroniza con el remoto y comprueba el estado de Git.
- No sobrescribas trabajo ajeno; usa pull requests para cambios importantes.
- No incluyas claves, tokens o archivos .env en commits.

## Calidad
- Ejecuta los tests disponibles antes de proponer cambios.
- Cuando haya web implementada, verifica enlaces, imagenes, accesibilidad basica, movil y escritorio.
- Si una prueba no se puede ejecutar, indicalo claramente; no la declares superada.
- Presenta resumen de cambios, archivos afectados, SHA y pruebas realizadas.

## Colaboracion
- v0: cambios visuales; Codex: programacion, integracion y revision. Ambas herramientas comparten GitHub.
- Toda publicacion exige revision humana.
