// 下面是要渲染的数据，可以动态获得
var dataSet = [1, 2, 3, 4];

// 填充数据
var chart = d3.select('#testId')
            .selectAll('p')
            .data(dataSet, function(d) {d});

// 渲染视图
chart
    .enter()
    .append('p')
    .text(function(d, i) {
        return [d, i];
    });

chart.exit().remove();