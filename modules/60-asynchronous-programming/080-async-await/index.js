import { fetchUser, fetchScore } from "./api";

// BEGIN
const formatUserInfo = async (id) => {
  const user = await fetchUser(id);
  if (!user) throw new Error('User not found');
  const score = await fetchScore(user);
  return `Name: ${user.name}, Score: ${score}`;
};
// END

export default formatUserInfo;

