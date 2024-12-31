---
title: Cadastro de Pessoa Física
imgs: 
  - src: /assets/img/cartoes/cartao-cidadao-frente.png
meta:
  meta_title: Cadastro Pessoa Física
  meta_desc: 
  og_type: product
  og_locale: pt_br
  schema_type: OfferCatalog
  robots: index,follow
---
Preencha atentamente os campos a seguir.
Em caso de dúvidas, favor acessar a página sobre o [Cartão Cidadão]({{ '/cartoes/betim-card-cidadao/' | url }}).
<form class="authentication-form" name="form-signup-user" id="form-signup" action="{{ site.api.form_pf }}" enctype="multipart/form-data" method="post" onsubmit="return validateForm()">
  <div class="row g-3 mb-3">
    <div class="col-12 ">
      <h2 class="fs-3">Dados pessoais</h2>
      <input type="hidden" name="cddc-shield">
    </div>
    <div class="col-md-6 col-lg-6">
      <div class="input-group has-validation">
        <span class="input-group-text">
          <i class="bi bi-person"></i>
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
          <i class="bi bi-person"></i>
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
    <div class="col-md-12 col-lg-6">
      <div class="input-group has-validation">
        <span class="input-group-text">
          <i class="bi bi-person-vcard"></i>
        </span>
        <div class="form-floating flex-fill">
          <input type="text" inputmode="numeric" pattern="[0-9]{11}" autocomplete="id_tax" class="form-control" id="id_tax" name="id_tax" placeholder="CPF" required>
          <label for="id_tax" class="fw-medium form-label">CPF<span class="text-danger"> *</span></label>
        </div>
        <div class="valid-feedback">
          Válido
        </div>
        <div class="invalid-feedback">
          Inválido
        </div>
      </div>
    </div>
    <div class="col-md-12 col-lg-6">
      <div class="input-group has-validation">
        <span class="input-group-text">
          <i class="bi bi-person-vcard-fill"></i>
        </span>
        <div class="form-floating flex-fill">
          <input type="text" class="form-control" id="id_rg" name="id_rg" placeholder="RG" required>
          <label for="id_rg" class="fw-medium form-label">RG<span class="text-danger"> *</span></label>
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
          <i class="bi bi-calendar"></i>
        </span>
        <div class="form-floating flex-fill">
          <input type="date" autocomplete="birthday" class="form-control" id="birthday" name="birthday" placeholder="" required>
          <label for="birthday" class="fw-medium form-label">Data de Nascimento<span class="text-danger"> *</span></label>
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
          <i class="bi bi-envelope"></i>
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
          <i class="bi bi-phone"></i>
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
  <div class="row g-3 mb-3">
    <div class="col-12 ">
      <h2 class="fs-3">Endereço</h2>
      <input type="hidden" name="cddc-shield">
    </div>
    <div class="col-md-12">
      <div class="input-group has-validation">
        <span class="input-group-text">
          <i class="bi bi-geo-alt"></i>
        </span>
        <div class="form-floating flex-fill">
          <input type="text" autocomplete="postal-code" inputmode="numeric" min="1000000" max="99999999" class="form-control" id="postal-code" name="postal-code" placeholder="CEP">
          <label for="postal-code" class="fw-medium form-label ">CEP<span class="text-danger"> *</span></label>
        </div>
        <div class="valid-feedback">
          Válido
        </div>
        <div class="invalid-feedback">
          Inválido
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="input-group has-validation">
        <span class="input-group-text">
          <i class="bi bi-geo"></i>
        </span>
        <div class="form-floating flex-fill">
          <input type="text" autocomplete="address-line1" class="form-control" id="address-line1" name="address-line1" placeholder="Endereço" required>
          <label for="address-line1" class="fw-medium form-label">Endereço<span class="text-danger"> *</span></label>
        </div>
        <div class="valid-feedback">
          Válido
        </div>
        <div class="invalid-feedback">
          Inválido
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="input-group has-validation">
        <span class="input-group-text">
          <i class="bi bi-123"></i>
        </span>
        <div class="form-floating flex-fill">
          <input type="text" inputmode="numeric" autocomplete="" class="form-control" id="address-number" name="address-number" placeholder="Número" required>
          <label for="address-number" class="fw-medium form-label">Número<span class="text-danger"> *</span></label>
        </div>
        <div class="valid-feedback">
          Válido
        </div>
        <div class="invalid-feedback">
          Inválido
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="input-group has-validation">
        <span class="input-group-text">
          <i class="bi bi-three-dots"></i>
        </span>
        <div class="form-floating flex-fill">
          <input type="text" autocomplete="address-line2" class="form-control" id="address-line2" name="address-line2" placeholder="Complemento">
          <label for="address-line2" class="fw-medium form-label">Complemento</label>
        </div>
        <div class="valid-feedback">
          Válido
        </div>
        <div class="invalid-feedback">
          Inválido
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="input-group has-validation">
        <span class="input-group-text">
          <i class="bi bi-map"></i>
        </span>
        <div class="form-floating flex-fill">
          <input type="text" autocomplete="address-neighborhood" class="form-control" id="address-neighborhood" name="address-neighborhood" placeholder="Bairro" required>
          <label for="address-neighborhood" class="fw-medium form-label">Bairro<span class="text-danger"> *</span></label>
        </div>
        <div class="valid-feedback">
          Válido
        </div>
        <div class="invalid-feedback">
          Inválido
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="input-group has-validation">
        <span class="input-group-text">
          <i class="bi bi-pin-map"></i>
        </span>
        <div class="form-floating flex-fill">
          <input type="text" autocomplete="address-level2" class="form-control" id="address-level2" name="address-level2" placeholder="Cidade" required>
          <label for="address-level2" class="fw-medium form-label">Cidade<span class="text-danger"> *</span></label>
        </div>
        <div class="valid-feedback">
          Válido
        </div>
        <div class="invalid-feedback">
          Inválido
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <label for="state" class="">Estado <span class="text-danger"> *</span></label>
      <select name="state" id="address-level1" class="w-100" autocomplete="address-level1" data-input-classes="" tabindex="-1" aria-hidden="true">
        <option value="AC">AC</option>
        <option value="AL">AL</option>
        <option value="AP">AP</option>
        <option value="AM">AM</option>
        <option value="BA">BA</option>
        <option value="CE">CE</option>
        <option value="DF">DF</option>
        <option value="ES">ES</option>
        <option value="GO">GO</option>
        <option value="MA">MA</option>
        <option value="MT">MT</option>
        <option value="MS">MS</option>
        <option value="MG">MG</option>
        <option value="PA">PA</option>
        <option value="PB">PB</option>
        <option value="PR">PR</option>
        <option value="PE">PE</option>
        <option value="PI">PI</option>
        <option value="RJ">RJ</option>
        <option value="RN">RN</option>
        <option value="RS">RS</option>
        <option value="RO">RO</option>
        <option value="RR">RR</option>
        <option value="SC">SC</option>
        <option value="SP">SP</option>
        <option value="SE">SE</option>
        <option value="TO">TO</option>
      </select>
    </div>
  </div>
  <div class="row row-cols-1 g-3 mb-3">
    <div class="col">
      <h2 class="fs-3">Envio de documentos</h2>
    </div>
    <div class="col mb-3">
      <div class="form-item">
        <label for="file_contrato" class="fs-5">Contrato assinado <i class="text-danger">*</i></label>
        <p class="fs-13 mb-2">Envie uma cópia do contrato preenchido e assinado. (<a href="{{ info.documents.contrato_pf | cdn2 }}" target="_blank" rel="noopener noreferrer">Baixar contrato PF</a>)</p>
        <input class="form-control px-0" type="file" accept="image/*, .pdf, capture=camera" name="file_contrato[]" required>
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