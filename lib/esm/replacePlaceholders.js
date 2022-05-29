export const replacePlaceholders = function (formatted, args) {
    if (args.length && typeof args[0] == 'object') {
        var vars = args[0];
        for (const key in vars) {
            var regexp = new RegExp('\\{' + key + '\\}', 'gi');
            formatted = formatted.replace(regexp, vars[key]);
        }
    }
    return formatted;
};
