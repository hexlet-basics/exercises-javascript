const users = {
  1: { id: 1, name: 'Bran' },
  2: { id: 2, name: 'Sansa' },
};

const scores = {
  1: 120,
  2: 95,
};

const fetchUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(users[id] ?? null), 100);
  });
};

const fetchScore = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(scores[user.id] ?? 0), 100);
  });
};

export {
  fetchUser,
  fetchScore,
}