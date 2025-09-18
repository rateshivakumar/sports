# Use Node 18 for both frontend and backend
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy backend package files and install dependencies
COPY backend/package*.json ./
RUN npm install

# Copy frontend package files and install dependencies
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install

# Copy all backend and frontend code
COPY backend/ ./backend/
COPY frontend/ ./frontend/

# Build frontend
RUN cd frontend && npm run build

# Copy frontend build to backend public folder
RUN cp -r frontend/build backend/public

# Set environment
ENV NODE_ENV=production
WORKDIR /app/backend

# Expose port used by backend server
EXPOSE 3000

# Start the backend server
CMD ["node", "server.js"]
