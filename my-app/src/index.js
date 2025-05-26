FROM node:18

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080
CMD ["node", "src/index.js"]
