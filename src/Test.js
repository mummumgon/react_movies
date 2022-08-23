import styled , {keyframes} from "styled-components"
import { BrowserRouter,Routes,Route ,Link} from "react-router-dom";
const Section = styled.section`
  display:flex;
`;

const move = keyframes`
0%{margin-left:0}
50%{margin-left:100px}
100%{margin-left:0}
`;
const rotete = keyframes`
0%{transform:rotate(0deg);}
100%{ transform:rotate(360deg)}
`;

const Emogi = styled.span`

`;

const Box = styled.div`
  width:100px; 
  height:100px; 
  background-color: ${(props) => props.bgColor};
  span{
    display:block;
    &:hover{
      color:red
    }
    &:active{
      display:none
    }
  }
`;

const Movebox = styled(Box)`
  animation: ${move} 1s ease-in-out both;
`;
const Rotatebox = styled(Box)`
  display:flex;
  align-items: center; justify-content: center;
  font-size: 40px;
  animation: ${rotete} 1s ease-in-out both; 
  margin-left:100px;
  /* const Emogi 이모지 안에 있는 애들만 적용*/
  ${Emogi}:hover{
    font-size: 90px;
  }
  `;

const Title = styled.h2`
  color: #fff; font-size:20px ; text-align: center;
`;

const Btn = styled.button`
  width: 100px; text-align: center; background-color: tomato;
  font-size: 16px; line-height: 40px; color: #fff; border: 0; margin: 0 5px; cursor: pointer;
`;

const Input = styled.input.attrs({required: true})`
line-height: 40px; border-width:2px;
`;
function Test(){
    return <div>
    <Section>
    <Box bgColor="tomato">
      <span>Title3</span>
      <Title>HELLOW</Title>
    </Box>
    <Movebox bgColor="teal">
      <span>Title3</span>
      <Title as="span">Title1</Title>  
      <Title as="span">Title2</Title>  
    </Movebox>
  </Section>
  <hr/>
  <Section>
    <Btn> 버튼 1</Btn>
    <Btn as="a" href="./test">버튼 이동1</Btn>
  </Section>
  <Section>
    <Input/>
    <Input/>
    <Input/>
    <Input/>
    <Input/>
  </Section>
  <br/>
  <br/>
  <br/>
  <Section>
    <Rotatebox bgColor="green">
      <Emogi as="p">😁</Emogi> {/* 적용됨 hover */}
      <span>😘</span> {/* 적용안됨 hover */}
      
    </Rotatebox>
    <Emogi>😁</Emogi> {/* 적용안됨 hover */}
  </Section>
  </div>
}

export default Test;