// Using getAttribute and setAttribute

const userCard = document.getElementById('userCard');
console.log(userCard);

const userId = userCard.getAttribute('data-user-id');
console.log(userId);
const userRole = userCard.getAttribute('data-user-role');
console.log(userRole);

// Modifying data attribute
userCard.setAttribute('data-user-id',321);
console.log(userCard);

userCard.setAttribute('data-user-role','super-admin');
console.log(userCard);

// Using dataset
const userRole2 = userCard.dataset;
console.log(userRole2);
console.log(userRole2.userId);
console.log(userRole2.userRole);