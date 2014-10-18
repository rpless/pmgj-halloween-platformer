requirejs.config({
    baseUrl: 'js',
    paths: {
        app: 'platformer',
        crafty: 'lib/crafty'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app']);
