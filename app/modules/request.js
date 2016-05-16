var url = require('url');
var os = require('os');
var requestIp = require('request-ip');
 
module.exports = function (req, res) {
    
    var result = {
        ipaddress: "",
        language: "",
        software: ""
    };
    
    // IP Address
    // on localhost you'll see 127.0.0.1 if you're using IPv4  
    // or ::1, ::ffff:127.0.0.1 if you're using IPv6
    result.ipaddress = requestIp.getClientIp(req); 
    // result.ipaddress = req.ip;  // simplified Express method of getting IP (as opposed to more thorough method above)

    // Language
    if (req.acceptsLanguages()) {
        result.language = req.acceptsLanguages();
    }
    else {
        result.language = "";
    }
    
    // OS
    result.software = os.type() + " " + os.release();

    res.send(result);
    
    
};