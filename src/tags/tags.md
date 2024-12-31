---
pagination:
  data: collections
  size: 1
  alias: tag
  addAllPagesToCollections: true
permalink: /tags/{{ tag | slugify }}/
eleventyComputed:
  title: Tópicos com a tag "{{ tag | title }}"
layout: default.njk
imgs: 
  - src: /assets/img/blog/betim.jpg
---