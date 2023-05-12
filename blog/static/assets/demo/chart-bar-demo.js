// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var data = new Date();
var dia05 = new Date(data.getTime() - (0 * 24 * 60 * 60 * 1000));
var dia04 = new Date(data.getTime() - (1 * 24 * 60 * 60 * 1000));
var dia03 = new Date(data.getTime() - (2 * 24 * 60 * 60 * 1000));
var dia02 = new Date(data.getTime() - (3 * 24 * 60 * 60 * 1000));
var dia01 = new Date(data.getTime() - (4 * 24 * 60 * 60 * 1000));
var dia00 = new Date(data.getTime() - (5 * 24 * 60 * 60 * 1000));
dataAtual = dia05.toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric'});
dataFive = dia04.toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric'});
dataFour = dia03.toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric'});
dataThree = dia02.toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric'});
dataTwo = dia01.toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric'});
dataOne = dia00.toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric'});

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [dataOne, dataTwo , dataThree,dataFour, dataFive, dataAtual],
    datasets: [{
      label: "Quantidade ",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [1462, 1068, 1357, 1250, 1300, 1500],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'day'
        },
        gridLines: {
          display: true
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 1500,
          maxTicksLimit: 6
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
