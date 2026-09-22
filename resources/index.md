---
layout: default
title: Selected Resources
lang: en
permalink: /resources/
---

<section class="resource-page">
  <h1>Selected Resources</h1>
  <p class="subtitle">Books, papers, tools, and websites I want to keep close for later reading, reference, and review.</p>

  {% assign resource_links = site.data.resources.en | reverse %}

  <div class="resource-catalog">
    {% for item in resource_links %}
      <article class="resource-card">
        <h2><a href="{{ item.review_url | default: item.url }}">{{ item.title }}</a></h2>
        {% if item.note %}<p>{{ item.note }}</p>{% endif %}
        <div class="resource-actions">
          <a href="{{ item.url }}">Open resource</a>
          {% if item.review_url %}
            <a href="{{ item.review_url }}">My review</a>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>
