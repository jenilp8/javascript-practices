import { users, checkAge, checkForeignCountry, checkVowelName } from '../arrayFunction.js';


// Return only active users.

const activeUsers = users.filter((user) => {
    return user.active === true;
});

console.log(activeUsers);

// Return only users who are admin role.

const adminUsers = users.filter((user) => {
    return user.role === "admin";
})

console.log(adminUsers);


// Return users who are active AND verified.

const actVerUsers = users.filter((user) => {
    return user.active === true && user.verified === true;
})

console.log(actVerUsers);


// Return users under 18 (for a compliance/age-check flow).

const under18Users = users.filter((user) => {
    return checkAge(user.age);
})

console.log(under18Users);


// Return users NOT from "IN".

const foreginUsers = users.filter((user) => {
    return checkForeignCountry(user.country) === true;
});

console.log(foreginUsers);


// Return users whose name starts with a vowel.

const vowelUsers = users.filter((user) => checkVowelName(user.name));

console.log(vowelUsers);


// Return unverified users who are still active (a "needs follow-up" list).

const needFollowUpUsers = users.filter((user) => {
    return user.verified != true && user.active === true;
})

console.log(needFollowUpUsers);


// Return users who are either admin or editor (elevated permissions).

const adminEditorUsers = users.filter((user) => {
    return user.role === "admin" || user.role === "editor";
})

console.log(adminEditorUsers);

// Return users older than 30 and active.

const activeUsersAbove30 = users.filter((user) => {
    return user.active === true && user.age > 30;
})

console.log(activeUsersAbove30);


// Return users where country is "US" or "UK" (target region rollout).

const foreginRegionUsers = users.filter((user) => {
    return checkForeignCountry(user.country) === true;
});

console.log(foreginRegionUsers);