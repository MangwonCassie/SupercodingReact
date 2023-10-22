import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
'e06e4eca-a0e7-4f23-b095-feeab9ba6a42', props.user.username, props.user.secret);

    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
        </div>
    )
}


export default ChatsPage;