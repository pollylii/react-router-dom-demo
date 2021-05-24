# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 路由的基本使用
    1.明确好界面中的导航区、展示区
    2.导航区的a标签改为Link标签
        <Link to="/xxXXx">Demok / Link>
    3.展示区写Route标签进行路径的匹配
        <Route path= " / xxXx' component={Demo}/>
    4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>
