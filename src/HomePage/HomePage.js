import React from 'react';

function HomePage() {
  return (
    <main className="center" id="main">
   

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

     

    <section class="chart-section">
       
        
        <article>
            <h1>Chart</h1>
            <canvas id="myChart" width="400" height="400"></canvas>
        </article>
        <div id="d3-bar-chart" style={{ width: '400px', height: '400px' }}></div>
    </section>
</main>
  );
}

export default HomePage;
