---
title: Calendário de feriados nacionais 2023
imgs: 
  - src: /assets/img/blog/betim.jpg
author: Betim Card
---

## Horários de funcionamento

Durante o ano de 2023, a Betim Card funcionará de segunda a sexta, das 09:00 às 18:00, exceto feriados.

## Feriados

Não haverá expediente nos seguintes dias:

{%- for feriado in api.brasilapi.feriados %}
- **{{ feriado.date | newsDate }}**: {{ feriado.name }}
{%- endfor %}