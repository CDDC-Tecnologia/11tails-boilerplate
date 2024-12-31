---
permalink: /faq/busca/
layout: default.njk
title: Buscar tópico de ajuda
imgs:
  - src: /assets/img/blog/betim.jpg
meta:
  meta_title: Blog
  meta_desc:
  og_type: website
  og_locale: pt_br
  schema_type: LocalBusiness
  robots: index,follow
---
<div>
  <section class="hero-4 pb-3 pt-7 py-sm-7 bg-gradient2">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 text-center">
          <h1 class="hero-title">{{ title }}</h1>
          <p class="fs-17 text-muted">
            Encontre rapidamente as respostas para as dúvidas mais comuns. Nossa central de atendimento conta com mais de 27 tópicos de ajuda. Escreva sua dúvida abaixo para encontrar uma resposta.
          </p>
          <!-- <div class="mt-5">
            <div class="form-control-with-hint">
              <input type="text" class="form-control" id="query" name="query" placeholder="Faça uma pergunta..." />
              <span class="form-control-feedback"><i class="icon-xs" data-feather="search"></i></span>
            </div>
          </div>
          <div class="row align-items-center mt-1 g-0">
            <div class="col-auto">
              <div class="fw-medium text-uppercase text-muted mb-0 fs-13">
                Pesquisas recentes:
              </div>
            </div>
            <div class="col text-start">
              <div class="text-muted ps-2">
                Como recarregar cartão, postos de venda, roubo
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</div>
<section class="overflow-hidden py-3 py-md-4 py-lg-5">
  <div class="container">
    <div data-delegate="a" data-type="image" class="mt-5">
      <div class="row grid-portfolio" id="filterable-content">
        <h2>Principais tópicos</h2>
        {% for faq in collections.faq %}
        <article class="col-12 filter-item position-relative all {{ tag }}">
          <div class="card card-portfolio-item shadow border filter-item all {{ tag }}">
            <div class="card-body p-2">
              <h3 class="mt-0 fs-4">{{ faq.data.title }}</h3>
              <p class="text-muted mb-1">{{ faq.data.description }}</p>
            </div>
            <div class="text-end">
              <a href="{{ faq.url | url }}" class="stretched-link"><i data-feather="chevron-right" class="icon icon-xxs"></i></a>
            </div>
          </div>
        </article>
        {%- endfor %}
      </div>
    </div>
    <div class="text-center mt-5 pb-md-0">
      <a class="btn btn-primary" href="{{ '/blog/' | url }}"><i data-feather="chevron-right" class="icon-xxs me-2"></i>Ir para o blog</a>
    </div>
  </div>
</section>