import styled from "styled-components"

const Flex = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height:90vh;
    background-color: ${(props)=> props.theme.backgroundColor};
`;

const Text = styled.h1`
    font-size: 30px;
    color: ${(props) => props.theme.textColor};
`;
function Test2(){
    return <Flex>
        <Text>Hellow!</Text>
    </Flex>;
}

export default Test2;