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

### 路由组件与一般组件
    1.写法不同:
        一般组件: <Demo/ >
        路由组件: <Route path=" / demo" component={Demo}/>
    2.存放位置不同:
        一般组件: components
        路由组件: pages
    3.接收到的props不同:
        一般组件:写组件标签时传递了什么，就能收到什么
        路由组任:接收到三个固定的属性
            history:
                go: f go(n)
                goBack: f goBack()
                goForward: f goForward()
                push: f push(path,state)
                replace: f replace(path,state)
            location:
                pathname : "/about"search: ""
                state: undefined
                match:
                    params: {}
                    path: " /about"
                    url: "/about"

### NavLink与封装NavLink
    1.NavLink可以实现路由链接的高亮，通过activeclassName指定样式名
    2.标签体内容是一个特殊的标签属性
    3.通过this.props.children可以获取标签体内容 

### Switch的使用
    1.通常情况下. path和component是一一对应的关系。
    2.Switch可以提高路由匹配效率(单一匹配)。

