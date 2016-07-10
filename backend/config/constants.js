function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("JSON_STATUS_SUCCESS", 1);
define("JSON_STATUS_WARNING", -1);
define("JSON_STATUS_NOTICE", 0);
define("JSON_STATUS_ERROR", -2);


