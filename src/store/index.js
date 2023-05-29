import { observable } from 'mobx'

class userInfo {
    id = Math.random()
    @observable name = ''
    @observable age = 24
}
