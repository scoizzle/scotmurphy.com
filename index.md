---
layout: default
title: "Home"
---

<div class="row">
    <div class="col">
        <div class="card mb-4">
            <div class="card-body">
                <h1 class="card-title">Scot Murphy</h1>
                <p class="card-text text-muted">Software Engineer</p>
                <p>
                    I build things with code. This is my personal site and blog — thoughts on software engineering,
                    distributed systems, .NET, and other things I find interesting.
                </p>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col">
        <h2>Recent Posts</h2>
        <hr>
    </div>
</div>

<div class="row">
    <div class="col">
        {% for post in site.posts %}
        <div class="card mb-3">
            <div class="card-body">
                <h3 class="card-title">
                    <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
                </h3>
                <p class="card-text text-muted">
                    <time datetime="{{ post.date | date_to_xmlschema }}">
                        {{ post.date | date: "%B %d, %Y" }}
                    </time>
                </p>
                {% if post.description %}
                <p class="card-text">{{ post.description }}</p>
                {% endif %}
                {% if post.tags %}
                <p>
                    {% for tag in post.tags %}
                    <span class="badge badge-secondary">{{ tag }}</span>
                    {% endfor %}
                </p>
                {% endif %}
                <a href="{{ site.baseurl }}{{ post.url }}" class="btn btn-sm btn-outline-primary">Read more</a>
            </div>
        </div>
        {% endfor %}
    </div>
</div>
