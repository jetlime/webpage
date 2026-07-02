# Personnal webpage

`sudo apt install ruby-dev ruby-bundler nodejs`

```bash
bundle install
bundle config set --local path 'vendor/bundle'
bundle exec jekyll serve -l -H localhost
```

It generates the HTML and serves it from `localhost:4000`
