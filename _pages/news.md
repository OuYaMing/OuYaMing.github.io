---
layout: default
permalink: /news/
title: "News Archive"
author_profile: true
---

<h1>🔥 News Archive</h1>
<ul>
{% for item in site.data.home.news %}
  <li><em>{{ item.date }}</em>: {{ item.text }}</li>
{% endfor %}
</ul>
<p><a href="{{ '/#-news' | relative_url }}" target="_self">Back to homepage</a></p>
