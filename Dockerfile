FROM node:lts

WORKDIR /app

COPY package.json ./

RUN npm install pm2 -g

RUN yarn install

COPY . .

RUN yarn build

RUN pwd && ls -al
RUN cd dist && ls -al
#EXPOSE 3001
CMD ["pm2-runtime", "start", "dist/src/main.js"]
