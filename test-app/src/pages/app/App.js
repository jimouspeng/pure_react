import React from 'react'
import SchoolInfo from '../../components/school-info'
import './App.css'
import { SchoolContext } from '../../context'

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <div>首页内容</div>
                <SchoolContext.Provider value={{ name: 'ncu11', city: 'nanchang' }}>
                    <SchoolInfo name='ncu123' />
                    <SchoolInfo name='ncu321' />
                </SchoolContext.Provider>
            </div>
        )
    }
}
// function App() {
//     const name = 'ncu13124'
//     return (
//         <div className='App'>
//             <div>首页内容</div>
//             <SchoolContext.Provider value={name}>
//                 <SchoolInfo name='ncu123' />
//                 <SchoolInfo name='ncu321' />
//             </SchoolContext.Provider>
//         </div>
//     )
// }

export default App
