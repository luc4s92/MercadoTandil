import React, { Component } from 'react';
import db from '../firestoreConfig';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText, InputGroup, Table   } from 'reactstrap' ;


class  CreateProduct extends Component {
    state = {
        items : [],
        inputValue : ''
        
      }


      componentDidMount(){
        db.collection('productos').onSnapshot((snapShots) =>{
            this.setState({
                items: snapShots.docs.map( doc => {
                    return {
                        id: doc.id,
                        data: doc.data()
                    }
                })
            })
        },error =>{
            console.log(error)
        });   
    };

    

    changeValue = (e) =>{
        this.setState({
            inputValue: e.target.value
        })
    };

    
    action = () =>{
        const { inputValue } = this.state;
        
        db.collection('productos').add({
            
            item: inputValue,
            
        }).then ( ()=> {
           console.log('Agregado')
        }).catch( ()=>{
            console.log('error')
        })
    };


    render() { 
        const {items, inputValue} = this.state;
        return (
            <div>
                <Row>
                   
                    
                    <Col xs="10">                    
                    <InputGroup>
                            <Input
                                placeholder="Agregar un nuevo producto"                                
                                value={inputValue}
                                onChange={this.changeValue}
                            />
                    </InputGroup>
                        
                    </Col>
                    <Col xs="2">
                        <div className="text-right btn-block">
                        <Button color="primary" onClick={this.action} >Agregar Producto</Button>
                        </div>
                    </Col>
                </Row>
                <Table hover className="text-center mt-4">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                        {items && items !== undefined ? items.map((item, key) => (
                                <tr key={key} >
                                    <td>{item.data.item}</td>
                                    <td><Button color="warning" onClick={()=> this.getTodo(item.id)}>Editar</Button></td>
                                    <td><Button color="danger" onClick={ ()=> this.deleteItem(item.id)}>Eliminar</Button></td>
                                </tr>
                            )): null }
                        </tbody>
                </Table>        
            </div>
          );
    }
}
 
export default CreateProduct;