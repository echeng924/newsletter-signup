const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  members: {
    all: sql('./sql/member/all.sql'),
    find: sql('./sql/member/find.sql'),
    create: sql('./sql/member/create.sql'),
    delete: sql('./sql/member/delete.sql'),
  },
};

module.exports = sqlProvider;
