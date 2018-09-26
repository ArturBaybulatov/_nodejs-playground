export const handleRejection = function(msg) {
    if (typeof msg !== 'string') throw new TypeError('String expected');

    return function(err) {
        console.error(`${ msg }\n\n${ err.message }`);
        throw err;
    };
};
