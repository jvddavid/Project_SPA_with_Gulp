/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
deps.js (c) 2021
Desc: Tasks relacionadas as dependencias
Created:  2021-10-23T19:40:16.577Z
Modified: 2021-10-23T20:22:11.062Z
*/

const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')


function depsCSS() {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({ "uglyComments": false }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}


function depsFonts() {
    return gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'))
}

module.exports = {
    depsCSS,
    depsFonts
}