import React from 'react';
import Student from './Student';

class StudentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { carnet: '', horario: '', tarde: true };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Manejador del evento de submit, ejecuta la funcion saveStudent
    // Pasada por props
    handleSubmit(event) {
        event.preventDefault();
        // Se necesitan validaciones de entrada
        let student = new Student(this.state.carnet, this.state.horario, this.state.tarde);
        this.props.onSave(student);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    // Label + input
    // TODO: Necesita se modificado para funcionar con todos los tipos de entrada
    renderInput(name,labeltext,placeholder, id, classl, classi,type = "text") {
        if (type === "checkbox"){
            return(
                <fieldset  className="form-group">
                    <div className="custom-control custom-switch">
                        <input
                            className= {classi}
                            type={type}
                            name={id} id={id}
                            checked={this.state.name}
                            onChange={this.handleInputChange} 
                        />
                        <label htmlFor={id} className = {classl}>{labeltext}</label>
                    </div>
                </fieldset>

            );
        }
        return (
            /* Se un fragmento React, para establecer que este código se hijo directo en el resultado */
            <fieldset className = "form-group">
                <label htmlFor={name} className = {classl}>{labeltext}</label>
                <input
                    className = {classi}
                    type={type}
                    name={name} id={id}
                    value={this.state.name}
                    placeholder= {placeholder}
                    onChange={this.handleInputChange} />
            </fieldset>
        );
    }
    renderOptions(){
        return(
            <div className="form-group">
                <label htmlFor="horario">Seleccione el horario:</label>
                <select name="horario" className="form-control" id="schedule_field" value={this.state[name]} onChange={this.handleInputChange} >
                    <option value="Lunes de 9:00 a 11.00">Lunes de 9:00 a 11.00</option>
                    <option value="Martes de 13:30 a 15:30">Martes de 13:30 a 15:30</option>
                    <option value="Miércoles de 9:00 a 11.00">Miércoles de 9:00 a 11.00</option>
                    <option value="Jueves de 13:30 a 15:30">Jueves de 13:30 a 15:30</option>
                    <option value="Viernes de 9:00 a 11.00">Viernes de 9:00 a 11.00</option>
                    <option value="Viernes de 15:30 a 17:30">Viernes de 15:30 a 17:30</option>
                </select>
            </div>
        );
    }

    render() {
        return (
            <form id="contact" className="jumbotron" action="" onSubmit={this.handleSubmit}>
                <h3>Registro de laboratorio.</h3>
                {this.renderInput("carnet","Ingrese el carnet:","00031111","carnet_field","col-sm-2 col-form-label","form-control",'text')}
                {this.renderOptions()}
                {this.renderInput("tarde","llego tarde?:"," ","late_switch","custom-control-label","custom-control-input", "checkbox")}
                <fieldset className="form-group">
                    <button name="submit" type="submit" id="contact-submit" className="btn btn-danger" data-submit="...Sending">Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default StudentForm;