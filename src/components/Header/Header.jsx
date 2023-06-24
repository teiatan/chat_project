export const Header = ({userName}) => {
    return (
        <div className="fixed w-screen h-[80px] z-10 bg-[#D9D9D9] text-2xl">
            <div className="w-[1000px] h-full flex items-center justify-between m-auto">
                <div>LOGO</div>

                <div>
                    <button>Theme button</button>

                    {true ?
                        <button>{userName}</button> :
                        <button>Language button</button>
                    }
                </div>
            </div>
        </div>
    )
};