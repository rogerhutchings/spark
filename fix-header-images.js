#!/usr/bin/env node

var glob = require('glob')
var matter = require('gray-matter')
var fs = require('fs')
var POSTS_DIR = __dirname + '/user/pages/05.blog'
var POSTS = glob.sync(POSTS_DIR + '/**/*.md')

// var post = [POSTS[0]];
// var post2 = POSTS.filter(function(post) {
//   var file = matter.read(post);
//   return file.data.header_image_file
// })
//
// var post = [post2[0]]


function getFirstImage(content) {
  var matches = content.match(/!\[.*?\]\((.*?)\)/);
  return matches && matches.length ? matches[1] : false;
}

function updateUseFirstImage(file) {
  var newFile = Object.assign({}, file);
  var image = getFirstImage(newFile.content);
  newFile.data.header_image = ["'", image, "'"].join('');
  return newFile;
}

function updateUseHeaderImage(file) {
  var newFile = Object.assign({}, file);
  var imageObj = Object.keys(file.data.header_image_file)[0]
  var image = file.data.header_image_file[imageObj].name;
  newFile.data.header_image = image;
  return newFile;
}

function deleteOldHeaderImage(file) {
  var newFile = Object.assign({}, file);
  delete newFile.data.header_image_enabled;
  delete newFile.data.header_image_file;
  return newFile;
}

var counter = 0;
var headerImageCounter = 0;
var firstImageCounter = 0;


POSTS.forEach(function(post) {
  console.log('Processing', post)
  var file = matter.read(post);
  var newFile;
  counter = counter + 1;

  if (file.data.header_image_file) {
    console.log('Using header image file field');
    headerImageCounter = headerImageCounter + 1;
    newFile = updateUseHeaderImage(file);
  } else {

    // if (getFirstImage(file.content)) {
    //   console.log('Using first image in content');
    //   firstImageCounter = firstImageCounter + 1;
    //   newFile = updateUseFirstImage(file);
    // }

  }


  if (newFile) {
    var clean = deleteOldHeaderImage(newFile)
    // console.info(clean.data)
      var newFileContent = matter.stringify(clean.content, clean.data);
      fs.writeFileSync(clean.path, newFileContent, 'utf8');

  }


  // if (newFile) {
  // }

  // console.info(deleteOldHeaderImage(file));
  // console.info(getFirstImage(file.content))
});

console.info('counter:', counter)
console.info('headerImageCounter:', headerImageCounter)
console.info('firstImageCounter:', firstImageCounter)
