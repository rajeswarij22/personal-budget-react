import React, { useEffect } from 'react';
import * as d3 from 'd3';

function HomePage(props) {
  const {
    data = [
      { label: 'Eat out', value: 30 },
      { label: 'Rent', value: 350 },
      { label: 'Groceries', value: 90 },
    ],
    outerRadius = 100, // Define default values if not provided
    innerRadius = 0,   // Define default values if not provided
  } = props;

  const width = 400;
  const height = 400;

  useEffect(() => {
    drawChart();
  }, [data, outerRadius, innerRadius]); // Include outerRadius and innerRadius as dependencies

  function drawChart() {
    d3.select('#pie-container')
      .select('svg')
      .remove();

    const svg = d3
      .select('#pie-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.value);

    const arc = svg
      .selectAll()
      .data(pieGenerator(data))
      .enter();

    arc
      .append('path')
      .attr('d', arcGenerator)
      .style('fill', (_, i) => d3.schemeCategory10[i]) // Use a predefined color scheme

    arc
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .text((d) => d.data.label)
      .attr('transform', (d) => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
      });
  }

 return (
 <main className="center" id="main">
<div className="page-area">

  <section className="page-content">
        <article>
            <h1>Track Your Expenses</h1>
            <p>
                Discover where your money goes with our expense tracking feature. It's crucial for better financial planning.
            </p>
        </article>

        <article>
            <h1>Set Budget Alerts</h1>
            <p>
                Stay on top of your finances by setting budget alerts. Never exceed your spending limits again.
            </p>
        </article>

        <article>
            <h1>Financial Freedom</h1>
            <p>
                Achieve financial freedom and happiness by managing your expenses with confidence.
            </p>
        </article>

        <article>
            <h1>Free</h1>
            <p>
                This app is free!!! And you are the only one holding your data!
            </p>
        </article>

        <article>
            <h1>Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </article>

        <article>
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </article>

        <article>
            <h1>Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </article>

    </section>


    <article >
 <h2>Chart</h2>
 <p>
<div id="pie-container" />
 </p>
 </article>
</div>
</main> 
)};
export default HomePage;