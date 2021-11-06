import './ChoiseOptions.css'


export default function ChoiseOptions({ state, setState, data }) {

    const handleClick = (e) => {

        e.preventDefault()
        let name = e.target.name;
        let value = e.target.value

        if (name === "selected") {
            let newState = state?.filter(elements => elements !== value)
            setState(newState)
        }
        else if (name === "add" && state) {
            setState([...state, value])
        }
    }

    return (
        <div className="choise-options">
            <div className="choise-divs-options">
                <strong>SELECCIONADAS</strong>
                {
                    state?.length
                        ? state.map((selectedState, i) =>
                            <button
                                className="choise-buttons choise-selected"
                                key={selectedState + i}
                                onClick={(e) => handleClick(e)}
                                name="selected"
                                value={selectedState}
                            >{selectedState}</button>
                        )
                        : <p>VACIO</p>
                }
            </div>
            <div className="choise-divs-options">
                <strong>AGREGAR</strong>
                {
                    data?.length
                        ? data.map((addData, i) => {
                            let exist = state?.includes(addData.name) || false

                            if (!exist) {
                                return (
                                    <button
                                        className="choise-buttons choise-add"
                                        key={addData.id}
                                        onClick={(e) => handleClick(e)}
                                        name="add"
                                        value={addData.name}
                                    >{addData.name}</button>
                                )
                            }
                            else return ""
                        })
                        : <p>VACIO</p>
                }
            </div>
        </div>
    )
}