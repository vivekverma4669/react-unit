const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const jwt = require('jsonwebtoken');


const app = express();

passport.use(new LocalStrategy(
  function(username, password, done) {
    if (username === 'admin' && password === 'password') {
      return done(null, { username: 'admin' });
    }
    else {
      return done(null, false, { message: 'Incorrect username or password' });
    }
  }
));


const jwtSecret = 'secret'; 
passport.use(new JwtStrategy({
  jwtFromRequest: req => req.cookies.jwt,
  secretOrKey: jwtSecret
}, (jwtPayload, done) => {
  
  return done(null, jwtPayload.sub);
}));



passport.use(new GoogleStrategy({
  clientID: 'your_google_client_id',
  clientSecret: 'your_google_client_secret',
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  
  return done(null, profile);
}));

passport.use(new FacebookStrategy({
  clientID: 'your_facebook_client_id',
  clientSecret: 'your_facebook_client_secret',
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
 
  return done(null, profile);
}));



passport.use(new TwitterStrategy({
  consumerKey: 'your_twitter_consumer_key',
  consumerSecret: 'your_twitter_consumer_secret',
  callbackURL: 'http://localhost:3000/auth/twitter/callback'
}, (accessToken, refreshToken, profile, done) => {
 
  return done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));


app.use(passport.initialize());


app.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  // Generate JWT token and send it in response
  const token = jwt.sign({ sub: req.user.username }, jwtSecret);
  res.cookie('jwt', token, { httpOnly: true }); 
  res.json({ message: 'Login successful', token });
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // Redirect or respond after successful authentication
  res.redirect('/');
});


app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
