import React, { Component } from 'react';
import db from '../firestoreConfig';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText, InputGroup   } from 'reactstrap' ;


class  CreateProduct extends Component {
    state = {
        items : [],
        inputValue : ''
        
      }



    

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
            </div>
          );
    }
}
 
export default CreateProduct;