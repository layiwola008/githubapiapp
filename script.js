// The url you need: 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg'
//Open your console and add the 1st code to change image
// document.querySelector('img').src = 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg'

//Open your console and add the 2nd code to change alt text

// document.querySelector('img').alt = 'chicken'

// let div = document.querySelector('#container');

// div.style.textAlign = 'center'

// let treeImage = document.querySelector('img, src')
// treeImage.style.width = '150px'
// treeImage.style.borderRadius = '50%'

'use strict'

function getRepos(username){
  fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(responseJson => displayRepos(responseJson));
}

function displayRepos(responseJson){
console.log(responseJson);
$('#results').html('')
responseJson.forEach(item=> {
  $('#results').append(`
    <h3>${item.name}</h3>
  <h3>${item.full_name}</h3>
  `)} )
}

function watchForm(){
  $('#form').submit(event =>{
    event.preventDefault();
    const username = event.target.username.value;
    console.log(username);
    getRepos(username);
  })
 
}

$(function(){
  console.log('App is loaded! Waiting for submission!')
  watchForm();
})