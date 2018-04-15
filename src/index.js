import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyPortfolioApp from './MyPortfolioApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyPortfolioApp />, document.getElementById('root'));
registerServiceWorker();
