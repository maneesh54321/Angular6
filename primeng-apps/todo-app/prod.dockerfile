FROM node:10.16.0

MAINTAINER Maneesh Singh

ENV WORK_DIR /var/www

WORKDIR ${WORK_DIR}

ENV PATH ${WORK_DIR}/node_modules/.bin:$PATH

COPY package.json ${WORK_DIR}/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . ${WORK_DIR}

EXPOSE 8080

# start app
CMD ng serve --host 0.0.0.0