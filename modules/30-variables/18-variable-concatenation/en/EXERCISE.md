
Websites are constantly sending emails to their users. A common task is to automatically send a personalized email with the user's name in the header. If you store a person's name as a string somewhere in a website database, the task of generating the header boils down to concatenation. For instance, you have to concatenate the string `Hello` with a string containing their name.

Write a program that will create a header and a body of the email using ready-made variables and print the resulting strings.

For the header use the variables `firstName` and `greeting`, a comma, and an exclamation mark. Print it in the correct order.

For the email body, use the variables `info` and `intro`, with the second sentence on a new line.

The result should look like this:

<pre class='hexlet-basics-output'>
Hello, Joffrey!
Here is important information about your account security.
We couldn't verify your mother's maiden name.
</pre>

Complete the task using `console.log()` no more than twice.
