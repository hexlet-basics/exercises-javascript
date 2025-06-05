import * as api from './api.js';

// BEGIN
export async function notifyAboutInactive(userId) {
  try {
    const user = await api.getUser(userId);
    const email = await api.getEmail(user);
    const message = await api.prepareMessage(email);
    await api.sendNotification(message);
    return 'OK';
  } catch {
    return 'FAIL';
  }
}
// END

export default notifyAboutInactive;