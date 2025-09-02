FROM node:22-alpine

WORKDIR /opt/app

# Install build dependencies
RUN apk add --no-cache python3 make g++ libc6-compat

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies (tanpa devDependencies)
RUN npm install --production

# Copy semua file source
COPY . .

# Build Strapi admin panel
RUN npm run build

EXPOSE 1337

# Start Strapi in production
CMD ["npm", "start"]
