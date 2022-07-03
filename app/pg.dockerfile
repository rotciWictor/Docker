FROM postgres:14.4-alpine
LABEL maintainer "Victor Campos <victorhscampos@gmail.com>"
ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=pass
ENV POSTGRS_DB=app
EXPOSE 5432
