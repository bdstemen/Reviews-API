FROM node:16

WORKDIR /Reviews-API

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "./build/server/index.js"]