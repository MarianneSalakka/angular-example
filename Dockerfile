FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build --prod
 
# Stage 2: Serve Angular with Nginx
FROM nginx:alpine
# Tyhjennä html
RUN rm -rf /usr/share/nginx/html/*
 
# Lisää SPA routing config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Kopioi oikea Angular build (browser-kansio)
COPY --from=build /app/dist/angular-example /usr/share/nginx/html
 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]