import axios from 'axios';
import React, { Component } from 'react';
import Global from './../Global';

export default class Formulario extends Component {
    
    
    state = {
        especialidades: [],
        incremento: 0,
        status: false
    }

    loadEspecialidades = () => {
        
        var request = "/api/Doctores/Especialidades"
        var url = Global.url + request;
        
        axios.get(url).then(res => {
            this.setState({
                especialidades:res.data,
                status: true
            })
            
        });
    }
    componentDidMount = () => {
        this.loadEspecialidades();
    }

///NO ME HA DADO TIEMPO A CONTINUAR POR QUE ME HE TIRADO TODO EL EXAMEN ARREGLANDO UN
  render() {
    return (
      <div>

        <h1>Tabla</h1>
        <form>
            <label>Selecciona una especialidad</label><br></br>
            <select>
                {
                    this.state.status == true && 
                    (
                        this.state.especialidades.map((especialidad, index) => {
                            return(<option key={index} value={especialidad}>{especialidad}</option>)
                        })
                    )
                }
            </select>
            <label>Incremento Salarial</label><br></br>
            <input type="text" ></input>
        </form>
      </div>
    )
  }
}
