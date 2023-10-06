# FROM node:16-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN yarn install
# COPY . .
# RUN yarn build

# FROM node:16-alpine
# WORKDIR /app
# COPY --from=builder /app/build /app/build
# # COPY --from=builder /app/build/* /app/build/
# RUN npm install -g serve
# EXPOSE 4000
# CMD serve -p 4000 -s build

# FROM node:16-alpine

# COPY package*.json ./

# RUN yarn install

# COPY . .

# RUN npm run build

# COPY _redirects /app/build/

# EXPOSE 4000

# CMD ["npx", "serve", "dist"]


# FROM node:16-alpine AS builder

# WORKDIR /app

# COPY . .

# RUN yarn install \
#   --prefer-offline \
#   --frozen-lockfile \
#   --non-interactive \
#   --production=false

# RUN yarn build

# RUN rm -rf node_modules && \
#   NODE_ENV=production yarn install \
#   --prefer-offline \
#   --pure-lockfile \
#   --non-interactive \
#   --production=true

# FROM node:lts

# WORKDIR /app

# COPY --from=builder /app  .

# ENV HOST 0.0.0.0
# EXPOSE 4000

# CMD [ "yarn", "start" ]

# FROM node:16-alpine AS builder

# WORKDIR /app

# COPY . .

# ENV PATH /app/node_modules/.bin:$PATH

# RUN yarn add install

# EXPOSE 4000

# CMD [ "yarn", "start" ]


FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn install

FROM node:16-alpine
WORKDIR /app
#COPY --from=builder /app/build /app/build
#COPY --from=builder /app/build/* /app/build/
COPY . .
RUN npm install -g serve
EXPOSE 4000
CMD serve -p 4000 -s build