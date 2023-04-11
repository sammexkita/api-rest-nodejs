interface User {
  birthYear: number;
}

function calculateAgeOfUser(user: User): number {
  return new Date().getFullYear() - user.birthYear;
}

calculateAgeOfUser({
  birthYear: 1994
});