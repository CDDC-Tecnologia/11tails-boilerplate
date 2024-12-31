---
title: Post sobre APIs
imgs: 
  - src: /assets/img/blog/betim.jpg
tags: [hospedagem, IT]
author: Betim Card
---
## API data 

### Github
- {{ api.github.id }}

### Open Meteo:
- {{ api.openMeteo.latitude }}
- 10am: {{ api.openMeteo.hourly.temperature_2m[10] }}

### Year Holidays
{% for feriado in api.brasilapi.feriados %}
- {{ feriado.date | newsDate }} - {{ feriado.name }}
{% endfor %}

## Brasil API
### CNPJ
- Razão Social {{ api.brasilapi.cnpj.razao_social }}
- Nome Fantasia {{ api.brasilapi.cnpj.nome_fantasia }}
- Porte {{ api.brasilapi.cnpj.porte }}
- Endereço {{ api.brasilapi.cnpj.descricao_tipo_de_logradouro }} {{ api.brasilapi.cnpj.logradouro }}, {{ api.brasilapi.cnpj.numero }} {{ api.brasilapi.cnpj.complemento }}, {{ api.brasilapi.cnpj.municipio }}/{{ api.brasilapi.cnpj.uf }} - CEP {{ api.brasilapi.cnpj.cep }}

#### Sócios
{% for socio in api.brasilapi.cnpj.qsa %}
- {{ socio.nome_socio }} - {{ socio.faixa_etaria }}
{% endfor %}

## Static data

### Variables
- {{ username }}

### Default value
- {{ utitle }}

### Global
- {{ site.address.street }}
- {{ profile.since }}

### Collection
- {{ tags }}
- {{ meta.og_type }}
- {{ meta.og_locale }}
- {{ meta.schema_type }}
- {{ meta.robots }}

### This file
- {{ title }}
- {{ layout }}
- {{ page.date | newsDate }}
- {{ date | newsDate }}
- OG type {{ meta.og_type }}

### Custom
- This is year {% year %}

## Markdown content
Esse conteúdo está no "markdown"