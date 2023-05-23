export default function UserInfo(props) {
    // console.log(props.info)
    return (
        <div>
            接收的props: {props.info.count},<span>{props.children}</span>
        </div>
    )
}
