---
permalink: /forms/
layout: default.njk
title: Escolha o tipo de cadastro desejado
subtitle: "Você pode optar pelas seguintes escolhas:"
imgs: 
  - src: /assets/img/cartoes/cartao-cidadao-frente.png
meta:
  meta_title: Cadastre-se
  meta_desc: 
  og_type: product
  og_locale: pt_br
  schema_type: OfferCatalog
  robots: index,follow
---
<div class="row row-cols-1 row-cols-md-2 g-1">
  <div class="col p-4 text-center position-relative">
    <div class="border">
      <a href="{{ '/cadastro/pessoa-fisica/' | url }}" class="stretched-link"><h2>👤 Cidadão</h2></a>
    </div>
  </div>
  <div class="col p-4 text-center position-relative">
    <div class="border">
      <a href="{{ '/cadastro/pessoa-juridica/' | url }}" class="stretched-link"><h2>🏢 Empresa</h2></a>
    </div>
  </div>
</div>