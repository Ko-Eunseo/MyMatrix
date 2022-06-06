const { pool } = require("../../database");

exports.insertUser = async function (email, password, nickname) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const insertUserQuery = "insert into Users (email, password, nickname) values (?,?,?);";
      const insertUserParams = [email, password, nickname];

      const [row] = await connection.query(insertUserQuery, insertUserParams);

      return row;

    } catch (err) {
      console.error(` #### insertUserRows Query  error #### `);

      return false;
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error(`#### insertUserRows DB error ####`);
    return false;
  }
};

exports.selectUserByEmail = async function (email) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectUserByEmailQuery = "select * from Users where email = ?";
      const selectUserByEmailParams = [email];

      const [row] = await connection.query(selectUserByEmailQuery, selectUserByEmailParams);

      return row;

    } catch (err) {
      console.error(` #### selectUserByEmailRows Query  error #### `);

      return false;
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error(`#### selectUserByEmailRows DB error ####`);
    return false;
  }
};

exports.selectUser = async function (email, password) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectUserQuery = "select * from Users where email = ? and password = ?";
      const selectUserParams = [email, password];

      const [row] = await connection.query(selectUserQuery, selectUserParams);

      return row;

    } catch (err) {
      console.error(` #### selectUserRows Query  error #### `);

      return false;
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error(`#### selectUserRows DB error ####`);
    return false;
  }
};

exports.selectNicknameByUserIdx = async function (userIdx) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectNicknameByUserIdxQuery = "select * from Users where userIdx = ?";
      const selectNicknameByUserIdxParams = [userIdx];

      const [row] = await connection.query(selectNicknameByUserIdxQuery, selectNicknameByUserIdxParams);

      return row;

    } catch (err) {
      console.error(` #### selectNicknameByUserIdxRows Query  error #### `);

      return false;
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error(`#### selectNicknameByUserIdxRows DB error ####`);
    return false;
  }
};