FROM ruby:3.3-slim

# Install dependencies for GitHub Pages and Jekyll
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      build-essential \
      git \
      curl \
      nodejs \
      npm \
      && rm -rf /var/lib/apt/lists/*

# Install the github-pages gem (includes Jekyll and all Pages-compatible plugins)
RUN gem install github-pages webrick

# Working directory
WORKDIR /workspace

# Default command: keep alive or serve
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload"]
