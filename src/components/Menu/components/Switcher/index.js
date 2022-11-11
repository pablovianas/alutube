import { StyledSwitch } from "./Switcher.style"
import { ColorModeContext } from "../../../../contexts/ColorMode"
import { useContext } from "react"

export const DarkModeSwitch = () =>{
    const context = useContext(ColorModeContext)
    return (
        <StyledSwitch>
            <input id="darkmode" type="checkbox" onChange={() => context.toggleMode()} />
            <label
                htmlFor="darkmode"
                className="darkmode-switch"
            >
                <span>🌙</span>
                <span>☀️</span>
            </label>
        </StyledSwitch>
    )
}