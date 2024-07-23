const con = require("../route/mysql_con");

const login = (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";

  con.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error during login:", err);
      // return res.status(500).json({ success: false, message: "Internal server error" });
      return res.sendfile('login', {
        message: 'Passwords do not match'});
    }

    if (results.length > 0) {
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
};

// const login = (req, res) => {
//   const { username, password } = req.body;

//   connection.query('SELECT * FROM log WHERE username = ?', [username], (err, results) => {
//     if (err) return res.status(500).json({ error: err.message });

//     if (results.length === 0) return res.status(401).json({ message: 'Invalid username or password' });

//     const user = results[0];
//     bcrypt.compare(password, user.password, (err, isMatch) => {
//       if (err) return res.status(500).json({ error: err.message });
//       if (!isMatch) return res.status(401).json({ message: 'Invalid username or password' });

//       res.json({ message: 'Login successful!' });
//     });
//   });
// };

module.exports = {
    login,
};
