import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import {JsonStrategy } from 'passport-json'
import User from '../../api/models/user.model';


passport.use('local', new JsonStrategy(
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
