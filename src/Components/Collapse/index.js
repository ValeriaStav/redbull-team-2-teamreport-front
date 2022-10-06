import * as React from "react";
import "./styles.js";
import useCollapse from "react-collapsed";

export function Collapse({ isActive }) {
    const [isExpanded, setExpanded] = React.useState(isActive);
    const { getToggleProps, getCollapseProps } = useCollapse({
        isExpanded,
    });

    React.useEffect(() => {
        setExpanded(isActive);
    }, [isActive, setExpanded]);

    return (
        <>
            <button
                {...getToggleProps({
                    style: { display: "block" },
                    onClick: () => setExpanded((x) => !x),
                })}
            >
                {isActive ? "Collapse" : "Expand"}
            </button>
            <div
                {...getCollapseProps({
                    style: { backgroundColor: "lightblue" },
                })}
            >
                <h2 style={{ margin: 0, padding: 10 }}>
                    Start editing to see some magic happen!
                </h2>
            </div>
        </>
    );
}

export default function App() {
    const [isExpanded, setExpanded] = React.useState(true);

    return (
        <App>
            <h1>Hello CodeSandbox</h1>
            <button onClick={() => setExpanded((x) => !x)}>toggle</button>
            <Collapse isActive={isExpanded} />
        </App>
    );
}
