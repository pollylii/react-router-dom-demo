# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 一、路由的基本使用
        1.明确好界面中的导航区、展示区
        2.导航区的a标签改为Link标签
            <Link to="/xxXXx">Demok / Link>
        3.展示区写Route标签进行路径的匹配
            <Route path= " / xxXx' component={Demo}/>
        4.<App>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

### 二、路由组件与一般组件
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

### 三、NavLink与封装NavLink
        1.NavLink可以实现路由链接的高亮，通过activeclassName指定样式名
        2.标签体内容是一个特殊的标签属性
        3.通过this.props.children可以获取标签体内容 

### 四、Switch的使用
        1.通常情况下. path和component是一一对应的关系。
        2.Switch可以提高路由匹配效率(单一匹配)。

### 五、解决多级路径刷新页面样式丢失的问题
        1.public/index.htm1 中引入样式时不写./ 写/（常用)
        2.public/index.htm1 中引入样式时不写./写%PUBLIC_URL%（常用)
        3.使用HashRouter


## 六、路由的严格匹配与模糊匹配
        1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
        2.开启严格匹配：<Route exact={true} path="/about" component={About}/>
        3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

## 七、Redirect的使用	
        1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
        2.具体编码：
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                    <Redirect to="/about"/>
                </Switch>

## 八、嵌套路由
        1.注册子路由时要写上父路由的path值
        2.路由的匹配是按照注册路由的顺序进行的

## 九、向路由组件传递参数
        1.params参数
                    路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情</Link>
                    注册路由(声明接收)：<Route path="/demo/test/:name/:age" component={Test}/>
                    接收参数：this.props.match.params
        2.search参数
                    路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'}>详情</Link>
                    注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
                    接收参数：this.props.location.search
                    备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
        3.state参数
                    路由链接(携带参数)：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>
                    注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
                    接收参数：this.props.location.state
                    备注：刷新也可以保留住参数
## 十、编程式路由导航
        借助this.prosp.history对象上的API对操作路由跳转、前进、后退
                -this.prosp.history.push()
                -this.prosp.history.replace()
                -this.prosp.history.goBack()
                -this.prosp.history.goForward()
                -this.prosp.history.go()

## 十一、BrowserRouter与HashRouter的区别
        1.底层原理不一样：
                    BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
                    HashRouter使用的是URL的哈希值。
        2.path表现形式不一样
                    BrowserRouter的路径中没有#,例如：localhost:3000/demo/test
                    HashRouter的路径包含#,例如：localhost:3000/#/demo/test
        3.刷新后对路由state参数的影响
                    (1).BrowserRouter没有任何影响，因为state保存在history对象中。
                    (2).HashRouter刷新后会导致路由state参数的丢失！！！
        4.备注：HashRouter可以用于解决一些路径错误相关的问题。

