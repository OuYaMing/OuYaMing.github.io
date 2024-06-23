---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

<!-- 下面代码遍历_publications文件夹下的论文列表 -->
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
