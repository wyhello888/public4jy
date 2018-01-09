var gulp = require('gulp');

var less = require('gulp-less');

var livereload = require('gulp-livereload');

// css 压缩插件
var cssmin = require('gulp-minify-css');

//删除目录
var del = require('del');

//合并文件
var concat = require('gulp-concat');

var rename = require('gulp-rename');

var uglify = require('gulp-uglify');

//创建一个gulp任务
gulp.task("hello",function(){
	console.log('这是一个gulp任务')
})

//使用gulp来移动文件  stream
/*
 .pipe().pipe().pipe().pipe().pipe()
 链式语法
 $('#div').css({}).attr().animate().hide()
 * 
 * */
gulp.task('movefile',function(){
	return gulp.src("app/hello.txt")
	.pipe(gulp.dest("dist"))
})

//使用gulp-less 插件编译less
gulp.task('less',function(){
	
	return gulp.src('app/less/style.less') //获取要编译的less
	.pipe(less())   //使用gulp-less插件编译less
	.pipe(gulp.dest('app/css'))  // 把编译完的文件输出到 app/css
})

//使用 gulp编译两个 less
gulp.task('less2',function(){
	return gulp.src(["app/less/style.less","app/less/home.less"])
	.pipe(less())
	.pipe(gulp.dest("app/css"))
})

// *.less 匹配当前目录下所有的 less文件
gulp.task('less3',function(){
	
	return gulp.src('app/less/*.less')
	.pipe(less())
	.pipe(gulp.dest('app/css'))
})

// **/*.less  匹配当前目录下和所有子目录下的less文件
gulp.task('less4',function(){
	return gulp.src('app/less/**/*.less')
	.pipe(less())
	.pipe(gulp.dest('app/css'))
})

// !base.less  排除某个文件
gulp.task('less5',function(){
	return gulp.src(["app/less/**/*.less","!app/less/**/base.less"])
	.pipe(less())
	.pipe(gulp.dest('app/css'))
})

// !{a,b}.less 排除多个less文件
gulp.task('less6',function(){
	return gulp.src(["app/less/**/*.less","!app/less/**/{base,notme}.less"])
	.pipe(less())
	.pipe(gulp.dest("app/css"))
})


/**监听文件改动
 * *
 * watch 第一个参数：  要监听的文件
 * 		第二个参数：  taskname
 *
 */
gulp.task('watch',function(){
	gulp.watch("app/less/**/*.less",["less6"])	
	
	//创建浏览器自动刷新服务器
	livereload.listen();
	
	//app 目录下文件发生变化，就会通知浏览器自动刷新
	gulp.watch(["app/**/*.*"]).on("change",livereload.changed)
})

//压缩css
gulp.task('mincss',function(){
	console.log('--------执行css压缩任务')

	return gulp.src('app/less/**/*.less')
	.pipe(less())
	.pipe(cssmin())
	.pipe(concat("main.css"))
	.pipe(rename({
		basename: "main",
		suffix: "-min",
		extname:".css"
	}))
	.pipe(gulp.dest("dist/css"))
})

//删除文件夹
gulp.task('delete',function(){
	console.log('-------删除css目录')
	del('app/css')
	del('dist')
})

//重命名
gulp.task('rename',function(){
	
	return gulp.src("app/hello.txt")
	.pipe(rename({
		dirname: "text",
		basename: "goodbye",
		prefix: "pre-",
		suffix: "-min",
		extname:".html"
	}))
	.pipe(gulp.dest("dist"))
	
})


gulp.task('concat-js',function(){
	return gulp.src(["app/js/m1.js","app/js/m2.js"])
	.pipe(concat("build.js"))
	.pipe(uglify())
	.pipe(gulp.dest("dist/js"))
})


//把html放到dist目录下
gulp.task('movehtml',function(){
	return gulp.src('app/index.html').pipe(gulp.dest('dist'))
})

//default任务默认执行
gulp.task('default',["delete","movehtml","mincss","rename","concat-js"],function(){
	console.log('---------这个任务默认执行。。。。')
})
