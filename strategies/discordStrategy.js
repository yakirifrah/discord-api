const DiscordStrategy = require('passport-discord').Strategy;

const passport = require('passport');

passport.serializeUser((user, done) => {
	done(null, user);
});
passport.deserializeUser((ob, done) => {
	done(null, ob);
});

passport.use(new DiscordStrategy({
	clientID:'816305962901045278',
	clientSecret:'F8T2V5f74CRcEETO9SqHgIsu_8f4R-Dp',
	callbackURL:'/auth/redirect',
	scope:['identity', 'guilds'],
}, (accessToken, refreshToken, profile, done) => console.log(profile)),
);
