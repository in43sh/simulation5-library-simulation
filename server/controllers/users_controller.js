const bcrypt = require ('bcrypt');
const saltRound = 12;

module.exports = {
  // competency 75E

  register: (req, res, next) => {
    const db = req.app.get('db');
    console.log(req.body);
    const { username, password } = req.body;
    bcrypt.hash(password, saltRound)
    .then(hashedPassword => {
      db.create_user([ username, hashedPassword ]).then(() => {
        req.session.user = { username };
        // competency 75F
        res.json({ user: req.session.user });
      }).catch((error => {
        console.log(error);
        res.status(500).json({ message: 'Something bad happened' });
      }))
    }).catch( () => res.status(500).send() )
  },

  login: (req, res, next) => {
    const db = req.app.get('db');
    const { username, password } = req.body;
    db.read_user([ username ])
    // competency 104E
    .then( users => {
      bcrypt.compare(password, users[0].password).then(passwordMatch => {
        if (passwordMatch) {
          req.session.user = { username: users[0].username };
          res.status(200).json({ user: req.session.user });
        } else {
          res.status(401).json({ message: 'Wrong password' });
        }
      })
      .catch( () => res.status(500).send() )
    })
    .catch( () => res.status(500).send() )
  },

  destroyUser: (req, res, next) => {
    const db = req.app.get('db');
    const { params } = req;
    db.delete_user([ params.user ])
      .then( user => res.status(200).send(user) )
      .catch( () => res.status(500).send() )
  }
}