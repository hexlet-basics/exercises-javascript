export async function getUser(id) {
  return { id, name: 'Имя Пользователя' };
}

export async function getEmail(user) {
  return `${user.name.toLowerCase()}@example.com`;
}

export async function prepareMessage(email) {
  return `Send notification to ${email}`;
}

export async function sendNotification(message) {
  console.log('Notification sent:', message);
}