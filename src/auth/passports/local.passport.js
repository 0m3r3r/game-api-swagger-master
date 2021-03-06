import passport from 'passport';
import User from '../../api/models/user.model';

const JsonStrategy = require('passport-json').Strategy;

passport.use('password', new JsonStrategy(
    function(username, password, done) {
      User.loginByLocal(username, password)
          .then(user => done(null, user))
          .catch(err => done(err));
    }
));

// passport.use('local', new LocalStrategy({
//   usernameField: 'username',
//   passwordField: 'password',
//   //passReqToCallback: true
// }, function (username, password, done) {
//
//   User.loginByLocal(username, password)
//     .then(user => done(null, user))
//     .catch(err => done(err));
//
// }));
