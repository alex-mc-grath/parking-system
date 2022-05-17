import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Thumbnail from '../../../components/theme/graphics/Thumbnail'
import Grid from '../../../components/theme/layout/Grid'

//import FileLabel from './FileLabel';

const StyledFile = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 0.1rem;
  min-height: 2.5rem;
  color: #67666a;
  border: none;
  vertical-align: text-top;

   /* * {
    font-family: 'Helvetica Neue';
  }*/

  label {
    padding: 0 0.3rem;
    color: #67666a;/*rgb(193,145,99);*//*#1f3b89;*/
    font-weight: 700;
    margin: 0.4rem auto;

    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.6rem;
  }
  input {
    font-size: 1rem;
    padding: 0 1rem;
    height: 2rem;
    background: none;
    border: none;
    color: #67666a;
    letter-spacing: 1px;
    width: fit-content;
    max-width: 14rem;

    &:active,
    &:focus {
      background: #1f3b89;
    }
  }

  textarea {
    width: 90%;
    resize: none;
    color: #67666a;
    background: #1c1c1e;
    border: none;
    margin: 0.5rem;
  }

  .flex-grid {
    display: flex;
    flex-wrap: wrap;
    height: min-content;
    min-width:100%;
  }
`;

const FormGroup = styled.div`

  background: #2c2c2d; /*linear-gradient(to left, #2c2c2d, #1c1c1e);*/
  padding: 0.1rem 0.5rem;
  border-radius: 5px;
  text-align: center;
  height: 100%;
  width:150px;
  color: #B9D7EA;
  

  hr {
    height: .5px;
    margin: 0.2rem 0;
    background: linear-gradient(to right, #B9D7EA, #B9D7EA);
    color: #1f3b89;
    border: none;
  }

  .notes{
    padding:1rem;
  }
`;

const PersonFile = ({ images, individualData, edit = false }) => {
  const onInputChange = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{display: "inline-block", marginBottom: "1rem"}}>
    <Thumbnail src={images[0]} />
    <StyledFile>

      <Grid baseKey={individualData._id+"Grid"} layout = {{
        columns: 2,
        gap: "5px",
        cells: [
          <FormGroup>
            <label>Surname</label>
            <hr />
            {edit && <input type='text' onChange={(e) => e.target.value} value='' onChange={(e) => onInputChange(e)} />}
            {!edit && 'Maria'}
          </FormGroup>,
          <FormGroup>
            <label>Name</label>
            <hr />
            {edit && <input type='text' onChange={(e) => e.target.value} value='' />}
            {!edit && 'Johnson'}
          </FormGroup>,
          <FormGroup>
            <label>Birthday</label>
            <hr />
            {edit && <input type='text' onChange={(e) => e.target.value} value='' />}
            {!edit && individualData.birthDate}
          </FormGroup>,

          <FormGroup>
            <label># Permit</label>
            <hr />
            {edit && <input type='text' onChange={(e) => e.target.value} value='E857038-489s' />}
            {!edit && 'E857038-489s'}
          </FormGroup>,

          <FormGroup>
            <label>Phone</label>
            <hr />
            {edit && <input type='text' onChange={(e) => e.target.value} value='514-353-9330' />}
            {!edit && individualData.phoneNumbers.home && <div><i className="fa-solid fa-house"></i> 218-510-3400</div>}
            {!edit && individualData.phoneNumbers.cell && <div><i className="fa-solid fa-mobile-screen-button"></i> {individualData.phoneNumbers.cell}</div>}
          </FormGroup>,
          <FormGroup>
            <label>Address</label>
            <hr />
            {edit && <input type='text' onChange={(e) => e.target.value} value='158 chemin du fort nickel' />}
            {!edit && '2550 icy drive'}
          </FormGroup>,
          <FormGroup>
            <label>City</label>
            <hr />
            {edit && <input type='text' onChange={(e) => e.target.value} value='Port-au-Prince' />}
            {!edit && 'Chicago'}
          </FormGroup>,
          <FormGroup>
            <label>Country</label>
            <hr />
            {edit && <input type='text' onChange={(e) => e.target.value} value='Haiti' />}
            {!edit && 'USA'}
          </FormGroup>,
          <FormGroup>
            <label>Notes</label>
            <hr />
            <div className="notes">Parking paid for the whole month</div>
          </FormGroup>
        ]
      }} />
        
    </StyledFile>
    </div>
  );
};

export default PersonFile;
