import React from "react";

class NoteForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {text: '', isActive: "", project: [], user: []}

    }

    handleChangeText(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
        console.log(this.state["text"]);
    }

    handleChangeIsActive(event) {
      this.setState(
          {
              [event.target.name]: event.target.checked
          }
      )
    }

    handleProjectChange(event) {

        if (!event.target.selectedOptions) {
            this.setState({
                'project': []
            })
            return;
        }
        let project = []
        for(let i = 0; i < event.target.selectedOptions.length;i++){
            project.push(event.target.selectedOptions.item(i).value)
        }
        this.setState(
            {'project': project[0]}
        )

    }

    handleUserChange(event) {

        if (!event.target.selectedOptions) {
            this.setState({
                'user': []
            })
            return;
        }
        let user = []
        for(let i = 0; i < event.target.selectedOptions.length;i++){
            user.push(event.target.selectedOptions.item(i).value)
            console.log(event.target.selectedOptions.item(i).value);
        } 
        this.setState(
            {'user': user[0]}
        )

    }

    handleSubmit(event) {
      this.props.create_note(this.state.text, this.state.isActive, this.state.project, this.state.user)
      event.preventDefault()
    }


    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>

                <div className="form-group">
                    <label htmlFor="text"></label>
                    <input type="text" name="text" placeholder="text"
                           value={this.state.text}
                           onChange={(event) => this.handleChangeText(event)}/>
                </div>

                <input type="checkbox" value="true" name="isActive" onChange={(event) => this.handleChangeIsActive(event)}/>

                <select name="project" multiple
                        onChange={(event) => this.handleProjectChange(event)}>
                    {this.props.project.map((item) => <option
                        value={item.id}>{item.name}</option>)}
                </select>

                <select name="user" multiple
                        onChange={(event) => this.handleUserChange(event)}>
                        <option
                            value="1">1</option>
                </select>


                <input type="submit" value="Save"/>
            </form>
        )

    }
}

export default NoteForm
