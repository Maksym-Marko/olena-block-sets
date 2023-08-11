var fs = require('fs');
var UglifyJS = require("uglify-js");

// minify frontend.js file
fs.readFile("includes/gutenberg/script-generator/frontend.js", "utf8", (err, data) => {

    if (err) {
        console.error(err);
        return;
    }

    var minified = UglifyJS.minify(data, { mangle: { toplevel: true } }).code;

    fs.writeFile('includes/gutenberg/assets/js/frontend.min.js', minified, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Script generated and saved to ", 'includes/gutenberg/assets/js/frontend.min.js');
        }
    });

});
