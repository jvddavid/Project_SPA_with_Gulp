/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
servidor.js (c) 2021
Desc: Controlar o servidor de desenvolvimento
Created:  2021-10-23T19:41:14.815Z
Modified: 2021-10-23T20:39:35.437Z
*/


const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function monitorarArquivos(cb) {
    watch('src/**/*.html', () => {
        return gulp.series('appHTML')()
    })
    watch('src/assets/sass/**/*.sass', () => {
        return gulp.series('appCSS')()
    })
    watch('src/assets/js/**/*.js', () => {
        return gulp.series('appJS')()
    })
    watch('src/assets/imgs/**/*.*', () => {
        return gulp.series('appIMG')()
    })

    return cb()
}

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            livereload: true
        }))
}


module.exports = {
    monitorarArquivos,
    servidor
}