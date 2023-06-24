import { useState } from "react";
import { ModalCover } from "./ModalCover";

export const AuthModal = ({onClose, changeModal, setUser}) => {

    const [userName, setUserName] = useState('');
    const [areRulesAccepted, setAreRulesAccepted] = useState(false);

    const handleSubmit = () => {
        console.log(`My nickname: ${userName}`);
        // socket.emit("connection", 'Name');

        // socket.on("connection", message => {
        // console.log(message);
        // })
        setUser({id:'from backend', userName});
        // save to local storage
        onClose();
    };

    return(
        <ModalCover buttonStyles="hidden">
            <form 
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center p-4"
            >

                <h2>Вітаємо у чаті "Базікало"!</h2>

                <label htmlFor="userName">
                    Введіть своє ім’я чи нікнейм та спілкуйтесь без обмежень
                    <input 
                        type="text" 
                        name="userName" 
                        id="userName"
                        autoFocus
                        autoComplete="off"
                        placeholder="Мій нікнейм"
                        className="w-full"
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

                {areRulesAccepted && userName !== '' && <button type="submit" className="bg-teal-700">Вперед до спілкування!</button>}
                
            </form>
        </ModalCover>
    )
}