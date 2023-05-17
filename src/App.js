import React from 'react';
//components

//styled
import GeneralStyle from './GeneralStyle';
import {
  AppContainer,
  Contact,
  ContentContainer,
  FooterContainer,
  HeaderContainer,
  LiMenu,
  Logo,
  Menu,
  UlContent,
  PhoneNumber,
  LinkPhone,
  Wrapper,
  Title,
  Description,
  Button,
  ContainerDescription,
  ImagesBlock,
  TextBlock,
  DescriptionText,
  StatikNumber,
  StatikText,
  ExampleProject,
  NameProject,
  DescriptionProject,
  ImageBlockProject,
  ImageProject,
  TextBlocks,
  ComparisonBlock,
  ComparisonName,
  ComparisonDescription,
  ComparisonTitle,
  ComparisonImages,
  BlockComparison,
  BlockComparisonTextL,
  BlockComparisonTextR,
  ComparisonGeneralText,
  Connection,
  ConnectionBlockInput,
  ConnectionImage,
  ConnectionTitle,
  ConnectionInput,
  ConnectionButton,
  ConnectionBlockButton
} from './App.styled';
//images
import img from './images/imagess.jpg'
import example1 from './images/example1.jpg'
import example2 from './images/example2.jpg'
import example3 from './images/example3.jpg'
import example4 from './images/example4.jpg'
import example5 from './images/example5.jpg'
import example6 from './images/example6.jpg'
import exampleBad from './images/bad-img.jpg'
import exampleGood from './images/good-img.jpg'
import connection from './images/connection.jpg'

function App() {
  return (
    <>
      <GeneralStyle></GeneralStyle>
      <AppContainer>
        <ContentContainer>
          <HeaderContainer>
            <Logo>City realty</Logo>
            <Menu>
              <UlContent>
                <LiMenu>О компании</LiMenu>
                <LiMenu>Наши работы</LiMenu>
                <LiMenu>Как связаться</LiMenu>
                <LiMenu>Связь</LiMenu>
              </UlContent>
            </Menu>
            <Contact>
              <PhoneNumber>8(499)999 99 99</PhoneNumber>
              <LinkPhone>Заказать звонок</LinkPhone>
            </Contact>
          </HeaderContainer>
          <Wrapper>
            <Title>Именно ты можешь улучшить свой город . Оставь заявку !</Title>
            <Description>Наша компания помогает жителям любого города улучшить условия проживания в своём городе. Если ты готов принять в этом участие, то не медли</Description>
            <Button>Оставить заявку</Button>
          </Wrapper>
        </ContentContainer>
        <ContainerDescription>
          <ImagesBlock src={img} />
          <TextBlock>
            <Title>City Reality</Title>
            <DescriptionText>Компания которая предоставляет комфортные условия проживания в любом городе. Многолетний опыт, иновационные технологии, внимательность к тренлдам и забота о своих клиентах - слагаемые компании , которую любят</DescriptionText>
            <StatikNumber>15+</StatikNumber>
            <StatikText>Городов,с которыми мы работаем </StatikText>
            <StatikNumber>30 дней</StatikNumber>
            <StatikText>В среднем проводятся работы</StatikText>
            <StatikNumber>100%</StatikNumber>
            <StatikText>Довольны работой</StatikText>
          </TextBlock>
        </ContainerDescription>
        <ExampleProject>
          <TextBlocks>
            <NameProject>Наши проекты </NameProject>
            <DescriptionProject>
              Одни из лучших наших работ.
              <br />Мы обустраиваем жилые комплексы :<br />
              дворы , парки , аллеи, школы , сады и т.д
            </DescriptionProject>
          </TextBlocks>
          <ImageBlockProject>
            <ImageProject src={example1} />
            <ImageProject src={example2} />
            <ImageProject src={example3} />
            <ImageProject src={example4} />
            <ImageProject src={example5} />
            <ImageProject src={example6} />
          </ImageBlockProject>
        </ExampleProject>
        <ComparisonBlock>
          <ComparisonGeneralText>
            <ComparisonName>Результаты работ - До : После</ComparisonName>
            <ComparisonTitle>Город Махачкала</ComparisonTitle>
            <ComparisonDescription>Сейчас мы вам наглядно покажем результаты наших работ</ComparisonDescription>
          </ComparisonGeneralText>
          <BlockComparison>
            <ComparisonImages src={exampleBad} />
            <BlockComparisonTextR>
              <ComparisonTitle>Здесь мы получили заказ в г. Махачкала</ComparisonTitle>
              <ComparisonDescription>Работа была не из легких . Но это стоило того , этот тратуар вел в учебные заведения , и дети ходили по земле-глине , а в влажные дни , образовывались лужи , и это было очень некомфортно , сейчас мы все исправили !</ComparisonDescription>
            </BlockComparisonTextR>
          </BlockComparison>
          <BlockComparison>
            <BlockComparisonTextL>
              <ComparisonTitle>Это практически готовый тратуар , для нас и для вас !</ComparisonTitle>
              <ComparisonDescription>Я думаю , что наша компания одна из тех кто помогает людям ! Именно мы беремся за комфорт в вашем городе !</ComparisonDescription>
            </BlockComparisonTextL>
            <ComparisonImages src={exampleGood} />
          </BlockComparison>

          <Connection>
            <ConnectionImage src={connection} />
            <ConnectionBlockInput>
              <ConnectionTitle>Мы вас заинтересовали ? Свяжитесь с нами !</ConnectionTitle>
              <ConnectionInput placeholder='Имя' />
              <ConnectionInput placeholder='Телефон' />
              <ConnectionInput placeholder='E-mail' />
              <ConnectionBlockButton>
                <ConnectionButton>Отправить</ConnectionButton>
              </ConnectionBlockButton>

            </ConnectionBlockInput>
          </Connection>

        </ComparisonBlock>
        <FooterContainer></FooterContainer>
      </AppContainer>
    </>


  );
}

export default App;
