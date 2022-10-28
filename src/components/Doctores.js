import axios from 'axios';
import React, { Component } from 'react';
import Global from './../Global';


export default class Doctores extends Component {

    state = {
        doctores: [],
        status: false
    }

    loadDoctoresEspecialidad = () => {
        var request = "/api/Doctores";
    
        var url = Global.url + request;
        console.log(url);
        axios.get(url).then(res => {
            this.setState({
                doctores: res.data,
                status: true
            });
        });
    }
    loadEspecialidades = () => {
        var request = "​/api​/Doctores​/Especialidades";
        var url = Global.url + request;
        axios.get(url).then(res => {
            this.setState({

            });
        });
        
    }
    componentDidMount = () => {
        this.loadDoctores();
    }

    render() {
        return (
            <div>

                {
                    this.state.status == true && (
                        <div>
                            <table border="1px">
                                <thead>
                                    <tr>
                                        <th>Apellido</th>
                                        <th>Especialidad</th>
                                        <th>Salario</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.doctores.map((doctor, index) => {
                                            return (<tr key={index}>
                                                <td>{doctor.apellido}</td>
                                                <td>{doctor.especialidad}</td>
                                                <td>{doctor.salario}</td>


                                            </tr>)

                                        })
                                    }
                                </tbody>


                            </table>
                        </div>
                    )
                }



            </div>
        )
    }
}
