(function () {
  'use strict';

  var values = {
    first_name: '',
    last_name: '',
    email:'',
    phone:''
  }

  function getValues (e) {
    console.log(values)
  }

  function onChangeInputHandler (e) {
    values[e.target.name] = e.target.value;
  }

  document.querySelector('input[name=first_name]').addEventListener('change', onChangeInputHandler);
  document.querySelector('input[name=last_name]').addEventListener('change', onChangeInputHandler);
  document.querySelector('input[name=email]').addEventListener('change', onChangeInputHandler);
  document.querySelector('input[name=phone]').addEventListener('change', onChangeInputHandler);
  document.querySelector('button[type=button]').addEventListener('click', getValues);

})();