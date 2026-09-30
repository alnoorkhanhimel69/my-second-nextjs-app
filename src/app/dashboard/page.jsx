import React from 'react';
import Counter  from '../Component/Counter';

const DashboardPage = () => {
    console.log('Dashboard page rendered');
    

    return (
        <div>
            <h2>Dashboard Page</h2>

            <Counter></Counter>

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
        </div>
    );
};

export default DashboardPage;