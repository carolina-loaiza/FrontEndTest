var gulp = require('gulp'),
  connect = require('gulp-connect'),
  bowerFiles = require('main-bower-files'),
  angularFilesort = require('gulp-angular-filesort'),
  inject = require('gulp-inject'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  ngmin = require('gulp-ngmin'),
  cssmin = require('gulp-cssmin'),
  sass = require('gulp-sass'),
  neat = require('node-neat').includePaths,
  prefix = require('gulp-autoprefixer');

var styles = [
    './app/assets/styles/**/*.scss',
    './app/components/**/*.scss',
    './app/**/*.scss'
  ]

var script = [
    './app/dist/bower.js',
    './app/dist/angular.js',
    './app/components/slider/custom.slider.js'
  ]

  gulp.task('connect', function() {
    connect.server({
      root: 'app',
      livereload: true
    });
  });
   
  gulp.task('html', function () {
    gulp.src('./app/*.html')
      .pipe(connect.reload());
  });

  gulp.task('styles', function() {
    return gulp.src(styles)
      .pipe(concat('sass.scss'))
      .pipe(sass({ includePaths: neat }).on('error', sass.logError))
      .pipe(prefix())
      .pipe(rename('style.css'))
      .pipe(gulp.dest('app/assets/styles'));
  });

  gulp.task('inject', function() {
    return gulp.src('./app/index.html')
      .pipe(inject(gulp.src('./app/assets/styles/*.css'), { relative: true}))
      .pipe(inject(gulp.src(bowerFiles(), {read: false}), { relative: true, name: 'bower' }))
      .pipe(inject(gulp.src(['!./app/bower_components/**/*', './app/**/*.js']) 
        .pipe(angularFilesort()), { relative: true}
      ))
      .pipe(gulp.dest('app'));
  })

  //Watch task
  gulp.task('watch',function() {
      gulp.watch(styles, ['styles']);
      gulp.watch("app/assets/styles/*.css");
      gulp.watch(['./app/*.html'], ['html']);
  });

  gulp.task('distMain', function() {
    return gulp.src(['!./app/bower_components/**/*', '!./app/components/slider/custom.slider.js', './app/**/*.js'])
      .pipe(angularFilesort())
      .pipe(concat('angular.js'))
      .pipe(gulp.dest('./app/dist/'));
  });

  gulp.task('distVendor', function() {
    return gulp.src('./app/bower_components/**/*.min.js')
      .pipe(concat('bower.js'))
      .pipe(gulp.dest('./app/dist/'));
  });

  gulp.task('distScript', function() {
    return gulp.src(script)
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest('./app/dist/'));
  });

  gulp.task('distCss', function() {
    return gulp.src(['./app/assets/styles/style.css'])
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./app/dist/'));
  });

  gulp.task('dev', ['inject', 'connect', 'watch']);
  gulp.task('concat', ['distMain', 'distVendor', 'distCss']);
  gulp.task('dist', ['distScript']);