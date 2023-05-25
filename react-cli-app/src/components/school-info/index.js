// export default function SchoolInfo() {
//     return (
//         <fragment>
//             <div>学校名称:</div>
//             <div>专业名称:</div>
//         </fragment>
//     )
// }

import React, { Fragment, Suspense, createRef } from 'react'
// import UserInfo from '../user-info/index'
import UserInput from '../user-input/index'
import { SchoolContext } from '../../context/index'
const UserInfo = React.lazy(() => import('../user-info/index'))
const divRef = createRef('div')
export default class SchoolInfo extends React.Component {
    // eslint-disable-next-line no-undef
    static contextType = SchoolContext
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
                <div>context: {this.context.name}</div>
                <Suspense fallback={<div>loading</div>}>
                    <UserInfo info={this.state} ref={divRef}>
                        <div>用户自定义内容，插槽QAQ</div>
                    </UserInfo>
                </Suspense>
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
        console.log(this, '???', divRef.current)
        divRef.current.innerHTML = 'hahaha 改变以下'
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
        console.log(this.context, 'context?????')
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
