FROM node:alpine

WORKDIR /user/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 23412

CMD [ "npm", "run", "dev" ]