/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
gulpfile.js (c) 2021
Desc: gulp file for SPA project
Created:  2021-10-23T15:41:43.914Z
Modified: 2021-10-23T19:53:17.541Z
*/

const gulp = require('gulp')
const { series, parallel } = require('gulp')

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')


module.exports.default = series(
    parallel(
        series(
            appHTML, appCSS, appJS, appIMG
        ),
        series(
            depsCSS, depsFonts
        )
    ),
    servidor,
    monitorarArquivos
)