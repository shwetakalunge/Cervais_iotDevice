Highcharts.chart("container", {
  chart: {
    type: "column",
  },
  title: {
    text: "Stacked column chart",
  },
  xAxis: {
    categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"],
  },
  yAxis: {
    min: null,
    title: {
      text: "",
    },
  },
  tooltip: {
    pointFormat:
      '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
    shared: true,
  },
  plotOptions: {
    column: {
      stacking: "percent",
    },
  },
  series: [
    {
      name: "John",
      data: [5, 3, 4, 7, 2],
    },
    {
      name: "Jane",
      data: [2, 2, 3, 2, 1],
    },
    {
      name: "Joe",
      data: [3, 4, 4, 2, 5],
    },
  ],
});
