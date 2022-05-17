import React from 'react';
import styled from 'styled-components/macro';
//import FileLabel from './FileLabel';

import Thumbnail from '../../../components/theme/graphics/Thumbnail'

const StyledFile = styled.div`
  display: inline-block;
  border-radius: 25px;
  min-height: 2.5rem;
  height: 100%;
  width: 100%;
  max-width: 500px;
  border: 2px solid #B9D7EA;
  background: #1c1c1e;
  color: #67666a;
  margin: 0 0.5rem;
  margin-bottom: 1rem;
  padding: 0.6rem;
  vertical-align: text-top;

  /* * {
    font-family: 'Helvetica Neue';
  }*/

  label {
    padding-right: 1rem;
    color: #67666a;
    font-weight: 700;
    margin-right: auto;
    margin-left: 0.5rem;
  }
  input {
    padding: 0 1rem;
    height: 2rem;
    background: none;
    border: none;
    color: #67666a;

    &:active,
    &:focus {
      background: #1f3b89;
    }
  }

  @media (max-width: 769px) {
    margin-top: 8vh;

    input {
      height: 2rem;
    }
  }
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1c1c1e;
  margin: 0.15rem;
  border-radius: 5px;
  color: #B9D7EA;
`;

const CarFile = ({ images, vehicleData, edit = false }) => {
  const onInputChange = (e) => {
    e.preventDefault();
  };


  let randomImg = () =>{
    if(images.length >1){

      function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      
      const rndInt = randomIntFromInterval(1, 2)


      return images[rndInt]
    }
  }

  return (
    <StyledFile>
      {/*<FileLabel label="Vehicle Info" />*/}
      <center>
      <Thumbnail src={randomImg()} options={{
        "width": "200px",
        "minWidth": "200px"
      }}/>
      </center>
      <FormGroup>
        <label>Brand</label>
        {edit && <input type='text' value='Mitsubishi' onChange={(e) => onInputChange(e)} />}
        {!edit && vehicleData.brand}
      </FormGroup>
      <FormGroup>
        <label>Make</label>
        {edit && <input type='text' value='Lancer' />}
        {!edit && vehicleData.model}
      </FormGroup>
      <FormGroup>
        <label>Year</label>
        {edit && <input type='text' value='2009' />}
        {!edit && vehicleData.assemblyDate}
      </FormGroup>
      <FormGroup>
        <label>Color</label>
        {edit && <input type='text' value='White' />}
        {!edit && vehicleData.color}
      </FormGroup>
      <FormGroup>
        <label>Vehicle Type</label>
        {edit && <input type='text' value='Flamboyant' />}
        {!edit && vehicleData.vehicleType}
      </FormGroup>
      <FormGroup>
        <label>License Plate</label>
        {edit && <input type='text' value='H4P 3T8' />}
        {!edit && vehicleData.plateNumber}
      </FormGroup>
    </StyledFile>
  );
};

export default CarFile;
