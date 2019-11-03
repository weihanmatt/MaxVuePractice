import Home from './Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'

export const routes = [
    {path:'/', component:Home},
    {path: '/Portfolio',component: Portfolio},
    {path: '/Stocks', component:Stocks}
]