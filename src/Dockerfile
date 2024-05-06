FROM node:18.17.1
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8100
CMD ["ionic", "serve", "--host", "0.0.0.0"]
