Las instrucciones asíncronas, los .then() anidados y la gestión de errores se suelen usar juntos.

Un ejemplo de un flujo típico en aplicaciones reales: obtener datos, comprobar, guardar.

Promise.then
Permite realizar una operación una vez completada la promesa. El valor de retorno se transmite a los siguientes pasos de la cadena.

Promise.catch
Detecta errores en cualquiera de los .then anteriores.

Combinando varios pasos
Las cadenas .then().then().then() permiten crear escenarios complejos: validación, comprobación de permisos, guardado, registro, etc.

La capacidad de combinar promesas y generar y detectar errores correctamente es un aspecto importante del desarrollo.