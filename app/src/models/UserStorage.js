"use strict";

class UserStage {
    static #users = {
        id: ["somin", "개발자", "이팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["이소민", "이개발", "이팀장"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        
        return newUsers;
    }
}

module.exports = UserStage;