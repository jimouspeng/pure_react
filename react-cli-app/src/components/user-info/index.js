import { useContext, forwardRef, useState, useEffect } from 'react'
import { SchoolContext } from '../../context/index'

const UserInfo = forwardRef((props, ref) => {
    // console.log(props.info, useContext(SchoolContext), 'ahahahah哈哈哈哈')
    const schoolContext = useContext(SchoolContext)
    const [info, setInfo] = useState({ name: 'jimous', age: 16 })
    useEffect(() => {
        console.log('组件渲染完毕')
    })
    return (
        <div>
            {/* 函数组件使用Context */}
            <SchoolContext.Consumer>
                {(value) => {
                    return (
                        <div>
                            User-Info with Context: {value.name}, {value.city}
                        </div>
                    )
                }}
            </SchoolContext.Consumer>
            <div ref={ref}>
                接收的props: {props.info.count},<span>{props.children}</span>
            </div>
            <span>这是是context: {schoolContext.name}</span>
            <div onClick={() => setInfo({ ...info, age: info.age + 1 })}>
                用户信息：
                <br />
                <span>name: {info.name}</span>
                <br />
                <span>age: {info.age}</span>
            </div>
        </div>
    )
})

export default UserInfo

// import React from 'react'
// import { SchoolContext } from '../../context'
// export default class UserInfo extends React.Component {
//     static contextType = SchoolContext
//     constructor(props) {
//         super(props)
//         this.state = { name: 'jimous' }
//     }
//     render() {
//         return (
//             <div>
//                 接收的props: {this.props.info.count},<span>{this.props.children}</span>
//                 <div>接收的context: {this.context.city}</div>
//             </div>
//         )
//     }
// }
