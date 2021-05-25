import React, { Component } from 'react'
// import qs from 'querystring'

const DetailData = [
	{id:'01',content:'你好，前端'},
	{id:'02',content:'你好，React'},
	{id:'03',content:'你好，未来的自己'}
]
export default class Detail extends Component {
	render() {
		console.log(this.props);

		// let obj = {name:'tom',age:18}
		// console.log(qs.stringify(obj));  // name=tom&age=18

		// let str = 'name=tom&age=18'
		// console.log(qs.parse(str)); // { name: "tom", age: "18" }

		// 接收params参数
		// const {id,title} = this.props.match.params 

		// 接收search参数
		// const {search} = this.props.location
		// const {id,title} = qs.parse(search.slice(1))

		// 接收state参数
		const {id,title} = this.props.location.state || {}

		const findResult = DetailData.find((detailObj)=>{
			return detailObj.id === id
		}) || {}
		return (
			<ul>
				<li>ID:{id}</li>
				<li>TITLE:{title}</li>
				<li>CONTENT:{findResult.content}</li>
			</ul>
		)
	}
}
