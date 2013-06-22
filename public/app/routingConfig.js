(function(exports){

    exports.userRoles = {
        // public: 1, // 001
        // user:   2, // 010
        // admin:  4  // 100
        public: 1,
        student: 2,
        teacher: 3,
        parent: 4,
        admin: 5,
        master: 9
    };

    exports.accessLevels = {
        public: 1,
        student: 2,
        teacher: 3,
        parent: 4,
        admin: 5,
        master: 9
    };

})(typeof exports === 'undefined'? this['routingConfig']={}: exports);

