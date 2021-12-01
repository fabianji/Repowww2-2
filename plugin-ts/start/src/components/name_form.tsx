import React, {RefObject} from "react";

export default class NameForm extends React.Component {
    nameRef: RefObject<HTMLInputElement> = React.createRef()
    handleSubmit = (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault()
        alert(this.nameRef.current.value)
    }
    render(): React.ReactNode {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={this.nameRef}/>
                <button>Submit</button>
            </form>
        )
    }
}