---
layout: default
permalink: /
title: ""
excerpt: "Yaming Ou (欧亚明), Assistant Researcher at UCAS. Robot perception, localization, navigation, and embodied manipulation."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<p><span class="anchor" id="about-me"></span></p>

<p>Hi! Welcome to my homepage. I’m <strong>Yaming Ou (欧亚明)</strong>, an Assistant Researcher at the Tactile Perception and Embodied Manipulation Laboratory, School of Artificial Intelligence, University of Chinese Academy of Sciences (UCAS), working with Prof. <a href="https://people.ucas.ac.cn/~chenglong?language=en">Long Cheng</a> (IEEE Fellow). I received my Ph.D. from the C<sup>2</sup>DL Lab, Institute of Automation, Chinese Academy of Sciences (CASIA), and UCAS, supervised by Prof. <a href="http://www.ia.cas.cn/rcdw/yjy/202406/t20240621_7194305.html">Chao Zhou</a> and Assoc. Prof. <a href="https://people.ucas.edu.cn/~fanjunfeng">Junfeng Fan</a>.</p>
<p>I was a visiting scholar at the Robotics Institute, Carnegie Mellon University, working with Prof. <a href="https://scholar.google.com/citations?hl=zh-CN&amp;user=4fvo61oAAAAJ">Howie Choset</a> in the Biorobotics Lab from March 2025 to March 2026. Previously, I received my B.E. in Robotics Engineering from Southeast University (ranked 2/34; Outstanding Graduate Award).</p>
<p>My research interests include <em>SLAM, cross-media UAVs, spatial intelligence, and tactile-based mobile manipulation</em>. I develop robotic systems that perceive, localize, navigate, and operate in challenging real-world environments. Feel free to <a href="mailto:{{ site.author.email }}">contact me</a> to discuss robotics and research collaborations.</p>

<span class="anchor" id="news"></span>
<h1 id="-news">🔥 News</h1>
<ul>
{% assign featured_news = site.data.home.news | where: 'featured', true %}
{% for item in featured_news limit: 8 %}
  <li><em>{{ item.label }}</em>: &nbsp;{{ item.text }}</li>
{% endfor %}
</ul>
<p><a href="{{ '/news/' | relative_url }}">Earlier news</a></p>

<span class="anchor" id="publications"></span>
<h1 id="-publications">📝 Publications</h1>
<p><sup>*</sup> Corresponding author; <sup>†</sup> equal contribution. See also <a href="{{ site.author.googlescholar }}">Google Scholar</a>.</p>

{% for paper in site.data.home.publications %}
<div class="paper-box"><div class="paper-box-image"><div><div class="badge">{{ paper.badge }}</div><a href="{{ paper.image | relative_url }}" target="_blank" rel="noopener"><img src="{{ paper.image | relative_url }}" alt="{{ paper.alt | escape }}" width="100%" loading="lazy"></a></div></div>
<div class="paper-box-text">
  <p>{% if paper.url %}<a href="{{ paper.url | relative_url }}">{{ paper.title }}</a>{% else %}{{ paper.title }}{% endif %}</p>
  <p>{{ paper.authors }}. {{ paper.venue }} (<strong>{{ paper.short_venue }}</strong>), {{ paper.year }}. {% for link in paper.links %}<a href="{{ link.url | relative_url }}">[{{ link.label }}]</a> {% endfor %}</p>
</div>
</div>
{% endfor %}

<h2>Other Transactions Publications</h2>
<ul>
{% for paper in site.data.home.other_publications %}
  <li>{% if paper.url %}<a href="{{ paper.url | relative_url }}">{{ paper.title }}</a>{% else %}{{ paper.title }}{% endif %}, {{ paper.authors }}. {{ paper.venue }}, {{ paper.year }}.{% if paper.url %} <a href="{{ paper.url | relative_url }}">[Paper]</a>{% endif %}</li>
{% endfor %}
</ul>

<span class="anchor" id="honors"></span>
<h1 id="-honors-and-awards">🎖 Honors and Awards</h1>
<ul>
{% for item in site.data.home.awards %}
  <li><em>{{ item.year }}</em>: {{ item.text }}</li>
{% endfor %}
</ul>

<span class="anchor" id="services"></span>
<h1 id="-services">📖 Services</h1>
<ul>
  <li>Associate Editor of Advanced Bionics (ABS)</li>
  <li>Associate Editor of ICRA 2027</li>
  <li>Reviewer of IEEE TRO, TIE, TII, TIV, TASE, IoT Journal, and Sensors Journal</li>
  <li>Reviewer of Science China Information Sciences, Knowledge-Based Systems, Results in Engineering, and CIT</li>
  <li>Reviewer of ICRA 2026</li>
</ul>

<span class="anchor" id="experience"></span>
<h1 id="-educations">🎓 Educations</h1>
<ul>
  <li><em>2021.09 - 2026.06</em>, Institute of Automation, Chinese Academy of Sciences (CASIA), and School of Artificial Intelligence, University of Chinese Academy of Sciences (UCAS), Ph.D.</li>
  <li><em>2017.09 - 2021.06</em>, Southeast University, B.E. in Robotics Engineering. Materials Science and Engineering (2017–2018); School of Automation (2018–2021).</li>
</ul>
<h2>Experiences</h2>
<ul>
  <li><em>2026.06 - 2029.06</em>, School of Artificial Intelligence, University of Chinese Academy of Sciences, Research Fellow.</li>
  <li><em>2025.03 - 2026.03</em>, Robotics Institute, Carnegie Mellon University, Visiting Scholar.</li>
</ul>

<span class="anchor" id="projects"></span>
<h1 id="-projects">💻 Projects</h1>
<ul>
{% for project in site.data.home.projects %}
  <li><strong>{{ project.title }}</strong>. {{ project.description }} <a href="{{ project.video | relative_url }}">[Video]</a>{% if project.code %} <a href="{{ project.code }}">[Code]</a>{% endif %}</li>
{% endfor %}
</ul>
<p><a href="{{ '/projects/' | relative_url }}">More projects</a> · <a href="{{ '/cv/' | relative_url }}">CV</a> · <a href="{{ '/year-archive/' | relative_url }}">Blog archive</a></p>
