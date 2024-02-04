import React from 'react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
function Emoji() {
    return <>
        <Picker data={data} onEmojiSelect={console.log} dynamicWidth={true} />
    </>
}
export default Emoji