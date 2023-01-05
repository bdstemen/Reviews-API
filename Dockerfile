FROM node:16

WORKDIR /Reviews-API

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "./build/server/index.js"]