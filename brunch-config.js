// See http://brunch.io for documentation.
exports.files = {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
    babel: {
        presets: ['env', 'react'],
    },
    sass: {
        mode: 'ruby',
        options: {
            includePaths: ["app/styles"],
            precision: 8,
        }
    }
}
