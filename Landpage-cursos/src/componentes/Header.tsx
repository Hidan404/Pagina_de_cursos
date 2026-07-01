import  "./Header.css"

export function Header(){
    return (
        <header>
            <nav className="menu">
                <img src="./Logo.png" alt="" />
                <p className="btn-premium cursor-pointer">Premium</p>
            </nav>
        </header>
        
    )
}