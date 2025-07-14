
import React, { useState } from 'react';
import { Container, Header, LogoTipo, Name, H1, H2, Nav, A, Main, Presentation,  Slogan, ResourceContainer, Resources,
 Table, Resouseces1, Colum, ChooseOrganicPower, ContainerPanel, Panel, ContainerCarousel, YouWin, ContainerYouWin, WhoWeAre, NameContainer,
 TextWhoWeAre, Footer, Demonstration, DemosntrationText, IconButtonFooter, SocialMedia, Rights, MenuIcon, MobileMenu } from './styles';
 
import Carousel from '../../components/Carousel';



import { Logo } from '../../components/Logo';
import { Image } from '../../components/image';
import { Icon } from '../../components/imageIcon';
import {  Button } from'../../components/Button';




import Image1 from '../../assets/ChatGPT Image 11 de jun. de 2025, 11_52_17.png';
import logoImg from'../../assets/WhatsApp Image 2025-05-26 at 17.50.52.jpeg'
import IconBalança from'../../assets/icons/icons8-balança-80.png';
import IconWats from '../../assets/icons/icons8-whatsapp-logo-48.png';
import IconFinanceiro from '../../assets/icons/icons8-receber-dinheiro-50.png';
import IconEstoque from'../../assets/icons/icons8-storage-64.png';
import IconRelatorio from '../../assets/icons/icons8-relatório-50.png';
import IconEtiqueta from'../../assets/icons/icons8-etiqueta-80 (1).png';
import IconLucro from'../../assets/icons/icons8-profits-64.png';
import IconFidelidade from'../../assets/icons/icons8-fidelidade-60.png';
import IconWhatsapp from'../../assets/icons/icons8-whatsapp-50.png';
import IconDocumento from'../../assets/icons/icons8-documento-50.png';
import IconConectividade from'../../assets/icons/icons8-rede-64.png';
import IconTef from'../../assets/icons/icons8-troca-de-cartões-50.png';
import IcomPlataforma from'../../assets/icons/icons8-pesquisa-no-navegador-50.png';
import IcomTreinamento from'../../assets/icons/icons8-treinamento-50.png';
import Iconinstallation from'../../assets/icons/icons8-installation-66.png';
import IconSuporte from'../../assets/icons/icons8-suporte-64.png';
import ImgIntegration from '../../assets/ChatGPT Image 17 de jun. de 2025, 16_26_22.png';
import ImgMixProd from'../../assets/ChatGPT Image 17 de jun. de 2025, 17_24_08.png';
import ImgVendas from'../../assets/ChatGPT Image 18 de jun. de 2025, 17_10_21.png';
import ImgPromo from'../../assets/ChatGPT Image 18 de jun. de 2025, 17_39_47.png';
import ImgParcerias from'../../assets/ChatGPT Image 18 de jun. de 2025, 17_53_41.png';
import ImgFinanceiro from'../../assets/ChatGPT Image 18 de jun. de 2025, 18_00_13.png';
import ImgWin from'../../assets/ChatGPT Image 19 de jun. de 2025, 18_10_19.png';
import ImgFooter from'../../assets/ChatGPT Image 26 de jun. de 2025, 18_10_08.png';
import ImgInsta from'../../assets/icons/icons8-insta-144.png';
import ImgFace from'../../assets/icons/icons8-facebook-144.png';
import ImgWhats from'../../assets/icons/icons8-whatsapp-144.png';
import ImgLInk from'../../assets/icons/icons8-linkedin-144.png'


export const Principal = () => {
  const [menuOpen, setMenuOpen] = useState(false); // controla se o menu está aberto

  return (
    <Container>
      <Header>
        <LogoTipo>
          <Logo src={logoImg} alt="logo" />
          <Name>
            <H1>Organic-Power</H1>
            <H2>sistemas</H2>
          </Name>
        </LogoTipo>

        <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>☰</MenuIcon>

        <Nav className="desktop-nav">
          <A href="index.html">Sobre o sistemas</A>
          <A href="sobre.html">Diferenciais</A>
          <A href="servicos.html">Benefícios</A>
          <A href="contato.html">Sobre nós</A>
        </Nav>
      </Header>

      {menuOpen && (
        <MobileMenu>
          <A href="index.html">Sobre o sistemas</A>
          <A href="sobre.html">Diferenciais</A>
          <A href="servicos.html">Benefícios</A>
          <A href="contato.html">Sobre nós</A>
        </MobileMenu>
      )}


      <Main>
        
        <Presentation>

          
        <Image  src={Image1} alt="logo"/>

        <Slogan>
          
        <H1>
          Gestão inteligente, loja conectada:
        </H1>
        <H2>
          o amanhã já começou.
        </H2>

        <p>
          Com a Organic-Power, você centraliza tudo em uma única plataforma: simples, moderna e totalmente integrada.
           Controle todas as áreas do seu negócio de forma prática e eficiente. Nossa solução foi criada para transformar a sua rotina, 
          unindo gestão e atendimento em um único sistema, completo e conectado.
        </p>
        
   <Button><img src={IconWats} alt="Icon" /> <p>Quero uma demonstração pelo whatsapp </p></Button>
        
        </Slogan>
 
    </Presentation>

    <ResourceContainer>

      <H2>Monitore seu negócio em tempo real</H2>
      <H1>Automatize tarefas, minimize erros operacionais e otimize a performance da sua empresa.</H1>
      <p>Com a Organic-Power, sua loja de produtos naturais opera de forma integrada e inteligente.
        Conte com uma implantação rápida e sem complicações — em pouco tempo, sua equipe estará usando o sistema
        no dia a dia. Gerencie vendas, estoque, clientes e muito mais em um único ambiente completo e fácil de usar.</p>
    </ResourceContainer> 

    <Resources>

      <H1>RECURSOS</H1>

      <Table>

        <Colum>
          <Resouseces1>

            <Icon  src={IconBalança} alt="logo"/>
            <p>Integração com as melhores balanças</p>
            </Resouseces1>

          <Resouseces1>
            
            <Icon  src={IconFinanceiro} alt="logo"/>
            <p>Financeiro com plano de contas (DRE)</p>
          
          </Resouseces1>

          <Resouseces1>
            
            <Icon  src={IconEstoque} alt="logo"/>
            <p>Controle de estoque e validade dos produtos</p>
          </Resouseces1>

          <Resouseces1>
            
            <Icon  src={IconRelatorio} alt="logo"/>
            <p>Relatórios personalizados</p>
          </Resouseces1>
        
        </Colum>
        
        <Colum>
          
          <Resouseces1>
        
            <Icon  src={IconEtiqueta} alt="logo"/>
            <p>Etiquetas personalizadas para potes/gôndolas</p>
          
          </Resouseces1>
          
          <Resouseces1>
        
            <Icon  src={IconLucro} alt="logo"/>
            <p>Precificação com margem de lucro, encargos e custo</p>
          
          </Resouseces1>

          <Resouseces1>
        
            <Icon  src={IconDocumento } alt="logo"/>
            <p>Emissão de NF-e, NFC-e e Sat.</p>
          
          </Resouseces1>

          <Resouseces1>
        
            <Icon  src={IconFidelidade} alt="logo"/>
            <p>Programa de fidelidade com pontos e cashback</p>
          
          </Resouseces1>
        
        </Colum>

   <    Colum>
          
          <Resouseces1>
        
            <Icon  src={IconWhatsapp} alt="logo"/>
            <p>Integração com WhatsApp para fidelização de clientes</p>
          
          </Resouseces1>

          <Resouseces1>
        
            <Icon  src={IconConectividade} alt="logo"/>
            <p>Integração com Ifood, Ecommerce e Mercado Pago (Maquininha e Pix)</p>
          
          </Resouseces1>

          <Resouseces1>
        
            <Icon  src={IconTef} alt="logo"/>
            <p>Integração com TEF</p>
          
          </Resouseces1>

          <Resouseces1>
        
            <Icon  src={IcomPlataforma} alt="logo"/>
            <p>Plataforma web com dashboard personalizado</p>
          </Resouseces1>
          
        </Colum>

      
      </Table>
  
    </Resources> 

        <ChooseOrganicPower>
          <p>Com a Organic-Power, você não adquire só um sistema </p>
          <H1>você impulsiona o seu sucesso.</H1>

            <Panel>
            <ContainerPanel>
                <Icon  src={IcomTreinamento} alt="logo"/>
                  <H1>Capacitação prática para o seu time</H1>

                  <p>Treinamento completo e prático, focado no dia a dia da sua loja. Sua equipe 
                    começa a usar o sistema desde o primeiro dia.</p>
            </ContainerPanel>

            <ContainerPanel>
              <Icon  src={Iconinstallation} alt="logo"/>
                <H1>Instalação, configuração e manutenção completas do sistema.</H1>

                <p>Implantação completa com parametrização personalizada, integração com periféricos e 
                  manutenção contínua para alto desempenho..</p>
            </ContainerPanel>
            
            <ContainerPanel>
              <Icon  src={IconSuporte} alt="logo"/>
                <H1>Suporte técnico especializado.</H1>

                <p>Equipe pronta para atender com agilidade, tirar dúvidas e orientar você no dia a dia — 
                  garantindo segurança e continuidade nas operações.</p>
            </ContainerPanel>
            </Panel>

        </ChooseOrganicPower>

                <YouWin>
          <ContainerYouWin>
            <ul>
              <li>*Menos erros operacionais com processos automatizados</li>
              <li>*Redução de desperdícios e diminuição de custos com um estoque sempre sob controle</li>
              <li>*Mais velocidade nas vendas e maior precisão na conferência de mercadorias</li>
              <li>*Compras mais inteligentes com base na real saída dos produtos</li>
            </ul>
          </ContainerYouWin>     
            <Image   src={ImgWin} alt="logo"/>
            <ContainerYouWin>
                        <ul>
              <li>*Acompanhamento em tempo real da sua loja, direto no celular</li>
              <li>*Atendimento mais rápido com integração entre balança e leitor de código de barras</li>
              <li>*Gestão financeira completa e visão clara do fluxo de caixa</li>
              <li>*Compras mais inteligentes com base na real saída dos produtos</li>
            </ul>
            </ContainerYouWin>
        </YouWin>
        

        <ContainerCarousel>
              <H1>Com a Organic-Power, você ganha:</H1> 
              <H2>mais controle reduz os erros e tem mais tempo para focar no crescimento do seu negócio.</H2>
          <Carousel>

            <pagina>

              <img  src={ImgIntegration} alt="logo"/>
              <img  src={ImgMixProd} alt="logo"/>
              

            </pagina>
            <pagina>
              
              <img  src={ImgVendas} alt="logo"/>
              <img  src={ImgPromo} alt="logo"/>
            </pagina>
            <pagina>
              <img  src={ImgParcerias} alt="logo"/>
              <img  src={ImgFinanceiro} alt="logo"/>
            </pagina>
          
          </Carousel>
        
         </ContainerCarousel>
         <WhoWeAre>
  <img src={logoImg} alt="logo" />
  <NameContainer>
    <H1>Organic-Power</H1>
    <H2>Sistemas</H2>
  </NameContainer>

  <TextWhoWeAre>
    <H2>Sobre a</H2>
    <H1>Organic-Power</H1>
    <p>
      A Organic-Power é especialista em soluções para o varejo de produtos naturais.
      Desenvolvemos a Organic-Power, uma plataforma completa que reúne tecnologia, 
      automação e inteligência de gestão em um único sistema eficiente.
      Nosso objetivo é simplificar a rotina das lojas de produtos naturais, oferecendo 
      ferramentas que unem produtividade com um suporte próximo e humano.
      Com criatividade e profundo conhecimento do setor, buscamos constantemente maneiras inovadoras 
      de otimizar processos e impulsionar os resultados dos nossos clientes.
    </p>
  </TextWhoWeAre>
</WhoWeAre>
      

         <Demonstration>
          <DemosntrationText>
            <H2>Comprove a eficiência da</H2>
            <H1>Organic-Power:</H1>
            <p>Solicite uma demonstração com um de nossos especialistas e conheça todos os recursos do sistema para atender as 
              necessidades do seu negócio.</p>
          </DemosntrationText>

          <Button><img src={IconWats} alt="Icon" /> <p>Quero uma demonstração pelo whatsapp </p></Button>
          
          </Demonstration>
          
  
      </Main>
      <Footer>

          <SocialMedia>

           <IconButtonFooter aria-label="Instagram">
          <Logo src={ImgLInk} alt="Logo do Instagram" />
        </IconButtonFooter>

      

       <IconButtonFooter aria-label="Instagram">
          <Logo src={ImgInsta} alt="Logo do Instagram" />
        </IconButtonFooter>
      <Logo src={ImgFooter } alt="logo" />

             <IconButtonFooter aria-label="Instagram">
          <Logo src={ImgWhats} alt="Logo do Instagram" />
        </IconButtonFooter>

        <IconButtonFooter aria-label="Instagram">
        <Logo src={ImgFace} alt="Logo do Instagram" />
        </IconButtonFooter>

      </SocialMedia>

        
          <Rights>
            <H2>Todos os direitos reservados © Organic-Power Sistemas 2025</H2>
          <H2>Contato: (99) 99999-9999</H2>
          </Rights>
      </Footer> 
      


    </Container>
  );
};

export default Principal;
 