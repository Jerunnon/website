import { IconContext } from "react-icons";
import { GrSend } from 'react-icons/gr'

const SendIcon = () => (
    <IconContext.Provider value={{ style: { color: 'white' }}} >
        <GrSend />
    </IconContext.Provider>
)

export default SendIcon;