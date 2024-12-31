---
sitemap: false
permalink: /enviado/
layout: default.njk
title: Obrigado, sua mensagem foi enviada
subtitle: Nós enviamos sua mensagem para nossa equipe.
imgs: 
  - src: /assets/img/blog/betim.jpg
meta:
  meta_title: Muito obrigado
  meta_desc: Sua mensagem foi recebida. Nossa equipe entrará em contato com você.
  og_type: website
  og_locale: pt_br
  schema_type: LocalBusiness
  robots: none
---
<div class="bg-gradient2 min-vh-100 align-items-center d-flex justify-content-center pt-2 pt-sm-5 pb-4 pb-sm-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-6">
        <div class="mx-auto mb-3">
          <a href="/" class="d-flex justify-content-center align-items-center">
            <img src="{{ site.logo | cdn }}" alt="" height="50" />
          </a>
        </div>
        <div class="card">
          <div class="card-body p-0">
            <div class="p-4 text-center">
              <h4 class="mt-3">Obrigado, sua mensagem foi enviada</h4>
              <div class="py-3">
                <span class="icon icon-xl text-info">
                  <img src="/assets/img/icons/duotone-icons/communication/Mail-opened.svg" alt="">
                </span>
              </div>
              <p class="text-muted mb-4">{{ subtitle }}</p>
              <p class="text-muted mb-0 fs-13">Você receberá um retorno através do e-mail / telefone informado.</p>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12 text-center">
            <p class="text-muted">Voltar para <a href="{{ '/' | url }}" class="text-primary fw-semibold ms-1">Home</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>