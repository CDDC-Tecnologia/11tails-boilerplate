---
title: Cadastro de Pessoa Jurídica
imgs: 
  - src: /assets/img/cartoes/cartao-cidadao-frente.png
meta:
  meta_title: Cadastro Pessoa Jurídica
  meta_desc: 
  og_type: product
  og_locale: pt_br
  schema_type: OfferCatalog
  robots: index,follow
---
Preencha atentamente os campos a seguir.
Em caso de dúvidas, favor acessar a página sobre o [Cartão Vale Transporte]({{ '/cartoes/betim-card-vale-transporte/' | url }}).
<form class="authentication-form" name="form-signup-company" id="form-signup" action="{{ site.api.form_pj }}" enctype="multipart/form-data" method="post" onsubmit="return validateForm()">
  <div class="row g-3 mb-3">
    <div class="col-12 ">
      <h2 class="fs-3">Dados da empresa</h2>
      <input type="hidden" name="cddc-shield">
    </div>
    <div class="col-md-6 col-lg-6">
      <div class="input-group has-validation">
        <span class="input-group-text">
          <i class="icon-xs" data-feather="user"></i>
        </span>
        <div class="form-floating flex-fill">
          <input type="text" autocomplete="organization" class="form-control" id="organization" name="organization" placeholder="Razão Social" required>
          <label for="organization" class="fw-medium form-label">Razão Social<span class="text-danger"> *</span></label>
        </div>
        <div class="valid-feedback">
          Válido
        </div>
        <div class="invalid-feedback">
          Inválido
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-6">
      <div class="input-group has-validation">
        <span class="input-group-text">
          <i class="icon-xs" data-feather="user"></i>
        </span>
        <div class="form-floating flex-fill">
          <input type="text" inputmode="numeric" pattern="[0-9]{14}" autocomplete="id_tax" class="form-control" id="id_tax" name="id_tax" placeholder="CNPJ" required>
          <label for="id_tax" class="fw-medium form-label">CNPJ<span class="text-danger"> *</span></label>
        </div>
        <div class="valid-feedback">
          Válido
        </div>
        <div class="invalid-feedback">
          Inválido
        </div>
      </div>
    </div>
  </div>
  <div class="row g-3 mb-3">
    <div class="col-12 ">
      <h2 class="fs-3">Dados do responsável</h2>
      <input type="hidden" name="cddc-shield">
    </div>
    <div class="col-md-6 col-lg-6">
      <div class="input-group has-validation">
        <span class="input-group-text">
          <i class="icon-xs" data-feather="user"></i>
        </span>
        <div class="form-floating flex-fill">
          <input type="text" autocomplete="given-name" class="form-control" id="given-name" name="given-name" placeholder="Nome" required>
          <label for="given-name" class="fw-medium form-label ">Nome<span class="text-danger"> *</span></label>
        </div>
        <div class="valid-feedback">
          Válido
        </div>
        <div class="invalid-feedback">
          Inválido
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-6">
      <div class="input-group has-validation">
        <span class="input-group-text">
          <i class="icon-xs" data-feather="user"></i>
        </span>
        <div class="form-floating flex-fill">
          <input type="text" autocomplete="family-name" class="form-control" id="family-name" name="family-name" placeholder="Sobrenome" required>
          <label for="family-name" class="fw-medium form-label">Sobrenome<span class="text-danger"> *</span></label>
        </div>
        <div class="valid-feedback">
          Válido
        </div>
        <div class="invalid-feedback">
          Inválido
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-12">
      <div class="input-group has-validation">
        <span class="input-group-text">
          <i class="icon-xs" data-feather="mail"></i>
        </span>
        <div class="form-floating flex-fill">
          <input type="email" autocomplete="email" inputmode="email" class="form-control" id="email" name="email" placeholder="E-mail" required>
          <label for="email" class="fw-medium form-label">E-mail<span class="text-danger"> *</span></label>
        </div>
        <div class="valid-feedback">
          Válido
        </div>
        <div class="invalid-feedback">
          Inválido
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-12">
      <div class="input-group has-validation">
        <span class="input-group-text">
          <i class="icon-xs" data-feather="phone"></i>
        </span>
        <div class="form-floating flex-fill">
          <input name="tel-national" autocomplete="tel-national" type="text" inputmode="numeric" pattern="[0-9]{8,15}" aria-label="tel-national" class="form-control" placeholder="Telefone" required>
          <label for="tel-national" class="fw-medium form-label">Telefone<span class="text-danger"> *</span></label>
        </div>
        <div class="valid-feedback">
          Válido
        </div>
        <div class="invalid-feedback">
          Inválido
        </div>
      </div>
    </div>
  </div>
  <div class="row row-cols-1 g-3 mb-3">
    <div class="col">
      <h2 class="fs-3">Envio de documentos</h2>
    </div>
    <div class="col mb-3">
      <div class="form-item">
        <label for="file_contratosocial" class="fs-5">Contrato Social <i class="text-danger">*</i></label>
        <p class="fs-13 mb-2">Envie uma cópia do contrato social da empresa ou última alteração contratual.</p>
        <input class="form-control px-0" type="file" accept="image/*, .pdf, capture=camera" name="file_contratosocial[]" multiple required>
      </div>
    </div>
    <div class="col mb-3">
      <div class="form-item">
        <label for="file_caged" class="fs-5"><abbr title="Cadastro Geral de Empregados e Desempregados">CAGED</abbr></label>
        <p class="fs-13 mb-2">Exigido apenas para pedidos acima de 10 funcionários.</p>
        <input class="form-control px-0" type="file" accept="image/*, .pdf, capture=camera" name="file_caged[]">
      </div>
    </div>
    <div class="col mb-3">
      <div class="form-item">
        <label for="file_contrato" class="fs-5">Contrato assinado <i class="text-danger">*</i></label>
        <p class="fs-13 mb-2">Envie uma cópia do contrato preenchido e assinado. (<a href="{{ info.documents.contrato_pj | cdn2 }}" target="_blank" rel="noopener noreferrer">📎 Baixar contrato PJ</a>)</p>
        <input class="form-control px-0" type="file" accept="image/*, .pdf, capture=camera" name="file_contrato[]" required>
      </div>
    </div>
    <div class="col mb-3">
      <div class="form-item">
        <label for="file_lgpd" class="fs-5">Termo aditivo <abbr title="Lei Geral de Proteção de Dados">LGPD</abbr></label>
        <p class="fs-13 mb-2">Envie uma cópia do termo preenchido e assinado. (<a href="{{ info.documents.termo_lgpd | cdn2 }}" target="_blank" rel="noopener noreferrer">📎 Baixar Termo aditivo LGPD</a>)</p>
        <input class="form-control px-0" type="file" accept="image/*, .pdf, capture=camera" name="file_lgpd[]">
      </div>
    </div>
  </div>
  <div class="row row-cols-1 g-3 mb-3">
    <div class="col">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="Sim" id="consentimento_termos" name="consentimento_termos" required>
        <label class="form-check-label" for="consentimento_termos">
          Eu estou de acordo com os <a href="{{ '/politicas/termos-de-servico/' | url }}" target="_blank">Termos de serviço da {{ site.name }}</a>.
        </label>
      </div>                                                    
    </div>
    <div class="col">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="Sim" id="consentimento_lgpd" name="consentimento_lgpd" required>
        <label class="form-check-label" for="consentimento_lgpd">
          Eu concordo em compartilhar as minhas informações conforme a <a href="{{ '/politicas/privacidade/' | url }}" target="_blank">Política de Privacidade da {{ site.name }}</a>
        </label>
      </div>                                                    
    </div>
    <div class="col">
      <button id="submitBtn" type="submit" class="btn btn-dark w-100">
        Solicitar o meu BetimCard
        <i class="bi bi-send text-white"></i>
      </button>
    </div>
    <div class="col">
      <div class="cf-turnstile" data-sitekey="0x4AAAAAAAMaYThsKniElpfO"></div>
    </div>
  </div>
</form>