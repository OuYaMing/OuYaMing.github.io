---
layout: home
permalink: /
title: "Homepage"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section id="about-me" class="about-section" aria-labelledby="about-heading">
  <h2 id="about-heading">About Me</h2>
  <p>Hi! I’m <strong>Yaming Ou (欧亚明)</strong>, an Assistant Researcher at the <strong>Tactile Perception and Embodied Manipulation Laboratory</strong>, School of Artificial Intelligence, University of Chinese Academy of Sciences (UCAS), working with Prof. <a href="https://people.ucas.ac.cn/~chenglong?language=en">Long Cheng</a> (IEEE Fellow).</p>
  <p>I received my Ph.D. from the C<sup>2</sup>DL Lab, Institute of Automation, Chinese Academy of Sciences (CASIA), and UCAS, supervised by Prof. <a href="http://www.ia.cas.cn/rcdw/yjy/202406/t20240621_7194305.html">Chao Zhou</a> and Assoc. Prof. <a href="https://people.ucas.edu.cn/~fanjunfeng">Junfeng Fan</a>. I was a visiting scholar at the Robotics Institute, Carnegie Mellon University, working with Prof. <a href="https://scholar.google.com/citations?hl=zh-CN&amp;user=4fvo61oAAAAJ">Howie Choset</a> in the Biorobotics Lab (2025–2026). Previously, I received my B.E. in Robotics Engineering from Southeast University.</p>
  <p>My research focuses on <strong>SLAM, cross-media UAVs, spatial intelligence, and tactile-based mobile manipulation</strong>. I develop robotic systems that perceive, localize, navigate, and operate in challenging real-world environments.</p>
  <p class="contact-line">I’m always happy to discuss robotics and research collaborations. <a href="mailto:{{ site.author.email }}">Get in touch →</a></p>
</section>

<section id="news" aria-labelledby="news-heading">
  <h2 id="news-heading">News</h2>
  <ul class="dated-list news-list">
    {% assign featured_news = site.data.home.news | where: 'featured', true %}
    {% for item in featured_news limit: 6 %}
    <li><time datetime="{{ item.date }}">{{ item.label }}</time><span>{{ item.text }}</span></li>
    {% endfor %}
  </ul>
  <details class="archive-details">
    <summary>Earlier news</summary>
    <ul class="dated-list news-list">
      {% assign earlier_featured = featured_news | slice: 6, 100 %}
      {% assign review_news = site.data.home.news | where: 'featured', false %}
      {% assign earlier_news = earlier_featured | concat: review_news | sort: 'date' | reverse %}
      {% for item in earlier_news %}
      <li><time datetime="{{ item.date }}">{{ item.label }}</time><span>{{ item.text }}</span></li>
      {% endfor %}
    </ul>
  </details>
</section>

<section id="publications" aria-labelledby="publications-heading">
  <div class="section-heading"><h2 id="publications-heading">Publications</h2><a href="{{ site.author.googlescholar }}">Google Scholar ↗</a></div>
  <p class="section-note">Selected work on robot perception, localization, and navigation.<span>* Corresponding author · † Equal contribution</span></p>
  <div class="publication-list">
    {% for paper in site.data.home.publications %}
    <article class="paper" aria-labelledby="paper-{{ paper.id }}">
      <div class="paper-visual">
        <span class="venue-badge">{{ paper.badge }}</span>
        {% if paper.url %}<a href="{{ paper.url | relative_url }}" aria-label="Read {{ paper.title | escape }}">{% endif %}
        <img src="{{ paper.image | relative_url }}" width="480" height="300" loading="lazy" decoding="async" alt="{{ paper.alt | escape }}">
        {% if paper.url %}</a>{% endif %}
      </div>
      <div class="paper-content">
        <h3 id="paper-{{ paper.id }}">{% if paper.url %}<a href="{{ paper.url | relative_url }}">{{ paper.title }}</a>{% else %}{{ paper.title }}{% endif %}</h3>
        <p class="paper-authors">{{ paper.authors }}</p>
        <p class="paper-venue"><em>{{ paper.venue }}</em>, {{ paper.year }}.</p>
        <p class="paper-description">{{ paper.description }}</p>
        {% if paper.links.size > 0 %}<ul class="paper-links" aria-label="Resources for {{ paper.short_title | escape }}">
          {% for link in paper.links %}<li><a href="{{ link.url | relative_url }}">[{{ link.label }}]</a></li>{% endfor %}
        </ul>{% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
  <details class="archive-details other-publications">
    <summary>More publications</summary>
    <ul class="text-publications">
      {% for paper in site.data.home.other_publications %}
      <li><h3>{% if paper.url %}<a href="{{ paper.url | relative_url }}">{{ paper.title }}</a>{% else %}{{ paper.title }}{% endif %}</h3><p>{{ paper.authors }}<br><em>{{ paper.venue }}</em>, {{ paper.year }}.</p>{% if paper.url %}<a href="{{ paper.url | relative_url }}">[Paper]</a>{% endif %}</li>
      {% endfor %}
    </ul>
  </details>
</section>

<section id="experience" aria-labelledby="experience-heading">
  <h2 id="experience-heading">Experience &amp; Education</h2>
  <ul class="experience-list">
    {% for item in site.data.home.experience %}
    <li><span class="experience-period">{{ item.period }}</span><div><h3>{{ item.institution }}</h3><p>{{ item.role }}</p>{% if item.detail %}<p class="experience-detail">{{ item.detail }}</p>{% endif %}</div></li>
    {% endfor %}
  </ul>
</section>

<section id="honors" aria-labelledby="honors-heading">
  <h2 id="honors-heading">Honors &amp; Awards</h2>
  <ul class="dated-list award-list">
    {% for item in site.data.home.awards limit: 6 %}<li><span class="year">{{ item.year }}</span><span>{{ item.text }}</span></li>{% endfor %}
  </ul>
  <details class="archive-details">
    <summary>Earlier awards</summary>
    <ul class="dated-list award-list">
      {% for item in site.data.home.awards offset: 6 %}<li><span class="year">{{ item.year }}</span><span>{{ item.text }}</span></li>{% endfor %}
    </ul>
  </details>
</section>

<section id="services" aria-labelledby="services-heading">
  <h2 id="services-heading">Academic Service</h2>
  <dl class="service-list">
    <div><dt>Associate Editor</dt><dd>Advanced Bionics (ABS); ICRA 2027</dd></div>
    <div><dt>Journal Reviewer</dt><dd>IEEE TRO, TIE, TII, TIV, TASE, IoT Journal, and Sensors Journal; Science China Information Sciences; Knowledge-Based Systems; Results in Engineering; CIT</dd></div>
    <div><dt>Conference Reviewer</dt><dd>ICRA 2026</dd></div>
  </dl>
</section>

<section id="projects" aria-labelledby="projects-heading">
  <div class="section-heading"><h2 id="projects-heading">Projects</h2><a href="{{ '/projects/' | relative_url }}">All projects ↗</a></div>
  <p class="section-note">A few hands-on robotics projects from my undergraduate years.</p>
  <ul class="project-list">
    {% for project in site.data.home.projects %}
    <li><h3>{{ project.title }}</h3><p>{{ project.description }}</p><a href="{{ project.video | relative_url }}">[Video]</a>{% if project.code %} <a href="{{ project.code }}">[Code]</a>{% endif %}</li>
    {% endfor %}
  </ul>
  <p class="archive-link"><a href="{{ '/year-archive/' | relative_url }}">Blog archive ↗</a><span aria-hidden="true">·</span><a href="{{ '/cv/' | relative_url }}">CV ↗</a></p>
</section>
