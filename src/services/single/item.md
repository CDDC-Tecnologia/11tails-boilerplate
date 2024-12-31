---
title: Cidadão
subtitle: Embarque com facilidade e segurança em toda rede municipal de
  transporte de ônibus de Betim/MG.
available: true
tags: posts
imgs:
  - src: /assets/img/cartoes/cartao-cidadao-frente.png
    alt: Frente do cartão
  - src: /assets/img/cartoes/cartao-cidadao-verso.png
    alt: Verso do cartão
  - src: /assets/img/cartoes/cartao-cidadao-completo.png
    alt: Cartão frente e verso
signup: /cadastro/pessoa-fisica/
topup: https://sistema2.betimcard.com/wbc-st5/login.faces?uat=5
meta:
  meta_title: BetimCard Cidadão
---

## O que é?

O Cartão BetimCard {{ title }} é o cartão de bilhetagem eletrônica utilizado no transporte coletivo urbano (ônibus) do município de Betim.

Esse cartão é feito para pessoas físicas e pode ser adquirido por qualquer usuário do Serviço de Transporte.

## Modalidades de cartão

### Cartão {{ title }} identificado
O cartão identificado permite que o titular recupere seus créditos em caso de perda, roubo ou extravio do cartão.
Para tanto, é necessário seguir o procedimento de cadastro explicado abaixo, na seção "Como adquirir".

### Cartão {{ title }} não-identificado
É a modalidade do cartão sem identificação do seu titular.
Em caso de perda, roubo ou extravio, os créditos não podem ser recuperados em uma 2ª via de cartão.
Para adquirir basta ir até o posto de venda para solicitá-lo.

## Benefícios

O BetimCard {{ title }} trás mais conveniência ao transporte urbano através dos seguintes benefícios:

- **Embarque mais rápido:** Pague por sua passagem rapidamente sem se preocupar com troco ou moedas.
- **Recarga online:** Adicione crédito ao seu cartão pelo nosso sistema de recarga online.
- **Maior controle:** Tenha um cartão exclusivo para suas despesas de transporte e evite confusões na sua vida financeira.
- **Proteção de perda ou roubo:** O cartão na modalidade identificado pode ser bloqueado e os créditos remanescentes podem ser transferidos para uma segunda via.

> ℹ️ Seu BetimCard foi extraviado? [Solicitar Bloqueio do cartão aqui](/faq/solicitacao-de-segunda-via/)

## Exigências

Para adquirir o BetimCard {{ title }}, é necessário:

- Ter pelo menos 18 anos de idade;
- Emissão de no máximo 5 cartões por CPF;

## Como adquirir?

Para emitir o seu BetimCard {{ title }}, é necessário atender todas as exigências citadas acima, além de ter a seguinte documentação:

- Documento de identidade com foto (RG, CNH, carteira de trabalho ou passaporte);
- Cópia do CPF;
- Contrato de comodato preenchido e assinado ([Baixar Contrato Pessoa Física]({{ info.documents.contrato_pf | cdn2 }}));
- Comprovante de residência expedido em até 30 dias.

Uma vez preparada toda a documentação, você pode solicitar o seu cartão online ou através da nossa loja física.

### Solicitação online

⏱️ **Prazo estimado:** 5 dias úteis

Faça o envio de toda a documentação exigida através do formulário online abaixo:

<!-- <a class="btn btn-primary btn-md mb-3 px-5" href="{{ signup | url }}">Solicitar BetimCard {{ title }}</a> -->

O e-mail será respondido em até 5 dias úteis.
Estando tudo certo com sua documentação, os cartões serão disponibilizados na loja física para retirada do titular.


### Solicitação pela loja física

**Prazo estimado:** Mesmo dia

Você também pode ir até a nossa loja física para adquirir o seu cartão BetimCard {{ title }}.

> **{{ site.legal_name }}**
>
> {{ site.address.street }}, {{ site.address.number }} / Complemento 08
>
> Bairro {{ site.address.neighborhood }}, {{ site.address.city }}/{{ site.address.state }} - {{ site.address.country }}
>
> Ir para [Google Maps]({{ site.social.gmaps }}).
>
> **Horário de funcionamento**
{%- for time in site.business_hours %}
> - {{ time.weekday_br }}: De {{ time.opens }} até {{ time.closes }}
{%- endfor %}

## Outras solicitações

- [Solicitação de 2ª Via De Cartão](/faq/solicitacao-de-segunda-via/)
- [Solicitação de cartões adicionais](/faq/solicitar-novo-cartao/)

## Outros cartões

Quer conhecer qual é a modalidades de cartão certa para você? Acesse a página de [todos os cartões]({{ '/cartoes/' | url }}).
