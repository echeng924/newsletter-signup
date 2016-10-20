const MemberDAO = require('../services/MemberDAO');

class MemberController {
  static get(request, response) {
    MemberDAO.all().then((members) => {
      response.status(200).json(members);
    });
  }

  static create(request, response) {
    const memberData = {
      first_name: request.body.first_name,
      last_name: request.body.last_name,
      email: request.body.email,
      zipcode: request.body.zipcode,
    };
    MemberDAO.create(memberData)
             .then((member) => response.status(200).json(member));
  }
}

module.exports = MemberController;
