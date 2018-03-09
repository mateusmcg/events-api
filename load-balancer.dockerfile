FROM nginx:latest
LABEL key="Mateus Cerqueira"
COPY ./load-balancer/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]