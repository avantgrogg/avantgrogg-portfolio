'use strict';
import gulp from 'gulp';
import styles from './gulp/styles';
import babel from './gulp/babel';

gulp.task('styles', styles());
gulp.task('babel', babel());