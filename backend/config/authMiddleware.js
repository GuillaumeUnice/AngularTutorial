var jwt = require('jsonwebtoken');
var constants = require('../config/constants');

exports.ensureAuthorized = function(req, res, next) {
    var bearerToken;
    var bearerHeader = req.headers["authorization"];
    console.log(req.headers.authorization);
    console.log(req.headers["authorization"]);
    if (typeof bearerHeader !== 'undefined') {

        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[1];
        console.log(bearerToken);
        jwt.verify(bearerHeader, `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvzGvDUlOXKvjpiKTvEbo
WpcoXnZ3KqmHV/M+OlRT+dXRNH0bNOIvZIkJBskh9emkF1O5SajMXKpjYdpzGWu2
yqLVKPewWuSpV8+iznzLaNZNgLYkm+U7HNZk87dtk6WjijXwVO2y117L4Om0b+WL
V3PXIhb5IQeC7D8jJ8193ZUkrRZk6b6zaX9RV/ZlwiEfzAiNyGRZqcYZo5PFX0B+
1tj+Oc+nbKm5HbZyKpKWUw1IzbLhrz1Hey9G0eVTS3/osEQ2pBWfYZCoASXUVTLO
N65uEq8QeQDdXMNSbrkcsDeeRdQ0MfUnFjMVPjDpUdwahjtcpmqLI/Y2UVIltyiS
8QIDAQAB
-----END PUBLIC KEY-----
`, function(err, decoded) {
          if(err) {
            res.status(401);
            res.json({ status: constants.JSON_STATUS_WARNING,
              title: 'Connexion',
              message: 'You must be connected to make this operation !'
            });
            return;
          }
          req.token = decoded;
          next();
        });
    } else {
        res.status(401);
        res.json({ status: constants.JSON_STATUS_WARNING,
            title: 'Connexion',
            message: 'You must be connected to make this operation !'
        });
    }
};