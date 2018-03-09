FROM node:latest
LABEL key="Mateus Cerqueira"
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENV NODE_ENV=prd
ENTRYPOINT [ "npm", "start" ]
EXPOSE 3000