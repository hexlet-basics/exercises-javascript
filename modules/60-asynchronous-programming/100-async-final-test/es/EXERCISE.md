En esta tarea, las funciones se importan mediante la API.

Implementar la función notifyAboutInactive(userId) debe realizar una cadena de pasos asíncronos:

1. Obtener el usuario mediante getUser(userId)
2. Obtener el correo electrónico de este usuario mediante getEmail(user)
3. Preparar el mensaje: prepareMessage(email)
4. Enviar la notificación: sendNotification(message)

Si todos los pasos se realizaron correctamente, la función debe devolver la cadena "OK".

Si se produce un error en cualquier etapa, devolver la cadena "FAIL".

Para la implementación, utilice async/await y la gestión de errores mediante try/catch.