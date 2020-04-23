FROM node:12

ARG APP_DIR=app

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3030

ENV TZ Europe/Kiev

CMD [ "npm", "run", "start:prod" ]