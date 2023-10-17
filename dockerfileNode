FROM node:14

WORKDIR /usr/src/app/api

COPY ./api .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]