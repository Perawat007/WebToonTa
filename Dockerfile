FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/build /app/build
# COPY --from=builder /app/build/* /app/build/
RUN npm install -g serve
EXPOSE 4000
CMD serve -p 4000 -s build
