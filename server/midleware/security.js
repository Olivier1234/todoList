const verifyToken = require ('../lib/auth').verifyToken();

const verify = (req, res, next) => {
    if (req.path === '/login') return next();
    const authHeader = req.get('Authorization');

    if (!authHeader || ! authHeader.startsWith('Bearer')) {
        return res.sendStatus(401);
    }
    const token = authHeader.replace('Bearer ','');
    verifyToken(token).then(decodedToken => {
        req.user = decodedToken;
        next();
    })
};

module.exports = verify();