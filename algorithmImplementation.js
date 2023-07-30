const users = [
  { name: "Alice", age: 21 },
  { name: "Brandon", age: 3 },
  { name: "James", age: 40 },
  { name: "Max", age: 21 },
];

// Sort the users by age using the quick sort algorithm.
const sortUsers = (users) => {
  if (users.length <= 1) return users;

  const pivot = users[users.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < users.length - 1; i++) {
    if (users[i].age < pivot.age) {
      left.push(users[i]);
    } else {
      right.push(users[i]);
    }
  }

  return sortUsers(left).concat(pivot, sortUsers(right));
};

console.log(sortUsers(users));
