import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5d0fe;
`
export const BgCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 28px;
  border-radius: 13px;
  background-color: #ffffff;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 550px;
  color: #000000;
`

export const EditableContainer = styled.div`
  display: flex;
  align-items: center;
`

export const UserInput = styled.input`
  border: 1px solid #cbd2d9;
  border-radius: 8px;
  height: 50px;
  padding: 5px;
  margin-right: 8px;
  outline: none;
  cursor: pointer;
`

export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 550;
  color: #ffffff;
  background-color: #d946ef;
  border-radius: 8px;
  border-width: 0px;
  border-style: solid;
  height: 50px;
  width: 60px;
  outline: none;
  cursor: pointer;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 550px;
  margin-right: 13px;
  color: #000000;
`
