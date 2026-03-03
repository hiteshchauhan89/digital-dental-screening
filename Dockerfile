# Use Node.js LTS version
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy all app files
COPY . .

# Expose the port (optional)
EXPOSE 8080

# Start the app
CMD ["node", "index.js"]
