import React from 'react';
import Student from './Student';

class StudentsList extends React.Component {

    renderHeader() {
        return Object.keys(new Student()).map((key, index) => {
            return (
                <th key={index} scope="col">
                    {key.substring(1)}
                </th>
            );
        });
    }

    renderBody(students) {
        return students.map(({ carnet, horario, tarde }) => {
            return (
                <tr key={carnet}>
                    <td>{carnet}</td>
                    <td>{horario}</td>
                    <td>{tarde ? "Tarde" : "A tiempo"}</td>
                    <td>
                        <button  onClick={() => {this.props.onDelete(carnet)}}>Delete</button>
                    </td>
                </tr>
            );
        });
      
    }

    render() {
        return (
            <section>
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-dark">
                                {this.renderHeader()}
                                <th> actions</th>
                            </tr>
                        </thead>
                        <tbody id="table_body">
                            {this.renderBody(this.props.students)}
                        </tbody>
                    </table>
                </div>
            </section>
            
        );
    }
}

export default StudentsList;