In this task, functions are imported via api

Implement the function notifyAboutInactive(userId) should perform a chain of asynchronous steps:

1. Get the user using getUser(userId)
2. Get the email of this user via getEmail(user)
3. Prepare the message: prepareMessage(email)
4. Send the notification: sendNotification(message)

If all steps were successful, the function should return the string 'OK'.

If an error occurred at any stage, return the string 'FAIL'.

For implementation, use async/await and error handling via try/catch.