function checkFirst() {
  var inputValue = document.getElementById('one')
  if(inputValue.value === '') {
   var messageFirst = document.createElement('p')
   messageFirst.id = 'firstNameError'
   messageFirst.style.color = 'red'
   messageFirst.style.marginTop = '1px'
   messageFirst.style.marginBottom = '-18px'
   messageFirst.style.fontSize = '15.5px'
   messageFirst.innerHTML = "First Name Required"
   var text = document.getElementById('firstname')
   text.appendChild(messageFirst).fadeIn()
  }
  else {
   var messageFirstError = document.getElementById('firstNameError')
   var textRemove = document.getElementById('firstname')
   textRemove.removeChild(messageFirstError)
  }
}

function checkSecond() {
  var inputValue = document.getElementById('two')
  if(inputValue.value === '') {
   var messageSecond = document.createElement('p')
   messageSecond.id = 'lastNameError'
   messageSecond.style.color = 'red'
   messageSecond.style.marginTop = '1px'
   messageSecond.style.marginBottom = '-18px'
   messageSecond.style.fontSize = '15.5px'
   messageSecond.innerHTML = "Last Name Required"
   var text = document.getElementById('lastname')
   text.appendChild(messageSecond)
  }
  else {
   var messageSecondError = document.getElementById('lastNameError')
   var textRemove = document.getElementById('lastname')
   textRemove.removeChild(messageSecondError)
  }
}

function checkUser() {
  var inputValue = document.getElementById('three')
  if(inputValue.value === '') {
   var userName = document.createElement('p')
   userName.id = 'userNameError'
   userName.style.color = 'red'
   userName.style.marginTop = '1px'
   userName.style.marginBottom = '-18px'
   userName.style.fontSize = '15.5px'
   userName.innerHTML = "User Name Required"
   var text = document.getElementById('username')
   text.appendChild(userName)
  }
  else {
   var userError = document.getElementById('userNameError')
   var userRemove = document.getElementById('username')
   userRemove.removeChild(userError)
  }
}

function checkEmail(value) {
  value = value.split('')
  for(let i=0;i<value.length;i++) {
    if(value[i] == '@') {
      var inputValue = document.getElementById('four')
      var userName.style.color = 'green'
      return;
    }
    else {

    }
  }
}
