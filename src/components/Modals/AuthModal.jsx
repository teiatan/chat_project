import PropTypes from 'prop-types';
import { useState } from "react";
import { ModalCover } from "./ModalCover";

export const AuthModal = ({onClose, changeModal, setUser}) => {

    const [userName, setUserName] = useState('');
    const [areRulesAccepted, setAreRulesAccepted] = useState(false);

    // записати айді користувача, який надав бекенд
    // useEffect(()=> {
    //     socket.on("connection", message => {
    //         localStorage.setItem('user', {id:'message.id', userName});
    //         setUser({id:'message.id', userName});
    //     })
    //   }, []);
    
    const handleSubmit = () => {
        // видалити після підключення бекенду
        localStorage.setItem('user', JSON.stringify({id:'userId', userName}));
        setUser({id:'userId', userName});
        
        // передати на бек ім'я
        // socket.emit("connection", userName);

        onClose();
    };

    return(
        <ModalCover buttonStyles="hidden" wrapperStyles="bg-white" containerStyles="bg-white">
            <form 
                onSubmit={handleSubmit}
                className="h-full flex flex-col justify-center items-center p-4 text-lg"
            >

                <h2 className="text-3xl">Вітаємо у чаті "Базікало"!</h2>

                <label 
                    htmlFor="userName"
                    className="text-center"
                >
                    Введіть своє ім’я чи нікнейм та спілкуйтесь без обмежень
                    <input 
                        type="text" 
                        name="userName" 
                        id="userName"
                        autoFocus
                        autoComplete="off"
                        placeholder="Мій нікнейм"
                        className="border my-[20px] w-[40%] border-slate-950 rounded-lg"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                </label>

                <label htmlFor="rulesAcception">
                    <input 
                        type="checkbox" 
                        name="rulesAcception" 
                        id="rulesAcception"
                        value={areRulesAccepted}
                        onChange={e => setAreRulesAccepted(!areRulesAccepted)}
                    />
                    Погоджуюсь з <button 
                            type="button"
                            className="underline"
                            onClick={() => changeModal('Rules')}
                        >
                            правилами чату
                        </button>
                </label>

                    <button 
                        type="submit"
                        disabled = {!areRulesAccepted || userName === ''}
                        className={`
                            ${(!areRulesAccepted || userName === '') && 'opacity-0'}
                            bg-black text-white my-[30px] p-2 rounded-lg
                        `}
                    >
                        Вперед до спілкування!
                    </button>
                
            </form>
        </ModalCover>
    );
};

AuthModal.propTypes = {
    onClose: PropTypes.func, 
    changeModal: PropTypes.func, 
    setUser: PropTypes.func
}