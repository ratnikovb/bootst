$(function(){
  function hideModal(modalwindow){
    $(modalwindow).modal('hide');
  }

  $('#mapModalClose').on('click', function(e){
    e.preventDefault();
    hideModal('#mapModal');
  });

});
