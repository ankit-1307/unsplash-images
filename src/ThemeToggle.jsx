import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useGlobalContext(false);

    return (
        <section className="toggle-container">
            <button className="dark-toggle" onClick={toggleDarkTheme}>
                {isDarkTheme ? (
                    <BsFillSunFill
                        style={{ color: "white" }}
                        className="toggle-icon"
                    />
                ) : (
                    <BsFillMoonFill className="toggle-icon" />
                )}
            </button>
        </section>
    );
};

export default ThemeToggle;
