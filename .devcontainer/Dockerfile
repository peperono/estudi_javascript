FROM mcr.microsoft.com/devcontainers/base:alpine-3.22

USER root
RUN apk add --no-cache nodejs npm

USER vscode
RUN mkdir -p /home/vscode/.npm-global \
    && npm config set prefix /home/vscode/.npm-global \
    && npm install -g @anthropic-ai/claude-code

ENV PATH="/home/vscode/.npm-global/bin:${PATH}"
