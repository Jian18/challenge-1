var brandstof = document.getElementById('brandstof-chart');
var GForce = document.getElementById('G-force-chart');
var voorraad = document.getElementById('voorraad-chart');
var afstandTijd = document.getElementById('afstand-tijd-chart');


var afstandTijdChart = new Chart(afstandTijd, {
    type: 'pie',
    data: {
       labels: ['Afgelegd','nog te gaan'],
       datasets: [{
           data: [100, 70],
           backgroundColor: [
               'rgb(202, 240, 248)',
               'rgb(61, 90, 128)'
           ]
       }]
    },
    options:  {
       title: {
           display: true,
           text: 'Distance',
           fontColor: '#ffffff'
       },
       layout: {
           padding: 30
       }
     }
});


var brandstofChart = new Chart(brandstof, {
    type: 'doughnut',
    data: {
        labels: ['Full','Empty'],
        datasets: [{
            data: [100, 20],
            backgroundColor: [
                'rgb(255, 190, 15)',
                'rgb(250, 30, 14)'
            ]
        }]
    },
    options:  {
        title: {
            display: true,
            text: 'Fuel',
            fontColor: '#ffffff'
        },
        layout: {
            padding: 30
        }
    }
});


var voorraadChart = new Chart(voorraad, {
    type: 'radar',
    data: {       
        labels: [
        'oxygen',
        'food',
        'water'
    ],   
        datasets: [
            {
            data: [98, 100, 89],
            label: 'oxygen',
            backgroundColor: [
                'rgb(229, 229, 229)', 
              
            ],

        },
        {
            data: [99, 97, 89],
            label: 'food',
            backgroundColor: [
                'rgb(252, 163, 17)'
          
            ],

        },
        {
            data: [99, 97, 89],
            label: 'water',
            backgroundColor: [
                'rgb(0, 150, 199)'
            ],

        },
    ],
 
    },
    options:  {
        title: {
            display: true,
            text: 'Stockpile',
            fontColor: '#ffffff'
        },
        layout: {
            padding: 10
        },
            scale: {
                angleLines: {
                    display: true
                },
                ticks: {
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }
      }


    
});

