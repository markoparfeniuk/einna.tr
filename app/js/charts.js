var activity = document.getElementById('activityChart').getContext('2d');
var aesthetics = document.getElementById('aestheticsChart').getContext('2d');
var navigation = document.getElementById('navigationChart').getContext('2d');
var speed = document.getElementById('speedChart').getContext('2d');
var searchability = document.getElementById('searchabilityChart').getContext('2d');
// var business = document.getElementById('businessChart').getContext('2d');

// const businessGradBg = business.createLinearGradient(0, 0, 300, 0)
// businessGradBg.addColorStop(0, 'red')
// businessGradBg.addColorStop(0.5, 'yellow')
// businessGradBg.addColorStop(1, 'rgb(33, 196, 147)')

// var businessChart = new Chart(business, {
//     type: 'gauge',
//     data: {
//         datasets: [{
//             value: 5,
//             minValue: 0,
//             data: [5, 10],
//             backgroundColor: [businessGradBg, '#DDE8ED']
//         }]
//     },
//     options: {
//         cutoutPercentage : 80,
//         maintainAspectRatio: false,
//         needle: {
//             radiusPercentage: 2,
//             widthPercentage: 3.2,
//             lengthPercentage: 80,
//             color: 'rgba(0, 0, 0, 1)'
//         },
//         valueLabel: {
//             display: true,
//             formatter: (value) => {
//             return '$' + Math.round(value);
//             },
//             color: 'rgba(255, 255, 255, 1)',
//             backgroundColor: 'rgba(0, 0, 0, 1)',
//             borderRadius: 5,
//             padding: {
//             top: 10,
//             bottom: 10
//             }
//         }
//     }
// });

const activityGradBg = activity.createLinearGradient(0, 0, 0, 400)
activityGradBg.addColorStop(0, 'rgba(0, 255, 179, 0.2)')
activityGradBg.addColorStop(0.8, 'rgba(33, 196, 147, 0.8)')
var activityChart = new Chart(activity, {
    type: 'line',
    data: {
        labels: ['JUL 16', 'JUL 17', 'JUL 18', 'JUL 19', 'JUL 20', 'JUL 21', 'JUL 22'],
        datasets: [{
            label: 'Active users',
            data: [2500, 1000, 4850, 3000, 3000, 1200, 3500],
            backgroundColor: activityGradBg,
            borderWidth: 0,
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: {
                beginAtZero: true,
                ticks: {
                    callback: function(label, index, labels) {
                        if (parseInt(label) >= 1000 && parseInt(label) % 1000 == 0)
                            return label / 1000 + 'K';
                        else
                            return '';
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                align: 'start',
                color: 'black',
                font: {
                    text: 'black',
                    size: 18
                },
                padding: {
                    bottom: 24
                },
                text: 'Latest Activities',
            },
            legend: {
                display: false,
            }
        }
    }
});

var aestheticsChart = new Chart(aesthetics, {
    type: 'bar',
    data: {
        labels: ['item', 'item', 'item', 'item'],
        datasets: [{
            data: [40, 50, 82, 60],
            backgroundColor: [
                'rgb(174, 233, 215)',
                'rgb(98, 220, 184)',
                'rgb(33, 195, 147)',
                'rgb(50, 153, 123)'
            ]
        }]
    }
    ,
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: {
                beginAtZero: true,
                ticks: {
                    max: 100,
                    min: 0,
                    stepSize: 25,
                    callback: function(label, index, labels) {
                        if (parseInt(label) > 0)
                            return label + '%';
                        else
                            return '';
                    }
                }
            }
        }
        ,
        plugins: {
            title: {
                display: true,
                align: 'start',
                color: 'black',
                font: {
                    text: 'black',
                    size: 18
                },
                padding: {
                    bottom: 24
                },
                text: 'Aesthetics',
            },
            legend: {
                display: true,
            }
        }
    }
}); 

var navigationChart = new Chart(navigation, {
    type: 'doughnut',
    data: {
        labels: ['Information 01', 'Information 02', 'Information 03'],
        datasets: [{
            data: [26, 32, 42],
            backgroundColor: [
                'rgb(174, 233, 215)',
                'rgb(50, 153, 123)',
                'rgb(210, 212, 216)'
            ]
        }]
    } ,
    options: {
        plugins: {
            title: {
                display: true,
                align: 'start',
                color: 'black',
                font: {
                    text: 'black',
                    size: 18
                },
                padding: {
                    bottom: 24
                },
                text: 'Navigation',
            },
            legend: {
                display: true,
                
            },
        }
    }
});

var speedChart = new Chart(speed, {
    type: 'bar',
        data: {
            labels: ['May', 'Jun', 'Jul', 'Aug'],
            datasets: [
                {
                    label: 'Information 01',
                    data: [40, 25, 15, 15],
                    backgroundColor: 'rgb(72, 121, 223)'
                },
                {
                    label: 'Information 02',
                    data: [30, 30, 25, 10],
                    backgroundColor: 'rgb(33, 195, 147)'
                },
                {
                    label: 'Information 03',
                    data: [10, 15, 42, 10],
                    backgroundColor: 'rgb(251, 224, 141)'
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                },
                yAxes: {
                    stacked: true,
                    beginAtZero: true,
                    ticks: {
                        max: 100,
                        min: 0,
                        stepSize: 25,
                        callback: function(label, index, labels) {
                            if (parseInt(label) > 0)
                                return label + '%';
                            else
                                return '';
                        }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    align: 'start',
                    color: 'black',
                    font: {
                        text: 'black',
                        size: 18
                    },
                    padding: {
                        bottom: 24
                    },
                    text: 'Speed',
                },
                legend: {
                    display: true,
                }
            }
        }
    }
); 

var searchabilityChart = new Chart(searchability, {
    type: 'line',
    data: {
        labels: ['label', 'label', 'label', 'label'],
        datasets: [
        {
            label: 'Information 01',
            data: [60, 25, 15, 15],
            borderColor: 'rgb(33, 195, 147)',
            backgroundColor: 'rgb(33, 195, 147)'
        },
        {
            label: 'Information 02',
            data: [30, 30, 82, 10],
            borderColor: 'rgb(251, 224, 141)',
            backgroundColor: 'rgb(251, 224, 141)'
        },
        {
            label: 'Information 03',
            data: [10, 15, 42, 70],
            borderColor: 'rgb(72, 121, 223)',
            backgroundColor: 'rgb(72, 121, 223)'
        },
    ]},
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: {
                beginAtZero: true,
                ticks: {
                    max: 100,
                    min: 0,
                    stepSize: 25,
                    callback: function(label, index, labels) {
                        if (parseInt(label) > 0)
                            return label + '%';
                        else
                            return '';
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                align: 'start',
                color: 'black',
                font: {
                    text: 'black',
                    size: 18
                },
                padding: {
                    bottom: 24
                },
                text: 'Latest Activities',
            },
            legend: {
                display: true,
            }
        }
    }
});