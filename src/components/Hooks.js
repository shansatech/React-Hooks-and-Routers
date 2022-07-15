import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Hooks = () => {
    return (
        <div>
            <div style={{
                // background: "yellow",
                "height": "30px",
                "width": "100%",
                "display": "flex",
                "alignItems": "center",
                "position": "relative",
                "padding": "0.5rem 0rem",
                "backgroundColor": "#fff",
                "color": "black",
                "boxShadow": "0 2px 2px 2px rgba(9, 9, 9, 0.23)",
                "justifyContent": "space-evenly",
                "textDecoration": "none",
                "fontWeight": "bold"
            }}>
                <Link to='/hooks/use-state'>useState</Link>
                <Link to='/hooks/use-effect'>useEffect</Link>
                <Link to='/hooks/use-context'>useContext</Link>
                <Link to='/hooks/use-reducer'>useReducer</Link>
                <Link to='/hooks/use-callback'>useCallback</Link>
                <Link to='/hooks/use-memo'>useMemo</Link>
                <Link to='/hooks/use-ref'>useRef</Link>
                <Link to='/hooks/custom-hook'>Custom Hook</Link>
            </div>
            <Outlet />
        </div >
    )
}
