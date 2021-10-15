var events = [
    {'Date': new Date(2021, 0, 11), 'Title': 'Entraînement de 19h30 à 21h30'},
    {'Date': new Date(2021, 0, 14), 'Title': 'Entraînement de 19h30 à 21h30'},
    {'Date': new Date(2021, 0, 17), 'Title': 'Match de championnat de 14h à 18h'},
    {'Date': new Date(2021, 0, 18), 'Title': 'Entraînement de 19h30 à 21h30'},
    {'Date': new Date(2021, 0, 21), 'Title': 'Entraînement de 19h30 à 21h30'},
  ];
  var settings = {};
  var element = document.getElementById('caleandar');
  caleandar(element, events, settings);
  