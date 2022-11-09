import { StyledHeader, StyledBanner } from "./Header..style"
import config from '../../../config.json'

export const Header = () => {
    return (
        <StyledHeader>
            <StyledBanner bg={config.banner}/>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} alt="Github profile" />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}