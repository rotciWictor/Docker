FROM debian:stable-slim

ENV tmp_dir /tmp

RUN apt-get update \
    && apt-get install -y curl \
    && curl -sL https://deb.nodesource.com/setup_12.x | bash - \
    && apt-get install -y nodejs

RUN npm install -g json-server

RUN echo '{"list":[]}' > /tmp/test.json

ENTRYPOINT ["json-server", "--port", "9000", "--host", "0.0.0.0"]

CMD ["/tmp/test.json"]