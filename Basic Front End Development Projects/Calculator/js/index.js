var part1;
var part2;
var operand;
$('#clear-all').click(function() {
  $('#result').text('');
});

$('#clear').click(function() {
  $('#result').text('');
});

$('#plus').click(function() {
  part1 = $('#result').text();
  operand = '+';
});

$('#nine').click(function() {
  $('#result').text($('#result').text() + 9);
});

$('#eight').click(function() {
  $('#result').text($('#result').text() + 8);
});

$('#seven').click(function() {
  $('#result').text($('#result').text() + 7);
});

$('#six').click(function() {
  $('#result').text($('#result').text() + 6);
});

$('#five').click(function() {
  $('#result').text($('#result').text() + 5);
});

$('#four').click(function() {
  $('#result').text($('#result').text() + 4);
});

$('#three').click(function() {
  $('#result').text($('#result').text() + 3);
});

$('#two').click(function() {
  $('#result').text($('#result').text() + 2);
});

$('#one').click(function() {
  $('#result').text($('#result').text() + 1);
});

$('#zero').click(function() {
  $('#result').text($('#result').text() + 0);
});
