
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
    "uname": "Keller Beasley",
    "uemail": "kellerbeasley@valreda.com",
    "uphone": 8194032386,
    "uinterest": "Toyota Camry",
    "umessage": "Cillum cupidatat eiusmod dolor veniam minim ad laborum labore quis nisi labore in. Officia laborum ipsum minim cillum duis. Ullamco aliquip irure adipisicing adipisicing id eu dolore incididunt duis. Non fugiat laborum dolor commodo et occaecat dolor. Non ipsum incididunt exercitation non Lorem ad. Veniam velit id officia ipsum do.\r\n",
    "followup": false,
    "read": false
  },
  {
    "uname": "Workman Garrison",
    "uemail": "workmangarrison@valreda.com",
    "uphone": 9294192231,
    "uinterest": "Honda Civic",
    "umessage": "Ut mollit pariatur reprehenderit excepteur duis aliqua. Ad cupidatat voluptate ad proident irure aliqua aliquip cillum. Non dolor aute cillum tempor qui voluptate consequat aliqua. Laboris cillum dolor ea aliqua deserunt proident laboris. Et dolor aute sint reprehenderit ad commodo sunt. Aliqua ex nulla ad tempor anim excepteur nisi ut tempor reprehenderit consequat labore fugiat.\r\n",
    "followup": false,
    "read": false
  },
  {
    "uname": "Lilia Mcintyre",
    "uemail": "liliamcintyre@valreda.com",
    "uphone": 8645362958,
    "uinterest": "Toyota Camry",
    "umessage": "Nisi dolor aute dolor pariatur proident adipisicing. Reprehenderit sunt labore ipsum eu Lorem consequat eiusmod labore ut sunt nisi proident nostrud. Lorem dolor magna cupidatat in aute aliqua ea commodo. Sunt velit in ut ullamco mollit culpa deserunt est enim exercitation mollit proident esse sint. Incididunt cupidatat aliquip duis tempor nulla laborum excepteur amet labore. Ex pariatur non consequat incididunt ut.\r\n",
    "followup": false,
    "read": false
  },
  {
    "uname": "Elba Middleton",
    "uemail": "elbamiddleton@valreda.com",
    "uphone": 8105192827,
    "uinterest": "Lamborghini Aventador Stock-19",
    "umessage": "Lorem sit eu anim laboris officia eiusmod. Anim laboris enim incididunt et est pariatur eiusmod dolor nulla amet. Officia in proident irure ea veniam mollit velit sit reprehenderit et laborum pariatur laborum.\r\n",
    "followup": false,
    "read": false
  },
  {
    "uname": "Dawson Sherman",
    "uemail": "dawsonsherman@valreda.com",
    "uphone": 8644242898,
    "uinterest": "Subaru Outback stock-20",
    "umessage": "Exercitation excepteur non ut veniam irure laborum. Irure nostrud consectetur ea reprehenderit eiusmod magna laboris ullamco minim ullamco irure magna nisi magna. Eu culpa qui mollit labore labore culpa. Tempor Lorem reprehenderit velit pariatur enim. Enim elit Lorem anim exercitation nulla enim. Dolor qui ipsum voluptate sint sint nostrud nostrud. Mollit enim consequat cupidatat esse sit est fugiat ullamco duis excepteur eu.\r\n",
    "followup": false,
    "read": false
  }
      ]);
    });
};
