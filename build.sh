#!/bin/bash
export PATH="$HOME/.nodenv/bin:$PATH"
eval "$(nodenv init -)"
nodenv shell 20.19.3
npm run docs:build