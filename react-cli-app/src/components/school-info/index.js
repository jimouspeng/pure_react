// export default function SchoolInfo() {
//     return (
//         <fragment>
//             <div>学校名称:</div>
//             <div>专业名称:</div>
//         </fragment>
//     )
// }

import React, { Fragment } from 'react'
import UserInfo from '../user-info/index'
import UserInput from '../user-input/index'
export default class SchoolInfo extends React.Component {
    /** 如果需要接收props，那么必须调用父类的构造函数，并将props传入
     *  如果不需要props, 类组件可不定义构造函数
     */
    constructor(props) {
        super(props)
        this.state = { name: props.name || '', count: 0 }
        // this绑定
        // this.addCount = this.addCount.bind(this)
    }
    render() {
        return (
            <Fragment>
                {this.state.name && (
                    <div onClick={() => this.addCount()}>
                        学校名称: {this.state.name} {this.state.count}
                    </div>
                )}
                <div>专业名称:</div>
                <UserInfo info={this.state}>
                    <div>用户自定义内容，插槽QAQ</div>
                </UserInfo>
                <div>用户输入内容：</div>
                <UserInput inputText={this.state.count} onhandleChange={this.handleChange} />
            </Fragment>
        )
    }
    handleChange = (value) => {
        this.setState({
            count: value,
        })
    }
    addCount() {
        console.log(this, '???')
        this.setState({
            count: this.state.count + 1,
        })
    }
    // addCount = () => {
    //     this.setState({
    //         count: this.state.count + 1,
    //     })
    // }
    componentDidMount() {
        // this.timerId = setInterval(() => {
        //     this.setState({
        //         count: this.state.count + 1,
        //     })
        // }, 2000)
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
}

// export default class SchoolInfo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { type: 'class' }
//     }
//     render() {
//         return <div>这是一个{ this.state.type }组件</div>
//     }
// }
