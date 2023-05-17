import styled from "styled-components";
import fone from './images/img.jpg'

export const AppContainer = styled.div`
    color: white;
`
//Header
export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 20px;
`
export const Logo = styled.div`
    @import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
    font-family: 'Proxima Nova', sans-serif;
    width: 30px;
    font-size: 24px;
`
export const Menu = styled.div`
`
export const UlContent = styled.ul`
    display: flex;
    list-style-type: none;
`
export const LiMenu = styled.li`
    @import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
    font-family: 'Proxima Nova', sans-serif;
    font-size: 20px;
    padding-left: 15px;
`
export const Contact = styled.div`
    display: flex;
    align-items: center;
`

export const PhoneNumber = styled.h3`
    @import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
    font-family: 'Proxima Nova', sans-serif;
    font-size: 27px;
`

export const LinkPhone = styled.p`
    @import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
    font-family: 'Proxima Nova', sans-serif;
    margin-left: 25px;
    font-size: 15px;
    border-bottom: 1px grey solid;
    
`

//Content
export const ContentContainer = styled.div`
    background: url(${fone});
    filter: brightness(85%);
    width: 100vw;
    height: 100vh;
    background-size: cover;
`
export const Wrapper = styled.div`
    margin: 150px;
`
export const Title = styled.h1`
    @import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
    font-family: 'Proxima Nova', sans-serif;
    width: 60%;
    font-size: 48px;
`
export const Description = styled.p`
    @import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
    font-family: 'Proxima Nova', sans-serif;
    width: 55%;
    font-size:27px;
`
export const Button = styled.button`
    margin-top: 40px;
    border: none;
    width: 300px;
    height: 45px;
    border-radius: 4px;
    background-color: #FEB240;
    color: white;
    font-size: 25px;
`
//Description Company
export const ContainerDescription = styled.div`
    background: #18171D;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
`
export const ImagesBlock = styled.img`
    height: 680px;
    width: 40%;
    margin-top: 75px;
    margin-bottom: 55px;
`
export const TextBlock = styled.div`
    @import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
    font-family: 'Proxima Nova', sans-serif;
    margin-top: 100px;
    margin-right: 250px;
    width: 35%;
`
export const DescriptionText = styled.p`
    @import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
    font-family: 'Proxima Nova', sans-serif;
    width: 500px;
    font-size: 20px;
`
export const StatikNumber = styled.h1`
    @import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
    font-family: 'Proxima Nova', sans-serif;
    font-size: 45px;
    margin: 0;

`
export const StatikText = styled.p`
    @import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
    font-family: 'Proxima Nova', sans-serif;
    font-size: 21px;
`

//Example project
export const ExampleProject = styled.div`
    @import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
    font-family: 'Proxima Nova', sans-serif;
    color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    margin-top: 70px;
`
export const TextBlocks = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    margin-top: 150px;
`
export const NameProject = styled.h1` 
    font-size: 55px;
`
export const DescriptionProject = styled.p`
    font-size: 23px;
`
export const ImageBlockProject = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25%;
    justify-content: end;
    width: 80%;
    height: 500px;
`
export const ImageProject = styled.img`
    width: 100%;
    height: 300px;
`

//comparison
export const ComparisonBlock = styled.div`
    @import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
    font-family: 'Proxima Nova', sans-serif;
    margin-top: -125px;
    margin: 0px 100px;
`
export const ComparisonName = styled.h1`
    font-size: 37px;
`
export const ComparisonTitle = styled.h1`
    width: 65%;
`
export const BlockComparison = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
`
export const ComparisonDescription = styled.p`
width: 70%;
    font-size: 22px;
`
export const ComparisonImages = styled.img`
    width: 40%;
    height: 500px;
`
export const BlockComparisonTextR = styled.div`
    margin-left: 30px;
    width: 50%;
`
export const BlockComparisonTextL = styled.div`
    margin-right: 30px;
    width: 50%;
`

export const ComparisonGeneralText = styled.div`
margin-bottom: 60px;
`

//connection
export const Connection = styled.div`
    @import url('https://fonts.cdnfonts.com/css/proxima-nova-2');
    font-family: 'Proxima Nova', sans-serif;

    display: flex;
    justify-content: space-between;
    margin-top: 250px;
    margin-bottom: 250px;
`
export const ConnectionBlockInput = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-top: 150px;
`
export const ConnectionTitle = styled.h1`
    font-size: 37px;
`
export const ConnectionInput = styled.input`
    background: none;
    border: none;
    border-bottom: 1px #FEB240 solid;
    height: 40px;
    margin-bottom: 10px;
    color: white;
    padding-left: 15px;
    
    ::placeholder {
        color: white;
    }
`
export const ConnectionBlockButton = styled.div`
    text-align: center;
    margin-top: 30px;
`
export const ConnectionButton = styled.button`
    border-radius: 15px;
    border: none;
    height: 33px;
    width: 240px;
    text-align: center;
    background: #FEB240 ;
    color: white;
    font-size: 18px;
`
export const ConnectionImage = styled.img`
    width: 40%;
    height: 590px;
`



//Footer
export const FooterContainer = styled.div``


