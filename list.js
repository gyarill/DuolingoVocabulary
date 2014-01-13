var words = [];
$.each( duo.user.getSkills().skills._byId, function( key, value ) {
  if(value.attributes.learned) {
    words = words.concat(value.attributes.words);
  }
});
words = $.grep(words, function(v, k){ return $.inArray(v ,words) === k;});
$('body').children().remove();
$('body').append($('<textarea>').css({"width":"50%", "height": "500px", "background":"transparent"}).append(words.join("\n")));



