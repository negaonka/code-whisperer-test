// create fake users array with name, id and age
function createFakeUsers() {
  const users = [];
  for (let i = 0; i < 10; i++) {
    users.push({
      name: faker.name.findName(),
      id: faker.random.uuid(),
      age: faker.random.number(100),
    });
  }
  return users;
}

createFakeUsers();

// to import faker in package.json
