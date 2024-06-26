$(document).ready(function() {
    $('#startButton').click(function() {
      const names = $('#names').val().split(',').map(name => name.trim());
      if (names.length < 2) {
        alert('Por favor, insira pelo menos dois nomes.');
        return;
      }
  
      $.post('/sorteio', { names }, function(data) {
        startRace(names, data.winner);
      });
    });
  
    function startRace(names, winner) {
      const raceDuration = 30000; // 30 seconds
      const horses = $('.horse');
  
      horses.each(function(index) {
        const randomDistance = Math.floor(Math.random() * 100); // Random distance each horse will travel
        $(this).css({
          transition: `transform ${raceDuration}ms linear`,
          transform: `translateX(${randomDistance}%)`
        });
      });
  
      setTimeout(() => {
        alert(`O vencedor é: ${winner}`);
        resetRace();
      }, raceDuration);
    }
  
    function resetRace() {
      $('.horse').css({
        transition: 'none',
        transform: 'translateX(0)'
      });
    }
  });
  