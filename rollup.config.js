import resolve from 'rollup-plugin-node-resolve';

// Add here external dependencies that actually you use.
const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    'rxjs/Rx': 'Rx'
};

export default {
    entry: './dist/modules/angular-library-starter.es5.js',
    dest: './dist/bundles/angular-library-starter.umd.js',
    format: 'umd',
    exports: 'named',
    moduleName: 'ng.angularLibraryStarter',
    plugins: [resolve()],
    external: Object.keys(globals),
    globals: globals,
    onwarn: () => { return }
}
